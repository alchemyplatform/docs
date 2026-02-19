#!/usr/bin/env tsx
import { config as dotenvConfig } from "dotenv";
import path from "path";

import { uploadChangelogFile } from "@/content-indexer/uploaders/preview-changelog.ts";
import { uploadMdxFile } from "@/content-indexer/uploaders/preview-mdx.ts";
import {
  runChangelogIndexAndUpload,
  runIndexAndUpload,
} from "@/content-indexer/utils/preview-index.ts";
import { buildPreviewUrl } from "@/content-indexer/utils/preview-url.ts";
import { startWatchers } from "@/content-indexer/utils/preview-watchers.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env"), quiet: true });

const parseArgs = () => {
  const args = process.argv.slice(2);

  const branch = args
    .find((arg) => arg.startsWith("--branch="))
    ?.replace(/^--branch=/, "");
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

      // Changelog files: different key prefix + reindex logic
      if (filePath.startsWith("changelog/") && filePath.endsWith(".md")) {
        const filename = path.basename(filePath);
        const { reindexNeeded } = await uploadChangelogFile(
          filename,
          branch,
          redis,
        );
        if (reindexNeeded) {
          console.info("  🔄 New/deleted changelog file, re-indexing...");
          await runChangelogIndexAndUpload(branch);
        }
        return;
      }

      // MDX files (existing behavior)
      const { reindexNeeded } = await uploadMdxFile(filePath, branch, redis);

      if (reindexNeeded) {
        console.info(
          "  🔄 Routing-relevant frontmatter changed, re-indexing...",
        );
        await runIndexAndUpload(branch);
      }
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
    const previewSecret = process.env.DOCS_SITE_API_KEY;

    if (!previewUrl || !previewSecret) {
      console.warn(
        "\n⚠️  Set DOCS_SITE_URL and DOCS_SITE_API_KEY in .env to get a preview URL",
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
