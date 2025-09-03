import { mkdirSync, readdirSync } from "fs";

import { generateOpenRpcSpec } from "../src/utils/generateRpcSpecs";
import { handleDerefErrors } from "../src/utils/generationHelpers";

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

  // Generate chains OpenRPC specs
  const chainPromises = allChainFiles.map(async (chain) => {
    try {
      await generateOpenRpcSpec(allChainsDir, outputDir, chain);
    } catch (err: unknown) {
      handleDerefErrors(err, chain, missingTokens);
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
      handleDerefErrors(err, api, missingTokens);
    }
  });

  // Wait for all promises to complete
  await Promise.allSettled([...chainPromises, ...alchemyPromises]);

  // Report all missing tokens at once
  if (missingTokens.length > 0) {
    console.error("Missing tokens found:");
    missingTokens.forEach((token) => console.error(`  - ${token}`));
    throw new Error(
      `Found ${missingTokens.length} missing tokens. See details above.`,
    );
  }

  console.info("All OpenRPC specs generated successfully!");
};

main().catch((error) => {
  console.error("Script failed:", error);
  process.exit(1);
});
