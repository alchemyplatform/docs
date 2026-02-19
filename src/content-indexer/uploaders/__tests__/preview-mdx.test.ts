import fs from "fs/promises";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { uploadChangedMdxFiles, uploadMdxFile } from "../preview-mdx.ts";

vi.mock("fs/promises");
vi.mock("child_process");

const mockRedis = {
  set: vi.fn(),
  get: vi.fn(),
  del: vi.fn(),
};

beforeEach(() => {
  vi.resetAllMocks();
});

describe("uploadMdxFile", () => {
  test("uploads file content to branch-scoped Redis key", async () => {
    vi.mocked(fs.readFile).mockResolvedValue("---\ntitle: Hello\n---\n# Hello");
    mockRedis.get.mockResolvedValue(null);

    const result = await uploadMdxFile(
      "pages/intro.mdx",
      "ds/feature",
      mockRedis as never,
    );

    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/intro.mdx",
      "---\ntitle: Hello\n---\n# Hello",
      { ex: expect.any(Number) },
    );
    expect(result.reindexNeeded).toBe(false);
  });

  test("detects routing-relevant frontmatter changes", async () => {
    const newContent = "---\ntitle: New Title\nslug: new-slug\n---\n# Hello";
    const mainContent = "---\ntitle: Old Title\nslug: old-slug\n---\n# Hello";

    vi.mocked(fs.readFile).mockResolvedValue(newContent);
    mockRedis.get.mockResolvedValue(mainContent);

    const result = await uploadMdxFile(
      "pages/intro.mdx",
      "ds/feature",
      mockRedis as never,
    );

    expect(result.reindexNeeded).toBe(true);
  });

  test("returns reindexNeeded=false when frontmatter unchanged", async () => {
    const content = "---\ntitle: Same\nslug: same\n---\n# Body changed";
    const mainContent = "---\ntitle: Same\nslug: same\n---\n# Original body";

    vi.mocked(fs.readFile).mockResolvedValue(content);
    mockRedis.get.mockResolvedValue(mainContent);

    const result = await uploadMdxFile(
      "pages/intro.mdx",
      "ds/feature",
      mockRedis as never,
    );

    expect(result.reindexNeeded).toBe(false);
  });

  test("handles ENOENT by deleting Redis key and requesting reindex", async () => {
    const error = new Error("ENOENT") as NodeJS.ErrnoException;
    error.code = "ENOENT";
    vi.mocked(fs.readFile).mockRejectedValue(error);

    const result = await uploadMdxFile(
      "pages/deleted.mdx",
      "ds/feature",
      mockRedis as never,
    );

    expect(mockRedis.del).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/deleted.mdx",
    );
    expect(mockRedis.set).not.toHaveBeenCalled();
    expect(result.reindexNeeded).toBe(true);
  });

  test("rethrows non-ENOENT errors", async () => {
    vi.mocked(fs.readFile).mockRejectedValue(new Error("EACCES"));

    await expect(
      uploadMdxFile("pages/intro.mdx", "ds/feature", mockRedis as never),
    ).rejects.toThrow("EACCES");
  });

  test("rejects path traversal attempts", async () => {
    const result = await uploadMdxFile(
      "../../../etc/passwd",
      "ds/feature",
      mockRedis as never,
    );

    expect(fs.readFile).not.toHaveBeenCalled();
    expect(mockRedis.set).not.toHaveBeenCalled();
    expect(result.reindexNeeded).toBe(false);
  });
});

describe("uploadChangedMdxFiles", () => {
  test("uploads only changed files that exist in path index", async () => {
    const { execSync } = await import("child_process");
    vi.mocked(execSync).mockReturnValue(
      "fern/pages/intro.mdx\nfern/pages/deleted.mdx\nfern/pages/new.mdx\n",
    );
    vi.mocked(fs.readFile).mockResolvedValue("---\ntitle: Test\n---\n# Test");
    mockRedis.get.mockResolvedValue(null);

    const pathIndex = {
      "docs/intro": {
        type: "mdx" as const,
        filePath: "pages/intro.mdx",
        source: "docs-yml" as const,
        tab: "docs",
      },
      "docs/new": {
        type: "mdx" as const,
        filePath: "pages/new.mdx",
        source: "docs-yml" as const,
        tab: "docs",
      },
      "docs/spec": {
        type: "spec" as const,
        specPath: "/openapi/spec.yaml",
        source: "docs-yml" as const,
        tab: "docs",
      },
    };

    await uploadChangedMdxFiles(pathIndex, "ds/feature", mockRedis as never);

    // Should upload intro.mdx and new.mdx (in index), skip deleted.mdx (not in index)
    expect(mockRedis.set).toHaveBeenCalledTimes(2);
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/intro.mdx",
      expect.any(String),
      expect.any(Object),
    );
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/new.mdx",
      expect.any(String),
      expect.any(Object),
    );
  });

  test("skips upload when no changed files", async () => {
    const { execSync } = await import("child_process");
    vi.mocked(execSync).mockReturnValue("");

    await uploadChangedMdxFiles({}, "ds/feature", mockRedis as never);

    expect(mockRedis.set).not.toHaveBeenCalled();
  });
});
