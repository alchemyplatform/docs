const PRETTIER_IGNORE = ["MDX_FEATURES.md"];

/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,mjs,mts,md,mdx}": [
    "eslint --fix",
    (files) => {
      const filtered = files.filter(
        (f) => !PRETTIER_IGNORE.some((ig) => f.endsWith(ig)),
      );
      return filtered.length
        ? `prettier --write --log-level silent ${filtered.join(" ")}`
        : "echo 'no files to format'";
    },
  ],
  "*.{yml,yaml,json}": ["prettier --write --log-level silent"],
};
