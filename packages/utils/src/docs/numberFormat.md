---
title: 数值单位格式化 | numberFormat
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

数值单位格式化 numberFormat(value: number, fix = 2)

```tsx
import React, { useReducer } from 'react';
import { utils } from '@company-component-next/utils';
const { numberFormat } = utils;
const Test = () => {
  return (
    <>
      <div>8888888 数值单位格式化：{numberFormat(8888888)}</div>
      <div>100000000 数值单位格式化：{numberFormat(100000000, '3')}</div>
    </>
  );
};
export default Test;
```

| 属性  | 说明     | 类型                 | 默认值   | 版本 |
| :---- | :------- | :------------------- | :------- | :--- |
| value | 数值     | `'number'`           |
| fix   | 小数位数 | `'number \| string'` | `'2'`    |
