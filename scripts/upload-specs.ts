#!/usr/bin/env tsx
/**
 * Standalone spec upload CLI with change detection.
 *
 * Scans content/api-specs/{alchemy,chains}/, computes SHA-256 hashes, compares
 * against Redis, uploads only changed specs, and writes changed spec IDs as JSON
 * to an output file (default: content/api-specs/changed-specs.json).
 *
 * Usage: pnpm upload-specs [--output path]
 * Env: KV_REST_API_URL, KV_REST_API_TOKEN
 */
import crypto from "crypto";
import { config as dotenvConfig } from "dotenv";
import fs from "fs/promises";
import path from "path";

import {
  buildSpecFileMap,
  getSpecType,
} from "@/content-indexer/utils/apiSpecs.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env"), quiet: true });

const SPECS_DIR = path.resolve(process.cwd(), "content/api-specs");
const DEFAULT_OUTPUT = path.join(SPECS_DIR, "changed-specs.json");
const HASH_KEY = "main:spec-hashes";

type SpecHashMap = Record<string, string>;

const parseArgs = () => {
  const args = process.argv.slice(2);
  const outputFlag = args.find((arg) => arg.startsWith("--output="));
  const output = outputFlag
    ? path.resolve(process.cwd(), outputFlag.split("=")[1])
    : DEFAULT_OUTPUT;
  return { output };
};

const main = async () => {
  const { output } = parseArgs();

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

  // 1. Build spec file map and read contents with hashes
  const specFileMap = await buildSpecFileMap(SPECS_DIR);
  console.info(`Found ${specFileMap.size} spec files`);

  const specEntries = await Promise.all(
    Array.from(specFileMap.values()).map(async (relativePath) => {
      const specId = relativePath;
      const content = await fs.readFile(
        path.join(SPECS_DIR, relativePath),
        "utf-8",
      );
      const hash = crypto.createHash("sha256").update(content).digest("hex");
      return { specId, content, hash };
    }),
  );

  const newHashes: SpecHashMap = Object.fromEntries(
    specEntries.map(({ specId, hash }) => [specId, hash]),
  );
  const specContents: Record<string, string> = Object.fromEntries(
    specEntries.map(({ specId, content }) => [specId, content]),
  );

  // 2. Fetch existing hashes from Redis
  const oldHashes = (await redis.get<SpecHashMap>(HASH_KEY)) ?? {};

  // 3. Find changed spec IDs (new or modified)
  const changedIds = Object.keys(newHashes).filter(
    (id) => oldHashes[id] !== newHashes[id],
  );

  // 4. Find deleted spec IDs (in old but not in new)
  const deletedIds = Object.keys(oldHashes).filter(
    (id) => !(id in newHashes),
  );

  const allAffectedIds = [...changedIds, ...deletedIds];

  if (allAffectedIds.length === 0) {
    console.info("No spec changes detected");
    await fs.writeFile(output, JSON.stringify([]));
    return;
  }

  const pipeline = redis.pipeline();

  // 5. Upload changed specs to Redis
  changedIds.forEach((specId) => {
    const redisKey = `main:${getSpecType(specId)}-spec:${specId}`;
    pipeline.set(redisKey, specContents[specId]);
  });

  // 6. Delete removed specs from Redis
  deletedIds.forEach((specId) => {
    const redisKey = `main:${getSpecType(specId)}-spec:${specId}`;
    pipeline.del(redisKey);
  });

  console.info(`${changedIds.length} changed, ${deletedIds.length} deleted`);

  // 7. Update hash map
  pipeline.set(HASH_KEY, JSON.stringify(newHashes));

  await pipeline.exec();
  console.info("Upload complete");

  // 8. Write all affected IDs to output file
  await fs.writeFile(output, JSON.stringify(allAffectedIds));
};

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
