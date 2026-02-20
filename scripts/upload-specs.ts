#!/usr/bin/env tsx
/**
 * Standalone spec upload CLI with change detection.
 *
 * Walks fern/api-specs/, computes SHA-256 hashes, compares against Redis,
 * uploads only changed specs, and outputs changed URLs as JSON to stdout.
 *
 * Usage: pnpm upload-specs
 * Env: KV_REST_API_URL, KV_REST_API_TOKEN
 */
import crypto from "crypto";
import { config as dotenvConfig } from "dotenv";
import fs from "fs/promises";
import path from "path";

import {
  DEV_DOCS_BASE,
  getSpecTypeFromUrl,
} from "@/content-indexer/utils/apiSpecs.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env"), quiet: true });

const SPECS_DIR = path.resolve(process.cwd(), "fern/api-specs");
const HASH_KEY = "main:spec-hashes";

const SKIP_FILES = new Set(["metadata.json", "hashes.json"]);

/** Recursively find all .json files under a directory. */
const findJsonFiles = async (dir: string): Promise<string[]> => {
  const results: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findJsonFiles(fullPath)));
    } else if (entry.name.endsWith(".json") && !SKIP_FILES.has(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
};

const main = async () => {
  // Verify specs directory exists
  try {
    await fs.access(SPECS_DIR);
  } catch {
    console.error(
      `Specs directory not found: ${SPECS_DIR}\nRun 'pnpm generate' first.`,
    );
    process.exit(1);
  }

  const redis = getRedis();

  // 1. Walk api-specs and compute hashes
  const files = await findJsonFiles(SPECS_DIR);
  console.error(`Found ${files.length} spec files`);

  const newHashes: Record<string, string> = {};
  const specContents: Record<string, string> = {}; // specUrl → raw JSON

  for (const filePath of files) {
    const relativePath = path.relative(SPECS_DIR, filePath);
    const specUrl = `${DEV_DOCS_BASE}/${relativePath}`;
    const content = await fs.readFile(filePath, "utf-8");
    const hash = crypto.createHash("sha256").update(content).digest("hex");

    newHashes[specUrl] = hash;
    specContents[specUrl] = content;
  }

  // 2. Fetch existing hashes from Redis
  const oldHashes =
    ((await redis.get<Record<string, string>>(HASH_KEY)) as Record<
      string,
      string
    >) ?? {};

  // 3. Find changed spec URLs (new, modified, or removed)
  const changedUrls = Object.keys(newHashes).filter(
    (url) => oldHashes[url] !== newHashes[url],
  );

  if (changedUrls.length === 0) {
    console.error("No spec changes detected");
    // Still update hashes in case specs were removed
    if (Object.keys(oldHashes).length !== Object.keys(newHashes).length) {
      await redis.set(HASH_KEY, JSON.stringify(newHashes));
      console.error("Updated hash map (removed specs)");
    }
    process.stdout.write(JSON.stringify([]) + "\n");
    return;
  }

  console.error(`${changedUrls.length} spec(s) changed:`);
  for (const url of changedUrls) {
    console.error(`  - ${url}`);
  }

  // 4. Upload changed specs to Redis
  const pipeline = redis.pipeline();

  for (const specUrl of changedUrls) {
    const specType = getSpecTypeFromUrl(specUrl);
    const redisKey = `main:${specType}-spec:${specUrl}`;
    pipeline.set(redisKey, specContents[specUrl]);
    console.error(`  uploading ${redisKey}`);
  }

  // 5. Update hash map
  pipeline.set(HASH_KEY, JSON.stringify(newHashes));

  await pipeline.exec();
  console.error("Upload complete");

  // 6. Output changed URLs to stdout
  process.stdout.write(JSON.stringify(changedUrls) + "\n");
};

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
