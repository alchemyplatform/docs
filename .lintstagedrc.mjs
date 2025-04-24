/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,mjs,mts,md,mdx}": [
    "eslint --fix",
    "prettier --write --log-level silent",
  ],
  "*.{json,yml,yaml}": ["prettier --write --log-level silent"],
};
