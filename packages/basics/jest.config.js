/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-03-02 17:17:18
 * @LastEditors: michael_jier
 * @LastEditTime: 2023-01-28 14:13:27
 */
const path = require('path');
module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['./node_modules', '../../node_modules'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.ts'],
  moduleNameMapper: {
    '^@@/(.*)$': '<rootDir>/../../.umi/$1',
  },
  cacheDirectory: '<rootDir>/../../.pnpm-store/.cache/jest',
};
