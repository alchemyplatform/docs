const LINT_IGNORE = ["MDX_FEATURES.md"];

function filterIgnored(files) {
  return files.filter((f) => !LINT_IGNORE.some((ig) => f.endsWith(ig)));
}

/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,mjs,mts,md,mdx}": [
    (files) => {
      const filtered = filterIgnored(files);
      return filtered.length
        ? `eslint --fix ${filtered.join(" ")}`
        : "echo 'no files to lint'";
    },
    (files) => {
      const filtered = filterIgnored(files);
      return filtered.length
        ? `prettier --write --log-level silent ${filtered.join(" ")}`
        : "echo 'no files to format'";
    },
  ],
  "*.{yml,yaml,json}": ["prettier --write --log-level silent"],
};
