#!/usr/bin/env tsx
import path from "path";

import type { ContentSource } from "@/content-indexer/core/batch-fetcher";
import { buildContentIndex } from "@/content-indexer/index";
import { DOCS_REPO } from "@/content-indexer/utils/github";

/**
 * Temporary script for testing Phase 2: filesystem support
 * This will be expanded in Phase 3 to support multiple indexers and modes
 */
async function main() {
  try {
    console.log("🚀 Testing content indexer with filesystem support...\n");

    // For now, test with filesystem source reading from local fern/ directory
    const source: ContentSource = {
      type: "filesystem",
      basePath: path.join(process.cwd(), "fern"),
    };

    // Build the content index
    const { pathIndex, navigationTrees, algoliaRecords } =
      await buildContentIndex(source, DOCS_REPO);

    console.log("\n✅ Content indexer completed successfully!");
    console.log(`   Generated ${Object.keys(pathIndex).length} path entries`);
    console.log(
      `   Generated ${Object.keys(navigationTrees).length} navigation trees`,
    );
    console.log(`   Generated ${algoliaRecords.length} Algolia records`);

    // TODO: Phase 3 will add:
    // - Mode support (preview/production)
    // - Indexer type support (main/sdk/changelog)
    // - Branch ID support
    // - Upload to Redis and Algolia
  } catch (error) {
    console.error("❌ Error generating content index:", error);
    process.exit(1);
  }
}

void main();
