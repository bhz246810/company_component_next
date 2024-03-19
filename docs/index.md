---
hero:
  title: 组件库
  desc: company-component-next
  actions:
    - text: 开始
      link: /basics
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: monorepo
    desc: lerna + pnpm
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 强制规范
    desc: git-cz + husky + eslint
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 其他特性
    desc: 按需引用、更合理的环境变量处理等
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## 简介

基于公司业务沉淀出的组件/模块库，包含了一些封装了设计规范样式的常见业务组件，亦存在一些由 schema-page 开发的、多个系统内复用的模具，可支持一些逻辑相似的业务快速落地

## 设计规范

[设计规范地址](https://www.yuque.com/mncnwc/project/gq16be)

## 使用指南

#### 安装

```bash
# 基础组件包
npm install @company-component-next/basics
# 业务组件包
npm install @company-component-next/business
# 工具包
npm install @company-component-next/utils
```

#### 环境变量

1. 现在环境变量使用单例模式全局保存一份环境变量配置, 使用`getGlobalVariable`获取，`setGlobalVariable` 保存
2. 默认环境变量会在 babel AST 时候替换,具体配置参考`.fatherrc.ts`里配置的`babel-plugin-transform-define`和`config/dev(prod).json`
3. 项目中使用：

```tsx
import React, { useReducer } from 'react';
import { Button } from 'antd';
import { setGlobalVariable, getGlobalVariable } from '@company-component-next/utils';
const Test = () => {
  const [_, forceUpdate] = useReducer(() => ({}), {});
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        目前环境：{getGlobalVariable().API_CONFIG_ENV === 'dev' ? '测试' : '正式'}环境
      </div>
      <Button
        type="primary"
        ghost
        onClick={() => {
          setGlobalVariable({
            env: {
              API_CONFIG_ENV: 'dev',
              API_CONFIG_BASE_API: '//bert-api.sk8s.cn/API_CONFIG_BASE_API/',
              API_CONFIG_CPS_API_URL: '//bert-api.sk8s.cn/API_CONFIG_CPS_API_URL',
              API_CONFIG_BIG_DATA_URL: '//data.sk8s.cn',
            },
            writable: true, // 对象是否防止篡改
          });
          forceUpdate();
          console.log(getGlobalVariable());
        }}
      >
        {' '}
        测试环境{' '}
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: `20px` }}
        onClick={() => {
          setGlobalVariable({
            env: {
              API_CONFIG_ENV: 'pro',
              API_CONFIG_BASE_API: 'https://apigate.xxx.com/API_CONFIG_BASE_API/',
              API_CONFIG_CPS_API_URL: 'https://apigate.xxx.com/API_CONFIG_CPS_API_URL',
              API_CONFIG_BIG_DATA_URL: 'https://basic-data.xxx.com',
            },
            writable: true, // 对象是否防止篡改
          });
          forceUpdate();
          console.log(getGlobalVariable());
        }}
      >
        {' '}
        正式环境{' '}
      </Button>
    </>
  );
};

export default Test;
```

#### 按需引入

1. 使用按需打包，需要使用 `babel-plugin-import`

```js
// umi config ，参考https://umijs.org/config/
{
 ...,
 extraBabelPlugins: [
      [
        'import',
        { libraryName: '@company-component-next/basics', libraryDirectory: 'es', camel2DashComponentName: false },
        '@company-component-next/basics'
      ],
      [
        'import',
        { libraryName: '@company-component-next/business' ,camel2DashComponentName: false},
        '@company-component-next/business'
      ],
    ],
  }
```

2. 需要配置 extraBabelIncludes，否则 babel 包内 CSS Modules 会不生效，具体问题参考[issue](https://github.com/umijs/father/issues/434)

```js
{
   ...,
   extraBabelIncludes: [
    '@company-component-next/basics',
    '@company-component-next/business',
    '@company-component-next/utils',
  ],
}
```

## 依赖

- react
- antd
- schema-page
- axios

## 目录结构

1.  组件/模块/常量/hooks 在不同 packages 中开发
    - `basics` 基础组件
    - `business` 业务组件
    - `utils` 工具类函数/hook 等
2.  在 `src` 目录下开发组件/模块
    - `src/services` 目录用于存放接口相关文件
    - `src/styles` 目录用于存放公共样式
    - `src/typings` 目录用于存放公共类型文件
3.  需要提供给外界调用的组件/模块/常量/hooks 等，要在 `src/index.ts` 中导出

## 开发指南

### 基本

- 本仓库由[dumi](https://d.umijs.org/zh-CN)构建，支持`umi`，[father-build](https://github.com/umijs/father)进行打包
- 使用 [lerna](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/) + [pnpm](https://pnpm.io/) 进行包管理

### git 规范

#### 简化的 gitflow 规范

#### commit

1.  项目限制了 commit 的格式，参考`.cz-config`
    > 注：lv:xxx 参考 [lerna version 命令](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/version.html)

```bash
pnpm add_commit
# 0.1.0-alpha.0 => 0.1.0-alpha.1
lv:alpha
# 0.1.0 => 0.1.1
lv:patch
# 0.1.0 => 0.2.0
lv:minor
# 切换alpha/stable
lv:patch/minor:change-alpha/change-stable
```

#### 发布流程

1.  `lerna version`(参考 Commit lv:xxx)
2.  `build:dev/prod`
3.  `release(:beta)`
    > 使用案例
    >
    > 1. [feature 分支] `lv:alpha`
    > 2. [test 分支] 合并 test，`release:beta`，测试没有问题
    > 3. [feature 分支] `lv:patch:change-stable`
    > 4. [master 分支] 合并 master，release \***\*本仓库存储在[公司内网的 `npm` 私服](xxx)上，因此如需要下载最新版本，必须将 `npm` 或 `yarn` 的源切换为[公司内网的 `npm` 私服](xxx)，即 `xxx`。\*\***

`@beta` 是测试环境使用的版本，其中模块的接口也都是测试环境的，具体发布指令查看 `package.json` 中的 `script` 即可。

#### 路径别名

1. fatherrc 和 tsconfig 可以看到，在不同的包内使用不同的别名（`@[packages name]@`），如`@basics@`、`@business@`
2. father-build babel 模式下并没有开放 extraGulpPlugins, 这里用了 tsc-alias

### 其他 tips，参考项目中的 README.md
