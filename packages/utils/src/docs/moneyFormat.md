---
title: 金额格式化 | moneyFormat
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

金额数字格式化（不保留小数）moneyFormat(value: string | number)

```tsx
import React, { useReducer } from 'react';
import { utils } from '@company-component-next/utils';
const { moneyFormat } = utils;
const Test = () => {
  return (
    <>
      <div>9999999 进行金额格式化：{moneyFormat(9999999)}</div>
      <div>100000000 进行金额格式化：{moneyFormat(100000000)}</div>
      <div>88888888 进行金额格式化：{moneyFormat(88888888)}</div>
    </>
  );
};
export default Test;
```

| 属性  | 说明                 | 类型               | 默认值   | 版本 |
| :---- | :------------------- | :----------------- | :------- | :--- |
| value | 金额值（传入的参数） | `'number\|string'` |
