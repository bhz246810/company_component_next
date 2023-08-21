const path = require('path');
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  silent: false,
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.ts'],
  moduleDirectories: ['<rootDir>', './node_modules'],
  moduleNameMapper: {
    '^@@/(.*)$': '<rootDir>/../../.umi/$1',
    '@business@/(.*)$': '<rootDir>/src/$1',
  },
  cacheDirectory: '<rootDir>/../../.pnpm-store/.cache/jest',
};
