/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "**/*.{json,css}": ["prettier --write --log-level silent"],
  "*.{js,jsx,ts,tsx}": ["prettier --write --log-level silent"],
};
