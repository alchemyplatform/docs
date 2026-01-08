import type { AlgoliaRecord } from "@/content-indexer/types/algolia";

const MAX_RECORD_BYTES = 100_000; // Algolia imposes a 100KB limit on each record
const BUFFER_BYTES = 1_000;
const MAX_ITERATIONS = 5;

/**
 * Truncate record content to ensure entire JSON payload fits within Algolia limit.
 */
export const truncateRecord = (record: AlgoliaRecord): AlgoliaRecord => {
  const fullRecordJson = JSON.stringify(record);
  const recordBytes = Buffer.byteLength(fullRecordJson, "utf8");

  if (recordBytes <= MAX_RECORD_BYTES) {
    return record; // Record is fine as-is - should be the case for over 99% of records
  }

  // Calculate overhead (everything except content field)
  const recordWithoutContent = { ...record, content: "" };
  const overheadBytes = Buffer.byteLength(
    JSON.stringify(recordWithoutContent),
    "utf8",
  );

  console.warn(
    `⚠️  Record "${record.title}" (${record.path}) exceeds ${MAX_RECORD_BYTES} bytes\n`,
    `   Total: ${recordBytes} bytes\n`,
    `   Content: ${Buffer.byteLength(record.content, "utf8")} bytes\n`,
    `   Overhead (all non-content data): ${overheadBytes} bytes`,
  );

  if (overheadBytes > MAX_RECORD_BYTES - 1000) {
    throw new Error(
      `Record overhead (${overheadBytes} bytes) is too large! Something is wrong with the record data.`,
    );
  }

  // Iteratively truncate content while measuring full JSON record size
  // This accounts for JSON escaping overhead (quotes, backslashes, etc.)
  let truncatedContent = record.content;
  let truncatedRecord: AlgoliaRecord = { ...record, content: truncatedContent };
  let currentBytes = recordBytes;
  let iterations = 0;

  while (currentBytes > MAX_RECORD_BYTES && iterations < MAX_ITERATIONS) {
    // Calculate reduction ratio to reach target size
    const reductionRatio = (MAX_RECORD_BYTES - BUFFER_BYTES) / currentBytes;

    // Use code point-aware truncation to avoid splitting multi-byte UTF-8 characters (emoji, etc.)
    const codePoints = Array.from(truncatedContent);
    const targetCodePoints = Math.floor(codePoints.length * reductionRatio);
    truncatedContent = codePoints.slice(0, targetCodePoints).join("") + "...";

    truncatedRecord = { ...record, content: truncatedContent };
    currentBytes = Buffer.byteLength(JSON.stringify(truncatedRecord), "utf8");
    iterations++;
  }

  if (currentBytes > MAX_RECORD_BYTES) {
    throw new Error(
      `Failed to truncate record after ${MAX_ITERATIONS} iterations. Final size: ${currentBytes} bytes`,
    );
  }

  console.warn(
    `   ✓ Truncated to ${currentBytes} bytes (${truncatedContent.length} chars) in ${iterations} iteration${iterations === 1 ? "" : "s"}\n`,
  );

  return truncatedRecord;
};
