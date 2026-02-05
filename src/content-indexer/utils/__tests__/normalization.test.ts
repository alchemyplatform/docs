import { describe, expect, test } from "vitest";

import {
  normalizeFilePath,
  normalizeSlug,
} from "@/content-indexer/utils/normalization.js";

describe("normalization utils", () => {
  describe("normalizeSlug", () => {
    test("should return undefined for undefined input", () => {
      expect(normalizeSlug(undefined)).toBeUndefined();
    });

    test("should return undefined for empty string", () => {
      expect(normalizeSlug("")).toBeUndefined();
    });

    test("should remove docs/ prefix", () => {
      expect(normalizeSlug("docs/guides/quickstart")).toBe("guides/quickstart");
    });

    test("should handle slug without docs/ prefix", () => {
      expect(normalizeSlug("guides/quickstart")).toBe("guides/quickstart");
    });

    test("should only remove leading docs/ prefix", () => {
      expect(normalizeSlug("docs/reference/docs/api")).toBe(
        "reference/docs/api",
      );
    });

    test("should handle docs/ as entire slug", () => {
      expect(normalizeSlug("docs/")).toBe("");
    });

    test("should preserve internal slashes", () => {
      expect(normalizeSlug("docs/guides/getting-started/quickstart")).toBe(
        "guides/getting-started/quickstart",
      );
    });
  });

  describe("normalizeFilePath", () => {
    test("should remove stripPathPrefix", () => {
      const result = normalizeFilePath("fern/guides/quickstart.mdx", "fern/");
      expect(result).toBe("guides/quickstart.mdx");
    });

    test("should handle path without matching prefix", () => {
      const result = normalizeFilePath("guides/quickstart.mdx", "fern/");
      expect(result).toBe("guides/quickstart.mdx");
    });

    test("should handle empty stripPathPrefix", () => {
      const result = normalizeFilePath("guides/quickstart.mdx", "");
      expect(result).toBe("guides/quickstart.mdx");
    });

    test("should handle undefined stripPathPrefix", () => {
      const result = normalizeFilePath("guides/quickstart.mdx", undefined);
      expect(result).toBe("guides/quickstart.mdx");
    });

    test("should handle complex path", () => {
      const result = normalizeFilePath(
        "fern/docs/reference/ethereum/methods/eth_getBalance.mdx",
        "fern/docs/",
      );
      expect(result).toBe("reference/ethereum/methods/eth_getBalance.mdx");
    });

    test("should handle path with no prefix", () => {
      const result = normalizeFilePath("api/spec.json", "");
      expect(result).toBe("api/spec.json");
    });

    test("should strip multiple occurrences of prefix", () => {
      const result = normalizeFilePath(
        "fern/fern/guides/quickstart.mdx",
        "fern/",
      );
      // replace() only replaces first occurrence by default
      expect(result).toBe("fern/guides/quickstart.mdx");
    });
  });
});
