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

const DEV_DOCS_BASE = "https://dev-docs.alchemy.com/";

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
const getSpecTypeFromUrl = (url: string): SpecType => {
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
 * Reads metadata.json from local filesystem and finds spec info for a given API name.
 */
const getLocalSpecInfo = async (
  apiName: string,
  specsDir: string,
): Promise<{ specUrl: string; specType: SpecType } | undefined> => {
  const metadataPath = path.join(specsDir, "metadata.json");

  let metadata: MetadataJson;
  try {
    const raw = await fs.readFile(metadataPath, "utf-8");
    metadata = JSON.parse(raw) as MetadataJson;
  } catch (error) {
    console.warn(
      `Failed to read local metadata.json at ${metadataPath}:`,
      error,
    );
    return undefined;
  }

  const filename = API_NAME_TO_FILENAME[apiName] ?? apiName;
  const specUrl = metadata.files.find((file) =>
    file.endsWith(`/${filename}.json`),
  );

  if (!specUrl) {
    console.warn(
      `Could not find spec for api-name: ${apiName} (filename: ${filename}) in local metadata`,
    );
    return undefined;
  }

  return { specUrl, specType: getSpecTypeFromUrl(specUrl) };
};

/**
 * Reads a spec from the local filesystem instead of fetching from remote.
 * Uses the same specUrl (dev-docs.alchemy.com URL) for Redis key consistency.
 */
export const fetchLocalApiSpec = async (
  apiName: string,
  specsDir: string,
): Promise<
  | { specType: "openrpc"; spec: OpenRpcSpec; specUrl: string }
  | { specType: "openapi"; spec: OpenApiSpec; specUrl: string }
  | undefined
> => {
  const specInfo = await getLocalSpecInfo(apiName, specsDir);

  if (!specInfo) {
    return undefined;
  }

  const { specUrl, specType } = specInfo;

  // Map remote URL to local file path: strip base URL and join with specsDir
  const relativePath = specUrl.replace(DEV_DOCS_BASE, "");
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
