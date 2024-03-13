'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/es/notification/style');
var _notification = require('antd/es/notification');
require('antd/es/message/style');
var _message = require('antd/es/message');
var debounce = require('lodash/debounce');
var umiRequest = require('umi-request');
var trim = require('lodash/trim');
var isNumber = require('lodash/isNumber');
var moment = require('moment');
var axios = require('axios');
var get = require('lodash/get');
var react = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var _notification__default = /*#__PURE__*/ _interopDefaultLegacy(_notification);
var _message__default = /*#__PURE__*/ _interopDefaultLegacy(_message);
var debounce__default = /*#__PURE__*/ _interopDefaultLegacy(debounce);
var trim__default = /*#__PURE__*/ _interopDefaultLegacy(trim);
var isNumber__default = /*#__PURE__*/ _interopDefaultLegacy(isNumber);
var moment__default = /*#__PURE__*/ _interopDefaultLegacy(moment);
var axios__default = /*#__PURE__*/ _interopDefaultLegacy(axios);
var get__default = /*#__PURE__*/ _interopDefaultLegacy(get);

function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
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
function _objectSpread2(target) {
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
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
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
    define = function (obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return (
      defineProperty(generator, '_invoke', {
        value: makeInvokeMethod(innerFn, self, context),
      }),
      generator
    );
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: 'normal',
        arg: fn.call(obj, arg),
      };
    } catch (err) {
      return {
        type: 'throw',
        arg: err,
      };
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
        return value && 'object' == typeof value && hasOwn.call(value, '__await')
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
      value: function (method, arg) {
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
        return {
          value: void 0,
          done: !0,
        };
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
          return {
            value: record.arg,
            done: context.done,
          };
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
    var entry = {
      tryLoc: locs[0],
    };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = 'normal'), delete record.arg, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [
      {
        tryLoc: 'root',
      },
    ]),
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
    throw new TypeError(typeof iterable + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    defineProperty(Gp, 'constructor', {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
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
      return {
        __await: arg,
      };
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
      reset: function (skipTempReset) {
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
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ('throw' === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
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
      abrupt: function (type, arg) {
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
      complete: function (record, afterLoc) {
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
      finish: function (finallyLoc) {
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
      catch: function (tryLoc) {
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
      delegateYield: function (iterable, resultName, nextLoc) {
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
function _toPrimitive(input, hint) {
  if (typeof input !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (typeof res !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return typeof key === 'symbol' ? key : String(key);
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
            API_CONFIG_BASE_API: '//cps-api.sk8s.cn/newgate/dm-crm/',
            API_CONFIG_CPS_API_URL: '//cps-api.sk8s.cn/newgate/newcps/backend',
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
      } else if (status >= 500 && url.includes('/data.goods.mall.searchService/query')) {
        _message__default['default'].error('该网址暂未收录，请联系Alan/Marico收录');
      } else if (status === 403) {
        _notification__default['default'].error({
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
                    // process.env.NODE_ENV === 'development' || process.env.API_ENV === 'dev'
                    //   ? history.push('/login/login')
                    //   : history.push('/exception/403');
                  } else {
                    // 错误，全局提示
                    !hideMessageError && _message__default['default'].error(res.m);
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
var finRequest = umiRequest.extend({
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
var noPrefixReq = umiRequest.extend({
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
var bigDataReq = umiRequest.extend({
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
  bigDataReq: bigDataReq,
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
  var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'result.csv';
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
  var keys = Object.keys((data === null || data === void 0 ? void 0 : data[0]) || {});
  // 拼接 enter 键或者换行符
  res.push(Object.values((data === null || data === void 0 ? void 0 : data[0]) || {}) + '\r\n');
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
  var search = (_exec = /(.+)\?(.+)/.exec(url)) === null || _exec === void 0 ? void 0 : _exec[2]; // 问号分割字符串，获取查询参数部分
  var searchArr = search === null || search === void 0 ? void 0 : search.split('&');
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
              paramsObj[keyAndVal[0]] = [].concat(_toConsumableArray(paramsObj[keyAndVal[0]]), [
                value,
              ]);
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
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
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
            vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
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
      '(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=',
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
  var fix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
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
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'upper';
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
      'The maxNumber is '.concat(confs.maxNumber, '. ').concat(number, ' is bigger than it!'),
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
      : (_numbers$$split = _numbers$.split) === null || _numbers$$split === void 0
      ? void 0
      : _numbers$$split.call(_numbers$, '');
  // 四位分级
  var levels = integer.reverse().reduce(function (pre, item, idx) {
    var level = pre[0] && pre[0].length < 4 ? pre[0] : [];
    var value = item === '0' ? conf.num[item] : conf.num[item] + conf.unit[idx % 4];
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
    if (!/^(http:\/\/|https:\/\/|\/\/)([\w.]+\/?)\S*/.test(config.url) && !config.baseURL) {
      var _getGlobalVariable$AP;
      // 删除多余的`/`
      ((_getGlobalVariable$AP = getGlobalVariable().API_CONFIG_BASE_API) === null ||
      _getGlobalVariable$AP === void 0
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
        get__default['default'](res.headers, ['content-type'], '') !== 'application/vnd.ms-excel'
      ) {
        var _res$data;
        if (
          ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.f) !== 1
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
          var _res$headers$content, _attrs$find, _res$headers$content2, _res$headers$content3;
          var fileName; // 默认 cors 暴露出 content-disposition 请求头，后端返回的filename中文乱码
          var attrs =
            (_res$headers$content = res.headers['content-disposition']) === null ||
            _res$headers$content === void 0
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
              : (_res$headers$content3 = _res$headers$content2.split(';')) === null ||
                _res$headers$content3 === void 0
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
        message: '您暂无该操作权限，如有需要，请联系相关负责人员，如有疑问请联系产品工作人员',
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
          (_getGlobalVariable = getGlobalVariable()) === null || _getGlobalVariable === void 0
            ? void 0
            : _getGlobalVariable.API_CONFIG_LOGIN_URL
        ) {
          window.location.replace(getGlobalVariable().API_CONFIG_LOGIN_URL || '/login');
          return;
        }
        //登录态过期
        if (
          response === null || response === void 0
            ? void 0
            : (_response$headers = response.headers) === null || _response$headers === void 0
            ? void 0
            : _response$headers.location
        ) {
          var _response$headers2;
          window.location.replace(
            response === null || response === void 0
              ? void 0
              : (_response$headers2 = response.headers) === null || _response$headers2 === void 0
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

function useOnFatherClick(ref, /** 点击内部事件，点击外部事件 */ _ref) {
  var outside = _ref.outside,
    inside = _ref.inside;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'single';
  react.useEffect(
    function () {
      function handler(event) {
        if (type === 'multi') {
          Object.entries(ref === null || ref === void 0 ? void 0 : ref.current).forEach(function (
            _ref2,
          ) {
            var _ref4;
            var _ref3 = _slicedToArray(_ref2, 2),
              name = _ref3[0],
              value = _ref3[1];
            (
              (_ref4 = (value === null || value === void 0 ? void 0 : value.current) || value) ===
                null || _ref4 === void 0
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
  for (var _i = 0, _Object$entries = Object.entries(env); _i < _Object$entries.length; _i++) {
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
exports.useOnFatherClick = useOnFatherClick;
exports.utils = utils$1;
exports.utilsRequest = uRequest;
