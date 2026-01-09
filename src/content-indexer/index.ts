#!/usr/bin/env tsx
import path from "path";

import { buildChangelogIndex } from "@/content-indexer/indexers/changelog.js";
import { buildDocsContentIndex } from "@/content-indexer/indexers/main.js";
import type { IndexerResult } from "@/content-indexer/types/indexer.js";
import { uploadToAlgolia } from "@/content-indexer/uploaders/algolia.js";
import { storeToRedis } from "@/content-indexer/uploaders/redis.js";
import { DOCS_REPO, WALLET_REPO } from "@/content-indexer/utils/github.js";

// ============================================================================
// CLI Argument Parsing
// ============================================================================

const parseArgs = () => {
  const args = process.argv.slice(2);

  const indexer =
    args.find((arg) => arg.startsWith("--indexer="))?.split("=")[1] || "main";
  const mode =
    args.find((arg) => arg.startsWith("--mode="))?.split("=")[1] ||
    "production";
  const branch =
    args.find((arg) => arg.startsWith("--branch="))?.split("=")[1] || "main";

  // Validate arguments
  if (!["main", "sdk", "changelog"].includes(indexer)) {
    throw new Error(
      `Invalid indexer: ${indexer}. Must be 'main', 'sdk', or 'changelog'`,
    );
  }

  if (!["preview", "production"].includes(mode)) {
    throw new Error(`Invalid mode: ${mode}. Must be 'preview' or 'production'`);
  }

  return {
    indexer: indexer as "main" | "sdk" | "changelog",
    mode: mode as "preview" | "production",
    branchId: branch,
  };
};

// ============================================================================
// Indexer Runner
// ============================================================================

const buildIndexResults = async (
  indexerType: "main" | "sdk" | "changelog",
  branchId: string,
  mode: "preview" | "production" = "production",
): Promise<IndexerResult> => {
  switch (indexerType) {
    case "changelog":
      return buildChangelogIndex({
        localBasePath: path.join(process.cwd(), "fern/changelog"),
        branchId,
      });
    case "main":
      return buildDocsContentIndex({
        source: {
          type: "filesystem",
          basePath: path.join(process.cwd(), "fern"),
        },
        repoConfig: DOCS_REPO,
        branchId,
        mode,
      });
    case "sdk": {
      const result = await buildDocsContentIndex({
        source: { type: "github", repoConfig: WALLET_REPO },
        repoConfig: WALLET_REPO,
        branchId,
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
  indexerType: "main" | "sdk" | "changelog",
  branchId: string,
  mode?: "preview" | "production",
) => {
  console.info(
    `\n🔍 Running ${indexerType.toUpperCase()} indexer${indexerType === "main" && mode ? ` (${mode} mode)` : ""} (branch: ${branchId})\n`,
  );

  const { pathIndex, algoliaRecords, navigationTrees } =
    await buildIndexResults(indexerType, branchId, mode);

  const shouldUploadToAlgolia = mode !== "preview";

  // Build upload promises array
  const uploadPromises = [
    storeToRedis(pathIndex, navigationTrees, { branchId, indexerType }),
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
