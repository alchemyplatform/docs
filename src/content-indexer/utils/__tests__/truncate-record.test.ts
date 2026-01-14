import { describe, expect, test, vi } from "vitest";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia.ts";

import { truncateRecord } from "../truncate-record.ts";

describe("truncateRecord", () => {
  test("should return record unchanged if under size limit", () => {
    const record: AlgoliaRecord = {
      objectID: "abc123",
      path: "guides/quickstart",
      pageType: "Guide",
      title: "Quickstart",
      content: "Short content",
      breadcrumbs: ["Guides"],
    };

    const result = truncateRecord(record);
    expect(result).toEqual(record);
    expect(result.content).toBe("Short content");
  });

  test("should truncate content for oversized record", () => {
    // Create a record with content exceeding 100KB
    const largeContent = "x".repeat(150_000);
    const record: AlgoliaRecord = {
      objectID: "abc123",
      path: "guides/large",
      pageType: "Guide",
      title: "Large Page",
      content: largeContent,
      breadcrumbs: ["Guides"],
    };

    const result = truncateRecord(record);
    expect(result.content).not.toBe(largeContent);
    expect(result.content.length).toBeLessThan(largeContent.length);
    expect(result.content).toMatch(/\.\.\.$/); // Ends with "..."
    expect(
      Buffer.byteLength(JSON.stringify(result), "utf8"),
    ).toBeLessThanOrEqual(100_000);
  });

  test("should preserve all fields except content", () => {
    const largeContent = "x".repeat(150_000);
    const record: AlgoliaRecord = {
      objectID: "abc123",
      path: "reference/method",
      pageType: "API Method",
      title: "eth_getBalance",
      content: largeContent,
      breadcrumbs: ["API", "Ethereum"],
      httpMethod: "POST",
    };

    const result = truncateRecord(record);
    expect(result.objectID).toBe(record.objectID);
    expect(result.path).toBe(record.path);
    expect(result.pageType).toBe(record.pageType);
    expect(result.title).toBe(record.title);
    expect(result.breadcrumbs).toEqual(record.breadcrumbs);
    expect(result.httpMethod).toBe(record.httpMethod);
  });

  test("should throw error if overhead is too large", () => {
    const record: AlgoliaRecord = {
      objectID: "abc123",
      path: "guides/test",
      pageType: "Guide",
      title: "Test",
      content: "Content",
      breadcrumbs: Array(50_000).fill("B"), // Many breadcrumbs = huge overhead
    };

    expect(() => truncateRecord(record)).toThrow(
      /Record overhead .* is too large/,
    );
  });

  test("should log warning for oversized record", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const largeContent = "x".repeat(150_000);
    const record: AlgoliaRecord = {
      objectID: "abc123",
      path: "guides/large",
      pageType: "Guide",
      title: "Large Page",
      content: largeContent,
      breadcrumbs: [],
    };

    truncateRecord(record);

    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy.mock.calls[0][0]).toContain("exceeds");
    expect(warnSpy.mock.calls[0][0]).toContain("Large Page");

    warnSpy.mockRestore();
  });

  test("should handle record at exactly the size limit", () => {
    // Create content to make record exactly 100KB
    const targetSize = 100_000;
    const overhead = 200; // Approximate overhead
    const content = "x".repeat(targetSize - overhead);

    const record: AlgoliaRecord = {
      objectID: "abc",
      path: "path",
      pageType: "Guide",
      title: "Title",
      content,
      breadcrumbs: [],
    };

    const result = truncateRecord(record);
    const resultSize = Buffer.byteLength(JSON.stringify(result), "utf8");
    expect(resultSize).toBeLessThanOrEqual(100_000);
  });
});
