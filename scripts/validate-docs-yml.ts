import { Ajv } from "ajv";
import { readFileSync } from "fs";
import yaml from "js-yaml";

const DOCS_YML_PATH = "content/docs.yml";
const SCHEMA_PATH = "content/docs-yml.schema.json";

const validateDocsYml = () => {
  const schema = JSON.parse(readFileSync(SCHEMA_PATH, "utf8"));
  const docsYml = yaml.load(readFileSync(DOCS_YML_PATH, "utf8"));

  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);

  if (!validate(docsYml)) {
    const messages = new Set(
      (validate.errors ?? []).map(
        (error) => `❌ ${DOCS_YML_PATH}${error.instancePath}: ${error.message}`,
      ),
    );
    throw new Error([...messages].join("\n"));
  }

  console.info(`✅ Successfully validated ${DOCS_YML_PATH}`);
};

validateDocsYml();
