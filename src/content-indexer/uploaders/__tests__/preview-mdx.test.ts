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

  test("detects routing-relevant frontmatter changes vs previous upload", async () => {
    const newContent = "---\ntitle: New Title\nslug: new-slug\n---\n# Hello";
    const previousContent =
      "---\ntitle: Old Title\nslug: old-slug\n---\n# Hello";

    vi.mocked(fs.readFile).mockResolvedValue(newContent);
    mockRedis.get.mockResolvedValue(previousContent);

    const result = await uploadMdxFile(
      "pages/intro.mdx",
      "ds/feature",
      mockRedis as never,
    );

    expect(mockRedis.get).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/intro.mdx",
    );
    expect(result.reindexNeeded).toBe(true);
  });

  test("falls back to main: when no branch key exists (first edit)", async () => {
    const newContent = "---\ntitle: New Title\nslug: new-slug\n---\n# Hello";
    const mainContent = "---\ntitle: Old Title\nslug: old-slug\n---\n# Hello";

    vi.mocked(fs.readFile).mockResolvedValue(newContent);
    mockRedis.get
      .mockResolvedValueOnce(null) // branch key doesn't exist
      .mockResolvedValueOnce(mainContent); // falls back to main:

    const result = await uploadMdxFile(
      "pages/intro.mdx",
      "ds/feature",
      mockRedis as never,
    );

    expect(mockRedis.get).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/intro.mdx",
    );
    expect(mockRedis.get).toHaveBeenCalledWith("main:mdx:pages/intro.mdx");
    expect(result.reindexNeeded).toBe(true);
  });

  test("returns reindexNeeded=false when frontmatter unchanged", async () => {
    const content = "---\ntitle: Same\nslug: same\n---\n# Body changed";
    const previousContent =
      "---\ntitle: Same\nslug: same\n---\n# Original body";

    vi.mocked(fs.readFile).mockResolvedValue(content);
    mockRedis.get.mockResolvedValue(previousContent);

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
  test("uploads all changed MDX files including sub-files not in path index", async () => {
    const { execSync } = await import("child_process");
    vi.mocked(execSync)
      .mockReturnValueOnce(
        "content/pages/intro.mdx\ncontent/pages/sub-file.mdx\ncontent/pages/new.mdx\n",
      )
      .mockReturnValueOnce(""); // no untracked files
    vi.mocked(fs.readFile).mockResolvedValue("---\ntitle: Test\n---\n# Test");
    mockRedis.get.mockResolvedValue(null);

    await uploadChangedMdxFiles("ds/feature", mockRedis as never);

    // Should upload all three files, including sub-file.mdx which is not in
    // docs.yml but may be referenced via <Markdown src="..." />
    expect(mockRedis.set).toHaveBeenCalledTimes(3);
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/intro.mdx",
      expect.any(String),
      expect.any(Object),
    );
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/sub-file.mdx",
      expect.any(String),
      expect.any(Object),
    );
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/new.mdx",
      expect.any(String),
      expect.any(Object),
    );
  });

  test("includes untracked files in upload", async () => {
    const { execSync } = await import("child_process");
    vi.mocked(execSync)
      .mockReturnValueOnce("content/pages/changed.mdx\n") // git diff
      .mockReturnValueOnce("content/pages/new-untracked.mdx\n"); // git ls-files
    vi.mocked(fs.readFile).mockResolvedValue("---\ntitle: Test\n---\n# Test");
    mockRedis.get.mockResolvedValue(null);

    await uploadChangedMdxFiles("ds/feature", mockRedis as never);

    expect(mockRedis.set).toHaveBeenCalledTimes(2);
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/changed.mdx",
      expect.any(String),
      expect.any(Object),
    );
    expect(mockRedis.set).toHaveBeenCalledWith(
      "ds/feature:mdx:pages/new-untracked.mdx",
      expect.any(String),
      expect.any(Object),
    );
  });

  test("deduplicates files appearing in both diff and untracked", async () => {
    const { execSync } = await import("child_process");
    vi.mocked(execSync)
      .mockReturnValueOnce("content/pages/intro.mdx\n") // git diff
      .mockReturnValueOnce("content/pages/intro.mdx\n"); // git ls-files (same file)
    vi.mocked(fs.readFile).mockResolvedValue("---\ntitle: Test\n---\n# Test");
    mockRedis.get.mockResolvedValue(null);

    await uploadChangedMdxFiles("ds/feature", mockRedis as never);

    expect(mockRedis.set).toHaveBeenCalledTimes(1);
  });

  test("skips upload when no changed files", async () => {
    const { execSync } = await import("child_process");
    vi.mocked(execSync).mockReturnValue("");

    await uploadChangedMdxFiles("ds/feature", mockRedis as never);

    expect(mockRedis.set).not.toHaveBeenCalled();
  });
});
