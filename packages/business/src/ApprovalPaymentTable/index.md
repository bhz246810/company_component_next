---
title: 付款审批单 | ApprovalPaymentTable
nav:
  path: /business
group:
  title: 其他业务组件
  path: /other
---

## 付款审批单

```tsx
import React, { useState } from 'react';
import { Input, Form, Checkbox, Col, Row } from 'antd';
import { ApprovalPaymentTable } from '@dm-component-next/business';
import { uRequest } from '@dm-component-next/utils';

const getCpsPayDetail = async (params: any) => {
  const res = await uRequest('/memberPay/batchPayPaperInfo', {
    method: 'GET',
    params: {
      ids: params.id,
    },
  });
  return res;
};

export default () => {
  const [edit, setEdit] = useState<boolean>(true);
  return (
    <>
      <h3>项目中台</h3>
      <Checkbox defaultChecked onChange={(e) => setEdit(e.target.checked)} /> 是否可以编辑
      <ApprovalPaymentTable id="1567" edit={edit} />
      <h3>CPS</h3>
      开启部分编辑 edit=['depart','nature', 'date'] 开启部门、付款性质和付款日期（还有一个
      付款总额amount 未开启）
      <ApprovalPaymentTable
        incomeInfo={getCpsPayDetail}
        isFillTime
        id="35257"
        edit={['depart', 'nature', 'date']}
        RemarkSlot={({ info }) => (
          <div style={{ width: `300px`, whiteSpace: 'nowrap' }}>
            <br />
            <h3>信息服务费</h3>
            <Row>
              <Col span={8}>税前:￥{info?.remarkFee?.amount || '0.00'}</Col>
              <Col span={8}>${info?.remarkFee?.sourceAmount || '0.00'}</Col>
              <Col span={8}>汇率:{info?.remarkFee?.currencyRate || '0.00'}</Col>
              <Col span={8}>增值税:￥{info?.remarkFee?.taxAmount || '0.00'}</Col>
              <Col span={8}>地税:￥{info?.remarkFee?.otherTaxAmount || '0.00'}</Col>
              <Col span={8}>税费(手续费):￥{info?.remarkFee?.feeAmount || '0.00'}</Col>
              <Col span={8}>税后:￥{info?.remarkFee?.payAmount || '0.00'}</Col>
              <Col span={8}>${info?.remarkFee?.paySourceAmount || '0.00'}</Col>
            </Row>
          </div>
        )}
        resKey="d"
      />
    </>
  );
};
```

## index 文件

<API src="./index.tsx" exports='["default", "API_paymentInfoType"]'></API>
