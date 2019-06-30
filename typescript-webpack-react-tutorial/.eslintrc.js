const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: path.resolve(__dirname),
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react"],
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-filename-extension": [1, {
      "extensions": [".ts", ".tsx", ".js", ".jsx"]
    }],
  }

};
