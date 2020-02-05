module.exports = {
    // Specifies the ESLint parser for TypeScript
    parser: "babel-eslint",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
    },
    plugins: ["react", "prettier"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      // Allows for the parsing of modern ECMAScript features
      ecmaVersion: 2018,
      // Allows for the use of imports
      sourceType: "module",
    },
    rules: {
      // Enable prettier rules
      "prettier/prettier": "error",
    },
  };
  