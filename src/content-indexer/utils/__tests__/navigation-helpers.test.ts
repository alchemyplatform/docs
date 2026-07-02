import { describe, expect, test } from "vitest";

import type { NavItem } from "@/content-indexer/types/navigation.ts";

import {
  createBreadcrumbNavItem,
  getChainNameFromAncestors,
} from "../navigation-helpers.ts";

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

  describe("getChainNameFromAncestors", () => {
    const ethereumAncestor: NavItem = {
      title: "Ethereum",
      path: "/chains/ethereum",
      type: "section",
      children: [],
    };

    test("returns the first ancestor title on the chains tab", () => {
      expect(getChainNameFromAncestors("chains", [ethereumAncestor])).toBe(
        "Ethereum",
      );
    });

    test("returns the first ancestor title even when nested deeper", () => {
      const nested: NavItem = {
        title: "Solana Photon API",
        path: "/chains/solana/solana-photon-api",
        type: "section",
        children: [],
      };
      const solana: NavItem = {
        title: "Solana",
        path: "/chains/solana",
        type: "section",
        children: [],
      };
      expect(getChainNameFromAncestors("chains", [solana, nested])).toBe(
        "Solana",
      );
    });

    test("returns undefined on non-chains tabs", () => {
      expect(
        getChainNameFromAncestors("data", [ethereumAncestor]),
      ).toBeUndefined();
      expect(
        getChainNameFromAncestors("node", [ethereumAncestor]),
      ).toBeUndefined();
    });

    test("returns undefined when no ancestors are provided", () => {
      expect(getChainNameFromAncestors("chains", [])).toBeUndefined();
    });
  });
});
