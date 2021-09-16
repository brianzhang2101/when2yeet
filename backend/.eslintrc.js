module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    eqeqeq: 2,
    "quote-props": 0,
    "no-console": "off",
  },
};
