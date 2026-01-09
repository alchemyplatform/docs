import type {
  NavItem,
  NavigationTreesByTab,
} from "@/content-indexer/types/navigation.js";

/**
 * Collector for accumulating navigation trees during content processing.
 * Organizes navigation items by tab.
 */
export class NavigationTreesCollector {
  private trees: NavigationTreesByTab = {};

  /**
   * Add a navigation item to a specific tab's tree.
   */
  addItem(tab: string, item: NavItem): void {
    if (!this.trees[tab]) {
      this.trees[tab] = [];
    }
    this.trees[tab].push(item);
  }

  /**
   * Get the complete navigation trees.
   */
  getTrees(): NavigationTreesByTab {
    return this.trees;
  }

  /**
   * Get statistics about the navigation trees.
   */
  getStats(): { tabCount: number; itemCounts: Record<string, number> } {
    return {
      tabCount: Object.keys(this.trees).length,
      itemCounts: Object.entries(this.trees).reduce(
        (acc, [tab, items]) => {
          acc[tab] = this.countItems(items);
          return acc;
        },
        {} as Record<string, number>,
      ),
    };
  }

  /**
   * Recursively count navigation items including nested children.
   */
  private countItems(items: NavItem[]): number {
    return items.reduce((sum, item) => {
      const childCount =
        item.type === "section" || item.type === "api-section"
          ? this.countItems(item.children)
          : 0;
      return sum + 1 + childCount;
    }, 0);
  }
}
