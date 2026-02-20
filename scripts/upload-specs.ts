#!/usr/bin/env tsx
/**
 * Standalone spec upload CLI with change detection.
 *
 * Scans fern/api-specs/{alchemy,chains}/, computes SHA-256 hashes, compares
 * against Redis, uploads only changed specs, and writes changed URLs as JSON
 * to an output file (default: fern/api-specs/changed-specs.json).
 *
 * Usage: pnpm upload-specs [--output path]
 * Env: KV_REST_API_URL, KV_REST_API_TOKEN
 */
import crypto from "crypto";
import { config as dotenvConfig } from "dotenv";
import fs from "fs/promises";
import path from "path";

import {
  DEV_DOCS_BASE,
  buildSpecFileMap,
  getSpecTypeFromUrl,
} from "@/content-indexer/utils/apiSpecs.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

dotenvConfig({ path: path.resolve(process.cwd(), ".env"), quiet: true });

const SPECS_DIR = path.resolve(process.cwd(), "fern/api-specs");
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
      const specUrl = `${DEV_DOCS_BASE}/${relativePath}`;
      const content = await fs.readFile(
        path.join(SPECS_DIR, relativePath),
        "utf-8",
      );
      const hash = crypto.createHash("sha256").update(content).digest("hex");
      return { specUrl, content, hash };
    }),
  );

  const newHashes: SpecHashMap = Object.fromEntries(
    specEntries.map(({ specUrl, hash }) => [specUrl, hash]),
  );
  const specContents: Record<string, string> = Object.fromEntries(
    specEntries.map(({ specUrl, content }) => [specUrl, content]),
  );

  // 2. Fetch existing hashes from Redis
  const oldHashes = (await redis.get<SpecHashMap>(HASH_KEY)) ?? {};

  // 3. Find changed spec URLs (new or modified)
  const changedUrls = Object.keys(newHashes).filter(
    (url) => oldHashes[url] !== newHashes[url],
  );

  // 4. Find deleted spec URLs (in old but not in new)
  const deletedUrls = Object.keys(oldHashes).filter(
    (url) => !(url in newHashes),
  );

  const allAffectedUrls = [...changedUrls, ...deletedUrls];

  if (allAffectedUrls.length === 0) {
    console.info("No spec changes detected");
    await fs.writeFile(output, JSON.stringify([]));
    return;
  }

  const pipeline = redis.pipeline();

  // 5. Upload changed specs to Redis
  if (changedUrls.length > 0) {
    console.info(`${changedUrls.length} spec(s) changed:`);
    changedUrls.forEach((specUrl) => {
      const redisKey = `main:${getSpecTypeFromUrl(specUrl)}-spec:${specUrl}`;
      pipeline.set(redisKey, specContents[specUrl]);
      console.info(`  + ${specUrl}`);
    });
  }

  // 6. Delete removed specs from Redis
  if (deletedUrls.length > 0) {
    console.info(`${deletedUrls.length} spec(s) deleted:`);
    deletedUrls.forEach((specUrl) => {
      const redisKey = `main:${getSpecTypeFromUrl(specUrl)}-spec:${specUrl}`;
      pipeline.del(redisKey);
      console.info(`  - ${specUrl}`);
    });
  }

  // 7. Update hash map
  pipeline.set(HASH_KEY, JSON.stringify(newHashes));

  await pipeline.exec();
  console.info("Upload complete");

  // 8. Write all affected URLs to output file
  await fs.writeFile(output, JSON.stringify(allAffectedUrls));
};

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
