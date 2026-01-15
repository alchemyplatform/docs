import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import { ContentCache } from "@/content-indexer/core/content-cache.ts";
import { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import {
  openApiSpecFactory,
  openRpcSpecFactory,
} from "@/content-indexer/utils/test-factories.js";

import { visitApiReference } from "../visit-api-reference.ts";

describe("visitApiReference", () => {
  test("should return empty result if spec not in cache", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    const result = visitApiReference({
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

    expect(result.indexEntries).toEqual({});
    expect(result.navItem).toBeUndefined();
  });

  test("should process OpenAPI spec", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setSpec("ethereum-api", {
      specType: "openapi",
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              summary: "Get Balance",
              description: "Get the balance of an address",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specUrl: "https://example.com/spec.json",
    });

    const result = visitApiReference({
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

    expect(Object.keys(result.indexEntries).length).toBeGreaterThan(0);
    expect(result.navItem).toBeDefined();
  });

  test("should process OpenRPC spec", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setSpec("solana-api", {
      specType: "openrpc",
      spec: openRpcSpecFactory({
        info: { title: "Solana API", version: "1.0.0" },
        methods: [
          {
            name: "getAsset",
            description: "Get asset information",
            params: [],
            result: { name: "result", schema: {} },
          },
        ],
      }),
      specUrl: "https://example.com/rpc-spec.json",
    });

    const result = visitApiReference({
      item: {
        api: "Solana API",
        "api-name": "solana-api",
      },
      parentPath: PathBuilder.init("reference"),
      tab: "reference",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    expect(Object.keys(result.indexEntries).length).toBeGreaterThan(0);
    expect(result.navItem).toBeDefined();
  });

  test("should use custom slug for API", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setSpec("ethereum-api", {
      specType: "openapi",
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specUrl: "https://example.com/spec.json",
    });

    const result = visitApiReference({
      item: {
        api: "Ethereum API",
        "api-name": "ethereum-api",
        slug: "eth-api",
      },
      parentPath: PathBuilder.init("reference"),
      tab: "reference",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    const firstPath = Object.keys(result.indexEntries)[0];
    expect(firstPath).toContain("eth-api");
  });

  test("should skip slug if skip-slug is true", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setSpec("ethereum-api", {
      specType: "openapi",
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specUrl: "https://example.com/spec.json",
    });

    const result = visitApiReference({
      item: {
        api: "Ethereum API",
        "api-name": "ethereum-api",
        "skip-slug": true,
      },
      parentPath: PathBuilder.init("reference"),
      tab: "reference",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    const firstPath = Object.keys(result.indexEntries)[0];
    // Should not include "ethereum-api" segment
    expect(firstPath).toBe("reference/get-balance");
  });

  test("should return no nav for hidden API", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setSpec("ethereum-api", {
      specType: "openapi",
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specUrl: "https://example.com/spec.json",
    });

    const result = visitApiReference({
      item: {
        api: "Ethereum API",
        "api-name": "ethereum-api",
        hidden: true,
      },
      parentPath: PathBuilder.init("reference"),
      tab: "reference",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    expect(result.navItem).toBeUndefined();
    expect(Object.keys(result.indexEntries).length).toBeGreaterThan(0); // Index still created
  });

  test("should flatten API structure if flattened is true", () => {
    const context = new ProcessingContext();
    const cache = new ContentCache();

    cache.setSpec("ethereum-api", {
      specType: "openapi",
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              tags: ["ethereum"],
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specUrl: "https://example.com/spec.json",
    });

    const result = visitApiReference({
      item: {
        api: "Ethereum API",
        "api-name": "ethereum-api",
        flattened: true,
      },
      parentPath: PathBuilder.init("reference"),
      tab: "reference",
      stripPathPrefix: undefined,
      contentCache: cache,
      context,
      navigationAncestors: [],
    });

    // Should return array instead of wrapped in API section
    expect(Array.isArray(result.navItem)).toBe(true);
  });
});
