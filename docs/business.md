---
title: 介绍（这里切换环境）
nav:
  title: 业务组件
  path: /business
  order: 2
---

业务组件

```tsx
import React, { useReducer } from 'react';
import { Button } from 'antd';
import {
  setGlobalVariable,
  getGlobalVariable,
} from '@company-component-next/utils';
const Test = () => {
  const [_, forceUpdate] = useReducer(() => ({}), {});
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        目前环境：
        {getGlobalVariable().API_CONFIG_ENV === 'dev' ? '测试' : '正式'}环境
      </div>
      <Button
        type="primary"
        ghost
        onClick={() => {
          setGlobalVariable({
            env: {
              API_CONFIG_ENV: 'dev',
              API_CONFIG_BASE_API: '//bert-api.sk8s.cn/API_CONFIG_BASE_API/',
              API_CONFIG_CPS_API_URL:
                '//bert-api.sk8s.cn/API_CONFIG_CPS_API_URL',
              API_CONFIG_BIG_DATA_URL: '//data.sk8s.cn',
              API_CONFIG_CONTRACT_URL: '//contract.sk8s.cn/',
              API_CONFIG_PUBLIC_URL: '//component.sk8s.cn/',
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
              API_CONFIG_BASE_API:
                'https://apigate.xxx.com/API_CONFIG_BASE_API/',
              API_CONFIG_CPS_API_URL:
                'https://apigate.xxx.com/API_CONFIG_CPS_API_URL',
              API_CONFIG_BIG_DATA_URL: '//basic-data.xxx.com',
              API_CONFIG_CONTRACT_URL: 'https://contract.xxx.com/',
              API_CONFIG_PUBLIC_URL: 'https://component.xxx.com/api/',
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
