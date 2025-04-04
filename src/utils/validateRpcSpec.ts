import { validateOpenRPCDocument } from "@open-rpc/schema-utils-js";

import type { DerefedOpenRpcDoc } from "../types/openRpc";

interface ValidationError {
  keyword: string;
  dataPath: string;
  schemaPath: string;
  params: Record<string, unknown>;
  message: string;
}
/**
 * Validates an OpenRPC document against the OpenRPC meta schema.
 * @param spec - The OpenRPC document to validate
 * @throws Error if validation fails, with details about the errors found
 */
export const validateRpcSpec = (spec: DerefedOpenRpcDoc) => {
  const validation = validateOpenRPCDocument(spec);

  if (validation !== true) {
    const errorMessageMatch = validation.message.match(/\[[\s\S]*\]/);
    let validationErrors: ValidationError[] = [];

    if (errorMessageMatch) {
      try {
        validationErrors = JSON.parse(errorMessageMatch[0]);
      } catch (e) {
        console.error(e);
        throw new Error("Failed to parse validation errors. Check console");
      }
    }

    const error = {
      title: spec.info.title,
      errorType: validation.name,
      validationErrors,
    };

    throw new Error(
      `Validation errors found in ${spec.info.title}:\n  ${JSON.stringify(error, null, 2)}`,
    );
  }
};
