import eslint from "@eslint/js";
import parser from "@typescript-eslint/parser";
import eslintPrettier from "eslint-config-prettier";
import * as mdx from "eslint-plugin-mdx";
import globals from "globals";
import tseslint from "typescript-eslint";

const globalRules = {
  eqeqeq: ["error", "smart"],
  "no-console": ["warn", { allow: ["warn", "error", "info"] }],
  "no-lonely-if": "error",
  "no-nested-ternary": "error",
};

/** @type {import('eslint').Linter.Config} */
const jsConfig = {
  name: "JS Eslint Config",
  files: ["**/*.{js,mjs,cjs,jsx,mjsx}"],
  ignores: ["**/dist/**", "**/*.{md,mdx}/**/*.js"], // js blocks in md/mdx files handled by jsSnippetConfig
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

// Code snippets in markdown files are treated as "virtual" files that exist within the markdown file (as if it were a dir)
// Use a separate config for these files to disable rules that don't make sense for code snippets
/** @type {import('eslint').Linter.Config} */
// const jsSnippetConfig = {
//   name: "JS Snippet Eslint Config",
//   files: ["**/*.{md,mdx}/**/*.js"],
//   languageOptions: {
//     ...jsConfig.languageOptions,
//   },
//   rules: {
//     ...jsConfig.rules,
//     "no-console": "off",
//     "no-unused-vars": "off",
//     "no-undef": "off",
//   },
// };

/** @type {import('eslint').Linter.Config} */
const baseTsConfig = {
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
};

const tslintConfigs = tseslint.config({
  ...baseTsConfig,
  name: "TS Eslint Config",
  files: ["**/*.{ts,tsx,mts}"],
  ignores: ["**/*.{md,mdx}/**/*.ts"], // ts blocks in md/mdx files handled by tsSnippetConfig
  languageOptions: {
    parser,
    parserOptions: {
      project: ["./tsconfig.json"],
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
});

// Code snippets in markdown files are treated as "virtual files" that exist within the markdown file (as if it were a dir)
// Use a separate config for these files to disable rules that don't make sense for code snippets
// const tsSnippetConfig = tseslint.config({
//   ...baseTsConfig,
//   name: "TS Snippet Eslint Config",
//   files: ["**/*.{md,mdx}/**/*.ts"], // ts blocks in md/mdx files
//   languageOptions: {
//     parser,
//     parserOptions: {
//       // no project - these files don't exist from the parser's perspective
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//   },
//   rules: {
//     ...baseTsConfig.rules,
//     "@typescript-eslint/no-unused-vars": "off",
//     "no-console": "off",
//   },
// });

/** @type {import('eslint').Linter.Config} */
// const mdConfig = {
//   name: "Markdown Eslint Config",
//   files: ["**/*.{md}"],
//   plugins: {
//     markdown,
//   },
//   processor: "markdown/markdown",
//   languageOptions: {
//     parserOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//   },
//   language: "markdown/commonmark",
//   rules: {
//     ...markdown.configs.recommended[0].rules,
//   },
// };

const mdxConfig = {
  name: "MDX Eslint Config",
  ...mdx.flat,
  processor: mdx.createRemarkProcessor({
    lintCodeBlocks: true,
  }),
};

const mdxCodeBlocksConfig = {
  name: "MDX Code Blocks Eslint Config",
  ...mdx.flatCodeBlocks,
  rules: {
    ...mdx.flatCodeBlocks.rules,
    "no-console": "off",
  },
};

/** @type {import('eslint').Linter.Config[]} */
export default [
  jsConfig,
  // jsSnippetConfig,
  ...tslintConfigs,
  // ...tsSnippetConfig,
  // mdConfig,
  mdxConfig,
  mdxCodeBlocksConfig,
];
