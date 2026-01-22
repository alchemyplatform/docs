import { createHash } from "crypto";

/**
 * Generate a deterministic SHA-256 hash from a source string.
 * Returns first 16 characters of the hash for compact, unique identifiers.
 *
 * @param source - Source string to hash
 * @returns First 16 characters of SHA-256 hash (e.g., "a3f2c8e1b9d4f6a7")
 *
 * @example
 * generateHash("guides/quickstart") // "3f9f805081534e21"
 * generateHash("changelog/2025/1/20") // "c5f4e0d3b6a9f8c7"
 */
export function generateHash(source: string): string {
  return createHash("sha256").update(source).digest("hex").substring(0, 16);
}
