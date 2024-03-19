---
title: 金额格式化(保留小数) | decimalThousand
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

金额数字格式化（第二个参数：保留小数的个数）decimalThousand(value: number | string, num: number)
```tsx
import React, {useReducer} from 'react'
import { utils } from '@company-component-next/utils';
const { decimalThousand } = utils;
const Test = () => {
  return (
    <>
      <div>9999999 进行金额格式化：{decimalThousand(9999999, 2)}</div>
      <div>88888888 进行金额格式化：{decimalThousand('88888888', 1)}</div>
      <div>100000000 进行金额格式化：{decimalThousand(100000000, 3)}</div>
    </>
  )
}
export default Test
```


|属性 |说明 |类型 |默认值  |版本|
|:-----|:-----|:-----|:-----|:-----|
|value| 金额值（传入的参数）| `'number\|string'`|
|num| 保留小数的位数| `'number'`|
