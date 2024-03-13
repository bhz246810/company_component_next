import { defineConfig } from 'dumi';

const path = require('path');
const favicon =
  'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png';
const logo =
  'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png';

// more config: https://d.umijs.org/config

export default defineConfig({
  title: 'company-component-next',
  favicon,
  logo,
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  styles: [
    `
    .__dumi-default-previewer-demo {
      background: rgba(255, 255, 255, 0.5) !important;
    }
    .markdown table {
      white-space: pre-line;
    }
  `,
  ],
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  webpack5: {},
  nodeModulesTransform: {
    type: 'none',
  },
  esbuild: {},
  devtool: false,
  // 配置 external
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },

  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
        ],
  dynamicImport: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
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
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
      },
      'antd-mobile',
    ],
  ],
  alias: {
    '@basics@': path.resolve(__dirname, './packages/basics/src'),
    '@business@': path.resolve(__dirname, './packages/business/src'),
  },
  fastRefresh: {},
  // more config: https://d.umijs.org/config
});
