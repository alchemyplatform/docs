// Utilities for fetching and processing OpenRPC/OpenAPI specifications
import fs from "fs/promises";
import path from "path";

import type {
  OpenApiSpec,
  OpenRpcSpec,
  SpecType,
} from "@/content-indexer/types/specs.js";

import { fetchWithRetries } from "./fetchWithRetries.ts";

interface MetadataJson {
  files: string[];
}

const METADATA_URL = "https://dev-docs.alchemy.com/metadata.json";

// Map api-name values that don't match their filename in metadata.json
const API_NAME_TO_FILENAME: Record<string, string> = {
  avalanche: "avax",
  arbitrum: "arb",
  "polygon-zkevm": "polygonzkevm",
};

export const DEV_DOCS_BASE = "https://dev-docs.alchemy.com";

let cachedMetadata: MetadataJson | null = null;

/**
 * Fetches the metadata.json file which contains all available spec URLs.
 */
const getMetadata = async (): Promise<MetadataJson | undefined> => {
  if (cachedMetadata) {
    return cachedMetadata;
  }

  const response = await fetchWithRetries(METADATA_URL);

  if (!response.ok) {
    console.warn(`Failed to fetch metadata.json`);
    return undefined;
  }

  try {
    const metadata = (await response.json()) as MetadataJson;
    cachedMetadata = metadata;
    return metadata;
  } catch (error) {
    console.warn(`Error parsing metadata.json:`, error);
    return undefined;
  }
};

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
 * Finds the spec URL and type for a given API name from metadata.json.
 * The api-name should match the filename (e.g., "eth" → "eth.json").
 */
export const getSpecInfo = async (
  apiName: string,
): Promise<{ specUrl: string; specType: SpecType } | undefined> => {
  const metadata = await getMetadata();

  if (!metadata) {
    console.warn(`Could not fetch metadata.json`);
    return undefined;
  }

  // Map api-name to filename if there's an exception
  const filename = API_NAME_TO_FILENAME[apiName] ?? apiName;

  // Look for a file that matches the filename
  const specUrl = metadata.files.find((file) =>
    file.endsWith(`/${filename}.json`),
  );

  if (!specUrl) {
    console.warn(
      `Could not find spec for api-name: ${apiName} (filename: ${filename})`,
    );
    return undefined;
  }

  const specType = getSpecTypeFromUrl(specUrl);

  return { specUrl, specType };
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
 * Reads a spec from the local filesystem instead of fetching from remote.
 * Walks specsDir to find the file, constructs the canonical specUrl for Redis key consistency.
 * Does NOT require metadata.json — eliminates the generate:metadata dependency.
 */
export const fetchLocalApiSpec = async (
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
    console.warn(`Failed to read local spec at ${localPath}:`, error);
    return undefined;
  }
};

/**
 * Fetches spec info and the spec itself for a given API name.
 */
export const fetchApiSpec = async (
  apiName: string,
): Promise<
  | { specType: "openrpc"; spec: OpenRpcSpec; specUrl: string }
  | { specType: "openapi"; spec: OpenApiSpec; specUrl: string }
  | undefined
> => {
  const specInfo = await getSpecInfo(apiName);

  if (!specInfo) {
    console.warn(`Could not determine spec info for api: ${apiName}`);
    return undefined;
  }

  const { specUrl, specType } = specInfo;

  // Fetch the spec directly
  const response = await fetchWithRetries(specUrl);

  if (!response.ok) {
    return undefined;
  }

  try {
    const spec = await response.json();

    // Return with proper typing based on specType
    if (specType === "openrpc") {
      return { specType: "openrpc", spec: spec as OpenRpcSpec, specUrl };
    } else {
      return { specType: "openapi", spec: spec as OpenApiSpec, specUrl };
    }
  } catch (error) {
    console.warn(`Error parsing spec JSON for ${apiName}:`, error);
    return undefined;
  }
};
