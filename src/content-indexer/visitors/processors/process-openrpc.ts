import { kebabCase } from "lodash-es";

import type { PathBuilder } from "@/content-indexer/core/path-builder";
import type { NavItem } from "@/content-indexer/types/navigation";
import type { PathIndex } from "@/content-indexer/types/pathIndex";
import type { OpenRpcSpec } from "@/content-indexer/types/specs";
import { createBreadcrumbNavItem } from "@/content-indexer/utils/navigation-helpers";
import { isValidOpenRpcSpec } from "@/content-indexer/utils/openrpc";
import type { VisitorConfig, VisitorResult } from "@/content-indexer/visitors";

/**
 * Configuration for processing an OpenRPC specification
 */
export interface ProcessOpenRpcConfig {
  spec: OpenRpcSpec;
  specUrl: string;
  visitorConfig: VisitorConfig;
  apiPathBuilder: PathBuilder;
  apiTitle: string;
  isHidden: boolean;
  isFlattened: boolean;
}

/**
 * Processes an OpenRPC specification.
 * Validates spec, builds path index, navigation, and Algolia records.
 */
export const processOpenRpcSpec = ({
  spec,
  specUrl,
  visitorConfig,
  apiPathBuilder,
  apiTitle,
  isHidden,
  isFlattened,
}: ProcessOpenRpcConfig): VisitorResult => {
  const { tab, context, navigationAncestors } = visitorConfig;

  if (!isValidOpenRpcSpec(spec)) {
    console.error(`  ⚠️  Invalid OpenRPC spec for ${apiTitle}`);
    return { indexEntries: {} };
  }

  const indexEntries: PathIndex = {};
  const endpointNavItems: NavItem[] = [];

  // Create breadcrumb for Algolia
  const apiSectionBreadcrumb =
    !isHidden && !isFlattened
      ? createBreadcrumbNavItem(apiTitle, "api-section")
      : undefined;

  // Process each RPC method
  spec.methods.forEach((method) => {
    const slug = kebabCase(method.name);
    const pathBuilder = apiPathBuilder.apply({ urlSlug: slug });
    const finalPath = pathBuilder.get();

    // Add to path index
    indexEntries[finalPath] = {
      type: "openrpc",
      specUrl,
      methodName: method.name,
      source: "docs-yml",
      tab,
    };

    // Build Algolia record if not hidden
    if (!isHidden) {
      const description = method.description || method.summary || "";
      const breadcrumbs = apiSectionBreadcrumb
        ? [...navigationAncestors, apiSectionBreadcrumb]
        : navigationAncestors;

      context.addAlgoliaRecord({
        pageType: "API Method",
        path: finalPath,
        title: method.name,
        content: description,
        httpMethod: "POST",
        breadcrumbs,
      });
    }

    // Add navigation item
    endpointNavItems.push({
      title: method.name,
      path: `/${finalPath}`,
      method: "POST",
      type: "endpoint",
    });
  });

  // Return early if hidden
  if (isHidden) {
    return { indexEntries, navItem: undefined };
  }

  // Return flattened or wrapped navigation
  const navItem: NavItem | NavItem[] = isFlattened
    ? endpointNavItems
    : {
        title: apiTitle,
        type: "api-section",
        children: endpointNavItems,
      };

  return { indexEntries, navItem };
};
