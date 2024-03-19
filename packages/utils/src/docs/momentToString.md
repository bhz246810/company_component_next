---
title: 时间格式 | momentToString
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

时间格式转化momentToString(value: Moment | string,format = 'YYYY-MM-DD')
```tsx
import React, {useReducer} from 'react'
import { utils } from '@company-component-next/utils';
const { momentToString } = utils;
const Test = () => {
  return (
    <>
      <div>2022-8-19 4:10:22 转化时间格式：{momentToString('2022-8-19 4:10:22')}</div>
    </>
  )
}
export default Test
```

|属性 |说明 |类型 |默认值  |版本|
|:-----|:-----|:-----|:-----|:-----|
|value| 时间| `'Moment \| string'`|
|format| 时间格式| `'string'`| `'YYYY-MM-DD'`|