import { kebabCase } from "lodash-es";
import type { OpenAPIV3 } from "openapi-types";
import removeMd from "remove-markdown";

import { HTTP_METHODS } from "@/content-indexer/constants/http.ts";
import type { PathBuilder } from "@/content-indexer/core/path-builder.ts";

export interface ExtractedOperation {
  operationId: string;
  path: string;
  method: string;
  tag?: string;
}

/**
 * Retrieves an operation object from a spec given a path and method.
 * Returns undefined if the path or method doesn't exist.
 */
export const getOperation = (
  spec: { paths: Record<string, unknown> },
  path: string,
  method: string,
): OpenAPIV3.OperationObject | undefined => {
  const pathItem = spec.paths[path];
  if (!pathItem || typeof pathItem !== "object") {
    return undefined;
  }

  const operation = (pathItem as Record<string, unknown>)[method];
  if (!operation || typeof operation !== "object") {
    return undefined;
  }

  return operation as OpenAPIV3.OperationObject;
};

/**
 * Extracts operationId from an OpenAPI operation object.
 * Falls back to summary or generates from method + path if operationId is missing.
 */
const getOperationId = (
  operation: Record<string, unknown>,
  method: string,
  path: string,
): string => {
  if ("operationId" in operation && operation.operationId) {
    return operation.operationId as string;
  }

  if ("summary" in operation && operation.summary) {
    return (operation.summary as string).replace(/^\//, "");
  }

  return `${method}_${path}`;
};

/**
 * Extracts the title for an OpenAPI operation.
 * Prefers the summary field, falls back to operationId.
 */
export const getOperationTitle = (
  operation: OpenAPIV3.OperationObject | undefined,
  operationId: string,
): string => {
  if (!operation) {
    return operationId;
  }

  return operation.summary || operationId;
};

/**
 * Extracts all operations from an OpenAPI paths object.
 *
 * Iterates through all paths and HTTP methods, extracting metadata for each operation including:
 * - operationId (with fallback logic via getOperationId)
 * - path (the URL path from the spec)
 * - method (the HTTP method, normalized to uppercase)
 * - tag (the first tag from the operation's tags array, used for grouping)
 */
export const extractOpenApiOperations = (
  paths: Record<string, unknown>,
): ExtractedOperation[] => {
  return Object.entries(paths).flatMap(([path, pathItem]) => {
    if (!pathItem || typeof pathItem !== "object") return [];

    return Object.entries(pathItem)
      .filter(
        ([method, operation]) =>
          (HTTP_METHODS as readonly string[]).includes(method) &&
          operation &&
          typeof operation === "object",
      )
      .map(([method, operation]) => {
        const op = operation as Record<string, unknown>;
        // Extract the first tag (tags[0] is used for organization)
        const tags = Array.isArray(op.tags) ? op.tags : [];
        const tag = tags[0] as string | undefined;

        return {
          operationId: getOperationId(op, method, path),
          path,
          method: method.toUpperCase(),
          tag,
        };
      });
  });
};

/**
 * Builds the final URL path for an OpenAPI operation.
 *
 * Constructs the path by:
 * 1. Optionally adding a tag slug (for grouping operations by tag)
 * 2. Adding the operation slug (kebab-cased operationId)
 */
export const buildOperationPath = (
  apiPathBuilder: PathBuilder,
  operationId: string,
  tag?: string,
): string => {
  let pathBuilder = apiPathBuilder;

  // Add tag slug to path if operation has a tag
  if (tag) {
    const tagSlug = kebabCase(tag);
    pathBuilder = apiPathBuilder.apply({ urlSlug: tagSlug });
  }

  // Add operation slug to path
  const operationSlug = kebabCase(operationId);
  pathBuilder = pathBuilder.apply({ urlSlug: operationSlug });

  return pathBuilder.get();
};

/**
 * Extracts the description from an OpenAPI operation object.
 * Falls back to summary if description is not available.
 */
export const getOperationDescription = (
  operation: OpenAPIV3.OperationObject | undefined,
): string => {
  if (!operation) {
    return "";
  }

  return operation.description
    ? removeMd(operation.description)
    : operation.summary || "";
};

/**
 * Extracts a brief summary for an OpenAPI operation to use in search tooltip
 */
export const getOperationSummary = (
  operation: OpenAPIV3.OperationObject | undefined,
): string | undefined => {
  if (!operation) {
    return undefined;
  }

  if (operation.summary) {
    return operation.summary;
  }

  // If no summary but description exists, strip markdown and use it
  if (operation.description) {
    return removeMd(operation.description);
  }

  return undefined;
};
