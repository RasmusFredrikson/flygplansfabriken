module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: [],
  rules: {
    "prettier/prettier": ["error"],
    "jsx-quotes": ["error", "prefer-double"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  overrides: [
    {
      files: ["./src/**/*.{ts,tsx}"],
      parserOptions: {
        project: {
          extends: "./tsconfig.app.json",
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      extends: ["plugin:react/recommended"],
      rules: {
        "react/prop-types": 0,
        "react/display-name": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-inferrable-types": "off",
      },
    },
  ],
};
