import { kebabCase } from "lodash-es";

import type { ApiConfig } from "@/content-indexer/types/docsYaml.ts";
import type {
  OpenApiSpec,
  OpenRpcSpec,
} from "@/content-indexer/types/specs.js";

import type { VisitorConfigBase, VisitorResult } from "./index.ts";
import { processOpenApiSpec } from "./processors/process-openapi.ts";
import { processOpenRpcSpec } from "./processors/process-openrpc.ts";

export interface ApiVisitorConfig extends VisitorConfigBase {
  item: ApiConfig;
}

/**
 * Visits an API reference item from docs.yml.
 *
 * Handles both OpenAPI and OpenRPC specifications by delegating to
 * spec-specific processors. Extracts config, loads cached spec,
 * and routes to the appropriate processor.
 */
export const visitApiReference = (config: ApiVisitorConfig): VisitorResult => {
  const { item: apiConfig, parentPath, contentCache } = config;

  // Extract configuration
  const apiName = apiConfig["api-name"];
  const apiUrlSlug = apiConfig.slug ?? kebabCase(apiConfig.api);
  const skipSlug = apiConfig["skip-slug"] ?? false;
  const isHidden = apiConfig.hidden || config.isAncestorHidden || false;
  const isFlattened = apiConfig.flattened ?? false;

  // Build path for this API
  const apiPathBuilder = skipSlug
    ? parentPath
    : parentPath.apply({ urlSlug: apiUrlSlug });

  // Retrieve cached spec
  const cached = contentCache.getSpec(apiName);
  if (!cached) {
    console.warn(
      `  ⚠️  No cached spec found for api-name: ${apiName} (skipping)`,
    );
    return { indexEntries: {} };
  }

  const { specType, spec, specId } = cached;

  // Delegate to spec-specific processor
  switch (specType) {
    case "openapi":
      return processOpenApiSpec({
        spec: spec as OpenApiSpec,
        specId,
        visitorConfig: config,
        apiPathBuilder,
        apiTitle: apiConfig.api,
        isHidden,
        isFlattened,
      });

    case "openrpc":
      return processOpenRpcSpec({
        spec: spec as OpenRpcSpec,
        specId,
        visitorConfig: config,
        apiPathBuilder,
        apiTitle: apiConfig.api,
        isHidden,
        isFlattened,
      });
  }
};
