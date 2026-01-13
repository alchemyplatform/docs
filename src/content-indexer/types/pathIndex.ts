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

export type PathIndexEntry =
  | MdxPathIndexEntry
  | OpenRpcPathIndexEntry
  | OpenApiPathIndexEntry;

export type PathIndex = Record<string, PathIndexEntry>;
