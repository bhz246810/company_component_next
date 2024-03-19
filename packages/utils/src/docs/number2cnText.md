---
title: 数字转中文数码 | number2cnText
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

```tsx
import React, { useReducer } from 'react';
import { utils } from '@company-component-next/utils';
const { number2cnText } = utils;
const Test = () => {
  return (
    <>
      <div>大写：</div>
      <div>9999999 进行转中文数字码：{number2cnText(9999999)}</div>
      <div>100000000 进行转中文数字码：{number2cnText(100000000)}</div>
      <div>1234567809 进行转中文数字码：{number2cnText(1234567809)}</div>
      <div>小写: </div>
      <div>9999999 进行转中文数字码：{number2cnText(9999999, 'lower')}</div>
      <div>100000000 进行转中文数字码：{number2cnText(100000000, 'lower')}</div>
      <div>
        1234567809 进行转中文数字码：{number2cnText(1234567809, 'lower')}
      </div>
    </>
  );
};
export default Test;
```

| 属性   | 说明             | 类型       | 默认值    | 版本 |
| :----- | :--------------- | :--------- | :-------- | :--- |
| number | 数字             | `'number'` |
| type   | 中文数字码大小写 | `'string'` | `'upper'` |
