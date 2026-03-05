import { describe, expect, test } from "vitest";

import { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import { ContentCache } from "@/content-indexer/core/content-cache.ts";
import { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import { openApiSpecFactory } from "@/content-indexer/utils/test-factories.ts";

import { processOpenApiSpec } from "../process-openapi.ts";

describe("processOpenApiSpec", () => {
  test("should process operations and create index entries", () => {
    const context = new ProcessingContext("docs");

    const result = processOpenApiSpec({
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
          "/transfer": {
            post: {
              operationId: "transfer",
              summary: "Transfer",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "Ethereum API", "api-name": "ethereum-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/ethereum"),
      apiTitle: "Ethereum API",
      isHidden: false,
      isFlattened: false,
    });

    expect(Object.keys(result.indexEntries)).toHaveLength(2);
    expect(result.indexEntries["reference/ethereum/get-balance"]).toBeDefined();
    expect(result.indexEntries["reference/ethereum/transfer"]).toBeDefined();
  });

  test("should group operations by tag", () => {
    const context = new ProcessingContext("docs");

    const result = processOpenApiSpec({
      spec: openApiSpecFactory({
        paths: {
          "/users": {
            get: {
              operationId: "getUsers",
              tags: ["users"],
              responses: { "200": { description: "Success" } },
            },
          },
          "/posts": {
            get: {
              operationId: "getPosts",
              tags: ["posts"],
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "API",
      isHidden: false,
      isFlattened: false,
    });

    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      (result.navItem.type === "section" ||
        result.navItem.type === "api-section")
    ) {
      expect(result.navItem.children).toHaveLength(2); // 2 tag sections
      const firstChild = result.navItem.children[0];
      expect(firstChild.type).toBe("section");
      if (firstChild.type === "section" || firstChild.type === "api-section") {
        expect(firstChild.title).toMatch(/users|posts/);
      }
    }
  });

  test("should use summary as operation title", () => {
    const context = new ProcessingContext("docs");

    processOpenApiSpec({
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              summary: "Get Account Balance",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "API",
      isHidden: false,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords[0].title).toBe("Get Account Balance");
  });

  test("should fallback to operationId for title if no summary", () => {
    const context = new ProcessingContext("docs");

    processOpenApiSpec({
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
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "API",
      isHidden: false,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords[0].title).toBe("getBalance");
  });

  test("should include tag in path if tag exists", () => {
    const context = new ProcessingContext("docs");

    const result = processOpenApiSpec({
      spec: openApiSpecFactory({
        paths: {
          "/users": {
            get: {
              operationId: "getUsers",
              tags: ["users"],
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "API",
      isHidden: false,
      isFlattened: false,
    });

    expect(result.indexEntries["reference/api/users/get-users"]).toBeDefined();
  });

  test("should add Algolia records with breadcrumbs", () => {
    const context = new ProcessingContext("docs");

    processOpenApiSpec({
      spec: openApiSpecFactory({
        paths: {
          "/balance": {
            get: {
              operationId: "getBalance",
              description: "Get balance description",
              responses: { "200": { description: "Success" } },
            },
          },
        },
      }),
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "Ethereum API", "api-name": "ethereum-api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
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
      apiPathBuilder: PathBuilder.init("reference/ethereum"),
      apiTitle: "Ethereum API",
      isHidden: false,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords[0].breadcrumbs).toContain("Reference");
    expect(results.algoliaRecords[0].breadcrumbs).toContain("Ethereum API");
  });

  test("should not add Algolia records if hidden", () => {
    const context = new ProcessingContext("docs");

    processOpenApiSpec({
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
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "API",
      isHidden: true,
      isFlattened: false,
    });

    const results = context.getResults();
    expect(results.algoliaRecords).toHaveLength(0);
  });

  test("should handle operations without tags", () => {
    const context = new ProcessingContext("docs");

    const result = processOpenApiSpec({
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
      specId: "https://example.com/spec.json",
      visitorConfig: {
        item: { api: "API", "api-name": "api" },
        parentPath: PathBuilder.init(),
        tab: "reference",
        stripPathPrefix: undefined,
        contentCache: new ContentCache(),
        context,
        navigationAncestors: [],
      },
      apiPathBuilder: PathBuilder.init("reference/api"),
      apiTitle: "API",
      isHidden: false,
      isFlattened: false,
    });

    // Operations without tags should be added directly without tag wrapper
    if (
      result.navItem &&
      !Array.isArray(result.navItem) &&
      (result.navItem.type === "section" ||
        result.navItem.type === "api-section")
    ) {
      expect(result.navItem.children[0].type).toBe("endpoint");
    }
  });
});
