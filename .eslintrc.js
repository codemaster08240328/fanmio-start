module.exports = {
  root: true,
  extends: ['plugin:vue/recommended'],

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', '@vue/typescript'],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    quotes: [2, 'single', { avoidEscape: true }]
  }
};
