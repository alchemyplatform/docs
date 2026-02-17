#!/usr/bin/env tsx
import { spawn } from "child_process";
import crypto from "crypto";
import path from "path";

import { config as dotenvConfig } from "dotenv";

import { buildDocsContentIndex } from "@/content-indexer/indexers/main.ts";
import { storeToRedis } from "@/content-indexer/uploaders/redis.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

import {
  uploadChangedMdxFiles,
  uploadMdxFile,
} from "./uploaders/preview-mdx.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env") });

// ============================================================================
// CLI Argument Parsing
// ============================================================================

const parseArgs = () => {
  const args = process.argv.slice(2);

  const branch = args
    .find((arg) => arg.startsWith("--branch="))
    ?.split("=")[1];
  const uploadFile = args
    .find((arg) => arg.startsWith("--upload-file="))
    ?.split("=")
    .slice(1)
    .join("="); // handle paths with = in them
  const reindex = args.includes("--reindex");

  if (!branch) {
    throw new Error("--branch is required");
  }

  if (branch === "main") {
    throw new Error("Cannot preview the main branch. Use a feature branch.");
  }

  return { branch, uploadFile, reindex };
};

// ============================================================================
// Index + Upload
// ============================================================================

const runIndexAndUpload = async (branch: string): Promise<void> => {
  console.info("\n🔍 Running content indexer (preview mode)...\n");

  const { pathIndex, navigationTrees } = await buildDocsContentIndex({
    source: {
      type: "filesystem",
      basePath: path.join(process.cwd(), "fern"),
    },
    branchId: branch,
    indexerType: "docs",
    mode: "preview",
  });

  // Store path index + nav trees to Redis
  await storeToRedis(pathIndex, navigationTrees, {
    branchId: branch,
    indexerType: "docs",
  });

  // Upload only MDX files that differ from main
  const redis = getRedis();
  await uploadChangedMdxFiles(pathIndex, branch, redis);
};

// ============================================================================
// Watchers
// ============================================================================

const startWatchers = (branch: string): void => {
  console.info("\n👀 Starting file watchers...\n");

  // Fast path: MDX file changes → upload single file
  const fastWatcher = spawn(
    "npx",
    [
      "onchange",
      "fern/**/*.{mdx,md}",
      "--",
      "tsx",
      "src/content-indexer/preview.ts",
      `--branch=${branch}`,
      "--upload-file={{changed}}",
    ],
    { stdio: "inherit", shell: true },
  );

  // Slow path: structural changes → full re-index
  const slowWatcher = spawn(
    "npx",
    [
      "onchange",
      "fern/docs.yml",
      "src/openapi/**",
      "src/openrpc/**",
      "--",
      "tsx",
      "src/content-indexer/preview.ts",
      `--branch=${branch}`,
      "--reindex",
    ],
    { stdio: "inherit", shell: true },
  );

  const cleanup = () => {
    fastWatcher.kill();
    slowWatcher.kill();
    process.exit(0);
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  console.info("  📝 Watching fern/**/*.{mdx,md} for content changes (fast path)");
  console.info("  📋 Watching fern/docs.yml, src/openapi/**, src/openrpc/** for structural changes (slow path)");
  console.info("\n  Press Ctrl+C to stop.\n");
};

// ============================================================================
// Main
// ============================================================================

const main = async () => {
  try {
    const { branch, uploadFile, reindex } = parseArgs();

    // Mode: upload single file
    if (uploadFile) {
      const redis = getRedis();
      // Strip fern/ prefix if present
      const filePath = uploadFile.replace(/^fern\//, "");
      await uploadMdxFile(filePath, branch, redis);
      return;
    }

    // Mode: re-index (structural change)
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

    // Print preview URL with HMAC signature
    const previewUrl = process.env.DOCS_SITE_PREVIEW_URL;
    const previewSecret = process.env.PREVIEW_SECRET;

    if (previewUrl && previewSecret) {
      const sig = crypto
        .createHmac("sha256", previewSecret)
        .update(branch)
        .digest("hex");
      console.info(
        `\n🔗 Preview URL:\n   ${previewUrl}/api/preview/start?branch=${encodeURIComponent(branch)}&sig=${sig}`,
      );
    } else {
      console.warn(
        "\n⚠️  Set DOCS_SITE_PREVIEW_URL and PREVIEW_SECRET in .env to get a preview URL",
      );
    }

    startWatchers(branch);
  } catch (error) {
    console.error("\n❌ Error:", error);
    process.exit(1);
  }
};

void main();
