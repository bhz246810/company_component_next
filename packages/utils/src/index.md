---
title: 自定义方法 | function
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

## 导入自定义方法

1. import { utils } from "@company-component-next/utils"
2. const {moneyFormat} = utils **或者**
3. import {numberFormat} from "@company-component-next/utils/es/utils"

## 环境变量

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
