import type { SpecCacheEntry } from "@/content-indexer/core/content-cache.ts";
import type { AlgoliaRecord } from "@/content-indexer/types/algolia.ts";
import type { NavigationTreesByTab } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";

/**
 * Content indexer types.
 * - docs: Main documentation content
 * - sdk: SDK reference documentation
 * - changelog: Changelog entries
 */
export type IndexerType = "docs" | "sdk" | "changelog";

/**
 * Standard result structure returned by all indexers.
 */
export interface IndexerResult {
  pathIndex: PathIndex;
  algoliaRecords: AlgoliaRecord[];
  navigationTrees: NavigationTreesByTab | undefined;
  specs?: Map<string, SpecCacheEntry>;
}
