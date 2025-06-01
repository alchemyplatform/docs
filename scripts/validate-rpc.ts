import { existsSync, readFileSync } from "fs";

import { findFilesOfType } from "../src/utils/findFilesOfType";
import { validateRpcSpec } from "../src/utils/validateRpcSpec";

const validateOpenRpcSpecs = async (directory: string) => {
  if (!directory) {
    throw new Error("❌ Directory is required");
  }

  if (!existsSync(directory)) {
    throw new Error(`❌ Directory ${directory} does not exist`);
  }

  const openRpcFiles = findFilesOfType(directory, /\.json$/);

  const errors: string[] = [];
  await Promise.all(
    openRpcFiles.map(async (file) => {
      try {
        validateRpcSpec(JSON.parse(readFileSync(file, "utf8")));
      } catch (error) {
        if (error instanceof Error) {
          errors.push(`❌ Error validating ${file}: ${error.message}`);
        }
      }
    }),
  );

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const lastPartOfDirectory = directory.split("/").pop();
  console.info(
    `✅ Successfully validated ${lastPartOfDirectory} OpenRPC specs`,
  );
};

validateOpenRpcSpecs("fern/api-specs/alchemy/json-rpc");
validateOpenRpcSpecs("fern/api-specs/chains");
