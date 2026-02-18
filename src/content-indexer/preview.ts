#!/usr/bin/env tsx
import { config as dotenvConfig } from "dotenv";
import path from "path";

import { uploadMdxFile } from "@/content-indexer/uploaders/preview-mdx.ts";
import { runIndexAndUpload } from "@/content-indexer/utils/preview-index.ts";
import { buildPreviewUrl } from "@/content-indexer/utils/preview-url.ts";
import { startWatchers } from "@/content-indexer/utils/preview-watchers.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env") });

const parseArgs = () => {
  const args = process.argv.slice(2);

  const branch = args.find((arg) => arg.startsWith("--branch="))?.split("=")[1];
  const uploadFile = args
    .find((arg) => arg.startsWith("--upload-file="))
    ?.split("=")
    .slice(1)
    .join("=");
  const reindex = args.includes("--reindex");

  if (!branch) {
    throw new Error("--branch is required");
  }

  if (branch === "main") {
    throw new Error("Cannot preview the main branch. Use a feature branch.");
  }

  return { branch, uploadFile, reindex };
};

const main = async () => {
  try {
    const { branch, uploadFile, reindex } = parseArgs();

    // Mode: upload single file (fast path watcher)
    if (uploadFile) {
      const redis = getRedis();
      const filePath = uploadFile.replace(/^fern\//, "");
      await uploadMdxFile(filePath, branch, redis);
      return;
    }

    // Mode: re-index (slow path watcher)
    if (reindex) {
      console.info(`\n🔄 Re-indexing for branch: ${branch}\n`);
      await runIndexAndUpload(branch);
      return;
    }

    // Mode: initial setup + watchers
    console.info("\n🚀 Preview Mode");
    console.info("================");
    console.info(`   Branch: ${branch}`);

    await runIndexAndUpload(branch);

    const previewUrl = process.env.DOCS_SITE_URL;
    const previewSecret = process.env.PREVIEW_SECRET;

    if (!previewUrl || !previewSecret) {
      console.warn(
        "\n⚠️  Set DOCS_SITE_URL and PREVIEW_SECRET in .env to get a preview URL",
      );
    } else {
      const url = buildPreviewUrl(branch, previewUrl, previewSecret);
      console.info(`\n🔗 Preview URL:\n   ${url}`);
    }

    startWatchers(branch);
  } catch (error) {
    console.error("\n❌ Error: ", error);
    process.exit(1);
  }
};

void main();
