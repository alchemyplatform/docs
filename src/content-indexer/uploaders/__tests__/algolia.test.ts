import { describe, expect, test, vi } from "vitest";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia";

import { uploadToAlgolia } from "../algolia";

describe("uploadToAlgolia", () => {
  test("should skip if no ALGOLIA_APP_ID", async () => {
    const originalAppId = process.env.ALGOLIA_APP_ID;
    const originalKey = process.env.ALGOLIA_ADMIN_API_KEY;

    delete process.env.ALGOLIA_APP_ID;
    process.env.ALGOLIA_ADMIN_API_KEY = "test-key";

    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const records: AlgoliaRecord[] = [];

    await uploadToAlgolia(records, { indexerType: "main" });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Algolia credentials not found"),
    );

    consoleSpy.mockRestore();
    process.env.ALGOLIA_APP_ID = originalAppId;
    process.env.ALGOLIA_ADMIN_API_KEY = originalKey;
  });

  test("should skip if no ALGOLIA_ADMIN_API_KEY", async () => {
    const originalAppId = process.env.ALGOLIA_APP_ID;
    const originalKey = process.env.ALGOLIA_ADMIN_API_KEY;

    process.env.ALGOLIA_APP_ID = "test-app-id";
    delete process.env.ALGOLIA_ADMIN_API_KEY;

    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const records: AlgoliaRecord[] = [];

    await uploadToAlgolia(records, { indexerType: "main" });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Algolia credentials not found"),
    );

    consoleSpy.mockRestore();
    process.env.ALGOLIA_APP_ID = originalAppId;
    process.env.ALGOLIA_ADMIN_API_KEY = originalKey;
  });

  test("should skip if index name not configured for docs mode", async () => {
    const originalAppId = process.env.ALGOLIA_APP_ID;
    const originalKey = process.env.ALGOLIA_ADMIN_API_KEY;
    const originalIndexName = process.env.ALGOLIA_INDEX_NAME;

    process.env.ALGOLIA_APP_ID = "test-app-id";
    process.env.ALGOLIA_ADMIN_API_KEY = "test-key";
    delete process.env.ALGOLIA_INDEX_NAME;

    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const records: AlgoliaRecord[] = [];

    await uploadToAlgolia(records, { indexerType: "main" });

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("not set"));

    consoleSpy.mockRestore();
    process.env.ALGOLIA_APP_ID = originalAppId;
    process.env.ALGOLIA_ADMIN_API_KEY = originalKey;
    process.env.ALGOLIA_INDEX_NAME = originalIndexName;
  });

  test("should skip if wallet index name not configured", async () => {
    const originalAppId = process.env.ALGOLIA_APP_ID;
    const originalKey = process.env.ALGOLIA_ADMIN_API_KEY;
    const originalWalletIndexName = process.env.ALGOLIA_WALLET_INDEX_NAME;

    process.env.ALGOLIA_APP_ID = "test-app-id";
    process.env.ALGOLIA_ADMIN_API_KEY = "test-key";
    delete process.env.ALGOLIA_WALLET_INDEX_NAME;

    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const records: AlgoliaRecord[] = [];

    await uploadToAlgolia(records, { indexerType: "sdk" });

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("not set"));

    consoleSpy.mockRestore();
    process.env.ALGOLIA_APP_ID = originalAppId;
    process.env.ALGOLIA_ADMIN_API_KEY = originalKey;
    process.env.ALGOLIA_WALLET_INDEX_NAME = originalWalletIndexName;
  });
});
