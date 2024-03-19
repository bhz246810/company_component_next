'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/es/notification/style');
var _notification = require('antd/es/notification');
require('antd/es/message/style');
var _message = require('antd/es/message');
var debounce = require('lodash/debounce');
var umiExports = require('@@/core/umiExports');
var React = require('react');
var umiRequest = require('umi-request');
var trim = require('lodash/trim');
var isNumber = require('lodash/isNumber');
var moment = require('moment');
var axios = require('axios');
var get = require('lodash/get');
require('antd/es/modal/style');
var _Modal = require('antd/es/modal');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var _notification__default = /*#__PURE__*/ _interopDefaultLegacy(_notification);
var _message__default = /*#__PURE__*/ _interopDefaultLegacy(_message);
var debounce__default = /*#__PURE__*/ _interopDefaultLegacy(debounce);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var trim__default = /*#__PURE__*/ _interopDefaultLegacy(trim);
var isNumber__default = /*#__PURE__*/ _interopDefaultLegacy(isNumber);
var moment__default = /*#__PURE__*/ _interopDefaultLegacy(moment);
var axios__default = /*#__PURE__*/ _interopDefaultLegacy(axios);
var get__default = /*#__PURE__*/ _interopDefaultLegacy(get);
var _Modal__default = /*#__PURE__*/ _interopDefaultLegacy(_Modal);

function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
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
function _objectSpread2(e) {
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
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = 'function' == typeof Symbol ? Symbol : {},
    a = i.iterator || '@@iterator',
    c = i.asyncIterator || '@@asyncIterator',
    u = i.toStringTag || '@@toStringTag';
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, '');
  } catch (t) {
    define = function (t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return (
      o(a, '_invoke', {
        value: makeInvokeMethod(t, r, c),
      }),
      a
    );
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: 'normal',
        arg: t.call(e, r),
      };
    } catch (t) {
      return {
        type: 'throw',
        arg: t,
      };
    }
  }
  e.wrap = wrap;
  var h = 'suspendedStart',
    l = 'suspendedYield',
    f = 'executing',
    s = 'completed',
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ('throw' !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && 'object' == typeof h && n.call(h, '__await')
          ? e.resolve(h.__await).then(
              function (t) {
                invoke('next', t, i, a);
              },
              function (t) {
                invoke('throw', t, i, a);
              },
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke('throw', t, i, a);
              },
            );
      }
      a(c.arg);
    }
    var r;
    o(this, '_invoke', {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error('Generator is already running');
      if (o === s) {
        if ('throw' === i) throw a;
        return {
          value: t,
          done: !0,
        };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ('next' === n.method) n.sent = n._sent = n.arg;
        else if ('throw' === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else 'return' === n.method && n.abrupt('return', n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ('normal' === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return {
            value: p.arg,
            done: n.done,
          };
        }
        'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ('throw' === n &&
          e.iterator.return &&
          ((r.method = 'return'),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          'throw' === r.method)) ||
          ('return' !== n &&
            ((r.method = 'throw'),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method",
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ('throw' === i.type)
      return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0],
    };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [
      {
        tryLoc: 'root',
      },
    ]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || '' === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ('function' == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(typeof e + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, 'constructor', {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, 'constructor', {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      'GeneratorFunction',
    )),
    (e.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          'GeneratorFunction' === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return {
        __await: t,
      };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, 'Generator'),
    define(g, a, function () {
      return this;
    }),
    define(g, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            't' === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = 'throw'),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = 'next'), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ('root' === i.tryLoc) return handle('end');
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, 'catchLoc'),
              u = n.call(i, 'finallyLoc');
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error('try statement without catch or finally');
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, 'finallyLoc') &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function (t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === t.type && e && (this.next = e),
          y
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ('throw' === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (e, r, n) {
        return (
          (this.delegate = {
            iterator: values(e),
            resultName: r,
            nextLoc: n,
          }),
          'next' === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function _toPrimitive(t, r) {
  if ('object' != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != typeof i) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == typeof i ? i : String(i);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', {
    writable: false,
  });
  return Constructor;
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

var SingleEnv = /*#__PURE__*/ (function () {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function SingleEnv() {
    _classCallCheck(this, SingleEnv);
  }
  _createClass(SingleEnv, null, [
    {
      key: 'set',
      value: function set() {
        if (!this._instance) {
          this._instance = {
            API_CONFIG_ENV: 'dev',
            API_CONFIG_BASE_API: '//bert-api.sk8s.cn/API_CONFIG_BASE_API/',
            API_CONFIG_CPS_API_URL: '//bert-api.sk8s.cn/API_CONFIG_CPS_API_URL',
            BUSINESS_API_REQUESET: process.env.BUSINESS_API_REQUESET,
            API_CONFIG_BIG_DATA_URL: '//data.sk8s.cn',
            API_CONFIG_SHAOMAI_API: process.env.API_CONFIG_SHAOMAI_API,
            API_CONFIG_CONTRACT_URL: '//contract.sk8s.cn/',
            API_CONFIG_PUBLIC_URL: '//component.sk8s.cn/',
          };
        }
        return this._instance;
      },
    },
  ]);
  return SingleEnv;
})();
SingleEnv._instance = null;
var getGlobalVariable = function () {
  return SingleEnv.set();
};

var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有进行认证（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
var debouncedHandler = debounce__default['default'](
  function (response, request) {
    var errortext = codeMessage[response.status] || response.statusText;
    var status = response.status,
      url = response.url;
    if (url.includes('/gmv-report/index')) {
      if (status === 401) {
        //登录态过期
        var location = response.headers.get('location');
        // 进行跳转
        if (location) window.location.replace(location);
      }
    } else {
      if (status === 401) {
        //登录态过期
        var _location = response.headers.get('location');
        // 进行跳转
        if (_location) window.location.replace(_location);
      } else if (
        status >= 500 &&
        url.includes('/data.goods.mall.searchService/query')
      ) {
        _message__default['default'].error(
          '该网址暂未收录，请联系Alan/Marico收录',
        );
      } else if (status === 403) {
        _notification__default['default'].error({
          message:
            '您暂无该操作权限，如有需要，请联系相关负责人员，如有疑问请联系产品工作人员',
        });
      } else {
        var _request$options, _request$options$data;
        if (
          !((_request$options = request.options) === null ||
          _request$options === void 0
            ? void 0
            : (_request$options$data = _request$options.data) === null ||
              _request$options$data === void 0
            ? void 0
            : _request$options$data.notification)
        ) {
          _notification__default['default'].error({
            message: ' '.concat(status, ': ').concat(url),
            description: errortext,
          });
        }
        return response;
      }
    }
  },
  500,
  {
    maxWait: 1000,
  },
);
/**
 * 异常处理程序
 */
var errorHandler = function errorHandler(error) {
  var response = error.response,
    request = error.request;
  if (response && response.status) {
    debouncedHandler(response, request);
  }
  return response.json();
};
var requestInterceptors = function requestInterceptors(request, variable) {
  var _request$interceptors, _request$interceptors2, _request$interceptors3;
  request === null || request === void 0
    ? void 0
    : (_request$interceptors = request.interceptors) === null ||
      _request$interceptors === void 0
    ? void 0
    : (_request$interceptors2 = _request$interceptors.request) === null ||
      _request$interceptors2 === void 0
    ? void 0
    : (_request$interceptors3 = _request$interceptors2.use) === null ||
      _request$interceptors3 === void 0
    ? void 0
    : _request$interceptors3.call(
        _request$interceptors2,
        function (url, options) {
          if (
            !/^(http:\/\/|https:\/\/|\/\/)([\w.]+\/?)\S*/.test(options.url) &&
            !options.prefix
          ) {
            options.url = getGlobalVariable()[variable] + options.url;
            url = getGlobalVariable()[variable] + url;
          }
          return {
            url: url,
            options: options,
          };
        },
      );
};
var handleRequest = function handleRequest(request, key) {
  request.use(
    /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(ctx, next) {
          var _options$data;
          var req,
            url,
            options,
            hideMessageError,
            objData,
            formData,
            formatData,
            _key,
            _options$data$_key,
            _options$data$_key2,
            _options$data2,
            res;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch ((_context.prev = _context.next)) {
                case 0:
                  req = ctx.req;
                  (url = req.url), (options = req.options);
                  hideMessageError = false; //如果接受的参数已经转成formdata,则转json对象格式判断有无hideMessageError
                  console.log(
                    'options?.data instanceof FormData',
                    (options === null || options === void 0
                      ? void 0
                      : options.data) instanceof FormData,
                  );
                  if (
                    (options === null || options === void 0
                      ? void 0
                      : options.data) instanceof FormData
                  ) {
                    objData = {};
                    options === null || options === void 0
                      ? void 0
                      : options.data.forEach(function (v, k) {
                          objData[k] = v;
                        });
                    formData = JSON.parse(JSON.stringify(objData));
                    if (formData.hideMessageError) {
                      hideMessageError = formData.hideMessageError;
                    }
                  }
                  if (key === 'fin') {
                    formatData = {};
                    for (_key in options === null || options === void 0
                      ? void 0
                      : options.data) {
                      //排除手动设置为空字符串的情况，给后端一个明确的修改指示
                      if (
                        typeof (options === null || options === void 0
                          ? void 0
                          : options.data[_key]) === 'string' &&
                        (options === null || options === void 0
                          ? void 0
                          : options.data[_key]) !== ''
                      ) {
                        (options === null || options === void 0
                          ? void 0
                          : (_options$data$_key = options.data[_key]) ===
                              null || _options$data$_key === void 0
                          ? void 0
                          : _options$data$_key.trim()) !== '' &&
                          (formatData[_key] =
                            options === null || options === void 0
                              ? void 0
                              : (_options$data$_key2 = options.data[_key]) ===
                                  null || _options$data$_key2 === void 0
                              ? void 0
                              : _options$data$_key2.trim());
                      } else {
                        formatData[_key] =
                          options === null || options === void 0
                            ? void 0
                            : options.data[_key];
                      }
                    }
                    options.data = formatData;
                  }
                  if (
                    options === null || options === void 0
                      ? void 0
                      : (_options$data = options.data) === null ||
                        _options$data === void 0
                      ? void 0
                      : _options$data.hideMessageError
                  ) {
                    hideMessageError =
                      options === null || options === void 0
                        ? void 0
                        : (_options$data2 = options.data) === null ||
                          _options$data2 === void 0
                        ? void 0
                        : _options$data2.hideMessageError;
                    delete options.data.hideMessageError;
                  }
                  // add prefix
                  ctx.req.url = ''.concat(url);
                  ctx.req.options = _objectSpread2({}, options);
                  _context.next = 11;
                  return next();
                case 11:
                  res = ctx.res;
                  if (!(res.f <= 0)) {
                    _context.next = 16;
                    break;
                  }
                  if (res.f === -100) {
                    _notification__default['default'].error({
                      message: '当前用户还未做关联，暂无权限访问该应用',
                      description: res.m,
                    });
                    process.env.NODE_ENV === 'development' ||
                    process.env.API_ENV === 'dev'
                      ? umiExports.history.push('/login/login')
                      : umiExports.history.push('/exception/403');
                  } else {
                    // 错误，全局提示
                    !hideMessageError &&
                      _message__default['default'].error(res.m);
                  }
                  _context.next = 17;
                  break;
                case 16:
                  return _context.abrupt('return', res);
                case 17:
                case 'end':
                  return _context.stop();
              }
          }, _callee);
        }),
      );
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })(),
  );
};
/**
 * 配置request请求时的默认参数
 * 营销后台 base_url 请求方法
 */
var request = umiRequest.extend({
  prefix: process.env.XXX_API_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
handleRequest(request);
/**
 * 配置财务request请求时的默认参数
 * 配合修改请求时将传参的空字符串进行去除操作
 */
var finRequest = umiRequest.extend({
  prefix: process.env.XXX_API_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
handleRequest(finRequest, 'fin');
/**
 * 没有前缀 接口请求
 *
 *
 */
var noPrefixReq = umiRequest.extend({
  prefix: process.env.BASE_API_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
/**
 * 大数据接口请求
 * 传参数据格式 form
 */
var dataReq = umiRequest.extend({
  prefix: process.env.BIG_DATA_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
requestInterceptors(dataReq, 'API_CONFIG_BIG_DATA_URL');
// 权限系统接口调用
var authReq = umiRequest.extend({
  prefix: process.env.AUTH_API_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
// 获取wss订单拉取id时调用
var wssReq = umiRequest.extend({
  prefix: process.env.WSS_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});
// 集团crm数据
var crmReq = umiRequest.extend({
  prefix: process.env.DM_CRM_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
// 无prefix 携带cookie
var noneReq = umiRequest.extend({
  prefix: '',
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
// 无prefix 不带cookie
var nullReq = umiRequest.extend({
  prefix: '',
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form', // 以表单形式提交参数
});
// 文件请求
var fileRequest = umiRequest.extend({
  errorHandler: errorHandler,
  // prefix: getGlobalVariable().API_CONFIG_CPS_API_URL,
  requestType: 'json',
  credentials: 'include', // 默认请求是否带上cookie
});
requestInterceptors(fileRequest, 'API_CONFIG_CPS_API_URL');

var uRequest = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  finRequest: finRequest,
  noPrefixReq: noPrefixReq,
  dataReq: dataReq,
  authReq: authReq,
  wssReq: wssReq,
  crmReq: crmReq,
  noneReq: noneReq,
  nullReq: nullReq,
  fileRequest: fileRequest,
  default: request,
});

/**
 *  金额数字格式化
 *  例：420996010 -> 420,996,010
 * @export
 * @param {string | number} value
 * @returns
 */
function moneyFormat(value) {
  var reg = /\B(?=(\d{3})+(?!\d))/g;
  return value
    ? isNumber__default['default'](value)
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
var decimalThousand = function decimalThousand(val, num) {
  if (!val) return '-';
  var str = val + '';
  str = parseFloat(str)
    .toFixed(num)
    .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  return val ? str : '0.00';
};
function exportCsv(data) {
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
function parseParam(url) {
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
function formatMoney(money, option) {
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
function momentToString(value) {
  var format =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD';
  return moment__default['default'](value).isValid()
    ? moment__default['default'](value).format(format)
    : undefined;
}
/**
 * @description Cookies操作
 */
var docCookies = {
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
var numberFormat = function numberFormat(value) {
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
var number2cnText = function number2cnText(number) {
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
var getResKey = function getResKey(keyNames, res) {
  if (keyNames === '') return res;
  var keyNameList = keyNames.split(',').map(function (item) {
    return trim__default['default'](item);
  });
  return keyNameList.reduce(function (pre, curr) {
    return pre === null || pre === void 0 ? void 0 : pre[curr];
  }, res);
};
// 兼容 MFSU
// 参考 issue：https://github.com/umijs/umi/issues/6922
var utils = {
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

var utils$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  moneyFormat: moneyFormat,
  decimalThousand: decimalThousand,
  exportCsv: exportCsv,
  parseParam: parseParam,
  formatMoney: formatMoney,
  momentToString: momentToString,
  docCookies: docCookies,
  numberFormat: numberFormat,
  number2cnText: number2cnText,
  getResKey: getResKey,
  default: utils,
});

_message__default['default'].config({
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
        _message__default['default'].error({
          content: data === null || data === void 0 ? void 0 : data.m,
        });
      } else if (response) {
        console.log('[response]', response);
      } else {
        _message__default['default'].error({
          content: '接口错误',
        });
      }
    }
  });
  return _objectSpread2(
    _objectSpread2({}, response),
    {},
    {
      hideErrorNotice: hideErrorNotice,
    },
  );
};
// 创建axios实例
var instance = axios__default['default'].create({
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
        get__default['default'](res.headers, ['content-type'], '') !==
        'application/vnd.ms-excel'
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
      _notification__default['default'].error({
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

function reducer(state, action) {
  var type = action.type,
    payload = action.payload;
  switch (type) {
    case 'open':
      return _objectSpread2(
        _objectSpread2({}, state),
        {},
        {
          visible: true,
        },
        payload,
      );
    case 'close':
      return _objectSpread2(
        _objectSpread2({}, state),
        {},
        {
          visible: false,
        },
        payload,
      );
    default:
      throw new Error();
  }
}
function useDialog(initial) {
  var _useReducer = React.useReducer(
      reducer,
      _objectSpread2(
        {
          visible: false,
        },
        initial,
      ),
    ),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var close = React.useCallback(
    function () {
      var payload =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      dispatch({
        type: 'close',
        payload: payload,
      });
    },
    [dispatch],
  );
  // 调用open的时间直接赋值其他参数过去.
  var open = React.useCallback(
    function () {
      var payload =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      dispatch({
        type: 'open',
        payload: payload,
      });
    },
    [dispatch],
  );
  return [state, open, close];
}

function useModal(props) {
  var _useDialog = useDialog({}),
    _useDialog2 = _slicedToArray(_useDialog, 3),
    state = _useDialog2[0],
    open = _useDialog2[1],
    close = _useDialog2[2];
  var renderModal = React.useMemo(
    function () {
      return /*#__PURE__*/ React__default['default'].createElement(
        _Modal__default['default'],
        _objectSpread2(
          _objectSpread2(
            {
              onOk: close,
              onCancel: close,
              okText: '\u786E\u5B9A',
              cancelText: '\u53D6\u6D88',
            },
            props,
          ),
          state,
        ),
        props.children(),
      );
    },
    [props.children],
  );
  return {
    renderModal: renderModal,
    open: open,
    close: close,
    state: state,
  };
}

function useOnFatherClick(ref, /** 点击内部事件，点击外部事件 */ _ref) {
  var outside = _ref.outside,
    inside = _ref.inside;
  var type =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : 'single';
  React.useEffect(
    function () {
      function handler(event) {
        if (type === 'multi') {
          Object.entries(
            ref === null || ref === void 0 ? void 0 : ref.current,
          ).forEach(function (_ref2) {
            var _ref4;
            var _ref3 = _slicedToArray(_ref2, 2),
              name = _ref3[0],
              value = _ref3[1];
            (
              (_ref4 =
                (value === null || value === void 0 ? void 0 : value.current) ||
                value) === null || _ref4 === void 0
                ? void 0
                : _ref4.contains(event.target)
            )
              ? inside === null || inside === void 0
                ? void 0
                : inside(name)
              : outside === null || outside === void 0
              ? void 0
              : outside(name);
          });
        } else if (type === 'single') {
          var _ref$current;
          (
            ref === null || ref === void 0
              ? void 0
              : (_ref$current = ref.current) === null || _ref$current === void 0
              ? void 0
              : _ref$current.contains(event.target)
          )
            ? inside === null || inside === void 0
              ? void 0
              : inside()
            : outside === null || outside === void 0
            ? void 0
            : outside();
        }
      }
      (ref === null || ref === void 0 ? void 0 : ref.current) &&
        window.addEventListener('click', handler);
      return function () {
        return window.removeEventListener('click', handler);
      };
    },
    [inside, outside, ref],
  );
}

var setGlobalVariable = function setGlobalVariable(_ref) {
  var env = _ref.env,
    _ref$writable = _ref.writable,
    writable = _ref$writable === void 0 ? false : _ref$writable;
  for (
    var _i = 0, _Object$entries = Object.entries(env);
    _i < _Object$entries.length;
    _i++
  ) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    getGlobalVariable()[key] = value;
    Object.defineProperty(getGlobalVariable(), key, {
      writable: writable,
    });
  }
};

exports.getGlobalVariable = getGlobalVariable;
exports.request = instance;
exports.setGlobalVariable = setGlobalVariable;
exports.uRequest = request;
exports.useDialog = useDialog;
exports.useModal = useModal;
exports.useOnFatherClick = useOnFatherClick;
exports.utils = utils$1;
exports.utilsRequest = uRequest;
