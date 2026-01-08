import type {
  PathIndex,
  PathIndexEntry,
} from "@/content-indexer/types/pathIndex";

/**
 * Collector for accumulating path index entries during content processing.
 * Provides validation to prevent duplicate paths.
 */
export class PathIndexCollector {
  private index: PathIndex = {};

  /**
   * Add a path index entry for URL routing.
   * Warns if the path already exists to catch configuration errors.
   */
  add(path: string, entry: PathIndexEntry): void {
    if (this.index[path]) {
      console.warn(
        `⚠️  Duplicate path detected: ${path} (overwriting previous entry)`,
      );
    }
    this.index[path] = entry;
  }

  /**
   * Get the complete path index.
   */
  getIndex(): PathIndex {
    return this.index;
  }

  /**
   * Get statistics about the index.
   */
  getStats(): { total: number; byType: Record<string, number> } {
    const entries = Object.values(this.index);
    return {
      total: entries.length,
      byType: entries.reduce(
        (acc, entry) => {
          acc[entry.type] = (acc[entry.type] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      ),
    };
  }
}
