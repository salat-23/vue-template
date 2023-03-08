module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'plugin:vue/vue3-recommended',
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
