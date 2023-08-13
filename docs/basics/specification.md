---
title: 基础组件规范
order: 2
nav:
  title: 基础组件
  path: /basics
  order: 1
---

## 规范

## 1.筛选区

### 1.日期选择器

含有“昨日”、“今日”、“本周”、“近七天”、“上周”、“本月”、“上月”的快捷方式。

Demo:

```tsx
import React from 'react';
import { DmRangePicker } from '@dm-component-next/basics';
export default () => (
  <div>
    <DmRangePicker />
  </div>
);
```

### 2.日期选择器(含有时分秒)

当截至时间为天时，默认时间为 23.59.59

Demo:

```tsx
import React from 'react';
import { DmRangePicker } from '@dm-component-next/basics';
export default () => (
  <div>
    <DmRangePicker showTime />
  </div>
);
```

### 3.数值范围（如佣金比例/合同总金额）

使用标准的形式，一个组件而非两个输入框拼接,作品数、互动数等范围筛选.

### 4.选择框

#### 1.人员（eg:媒介、商务）选择框

可逐级展开、支持搜索后选择

Demo:

```tsx
import React from 'react';
import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default () => <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} />;
```

#### 2.计划/项目/商单选择框

### 5.展开按钮（高级筛选及布局）

### 6.搜索输入框

demo：

```tsx
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default () => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select>
);
```

### 7.布局规则

![](https://dm-img-test.duomai.com/20220224174214_jvr056ji98.png)

## 2.内容区

### 1.超链接

### 2.日期

日期范围，年-月-日 时：分：秒

### 3.达人信息

### 4.标签

### 5.列表汇总（各字段的统计）

注意样式：数字带千分符，为蓝色

Demo:

```tsx
import React from 'react';
export default () => <span style={{ color: '#2885f3' }}>123,456,789</span>;
```

### 6.数值的展示（如金额）

1.右对齐 2.小数点后两位 3.带千分符

Demo:

```tsx
import React from 'react';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: '金额',
    dataIndex: 'name',
    key: 'name',
    align: 'right',
    width: 150,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'right',
    width: 150,
  },
];
const data = [
  {
    key: '1',
    name: '99,999.12',
    age: 32,
  },
  {
    key: '2',
    name: '8,555.12',
    age: 42,
  },
  {
    key: '3',
    name: '7,666.88',
    age: 32,
  },
];
export default () => <Table columns={columns} dataSource={data} />;
```

### 7.备注

输入文字,当超出时用省略号省略，并出现文字提示，文字提示中展示全部内容

Demo:

```tsx
import React from 'react';
import { Tooltip } from 'antd';

export default () => (
  <div
    style={{ width: '200px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
  >
    <Tooltip title="萨拉丁开始打拉开圣诞节离开洒家大肆夸奖ask多久啊是的洒家打开手机的接口">
      <span>萨拉丁开始打拉开圣诞节离开洒家大肆夸奖ask多久啊是的洒家打开手机的接口</span>
    </Tooltip>
  </div>
);
```

### 8.功能

可跨页选择设置按钮（可保存列表设置信息）

![](https://image-duomai.oss-cn-hangzhou.aliyuncs.com/6218705a054d8)

### 9.分页器默认条数

默认为 50 条

![](https://image-duomai.oss-cn-hangzhou.aliyuncs.com/621870d4da912)

## 3.表单页

### 1.动态增减器

![](https://dm-img-test.duomai.com/20220225145209_mrdbv0konh.png)

### 2.输入框

#### 1.金额输入框

1.“元”为后缀 2.默认为数字 3.校验大于 0

```tsx
import { InputNumber, Button, Space } from 'antd';
import React from 'react';
export default () => <InputNumber min={0} addonAfter="元" defaultValue={0} />;
```

#### 2.链接输入框

校验格式

### 3.上传组件

#### 1.上传文件

#### 2.上传图片

### 4.提交按钮

节流防抖

## 3.详情页

### 1.时间范围

### 2.基础信息的表格

Demo:

```tsx
import React from 'react';

const hhh = {
  border: '1px solid #F0F0F0',
  height: '35px',
  'line-height': '35px',
};
const w120 = {
  width: '120px',
  border: '1px solid #F0F0F0',
  'background-color': '#F5F5F5',
  'text-align': 'right',
  'padding-right': '12px',
};
const td = {
  height: '36px',
  'line-height': '36px',
  'white-space': 'nowrap',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  'font-family': 'PingFangSC-Regular',
  'font-size': '12px',
  color: '#7F7EA5',
};
export default () => (
  <div style={{ borderTop: '16px solid #f0f2f5', backgroundColor: '#fff', padding: 15 }}>
    <table style={hhh}>
      <tbody>
        <tr style={hhh}>
          <td style={w120}>项目：</td>
          <td style={{ width: 240 }}>项目</td>
          <td style={w120}>总预算：</td>
          <td style={{ width: 240 }}>万元</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>状态：</td>
          <td style={{ width: 240 }}> 状态</td>
          <td style={w120}>平台：</td>
          <td style={{ width: 240 }}> 平台</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>品牌：</td>
          <td style={{ width: 240 }}>平拍</td>
          <td style={w120}>目标：</td>
          <td style={{ width: 240 }}>曝光量</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>商品：</td>
          <td style={{ width: 240 }}>
            <div>示例</div>
          </td>
          <td style={w120}>目标完成度：</td>
          <td style={{ width: 240 }}>曝光量</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>项目文件：</td>
          <td style={{ width: 240 }}>文件</td>
          <td style={w120}>投放周期：</td>
          <td style={{ width: 240 }}>周期</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>审核文件：</td>
          <td style={{ width: 240 }}>文件</td>
          <td style={w120}>推广目的：</td>
          <td style={{ width: 240 }}>目的</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>创建人：</td>
          <td style={{ width: 240 }}>人</td>

          <td style={w120}>备注说明：</td>
          <td style={{ width: 240 }}>说明</td>
        </tr>
        <tr style={hhh}>
          <td style={w120}>创建时间：</td>
          <td style={{ width: 240 }}>时间</td>
          <td style={w120} />
          <td style={{ width: 240 }} />
        </tr>
      </tbody>
    </table>
  </div>
);
```

### 3.布局

#### 1.顶部通栏

带标题或可切换标签页时，需要通栏

## 4.业务组件

### 1.新增/编辑合同弹窗

### 2.新增/编辑联系人弹窗

### 3.批量导入弹窗

## 5.弹窗

### 1.表单弹窗

长表单带锚点定位功能
