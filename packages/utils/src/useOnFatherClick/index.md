---
title: 点击区域事件hook | useOnFatherClick
nav:
  path: /utils
group:
  title: 自定义hook
  path: /hook
---

#### useOnFatherClick

点击区域事件 hook

```tsx
import React, { useRef, useState } from 'react';
import { message } from 'antd';
import { useOnFatherClick } from '@company-component-next/utils';
const Test = () => {
  const testRef = useRef(null);
  useOnFatherClick(testRef, {
    outside: () => {
      message.error('出去了');
    },
    inside: () => {
      message.success('我在里面');
    },
  });
  return (
    <div>
      <b ref={testRef} style={{ border: '1px solid #fff' }}>
        点我
      </b>
      <p></p>
    </div>
  );
};
export default Test;
```

| 属性                | 说明                       | 类型                                                  | 默认值 | 版本 |
| :------------------ | :------------------------- | :---------------------------------------------------- | :----- | :--- |
| ref                 | 类型的变更                 | Ref                                                   | 必传   |      |
| { outside, inside } | 点击内部事件，点击外部事件 | `Record<'outside' \| 'inside', (name?: any) => void>` | 必传   |      |
| type                | 单、多个区域               | `'multi' \| 'single'`                                 | single |      |
