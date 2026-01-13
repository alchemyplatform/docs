import type {
  OpenApiSpec,
  OpenRpcSpec,
} from "@/content-indexer/types/specs.js";
import type { RepoConfig } from "@/content-indexer/utils/github.ts";

/**
 * Factory for creating OpenAPI spec with minimal required fields for testing
 */
export const openApiSpecFactory = (
  overrides: Partial<OpenApiSpec> = {},
): OpenApiSpec => ({
  openapi: "3.0.0",
  info: {
    title: "Test API",
    version: "1.0.0",
  },
  paths: {},
  ...overrides,
});

/**
 * Factory for creating OpenRPC spec with minimal required fields for testing
 */
export const openRpcSpecFactory = (
  overrides: Partial<OpenRpcSpec> = {},
): OpenRpcSpec => ({
  openrpc: "1.0.0",
  info: {
    title: "Test API",
    version: "1.0.0",
  },
  methods: [],
  ...overrides,
});

/**
 * Factory for creating RepoConfig with minimal required fields for testing
 */
export const repoConfigFactory = (
  overrides: Partial<RepoConfig> = {},
): RepoConfig => ({
  owner: "test-owner",
  repo: "test-repo",
  branch: "main",
  docsPrefix: "docs/",
  stripPathPrefix: "",
  ...overrides,
});
