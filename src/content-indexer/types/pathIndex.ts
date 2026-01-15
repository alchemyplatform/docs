export interface MdxPathIndexEntry {
  type: "mdx";
  filePath: string;
  source: "frontmatter" | "docs-yml" | "runtime-discovery" | "changelog";
  tab: string;
}

export interface OpenRpcPathIndexEntry {
  type: "openrpc";
  specUrl: string;
  methodName: string;
  source: "docs-yml";
  tab: string;
}

export interface OpenApiPathIndexEntry {
  type: "openapi";
  specUrl: string;
  operationId: string;
  source: "docs-yml";
  tab: string;
}

export interface ChangelogPathIndexEntry {
  date: string; // ISO date string like "2025-12-11"
  filePath: string; // Filename like "2025-12-11.md"
}

export type PathIndexEntry =
  | MdxPathIndexEntry
  | OpenRpcPathIndexEntry
  | OpenApiPathIndexEntry
  | ChangelogPathIndexEntry;

export type PathIndex = Record<string, PathIndexEntry>;
