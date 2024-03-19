---
title: 分解路由参数 | parseParam
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

路由参数提取 parseParam(url: string) 这里将方法返回的对象转化为 json 格式了

```tsx
import React, { useReducer } from 'react';
import { utils } from '@company-component-next/utils';
const { parseParam } = utils;
const Test = () => {
  return (
    <>
      <div>
        'http://www.baidu.com?name=xiangmuzhongtai&sex=male' 路由参数提取：
        {JSON.stringify(
          parseParam('http://www.baidu.com?name=xiaoqiang&sex=male'),
        )}
      </div>
    </>
  );
};
export default Test;
```

| 属性 | 说明 | 类型       | 默认值   | 版本 |
| :--- | :--- | :--------- | :------- | :--- |
| url  | 路由 | `'string'` |
