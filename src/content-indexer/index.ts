#!/usr/bin/env tsx
import path from "path";

import { buildChangelogIndex } from "@/content-indexer/indexers/changelog";
import { buildMainContentIndex } from "@/content-indexer/indexers/main";
import { buildSDKContentIndex } from "@/content-indexer/indexers/sdk";
import { uploadToAlgolia } from "@/content-indexer/uploaders/algolia";
import { storeToRedis } from "@/content-indexer/uploaders/redis";
import { DOCS_REPO, WALLET_REPO } from "@/content-indexer/utils/github";

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
// Main Indexer
// ============================================================================

const runMainIndexer = async (
  mode: "preview" | "production",
  branchId: string,
) => {
  console.info(
    `\n🔍 Running MAIN indexer (${mode} mode, branch: ${branchId})\n`,
  );

  const { pathIndex, navigationTrees, algoliaRecords } =
    await buildMainContentIndex({
      mode,
      localBasePath: path.join(process.cwd(), "fern"),
      branchId,
      repoConfig: DOCS_REPO,
    });

  console.info("\n📤 Uploading to Redis and Algolia...");

  await Promise.all([
    storeToRedis(pathIndex, navigationTrees, {
      branchId,
      pathIndexSuffix: "main",
    }),
    uploadToAlgolia(algoliaRecords, { indexerType: "main" }),
  ]);

  console.info(
    `\n✅ Main indexer completed! (${Object.keys(pathIndex).length} routes, ${algoliaRecords.length} records)`,
  );
};

// ============================================================================
// SDK Indexer
// ============================================================================

const runSDKIndexer = async (branchId: string) => {
  console.info(`\n🔍 Running SDK indexer (branch: ${branchId})\n`);

  const { pathIndex, walletsNavTree, algoliaRecords } =
    await buildSDKContentIndex({
      sdkRepoConfig: WALLET_REPO,
      branchId,
    });

  console.info("\n📤 Uploading to Redis and Algolia...");

  await Promise.all([
    storeToRedis(
      pathIndex,
      { wallets: walletsNavTree },
      {
        branchId,
        pathIndexSuffix: "sdk-refs",
        mergeSDKIntoWallets: true,
      },
    ),
    uploadToAlgolia(algoliaRecords, { indexerType: "sdk" }),
  ]);

  console.info(
    `\n✅ SDK indexer completed! (${Object.keys(pathIndex).length} routes, ${algoliaRecords.length} records)`,
  );
};

// ============================================================================
// Changelog Indexer
// ============================================================================

const runChangelogIndexer = async (branchId: string) => {
  console.info(`\n🔍 Running CHANGELOG indexer (branch: ${branchId})\n`);

  const { pathIndex, algoliaRecords } = await buildChangelogIndex({
    localBasePath: path.join(process.cwd(), "fern/changelog"),
    branchId,
  });

  console.info("\n📤 Uploading to Redis and Algolia...");

  await Promise.all([
    storeToRedis(pathIndex, undefined, {
      branchId,
      pathIndexSuffix: "changelog",
    }),
    uploadToAlgolia(algoliaRecords, { indexerType: "changelog" }),
  ]);

  console.info(
    `\n✅ Changelog indexer completed! (${Object.keys(pathIndex).length} routes, ${algoliaRecords.length} records)`,
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

    switch (indexer) {
      case "main":
        await runMainIndexer(mode, branchId);
        break;
      case "sdk":
        await runSDKIndexer(branchId);
        break;
      case "changelog":
        await runChangelogIndexer(branchId);
        break;
    }
  } catch (error) {
    console.error("\n❌ Error:", error);
    process.exit(1);
  }
};

void main();
