/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-03-02 17:17:18
 * @LastEditors: michael_jier
 * @LastEditTime: 2023-01-28 17:03:33
 */
const path = require('path');
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['<rootDir>', './node_modules'],
  moduleNameMapper: {
    '^@@/(.*)$': path.join(__dirname, '../../.umi/$1'),
  },
  cacheDirectory: '<rootDir>/../../.pnpm-store/.cache/jest',
};
