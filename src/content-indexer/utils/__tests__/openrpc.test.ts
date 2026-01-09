import { describe, expect, test } from "vitest";

import type { OpenRpcSpec } from "@/content-indexer/types/specs.js";

import { isValidOpenRpcSpec } from "../openrpc.js";

describe("openrpc utils", () => {
  describe("isValidOpenRpcSpec", () => {
    test("should return true for valid OpenRPC spec", () => {
      const spec: OpenRpcSpec = {
        openrpc: "1.0.0",
        info: { title: "API", version: "1.0.0" },
        methods: [
          {
            name: "getAsset",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      };

      expect(isValidOpenRpcSpec(spec)).toBe(true);
    });

    test("should return false for spec without methods", () => {
      const spec = {
        openrpc: "1.0.0",
        info: { title: "API", version: "1.0.0" },
      };

      expect(isValidOpenRpcSpec(spec)).toBe(false);
    });

    test("should return true for spec with empty methods array", () => {
      const spec = {
        openrpc: "1.0.0",
        info: { title: "API", version: "1.0.0" },
        methods: [],
      };

      // Type guard only checks structure, not content validity
      expect(isValidOpenRpcSpec(spec)).toBe(true);
    });

    test("should return false for spec with non-array methods", () => {
      const spec = {
        openrpc: "1.0.0",
        info: { title: "API", version: "1.0.0" },
        methods: "invalid",
      };

      expect(isValidOpenRpcSpec(spec)).toBe(false);
    });

    test("should return false for undefined spec", () => {
      expect(isValidOpenRpcSpec(undefined as unknown as OpenRpcSpec)).toBe(
        false,
      );
    });

    test("should return false for null spec", () => {
      expect(isValidOpenRpcSpec(null as unknown as OpenRpcSpec)).toBe(false);
    });

    test("should return false for non-object spec", () => {
      expect(isValidOpenRpcSpec("string" as unknown as OpenRpcSpec)).toBe(
        false,
      );
    });
  });
});
