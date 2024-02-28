module.exports = {
  root: true,
  extends: ["eslint:recommended", "google"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: { es6: true, node: true },
  overrides: [
    {
      files: ["./*.config.js", "./.*rc.js"],
      extends: ["universe/node"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
  ],
  rules: {
    "no-restricted-imports": [
      "warn",
      {
        // fbjs is a Facebook-internal package not intended to be a public API
        patterns: ["fbjs/*", "fbjs"],
      },
    ],
  },
};
