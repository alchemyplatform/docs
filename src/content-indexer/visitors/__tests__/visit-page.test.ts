import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import { ContentCache } from "@/content-indexer/core/content-cache.ts";
import { PathBuilder } from "@/content-indexer/core/path-builder.ts";

import { visitPage } from "../visit-page.ts";

describe("visitPage", () => {
  test("should create path index entry for page", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitPage({
      item: {
        page: "Quickstart",
        path: "fern/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    expect(result.indexEntries["guides/quickstart"]).toEqual({
      type: "mdx",
      filePath: "fern/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });
  });

  test("should create nav item for visible page", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitPage({
      item: {
        page: "Quickstart",
        path: "fern/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toEqual({
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });
  });

  test("should mark nav item as hidden for hidden page", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitPage({
      item: {
        page: "Hidden Page",
        path: "fern/guides/hidden.mdx",
        hidden: true,
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toEqual({
      title: "Hidden Page",
      path: "/guides/hidden-page",
      type: "page",
      hidden: true,
    });
    expect(result.indexEntries["guides/hidden-page"]).toBeDefined(); // Index still created
  });

  test("should use custom slug if provided", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitPage({
      item: {
        page: "Quickstart",
        path: "fern/guides/quickstart.mdx",
        slug: "custom-slug",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    expect(result.indexEntries["guides/custom-slug"]).toBeDefined();
    expect(result.navItem).toBeDefined();
    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      "path" in result.navItem
    ) {
      expect(result.navItem.path).toBe("/guides/custom-slug");
    }
  });

  test("should use frontmatter slug if available", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("fern/guides/quickstart.mdx", {
      frontmatter: {
        slug: "docs/custom/frontmatter/path",
        title: "Custom Title",
      },
      content: "Content",
    });

    const result = visitPage({
      item: {
        page: "Quickstart",
        path: "fern/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    const entry = result.indexEntries["custom/frontmatter/path"];
    expect(entry).toBeDefined();
    expect(entry.type).toBe("mdx");
    if (entry.type === "mdx") {
      expect(entry.source).toBe("frontmatter");
    }
  });

  test("should add Algolia record if content cached and not hidden", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("fern/guides/quickstart.mdx", {
      frontmatter: {
        title: "Quick Start Guide",
      },
      content: "This is the content of the quickstart guide",
    });

    visitPage({
      item: {
        page: "Quickstart",
        path: "fern/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [
        {
          title: "Guides",
          path: "/guides",
          type: "section",
          children: [],
        },
      ],
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(1);
    expect(results.algoliaRecords[0].title).toBe("Quick Start Guide");
    expect(results.algoliaRecords[0].pageType).toBe("Guide");
    expect(results.algoliaRecords[0].breadcrumbs).toEqual(["Guides"]);
  });

  test("should fallback to page name for Algolia title if no frontmatter title", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("fern/guides/quickstart.mdx", {
      frontmatter: {},
      content: "Content without title",
    });

    visitPage({
      item: {
        page: "Quickstart Page Name",
        path: "fern/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    const results = context.getResults();
    expect(results.algoliaRecords[0].title).toBe("Quickstart Page Name");
  });

  test("should not add Algolia record if content not cached", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    visitPage({
      item: {
        page: "Quickstart",
        path: "fern/guides/quickstart.mdx",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(0);
  });

  test("should not add Algolia record if page is hidden", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("fern/guides/hidden.mdx", {
      frontmatter: { title: "Hidden Page" },
      content: "Secret content",
    });

    visitPage({
      item: {
        page: "Hidden",
        path: "fern/guides/hidden.mdx",
        hidden: true,
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(0);
  });
});
