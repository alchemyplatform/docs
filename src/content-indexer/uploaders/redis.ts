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
 * Maps aa-sdk source branch refs to their Redis index key suffix.
 * Each long-lived branch gets its own path index key in Redis so they don't
 * need to be merged. The docs-site reads each key independently.
 */
const SDK_BRANCH_INDEX_SUFFIX: Record<string, string> = {
  "refs/heads/main": "sdk",
  "refs/heads/v5.x.x": "sdk-v5",
};

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
    quiet?: boolean;
    /** The aa-sdk source branch ref (e.g., "refs/heads/v5.x.x"). Used by the SDK indexer to determine which path prefixes to clean during merge. */
    sourceBranch?: string;
  },
): Promise<void> => {
  const { quiet = false } = options;
  const redis = getRedis();

  // Determine TTL: no expiration for main branch, 30 days for preview branches
  const isMainBranch = options.branchId === "main";
  const setOptions: SetCommandOptions = isMainBranch
    ? {}
    : { ex: PREVIEW_TTL_SECONDS };
  const ttlInfo = isMainBranch ? "" : " (30-day TTL)";

  // Store path index with branch scope.
  // SDK branches may have their own index key suffix (e.g., "sdk-v5" for v5.x.x).
  const indexKeySuffix =
    options.indexerType === "sdk" && options.sourceBranch
      ? SDK_BRANCH_INDEX_SUFFIX[options.sourceBranch] ?? options.indexerType
      : options.indexerType;
  const pathIndexKey = `${options.branchId}:index:${indexKeySuffix}.json`;

  const pathIndexPromise = (async () => {
    await redis.set(pathIndexKey, stringify(pathIndex), setOptions);
    if (!quiet) {
      console.info(
        `✅ Path index saved to Redis (${Object.keys(pathIndex).length} routes) -> ${pathIndexKey}${ttlInfo}`,
      );
    }
  })();

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
        if (!quiet) {
          console.info(
            `✅ Updated wallets nav tree with SDK refs (${countItems(mergedTree)} total items) -> ${navTreeKey}${ttlInfo}`,
          );
        }
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
        if (!quiet) {
          console.info(
            `✅ Navigation tree for '${tab}' saved to Redis (${itemCount} items) -> ${redisKey}${ttlInfo}`,
          );
        }
      },
    );
  }

  await Promise.all([pathIndexPromise, ...navTreePromises]);
};
