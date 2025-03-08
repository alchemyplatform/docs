import type { OpenrpcDocument, ReferenceObject } from "@open-rpc/meta-schema";

type NoRefs<T> = T extends ReferenceObject
  ? never
  : T extends object
    ? { [K in keyof T]: NoRefs<T[K]> }
    : T;

export type DerefedOpenRpcDoc = NoRefs<OpenrpcDocument>;
