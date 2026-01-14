import type { OpenrpcDocument, ReferenceObject } from "@open-rpc/meta-schema";
import type { OpenAPIV3 } from "openapi-types";

// Remove all $ref references since we only work with dereferenced specs
type NoRefs<T> = T extends ReferenceObject | { $ref: string }
  ? never
  : T extends object
    ? { [K in keyof T]: NoRefs<T[K]> }
    : T;

export type OpenRpcSpec = NoRefs<OpenrpcDocument>;
export type OpenApiSpec = NoRefs<OpenAPIV3.Document>;

export type SpecType = "openrpc" | "openapi";
