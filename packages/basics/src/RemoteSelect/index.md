---
title: 远程搜索输入框 | RemoteSelect
nav:
  path: /basics
group:
  title: 其他组件
  path: /other
---

# RemoteSelect

Remote Select

## Demo

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { RemoteSelect } from '@company-component-next/basics';

export default () => {
  const ref = useRef<any>();
  useEffect(() => {
    console.log(ref);
  });
  return (
    <RemoteSelect
      ref={ref}
      searchUrl="https://cps-api.sk8s.cn/xxx/list?pageSize=9999"
      style={{ width: '200px' }}
      listKey="data, d, Results"
      searchParams={(value) => ({
        name: value,
        pageSize: 9999,
      })}
      dynamicOptionProps={(item) =>
        item.id === '1257'
          ? {
              disabled: true,
            }
          : {}
      }
    />
  );
};
```

<API src="./index.tsx"></API>

## todo

- [ ] 列表支持分页

## 注意

#### 为什么我 disabled 了什么都不显示

- disabled 是屏蔽远程搜索请求的
- 请使用 disabledButRequest
