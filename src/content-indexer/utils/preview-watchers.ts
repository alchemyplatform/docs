import { spawn } from "child_process";

/**
 * Spawns onchange watchers for the preview command.
 *
 * Fast path: MDX/MD file changes trigger a single-file upload.
 * Slow path: structural changes (docs.yml, spec sources) trigger a full re-index.
 */
export const startWatchers = (branch: string): void => {
  console.info("\n👀 Starting file watchers...\n");

  const fastWatcher = spawn(
    "npx",
    [
      "onchange",
      "fern/**/*.{mdx,md}",
      "--",
      "tsx",
      "src/content-indexer/preview.ts",
      `--branch=${branch}`,
      "--upload-file={{changed}}",
    ],
    { stdio: "inherit" },
  );

  const slowWatcher = spawn(
    "npx",
    [
      "onchange",
      "fern/docs.yml",
      "src/openapi/**",
      "src/openrpc/**",
      "--",
      "tsx",
      "src/content-indexer/preview.ts",
      `--branch=${branch}`,
      "--reindex",
    ],
    { stdio: "inherit" },
  );

  const cleanup = () => {
    fastWatcher.kill();
    slowWatcher.kill();
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  console.info(
    "  📝 Watching fern/**/*.{mdx,md} for content changes (fast path)",
  );
  console.info(
    "  📋 Watching fern/docs.yml, src/openapi/**, src/openrpc/** for structural changes (slow path)",
  );
  console.info("\n  Press Ctrl+C to stop.\n");
};
