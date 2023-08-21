/*
 * @Description: 头部注释: ..
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-01-14 17:33:29
 * @LastEditors: michael_jier
 * @LastEditTime: 2022-01-14 17:46:42
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'max-len': ['error', 160],
  },
  ignorePatterns: ['coverage'],
};
