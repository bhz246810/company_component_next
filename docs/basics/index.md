---
title: 介绍
order: 1
nav:
  title: 基础组件
  path: /basics
  order: 1
---

基础组件

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
              API_CONFIG_BASE_API: '//cps-api.sk8s.cn/newgate/dm-crm/',
              API_CONFIG_CPS_API_URL: '//cps-api.sk8s.cn/newgate/newcps/backend',
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
              API_CONFIG_BASE_API: 'https://apigate.duomai.com/newgate/dm-crm/',
              API_CONFIG_CPS_API_URL: 'https://apigate.duomai.com/newgate/newcps/backend',
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
