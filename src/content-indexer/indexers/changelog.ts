import type { AlgoliaRecord } from "@/content-indexer/types/algolia.js";
import type { PathIndex } from "@/content-indexer/types/pathIndex.js";

export interface ChangelogIndexerConfig {
  localBasePath: string; // Path to fern/changelog/ directory
  branchId: string;
}

/**
 * Changelog indexer for changelog entries.
 * Simpler than main indexer - no nav trees, just path index and Algolia.
 *
 * Updates:
 * - {branch}/path-index:changelog
 * - alchemy_docs_changelog Algolia index
 */
export const buildChangelogIndex = async (
  config: ChangelogIndexerConfig,
): Promise<{
  pathIndex: PathIndex;
  algoliaRecords: AlgoliaRecord[];
}> => {
  console.info(`🔍 Building changelog index (branch: ${config.branchId})...`);

  // TODO: Implement changelog indexing
  // For now, return empty results
  // Will be implemented when we add changelog support

  console.warn(
    "⚠️  Changelog indexing not yet implemented - returning empty results",
  );

  return {
    pathIndex: {},
    algoliaRecords: [],
  };
};
