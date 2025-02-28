/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/lib/types/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
};
