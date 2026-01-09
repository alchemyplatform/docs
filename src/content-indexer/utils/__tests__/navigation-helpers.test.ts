import { describe, expect, test } from "vitest";

import { createBreadcrumbNavItem } from "../navigation-helpers.js";

describe("navigation-helpers", () => {
  describe("createBreadcrumbNavItem", () => {
    test("should create api-section breadcrumb", () => {
      const result = createBreadcrumbNavItem("NFT API", "api-section");

      expect(result).toEqual({
        title: "NFT API",
        type: "api-section",
        children: [],
      });
    });

    test("should always have empty children array", () => {
      const result = createBreadcrumbNavItem("Ethereum API", "api-section");

      if (result.type === "section" || result.type === "api-section") {
        expect(result.children).toEqual([]);
        expect(result.children).toHaveLength(0);
      }
    });

    test("should preserve title exactly", () => {
      const title = "Complex API Name with Spaces & Special Chars!";
      const result = createBreadcrumbNavItem(title, "api-section");

      expect(result.title).toBe(title);
    });
  });
});
