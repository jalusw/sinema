module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "webpack.*",
    "tailwind.config.js",
    "postcss.config.js",
    "dist",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",
    eqeqeq: "warn",
    "no-debugger": "error",
    camelcase: "warn",
  },
};
