module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "class-methods-use-this": 0,
    "max-len": 0,
    "no-param-reassign": ["error", { props: false }],
  },
};
