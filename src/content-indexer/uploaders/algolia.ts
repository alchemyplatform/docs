import { algoliasearch } from "algoliasearch";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia";
import { truncateRecord } from "@/content-indexer/utils/truncate-record";

/**
 * Uploads records to Algolia using atomic index swap for zero-downtime updates.
 *
 * Process:
 * 1. Upload all records to a temporary index
 * 2. Copy settings/synonyms from production index (if exists)
 * 3. Atomically swap temp index to production
 *
 * This ensures users never see empty search results during updates.
 *
 * @param records - Algolia records to upload
 * @param options - Configuration options
 * @param options.indexerType - Type of indexer ("main", "sdk", or "changelog")
 */
export const uploadToAlgolia = async (
  records: AlgoliaRecord[],
  options: {
    indexerType: "main" | "sdk" | "changelog";
  },
): Promise<void> => {
  const appId = process.env.ALGOLIA_APP_ID;
  const adminKey = process.env.ALGOLIA_ADMIN_API_KEY;

  if (!appId || !adminKey) {
    console.warn("⚠️  Algolia credentials not found. Skipping Algolia upload.");
    console.warn(
      "   Set ALGOLIA_APP_ID and ALGOLIA_ADMIN_API_KEY to enable search indexing.",
    );
    return;
  }

  // Determine target index name based on indexer type
  const indexEnvMap = {
    main: process.env.ALGOLIA_INDEX_NAME,
    sdk: process.env.ALGOLIA_WALLET_INDEX_NAME,
    changelog: process.env.ALGOLIA_CHANGELOG_INDEX_NAME,
  };

  const targetIndexName = indexEnvMap[options.indexerType];

  if (!targetIndexName) {
    const envVarMap = {
      main: "ALGOLIA_INDEX_NAME",
      sdk: "ALGOLIA_WALLET_INDEX_NAME",
      changelog: "ALGOLIA_CHANGELOG_INDEX_NAME",
    };
    console.warn(
      `⚠️  ${envVarMap[options.indexerType]} not set. Skipping Algolia upload.`,
    );
    return;
  }

  const client = algoliasearch(appId, adminKey);
  const tempIndexName = `${targetIndexName}_temp`;

  console.info(
    `📤 Uploading ${records.length} records to Algolia (${targetIndexName})...`,
  );

  // Truncate records to fit Algolia's 100KB limit
  const truncatedRecords = records.map(truncateRecord);

  try {
    // 1. Upload all records to temporary index
    await client.saveObjects({
      indexName: tempIndexName,
      objects: truncatedRecords as unknown as Array<Record<string, unknown>>,
    });

    console.info(`   ✓ Uploaded ${records.length} records to ${tempIndexName}`);

    // 2. Copy settings/synonyms from production index (if it exists)
    try {
      await client.operationIndex({
        indexName: targetIndexName,
        operationIndexParams: {
          operation: "copy",
          destination: tempIndexName,
          scope: ["settings", "synonyms", "rules"],
        },
      });
      console.info("   ✓ Copied settings from production index");
    } catch (_error) {
      console.info(
        "   ℹ️  No existing production index found (might be first run)",
      );
    }

    // 3. Atomic swap: move temp index to production
    console.info(`   🔄 Swapping ${tempIndexName} → ${targetIndexName}...`);
    await client.operationIndex({
      indexName: tempIndexName,
      operationIndexParams: {
        operation: "move",
        destination: targetIndexName,
      },
    });

    console.info(`✅ Successfully updated Algolia index: ${targetIndexName}`);
  } catch (error) {
    console.error("❌ Failed to upload to Algolia:", error);
    throw error;
  }
};
