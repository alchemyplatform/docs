/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,mjs,mts,md,mdx}": [
    "eslint --fix",
    "prettier --write --log-level silent",
  ],
  "*.{yml,yaml}": [
    // "pnpm run generate",
    "prettier --write --log-level silent",
  ],
  "*.{json}": ["prettier --write --log-level silent"],
};
