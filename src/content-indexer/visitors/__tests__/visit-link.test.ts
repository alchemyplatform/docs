import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import { ContentCache } from "@/content-indexer/core/content-cache.ts";
import { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import { DOCS_REPO } from "@/content-indexer/utils/github.ts";

import { visitLink } from "../visit-link.ts";

describe("visitLink", () => {
  test("should create link nav item", () => {
    const context = new ProcessingContext();
    const result = visitLink({
      item: {
        link: "External Resource",
        href: "https://example.com/docs",
      },
      parentPath: PathBuilder.init("guides"),
      tab: "guides",
      repo: DOCS_REPO,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.indexEntries).toEqual({});
    expect(result.navItem).toEqual({
      title: "External Resource",
      href: "https://example.com/docs",
      type: "link",
    });
  });

  test("should not add path index entries for links", () => {
    const context = new ProcessingContext();
    const result = visitLink({
      item: {
        link: "GitHub",
        href: "https://github.com",
      },
      parentPath: PathBuilder.init(),
      tab: "reference",
      repo: DOCS_REPO,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.indexEntries).toEqual({});
    expect(Object.keys(result.indexEntries)).toHaveLength(0);
  });

  test("should preserve exact link title and href", () => {
    const context = new ProcessingContext();
    const result = visitLink({
      item: {
        link: "API Reference (External)",
        href: "https://api.example.com/v2/docs#section",
      },
      parentPath: PathBuilder.init(),
      tab: "reference",
      repo: DOCS_REPO,
      contentCache: new ContentCache(),
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toBeDefined();
    if (result.navItem && "href" in result.navItem) {
      expect(result.navItem.title).toBe("API Reference (External)");
      expect(result.navItem.href).toBe(
        "https://api.example.com/v2/docs#section",
      );
    }
  });
});
