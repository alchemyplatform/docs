import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import { ContentCache } from "@/content-indexer/core/content-cache.ts";
import { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import { openApiSpecFactory } from "@/content-indexer/utils/test-factories.ts";

import { visitNavigationItem } from "../index.ts";

describe("visitNavigationItem dispatcher", () => {
  test("should route page config to visitPage", () => {
    const context = new ProcessingContext("docs");
    const result = visitNavigationItem({
      item: {
        page: "Quickstart",
        path: "content/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("type", "page");
  });

  test("should route link config to visitLink", () => {
    const context = new ProcessingContext("docs");
    const result = visitNavigationItem({
      item: {
        link: "External",
        href: "https://example.com",
      },
      parentPath: PathBuilder.init(),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("type", "link");
  });

  test("should route section config to visitSection", () => {
    const context = new ProcessingContext("docs");
    const result = visitNavigationItem({
      item: {
        section: "Getting Started",
        contents: [
          {
            page: "Quickstart",
            path: "content/guides/quickstart.mdx",
          },
        ],
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("type", "section");
  });

  test("should skip changelog config", () => {
    const context = new ProcessingContext("docs");
    const result = visitNavigationItem({
      item: {
        changelog: "CHANGELOG.md",
      },
      parentPath: PathBuilder.init(),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.indexEntries).toEqual({});
    expect(result.navItem).toBeUndefined();
  });

  test("should handle API config routing", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    // Add a mock spec to cache
    cache.setSpec("ethereum-api", {
      specType: "openapi",
      spec: openApiSpecFactory(),
      specUrl: "https://example.com/spec.json",
    });

    const result = visitNavigationItem({
      item: {
        api: "Ethereum API",
        "api-name": "ethereum-api",
      },
      parentPath: PathBuilder.init("reference"),
      tab: "reference",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    // Should return a result (even if empty due to no operations in spec)
    expect(result).toBeDefined();
    expect(result.indexEntries).toBeDefined();
  });
});
