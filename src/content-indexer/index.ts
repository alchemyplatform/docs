#!/usr/bin/env tsx
import { config as dotenvConfig } from "dotenv";
import path from "path";

import { buildChangelogIndex } from "@/content-indexer/indexers/changelog.ts";
import { buildDocsContentIndex } from "@/content-indexer/indexers/main.ts";
import type {
  IndexerResult,
  IndexerType,
} from "@/content-indexer/types/indexer.ts";
import { uploadToAlgolia } from "@/content-indexer/uploaders/algolia.ts";
import { storeToRedis } from "@/content-indexer/uploaders/redis.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env"), quiet: true });

// ============================================================================
// CLI Argument Parsing
// ============================================================================

const parseArgs = () => {
  const args = process.argv.slice(2);

  const indexer =
    args.find((arg) => arg.startsWith("--indexer="))?.split("=")[1] || "docs";
  const mode =
    args.find((arg) => arg.startsWith("--mode="))?.split("=")[1] ||
    "production";
  const branch =
    args.find((arg) => arg.startsWith("--branch="))?.split("=")[1] || "main";

  // Validate arguments
  if (!["docs", "sdk", "changelog"].includes(indexer)) {
    throw new Error(
      `Invalid indexer: ${indexer}. Must be 'docs', 'sdk', or 'changelog'`,
    );
  }

  if (!["preview", "production"].includes(mode)) {
    throw new Error(`Invalid mode: ${mode}. Must be 'preview' or 'production'`);
  }

  return {
    indexer: indexer as IndexerType,
    mode: mode as "preview" | "production",
    branchId: branch,
  };
};

// ============================================================================
// Indexer Runner
// ============================================================================

const buildIndexResults = async (
  indexerType: IndexerType,
  branchId: string,
  mode: "preview" | "production" = "production",
): Promise<IndexerResult> => {
  switch (indexerType) {
    case "changelog":
      return buildChangelogIndex({
        localBasePath: path.join(process.cwd(), "content/changelog"),
        branchId,
      });
    case "docs":
      return buildDocsContentIndex({
        source: {
          type: "filesystem",
          basePath: path.join(process.cwd(), "content"),
          specsDir: path.join(process.cwd(), "content", "api-specs"),
        },
        branchId,
        indexerType: "docs",
        mode,
      });
    case "sdk": {
      const result = await buildDocsContentIndex({
        source: {
          type: "filesystem",
          basePath: path.join(process.cwd(), "aa-sdk-docs/docs"),
          stripPathPrefix: "wallets/",
        },
        stripPathPrefix: "wallets/",
        branchId,
        indexerType: "sdk",
      });
      return {
        ...result,
        navigationTrees: {
          wallets: result.navigationTrees?.wallets || [],
        },
      };
    }
  }
};

const runIndexer = async (
  indexerType: IndexerType,
  branchId: string,
  mode?: "preview" | "production",
) => {
  console.info(
    `\n🔍 Running ${indexerType.toUpperCase()} indexer${indexerType === "docs" && mode ? ` (${mode} mode)` : ""} (branch: ${branchId})\n`,
  );

  const { pathIndex, algoliaRecords, navigationTrees } =
    await buildIndexResults(indexerType, branchId, mode);

  const shouldUploadToAlgolia = mode !== "preview";

  // For SDK indexer, pass the source branch ref so storeToRedis can determine
  // which path prefixes this run owns (for merging with other branches' routes).
  const sourceBranch =
    indexerType === "sdk" ? process.env.SDK_SOURCE_BRANCH : undefined;

  // Build upload promises array
  const uploadPromises: Promise<void>[] = [
    storeToRedis(pathIndex, navigationTrees, {
      branchId,
      indexerType,
      sourceBranch,
    }),
  ];

  if (shouldUploadToAlgolia) {
    uploadPromises.push(
      uploadToAlgolia(algoliaRecords, { indexerType, branchId }),
    );
    console.info("\n📤 Uploading to Redis and Algolia...");
  } else {
    console.info("\n📤 Uploading to Redis...");
    console.info(
      "   ℹ️  Skipping Algolia upload (preview mode uses prod search)",
    );
  }

  await Promise.all(uploadPromises);

  console.info(
    `\n✅ ${indexerType.charAt(0).toUpperCase() + indexerType.slice(1)} indexer completed! (${Object.keys(pathIndex).length} routes${shouldUploadToAlgolia ? `, ${algoliaRecords.length} records` : ""})`,
  );
};

// ============================================================================
// Main Entry Point
// ============================================================================

const main = async () => {
  try {
    const { indexer, mode, branchId } = parseArgs();

    console.info("🚀 Content Indexer");
    console.info("==================");
    console.info(`   Indexer: ${indexer}`);
    console.info(`   Mode: ${mode}`);
    console.info(`   Branch: ${branchId}`);

    await runIndexer(indexer, branchId, mode);
  } catch (error) {
    console.error("\n❌ Error:", error);
    process.exit(1);
  }
};

void main();
