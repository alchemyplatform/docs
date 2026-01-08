import { algoliasearch } from "algoliasearch";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia";
import { truncateRecord } from "@/content-indexer/utils/truncate-record";

/**
 * Uploads Algolia records using atomic index swap for zero-downtime updates.
 *
 * Process:
 * 1. Upload all records to a temporary index
 * 2. Copy settings/synonyms from production index (if exists)
 * 3. Atomically swap temp index to production
 *
 * This ensures users never see empty search results during updates.
 */
export const uploadToAlgolia = async (
  records: AlgoliaRecord[],
  options: { isWalletMode: boolean },
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

  const targetIndexName = options.isWalletMode
    ? process.env.ALGOLIA_WALLET_INDEX_NAME
    : process.env.ALGOLIA_INDEX_NAME;

  if (!targetIndexName) {
    console.warn(
      "⚠️  Algolia index name not configured. Skipping Algolia upload.",
    );
    console.warn(
      `   Set ${options.isWalletMode ? "ALGOLIA_WALLET_INDEX_NAME" : "ALGOLIA_INDEX_NAME"} environment variable.`,
    );
    return;
  }

  const client = algoliasearch(appId, adminKey);

  const tempIndexName = `${targetIndexName}_temp`;

  console.info(
    `📤 Uploading ${records.length} records to Algolia (${targetIndexName})...`,
  );

  // Truncate records to fit Algolia's 100KB limit (measures entire JSON payload)
  const truncatedRecords = records.map(truncateRecord);

  try {
    // 1. Upload all records to temporary index
    await client.saveObjects({
      indexName: tempIndexName,
      // Algolia SDK expects index signature, but we want to be more precise about the type
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
      // Production index might not exist on first run - this is fine
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
