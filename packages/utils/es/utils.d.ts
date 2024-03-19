import { Moment } from 'moment';
/**
 *  金额数字格式化
 *  例：420996010 -> 420,996,010
 * @export
 * @param {string | number} value
 * @returns
 */
export declare function moneyFormat(value: string | number): string;
/**
 *  金额数字格式化
 *  例：420996010 -> 420,996,010
 * @export
 * @param {string | number} val 金额
 * @param {string | number} num 保留位数
 * @returns
 */
export declare const decimalThousand: (
  val: number | string,
  num: number,
) => string;
export declare function exportCsv(data: any[], fileName?: string): void;
export declare function parseParam(url: string): {
  [key: string]: any;
};
export declare function formatMoney(
  money: number,
  option?: {
    lang: 'cn' | 'en-us';
  },
): string;
/**
 * @description 时间格式化
 */
export declare function momentToString(
  value: Moment | string,
  format?: string,
): string | undefined;
/**
 * @description Cookies操作
 */
export declare const docCookies: {
  getItem: (sKey: string) => string | null;
  setItem: (
    sKey: string,
    sValue: any,
    sDomain: string,
    vEnd?: any,
    sPath?: any,
    bSecure?: any,
  ) => boolean;
  removeItem: (sKey: string, sPath: string, sDomain: string) => boolean;
  hasItem: (sKey: string) => boolean;
  keys: () => string[];
};
/**
 * @description 数值单位格式化
 */
export declare const numberFormat: (value: number, fix?: number) => string;
/**
 * @description 数字转中文数码
 *
 * @param {Number|String}   num     数字[正整数]
 * @param {String}          type    文本类型，lower|upper，默认upper
 *
 * @example number2text(100000000) => "壹亿元整"
 */
export declare const number2cnText: (
  number: number | string,
  type?: 'lower' | 'upper',
) => string;
/**
 * @description: 按照逗号字符串顺序获取 obj 内属性
 * @param {string} keyNames
 * @param {any} res
 * @return {*}
 * @author: Bert
 */
export declare const getResKey: (keyNames: string, res: any) => any;
declare const _default: {
  number2cnText: (number: string | number, type?: 'lower' | 'upper') => string;
  numberFormat: (value: number, fix?: number) => string;
  docCookies: {
    getItem: (sKey: string) => string | null;
    setItem: (
      sKey: string,
      sValue: any,
      sDomain: string,
      vEnd?: any,
      sPath?: any,
      bSecure?: any,
    ) => boolean;
    removeItem: (sKey: string, sPath: string, sDomain: string) => boolean;
    hasItem: (sKey: string) => boolean;
    keys: () => string[];
  };
  momentToString: typeof momentToString;
  formatMoney: typeof formatMoney;
  parseParam: typeof parseParam;
  exportCsv: typeof exportCsv;
  decimalThousand: (val: string | number, num: number) => string;
  moneyFormat: typeof moneyFormat;
  getResKey: (keyNames: string, res: any) => any;
};
export default _default;
