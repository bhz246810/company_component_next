---
title: 请求接口 | request
nav:
  path: /utils
group:
  title: 自定义方法
  path: /function
---

#### request

1. axios 的封装：对请求拦截、响应拦截、错误的统一处理(会自动进行请求/响应进行拦截，无需手动调用)
2. request 内部使用的是`getGlobalVariable`中的`API_CONFIG_BASE_API`

```
import { request } from '@company-component-next/utils';
// 项目类型
export async function listProjectType(params?: any): Promise<any> {
  return request('/project/project/listProjectType', {
    method: 'GET',
    params,
  });
}
```

| 属性   | 说明             | 类型       | 默认值   | 版本 |
| :----- | :--------------- | :--------- | :------- | :--- |
| url    | 接口             | `'string'` |
| params | 接口请求携带参数 | `'any'`    |
