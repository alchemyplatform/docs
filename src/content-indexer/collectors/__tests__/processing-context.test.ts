import { describe, expect, test } from "vitest";

import type { NavItem } from "@/content-indexer/types/navigation.ts";

import { ProcessingContext } from "../processing-context.ts";

describe("ProcessingContext", () => {
  test("should initialize with empty state", () => {
    const context = new ProcessingContext();
    const results = context.getResults();

    expect(results.pathIndex).toEqual({});
    expect(results.navigationTrees).toEqual({});
    expect(results.algoliaRecords).toEqual([]);
  });

  test("should add path index entry", () => {
    const context = new ProcessingContext();
    context.addPathIndexEntry("guides/quickstart", {
      type: "mdx",
      filePath: "fern/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });

    const results = context.getResults();
    expect(results.pathIndex["guides/quickstart"]).toBeDefined();
    expect(results.pathIndex["guides/quickstart"].type).toBe("mdx");
  });

  test("should add navigation item", () => {
    const context = new ProcessingContext();
    context.addNavigationItem("guides", {
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });

    const results = context.getResults();
    expect(results.navigationTrees.guides).toHaveLength(1);
    expect(results.navigationTrees.guides[0].title).toBe("Quickstart");
  });

  test("should add Guide Algolia record", () => {
    const context = new ProcessingContext();
    const breadcrumbs: NavItem[] = [
      { title: "Guides", path: "/guides", type: "section", children: [] },
    ];

    context.addAlgoliaRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Quick start guide content",
      breadcrumbs,
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(1);
    expect(results.algoliaRecords[0].pageType).toBe("Guide");
    expect(results.algoliaRecords[0].httpMethod).toBeUndefined();
  });

  test("should add API Method Algolia record with httpMethod", () => {
    const context = new ProcessingContext();
    const breadcrumbs: NavItem[] = [
      { title: "API", path: "/api", type: "section", children: [] },
    ];

    context.addAlgoliaRecord({
      pageType: "API Method",
      path: "reference/eth-getbalance",
      title: "eth_getBalance",
      content: "Get balance",
      httpMethod: "POST",
      breadcrumbs,
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(1);
    expect(results.algoliaRecords[0].pageType).toBe("API Method");
    expect(results.algoliaRecords[0].httpMethod).toBe("POST");
  });

  test("should accumulate multiple outputs simultaneously", () => {
    const context = new ProcessingContext();

    // Add path index
    context.addPathIndexEntry("guides/quickstart", {
      type: "mdx",
      filePath: "fern/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });

    // Add navigation
    context.addNavigationItem("guides", {
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });

    // Add Algolia record
    context.addAlgoliaRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Content",
      breadcrumbs: [],
    });

    const results = context.getResults();
    expect(Object.keys(results.pathIndex)).toHaveLength(1);
    expect(results.navigationTrees.guides).toHaveLength(1);
    expect(results.algoliaRecords).toHaveLength(1);
  });

  test("should return correct stats", () => {
    const context = new ProcessingContext();

    context.addPathIndexEntry("path1", {
      type: "mdx",
      filePath: "file1.mdx",
      source: "docs-yml",
      tab: "guides",
    });
    context.addNavigationItem("guides", {
      title: "Page1",
      path: "/guides/page1",
      type: "page",
    });
    context.addAlgoliaRecord({
      pageType: "Guide",
      path: "guides/page1",
      title: "Page1",
      content: "Content",
      breadcrumbs: [],
    });

    const stats = context.getStats();
    expect(stats.pathIndex.total).toBe(1);
    expect(stats.navigationTrees.tabCount).toBe(1);
    expect(stats.algoliaRecords.count).toBe(1);
  });

  test("should handle multiple tabs in navigation", () => {
    const context = new ProcessingContext();

    context.addNavigationItem("guides", {
      title: "Guide1",
      path: "/guides/guide1",
      type: "page",
    });
    context.addNavigationItem("reference", {
      title: "Ref1",
      path: "/reference/ref1",
      type: "page",
    });

    const results = context.getResults();
    expect(Object.keys(results.navigationTrees)).toHaveLength(2);
    expect(results.navigationTrees.guides).toBeDefined();
    expect(results.navigationTrees.reference).toBeDefined();
  });
});
