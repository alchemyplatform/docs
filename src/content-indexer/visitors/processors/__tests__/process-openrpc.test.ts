import { describe, expect, test, vi } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.js";
import { ContentCache } from "@/content-indexer/core/content-cache.js";
import { PathBuilder } from "@/content-indexer/core/path-builder.js";
import type { OpenRpcSpec } from "@/content-indexer/types/specs.js";
import { DOCS_REPO } from "@/content-indexer/utils/github.js";
import { openRpcSpecFactory } from "@/content-indexer/utils/test-factories.js";

import { processOpenRpcSpec } from "../process-openrpc.js";

describe("processOpenRpcSpec", () => {
  test("should return empty result for invalid spec", () => {
    const context = new ProcessingContext();
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = processOpenRpcSpec({
      spec: {} as OpenRpcSpec, // Invalid spec without methods array
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "Test API",
      isHidden: false,
      isFlattened: false,
    });

    expect(result.indexEntries).toEqual({});
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Invalid OpenRPC spec"),
    );

    consoleSpy.mockRestore();
  });

  test("should process methods and create index entries", () => {
    const context = new ProcessingContext();

    const result = processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "getAsset",
            description: "Get asset information",
            params: [],
            result: { name: "result", schema: {} },
          },
          {
            name: "getAccountInfo",
            summary: "Get account info",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/rpc-spec.json",
      visitorConfig: {
        item: { api: "Solana API", "api-name": "solana-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/solana"),
      apiTitle: "Solana API",
      isHidden: false,
      isFlattened: false,
    });

    expect(Object.keys(result.indexEntries)).toHaveLength(2);
    const entry = result.indexEntries["reference/solana/get-asset"];
    expect(entry).toBeDefined();
    expect(entry.type).toBe("openrpc");
    if (entry.type === "openrpc") {
      expect(entry.methodName).toBe("getAsset");
    }
  });

  test("should create navigation with API section wrapper", () => {
    const context = new ProcessingContext();

    const result = processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "getAsset",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "Solana API", "api-name": "solana-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/solana"),
      apiTitle: "Solana API",
      isHidden: false,
      isFlattened: false,
    });

    expect(result.navItem).toBeDefined();
    expect(result.navItem).toHaveProperty("type", "api-section");
    expect(result.navItem).toHaveProperty("title", "Solana API");
    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      (result.navItem.type === "section" ||
        result.navItem.type === "api-section")
    ) {
      expect(result.navItem.children).toHaveLength(1);
    }
  });

  test("should flatten navigation if flattened is true", () => {
    const context = new ProcessingContext();

    const result = processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "getAsset",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "Solana API", "api-name": "solana-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/solana"),
      apiTitle: "Solana API",
      isHidden: false,
      isFlattened: true,
    });

    expect(Array.isArray(result.navItem)).toBe(true);
  });

  test("should not create nav if hidden", () => {
    const context = new ProcessingContext();

    const result = processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "getAsset",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "Solana API", "api-name": "solana-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/solana"),
      apiTitle: "Solana API",
      isHidden: true,
      isFlattened: false,
    });

    expect(result.navItem).toBeUndefined();
    expect(Object.keys(result.indexEntries).length).toBeGreaterThan(0); // Index still created
  });

  test("should add Algolia records for methods", () => {
    const context = new ProcessingContext();

    processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "getAsset",
            description: "Get asset information",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "Solana API", "api-name": "solana-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [
          {
            title: "Reference",
            path: "/reference",
            type: "section",
            children: [],
          },
        ],
      },
      apiPathBuilder: PathBuilder.init("reference/solana"),
      apiTitle: "Solana API",
      isHidden: false,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(1);
    expect(results.algoliaRecords[0].title).toBe("getAsset");
    expect(results.algoliaRecords[0].pageType).toBe("API Method");
    expect(results.algoliaRecords[0].httpMethod).toBe("POST");
  });

  test("should use method name as title", () => {
    const context = new ProcessingContext();

    processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "customMethodName",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "Test API",
      isHidden: false,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords[0].title).toBe("customMethodName");
  });

  test("should use description over summary for Algolia content", () => {
    const context = new ProcessingContext();

    processOpenRpcSpec({
      spec: openRpcSpecFactory({
        methods: [
          {
            name: "getAsset",
            description: "Full description",
            summary: "Short summary",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        repo: DOCS_REPO,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "Test API",
      isHidden: false,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords[0].content).toBe("Full description");
  });
});
