/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-03-02 17:19:26
 * @LastEditors: michael_jier
 * @LastEditTime: 2022-03-07 17:04:11
 */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
// @ts-nocheck

import {
  moneyFormat,
  decimalThousand,
  formatMoney,
  momentToString,
  parseParam,
  exportCsv,
  numberFormat,
} from '../utils';
import moment from 'moment';

let originalLog: any;
let originalWarn: any;
let originalError: any;
let originalCreateObjectURL: any;
let originalRevokeObjectURL: any;

beforeAll(() => {
  // 可以换成 beforeEach
  // 保留原 console 函数引用
  originalLog = global.console.log;
  originalWarn = global.console.warn;
  originalError = global.console.error;
  originalCreateObjectURL = global.URL.createObjectURL;
  originalRevokeObjectURL = global.URL.revokeObjectURL;

  global.console.log = jest.fn();
  global.console.warn = jest.fn();
  global.console.error = jest.fn();
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
});

afterAll(() => {
  // 可以换成 afterEach
  // 恢复原 console 函数引用
  global.console.log = originalLog;
  global.console.warn = originalWarn;
  global.console.error = originalError;
  global.URL.createObjectURL = originalCreateObjectURL;
  global.URL.revokeObjectURL = originalRevokeObjectURL;
});

describe('utils moneyFormat', () => {
  it('字符串转换 ', () => {
    expect(moneyFormat('100000000')).toBe('100,000,000');
  });
  it('number 转换', () => {
    expect(moneyFormat(100000000)).toBe('100,000,000');
  });
  it('数字 0转换', () => {
    expect(moneyFormat(0)).toBe('0');
  });
});

describe('utils decimalThousand', () => {
  it('测试保留位数', () => {
    expect(decimalThousand('0.0101', 2)).toBe('0.01');
  });
  it('测试分隔符', () => {
    expect(decimalThousand('10000000', 2)).toBe('10,000,000.00');
  });
  // 逆向
  test('returns original value without options', () => {
    expect(decimalThousand(123)).toBe('123');
    expect(decimalThousand(123.45)).toBe('123');
  });

  test('returns formatted value with num option', () => {
    expect(decimalThousand(123, 0)).toBe('123');
    expect(decimalThousand(123, 1)).toBe('123.0');
    expect(decimalThousand(123, 2)).toBe('123.00');
    expect(decimalThousand(123.45, 1)).toBe('123.5');
    expect(decimalThousand(123.45, 2)).toBe('123.45');
    expect(decimalThousand(9999.99, 0)).toBe('10,000');
  });
});

describe('utils exportCsv', () => {
  it('测试下载文件', () => {
    // https://github.com/mrdulin/jest-codelab/blob/master/src/stackoverflow/58445250/index.spec.ts
    const mLink = {
      href: '',
      click: jest.fn(),
      download: '',
    } as any;
    const createElementSpy = jest
      .spyOn(document, 'createElement')
      .mockReturnValueOnce(mLink);
    global.URL.createObjectURL = () => (mLink.href = 'a mock url');
    exportCsv(['https://test.csv'], 'test');
    expect(createElementSpy).toBeCalledWith('a');
    expect(mLink.download).toBe('test.csv');
    expect(mLink.href).not.toBeUndefined();
    expect(mLink.click).toBeCalled();
  });
});

describe('utils parseParam', () => {
  it('测试数字和字符串 url', () => {
    expect(parseParam('test?a=1&b=ok')).toEqual({
      a: 1,
      b: 'ok',
    });
  });
});

describe('utils formatMoney', () => {
  it('测试人民币转换', () => {
    expect(formatMoney(1.123123, { lang: 'cn' })).toBe('￥1.12');
  });
  it('测试美元转换', () => {
    expect(formatMoney(1.123123, { lang: 'en-us' })).toBe('$1.12');
  });
  it('测试普通保留(不四舍五入)', () => {
    expect(formatMoney(1.123123)).toBe('1.12');
  });
  // 逆向
  test('returns original value without options', () => {
    expect(formatMoney(123)).toBe('123.00');
    expect(formatMoney(123.45)).toBe('123.45');
    expect(formatMoney(9999.99)).toBe('9,999.99');
  });

  test('returns formatted money with lang options', () => {
    expect(formatMoney(123, { lang: 'en-us' })).toBe('$123.00');
    expect(formatMoney(123.45, { lang: 'en-us' })).toBe('$123.45');
    expect(formatMoney(9999.99, { lang: 'en-us' })).toBe('$9,999.99');
    expect(formatMoney(123, { lang: 'cn' })).toBe('￥123.00');
    expect(formatMoney(123.45, { lang: 'cn' })).toBe('￥123.45');
    expect(formatMoney(9999.99, { lang: 'cn' })).toBe('￥9,999.99');
  });
});

describe('utils momentToString', () => {
  it('测试moment转格式化字符串默认格式', () => {
    expect(momentToString(moment('2022-02-22'))).toBe('2022-02-22');
  });
  it('测试moment转格式化字符串时分秒', () => {
    expect(
      momentToString(moment('2022-02-22 22:22:22'), 'YYYY-MM-DD HH:mm:ss'),
    ).toBe('2022-02-22 22:22:22');
  });
  it('测试非法字符串转换', () => {
    expect(momentToString('test')).toBeUndefined();
  });
  // 逆向
  test('returns null for undefined output', () => {
    expect(momentToString(null)).toBe(undefined);
  });

  test('returns original value for valid output', () => {
    const date = new Date();
    expect(momentToString(moment(date))).toBe(
      date.toISOString().substring(0, 10),
    );
    expect(momentToString(moment(date), 'YYYY-MM-DD')).toBe(
      date.toISOString().substring(0, 10),
    );
  });
});

//describe相当于一个测试组
describe('utils numberFormat', () => {
  it('测试数值单位格式化为万', () => {
    expect(numberFormat(91234)).toBe('9.12万');
  });
  it('测试数值单位格式化为亿', () => {
    expect(numberFormat(912345678)).toBe('9.12亿');
  });
  it('测试数值单位格式化为万亿', () => {
    expect(numberFormat(9123456781234)).toBe('9.12万亿');
  });
  // 逆向
  test('returns null for 0', () => {
    expect(numberFormat(0)).toBe('0');
  });
  test('returns original value for values < 10000', () => {
    expect(numberFormat(123, 0)).toBe('123');
    expect(numberFormat(123.45, 1)).toBe('123.45');
    expect(numberFormat(9999.99, 2)).toBe('9999.99');
  });
  test('returns null for invalid input', () => {
    expect(numberFormat(null)).toBe('0');
    expect(numberFormat(NaN)).toBe('0');
    expect(numberFormat(true)).toBe('true');
    expect(numberFormat({})).toBe('NaNundefined');
    expect(numberFormat([])).toBe('');
  });
});
