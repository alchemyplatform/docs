import { mkdirSync, readdirSync } from "fs";

import { generateOpenRpcSpec } from "../src/utils/generateRpcSpecs";
import {
  type DerefErrorGroup,
  handleDerefErrors,
} from "../src/utils/generationHelpers";

const isHiddenDir = (file: string) =>
  !file.startsWith("_") && !file.startsWith(".");

const SCHEMAS_ROOT = "src/openrpc";
const OUTPUT_ROOT = "fern/api-specs";

const main = async () => {
  const allChainsDir = `${SCHEMAS_ROOT}/chains`;
  const outputDir = `${OUTPUT_ROOT}/chains`;
  const allChainFiles = readdirSync(allChainsDir).filter(isHiddenDir);

  mkdirSync(outputDir, { recursive: true });

  const missingTokens: string[] = [];
  const genErrors: DerefErrorGroup[] = [];

  // Generate chains OpenRPC specs
  const chainPromises = allChainFiles.map(async (chain) => {
    try {
      await generateOpenRpcSpec(allChainsDir, outputDir, chain);
    } catch (err: unknown) {
      handleDerefErrors(err, chain, missingTokens, genErrors);
    }
  });

  // generate alchemy API OpenRPC specs
  const alchemyApisDir = `${SCHEMAS_ROOT}/alchemy`;
  const alchemyOutputDir = `${OUTPUT_ROOT}/alchemy/json-rpc`;
  const allAlchemyApiFiles = readdirSync(alchemyApisDir).filter(isHiddenDir);

  mkdirSync(alchemyOutputDir, { recursive: true });

  const alchemyPromises = allAlchemyApiFiles.map(async (api) => {
    try {
      await generateOpenRpcSpec(alchemyApisDir, alchemyOutputDir, api);
    } catch (err: unknown) {
      handleDerefErrors(err, api, missingTokens, genErrors);
    }
  });

  // Wait for all promises to complete
  const results = await Promise.allSettled([
    ...chainPromises,
    ...alchemyPromises,
  ]);

  // Report all errors at once
  const errorMessages: string[] = [];

  const unexpectedRejections = results.filter(
    (result) => result.status === "rejected",
  );
  if (unexpectedRejections.length > 0) {
    unexpectedRejections.forEach((rejection) => {
      if (rejection.status === "rejected") {
        errorMessages.push(rejection.reason.stack);
      }
    });
  }

  if (genErrors.length > 0) {
    errorMessages.push(`Found ${genErrors.length} generation error(s):`);
    errorMessages.push(
      ...genErrors.map((error) => `  ${JSON.stringify(error, null, 2)}`),
    );
  }

  if (missingTokens.length > 0) {
    errorMessages.push(`Found ${missingTokens.length} missing token(s):`);
    errorMessages.push(...missingTokens.map((token) => `  - ${token}`));
  }

  if (errorMessages.length > 0) {
    throw new Error(errorMessages.join("\n"));
  }

  console.info("All OpenRPC specs generated successfully!");
};

main().catch((error) => {
  console.error("OpenRPC spec generation failed:\n", error);
  process.exit(1);
});
