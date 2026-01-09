import type { AlgoliaRecord } from "@/content-indexer/types/algolia.js";
import type {
  NavItem,
  NavigationTreesByTab,
} from "@/content-indexer/types/navigation.js";
import type {
  PathIndex,
  PathIndexEntry,
} from "@/content-indexer/types/pathIndex.js";

import { AlgoliaCollector, type AddRecordParams } from "./algolia.js";
import { NavigationTreesCollector } from "./navigation-trees.js";
import { PathIndexCollector } from "./path-index.js";

/**
 * Result of building all outputs from content processing.
 */
export interface BuildAllOutputsResult {
  pathIndex: PathIndex;
  navigationTrees: NavigationTreesByTab;
  algoliaRecords: AlgoliaRecord[];
}

/**
 * Encapsulates the three output collectors for Phase 3 processing.
 * Provides a unified interface for accumulating results while traversing docs.yml.
 */
export class ProcessingContext {
  constructor(
    private pathIndexCollector = new PathIndexCollector(),
    private navigationTreesCollector = new NavigationTreesCollector(),
    private algoliaCollector = new AlgoliaCollector(),
  ) {}

  /**
   * Add an entry to the path index for URL routing.
   */
  addPathIndexEntry(path: string, entry: PathIndexEntry): void {
    this.pathIndexCollector.add(path, entry);
  }

  /**
   * Add a navigation item to a specific tab's tree.
   */
  addNavigationItem(tab: string, item: NavItem): void {
    this.navigationTreesCollector.addItem(tab, item);
  }

  /**
   * Add a record to the Algolia index.
   */
  addAlgoliaRecord(params: AddRecordParams): void {
    this.algoliaCollector.addRecord(params);
  }

  /**
   * Get all accumulated results.
   */
  getResults(): BuildAllOutputsResult {
    return {
      pathIndex: this.pathIndexCollector.getIndex(),
      navigationTrees: this.navigationTreesCollector.getTrees(),
      algoliaRecords: this.algoliaCollector.getRecords(),
    };
  }

  /**
   * Get statistics about accumulated data.
   */
  getStats() {
    return {
      pathIndex: this.pathIndexCollector.getStats(),
      navigationTrees: this.navigationTreesCollector.getStats(),
      algoliaRecords: { count: this.algoliaCollector.getRecords().length },
    };
  }
}
