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

export const DEV_DOCS_BASE = "https://dev-docs.alchemy.com";

/**
 * Determines the spec type from the URL path.
 * - /chains/ → openrpc
 * - /alchemy/json-rpc/ → openrpc
 * - /alchemy/rest/ → openapi
 */
export const getSpecTypeFromUrl = (url: string): SpecType => {
  if (url.includes("/rest/")) {
    return "openapi";
  }
  return "openrpc";
};

/**
 * Recursively finds a file named `{filename}.json` under specsDir.
 * Returns the path relative to specsDir, or undefined if not found.
 */
const findSpecFile = async (
  specsDir: string,
  filename: string,
): Promise<string | undefined> => {
  const search = async (dir: string): Promise<string | undefined> => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = await search(fullPath);
        if (found) return found;
      } else if (entry.name === `${filename}.json`) {
        return path.relative(specsDir, fullPath);
      }
    }
    return undefined;
  };
  return search(specsDir);
};

/**
 * Reads an API spec from the local filesystem.
 * Walks specsDir to find the file, constructs the canonical specUrl for Redis key consistency.
 */
export const readApiSpec = async (
  apiName: string,
  specsDir: string,
): Promise<
  | { specType: "openrpc"; spec: OpenRpcSpec; specUrl: string }
  | { specType: "openapi"; spec: OpenApiSpec; specUrl: string }
  | undefined
> => {
  const filename = API_NAME_TO_FILENAME[apiName] ?? apiName;
  const relativePath = await findSpecFile(specsDir, filename);

  if (!relativePath) {
    console.warn(
      `Could not find spec for api-name: ${apiName} (filename: ${filename}) in ${specsDir}`,
    );
    return undefined;
  }

  const specUrl = `${DEV_DOCS_BASE}/${relativePath}`;
  const specType = getSpecTypeFromUrl(specUrl);
  const localPath = path.join(specsDir, relativePath);

  try {
    const raw = await fs.readFile(localPath, "utf-8");
    const spec = JSON.parse(raw);

    if (specType === "openrpc") {
      return { specType: "openrpc", spec: spec as OpenRpcSpec, specUrl };
    } else {
      return { specType: "openapi", spec: spec as OpenApiSpec, specUrl };
    }
  } catch (error) {
    console.warn(`Failed to read spec at ${localPath}:`, error);
    return undefined;
  }
};
