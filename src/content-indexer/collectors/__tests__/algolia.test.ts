import { describe, expect, test } from "vitest";

import { AlgoliaCollector } from "../algolia.js";

describe("AlgoliaCollector", () => {
  test("should initialize with empty records", () => {
    const collector = new AlgoliaCollector();
    expect(collector.getRecords()).toEqual([]);
  });

  test("should add Guide record without httpMethod", () => {
    const collector = new AlgoliaCollector();
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
  });

  test("should add API Method record with httpMethod", () => {
    const collector = new AlgoliaCollector();
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
  });

  test("should generate stable objectID from last breadcrumb + title", () => {
    const collector = new AlgoliaCollector();
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
    expect(records[0].objectID).toHaveLength(16); // SHA-256 hash first 16 chars
    expect(typeof records[0].objectID).toBe("string");
  });

  test("should filter out link breadcrumbs", () => {
    const collector = new AlgoliaCollector();
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
    const collector = new AlgoliaCollector();
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
  });

  test("should handle empty breadcrumbs", () => {
    const collector = new AlgoliaCollector();
    collector.addRecord({
      pageType: "Guide",
      path: "guides/quickstart",
      title: "Quickstart",
      content: "Content",
      breadcrumbs: [],
    });

    const records = collector.getRecords();
    expect(records[0].breadcrumbs).toEqual([]);
    // ObjectID should still be generated (using "unknown" + title)
    expect(records[0].objectID).toBeDefined();
  });

  test("should generate consistent objectID for same last breadcrumb + title", () => {
    const collector1 = new AlgoliaCollector();
    collector1.addRecord({
      pageType: "API Method",
      path: "reference/path1",
      title: "eth_getBalance",
      content: "Content 1",
      httpMethod: "POST",
      breadcrumbs: [
        { title: "API", type: "section", children: [] },
        { title: "Ethereum Endpoints", type: "section", children: [] },
      ],
    });

    const collector2 = new AlgoliaCollector();
    collector2.addRecord({
      pageType: "API Method",
      path: "reference/different-path",
      title: "eth_getBalance",
      content: "Content 2",
      httpMethod: "GET",
      breadcrumbs: [
        { title: "API", type: "section", children: [] },
        { title: "Ethereum Endpoints", type: "section", children: [] },
      ],
    });

    const records1 = collector1.getRecords();
    const records2 = collector2.getRecords();
    // Same last breadcrumb + title should generate same objectID
    expect(records1[0].objectID).toBe(records2[0].objectID);
  });
});
