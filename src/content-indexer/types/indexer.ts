import type { AlgoliaRecord } from "@/content-indexer/types/algolia.ts";
import type { NavigationTreesByTab } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";

/**
 * Standard result structure returned by all indexers.
 */
export interface IndexerResult {
  pathIndex: PathIndex;
  algoliaRecords: AlgoliaRecord[];
  navigationTrees: NavigationTreesByTab | undefined;
}
