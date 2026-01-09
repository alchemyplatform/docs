import { kebabCase } from "lodash-es";
import type { OpenAPIV3 } from "openapi-types";

import { HTTP_METHODS } from "@/content-indexer/constants/http.js";
import type { PathBuilder } from "@/content-indexer/core/path-builder.js";

export interface ExtractedOperation {
  operationId: string;
  path: string;
  method: string;
  tag?: string;
}

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
  spec: { paths: Record<string, unknown> },
  operationId: string,
  operationPath: string,
): string => {
  const pathItem = spec.paths[operationPath];
  if (!pathItem || typeof pathItem !== "object") {
    return operationId;
  }

  // Find the operation with matching operationId
  const operation = Object.values(pathItem).find(
    (op: unknown) =>
      typeof op === "object" &&
      op !== null &&
      "operationId" in op &&
      (op as OpenAPIV3.OperationObject).operationId === operationId,
  ) as OpenAPIV3.OperationObject | undefined;

  return operation?.summary || operationId;
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
        // Extract the first tag (Fern uses tags[0] for organization)
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
  spec: { paths: Record<string, unknown> },
  path: string,
  method: string,
): string => {
  const pathItem = spec.paths[path];
  if (!pathItem || typeof pathItem !== "object") {
    return "";
  }

  const operation = (pathItem as Record<string, unknown>)[method];
  if (!operation || typeof operation !== "object") {
    return "";
  }

  const operationObj = operation as Record<string, unknown>;
  const description = operationObj.description as string | undefined;
  const summary = operationObj.summary as string | undefined;

  return description || summary || "";
};
