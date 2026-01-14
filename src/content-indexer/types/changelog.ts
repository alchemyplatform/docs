// TODO: This file is copied from docs-site but not fully used in Phase 2
// MDXRemoteSerializeResult type is stubbed until changelog indexer is implemented in Phase 3
type MDXRemoteSerializeResult = unknown;

export interface ChangelogIndexEntry {
  date: string; // YYYY-MM-DD format
  fileName: string; // e.g., "2025-11-20.md"
}

/**
 * Maps changelog routes (e.g., "2025/11/20") to their metadata. Sorted by date (newest first).
 */
export type ChangelogIndex = Record<string, ChangelogIndexEntry>;

export interface SerializedChangelogEntry {
  date: string;
  serializedContent: MDXRemoteSerializeResult;
}

export interface ChangelogApiSuccess {
  entries: SerializedChangelogEntry[];
  hasMore: boolean;
  total: number;
}

export interface ChangelogApiError {
  error: string;
}
