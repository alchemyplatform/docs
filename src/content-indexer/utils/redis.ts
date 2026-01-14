import { Redis } from "@upstash/redis";

/**
 * Creates and returns an Upstash Redis client instance.
 */
const getRedisClient = (): Redis => {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Missing required environment variables: KV_REST_API_URL and/or KV_REST_API_TOKEN",
    );
  }

  return new Redis({
    url,
    token,
  });
};

/**
 * Singleton instance of Redis client to reuse across requests
 */
let redisClient: Redis | undefined;

export const getRedis = (): Redis => {
  if (!redisClient) {
    redisClient = getRedisClient();
  }
  return redisClient;
};
