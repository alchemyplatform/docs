// Utilities for reading and processing OpenRPC/OpenAPI specifications
import fs from "fs/promises";
import path from "path";

import type {
  OpenApiSpec,
  OpenRpcSpec,
  SpecType,
} from "@/content-indexer/types/specs.js";

// Map api-name values that don't match their filename in metadata.json
const API_NAME_TO_FILENAME: Record<string, string> = {
  avalanche: "avax",
  arbitrum: "arb",
  "polygon-zkevm": "polygonzkevm",
};

/** Subdirectories within api-specs that contain actual spec files. */
export const SPEC_SUBDIRS = ["alchemy", "chains"];

/**
 * Determines the spec type from the identifier path.
 * - /rest/ → openapi
 * - Everything else → openrpc
 */
export const getSpecType = (specId: string): SpecType => {
  if (specId.includes("/rest/")) {
    return "openapi";
  }
  return "openrpc";
};

/** Recursively collect all .json files under a directory. */
const findJsonFiles = async (dir: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return findJsonFiles(fullPath);
      }
      if (entry.name.endsWith(".json")) {
        return [fullPath];
      }
      return [];
    }),
  );

  return nested.flat();
};

/**
 * Scans SPEC_SUBDIRS under specsDir and builds a map of spec basename → relative path.
 * Throws if two spec files share the same basename (ambiguous lookup).
 *
 * Example: { eth: "chains/eth.json", nft: "alchemy/rest/nft.json" }
 */
export const buildSpecFileMap = async (
  specsDir: string,
): Promise<Map<string, string>> => {
  const files = (
    await Promise.all(
      SPEC_SUBDIRS.map((dir) => findJsonFiles(path.join(specsDir, dir))),
    )
  ).flat();

  const map = new Map<string, string>();

  files.forEach((filePath) => {
    const relativePath = path.relative(specsDir, filePath);
    const basename = path.basename(filePath, ".json");

    const existing = map.get(basename);
    if (existing) {
      throw new Error(
        `Duplicate spec filename "${basename}.json": found at "${existing}" and "${relativePath}"`,
      );
    }

    map.set(basename, relativePath);
  });

  return map;
};

/**
 * Reads an API spec from the local filesystem using a pre-built file map.
 * Returns the relative path as specId for use as a Redis key identifier.
 */
export const readApiSpec = async (
  apiName: string,
  specsDir: string,
  specFileMap: Map<string, string>,
): Promise<
  | { specType: "openrpc"; spec: OpenRpcSpec; specId: string }
  | { specType: "openapi"; spec: OpenApiSpec; specId: string }
  | undefined
> => {
  const filename = API_NAME_TO_FILENAME[apiName] ?? apiName;
  const relativePath = specFileMap.get(filename);

  if (!relativePath) {
    console.warn(
      `Could not find spec for api-name: ${apiName} (filename: ${filename}) in ${specsDir}`,
    );
    return undefined;
  }

  const specId = relativePath;
  const specType = getSpecType(specId);
  const localPath = path.join(specsDir, relativePath);

  try {
    const raw = await fs.readFile(localPath, "utf-8");
    const spec = JSON.parse(raw);

    if (specType === "openrpc") {
      return { specType: "openrpc", spec: spec as OpenRpcSpec, specId };
    } else {
      return { specType: "openapi", spec: spec as OpenApiSpec, specId };
    }
  } catch (error) {
    console.warn(`Failed to read spec at ${localPath}:`, error);
    return undefined;
  }
};
