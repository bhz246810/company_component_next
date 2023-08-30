/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: Bert
 * @Date: 2022-02-07 16:37:54
 * @LastEditors: Bert
 * @LastEditTime: 2022-04-22 10:16:38
 */
import { exec } from 'child_process';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import builtins from 'builtin-modules';
const businessCustomName = require('./packages/business/customName');
const path = require('path');
const modeEnv = {};
for (const [key, value] of Object.entries(
  process.env.UMI_ENV ? require(path.join(__dirname, `./config/${process.env.UMI_ENV}.json`)) : {},
)) {
  modeEnv['process.env.' + key] = value;
}
console.info(modeEnv);

// const tscAlias = () => {
//   return {
//       name: "tsAlias",
//       writeBundle: () => {
//           return new Promise((resolve, reject) => {
//               exec("tsc-alias", function callback(error, stdout, stderr) {
//                   if (stderr || error) {
//                       reject(stderr || error);
//                   } else {
//                       resolve(stdout);
//                   }
//               });
//           });
//       },
//   };
// };

export default {
  extraExternals: builtins,
  cssModules: true,
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'rollup',
  // 只对rollup生效
  typescriptOpts: {
    // https://github.com/ezolenko/rollup-plugin-typescript2/issues/201
    typescript: require('typescript'),
    tsconfigDefaults: {
      compilerOptions: {
        // Generate declaration files by default
        declaration: true,
        plugins: [
          { transform: 'typescript-transform-paths' },
          { transform: 'typescript-transform-paths', afterDeclarations: true },
        ],
      },
    },
  },
  nodeResolveOpts: {
    browser: true,
    modulesOnly: true,
    // mainFields: ['main']
  },
  extraRollupPlugins: [
    // alias({
    //   entries: [
    //     { find: '@basics@', replacement: path.resolve(__dirname, './packages/basics/src') },
    //     { find: '@business@', replacement: path.resolve(__dirname, './packages/business/src') },
    //   ],
    // }),
    // replace({
    //   values: defineAdd,
    //   preventAssignment: true
    // }),
    commonjs({
      include: /node_modules/,
    }),
    // injectProcessEnv(modeEnv),
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@company-component-next/business',
        camel2DashComponentName: false,
        customName: (name: string) =>
          businessCustomName[name] || `@company-component-next/business/es/${name}`,
      },
      '@company-component-next/business',
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.tsx'],
        alias: {
          '@basics@': '@company-component-next/basics/es',
          '@business@': '@company-component-next/business/es',
        },
      },
    ],
    ['transform-define', modeEnv],
  ],
  pkgs: ['utils', 'basics', 'business'],
};
