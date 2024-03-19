/* eslint-disable no-useless-escape */
import trim from 'lodash/trim';
import isNumber from 'lodash/isNumber';
import moment from 'moment';
import { Moment } from 'moment';
/**
 *  金额数字格式化
 *  例：420996010 -> 420,996,010
 * @export
 * @param {string | number} value
 * @returns
 */
export function moneyFormat(value: string | number) {
  const reg = /\B(?=(\d{3})+(?!\d))/g;
  return value
    ? isNumber(value)
      ? value.toString().replace(reg, ',')
      : value.replace(reg, ',')
    : '0';
}

/**
 *  金额数字格式化
 *  例：420996010 -> 420,996,010
 * @export
 * @param {string | number} val 金额
 * @param {string | number} num 保留位数
 * @returns
 */
export const decimalThousand = (val: number | string, num: number) => {
  if (!val) return '-';
  let str = val + '';
  str = parseFloat(str)
    .toFixed(num)
    .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  return val ? str : '0.00';
};

export function exportCsv(data: any[], fileName = 'result.csv') {
  // console.log('[excel data]', obj);
  // 列表头部
  // let title = obj.title;
  let itemWithMostKeys = {
    length: 0,
    index: 0,
  };
  data?.forEach((item, index) => {
    const length = Object.keys(item || {}).length;
    if (length > itemWithMostKeys.length) {
      itemWithMostKeys = { length, index };
    }
  });
  const dataKey = Object.keys(data[itemWithMostKeys.index]);

  let res = [];
  const keys = Object.keys(data?.[0] || {});
  // 拼接 enter 键或者换行符
  res.push(Object.values(data?.[0] || {}) + '\r\n');
  for (let i = 0; i < data.length; i++) {
    const temp = [];
    for (let j = 0; j < dataKey.length; j++) {
      if (keys.includes(dataKey[j])) {
        temp.push(data[i][dataKey[j]]);
      }
    }
    // 拼接 enter 键或者换行符
    res.push(temp.join(',') + '\r\n');
  }

  res = res.slice(1);

  const blob = new Blob(['\uFEFF' + res.join('')], {
    type: 'text/csv;charset=utf-8',
  });
  if (!fileName.endsWith('.csv')) {
    fileName = fileName + '.csv';
  }
  const url = window.URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = fileName;
  downloadLink.click();
  window.URL.revokeObjectURL(url);
}

export function parseParam(url: string) {
  const paramsObj: { [key: string]: any } = {};
  const isNumber = /^-?\d+(\.\d+)?$/; // 判断是否是数
  const search = /(.+)\?(.+)/.exec(url)?.[2]; // 问号分割字符串，获取查询参数部分
  const searchArr = search?.split('&');
  searchArr?.forEach((e) => {
    const keyAndVal = e.split('=');
    if (keyAndVal.length === 1) {
      paramsObj[keyAndVal[0]] = true;
    } else {
      let value: string | number = decodeURIComponent(keyAndVal[1]);
      value = isNumber.test(value) ? parseFloat(value) : value;
      // eslint-disable-next-line no-prototype-builtins
      if (paramsObj.hasOwnProperty(keyAndVal[0])) {
        if (Array.isArray(paramsObj[keyAndVal[0]])) {
          paramsObj[keyAndVal[0]] = [...paramsObj[keyAndVal[0]], value];
        } else {
          paramsObj[keyAndVal[0]] = [paramsObj[keyAndVal[0]], value];
        }
      } else {
        paramsObj[keyAndVal[0]] = value;
      }
    }
  });
  return paramsObj;
}

export function formatMoney(
  money: number,
  option?: {
    lang: 'cn' | 'en-us';
  },
) {
  const s = money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  switch (option?.lang) {
    case 'en-us':
      return `$${s}`;
    case 'cn':
      return `￥${s}`;
    default:
      return s;
  }
}
/**
 * @description 时间格式化
 */
export function momentToString(
  value: Moment | string,
  format = 'YYYY-MM-DD',
): string | undefined {
  return moment(value).isValid() ? moment(value).format(format) : undefined;
}

/**
 * @description Cookies操作
 */
export const docCookies = {
  getItem: function (sKey: string) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
              '\\s*\\=\\s*([^;]*).*$)|^.*$',
          ),
          '$1',
        ),
      ) || null
    );
  },
  setItem: function (
    sKey: string,
    sValue: any,
    sDomain: string,
    vEnd?: any,
    sPath?: any,
    bSecure?: any,
  ) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    let sExpires = '';
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity
              ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
              : '; max-age=' + vEnd;
          break;
        case String:
          sExpires = '; expires=' + vEnd;
          break;
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString();
          break;
        default:
          break;
      }
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=' +
      encodeURIComponent(sValue) +
      sExpires +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '') +
      (bSecure ? '; secure' : '');
    return true;
  },
  removeItem: function (sKey: string, sPath: string, sDomain: string) {
    if (!sKey || !docCookies.hasItem(sKey)) {
      return false;
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '');
    return true;
  },
  hasItem: function (sKey: string) {
    return new RegExp(
      '(?:^|;\\s*)' +
        encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
        '\\s*\\=',
    ).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    const aKeys = document.cookie
      // eslint-disable-next-line no-useless-backreference
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:\=[^;]*)?;\s*/);
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  },
};

/**
 * @description 数值单位格式化
 */
export const numberFormat = (value: number, fix = 2) => {
  // if
  if (!value) {
    return '0';
  }
  const param = { value: 0, unit: '' };
  const k = 10000;
  const sizes = ['', '万', '亿', '万亿'];

  if (value < k) {
    param.value = value;
    param.unit = '';
  } else {
    const i = Math.floor(Math.log(value) / Math.log(k));
    return (value / k ** i).toFixed(fix) + sizes[i];
  }
  return param.value + param.unit;
};
/**
 * @description 数字转中文数码
 *
 * @param {Number|String}   num     数字[正整数]
 * @param {String}          type    文本类型，lower|upper，默认upper
 *
 * @example number2text(100000000) => "壹亿元整"
 */

export const number2cnText = (
  number: number | string,
  type: 'lower' | 'upper' = 'upper',
) => {
  // 配置
  const confs = {
    lower: {
      num: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
      unit: ['', '十', '百', '千', '万'],
      level: ['', '万', '亿'],
    },
    upper: {
      num: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
      unit: ['', '拾', '佰', '仟'],
      level: ['', '万', '亿'],
    },
    decimal: {
      unit: ['分', '角'],
    },
    maxNumber: 999999999999.99,
  };

  // 过滤不合法参数
  if (Number(number) > confs.maxNumber) {
    console.error(
      `The maxNumber is ${confs.maxNumber}. ${number} is bigger than it!`,
    );
    return '数值过大';
  }

  const conf = confs[type];
  const numbers = String(Number(number).toFixed(2)).split('.');
  const integer = numbers[0].split('');
  const decimal = Number(numbers[1]) === 0 ? [] : numbers[1]?.split?.('');

  // 四位分级
  const levels = integer
    .reverse()
    .reduce((pre: string[][], item: any, idx: number) => {
      const level = pre[0] && pre[0].length < 4 ? pre[0] : [];
      const value =
        item === '0' ? conf.num[item] : conf.num[item] + conf.unit[idx % 4];
      level.unshift(value);

      if (level.length === 1) {
        pre.unshift(level);
      } else {
        pre[0] = level;
      }

      return pre;
    }, []);

  // 整数部分
  const _integer = levels.reduce((pre, item, idx) => {
    let _level = conf.level[levels.length - idx - 1];
    let _item = item.join('').replace(/(零)\1+/g, '$1'); // 连续多个零字的部分设置为单个零字

    // 如果这一级只有一个零字，则去掉这级
    if (_item === '零') {
      _item = '';
      _level = '';

      // 否则如果末尾为零字，则去掉这个零字
    } else if (_item[_item.length - 1] === '零') {
      _item = _item.slice(0, _item.length - 1);
    }

    return pre + _item + _level;
  }, '');

  // 小数部分
  const _decimal = decimal
    ?.map?.((item: any, idx) => {
      const unit = confs.decimal.unit;
      const _unit = item !== '0' ? unit[unit.length - idx - 1] : '';

      return `${conf.num[item]}${_unit}`;
    })
    .join('');

  // 如果是整数，则补个整字
  return `${_integer}元` + (_decimal || '整');
};

/**
 * @description: 按照逗号字符串顺序获取 obj 内属性
 * @param {string} keyNames
 * @param {any} res
 * @return {*}
 * @author: Bert
 */
export const getResKey = (keyNames: string, res: any) => {
  if (keyNames === '') return res;
  const keyNameList = keyNames.split(',').map((item) => trim(item));
  return keyNameList.reduce((pre: any, curr: string) => pre?.[curr], res);
};

// 兼容 MFSU
// 参考 issue：https://github.com/umijs/umi/issues/6922
export default {
  number2cnText,
  numberFormat,
  docCookies,
  momentToString,
  formatMoney,
  parseParam,
  exportCsv,
  decimalThousand,
  moneyFormat,
  getResKey,
};
