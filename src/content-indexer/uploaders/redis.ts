import type {
  NavigationTree,
  NavigationTreesByTab,
} from "@/content-indexer/types/navigation.js";
import type { PathIndex } from "@/content-indexer/types/pathIndex.js";
import { getRedis } from "@/content-indexer/utils/redis.js";

// Helper to count nav items recursively
const countItems = (items: NavigationTree): number => {
  return items.reduce((sum, item) => {
    const childCount =
      item.type === "section" || item.type === "api-section"
        ? countItems(item.children)
        : 0;
    return sum + 1 + childCount;
  }, 0);
};

/**
 * Stores path index and navigation trees to Redis with branch scoping.
 *
 * @param pathIndex - The path index to store
 * @param navigationTrees - Navigation trees (optional for SDK/changelog indexers)
 * @param options - Configuration options
 * @param options.branchId - Branch identifier for Redis keys (e.g., "main", "branch-abc123")
 * @param options.pathIndexSuffix - Suffix for path index key (e.g., "main", "sdk-refs", "changelog")
 * @param options.mergeSDKIntoWallets - If true, merge nav trees into existing wallets tree (for SDK indexer)
 */
export const storeToRedis = async (
  pathIndex: PathIndex,
  navigationTrees: NavigationTreesByTab | undefined,
  options: {
    branchId: string;
    pathIndexSuffix: "main" | "sdk-refs" | "changelog";
    mergeSDKIntoWallets?: boolean;
  },
): Promise<void> => {
  const redis = getRedis();

  // Store path index with branch scope
  const pathIndexKey = `${options.branchId}/path-index:${options.pathIndexSuffix}`;
  const pathIndexPromise = redis
    .set(pathIndexKey, JSON.stringify(pathIndex, null, 2))
    .then(() => {
      console.info(
        `✅ Path index saved to Redis (${Object.keys(pathIndex).length} routes) -> ${pathIndexKey}`,
      );
    });

  // Handle navigation trees
  let navTreePromises: Promise<void>[] = [];

  if (options.mergeSDKIntoWallets && navigationTrees?.wallets) {
    // SDK indexer: merge SDK section into existing wallets nav tree
    const navTreeKey = `${options.branchId}/nav-tree:wallets`;
    const existingTree = await redis.get<NavigationTree>(navTreeKey);

    if (existingTree) {
      console.info(`📖 Read existing wallets nav tree from Redis`);
    } else {
      console.warn(
        `⚠️  No existing wallets nav tree found at ${navTreeKey}, creating new one`,
      );
    }

    // Filter out existing SDK Reference section
    const manualSections = (existingTree || []).filter((item) => {
      if (item.type === "section" || item.type === "api-section") {
        return !item.title.toLowerCase().includes("sdk reference");
      }
      return true;
    });

    // Merge manual + SDK sections
    const mergedTree = [...manualSections, ...navigationTrees.wallets];

    navTreePromises = [
      redis.set(navTreeKey, JSON.stringify(mergedTree, null, 2)).then(() => {
        console.info(
          `✅ Updated wallets nav tree with SDK refs (${countItems(mergedTree)} total items) -> ${navTreeKey}`,
        );
      }),
    ];
  } else if (navigationTrees) {
    // Main indexer: store all navigation trees normally
    navTreePromises = Object.entries(navigationTrees).map(
      async ([tab, navTree]) => {
        const redisKey = `${options.branchId}/nav-tree:${tab}`;
        const itemCount = countItems(navTree);
        await redis.set(redisKey, JSON.stringify(navTree, null, 2));
        console.info(
          `✅ Navigation tree for '${tab}' saved to Redis (${itemCount} items) -> ${redisKey}`,
        );
      },
    );
  }

  await Promise.all([pathIndexPromise, ...navTreePromises]);
};
