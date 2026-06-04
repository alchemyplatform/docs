import { readFileSync } from "fs";

/** Path to the remote specs registry, relative to the repo root. */
export const REMOTE_SPECS_PATH = "content/remote-specs.json";

export type RemoteSpecType = "openapi" | "openrpc";

export interface RemoteSpec {
  name: string;
  url: string;
  /** Spec format. Omitted entries default to "openapi" for backward compatibility. */
  type: RemoteSpecType;
}

/**
 * Parses and validates a single remote spec entry.
 * @throws Error if required fields are missing or the type is invalid
 */
const parseRemoteSpec = (entry: unknown, index: number): RemoteSpec => {
  if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
    throw new Error(
      `${REMOTE_SPECS_PATH} entry at index ${index} must be an object`,
    );
  }

  const { name, url, type } = entry as Record<string, unknown>;

  if (typeof name !== "string" || name.length === 0) {
    throw new Error(
      `${REMOTE_SPECS_PATH} entry at index ${index} is missing a non-empty "name"`,
    );
  }

  if (typeof url !== "string" || url.length === 0) {
    throw new Error(
      `${REMOTE_SPECS_PATH} entry "${name}" is missing a non-empty "url"`,
    );
  }

  // Omitted type defaults to OpenAPI so existing entries keep working.
  let specType: RemoteSpecType = "openapi";
  if (type !== undefined) {
    if (type !== "openapi" && type !== "openrpc") {
      throw new Error(
        `${REMOTE_SPECS_PATH} entry "${name}" has invalid type "${String(
          type,
        )}" (expected "openapi" or "openrpc")`,
      );
    }
    specType = type;
  }

  return { name, url, type: specType };
};

/**
 * Parses the raw contents of the remote specs registry into validated entries.
 * @throws Error if the registry is not an array or any entry is invalid
 */
export const parseRemoteSpecs = (raw: unknown): RemoteSpec[] => {
  if (!Array.isArray(raw)) {
    throw new Error(`${REMOTE_SPECS_PATH} must be an array of spec entries`);
  }
  return raw.map((entry, index) => parseRemoteSpec(entry, index));
};

/**
 * Reads and parses the remote specs registry from disk.
 * Returns an empty array when the registry file does not exist.
 * @param path - Path to the registry file (defaults to {@link REMOTE_SPECS_PATH})
 */
export const readRemoteSpecs = (path = REMOTE_SPECS_PATH): RemoteSpec[] => {
  let contents: string;
  try {
    contents = readFileSync(path, "utf-8");
  } catch {
    return [];
  }
  return parseRemoteSpecs(JSON.parse(contents));
};

/** Returns only the entries matching the given spec type. */
export const filterRemoteSpecsByType = (
  specs: RemoteSpec[],
  type: RemoteSpecType,
): RemoteSpec[] => specs.filter((spec) => spec.type === type);

/**
 * Names of local specs overridden by a remote entry. When a remote OpenRPC
 * entry shares a name with a local spec, the remote entry wins and local
 * generation for that name is skipped.
 */
export const getOverriddenNames = (specs: RemoteSpec[]): Set<string> =>
  new Set(specs.map((spec) => spec.name));
