# dm-component-next
dumi + lerna + pnpm 

## Install
Using npm:
```bash
# 基础组件包
npm install @company-component-next/basics
# 业务组件包
npm install @company-component-next/business
# 工具包
npm install @company-component-next/utils
```
## Commit
```bash
# 合并了 git add和 cz commit操作
pnpm add-commit
# 自动判断最新版本 alpha + 1
# feature 分支用
# 如果 master 发布了正式包，需要手动 merge再确定最新版本
# 如 , 当前 feature最新 tag 是 0.1.3-alpha.1 ，master 发布了 0.2.0，那就需要 merge master，lv:patch:change-alpha，变成 0.2.0-alpha.0
# 发测试包一般情况用这个即可，在组件库最新的版本（alpha.）上升一级
lv:unknown  
# 0.1.0-alpha.0 => 0.1.0-alpha.1
lv:alpha 
# 0.1.0 => 0.1.1
lv:patch
# 0.1.0 => 0.2.0
lv:minor
# 切换alpha/stable  
#在组件库最新版本上（对应版本号位置）升一级,alpha(测试)stable(正式)
lv:patch:change-alpha # 0.1.0 => 0.1.1-alpha.0
lv:patch:change-stable # 0.1.1-alpha.0 => 0.1.1
lv:minor:change-alpha # 0.1.0 => 0.2.0-alpha.0
lv:minor:change-stable # 0.2.0-alpha.0 => 0.2.0
```
## Publish
1. git规范参考
 ![gitflow参考](https://front-static.duomai.com/dm-component-next/git.png)
 > ⚠️ 文档打包：请在 master-docs 和 test-docs 下打包
 > ⚠️ 不要单独 push 如何 commit 到 test 和 master 分支
2. 流程
   1. 确定版本号，yarn lv:xxx (feature分支)
   2. merge
   2. build:dev/prod
   3. release(:beta)
3. 例子
   1. [feature 分支] lv:alpha
   2. [test 分支] 合并 test，release:beta，测试没有问题
   4. [feature 分支] lv:patch:change-stable
   5. [master 分支] 合并 master，release
4. [lerna 参考](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/)

## tips
### 开发环境下
1.  husky(6.0.0)版本做了Breaking change, 放弃了传统的 JS 配置
    ```bash
    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
    ```
2. mfsu报错 
   filePath not found of xxx 
   删除.umi和.mfsu-dev即可 
3. build 报错：模块“"umi"”没有导出的成员xx，但是实际有（如history） 
   先 start 生成 .umi 临时文件后 build 
4. build 报错 ：查找不到nodemodule下antd下的所有二级目录
   [相关issue](https://github.com/pnpm/pnpm/issues/4286)
5. pro-table 引用了 rc-field-form 但没有声明 (bug)
   [相关issue](https://github.com/ant-design/pro-components/issues/4103)
6. 环境变量
   - 现在环境变量使用单例模式全局保存一份环境变量配置, 使用getGlobalVariable获取，setGlobalVariable 保存
   - 默认环境变量会在 babel AST时候替换,具体配置参考.fatherrc.ts里配置的babel-plugin-transform-define和config/dev(prod).json
7. 路径别名
   1. fatherrc和tsconfig可以看到，@basics@、@business@
   2. father-build babel 模式下并没有开放 extraGulpPlugins, 这里用了 tsc-alias
     
#### 使用环境下
1. 使用按需打包，需要使用 `babel-plugin-import`
  ```js
  // umi config
  //  https://umijs.org/config/
const businessCustomName = require('@company-component-next/business/customName');
{
   ...,
    [
      'import',
      {
        libraryName: '@company-component-next/basics',
        libraryDirectory: 'es',
        camel2DashComponentName: false
      },
      '@company-component-next/basics'
    ],
    [
      'import',
      {
        libraryName: '@company-component-next/business',
        camel2DashComponentName: false,
        customName: (name: string) =>
          businessCustomName[name] || `@company-component-next/business/es/${name}`
      },
      '@company-component-next/business'
    ],
  ],
}
  ```
2. 需要配置extraBabelIncludes
   babel 包内CSS Modules未生效，具体问题参考[issue](https://github.com/umijs/father/issues/434)
  ```js
  // umi config
  {
     ...,
     extraBabelIncludes: [
      '@company-component-next/basics',
      '@company-component-next/business',
      '@company-component-next/utils',
    ],
  }
  ```
  ## Todo
  1. 线上发包
  2. 更完整的lerna-gitflow，lv:unknown
