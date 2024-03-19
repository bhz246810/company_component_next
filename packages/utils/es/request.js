function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
import 'antd/es/notification/style';
import _notification from 'antd/es/notification';
import 'antd/es/message/style';
import _message from 'antd/es/message';
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import get from 'lodash/get';
import getGlobalVariable from './getGlobalVariable';
_message.config({
  maxCount: 1,
});
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
var errorHandle = function errorHandle(response) {
  var data = response.data;
  console.log('[response]', response);
  var showErrorNotice = true;
  // 外部在catch回调中调用err.hideErrorNotice去除拦截器统一错误信息显示
  var hideErrorNotice = function hideErrorNotice() {
    showErrorNotice = false;
  };
  setTimeout(function () {
    if (showErrorNotice) {
      if (data === null || data === void 0 ? void 0 : data.m) {
        _message.error({
          content: data === null || data === void 0 ? void 0 : data.m,
        });
      } else if (response) {
        console.log('[response]', response);
      } else {
        _message.error({
          content: '接口错误',
        });
      }
    }
  });
  return _objectSpread(
    _objectSpread({}, response),
    {},
    {
      hideErrorNotice: hideErrorNotice,
    },
  );
};
// 创建axios实例
var instance = axios.create({
  // NOTE: 区分线上/线下接口地址
  // baseURL: getGlobalVariable().API_CONFIG_BASE_API,
  withCredentials: true,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
});
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  function (config) {
    // console.log('[请求拦截器]', config);
    if (
      !/^(http:\/\/|https:\/\/|\/\/)([\w.]+\/?)\S*/.test(config.url) &&
      !config.baseURL
    ) {
      var _getGlobalVariable$AP;
      // 删除多余的`/`
      ((_getGlobalVariable$AP = getGlobalVariable().API_CONFIG_BASE_API) ===
        null || _getGlobalVariable$AP === void 0
        ? void 0
        : _getGlobalVariable$AP.slice(-1)) === '/' &&
        config.url.slice(0, 1) === '/' &&
        (config.url = config.url.slice(1));
      config.url = getGlobalVariable().API_CONFIG_BASE_API + config.url;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  function (res) {
    // console.log('[请求响应]', res);
    if (res.status >= 200 && res.status < 300) {
      // console.log('[test]', res.status);
      if (
        get(res.headers, ['content-type'], '') !== 'application/vnd.ms-excel'
      ) {
        var _res$data;
        if (
          ((_res$data = res.data) === null || _res$data === void 0
            ? void 0
            : _res$data.f) !== 1
        ) {
          return Promise.reject(res).catch(function (err) {
            console.log('【reject】', err);
            return Promise.reject(errorHandle(err));
          });
        }
      } else {
        // data就是接口返回的文件流
        var data = res.data;
        if (data) {
          var _res$headers$content,
            _attrs$find,
            _res$headers$content2,
            _res$headers$content3;
          var fileName; // 默认 cors 暴露出 content-disposition 请求头，后端返回的filename中文乱码
          var attrs =
            (_res$headers$content = res.headers['content-disposition']) ===
              null || _res$headers$content === void 0
              ? void 0
              : _res$headers$content.split(';'); // 获取文件名
          fileName =
            attrs === null || attrs === void 0
              ? void 0
              : (_attrs$find = attrs.find(function (i) {
                  return i.includes('filename');
                })) === null || _attrs$find === void 0
              ? void 0
              : _attrs$find.replace('filename=', '');
          console.log('[fileName]', fileName);
          if (!fileName) fileName = '导出表格.csv';
          // 获取数据类型
          var type =
            (_res$headers$content2 = res.headers['content-type']) === null ||
            _res$headers$content2 === void 0
              ? void 0
              : (_res$headers$content3 = _res$headers$content2.split(';')) ===
                  null || _res$headers$content3 === void 0
              ? void 0
              : _res$headers$content3[0];
          var blob = new Blob([data], {
            type: type,
          });
          var a = document.createElement('a');
          // 创建URL
          var blobUrl = window.URL.createObjectURL(blob);
          a.download = fileName;
          a.href = blobUrl;
          document.body.appendChild(a);
          // 下载文件
          a.click();
          // 释放内存
          URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }
      }
      return Promise.resolve(res);
    } else if (res.status === 403) {
      _notification.error({
        key: 'message 403',
        message:
          '您暂无该操作权限，如有需要，请联系相关负责人员，如有疑问请联系产品工作人员',
      });
    } else {
      return Promise.reject(res);
    }
    // return res.status >= 200 && res.status < 300 ? Promise.resolve(res) : Promise.reject(res);
  },
  // 请求失败
  function (error) {
    var response = error.response;
    // console.log('error', response);
    if (response) {
      var status = response.status;
      if (status === 401) {
        var _getGlobalVariable, _response$headers;
        if (
          (_getGlobalVariable = getGlobalVariable()) === null ||
          _getGlobalVariable === void 0
            ? void 0
            : _getGlobalVariable.API_CONFIG_LOGIN_URL
        ) {
          window.location.replace(
            getGlobalVariable().API_CONFIG_LOGIN_URL || '/login',
          );
          return;
        }
        //登录态过期
        if (
          response === null || response === void 0
            ? void 0
            : (_response$headers = response.headers) === null ||
              _response$headers === void 0
            ? void 0
            : _response$headers.location
        ) {
          var _response$headers2;
          window.location.replace(
            response === null || response === void 0
              ? void 0
              : (_response$headers2 = response.headers) === null ||
                _response$headers2 === void 0
              ? void 0
              : _response$headers2.location,
          );
        }
      }
      var responseWithHideError = errorHandle(response);
      return Promise.reject(responseWithHideError);
    } else {
      console.log('[处理断网的情况]');
      return;
    }
  },
);
export default instance;
