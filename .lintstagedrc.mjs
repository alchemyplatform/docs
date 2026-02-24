/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "(!MDX_FEATURES.md)*.{js,jsx,ts,tsx,mjs,mts,md,mdx}": [
    "eslint --fix",
    "prettier --write --log-level silent",
  ],
  "*.{yml,yaml,json}": ["prettier --write --log-level silent"],
};
