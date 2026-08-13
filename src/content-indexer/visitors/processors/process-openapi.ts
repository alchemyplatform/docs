import type { ProcessingContext } from "@/content-indexer/collectors/processing-context.ts";
import type { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import type { NavItem } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";
import type { OpenApiSpec } from "@/content-indexer/types/specs.ts";
import {
  createBreadcrumbNavItem,
  getChainNameFromAncestors,
} from "@/content-indexer/utils/navigation-helpers.ts";
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
  specId: string;
  visitorConfig: VisitorConfig;
  apiPathBuilder: PathBuilder;
  apiTitle: string;
  isHidden: boolean;
  isFlattened: boolean;
  /** When set, keep only operations whose first OpenAPI tag is in this list. */
  includeTags?: string[];
}

interface BuildOpenApiIndexEntriesConfig {
  operations: ExtractedOperation[];
  apiPathBuilder: PathBuilder;
  specId: string;
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
  /** When set (chain API method reference pages), appended to the Algolia
   * record title as `{operationTitle} - {chainName}` to disambiguate identical
   * method names across chains in search results. */
  chainName?: string;
}

/**
 * Builds path index entries for OpenAPI operations.
 */
const buildOpenApiIndexEntries = ({
  operations,
  apiPathBuilder,
  specId,
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
      specId,
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
  chainName,
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

        const algoliaTitle = chainName ? `${title} - ${chainName}` : title;

        context.addAlgoliaRecord({
          pageType: "API Method",
          path: finalPath,
          title: algoliaTitle,
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
  specId,
  visitorConfig,
  apiPathBuilder,
  apiTitle,
  isHidden,
  isFlattened,
  includeTags,
}: ProcessOpenApiConfig): VisitorResult => {
  const { tab, context, navigationAncestors } = visitorConfig;

  // Extract operations and build index entries
  let operations = extractOpenApiOperations(spec.paths);
  if (includeTags && includeTags.length > 0) {
    const allowedTags = new Set(includeTags);
    operations = operations
      .filter((operation) => operation.tag && allowedTags.has(operation.tag))
      // The yaml section already groups these endpoints, so drop the tag
      // to avoid a duplicate URL segment and sidebar wrapper.
      .map((operation) => ({ ...operation, tag: undefined }));
  }
  const indexEntries = buildOpenApiIndexEntries({
    operations,
    apiPathBuilder,
    specId,
    tab,
  });

  // Create breadcrumb for Algolia (skip for hidden APIs)
  const apiSectionBreadcrumb =
    isHidden || isFlattened
      ? undefined
      : createBreadcrumbNavItem(apiTitle, "api-section");

  // Chain API method reference pages (tab = "chains") share the same OpenAPI
  // specs across every chain that references them (e.g. UTXO endpoints reused
  // on BTC / BCH / LTC / DOGE). Append the chain name to Algolia titles so
  // search results disambiguate.
  const chainName = getChainNameFromAncestors(tab, navigationAncestors);

  // Build navigation items
  const tagSections = buildOpenApiNavigation({
    operations,
    apiPathBuilder,
    spec,
    context,
    navigationAncestors,
    apiSectionBreadcrumb,
    isHidden,
    chainName,
  });

  // Return flattened or wrapped navigation (marked hidden if applicable)
  const navItem: NavItem | NavItem[] = isFlattened
    ? tagSections.map((item) => (isHidden ? { ...item, hidden: true } : item))
    : {
        title: apiTitle,
        type: "api-section",
        children: tagSections,
        ...(isHidden && { hidden: true }),
      };

  return { indexEntries, navItem };
};
