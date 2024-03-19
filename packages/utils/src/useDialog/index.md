---
title: 开关值hook | useDialog
nav:
  path: /utils
group:
  title: 自定义hook
  path: /hook
---

#### useDialog

自定义 Hook（弹框的开关值）

```tsx
import React, { useReducer, useState } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useDialog } from '@company-component-next/utils';
const Test = () => {
  const [state, open, close] = useDialog({});
  return (
    <>
      <Modal
        title="Basic Modal"
        {...state}
        onOk={close}
        onCancel={close}
      ></Modal>
      <Button onClick={() => open()}>自定义useDialog</Button>
    </>
  );
};
export default Test;
```

| 属性     | 说明       | 类型           | 默认值   | 版本 |
| :------- | :--------- | :------------- | :------- | :--- |
| onOk     |   确认     | `'() => void'` |
| onCancel | 取消       | `'function'`   |          |      |
| open     | 显示 Modal | `'function'`   |          |      |
| close    | 隐藏 Modal | `'function'`   |          |      |
