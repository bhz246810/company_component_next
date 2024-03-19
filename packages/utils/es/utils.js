function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/* eslint-disable no-useless-escape */
import trim from 'lodash/trim';
import isNumber from 'lodash/isNumber';
import moment from 'moment';
/**
 *  金额数字格式化
 *  例：420996010 -> 420,996,010
 * @export
 * @param {string | number} value
 * @returns
 */
export function moneyFormat(value) {
  var reg = /\B(?=(\d{3})+(?!\d))/g;
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
export var decimalThousand = function decimalThousand(val, num) {
  if (!val) return '-';
  var str = val + '';
  str = parseFloat(str)
    .toFixed(num)
    .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  return val ? str : '0.00';
};
export function exportCsv(data) {
  var fileName =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'result.csv';
  // console.log('[excel data]', obj);
  // 列表头部
  // let title = obj.title;
  var itemWithMostKeys = {
    length: 0,
    index: 0,
  };
  data === null || data === void 0
    ? void 0
    : data.forEach(function (item, index) {
        var length = Object.keys(item || {}).length;
        if (length > itemWithMostKeys.length) {
          itemWithMostKeys = {
            length: length,
            index: index,
          };
        }
      });
  var dataKey = Object.keys(data[itemWithMostKeys.index]);
  var res = [];
  var keys = Object.keys(
    (data === null || data === void 0 ? void 0 : data[0]) || {},
  );
  // 拼接 enter 键或者换行符
  res.push(
    Object.values((data === null || data === void 0 ? void 0 : data[0]) || {}) +
      '\r\n',
  );
  for (var i = 0; i < data.length; i++) {
    var temp = [];
    for (var j = 0; j < dataKey.length; j++) {
      if (keys.includes(dataKey[j])) {
        temp.push(data[i][dataKey[j]]);
      }
    }
    // 拼接 enter 键或者换行符
    res.push(temp.join(',') + '\r\n');
  }
  res = res.slice(1);
  var blob = new Blob(['\uFEFF' + res.join('')], {
    type: 'text/csv;charset=utf-8',
  });
  if (!fileName.endsWith('.csv')) {
    fileName = fileName + '.csv';
  }
  var url = window.URL.createObjectURL(blob);
  var downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = fileName;
  downloadLink.click();
  window.URL.revokeObjectURL(url);
}
export function parseParam(url) {
  var _exec;
  var paramsObj = {};
  var isNumber = /^-?\d+(\.\d+)?$/; // 判断是否是数
  var search =
    (_exec = /(.+)\?(.+)/.exec(url)) === null || _exec === void 0
      ? void 0
      : _exec[2]; // 问号分割字符串，获取查询参数部分
  var searchArr =
    search === null || search === void 0 ? void 0 : search.split('&');
  searchArr === null || searchArr === void 0
    ? void 0
    : searchArr.forEach(function (e) {
        var keyAndVal = e.split('=');
        if (keyAndVal.length === 1) {
          paramsObj[keyAndVal[0]] = true;
        } else {
          var value = decodeURIComponent(keyAndVal[1]);
          value = isNumber.test(value) ? parseFloat(value) : value;
          // eslint-disable-next-line no-prototype-builtins
          if (paramsObj.hasOwnProperty(keyAndVal[0])) {
            if (Array.isArray(paramsObj[keyAndVal[0]])) {
              paramsObj[keyAndVal[0]] = [].concat(
                _toConsumableArray(paramsObj[keyAndVal[0]]),
                [value],
              );
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
export function formatMoney(money, option) {
  var s = money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  switch (option === null || option === void 0 ? void 0 : option.lang) {
    case 'en-us':
      return '$'.concat(s);
    case 'cn':
      return '\uFFE5'.concat(s);
    default:
      return s;
  }
}
/**
 * @description 时间格式化
 */
export function momentToString(value) {
  var format =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD';
  return moment(value).isValid() ? moment(value).format(format) : undefined;
}
/**
 * @description Cookies操作
 */
export var docCookies = {
  getItem: function getItem(sKey) {
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
  setItem: function setItem(sKey, sValue, sDomain, vEnd, sPath, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = '';
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
  removeItem: function removeItem(sKey, sPath, sDomain) {
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
  hasItem: function hasItem(sKey) {
    return new RegExp(
      '(?:^|;\\s*)' +
        encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
        '\\s*\\=',
    ).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function keys() {
    var aKeys = document.cookie
      // eslint-disable-next-line no-useless-backreference
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  },
};
/**
 * @description 数值单位格式化
 */
export var numberFormat = function numberFormat(value) {
  var fix =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  // if
  if (!value) {
    return '0';
  }
  var param = {
    value: 0,
    unit: '',
  };
  var k = 10000;
  var sizes = ['', '万', '亿', '万亿'];
  if (value < k) {
    param.value = value;
    param.unit = '';
  } else {
    var i = Math.floor(Math.log(value) / Math.log(k));
    return (value / Math.pow(k, i)).toFixed(fix) + sizes[i];
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
export var number2cnText = function number2cnText(number) {
  var _numbers$, _numbers$$split, _decimal$map;
  var type =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'upper';
  // 配置
  var confs = {
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
      'The maxNumber is '
        .concat(confs.maxNumber, '. ')
        .concat(number, ' is bigger than it!'),
    );
    return '数值过大';
  }
  var conf = confs[type];
  var numbers = String(Number(number).toFixed(2)).split('.');
  var integer = numbers[0].split('');
  var decimal =
    Number(numbers[1]) === 0
      ? []
      : (_numbers$ = numbers[1]) === null || _numbers$ === void 0
      ? void 0
      : (_numbers$$split = _numbers$.split) === null ||
        _numbers$$split === void 0
      ? void 0
      : _numbers$$split.call(_numbers$, '');
  // 四位分级
  var levels = integer.reverse().reduce(function (pre, item, idx) {
    var level = pre[0] && pre[0].length < 4 ? pre[0] : [];
    var value =
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
  var _integer = levels.reduce(function (pre, item, idx) {
    var _level = conf.level[levels.length - idx - 1];
    var _item = item.join('').replace(/(零)\1+/g, '$1'); // 连续多个零字的部分设置为单个零字
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
  var _decimal =
    decimal === null || decimal === void 0
      ? void 0
      : (_decimal$map = decimal.map) === null || _decimal$map === void 0
      ? void 0
      : _decimal$map
          .call(decimal, function (item, idx) {
            var unit = confs.decimal.unit;
            var _unit = item !== '0' ? unit[unit.length - idx - 1] : '';
            return ''.concat(conf.num[item]).concat(_unit);
          })
          .join('');
  // 如果是整数，则补个整字
  return ''.concat(_integer, '\u5143') + (_decimal || '整');
};
/**
 * @description: 按照逗号字符串顺序获取 obj 内属性
 * @param {string} keyNames
 * @param {any} res
 * @return {*}
 * @author: Bert
 */
export var getResKey = function getResKey(keyNames, res) {
  if (keyNames === '') return res;
  var keyNameList = keyNames.split(',').map(function (item) {
    return trim(item);
  });
  return keyNameList.reduce(function (pre, curr) {
    return pre === null || pre === void 0 ? void 0 : pre[curr];
  }, res);
};
// 兼容 MFSU
// 参考 issue：https://github.com/umijs/umi/issues/6922
export default {
  number2cnText: number2cnText,
  numberFormat: numberFormat,
  docCookies: docCookies,
  momentToString: momentToString,
  formatMoney: formatMoney,
  parseParam: parseParam,
  exportCsv: exportCsv,
  decimalThousand: decimalThousand,
  moneyFormat: moneyFormat,
  getResKey: getResKey,
};
