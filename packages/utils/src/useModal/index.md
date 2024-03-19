---
title: 弹框hook | useModal
nav:
  path: /utils
group:
  title: 自定义hook
  path: /hook
---
#### useModal
自定义Hook（弹框）
  ```tsx
  import React, {useReducer, useState} from 'react'
  import { Button, Checkbox, Form, Input } from 'antd';
  import {useModal} from '@company-component-next/utils';
  const Test = () => {
    const {renderModal, open, close, state} = useModal({
      children: () => (
        <>
          <div>世界，你好</div>
          <div>世界，你好</div>
          <div>世界，你好</div>
          <div>世界，你好</div>
          <div>世界，你好</div>
        </>
      )
    })
    console.log('RenderModal', open, close)
    return (
      <>
        {renderModal} 
        <Button onClick={() => open()}>自定义弹框：显/隐</Button>
      </>
    )
  }
  export default Test
  ```

|属性 |说明 |类型 |默认值  |版本|
|:-----|:-----|:-----|:-----|:-----|
|onOk|  确认| `'() => void'`|
|onCancel| 取消| `'function'` |||
|open| 显示自定义Modal| `'function'` |||
|close| 隐藏自定义Modal| `'function'` |||
|children| 自定义Modal内部的元素| `'() => HTMLElement'` |||