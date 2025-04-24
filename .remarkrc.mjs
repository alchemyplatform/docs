export default {
  plugins: [
    "remark-preset-lint-consistent",
    "remark-preset-lint-recommended",
    "remark-frontmatter",
    "remark-preset-lint-markdown-style-guide",
    ["remark-lint-maximum-line-length", false],
    ["remark-lint-heading-increment", false],
    ["remark-lint-rule-style", "***"],
    ["remark-lint-unordered-list-marker-style", "*"],
    ["remark-lint-ordered-list-marker-value", "ordered"],
    ["remark-lint-list-item-indent", "one"],
    ["remark-lint-no-duplicate-headings", false],
    ["remark-lint-no-file-name-irregular-characters", false],
    // TODO: re-enable below rules and fix warnings
    ["remark-lint-no-multiple-toplevel-headings", false], // toplevel headings become H1s in HTML. Multiple H1s are bad for SEO
    ["remark-lint-no-emphasis-as-heading", false],
    ["remark-lint-list-item-spacing", false],
    ["remark-lint-maximum-heading-length", false],
    ["remark-lint-no-heading-punctuation", false],
  ],
};
