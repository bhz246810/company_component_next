---
title: 金额单位符号格式 | formatMoney
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

金额单位符号格式 formatMoney(money: number,option?: {lang: 'cn' |'en-us'})

```tsx
import React, { useReducer } from 'react';
import { utils } from '@company-component-next/utils';
const { formatMoney } = utils;
const Test = () => {
  return (
    <>
      <div>
        9999999 进行金额单位转化为￥：{formatMoney(9999999, { lang: 'cn' })}
      </div>
      <div>
        9999999 进行金额单位转化为$：{formatMoney(9999999, { lang: 'en-us' })}
      </div>
      <div>9999999 不传第二个参数，只进行格式转化：{formatMoney(9999999)}</div>
    </>
  );
};
export default Test;
```

| 属性   | 说明     | 类型                                | 默认值   | 版本 |
| :----- | :------- | :---------------------------------- | :------- | :--- |
| money  | 金额值   | `'number'`                          |
| option | 金额符号 | `'{lang: "cn"} \| {lang: "en-us"}'` |
