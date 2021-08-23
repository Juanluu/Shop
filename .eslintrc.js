// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: "module",
    allowImportantExportEverywhere: true
  },

  env: {
    "browser": true,
    "node": true
  },
  extends: [
    'standard',
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue",

  ],
  ignorePatterns: ['*.spec.*', '*mocks*', '**/modules/**', 'test'],

  plugins: [
    "vue"
  ],
  rules: {
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'no-case-declarations': 'off',
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'no-dupe-else-if': 'warn',
    'no-template-curly-in-string': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
