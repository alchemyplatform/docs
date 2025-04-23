import { type ConfigWithExtends } from "@eslint/config-helpers";
import eslint from "@eslint/js";
import parser from "@typescript-eslint/parser";
import eslintPrettier from "eslint-config-prettier";
import * as mdx from "eslint-plugin-mdx";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const globalRules: ConfigWithExtends["rules"] = {
  eqeqeq: ["error", "smart"],
  "no-console": ["warn", { allow: ["warn", "error", "info"] }],
  "no-lonely-if": "error",
  "no-nested-ternary": "error",
};

const jsConfig: ConfigWithExtends = {
  name: "JS Eslint Config",
  files: ["**/*.{js,mjs,cjs,jsx,mjsx}"],
  ignores: ["**/dist/**", "**/*.{md,mdx}/**/*.{js,jsx}"], // js blocks in md/mdx files handled by jsSnippetConfig
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  extends: [eslint.configs.recommended, eslintPrettier],
  rules: {
    ...globalRules,
    "no-shadow": "error",
  },
};

const tslintConfigs = tseslint.config({
  name: "TS Eslint Config",
  files: ["**/*.{ts,tsx,mts}"],
  ignores: ["**/*.{md,mdx}/**/*.{ts,tsx}"], // ts blocks in md/mdx files handled by tsSnippetConfig
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
    "@typescript-eslint/consistent-type-imports": "error",
  },
}) as ConfigWithExtends[];

const mdxConfig: ConfigWithExtends = {
  name: "MDX Eslint Config",
  ...mdx.flat,
  processor: mdx.createRemarkProcessor({
    lintCodeBlocks: true,
  }),
};

const mdxCodeBlocksConfig: ConfigWithExtends = {
  name: "MDX Code Blocks Eslint Config",
  ...mdx.flatCodeBlocks,
  rules: {
    ...globalRules,
    ...eslint.configs.recommended.rules,
    ...mdx.flatCodeBlocks.rules,
    "no-useless-catch": "off",
    "no-console": "off",
  },
};

export default defineConfig(
  jsConfig,
  ...tslintConfigs,
  mdxConfig,
  mdxCodeBlocksConfig,
);
