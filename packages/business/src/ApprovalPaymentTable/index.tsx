/* eslint-disable no-useless-escape */
import React, { useEffect, useRef, useState, ComponentType } from 'react';
import styles from './index.less';
import { incomeInfo as defaultIncomeInfo } from './services';
import { Checkbox, DatePicker, Input } from 'antd';
import { utils, useOnFatherClick } from '@dm-component-next/utils';
const { number2cnText } = utils;
import trim from 'lodash/trim';
import moment from 'moment';
import { CheckboxProps } from 'antd/es/checkbox';
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

const defaultFocus = {
  depart: false,
  nature: false,
  date: false,
  amount: false,
} as const;

type focusType = keyof typeof defaultFocus;

export type ApprovalPaymentTableProps = {
  /** 备注slot */
  RemarkSlot?: ComponentType<{ info: any }>;
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
// & EitherOr<
//   { id?: number; paymentInfo?: paymentInfoType },
//   'id',
//   'paymentInfo'
// >;
const getResKey = (keyNames: string, res: any) => {
  if (keyNames === '') return res;
  const keyNameList = keyNames.split(',').map((item) => trim(item));
  return keyNameList.reduce((pre: any, curr: string) => pre?.[curr], res);
};

const PAYMENT_TYPE_MAP = {
  0: '转账(银行)',
  1: '现金',
  2: '支票',
  3: '电汇',
  4: '汇票',
  5: '其他',
  6: '转账(Paypal)',
};
const PAYMENT_TYPE_MAP_KEY = Object.entries(PAYMENT_TYPE_MAP).reduce(
  (pre, [key, value]) => ({ ...pre, [value]: key }),
  {},
);
const CURRENCY_MAP = {
  RMB: 'CNY',
  USD: 'USD',
};

const ApprovalPaymentTable: React.FC<ApprovalPaymentTableProps> = ({
  RemarkSlot,
  id,
  isFillTime,
  style,
  resKey = 'data, d',
  incomeInfo = defaultIncomeInfo,
  division_code = 'maijia',
  edit = false,
  ...props
}) => {
  const [paymentInfo, setPaymentInfo] = useState<paymentInfoType>({});
  const [amount, setAmount] = useState<number | string>(0);
  const now = moment().locale('zh-cn').format('YYYY-MM-DD').split('-');
  const [focus, setFocus] = useState<Record<focusType, boolean>>(defaultFocus);
  const editType = (keyName: focusType) =>
    edit ? (Array.isArray(edit) ? edit.includes(keyName) : true) : false;
  const editRef: React.MutableRefObject<Record<string, any>> = useRef(
    Object.keys(defaultFocus).reduce((pre, curr) => {
      return {
        ...pre,
        [curr]: useRef(null),
      };
    }, {}),
  );
  useOnFatherClick(
    editRef,
    {
      outside: (name: focusType) => {
        editType(name) &&
          setFocus((pre) => ({
            ...pre,
            [name]: false,
          }));
      },
      inside: (name: focusType) => {
        editType(name) &&
          setFocus((pre) => ({
            ...pre,
            [name]: true,
          }));
      },
    },
    'multi',
  );

  useEffect(() => {
    (async () => {
      if (props?.paymentInfo) {
        setPaymentInfo(props?.paymentInfo);
      }
      if (id) {
        const res = await incomeInfo({
          id,
          division_code,
        });
        if (getResKey(resKey.replace(/d$/, 'f'), res) > 0 && getResKey(resKey, res)) {
          console.log(res);
          const d = getResKey(resKey, res);
          setPaymentInfo({
            ...d,
            companyName: d?.companyName,
            topSupplierName: d?.supplierName,
            amount: d?.paySourceAmount || d?.amount,
            capitalAmount: d?.capitalAmount,
            paymentType: d?.paymentType || d?.payment_type,
            bankCardId: d?.bankCardId,
            bankNameSub: d?.bankNameSub,
            orderIds: d?.orderIds,
            message: d?.message,
            currency: d?.currency,
          });
          setAmount(d?.paySourceAmount || d?.amount);
        }
      }
    })();
  }, [props?.paymentInfo, id]);

  const leftInfo: {
    keyName: keyof paymentInfoType;
    name: string;
    autoHidden?: boolean;
  }[] = [
    {
      keyName: 'supplierName',
      name: '收款单位',
    },
    {
      keyName: 'bankCardId',
      name: '收款账号',
    },
    {
      keyName: 'bankNameSub',
      name: '开户银行',
    },
    {
      keyName: 'otherInfo',
      name: '其他相关信息',
      autoHidden: false,
    },
  ];

  const replaceCheckBox = (
    str: string,
    checkedKey?: keyof paymentInfoType,
    keyMap?: Record<string, any>,
  ) =>
    edit && (checkedKey ? paymentInfo[checkedKey] : true)
      ? str?.split('□')?.reduce?.(
          (pre, curr) => (
            <>
              {pre}
              {curr && (
                <>
                  <Checkbox
                    {...(checkedKey && {
                      defaultChecked: (keyMap ? keyMap[curr] : curr) == paymentInfo[checkedKey],
                    })}
                  ></Checkbox>
                  {curr}
                </>
              )}
            </>
          ),
          <></>,
        )
      : str;

  return (
    <>
      <div className={styles.wordContent} style={style}>
        <p className={styles.textCenter}>
          <span className={styles.songFont} style={{ fontSize: '24px' }}>
            {paymentInfo?.companyName}
          </span>
        </p>
        <hr style={{ fontWeight: 'bolder', width: '350px', margin: '1px auto' }} />
        <hr style={{ fontWeight: 'bolder', width: '350px', margin: '1px auto' }} />
        <p className={styles.textCenter} style={{ lineHeight: '34px' }}>
          <strong>
            <span className={`${styles.songFont} ${styles.blackFont}`} style={{ fontSize: '30px' }}>
              付款审批单
            </span>
          </strong>
        </p>
        <div style={{ lineHeight: '23px', overflow: 'hidden' }}>
          <p className={styles.blackFont} style={{ lineHeight: '23px', float: 'left' }}>
            <strong>应付单位全称</strong>
            <span className={styles.font2}>:</span>
            &nbsp;
            {paymentInfo?.topSupplierName}
          </p>
          <p className={styles.blackFont} style={{ lineHeight: '23px', float: 'right' }}>
            {/* <span className={styles.font1}>{}</span> */}
            <strong>
              <span className={styles.songFont}>{isFillTime && now?.[0]}年</span>
            </strong>
            {/* <strong><span className={styles.font1}>{}</span></strong> */}
            <strong>
              <span
                className={styles.songFont}
                style={{ marginLeft: isFillTime ? '15px' : '30px' }}
              >
                {isFillTime && now?.[1]}月
              </span>
            </strong>
            {/* <strong><span className={styles.font1}>{}</span></strong> */}
            <strong>
              <span
                className={styles.songFont}
                style={{ marginLeft: isFillTime ? '15px' : '30px' }}
              >
                {isFillTime && now?.[2]}日
              </span>
            </strong>
          </p>
        </div>
        <table>
          <tr style={{ height: '32px' }} className={styles.firstRow}>
            <td style={{ width: '85px' }} className={styles.td1}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>部&nbsp; 门</span>
                </strong>
              </p>
            </td>
            <td
              style={{ width: '170px' }}
              colSpan={2}
              className={`${styles.td2} ${editType('depart') ? styles.edit : ''}`}
              ref={editRef?.current?.depart}
            >
              {editType('depart') && (
                <Input placeholder={(focus.depart && '请输入所属部门') || ''} />
              )}
              <br />
            </td>
            <td style={{ width: '85px' }} colSpan={2} className={styles.td2}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>付款性质</span>
                </strong>
              </p>
            </td>
            <td
              style={{ width: '160px' }}
              colSpan={2}
              className={`${styles.td2} ${editType('nature') ? styles.edit : ''}`}
              ref={editRef?.current?.nature}
            >
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>
                    {editType('nature') ? (
                      <Input
                        defaultValue={paymentInfo?.paymentType || ''}
                        placeholder={(focus?.nature && '请输入付款性质') || ''}
                      />
                    ) : (
                      paymentInfo?.paymentType || ''
                    )}
                  </span>
                </strong>
              </p>
            </td>
            <td style={{ width: '140px' }} colSpan={2} className={styles.td2}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>付款日期</span>
                </strong>
              </p>
            </td>
            <td
              style={{ width: '132px' }}
              colSpan={2}
              className={`${styles.td2} ${editType('date') ? styles.edit : ''}`}
              ref={editRef?.current?.date}
            >
              {editType('date') && (
                <DatePicker
                  getPopupContainer={() => editRef?.current?.date?.current || document.body}
                  bordered={false}
                  suffixIcon={() => false}
                  placeholder={(focus?.date && '请选择付款日期') || ''}
                  style={{ width: '100%' }}
                  format="YYYY年MM月DD日"
                />
              )}
              <br />
            </td>
          </tr>

          <tr style={{ height: '32px' }}>
            <td style={{ width: '85px' }} className={styles.td3}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>付款总额</span>
                </strong>
              </p>
            </td>
            <td
              style={{
                width: 584,
                ...(editType('amount') && { paddingRight: 0 }),
              }}
              colSpan={10}
              className={styles.td4}
            >
              <p className={`${styles.blackFont} ${styles.amount}`} style={{ lineHeight: '23px' }}>
                <span className={styles.songFont}>
                  小写：{paymentInfo?.currency === 'USD' ? '$' : '￥'}：
                </span>
                <span
                  className={styles.font2}
                  style={{ textDecoration: 'underline', flex: 1 }}
                  ref={editRef?.current?.amount}
                  // onClick={() => edit && setAmountFocus(true)}
                >
                  {focus?.amount ? (
                    <>
                      <Input
                        value={amount}
                        bordered={false}
                        placeholder="请输入付款总额"
                        style={{ padding: 0 }}
                        onChange={(e) => {
                          const { value } = e.target;
                          const tempArr = value.split('.');
                          if (tempArr.length > 1) {
                            setAmount(
                              `${tempArr[0]}.${tempArr?.[1]?.slice(0, 2)}`.replace(
                                /[^\d{1,}\.\d{1,}|\d{1,}]/g,
                                '',
                              ),
                            );
                          } else {
                            setAmount(value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, ''));
                          }
                        }}
                      ></Input>
                    </>
                  ) : (
                    amount || <>&nbsp;&nbsp;&nbsp;&nbsp;</>
                  )}
                </span>
              </p>
            </td>
          </tr>

          <tr style={{ height: '32px' }}>
            <td style={{ width: '85px' }} className={styles.td3}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>审批金额</span>
                </strong>
              </p>
            </td>
            <td style={{ width: 584 }} colSpan={10} className={styles.td4}>
              <p className={styles.blackFont} style={{ lineHeight: '23px' }}>
                <span className={styles.songFont}>
                  大写：{paymentInfo?.currency === 'USD' ? '$' : '￥'}：
                </span>
                <span className={styles.font2} style={{ textDecoration: 'underline' }}>
                  {/* {paymentInfo?.capitalAmount || <>&nbsp;&nbsp;&nbsp;&nbsp;</>} */}
                  {(Number(amount) > 0
                    ? number2cnText(amount)
                    : '负' + number2cnText(Math.abs(Number(amount)))) || (
                    <>&nbsp;&nbsp;&nbsp;&nbsp;</>
                  )}
                </span>
              </p>
            </td>
          </tr>

          <tr style={{ height: '32px' }}>
            <td style={{ width: '85px' }} className={styles.td3}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>结算方式</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '331px' }} colSpan={5} className={styles.td4}>
              <p className={styles.textCenter} style={{ lineHeight: '23px', fontSize: '12px' }}>
                <span
                  className={`${styles.songFont} ${styles.blackFont} ${edit ? styles.edit : ''}`}
                >
                  {replaceCheckBox(
                    '□现金□转账(银行)□转账(Paypal)□支票□电汇□汇票□其他',
                    'paymentType',
                    PAYMENT_TYPE_MAP_KEY,
                  )}
                </span>
              </p>
            </td>
            <td style={{ width: '57px' }} colSpan={2} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>币种</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '196px' }} colSpan={3} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.blackFont} ${edit ? styles.edit : ''}`}
                style={{ lineHeight: '23px', fontSize: '12px' }}
              >
                {replaceCheckBox('□RMB□USD□其他', 'currency', CURRENCY_MAP)}
              </p>
            </td>
          </tr>

          <tr style={{ height: '32px' }}>
            <td
              style={{ height: '170px' }}
              colSpan={4}
              valign="top"
              className={`${styles.blackFont} ${styles.td3}`}
            >
              {leftInfo?.length &&
                leftInfo.map((item) =>
                  paymentInfo?.[item.keyName] || item.autoHidden === false ? (
                    <>
                      <p style={{ lineHeight: '23px' }}>
                        <strong>
                          <span className={styles.songFont}>{item.name}</span>
                        </strong>
                        <strong>
                          <span className={styles.font2}>：</span>
                        </strong>
                        <strong>
                          <span style={{ fontSize: '12px' }} className={styles.songFont}>
                            {paymentInfo?.[item.keyName] || ''}
                          </span>
                        </strong>
                      </p>
                      <p style={{ lineHeight: '10px' }}>
                        <strong>
                          <span className={styles.font2}>&nbsp;</span>
                        </strong>
                      </p>
                    </>
                  ) : (
                    <></>
                  ),
                )}
            </td>
            <td
              style={{ width: '357px', position: 'relative' }}
              colSpan={7}
              valign="top"
              className={`${styles.blackFont} ${styles.td4}`}
            >
              <p style={{ lineHeight: '23px' }}>
                <strong>
                  <span className={styles.songFont}>备注</span>
                </strong>
                <span className={styles.songFont}>（用途</span>
                <span className={styles.font2}>/</span>
                <span className={styles.songFont}>
                  项目等）<strong>：</strong>
                </span>
              </p>
              {RemarkSlot && <RemarkSlot info={paymentInfo} />}
            </td>
          </tr>
          <tr style={{ height: '32px' }}>
            <td style={{ width: '104px' }} className={styles.td3}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>经办人</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '95px' }} className={styles.td4}>
              <br />
            </td>
            <td style={{ width: '104px' }} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>上级领导</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '95px' }} className={styles.td4}>
              <br />
            </td>
            <td style={{ width: '104px' }} colSpan={2} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>财务审核</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '95px' }} colSpan={2} className={styles.td4}>
              <br />
            </td>
            <td style={{ width: '140px' }} colSpan={2} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '13px' }}>总经理签批</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '104px' }} colSpan={1} className={styles.td4}>
              <br />
            </td>
          </tr>

          <tr style={{ height: '32px' }}>
            <td style={{ width: '85px' }} className={styles.td3}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>付款账户</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '150px' }} colSpan={3} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}></span>
                </strong>
              </p>
            </td>
            <td style={{ width: '135px' }} colSpan={2} className={styles.td4}>
              <p
                className={`${styles.textCenter} ${styles.songFont} ${styles.blackFont}`}
                style={{ lineHeight: '20px' }}
              >
                <strong>
                  <span style={{ fontSize: '15px' }}>实际支付日期</span>
                </strong>
              </p>
            </td>
            <td style={{ width: '243px' }} colSpan={5} className={styles.td4}>
              <br />
            </td>
          </tr>
        </table>
        <p className={styles.blackFont} style={{ lineHeight: '23px' }}>
          <p className={styles.songFont}>
            备注：1、经办人每申请一次付款须填写此表，如有预付款的请自行做好记录，此单据由财务保存；
          </p>
        </p>
        <p className={styles.blackFont} style={{ lineHeight: '23px' }}>
          <span className={styles.font2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2</span>
          <span className={styles.songFont}>、付款性质一栏请注明是预付款、尾款或是其他。</span>
        </p>
      </div>
    </>
  );
};
const API_paymentInfoType: React.FC<paymentInfoType> = () => null;
export { API_paymentInfoType };

export default ApprovalPaymentTable;
