import React, { ComponentType } from 'react';
export interface paymentInfoType {
  /** 公司名称 */
  companyName?: string;
  /** 收款单位 */
  supplierName?: string;
  /** 左上角应付单位全称，和收款单位意义相同 */
  topSupplierName?: string;
  /** 数字付款总额 */
  amount?: number;
  /** 支付类型（对公等） */
  paymentType?: string;
  /** 中文大写付款总额 */
  capitalAmount?: string;
  /** 收款账号 */
  bankCardId?: string;
  /** 开户银行 */
  bankNameSub?: string;
  /** 币种 */
  currency?: string;
  orderIds?: string;
  message?: any[];
  otherInfo?: any;
}
declare const defaultFocus: {
  readonly depart: false;
  readonly nature: false;
  readonly date: false;
  readonly amount: false;
};
type focusType = keyof typeof defaultFocus;
export type ApprovalPaymentTableProps = {
  /** 备注slot */
  RemarkSlot?: ComponentType<{
    info: any;
  }>;
  /** division_code */
  division_code?: string;
  /** 请求详情接口 */
  incomeInfo?: (params?: any) => Promise<any>;
  /** res的层次路径 比如 d.res => 'd, res'  */
  resKey?: string;
  /** 应收款id */
  id?: number | string;
  /** 是否右上角时间填写当前时间 */
  isFillTime?: boolean;
  paymentInfo?: paymentInfoType;
  /** 支持编辑 */
  edit?: boolean | focusType[];
  /** 支持编辑 */
  style?: React.CSSProperties;
};
declare const ApprovalPaymentTable: React.FC<ApprovalPaymentTableProps>;
declare const API_paymentInfoType: React.FC<paymentInfoType>;
export { API_paymentInfoType };
export default ApprovalPaymentTable;
