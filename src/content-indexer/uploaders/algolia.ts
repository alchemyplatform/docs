import { algoliasearch } from "algoliasearch";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia.ts";
import type { IndexerType } from "@/content-indexer/types/indexer.ts";
import { truncateRecord } from "@/content-indexer/utils/truncate-record.ts";

const ALGOLIA_INDEX_NAME_BASE = "alchemy_docs";

/**
 * Builds a unified Algolia index name with branch scoping.
 * Pattern: {branchId}_{baseName}
 *
 * All indexer types (docs, sdk, changelog) write to the same index,
 * differentiated by namespace-prefixed objectIDs (e.g., "docs:abc123").
 *
 * Examples:
 * - main_alchemy_docs (main branch, all content types)
 * - feature-xyz_alchemy_docs (feature branch, all content types)
 */
const buildIndexName = (base: string, branchId: string): string => {
  return `${branchId}_${base}`;
};

/**
 * Uploads records to Algolia using delete-then-upload strategy with indexerType filtering.
 *
 * Process:
 * 1. Delete all records matching the indexer type (e.g., indexerType:docs)
 * 2. Upload new records with the same indexerType
 * 3. Measure and log downtime (gap when records are unavailable)
 *
 * This approach allows multiple indexers to write to a single unified index,
 * with each indexer managing its own records via the indexerType field.
 *
 * @param records - Algolia records to upload (must have indexerType field)
 * @param options - Configuration options
 * @param options.indexerType - Type of indexer ("docs", "sdk", or "changelog")
 * @param options.branchId - Branch identifier for index naming (e.g., "main", "branch-abc")
 */
export const uploadToAlgolia = async (
  records: AlgoliaRecord[],
  options: {
    indexerType: IndexerType;
    branchId: string;
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

  const indexName = buildIndexName(ALGOLIA_INDEX_NAME_BASE, options.branchId);
  const client = algoliasearch(appId, adminKey);

  console.info(
    `📤 Uploading ${records.length} records to Algolia (${indexName}, indexerType:${options.indexerType})...`,
  );

  // Truncate records to fit Algolia's 100KB limit
  const truncatedRecords = records.map(truncateRecord);

  try {
    // 1. Delete all records with matching indexerType to ensure no orphaned records
    await client.deleteBy({
      indexName,
      deleteByParams: {
        filters: `indexerType:${options.indexerType}`,
      },
    });
    const deleteEnd = performance.now();

    // 2. Upload new records
    const uploadStart = performance.now();
    await client.saveObjects({
      indexName,
      objects: truncatedRecords as unknown as Array<Record<string, unknown>>,
    });

    // 3. Calculate downtime (gap when records were unavailable)
    const downtime = uploadStart - deleteEnd;

    console.info(
      `   ✓ Complete (downtime: ${downtime.toFixed(0)}ms - records unavailable during delete→upload gap)`,
    );

    // Warn if downtime is significant
    if (downtime > 5000) {
      console.warn(
        `   ⚠️  High downtime (${(downtime / 1000).toFixed(1)}s). Consider atomic index swap for zero-downtime updates.`,
      );
    }
  } catch (error) {
    console.error("❌ Failed to upload to Algolia:", error);
    throw error;
  }
};
