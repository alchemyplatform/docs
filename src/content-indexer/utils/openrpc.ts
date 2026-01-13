import type { OpenRpcSpec } from "@/content-indexer/types/specs.ts";

/**
 * Type guard to check if a spec is a valid OpenRPC spec with methods array.
 */
export const isValidOpenRpcSpec = (spec: unknown): spec is OpenRpcSpec => {
  return (
    typeof spec === "object" &&
    spec !== null &&
    "methods" in spec &&
    Array.isArray((spec as { methods: unknown }).methods)
  );
};
