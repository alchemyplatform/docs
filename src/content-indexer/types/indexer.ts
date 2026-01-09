import type { AlgoliaRecord } from "@/content-indexer/types/algolia.js";
import type { NavigationTreesByTab } from "@/content-indexer/types/navigation.js";
import type { PathIndex } from "@/content-indexer/types/pathIndex.js";

/**
 * Standard result structure returned by all indexers.
 */
export interface IndexerResult {
  pathIndex: PathIndex;
  algoliaRecords: AlgoliaRecord[];
  navigationTrees: NavigationTreesByTab | undefined;
}
