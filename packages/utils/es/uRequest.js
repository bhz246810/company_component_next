function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
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
      return exports;
    };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
        obj[key] = desc.value;
      },
    $Symbol = 'function' == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || '@@iterator',
    asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
    toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
  function define(obj, key, value) {
    return (
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      obj[key]
    );
  }
  try {
    define({}, '');
  } catch (err) {
    define = function define(obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return (
      defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }),
      generator
    );
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: 'normal', arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: 'throw', arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
  var Gp =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(IteratorPrototype));
  function defineIteratorMethods(prototype) {
    ['next', 'throw', 'return'].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ('throw' !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && 'object' == _typeof(value) && hasOwn.call(value, '__await')
          ? PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke('next', value, resolve, reject);
              },
              function (err) {
                invoke('throw', err, resolve, reject);
              },
            )
          : PromiseImpl.resolve(value).then(
              function (unwrapped) {
                (result.value = unwrapped), resolve(result);
              },
              function (error) {
                return invoke('throw', error, resolve, reject);
              },
            );
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, '_invoke', {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return (previousPromise = previousPromise
          ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = 'suspendedStart';
    return function (method, arg) {
      if ('executing' === state) throw new Error('Generator is already running');
      if ('completed' === state) {
        if ('throw' === method) throw arg;
        return { value: void 0, done: !0 };
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ('next' === context.method) context.sent = context._sent = context.arg;
        else if ('throw' === context.method) {
          if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
          context.dispatchException(context.arg);
        } else 'return' === context.method && context.abrupt('return', context.arg);
        state = 'executing';
        var record = tryCatch(innerFn, self, context);
        if ('normal' === record.type) {
          if (
            ((state = context.done ? 'completed' : 'suspendedYield'),
            record.arg === ContinueSentinel)
          )
            continue;
          return { value: record.arg, done: context.done };
        }
        'throw' === record.type &&
          ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method)
      return (
        (context.delegate = null),
        ('throw' === methodName &&
          delegate.iterator.return &&
          ((context.method = 'return'),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          'throw' === context.method)) ||
          ('return' !== methodName &&
            ((context.method = 'throw'),
            (context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method",
            )))),
        ContinueSentinel
      );
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ('throw' === record.type)
      return (
        (context.method = 'throw'),
        (context.arg = record.arg),
        (context.delegate = null),
        ContinueSentinel
      );
    var info = record.arg;
    return info
      ? info.done
        ? ((context[delegate.resultName] = info.value),
          (context.next = delegate.nextLoc),
          'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
          (context.delegate = null),
          ContinueSentinel)
        : info
      : ((context.method = 'throw'),
        (context.arg = new TypeError('iterator result is not an object')),
        (context.delegate = null),
        ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = 'normal'), delete record.arg, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      tryLocsList.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(iterable) {
    if (iterable || '' === iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ('function' == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return (next.value = iterable[i]), (next.done = !1), next;
            return (next.value = undefined), (next.done = !0), next;
          };
        return (next.next = next);
      }
    }
    throw new TypeError(_typeof(iterable) + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
    defineProperty(GeneratorFunctionPrototype, 'constructor', {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      'GeneratorFunction',
    )),
    (exports.isGeneratorFunction = function (genFun) {
      var ctor = 'function' == typeof genFun && genFun.constructor;
      return (
        !!ctor &&
        (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name))
      );
    }),
    (exports.mark = function (genFun) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          : ((genFun.__proto__ = GeneratorFunctionPrototype),
            define(genFun, toStringTagSymbol, 'GeneratorFunction')),
        (genFun.prototype = Object.create(Gp)),
        genFun
      );
    }),
    (exports.awrap = function (arg) {
      return { __await: arg };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }),
    (exports.AsyncIterator = AsyncIterator),
    (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn)
        ? iter
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    }),
    defineIteratorMethods(Gp),
    define(Gp, toStringTagSymbol, 'Generator'),
    define(Gp, iteratorSymbol, function () {
      return this;
    }),
    define(Gp, 'toString', function () {
      return '[object Generator]';
    }),
    (exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return (
        keys.reverse(),
        function next() {
          for (; keys.length; ) {
            var key = keys.pop();
            if (key in object) return (next.value = key), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (exports.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = undefined),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = undefined),
          this.tryEntries.forEach(resetTryEntry),
          !skipTempReset)
        )
          for (var name in this)
            't' === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ('throw' === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return (
            (record.type = 'throw'),
            (record.arg = exception),
            (context.next = loc),
            caught && ((context.method = 'next'), (context.arg = undefined)),
            !!caught
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ('root' === entry.tryLoc) return handle('end');
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, 'catchLoc'),
              hasFinally = hasOwn.call(entry, 'finallyLoc');
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error('try statement without catch or finally');
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry &&
          ('break' === type || 'continue' === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return (
          (record.type = type),
          (record.arg = arg),
          finallyEntry
            ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
            : this.complete(record)
        );
      },
      complete: function complete(record, afterLoc) {
        if ('throw' === record.type) throw record.arg;
        return (
          'break' === record.type || 'continue' === record.type
            ? (this.next = record.arg)
            : 'return' === record.type
            ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
            : 'normal' === record.type && afterLoc && (this.next = afterLoc),
          ContinueSentinel
        );
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return (
              this.complete(entry.completion, entry.afterLoc),
              resetTryEntry(entry),
              ContinueSentinel
            );
        }
      },
      catch: function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ('throw' === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return (
          (this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc,
          }),
          'next' === this.method && (this.arg = undefined),
          ContinueSentinel
        );
      },
    }),
    exports
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
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
// import { extend, RequestMethod, ResponseError } from 'umi';
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
      } else if (status >= 500 && url.includes('/data.goods.mall.searchService/query')) {
        _message.error('该网址暂未收录，请联系Alan/Marico收录');
      } else if (status === 403) {
        _notification.error({
          message: '您暂无该操作权限，如有需要，请联系相关负责人员，如有疑问请联系产品工作人员',
        });
      } else {
        var _request$options, _request$options$data;
        if (
          !((_request$options = request.options) === null || _request$options === void 0
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
    : (_request$interceptors = request.interceptors) === null || _request$interceptors === void 0
    ? void 0
    : (_request$interceptors2 = _request$interceptors.request) === null ||
      _request$interceptors2 === void 0
    ? void 0
    : (_request$interceptors3 = _request$interceptors2.use) === null ||
      _request$interceptors3 === void 0
    ? void 0
    : _request$interceptors3.call(_request$interceptors2, function (url, options) {
        if (!/^(http:\/\/|https:\/\/|\/\/)([\w.]+\/?)\S*/.test(options.url) && !options.prefix) {
          options.url = getGlobalVariable()[variable] + options.url;
          url = getGlobalVariable()[variable] + url;
        }
        return {
          url: url,
          options: options,
        };
      });
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
                    (options === null || options === void 0 ? void 0 : options.data) instanceof
                      FormData,
                  );
                  if (
                    (options === null || options === void 0 ? void 0 : options.data) instanceof
                    FormData
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
                    for (_key in options === null || options === void 0 ? void 0 : options.data) {
                      //排除手动设置为空字符串的情况，给后端一个明确的修改指示
                      if (
                        typeof (options === null || options === void 0
                          ? void 0
                          : options.data[_key]) === 'string' &&
                        (options === null || options === void 0 ? void 0 : options.data[_key]) !==
                          ''
                      ) {
                        (options === null || options === void 0
                          ? void 0
                          : (_options$data$_key = options.data[_key]) === null ||
                            _options$data$_key === void 0
                          ? void 0
                          : _options$data$_key.trim()) !== '' &&
                          (formatData[_key] =
                            options === null || options === void 0
                              ? void 0
                              : (_options$data$_key2 = options.data[_key]) === null ||
                                _options$data$_key2 === void 0
                              ? void 0
                              : _options$data$_key2.trim());
                      } else {
                        formatData[_key] =
                          options === null || options === void 0 ? void 0 : options.data[_key];
                      }
                    }
                    options.data = formatData;
                  }
                  if (
                    options === null || options === void 0
                      ? void 0
                      : (_options$data = options.data) === null || _options$data === void 0
                      ? void 0
                      : _options$data.hideMessageError
                  ) {
                    hideMessageError =
                      options === null || options === void 0
                        ? void 0
                        : (_options$data2 = options.data) === null || _options$data2 === void 0
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
                    // process.env.NODE_ENV === 'development' || process.env.API_ENV === 'dev'
                    //   ? history.push('/login/login')
                    //   : history.push('/exception/403');
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
  prefix: process.env.CPS_API_URL,
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
  prefix: process.env.CPS_API_URL,
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
 * 传参数据格式 json
 */
export var bigDataReq = extend({
  prefix: process.env.BIG_DATA_URL,
  errorHandler: errorHandler,
  timeout: 30000,
  requestType: 'json',
  credentials: 'include', // 默认请求是否带上cookie
});

requestInterceptors(bigDataReq, 'API_CONFIG_BIG_DATA_URL');
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
