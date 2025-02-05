import eslint from "@eslint/js";
import parser from "@typescript-eslint/parser";
import eslintPrettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

const globalRules = {
  eqeqeq: ["error", "smart"],
  "no-console": ["warn", { allow: ["warn", "error", "info"] }],
  "no-lonely-if": "error",
  "no-nested-ternary": "error",
};

const tslintConfigs = tseslint.config({
  name: "TS Eslint Config",
  languageOptions: {
    parser,
    parserOptions: {
      project: ["./tsconfig.json"],
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPrettier,
  ],
  files: ["**/*.{ts,tsx,mts}"],
  rules: {
    ...globalRules,
    "@typescript-eslint/no-shadow": ["error", { builtinGlobals: false }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true,
      },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
  },
});

/** @type {import('eslint').Linter.Config} */
const jsConfig = {
  name: "JS Eslint Config",
  files: ["**/*.{js,mjs,cjs,jsx,mjsx}"],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    ...eslint.configs.recommended.rules,
    ...globalRules,
    ...eslintPrettier.rules,
    "no-shadow": "error",
  },
};

/** @type {import('eslint').Linter.Config[]} */
export default [jsConfig, ...tslintConfigs];
