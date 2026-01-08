import type {
  NavigationTree,
  NavigationTreesByTab,
} from "@/content-indexer/types/navigation";
import type { PathIndex } from "@/content-indexer/types/pathIndex";
import { getRedis } from "@/content-indexer/utils/redis";

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
 * Stores the path index and navigation trees to Redis.
 * Returns promises for all storage operations.
 */
export const storeToRedis = async (
  pathIndex: PathIndex,
  navigationTrees: NavigationTreesByTab,
  options: {
    isWalletMode: boolean;
  },
): Promise<void> => {
  const redis = getRedis();

  // Determine Redis keys based on mode
  const pathIndexKey = options.isWalletMode
    ? "main/wallet-path-index.json"
    : "main/path-index.json";

  // Store path index
  const pathIndexPromise = redis
    .set(pathIndexKey, JSON.stringify(pathIndex, null, 2))
    .then(() => {
      console.info(`✅ Path index saved to Redis (${pathIndexKey})`);
    });

  // Filter navigation trees based on mode:
  // - Wallet mode: only write nav-wallets
  // - Default mode: skip nav-wallets (to avoid overwriting wallet repo data)
  const navigationTreesPromises = Object.entries(navigationTrees)
    .filter(([tab]) => {
      if (options.isWalletMode) {
        return tab === "wallets";
      }
      // Default mode: skip wallets tab to avoid overwriting wallets index
      return tab !== "wallets";
    })
    .map(async ([tab, navTree]) => {
      const redisKey = `main/nav-${tab}.json`;
      const itemCount = countItems(navTree);
      await redis.set(redisKey, JSON.stringify(navTree, null, 2));
      console.info(
        `✅ Navigation for '${tab}' saved to Redis (${itemCount} items)`,
      );
    });

  await Promise.all([pathIndexPromise, ...navigationTreesPromises]);
};
