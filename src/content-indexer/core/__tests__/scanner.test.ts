import { describe, expect, test } from "vitest";

import type { DocsYml } from "@/content-indexer/types/docsYaml.ts";

import { scanDocsYml } from "../scanner.ts";

describe("scanner", () => {
  test("should throw error if navigation is missing", () => {
    const docsYml = {} as DocsYml;

    expect(() => scanDocsYml(docsYml)).toThrow(
      "Can't find navigation section in docs.yml",
    );
  });

  test("should scan pages from navigation", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
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
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths).toContain("content/guides/quickstart.mdx");
    expect(result.mdxPaths).toContain("content/guides/advanced.mdx");
    expect(result.mdxPaths.size).toBe(2);
  });

  test("should scan API specs from navigation", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "reference",
          layout: [
            {
              api: "Ethereum API",
              "api-name": "ethereum-api",
            },
            {
              api: "NFT API",
              "api-name": "nft-api",
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.specNames).toContain("ethereum-api");
    expect(result.specNames).toContain("nft-api");
    expect(result.specNames.size).toBe(2);
  });

  test("should handle sections with nested pages", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
            {
              section: "Getting Started",
              contents: [
                {
                  page: "Quickstart",
                  path: "content/guides/quickstart.mdx",
                },
                {
                  page: "Installation",
                  path: "content/guides/installation.mdx",
                },
              ],
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths).toContain("content/guides/quickstart.mdx");
    expect(result.mdxPaths).toContain("content/guides/installation.mdx");
    expect(result.mdxPaths.size).toBe(2);
  });

  test("should handle section with overview page", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
            {
              section: "Getting Started",
              path: "content/guides/overview.mdx",
              contents: [
                {
                  page: "Quickstart",
                  path: "content/guides/quickstart.mdx",
                },
              ],
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths).toContain("content/guides/overview.mdx");
    expect(result.mdxPaths).toContain("content/guides/quickstart.mdx");
    expect(result.mdxPaths.size).toBe(2);
  });

  test("should skip links in navigation", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
            {
              page: "Quickstart",
              path: "content/guides/quickstart.mdx",
            },
            {
              link: "External Link",
              href: "https://example.com",
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths.size).toBe(1);
    expect(result.mdxPaths).toContain("content/guides/quickstart.mdx");
  });

  test("should skip changelog in navigation", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
            {
              page: "Quickstart",
              path: "content/guides/quickstart.mdx",
            },
            {
              changelog: "CHANGELOG.md",
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths.size).toBe(1);
  });

  test("should handle deeply nested sections", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "guides",
          layout: [
            {
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
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths).toContain("content/guides/deep.mdx");
  });

  test("should deduplicate paths using Set", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "tab1",
          layout: [
            {
              page: "Page",
              path: "content/guides/page.mdx",
            },
          ],
        },
        {
          tab: "tab2",
          layout: [
            {
              page: "Page",
              path: "content/guides/page.mdx", // Duplicate
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths.size).toBe(1);
  });

  test("should handle mixed content types", () => {
    const docsYml: DocsYml = {
      navigation: [
        {
          tab: "all",
          layout: [
            {
              page: "Guide",
              path: "content/guides/guide.mdx",
            },
            {
              api: "API",
              "api-name": "my-api",
            },
            {
              section: "Section",
              contents: [
                {
                  page: "Nested",
                  path: "content/guides/nested.mdx",
                },
              ],
            },
            {
              link: "Link",
              href: "https://example.com",
            },
          ],
        },
      ],
    };

    const result = scanDocsYml(docsYml);
    expect(result.mdxPaths.size).toBe(2);
    expect(result.specNames.size).toBe(1);
    expect(result.mdxPaths).toContain("content/guides/guide.mdx");
    expect(result.mdxPaths).toContain("content/guides/nested.mdx");
    expect(result.specNames).toContain("my-api");
  });
});
