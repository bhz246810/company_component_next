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
function _regeneratorRuntime() {
  'use strict';
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
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
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: 'normal', arg: t.call(e, r) };
    } catch (t) {
      return { type: 'throw', arg: t };
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
        return h && 'object' == _typeof(h) && n.call(h, '__await')
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
      value: function value(t, n) {
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
        return { value: t, done: !0 };
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
          return { value: p.arg, done: n.done };
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
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
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
    throw new TypeError(_typeof(e) + ' is not iterable');
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
      return { __await: t };
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
      reset: function reset(e) {
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
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
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
      abrupt: function abrupt(t, e) {
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
      complete: function complete(t, e) {
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
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
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
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
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
import debounce from 'lodash/debounce';
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { history } from 'umi';
import { extend } from 'umi-request';
import getGlobalVariable from './getGlobalVariable';
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
var debouncedHandler = debounce(
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
        _message.error('该网址暂未收录，请联系Alan/Marico收录');
      } else if (status === 403) {
        _notification.error({
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
          _notification.error({
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
                  ctx.req.options = _objectSpread({}, options);
                  _context.next = 11;
                  return next();
                case 11:
                  res = ctx.res;
                  if (!(res.f <= 0)) {
                    _context.next = 16;
                    break;
                  }
                  if (res.f === -100) {
                    _notification.error({
                      message: '当前用户还未做关联，暂无权限访问该应用',
                      description: res.m,
                    });
                    process.env.NODE_ENV === 'development' ||
                    process.env.API_ENV === 'dev'
                      ? history.push('/login/login')
                      : history.push('/exception/403');
                  } else {
                    // 错误，全局提示
                    !hideMessageError && _message.error(res.m);
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
var request = extend({
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
export var finRequest = extend({
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
export var noPrefixReq = extend({
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
export var dataReq = extend({
  prefix: process.env.BIG_DATA_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
requestInterceptors(dataReq, 'API_CONFIG_BIG_DATA_URL');
// 权限系统接口调用
export var authReq = extend({
  prefix: process.env.AUTH_API_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
// 获取wss订单拉取id时调用
export var wssReq = extend({
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
export var crmReq = extend({
  prefix: process.env.DM_CRM_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
// 无prefix 携带cookie
export var noneReq = extend({
  prefix: '',
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form',
  credentials: 'include', // 默认请求是否带上cookie
});
// 无prefix 不带cookie
export var nullReq = extend({
  prefix: '',
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'form', // 以表单形式提交参数
});
// 文件请求
var fileRequest = extend({
  errorHandler: errorHandler,
  // prefix: getGlobalVariable().API_CONFIG_CPS_API_URL,
  requestType: 'json',
  credentials: 'include', // 默认请求是否带上cookie
});
requestInterceptors(fileRequest, 'API_CONFIG_CPS_API_URL');
export { fileRequest };
export default request;
