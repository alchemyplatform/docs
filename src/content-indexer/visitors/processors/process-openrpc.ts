import { kebabCase } from "lodash-es";
import removeMd from "remove-markdown";

import type { PathBuilder } from "@/content-indexer/core/path-builder.ts";
import type { NavItem } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";
import type { OpenRpcSpec } from "@/content-indexer/types/specs.ts";
import {
  createBreadcrumbNavItem,
  getChainNameFromAncestors,
} from "@/content-indexer/utils/navigation-helpers.ts";
import { isValidOpenRpcSpec } from "@/content-indexer/utils/openrpc.ts";
import type {
  VisitorConfig,
  VisitorResult,
} from "@/content-indexer/visitors/index.js";

/**
 * Configuration for processing an OpenRPC specification
 */
export interface ProcessOpenRpcConfig {
  spec: OpenRpcSpec;
  specId: string;
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
  specId,
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

  // For chain API method reference pages the same JSON-RPC method
  // (e.g. `eth_getBlockByNumber`) is duplicated across every EVM chain that
  // references the `eth` spec. Append the chain name to the Algolia title so
  // search results disambiguate which chain each entry links to.
  const chainName = getChainNameFromAncestors(tab, navigationAncestors);

  // Process each RPC method
  spec.methods.forEach((method) => {
    const slug = kebabCase(method.name);
    const pathBuilder = apiPathBuilder.apply({ urlSlug: slug });
    const finalPath = pathBuilder.get();

    // Add to path index
    indexEntries[finalPath] = {
      type: "openrpc",
      specId,
      methodName: method.name,
      source: "docs-yml",
      tab,
    };

    const summary =
      method.summary ||
      (method.description ? removeMd(method.description) : undefined);

    // Build Algolia record if not hidden
    if (!isHidden) {
      const description = method.description
        ? removeMd(method.description)
        : method.summary || "";

      const breadcrumbs = apiSectionBreadcrumb
        ? [...navigationAncestors, apiSectionBreadcrumb]
        : navigationAncestors;

      const algoliaTitle = chainName
        ? `${method.name} - ${chainName}`
        : method.name;

      context.addAlgoliaRecord({
        pageType: "API Method",
        path: finalPath,
        title: algoliaTitle,
        content: description,
        httpMethod: "POST",
        breadcrumbs,
        description: summary,
      });
    }

    // Add navigation item
    endpointNavItems.push({
      title: method.name,
      path: `/${finalPath}`,
      method: "POST",
      type: "endpoint",
      description: summary,
    });
  });

  // Return flattened or wrapped navigation (marked hidden if applicable)
  const navItem: NavItem | NavItem[] = isFlattened
    ? endpointNavItems.map((item) =>
        isHidden ? { ...item, hidden: true } : item,
      )
    : {
        title: apiTitle,
        type: "api-section",
        children: endpointNavItems,
        ...(isHidden && { hidden: true }),
      };

  return { indexEntries, navItem };
};
