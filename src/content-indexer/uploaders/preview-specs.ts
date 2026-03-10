import type { Redis } from "@upstash/redis";

import type { SpecCacheEntry } from "@/content-indexer/core/content-cache.ts";

import { PREVIEW_TTL_SECONDS } from "./redis.ts";

/**
 * Uploads all specs to Redis under branch-scoped keys.
 * Key format: {branch}:{specType}-spec:{specId}
 *
 * @param specs - Map of apiName → SpecCacheEntry from the indexer
 * @param branch - Branch identifier for Redis key prefix
 * @param redis - Redis client instance
 */
export const uploadSpecs = async (
  specs: Map<string, SpecCacheEntry>,
  branch: string,
  redis: Redis,
): Promise<void> => {
  if (specs.size === 0) {
    console.info("\n📤 No specs to upload");
    return;
  }

  console.info(
    `\n📤 Uploading ${specs.size} spec${specs.size === 1 ? "" : "s"} to Redis...`,
  );

  await Promise.all(
    Array.from(specs.entries()).map(
      async ([_apiName, { specType, spec, specId }]) => {
        const redisKey = `${branch}:${specType}-spec:${specId}`;
        await redis.set(redisKey, JSON.stringify(spec), {
          ex: PREVIEW_TTL_SECONDS,
        });
      },
    ),
  );

  console.info(`✅ ${specs.size} spec${specs.size === 1 ? "" : "s"} uploaded`);
};
