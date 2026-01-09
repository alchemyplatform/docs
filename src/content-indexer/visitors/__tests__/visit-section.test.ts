import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.js";
import { ContentCache } from "@/content-indexer/core/content-cache.js";
import { PathBuilder } from "@/content-indexer/core/path-builder.js";
import { DOCS_REPO } from "@/content-indexer/utils/github.js";

import { visitNavigationItem } from "../index.js";
import { visitSection } from "../visit-section.js";

describe("visitSection", () => {
  test("should create section nav item with children", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          contents: [
            {
              page: "Quickstart",
              path: "fern/guides/quickstart.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("type", "section");
    expect(result.navItem).toHaveProperty("title", "Getting Started");
    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      (result.navItem.type === "section" ||
        result.navItem.type === "api-section")
    ) {
      expect(result.navItem.children).toHaveLength(1);
    }
  });

  test("should process all child items", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "API Reference",
          contents: [
            {
              page: "Overview",
              path: "fern/reference/overview.mdx",
            },
            {
              page: "Authentication",
              path: "fern/reference/auth.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("reference"),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      (result.navItem.type === "section" ||
        result.navItem.type === "api-section")
    ) {
      expect(result.navItem.children).toHaveLength(2);
    }
    expect(Object.keys(result.indexEntries)).toHaveLength(2);
  });

  test("should handle section with overview page", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setMdxContent("fern/guides/overview.mdx", {
      frontmatter: { title: "Overview" },
      content: "Overview content",
    });

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          path: "fern/guides/overview.mdx",
          contents: [
            {
              page: "Quickstart",
              path: "fern/guides/quickstart.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    // Should have overview path index entry
    expect(result.indexEntries["guides/getting-started"]).toBeDefined();
    expect(result.navItem).toHaveProperty("path");
  });

  test("should use custom slug if provided", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          slug: "custom-section",
          contents: [
            {
              page: "Page",
              path: "fern/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    expect(result.indexEntries["guides/custom-section/page"]).toBeDefined();
  });

  test("should skip slug if skip-slug is true", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          "skip-slug": true,
          contents: [
            {
              page: "Page",
              path: "fern/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    // Page should be directly under guides, not guides/getting-started
    expect(result.indexEntries["guides/page"]).toBeDefined();
  });

  test("should handle hidden section", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Hidden Section",
          hidden: true,
          contents: [
            {
              page: "Page",
              path: "fern/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    expect(result.navItem).toBeUndefined();
    // Index entries should still be created
    expect(Object.keys(result.indexEntries).length).toBeGreaterThan(0);
  });

  test("should recursively process nested sections", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Level 1",
          contents: [
            {
              section: "Level 2",
              contents: [
                {
                  page: "Deep Page",
                  path: "fern/guides/deep.mdx",
                },
              ],
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    // Should have deeply nested path
    expect(
      result.indexEntries["guides/level-1/level-2/deep-page"],
    ).toBeDefined();
  });

  test("should add section to breadcrumbs for children", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setMdxContent("fern/guides/quickstart.mdx", {
      frontmatter: { title: "Quickstart" },
      content: "Content",
    });

    visitSection(
      {
        item: {
          section: "Getting Started",
          contents: [
            {
              page: "Quickstart",
              path: "fern/guides/quickstart.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    const results = context.getResults();
    // Child page should have "Getting Started" in breadcrumbs
    expect(results.algoliaRecords[0].breadcrumbs).toContain("Getting Started");
  });

  test("should handle section with mix of pages and subsections", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Documentation",
          contents: [
            {
              page: "Overview",
              path: "fern/docs/overview.mdx",
            },
            {
              section: "API Reference",
              contents: [
                {
                  page: "Authentication",
                  path: "fern/docs/auth.mdx",
                },
              ],
            },
            {
              link: "External",
              href: "https://example.com",
            },
          ],
        },
        parentPath: PathBuilder.init("docs"),
        tab: "guides",
        repo: DOCS_REPO,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      (result.navItem.type === "section" ||
        result.navItem.type === "api-section")
    ) {
      expect(result.navItem.children).toHaveLength(3); // page + section + link
      expect(result.navItem.children[0].type).toBe("page");
      expect(result.navItem.children[1].type).toBe("section");
      expect(result.navItem.children[2].type).toBe("link");
    }
  });
});
