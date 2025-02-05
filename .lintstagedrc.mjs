/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,mjs,mts}": [
    "eslint --fix --quiet",
    "prettier --write --log-level silent",
  ],
  "*.{json,mdx,md}": ["prettier --write --log-level silent"],
};
