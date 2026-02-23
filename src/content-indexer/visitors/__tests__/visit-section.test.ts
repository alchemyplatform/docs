import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import { ContentCache } from "@/content-indexer/core/content-cache.ts";
import { PathBuilder } from "@/content-indexer/core/path-builder.ts";

import { visitNavigationItem } from "../index.ts";
import { visitSection } from "../visit-section.ts";

describe("visitSection", () => {
  test("should create section nav item with children", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
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
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "API Reference",
          contents: [
            {
              page: "Overview",
              path: "content/reference/overview.mdx",
            },
            {
              page: "Authentication",
              path: "content/reference/auth.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("reference"),
        tab: "reference",
        stripPathPrefix: undefined,
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
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("content/guides/overview.mdx", {
      frontmatter: { title: "Overview" },
      content: "Overview content",
    });

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          path: "content/guides/overview.mdx",
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
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          slug: "custom-section",
          contents: [
            {
              page: "Page",
              path: "content/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    expect(result.indexEntries["guides/custom-section/page"]).toBeDefined();
  });

  test("should skip slug if skip-slug is true", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Getting Started",
          "skip-slug": true,
          contents: [
            {
              page: "Page",
              path: "content/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    // Page should be directly under guides, not guides/getting-started
    expect(result.indexEntries["guides/page"]).toBeDefined();
  });

  test("should mark hidden section with hidden flag", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Hidden Section",
          hidden: true,
          contents: [
            {
              page: "Page",
              path: "content/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("hidden", true);
    expect(result.navItem).toHaveProperty("type", "section");
    expect(result.navItem).toHaveProperty("title", "Hidden Section");
    // Children should still be present
    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      "children" in result.navItem
    ) {
      expect(result.navItem.children).toHaveLength(1);
    }
    // Index entries should still be created
    expect(Object.keys(result.indexEntries).length).toBeGreaterThan(0);
  });

  test("should mark section hidden when all children are hidden", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Looks Visible",
          contents: [
            {
              page: "Hidden A",
              path: "content/guides/a.mdx",
              hidden: true,
            },
            {
              page: "Hidden B",
              path: "content/guides/b.mdx",
              hidden: true,
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    // Section itself should be marked hidden since all children are hidden
    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("hidden", true);
    // Children should still be present
    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      "children" in result.navItem
    ) {
      expect(result.navItem.children).toHaveLength(2);
    }
  });

  test("should not mark section hidden when some children are visible", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Mixed Section",
          contents: [
            {
              page: "Hidden Page",
              path: "content/guides/hidden.mdx",
              hidden: true,
            },
            {
              page: "Visible Page",
              path: "content/guides/visible.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    expect(result.navItem).toBeDefined();
    expect(result.navItem).not.toHaveProperty("hidden");
  });

  test("should recursively process nested sections", () => {
    const context = new ProcessingContext("docs");
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
                  path: "content/guides/deep.mdx",
                },
              ],
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
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
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("content/guides/quickstart.mdx", {
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
              path: "content/guides/quickstart.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
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

  test("should not add Algolia record for hidden section overview page", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("content/guides/overview.mdx", {
      frontmatter: { title: "Overview" },
      content: "Hidden overview content",
    });

    visitSection(
      {
        item: {
          section: "Hidden Section",
          hidden: true,
          path: "content/guides/overview.mdx",
          contents: [
            {
              page: "Page",
              path: "content/guides/page.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(0);
  });

  test("should not add Algolia records for children of hidden section", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("content/guides/quickstart.mdx", {
      frontmatter: { title: "Quickstart" },
      content: "Content inside hidden section",
    });

    cache.setMdxContent("content/guides/advanced.mdx", {
      frontmatter: { title: "Advanced" },
      content: "Advanced content inside hidden section",
    });

    visitSection(
      {
        item: {
          section: "Hidden Section",
          hidden: true,
          contents: [
            {
              page: "Quickstart",
              path: "content/guides/quickstart.mdx",
            },
            {
              page: "Advanced",
              path: "content/guides/advanced.mdx",
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    const results = context.getResults();
    // No Algolia records should be created for children of hidden sections
    expect(results.algoliaRecords).toHaveLength(0);
    // But index entries should still exist (routing still works)
  });

  test("should not add Algolia records for nested sections within hidden section", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    cache.setMdxContent("content/guides/deep-page.mdx", {
      frontmatter: { title: "Deep Page" },
      content: "Deeply nested content",
    });

    visitSection(
      {
        item: {
          section: "Hidden Parent",
          hidden: true,
          contents: [
            {
              section: "Visible Child Section",
              contents: [
                {
                  page: "Deep Page",
                  path: "content/guides/deep-page.mdx",
                },
              ],
            },
          ],
        },
        parentPath: PathBuilder.init("guides"),
        tab: "guides",
        stripPathPrefix: undefined,
        contentCache: cache,
        context,
        navigationAncestors: [],
      },
      visitNavigationItem,
    );

    const results = context.getResults();
    // Hidden status should propagate through nested sections
    expect(results.algoliaRecords).toHaveLength(0);
  });

  test("should handle section with mix of pages and subsections", () => {
    const context = new ProcessingContext("docs");
    const cache = new ContentCache();

    const result = visitSection(
      {
        item: {
          section: "Documentation",
          contents: [
            {
              page: "Overview",
              path: "content/docs/overview.mdx",
            },
            {
              section: "API Reference",
              contents: [
                {
                  page: "Authentication",
                  path: "content/docs/auth.mdx",
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
        stripPathPrefix: undefined,
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
