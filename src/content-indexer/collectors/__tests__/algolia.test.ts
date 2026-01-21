import { describe, expect, test } from "vitest";

import { AlgoliaCollector } from "../algolia.ts";

describe("AlgoliaCollector", () => {
  test("should initialize with empty records", () => {
    const collector = new AlgoliaCollector("docs");
    expect(collector.getRecords()).toEqual([]);
  });

  test("should add Guide record without httpMethod", () => {
    const collector = new AlgoliaCollector("docs");
    collector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart Guide",
      content: "This is a quickstart guide content",
      breadcrumbs: [
        { title: "Guides", path: "/guides", type: "section", children: [] },
        {
          title: "Getting Started",
          path: "/guides/getting-started",
          type: "section",
          children: [],
        },
      ],
    });

    const records = collector.getRecords();
    expect(records).toHaveLength(1);
    expect(records[0].pageType).toBe("Guide");
    expect(records[0].title).toBe("Quickstart Guide");
    expect(records[0].breadcrumbs).toEqual(["Guides", "Getting Started"]);
    expect(records[0].httpMethod).toBeUndefined();
    expect(records[0].indexerType).toBe("docs");
  });

  test("should add API Method record with httpMethod", () => {
    const collector = new AlgoliaCollector("sdk");
    collector.addRecord({
      pageType: "API Method",
      path: "reference/eth-getbalance",
      title: "eth_getBalance",
      content: "Get the balance of an address",
      httpMethod: "POST",
      breadcrumbs: [
        {
          title: "NFT API",
          path: "/reference/nft-api",
          type: "api-section",
          children: [],
        },
        { title: "NFT API Endpoints", type: "section", children: [] },
      ],
    });

    const records = collector.getRecords();
    expect(records).toHaveLength(1);
    expect(records[0].pageType).toBe("API Method");
    expect(records[0].httpMethod).toBe("POST");
    expect(records[0].breadcrumbs).toEqual(["NFT API", "NFT API Endpoints"]);
    expect(records[0].indexerType).toBe("sdk");
  });

  test("should generate stable objectID from path", () => {
    const collector = new AlgoliaCollector("docs");
    collector.addRecord({
      pageType: "API Method",
      path: "reference/eth-getbalance",
      title: "eth_getBalance",
      content: "Description",
      httpMethod: "POST",
      breadcrumbs: [
        { title: "NFT API", type: "section", children: [] },
        { title: "NFT API Endpoints", type: "section", children: [] },
      ],
    });

    const records = collector.getRecords();
    expect(records[0].objectID).toBeDefined();
    expect(records[0].objectID).toMatch(/^[a-f0-9]{16}$/); // Format: hash of 16 chars
    expect(typeof records[0].objectID).toBe("string");
    expect(records[0].indexerType).toBe("docs");
  });

  test("should filter out link breadcrumbs", () => {
    const collector = new AlgoliaCollector("docs");
    collector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Content",
      breadcrumbs: [
        { title: "Guides", path: "/guides", type: "section", children: [] },
        { title: "External Link", href: "https://example.com", type: "link" },
        {
          title: "Getting Started",
          path: "/guides/getting-started",
          type: "section",
          children: [],
        },
      ],
    });

    const records = collector.getRecords();
    expect(records[0].breadcrumbs).toEqual(["Guides", "Getting Started"]);
    expect(records[0].breadcrumbs).not.toContain("External Link");
  });

  test("should handle multiple records", () => {
    const collector = new AlgoliaCollector("changelog");
    collector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Content 1",
      breadcrumbs: [],
    });
    collector.addRecord({
      pageType: "API Method",
      path: "reference/method",
      title: "method1",
      content: "Content 2",
      httpMethod: "GET",
      breadcrumbs: [],
    });

    const records = collector.getRecords();
    expect(records).toHaveLength(2);
    expect(records[0].indexerType).toBe("changelog");
    expect(records[1].indexerType).toBe("changelog");
  });

  test("should handle empty breadcrumbs", () => {
    const collector = new AlgoliaCollector("docs");
    collector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Content",
      breadcrumbs: [],
    });

    const records = collector.getRecords();
    expect(records[0].breadcrumbs).toEqual([]);
    // ObjectID should still be generated (using path hash)
    expect(records[0].objectID).toBeDefined();
    expect(records[0].objectID).toMatch(/^[a-f0-9]{16}$/);
  });

  test("should generate consistent objectID for same path and indexer type", () => {
    const collector1 = new AlgoliaCollector("docs");
    collector1.addRecord({
      pageType: "API Method",
      path: "reference/eth-getbalance",
      title: "eth_getBalance",
      content: "Content 1",
      httpMethod: "POST",
      breadcrumbs: [
        { title: "API", type: "section", children: [] },
        { title: "Ethereum Endpoints", type: "section", children: [] },
      ],
    });

    const collector2 = new AlgoliaCollector("docs");
    collector2.addRecord({
      pageType: "API Method",
      path: "reference/eth-getbalance", // Same path
      title: "eth_getBalance_v2", // Different title
      content: "Content 2", // Different content
      httpMethod: "GET", // Different method
      breadcrumbs: [
        { title: "Different API", type: "section", children: [] }, // Different breadcrumbs
      ],
    });

    const records1 = collector1.getRecords();
    const records2 = collector2.getRecords();
    // Same path and indexer type should generate same objectID, regardless of other metadata
    expect(records1[0].objectID).toBe(records2[0].objectID);
  });

  test("should generate different objectIDs for different paths", () => {
    const collector = new AlgoliaCollector("docs");
    collector.addRecord({
      pageType: "API Method",
      path: "reference/eth-getbalance",
      title: "eth_getBalance",
      content: "Content",
      httpMethod: "POST",
      breadcrumbs: [
        { title: "API", type: "section", children: [] },
        { title: "Ethereum Endpoints", type: "section", children: [] },
      ],
    });
    collector.addRecord({
      pageType: "API Method",
      path: "reference/eth-blocknumber",
      title: "eth_getBalance", // Same title
      content: "Content",
      httpMethod: "POST",
      breadcrumbs: [
        { title: "API", type: "section", children: [] },
        { title: "Ethereum Endpoints", type: "section", children: [] }, // Same breadcrumbs
      ],
    });

    const records = collector.getRecords();
    // Different paths should generate different objectIDs, even with same title/breadcrumbs
    expect(records[0].objectID).not.toBe(records[1].objectID);
  });

  test("should generate same objectID for same path across different indexer types", () => {
    const docsCollector = new AlgoliaCollector("docs");
    docsCollector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Content",
      breadcrumbs: [],
    });

    const sdkCollector = new AlgoliaCollector("sdk");
    sdkCollector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart", // Same path
      title: "Quickstart",
      content: "Content",
      breadcrumbs: [],
    });

    const docsRecords = docsCollector.getRecords();
    const sdkRecords = sdkCollector.getRecords();

    // Same path generates same objectID, but indexerType differentiates them
    expect(docsRecords[0].objectID).toBe(sdkRecords[0].objectID);
    expect(docsRecords[0].indexerType).toBe("docs");
    expect(sdkRecords[0].indexerType).toBe("sdk");

    // indexerType field is what allows filtering/targeted updates
    expect(docsRecords[0].indexerType).not.toBe(sdkRecords[0].indexerType);
  });
});
