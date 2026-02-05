import type { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import type { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import type { NavItem } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";
import type { OpenApiSpec } from "@/content-indexer/types/specs.ts";
import { createBreadcrumbNavItem } from "@/content-indexer/utils/navigation-helpers.ts";
import {
  buildOperationPath,
  extractOpenApiOperations,
  getOperation,
  getOperationDescription,
  getOperationSummary,
  getOperationTitle,
  type ExtractedOperation,
} from "@/content-indexer/utils/openapi.js";
import type {
  VisitorConfig,
  VisitorResult,
} from "@/content-indexer/visitors/index.js";

/**
 * Configuration for processing an OpenAPI specification
 */
export interface ProcessOpenApiConfig {
  spec: OpenApiSpec;
  specUrl: string;
  visitorConfig: VisitorConfig;
  apiPathBuilder: PathBuilder;
  apiTitle: string;
  isHidden: boolean;
  isFlattened: boolean;
}

interface BuildOpenApiIndexEntriesConfig {
  operations: ExtractedOperation[];
  apiPathBuilder: PathBuilder;
  specUrl: string;
  tab: string;
}

interface BuildOpenApiNavigationConfig {
  operations: ExtractedOperation[];
  apiPathBuilder: PathBuilder;
  spec: OpenApiSpec;
  context: ProcessingContext;
  navigationAncestors: NavItem[];
  apiSectionBreadcrumb: NavItem | undefined;
  isHidden: boolean;
}

/**
 * Builds path index entries for OpenAPI operations.
 */
const buildOpenApiIndexEntries = ({
  operations,
  apiPathBuilder,
  specUrl,
  tab,
}: BuildOpenApiIndexEntriesConfig): PathIndex => {
  const indexEntries: PathIndex = {};

  operations.forEach((operation) => {
    const finalPath = buildOperationPath(
      apiPathBuilder,
      operation.operationId,
      operation.tag,
    );

    indexEntries[finalPath] = {
      type: "openapi",
      specUrl,
      operationId: operation.operationId,
      source: "docs-yml",
      tab,
    };
  });

  return indexEntries;
};

/**
 * Builds navigation items for OpenAPI operations, grouped by tag.
 */
const buildOpenApiNavigation = ({
  operations,
  apiPathBuilder,
  spec,
  context,
  navigationAncestors,
  apiSectionBreadcrumb,
  isHidden,
}: BuildOpenApiNavigationConfig): NavItem[] => {
  // Group operations by tag
  const operationsByTag = new Map<string | undefined, ExtractedOperation[]>();
  operations.forEach((operation) => {
    const existing = operationsByTag.get(operation.tag) || [];
    existing.push(operation);
    operationsByTag.set(operation.tag, existing);
  });

  const tagSections: NavItem[] = [];

  for (const [tag, tagOperations] of operationsByTag.entries()) {
    const endpointNavItems: NavItem[] = tagOperations.map((operation) => {
      const finalPath = buildOperationPath(
        apiPathBuilder,
        operation.operationId,
        operation.tag,
      );

      const operationObj = getOperation(
        spec,
        operation.path,
        operation.method.toLowerCase(),
      );

      const title = getOperationTitle(operationObj, operation.operationId);
      const summary = getOperationSummary(operationObj);

      // Build Algolia record if not hidden
      if (!isHidden) {
        const description = getOperationDescription(operationObj);

        const breadcrumbs = apiSectionBreadcrumb
          ? [...navigationAncestors, apiSectionBreadcrumb]
          : navigationAncestors;

        context.addAlgoliaRecord({
          pageType: "API Method",
          path: finalPath,
          title,
          content: description,
          httpMethod: operation.method,
          breadcrumbs,
          description: summary,
        });
      }

      return {
        title,
        path: `/${finalPath}`,
        method: operation.method,
        type: "endpoint" as const,
        description: summary,
      };
    });

    // Wrap in tag section if tag exists
    if (tag) {
      tagSections.push({
        title: tag,
        type: "section",
        children: endpointNavItems,
      });
    } else {
      tagSections.push(...endpointNavItems);
    }
  }

  return tagSections;
};

/**
 * Processes an OpenAPI specification.
 * Extracts operations, builds path index, navigation, and Algolia records.
 */
export const processOpenApiSpec = ({
  spec,
  specUrl,
  visitorConfig,
  apiPathBuilder,
  apiTitle,
  isHidden,
  isFlattened,
}: ProcessOpenApiConfig): VisitorResult => {
  const { tab, context, navigationAncestors } = visitorConfig;

  // Extract operations and build index entries
  const operations = extractOpenApiOperations(spec.paths);
  const indexEntries = buildOpenApiIndexEntries({
    operations,
    apiPathBuilder,
    specUrl,
    tab,
  });

  // Return early if hidden (index only, no navigation)
  if (isHidden) {
    return { indexEntries, navItem: undefined };
  }

  // Create breadcrumb for Algolia
  const apiSectionBreadcrumb = isFlattened
    ? undefined
    : createBreadcrumbNavItem(apiTitle, "api-section");

  // Build navigation items
  const tagSections = buildOpenApiNavigation({
    operations,
    apiPathBuilder,
    spec,
    context,
    navigationAncestors,
    apiSectionBreadcrumb,
    isHidden,
  });

  // Return flattened or wrapped navigation
  const navItem: NavItem | NavItem[] = isFlattened
    ? tagSections
    : {
        title: apiTitle,
        type: "api-section",
        children: tagSections,
      };

  return { indexEntries, navItem };
};
