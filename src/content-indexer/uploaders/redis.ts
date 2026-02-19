import type { SetCommandOptions } from "@upstash/redis";

import type { IndexerType } from "@/content-indexer/types/indexer.ts";
import type {
  NavigationTree,
  NavigationTreesByTab,
} from "@/content-indexer/types/navigation.js";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";
import { mergeWalletsNavTree } from "@/content-indexer/utils/nav-tree-merge.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

const stringify = (data: unknown) => JSON.stringify(data, null, 2);

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

export const PREVIEW_TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days

/**
 * Stores path index and navigation trees to Redis with branch scoping.
 *
 * @param pathIndex - The path index to store
 * @param navigationTrees - Navigation trees (optional for SDK/changelog indexers)
 * @param options - Configuration options
 * @param options.branchId - Branch identifier for Redis keys (e.g., "main", "branch-abc123")
 * @param options.indexerType - Type of indexer ("docs", "sdk", or "changelog")
 */
export const storeToRedis = async (
  pathIndex: PathIndex,
  navigationTrees: NavigationTreesByTab | undefined,
  options: {
    branchId: string;
    indexerType: IndexerType;
  },
): Promise<void> => {
  const redis = getRedis();

  // Determine TTL: no expiration for main branch, 30 days for preview branches
  const isMainBranch = options.branchId === "main";
  const setOptions: SetCommandOptions = isMainBranch
    ? {}
    : { ex: PREVIEW_TTL_SECONDS };
  const ttlInfo = isMainBranch ? "" : " (30-day TTL)";

  // Store path index with branch scope
  const pathIndexKey = `${options.branchId}:index:${options.indexerType}.json`;
  const pathIndexPromise = redis
    .set(pathIndexKey, stringify(pathIndex), setOptions)
    .then(() => {
      console.info(
        `✅ Path index saved to Redis (${Object.keys(pathIndex).length} routes) -> ${pathIndexKey}${ttlInfo}`,
      );
    });

  // Handle navigation trees
  let navTreePromises: Promise<void>[] = [];

  if (options.indexerType === "sdk" && navigationTrees?.wallets) {
    // SDK indexer: merge SDK section into existing wallets nav tree
    const navTreeKey = `${options.branchId}:nav:wallets.json`;
    const existingTree = await redis.get<NavigationTree>(navTreeKey);

    const mergedTree = mergeWalletsNavTree(
      navigationTrees.wallets,
      existingTree,
      "sdk",
    );

    navTreePromises = [
      redis.set(navTreeKey, stringify(mergedTree), setOptions).then(() => {
        console.info(
          `✅ Updated wallets nav tree with SDK refs (${countItems(mergedTree)} total items) -> ${navTreeKey}${ttlInfo}`,
        );
      }),
    ];
  } else if (navigationTrees) {
    // Main indexer: store all navigation trees
    navTreePromises = Object.entries(navigationTrees).map(
      async ([tab, navTree]) => {
        const redisKey = `${options.branchId}:nav:${tab}.json`;
        let finalTree = navTree;

        // Docs indexer: preserve SDK references in wallets tab
        if (tab === "wallets" && options.indexerType === "docs") {
          const existingTree = await redis.get<NavigationTree>(redisKey);
          finalTree = mergeWalletsNavTree(navTree, existingTree, "docs");
        }

        const itemCount = countItems(finalTree);
        await redis.set(redisKey, stringify(finalTree), setOptions);
        console.info(
          `✅ Navigation tree for '${tab}' saved to Redis (${itemCount} items) -> ${redisKey}${ttlInfo}`,
        );
      },
    );
  }

  await Promise.all([pathIndexPromise, ...navTreePromises]);
};
