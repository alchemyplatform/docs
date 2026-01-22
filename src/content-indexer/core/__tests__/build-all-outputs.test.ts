import { beforeEach, describe, expect, test, vi } from "vitest";

import type { DocsYml } from "@/content-indexer/types/docsYaml.ts";
import { visitNavigationItem } from "@/content-indexer/visitors/index.ts";

import { buildAllOutputs } from "../build-all-outputs.ts";
import { ContentCache } from "../content-cache.ts";

// Mock the visitor
vi.mock("@/content-indexer/visitors", () => ({
  visitNavigationItem: vi.fn(),
}));

describe("buildAllOutputs", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should process navigation items and return results", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
            {
              page: "quickstart.mdx",
              path: "quickstart.mdx",
            },
          ],
        },
      ],
    };

    const cache = new ContentCache();

    vi.mocked(visitNavigationItem).mockReturnValue({
      indexEntries: {
        "guides/quickstart": {
          type: "mdx",
          source: "docs-yml",
          filePath: "quickstart.mdx",
          tab: "guides",
        },
      },
      navItem: {
        type: "page",
        title: "Quickstart",
        path: "/guides/quickstart",
      },
    });

    const result = buildAllOutputs(docsYml, cache, "docs");

    // Verify visitor was called
    expect(visitNavigationItem).toHaveBeenCalled();

    // Verify results
    expect(result.pathIndex).toHaveProperty("guides/quickstart");
    expect(result.navigationTrees).toHaveProperty("guides");
    expect(result.navigationTrees.guides).toHaveLength(1);
  });

  test("should handle multiple tabs", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [{ page: "intro.mdx", path: "intro.mdx" }],
        },
        {
          tab: "reference",
          layout: [{ api: "API", "api-name": "ethereum-api" }],
        },
      ],
    };

    const cache = new ContentCache();

    vi.mocked(visitNavigationItem)
      .mockReturnValueOnce({
        indexEntries: {
          "guides/intro": {
            type: "mdx",
            source: "docs-yml",
            filePath: "intro.mdx",
            tab: "guides",
          },
        },
        navItem: { type: "page", title: "Intro", path: "/guides/intro" },
      })
      .mockReturnValueOnce({
        indexEntries: {
          "reference/api": {
            type: "openapi",
            source: "docs-yml",
            operationId: "getBalance",
            specUrl: "url",
            tab: "reference",
          },
        },
        navItem: {
          type: "api-section",
          title: "API",
          children: [],
        },
      });

    const result = buildAllOutputs(docsYml, cache, "docs");

    // Verify both tabs were processed
    expect(visitNavigationItem).toHaveBeenCalledTimes(2);
    expect(result.navigationTrees).toHaveProperty("guides");
    expect(result.navigationTrees).toHaveProperty("reference");
  });

  test("should skip items without tab or layout", () => {
    const docsYml = {
      navigation: [
        {
          // Missing tab and layout
        },
        {
          tab: "guides",
          // Missing layout
        },
        {
          tab: "valid",
          layout: [{ page: "test.mdx", path: "test.mdx" }],
        },
      ],
    } as DocsYml;

    const cache = new ContentCache();

    vi.mocked(visitNavigationItem).mockReturnValue({
      indexEntries: {},
      navItem: { type: "page", title: "Test", path: "/test" },
    });

    buildAllOutputs(docsYml, cache, "docs");

    // Only the valid item should be processed
    expect(visitNavigationItem).toHaveBeenCalledTimes(1);
  });

  test("should apply tab configuration", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "api-reference",
          layout: [{ page: "intro.mdx", path: "intro.mdx" }],
        },
      ],
      tabs: {
        "api-reference": {
          "display-name": "API Reference",
          slug: "reference",
          "skip-slug": false,
        },
      },
    };

    const cache = new ContentCache();

    vi.mocked(visitNavigationItem).mockReturnValue({
      indexEntries: {},
    });

    buildAllOutputs(docsYml, cache, "sdk");

    // Verify visitor was called with correct path builder
    expect(visitNavigationItem).toHaveBeenCalledWith(
      expect.objectContaining({
        tab: "api-reference",
      }),
    );
  });

  test("should handle skip-slug configuration", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "home",
          layout: [{ page: "index.mdx", path: "index.mdx" }],
        },
      ],
      tabs: {
        home: {
          "display-name": "Home",
          slug: "home",
          "skip-slug": true,
        },
      },
    };

    const cache = new ContentCache();

    vi.mocked(visitNavigationItem).mockReturnValue({
      indexEntries: {},
    });

    buildAllOutputs(docsYml, cache, "docs");

    expect(visitNavigationItem).toHaveBeenCalled();
  });

  test("should handle array navigation items", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [{ page: "test.mdx", path: "test.mdx" }],
        },
      ],
    };

    const cache = new ContentCache();

    // Return array of nav items
    vi.mocked(visitNavigationItem).mockReturnValue({
      indexEntries: {},
      navItem: [
        { type: "page", title: "Page 1", path: "/page1" },
        { type: "page", title: "Page 2", path: "/page2" },
      ],
    });

    const result = buildAllOutputs(docsYml, cache, "docs");

    // Both items should be added
    expect(result.navigationTrees.guides).toHaveLength(2);
  });

  test("should collect Algolia records from context", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [{ page: "test.mdx", path: "test.mdx" }],
        },
      ],
    };

    const cache = new ContentCache();
    cache.setMdxContent("test.mdx", {
      frontmatter: { title: "Test" },
      content: "Content",
    });

    // Mock visitor to use ProcessingContext
    vi.mocked(visitNavigationItem).mockImplementation(({ context }) => {
      context?.addAlgoliaRecord({
        title: "Test",
        content: "Content",
        path: "/guides/test",
        breadcrumbs: [],
        pageType: "Guide",
      });

      return {
        indexEntries: {},
        navItem: { type: "page", title: "Test", path: "/guides/test" },
      };
    });

    const result = buildAllOutputs(docsYml, cache, "docs");

    expect(result.algoliaRecords).toHaveLength(1);
    expect(result.algoliaRecords[0].title).toBe("Test");
    expect(result.algoliaRecords[0].indexerType).toBe("docs");
  });
});
