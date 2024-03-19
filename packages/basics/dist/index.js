'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/es/empty/style');
var _Empty = require('antd/es/empty');
require('antd/es/spin/style');
var _Spin = require('antd/es/spin');
require('antd/es/tooltip/style');
var _Tooltip = require('antd/es/tooltip');
require('antd/es/auto-complete/style');
var _AutoComplete = require('antd/es/auto-complete');
require('antd/es/select/style');
var _Select = require('antd/es/select');
var React = require('react');
var utils = require('@company-component-next/utils');
var debounce = require('lodash/debounce');
var isObject = require('lodash/isObject');
var qs = require('qs');
var ReactDOMServer = require('react-dom/server');
require('antd/es/cascader/style');
var _Cascader = require('antd/es/cascader');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var _Empty__default = /*#__PURE__*/ _interopDefaultLegacy(_Empty);
var _Spin__default = /*#__PURE__*/ _interopDefaultLegacy(_Spin);
var _Tooltip__default = /*#__PURE__*/ _interopDefaultLegacy(_Tooltip);
var _AutoComplete__default = /*#__PURE__*/ _interopDefaultLegacy(_AutoComplete);
var _Select__default = /*#__PURE__*/ _interopDefaultLegacy(_Select);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var debounce__default = /*#__PURE__*/ _interopDefaultLegacy(debounce);
var isObject__default = /*#__PURE__*/ _interopDefaultLegacy(isObject);
var qs__default = /*#__PURE__*/ _interopDefaultLegacy(qs);
var ReactDOMServer__default =
  /*#__PURE__*/ _interopDefaultLegacy(ReactDOMServer);
var _Cascader__default = /*#__PURE__*/ _interopDefaultLegacy(_Cascader);

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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length)
            return {
              done: true,
            };
          return {
            done: false,
            value: o[i++],
          };
        },
        e: function (e) {
          throw e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

/*
 * @Description: 获取上一次的dom更新的数据
 * @Version: 1.0.0
 * @Autor: Bert
 * @Date: 2021-12-09 20:45:08
 * @LastEditors: Bert
 * @LastEditTime: 2022-01-28 17:58:22
 */
var usePrevious = function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(
    function () {
      ref.current = value;
    },
    [value],
  );
  return ref.current;
};

var _excluded = [
  'selectType',
  'searchMethod',
  'searchUrl',
  'labelTooltip',
  'optionValueKey',
  'optionLabelKey',
  'listKey',
  'debounceTimeout',
  'style',
  'outDivstyle',
  'rq',
  'isStringifyParams',
  'customValue',
  'customLabel',
  'customList',
  'onChange',
  'disabled',
  'disabledButRequest',
  'onChangeList',
  'optionProps',
  'labelTooltipOptions',
  'searchParams',
  'getListAfter',
  'dynamicOptionProps',
  'onClear',
  'isSaveQueue',
  'popupProps',
  'dropdownRender',
  'otherRequestOptions',
  'isShowInputTooltip',
  'getInputTooltipText',
  'getListDep',
];
var getResKey = utils.utils.getResKey;
var Option = _Select__default['default'].Option;
var components = {
  AutoComplete: _AutoComplete__default['default'],
  Select: _Select__default['default'],
};
var ReactElement2String = function ReactElement2String(elem) {
  var _ReactDOMServer$rende;
  return (
    ((_ReactDOMServer$rende =
      ReactDOMServer__default['default'].renderToString(elem)) === null ||
    _ReactDOMServer$rende === void 0
      ? void 0
      : _ReactDOMServer$rende.replace(/<\/?.+?>|\s+/g, '')) || ''
  );
};
var getAllElementsText = function getAllElementsText(targets) {
  var _text;
  var text = '';
  if (!targets) {
    return text;
  }
  var _iterator = _createForOfIteratorHelper(targets),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value;
      if (item === null || item === void 0 ? void 0 : item.textContent) {
        text +=
          ',' + (item === null || item === void 0 ? void 0 : item.textContent);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return text.slice(
    ((_text = text) === null || _text === void 0 ? void 0 : _text[0]) === ','
      ? 1
      : 0,
  );
};
/**
 * Form Grid.
 */
var RemoteSelect = /*#__PURE__*/ React.forwardRef(function (_ref, ref) {
  var _ref$selectType = _ref.selectType,
    selectType = _ref$selectType === void 0 ? 'select' : _ref$selectType,
    _ref$searchMethod = _ref.searchMethod,
    searchMethod = _ref$searchMethod === void 0 ? 'GET' : _ref$searchMethod,
    searchUrl = _ref.searchUrl,
    _ref$labelTooltip = _ref.labelTooltip,
    labelTooltip = _ref$labelTooltip === void 0 ? true : _ref$labelTooltip,
    _ref$optionValueKey = _ref.optionValueKey,
    optionValueKey =
      _ref$optionValueKey === void 0 ? 'id' : _ref$optionValueKey,
    _ref$optionLabelKey = _ref.optionLabelKey,
    optionLabelKey =
      _ref$optionLabelKey === void 0 ? 'name' : _ref$optionLabelKey,
    _ref$listKey = _ref.listKey,
    listKey = _ref$listKey === void 0 ? 'd' : _ref$listKey,
    _ref$debounceTimeout = _ref.debounceTimeout,
    debounceTimeout =
      _ref$debounceTimeout === void 0 ? 300 : _ref$debounceTimeout,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    outDivstyle = _ref.outDivstyle,
    rq = _ref.rq,
    _ref$isStringifyParam = _ref.isStringifyParams,
    isStringifyParams =
      _ref$isStringifyParam === void 0 ? false : _ref$isStringifyParam,
    customValue = _ref.customValue,
    customLabel = _ref.customLabel,
    customList = _ref.customList,
    _onChange = _ref.onChange,
    disabled = _ref.disabled,
    _ref$disabledButReque = _ref.disabledButRequest,
    disabledButRequest =
      _ref$disabledButReque === void 0 ? false : _ref$disabledButReque,
    _ref$onChangeList = _ref.onChangeList,
    onChangeList = _ref$onChangeList === void 0 ? [] : _ref$onChangeList,
    _ref$optionProps = _ref.optionProps,
    optionProps = _ref$optionProps === void 0 ? {} : _ref$optionProps,
    _ref$labelTooltipOpti = _ref.labelTooltipOptions,
    labelTooltipOptions =
      _ref$labelTooltipOpti === void 0 ? {} : _ref$labelTooltipOpti,
    _ref$searchParams = _ref.searchParams,
    searchParams =
      _ref$searchParams === void 0
        ? function () {
            return {};
          }
        : _ref$searchParams,
    _ref$getListAfter = _ref.getListAfter,
    getListAfter =
      _ref$getListAfter === void 0
        ? function () {
            // default
          }
        : _ref$getListAfter,
    _ref$dynamicOptionPro = _ref.dynamicOptionProps,
    dynamicOptionProps =
      _ref$dynamicOptionPro === void 0
        ? function () {
            // default
          }
        : _ref$dynamicOptionPro,
    _onClear = _ref.onClear,
    isSaveQueue = _ref.isSaveQueue,
    popupProps = _ref.popupProps,
    dropdownRender = _ref.dropdownRender,
    otherRequestOptions = _ref.otherRequestOptions,
    _ref$isShowInputToolt = _ref.isShowInputTooltip,
    isShowInputTooltip =
      _ref$isShowInputToolt === void 0 ? true : _ref$isShowInputToolt,
    getInputTooltipText = _ref.getInputTooltipText,
    _ref$getListDep = _ref.getListDep,
    getListDep = _ref$getListDep === void 0 ? [] : _ref$getListDep,
    props = _objectWithoutProperties(_ref, _excluded);
  var SET_IN_POPUP_DELAY = 100;
  var innerRef = React.useRef();
  var areaRef = React.useRef(null);
  // 数据
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _React$useState = React__default['default'].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetching = _React$useState2[0],
    setFetching = _React$useState2[1];
  var _React$useState3 = React__default['default'].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inPopup = _React$useState4[0],
    setInPopup = _React$useState4[1];
  var _React$useState5 = React__default['default'].useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    waitList = _React$useState6[0],
    setWaitList = _React$useState6[1]; // wait 队列
  var request = rq || utils.request;
  var useDebounce = function useDebounce(fn, delay) {
    return React.useCallback(debounce__default['default'](fn, delay), []);
  };
  var debounceSetInPopup = useDebounce(setInPopup, SET_IN_POPUP_DELAY);
  // 上一次传入的searchParams
  var preParams = usePrevious(
    _objectSpread2(
      {},
      typeof searchParams === 'function'
        ? Reflect.toString.call(searchParams()) === '[object Object]'
          ? searchParams()
          : {}
        : {},
    ),
  );
  //接口返回的总页数
  // const [allPage, setAllPage] = useState<number>(0);
  /**
   * @description:进行列表查询
   * @param {any} params
   * @return {*}
   * @author: Bert
   */
  var debounceGetList = React.useCallback(
    useDebounce(
      /*#__PURE__*/ (function () {
        var _ref2 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(params) {
            var response, list;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (searchUrl) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt('return');
                  case 2:
                    if (!(fetching && isSaveQueue)) {
                      _context.next = 5;
                      break;
                    }
                    setWaitList(function (pre) {
                      return [].concat(_toConsumableArray(pre), [params]);
                    });
                    return _context.abrupt('return');
                  case 5:
                    setFetching(true);
                    _context.next = 8;
                    return request(
                      searchUrl,
                      _objectSpread2(
                        _objectSpread2(
                          {
                            // TODO 分页
                            method: searchMethod,
                          },
                          searchMethod === 'POST'
                            ? isStringifyParams
                              ? {
                                  data: qs__default['default'].stringify(
                                    params,
                                  ),
                                }
                              : {
                                  data: params,
                                }
                            : {
                                params: params,
                              },
                        ),
                        otherRequestOptions,
                      ),
                    ).catch(function (err) {
                      console.log(err);
                      setFetching(false);
                    });
                  case 8:
                    response = _context.sent;
                    // setAllPage(response[countKey || 'allPage'])
                    list = customList
                      ? customList(response)
                      : getResKey(listKey, response) || [];
                    setList(list);
                    setFetching(false);
                    getListAfter && getListAfter(list);
                  case 13:
                  case 'end':
                    return _context.stop();
                }
            }, _callee);
          }),
        );
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      })(),
      debounceTimeout,
    ),
    [debounceTimeout, getListAfter],
  );
  React.useEffect(
    function () {
      if (waitList.length && !fetching && isSaveQueue) {
        var _waitList$slice;
        if (
          (_waitList$slice = waitList.slice(-1)) === null ||
          _waitList$slice === void 0
            ? void 0
            : _waitList$slice[0]
        ) {
          debounceGetList(waitList.slice(-1)[0]);
          setWaitList([]);
        }
        // setWaitList((pre) => pre.slice(1));
      }
    },
    [fetching],
  );
  // // 初始化组件
  // useEffect(() => {
  //   !disabled && debounceGetList(searchParams());
  // }, [...Object.keys(searchParams()).map((item: string) => (searchParams() as any)[item]), disabled]);
  React.useEffect(function () {
    if (!isObject__default['default'](searchParams()) || disabled) {
      return;
    }
    // 第一次请求list
    if (!preParams && searchParams()) {
      debounceGetList(searchParams());
    }
    // 检查searchParams是否变化
    if (
      Object.keys(searchParams()).some(function (item) {
        var _searchParams;
        return (
          ((_searchParams = searchParams()) === null || _searchParams === void 0
            ? void 0
            : _searchParams[item]) !==
          (preParams === null || preParams === void 0
            ? void 0
            : preParams[item])
        );
      })
    ) {
      debounceGetList(searchParams());
    }
  }, [searchParams, disabled].concat(_toConsumableArray(getListDep)));
  React.useImperativeHandle(ref, function () {
    return {
      getList: function getList() {
        debounceGetList(searchParams());
      },
      innerRef: innerRef,
    };
  });
  var DropdownRender = function DropdownRender(menu) {
    return /*#__PURE__*/ React__default['default'].createElement(
      React__default['default'].Fragment,
      null,
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        _objectSpread2(
          _objectSpread2({}, popupProps),
          {},
          {
            onMouseEnter: function onMouseEnter(e) {
              var _popupProps$onMouseEn;
              // debounceSetInPopup(true);
              setInPopup(true);
              popupProps === null || popupProps === void 0
                ? void 0
                : (_popupProps$onMouseEn = popupProps.onMouseEnter) === null ||
                  _popupProps$onMouseEn === void 0
                ? void 0
                : _popupProps$onMouseEn.call(popupProps, e);
            },
            onMouseLeave: function onMouseLeave(e) {
              var _popupProps$onMouseLe;
              // debounceSetInPopup(false);
              setInPopup(false);
              popupProps === null || popupProps === void 0
                ? void 0
                : (_popupProps$onMouseLe = popupProps.onMouseLeave) === null ||
                  _popupProps$onMouseLe === void 0
                ? void 0
                : _popupProps$onMouseLe.call(popupProps, e);
            },
          },
        ),
        menu,
      ),
    );
  };
  var UnitSelect =
    components[selectType === 'autoComplete' ? 'AutoComplete' : 'Select'];
  var TitleRender = function TitleRender() {
    var _React$useState7 = React__default['default'].useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      tooltipTitle = _React$useState8[0],
      setTooltipTitle = _React$useState8[1];
    React.useEffect(
      useDebounce(function () {
        var _areaRef$current;
        var text = getInputTooltipText
          ? getInputTooltipText(
              areaRef === null || areaRef === void 0 ? void 0 : areaRef.current,
            )
          : getAllElementsText(
              areaRef === null || areaRef === void 0
                ? void 0
                : (_areaRef$current = areaRef.current) === null ||
                  _areaRef$current === void 0
                ? void 0
                : _areaRef$current.getElementsByClassName(
                    'ant-select-selection-item',
                  ),
            );
        setTooltipTitle(
          text || (props === null || props === void 0 ? void 0 : props.value),
        );
      }, 30),
      [props === null || props === void 0 ? void 0 : props.value],
    );
    return (
      tooltipTitle === null || tooltipTitle === void 0
        ? void 0
        : tooltipTitle.length
    )
      ? tooltipTitle
      : props.placeholder;
  };
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      style: _objectSpread2(
        {
          width: '100%',
        },
        outDivstyle || style,
      ),
      ref: areaRef,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      _Tooltip__default['default'],
      _objectSpread2(
        {
          title:
            (props === null || props === void 0 ? void 0 : props.value) ===
              undefined ||
            (props === null || props === void 0 ? void 0 : props.value) ===
              null ||
            !isShowInputTooltip
              ? ''
              : TitleRender,
          destroyTooltipOnHide: true,
          placement: 'topLeft',
        },
        labelTooltipOptions,
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        UnitSelect,
        _objectSpread2(
          _objectSpread2(
            {
              ref: innerRef,
              style: _objectSpread2(
                {
                  width: '100%',
                },
                style,
              ),
              allowClear: true,
              showSearch: true,
              notFoundContent: fetching
                ? /*#__PURE__*/ React__default['default'].createElement(
                    _Spin__default['default'],
                    {
                      size: 'small',
                    },
                  )
                : /*#__PURE__*/ React__default['default'].createElement(
                    _Empty__default['default'],
                    {
                      image: _Empty__default['default'].PRESENTED_IMAGE_SIMPLE,
                    },
                  ),
              dropdownRender: dropdownRender
                ? dropdownRender(DropdownRender)
                : DropdownRender,
              onSearch: function onSearch(value) {
                debounceGetList(searchParams ? searchParams(value) : {});
              },
              filterOption: function filterOption(input, option) {
                var _option$children,
                  _option$children$prop,
                  _children$toString,
                  _children$toString$ca,
                  _children$toString$ca2,
                  _children$toString$ca3,
                  _children$toString$ca4,
                  _input$toString,
                  _input$toString$toLow,
                  _input$toString$toLow2,
                  _input$toString$toLow3;
                var valueResult =
                  option.value
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toString().toLowerCase().trim()) >= 0;
                var children =
                  labelTooltip && inPopup
                    ? (_option$children = option.children) === null ||
                      _option$children === void 0
                      ? void 0
                      : (_option$children$prop = _option$children.props) ===
                          null || _option$children$prop === void 0
                      ? void 0
                      : _option$children$prop.title
                    : option.children;
                if (/*#__PURE__*/ React.isValidElement(children)) {
                  var _ReactElement2String$;
                  // customLabel使用时，判断是否是reactNode
                  // replace去除混入多余的html标签字符串
                  var result =
                    (_ReactElement2String$ = ReactElement2String(children)
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .indexOf(
                        input.toString().toLowerCase().replace(/\s+/g, ''),
                      )) !== null && _ReactElement2String$ !== void 0
                      ? _ReactElement2String$
                      : 0;
                  // const result = option.children?.props?.children?.toString().toLowerCase().indexOf(input.toString().toLowerCase().trim()) ?? 0
                  return result >= 0 || valueResult;
                }
                // 普通Label
                return (
                  (children === null || children === void 0
                    ? void 0
                    : (_children$toString = children.toString) === null ||
                      _children$toString === void 0
                    ? void 0
                    : (_children$toString$ca =
                        _children$toString.call(children)) === null ||
                      _children$toString$ca === void 0
                    ? void 0
                    : (_children$toString$ca2 =
                        _children$toString$ca.toLowerCase) === null ||
                      _children$toString$ca2 === void 0
                    ? void 0
                    : (_children$toString$ca3 = _children$toString$ca2.call(
                        _children$toString$ca,
                      )) === null || _children$toString$ca3 === void 0
                    ? void 0
                    : (_children$toString$ca4 =
                        _children$toString$ca3.indexOf) === null ||
                      _children$toString$ca4 === void 0
                    ? void 0
                    : _children$toString$ca4.call(
                        _children$toString$ca3,
                        (_input$toString = input.toString()) === null ||
                          _input$toString === void 0
                          ? void 0
                          : (_input$toString$toLow =
                              _input$toString.toLowerCase) === null ||
                            _input$toString$toLow === void 0
                          ? void 0
                          : (_input$toString$toLow2 =
                              _input$toString$toLow.call(_input$toString)) ===
                              null || _input$toString$toLow2 === void 0
                          ? void 0
                          : (_input$toString$toLow3 =
                              _input$toString$toLow2.trim) === null ||
                            _input$toString$toLow3 === void 0
                          ? void 0
                          : _input$toString$toLow3.call(_input$toString$toLow2),
                      )) >= 0 || valueResult
                );
              },
              onChange: function onChange(value, option) {
                _onChange && _onChange(value, option);
                Array.isArray(onChangeList) &&
                  onChangeList.length &&
                  onChangeList.forEach(function (item) {
                    item(value, option);
                  });
              },
              placeholder: props.placeholder || '请选择一项',
              disabled: disabled || disabledButRequest,
            },
            props,
          ),
          {},
          {
            onClear: function onClear() {
              debounceGetList(searchParams(''));
              _onClear === null || _onClear === void 0
                ? void 0
                : _onClear(function (value) {
                    return debounceGetList(searchParams(value));
                  });
            },
          },
        ),
        Array.isArray(list) &&
          list.map(function (item) {
            return /*#__PURE__*/ React__default['default'].createElement(
              Option,
              _objectSpread2(
                _objectSpread2(
                  _objectSpread2({}, optionProps),
                  dynamicOptionProps(item),
                ),
                {},
                {
                  value: customValue
                    ? customValue(item)
                    : getResKey(optionValueKey, item),
                  key: getResKey(optionValueKey, item),
                  list: item,
                },
              ),
              (function (label) {
                return labelTooltip && inPopup
                  ? /*#__PURE__*/ React__default['default'].createElement(
                      _Tooltip__default['default'],
                      _objectSpread2(
                        {
                          title: label,
                          placement: 'topLeft',
                        },
                        labelTooltipOptions,
                      ),
                      label,
                    )
                  : label;
              })(
                customLabel
                  ? customLabel(item)
                  : getResKey(optionLabelKey, item),
              ),
            );
          }),
      ),
    ),
  );
});

var cityAll = [
  {
    value: '',
    label: '全部',
    areaCode: '000000',
    type: 'PROVINCE',
    municipality: true,
  },
  {
    value: '北京',
    label: '北京',
    areaCode: '110000',
    type: 'CITY',
    municipality: true,
  },
  {
    children: [
      {
        value: '东莞',
        label: '东莞',
        areaCode: '441900',
        type: 'CITY',
      },
      {
        value: '广州',
        label: '广州',
        areaCode: '440100',
        type: 'CITY',
      },
      {
        value: '中山',
        label: '中山',
        areaCode: '210202',
        type: 'CITY',
      },
      {
        value: '深圳',
        label: '深圳',
        areaCode: '440300',
        type: 'CITY',
      },
      {
        value: '惠州',
        label: '惠州',
        areaCode: '441300',
        type: 'CITY',
      },
      {
        value: '江门',
        label: '江门',
        areaCode: '440700',
        type: 'CITY',
      },
      {
        value: '珠海',
        label: '珠海',
        areaCode: '440400',
        type: 'CITY',
      },
      {
        value: '汕头',
        label: '汕头',
        areaCode: '440500',
        type: 'CITY',
      },
      {
        value: '佛山',
        label: '佛山',
        areaCode: '440600',
        type: 'CITY',
      },
      {
        value: '湛江',
        label: '湛江',
        areaCode: '440800',
        type: 'CITY',
      },
      {
        value: '河源',
        label: '河源',
        areaCode: '441600',
        type: 'CITY',
      },
      {
        value: '肇庆',
        label: '肇庆',
        areaCode: '441200',
        type: 'CITY',
      },
      {
        value: '清远',
        label: '清远',
        areaCode: '441800',
        type: 'CITY',
      },
      {
        value: '潮州',
        label: '潮州',
        areaCode: '445100',
        type: 'CITY',
      },
      {
        value: '韶关',
        label: '韶关',
        areaCode: '440200',
        type: 'CITY',
      },
      {
        value: '揭阳',
        label: '揭阳',
        areaCode: '445200',
        type: 'CITY',
      },
      {
        value: '阳江',
        label: '阳江',
        areaCode: '441700',
        type: 'CITY',
      },
      {
        value: '梅州',
        label: '梅州',
        areaCode: '441400',
        type: 'CITY',
      },
      {
        value: '云浮',
        label: '云浮',
        areaCode: '445300',
        type: 'CITY',
      },
      {
        value: '茂名',
        label: '茂名',
        areaCode: '440900',
        type: 'CITY',
      },
      {
        value: '汕尾',
        label: '汕尾',
        areaCode: '441500',
        type: 'CITY',
      },
    ],
    value: '广东',
    label: '广东',
    areaCode: '440000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '济南',
        label: '济南',
        areaCode: '370100',
        type: 'CITY',
      },
      {
        value: '青岛',
        label: '青岛',
        areaCode: '370200',
        type: 'CITY',
      },
      {
        value: '临沂',
        label: '临沂',
        areaCode: '371300',
        type: 'CITY',
      },
      {
        value: '济宁',
        label: '济宁',
        areaCode: '370800',
        type: 'CITY',
      },
      {
        value: '菏泽',
        label: '菏泽',
        type: 'CITY',
      },
      {
        value: '烟台',
        label: '烟台',
        areaCode: '370600',
        type: 'CITY',
      },
      {
        value: '淄博',
        label: '淄博',
        areaCode: '370300',
        type: 'CITY',
      },
      {
        value: '泰安',
        label: '泰安',
        areaCode: '370900',
        type: 'CITY',
      },
      {
        value: '潍坊',
        label: '潍坊',
        areaCode: '370700',
        type: 'CITY',
      },
      {
        value: '日照',
        label: '日照',
        areaCode: '371100',
        type: 'CITY',
      },
      {
        value: '威海',
        label: '威海',
        areaCode: '371000',
        type: 'CITY',
      },
      {
        value: '滨州',
        label: '滨州',
        areaCode: '371600',
        type: 'CITY',
      },
      {
        value: '东营',
        label: '东营',
        areaCode: '370500',
        type: 'CITY',
      },
      {
        value: '聊城',
        label: '聊城',
        areaCode: '371500',
        type: 'CITY',
      },
      {
        value: '德州',
        label: '德州',
        areaCode: '371400',
        type: 'CITY',
      },
      {
        value: '莱芜',
        label: '莱芜',
        areaCode: '371200',
        type: 'CITY',
      },
      {
        value: '枣庄',
        label: '枣庄',
        areaCode: '370400',
        type: 'CITY',
      },
    ],
    value: '山东',
    label: '山东',
    areaCode: '370000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '苏州',
        label: '苏州',
        areaCode: '320500',
        type: 'CITY',
      },
      {
        value: '徐州',
        label: '徐州',
        areaCode: '320300',
        type: 'CITY',
      },
      {
        value: '盐城',
        label: '盐城',
        areaCode: '320900',
        type: 'CITY',
      },
      {
        value: '无锡',
        label: '无锡',
        areaCode: '320200',
        type: 'CITY',
      },
      {
        value: '南京',
        label: '南京',
        areaCode: '320100',
        type: 'CITY',
      },
      {
        value: '南通',
        label: '南通',
        areaCode: '320600',
        type: 'CITY',
      },
      {
        value: '连云港',
        label: '连云港',
        areaCode: '320700',
        type: 'CITY',
      },
      {
        value: '常州',
        label: '常州',
        areaCode: '320400',
        type: 'CITY',
      },
      {
        value: '镇江',
        label: '镇江',
        areaCode: '321100',
        type: 'CITY',
      },
      {
        value: '扬州',
        label: '扬州',
        areaCode: '321000',
        type: 'CITY',
      },
      {
        value: '淮安',
        label: '淮安',
        areaCode: '320800',
        type: 'CITY',
      },
      {
        value: '泰州',
        label: '泰州',
        areaCode: '321200',
        type: 'CITY',
      },
      {
        value: '宿迁',
        label: '宿迁',
        areaCode: '321300',
        type: 'CITY',
      },
    ],
    value: '江苏',
    label: '江苏',
    areaCode: '320000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '郑州',
        label: '郑州',
        areaCode: '410100',
        type: 'CITY',
      },
      {
        value: '南阳',
        label: '南阳',
        areaCode: '411300',
        type: 'CITY',
      },
      {
        value: '新乡',
        label: '新乡',
        areaCode: '410700',
        type: 'CITY',
      },
      {
        value: '安阳',
        label: '安阳',
        areaCode: '410500',
        type: 'CITY',
      },
      {
        value: '洛阳',
        label: '洛阳',
        areaCode: '410300',
        type: 'CITY',
      },
      {
        value: '信阳',
        label: '信阳',
        areaCode: '411500',
        type: 'CITY',
      },
      {
        value: '平顶山',
        label: '平顶山',
        areaCode: '410400',
        type: 'CITY',
      },
      {
        value: '周口',
        label: '周口',
        areaCode: '411600',
        type: 'CITY',
      },
      {
        value: '商丘',
        label: '商丘',
        areaCode: '411400',
        type: 'CITY',
      },
      {
        value: '开封',
        label: '开封',
        areaCode: '410200',
        type: 'CITY',
      },
      {
        value: '焦作',
        label: '焦作',
        areaCode: '410800',
        type: 'CITY',
      },
      {
        value: '驻马店',
        label: '驻马店',
        areaCode: '411700',
        type: 'CITY',
      },
      {
        value: '濮阳',
        label: '濮阳',
        areaCode: '410900',
        type: 'CITY',
      },
      {
        value: '三门峡',
        label: '三门峡',
        areaCode: '411200',
        type: 'CITY',
      },
      {
        value: '漯河',
        label: '漯河',
        areaCode: '411100',
        type: 'CITY',
      },
      {
        value: '许昌',
        label: '许昌',
        areaCode: '411000',
        type: 'CITY',
      },
      {
        value: '鹤壁',
        label: '鹤壁',
        areaCode: '410600',
        type: 'CITY',
      },
      {
        value: '济源',
        label: '济源',
        areaCode: '410881',
        type: 'CITY',
      },
    ],
    value: '河南',
    label: '河南',
    areaCode: '410000',
    type: 'PROVINCE',
  },
  {
    value: '上海',
    label: '上海',
    areaCode: '310000',
    type: 'CITY',
    municipality: true,
  },
  {
    children: [
      {
        value: '石家庄',
        label: '石家庄',
        areaCode: '130100',
        type: 'CITY',
      },
      {
        value: '唐山',
        label: '唐山',
        areaCode: '130200',
        type: 'CITY',
      },
      {
        value: '保定',
        label: '保定',
        areaCode: '130600',
        type: 'CITY',
      },
      {
        value: '邯郸',
        label: '邯郸',
        areaCode: '130400',
        type: 'CITY',
      },
      {
        value: '邢台',
        label: '邢台',
        areaCode: '130500',
        type: 'CITY',
      },
      {
        value: '河北',
        label: '河北',
        areaCode: '120105',
        type: 'CITY',
      },
      {
        value: '沧州',
        label: '沧州',
        areaCode: '130900',
        type: 'CITY',
      },
      {
        value: '秦皇岛',
        label: '秦皇岛',
        areaCode: '130300',
        type: 'CITY',
      },
      {
        value: '张家口',
        label: '张家口',
        areaCode: '130700',
        type: 'CITY',
      },
      {
        value: '衡水',
        label: '衡水',
        areaCode: '131100',
        type: 'CITY',
      },
      {
        value: '廊坊',
        label: '廊坊',
        areaCode: '131000',
        type: 'CITY',
      },
      {
        value: '承德',
        label: '承德',
        areaCode: '130800',
        type: 'CITY',
      },
    ],
    value: '河北',
    label: '河北',
    areaCode: '120105',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '温州',
        label: '温州',
        areaCode: '330300',
        type: 'CITY',
      },
      {
        value: '宁波',
        label: '宁波',
        areaCode: '330200',
        type: 'CITY',
      },
      {
        value: '杭州',
        label: '杭州',
        areaCode: '330100',
        type: 'CITY',
      },
      {
        value: '台州',
        label: '台州',
        areaCode: '331000',
        type: 'CITY',
      },
      {
        value: '嘉兴',
        label: '嘉兴',
        areaCode: '330400',
        type: 'CITY',
      },
      {
        value: '金华',
        label: '金华',
        areaCode: '330700',
        type: 'CITY',
      },
      {
        value: '湖州',
        label: '湖州',
        areaCode: '330500',
        type: 'CITY',
      },
      {
        value: '绍兴',
        label: '绍兴',
        areaCode: '330600',
        type: 'CITY',
      },
      {
        value: '舟山',
        label: '舟山',
        areaCode: '330900',
        type: 'CITY',
      },
      {
        value: '丽水',
        label: '丽水',
        areaCode: '331100',
        type: 'CITY',
      },
      {
        value: '衢州',
        label: '衢州',
        areaCode: '330800',
        type: 'CITY',
      },
    ],
    value: '浙江',
    label: '浙江',
    areaCode: '330000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '西安',
        label: '西安',
        areaCode: '220403',
        type: 'CITY',
      },
      {
        value: '咸阳',
        label: '咸阳',
        areaCode: '610400',
        type: 'CITY',
      },
      {
        value: '宝鸡',
        label: '宝鸡',
        areaCode: '610300',
        type: 'CITY',
      },
      {
        value: '汉中',
        label: '汉中',
        areaCode: '610700',
        type: 'CITY',
      },
      {
        value: '渭南',
        label: '渭南',
        areaCode: '610500',
        type: 'CITY',
      },
      {
        value: '安康',
        label: '安康',
        areaCode: '610900',
        type: 'CITY',
      },
      {
        value: '榆林',
        label: '榆林',
        areaCode: '610800',
        type: 'CITY',
      },
      {
        value: '商洛',
        label: '商洛',
        areaCode: '611000',
        type: 'CITY',
      },
      {
        value: '延安',
        label: '延安',
        areaCode: '610600',
        type: 'CITY',
      },
      {
        value: '铜川',
        label: '铜川',
        areaCode: '610200',
        type: 'CITY',
      },
    ],
    value: '陕西',
    label: '陕西',
    areaCode: '610000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '长沙',
        label: '长沙',
        areaCode: '430100',
        type: 'CITY',
      },
      {
        value: '邵阳',
        label: '邵阳',
        areaCode: '430500',
        type: 'CITY',
      },
      {
        value: '常德',
        label: '常德',
        areaCode: '430700',
        type: 'CITY',
      },
      {
        value: '衡阳',
        label: '衡阳',
        areaCode: '430400',
        type: 'CITY',
      },
      {
        value: '株洲',
        label: '株洲',
        areaCode: '430200',
        type: 'CITY',
      },
      {
        value: '湘潭',
        label: '湘潭',
        areaCode: '430300',
        type: 'CITY',
      },
      {
        value: '永州',
        label: '永州',
        areaCode: '431100',
        type: 'CITY',
      },
      {
        value: '岳阳',
        label: '岳阳',
        areaCode: '430600',
        type: 'CITY',
      },
      {
        value: '怀化',
        label: '怀化',
        areaCode: '431200',
        type: 'CITY',
      },
      {
        value: '郴州',
        label: '郴州',
        areaCode: '431000',
        type: 'CITY',
      },
      {
        value: '娄底',
        label: '娄底',
        areaCode: '431300',
        type: 'CITY',
      },
      {
        value: '益阳',
        label: '益阳',
        areaCode: '430900',
        type: 'CITY',
      },
      {
        value: '张家界',
        label: '张家界',
        areaCode: '430800',
        type: 'CITY',
      },
      {
        value: '湘西',
        label: '湘西',
        areaCode: '433100',
        type: 'CITY',
      },
    ],
    value: '湖南',
    label: '湖南',
    areaCode: '430000',
    type: 'PROVINCE',
  },
  {
    value: '重庆',
    label: '重庆',
    areaCode: '500000',
    type: 'CITY',
    municipality: true,
  },
  {
    children: [
      {
        value: '漳州',
        label: '漳州',
        areaCode: '350600',
        type: 'CITY',
      },
      {
        value: '厦门',
        label: '厦门',
        areaCode: '350200',
        type: 'CITY',
      },
      {
        value: '泉州',
        label: '泉州',
        areaCode: '350500',
        type: 'CITY',
      },
      {
        value: '福州',
        label: '福州',
        areaCode: '350100',
        type: 'CITY',
      },
      {
        value: '莆田',
        label: '莆田',
        areaCode: '350300',
        type: 'CITY',
      },
      {
        value: '宁德',
        label: '宁德',
        areaCode: '350900',
        type: 'CITY',
      },
      {
        value: '三明',
        label: '三明',
        areaCode: '350400',
        type: 'CITY',
      },
      {
        value: '南平',
        label: '南平',
        areaCode: '350700',
        type: 'CITY',
      },
      {
        value: '龙岩',
        label: '龙岩',
        areaCode: '350800',
        type: 'CITY',
      },
    ],
    value: '福建',
    label: '福建',
    areaCode: '350000',
    type: 'PROVINCE',
  },
  {
    value: '天津',
    label: '天津',
    areaCode: '120000',
    type: 'CITY',
    municipality: true,
  },
  {
    children: [
      {
        value: '昆明',
        label: '昆明',
        areaCode: '530100',
        type: 'CITY',
      },
      {
        value: '红河',
        label: '红河',
        areaCode: '532500',
        type: 'CITY',
      },
      {
        value: '大理',
        label: '大理',
        areaCode: '532900',
        type: 'CITY',
      },
      {
        value: '文山',
        label: '文山',
        areaCode: '532600',
        type: 'CITY',
      },
      {
        value: '德宏',
        label: '德宏',
        areaCode: '533100',
        type: 'CITY',
      },
      {
        value: '曲靖',
        label: '曲靖',
        areaCode: '530300',
        type: 'CITY',
      },
      {
        value: '昭通',
        label: '昭通',
        areaCode: '530600',
        type: 'CITY',
      },
      {
        value: '楚雄',
        label: '楚雄',
        areaCode: '532300',
        type: 'CITY',
      },
      {
        value: '保山',
        label: '保山',
        areaCode: '530500',
        type: 'CITY',
      },
      {
        value: '玉溪',
        label: '玉溪',
        areaCode: '530400',
        type: 'CITY',
      },
      {
        value: '丽江',
        label: '丽江',
        areaCode: '530700',
        type: 'CITY',
      },
      {
        value: '临沧',
        label: '临沧',
        areaCode: '530900',
        type: 'CITY',
      },
      {
        value: '思茅',
        label: '思茅',
        areaCode: '530800',
        type: 'CITY',
      },
      {
        value: '西双版纳',
        label: '西双版纳',
        areaCode: '532800',
        type: 'CITY',
      },
      {
        value: '怒江',
        label: '怒江',
        areaCode: '533300',
        type: 'CITY',
      },
      {
        value: '迪庆',
        label: '迪庆',
        areaCode: '533400',
        type: 'CITY',
      },
    ],
    value: '云南',
    label: '云南',
    areaCode: '530000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '成都',
        label: '成都',
        areaCode: '510100',
        type: 'CITY',
      },
      {
        value: '绵阳',
        label: '绵阳',
        areaCode: '510700',
        type: 'CITY',
      },
      {
        value: '广元',
        label: '广元',
        areaCode: '510800',
        type: 'CITY',
      },
      {
        value: '达州',
        label: '达州',
        areaCode: '511700',
        type: 'CITY',
      },
      {
        value: '南充',
        label: '南充',
        areaCode: '511300',
        type: 'CITY',
      },
      {
        value: '德阳',
        label: '德阳',
        areaCode: '510600',
        type: 'CITY',
      },
      {
        value: '广安',
        label: '广安',
        areaCode: '511600',
        type: 'CITY',
      },
      {
        value: '阿坝',
        label: '阿坝',
        areaCode: '513200',
        type: 'CITY',
      },
      {
        value: '巴中',
        label: '巴中',
        areaCode: '511900',
        type: 'CITY',
      },
      {
        value: '遂宁',
        label: '遂宁',
        areaCode: '510900',
        type: 'CITY',
      },
      {
        value: '内江',
        label: '内江',
        areaCode: '511000',
        type: 'CITY',
      },
      {
        value: '凉山',
        label: '凉山',
        areaCode: '513400',
        type: 'CITY',
      },
      {
        value: '攀枝花',
        label: '攀枝花',
        areaCode: '510400',
        type: 'CITY',
      },
      {
        value: '乐山',
        label: '乐山',
        areaCode: '511100',
        type: 'CITY',
      },
      {
        value: '自贡',
        label: '自贡',
        areaCode: '510300',
        type: 'CITY',
      },
      {
        value: '泸州',
        label: '泸州',
        areaCode: '510500',
        type: 'CITY',
      },
      {
        value: '雅安',
        label: '雅安',
        areaCode: '511800',
        type: 'CITY',
      },
      {
        value: '宜宾',
        label: '宜宾',
        areaCode: '511500',
        type: 'CITY',
      },
      {
        value: '资阳',
        label: '资阳',
        areaCode: '430902',
        type: 'CITY',
      },
      {
        value: '眉山',
        label: '眉山',
        areaCode: '511400',
        type: 'CITY',
      },
      {
        value: '甘孜',
        label: '甘孜',
        areaCode: '513300',
        type: 'CITY',
      },
    ],
    value: '四川',
    label: '四川',
    areaCode: '510000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '贵港',
        label: '贵港',
        areaCode: '450800',
        type: 'CITY',
      },
      {
        value: '玉林',
        label: '玉林',
        areaCode: '450900',
        type: 'CITY',
      },
      {
        value: '北海',
        label: '北海',
        areaCode: '450500',
        type: 'CITY',
      },
      {
        value: '南宁',
        label: '南宁',
        areaCode: '450100',
        type: 'CITY',
      },
      {
        value: '柳州',
        label: '柳州',
        areaCode: '450200',
        type: 'CITY',
      },
      {
        value: '桂林',
        label: '桂林',
        areaCode: '450300',
        type: 'CITY',
      },
      {
        value: '梧州',
        label: '梧州',
        areaCode: '450400',
        type: 'CITY',
      },
      {
        value: '钦州',
        label: '钦州',
        areaCode: '450700',
        type: 'CITY',
      },
      {
        value: '来宾',
        label: '来宾',
        areaCode: '451300',
        type: 'CITY',
      },
      {
        value: '河池',
        label: '河池',
        areaCode: '451200',
        type: 'CITY',
      },
      {
        value: '百色',
        label: '百色',
        areaCode: '451000',
        type: 'CITY',
      },
      {
        value: '贺州',
        label: '贺州',
        areaCode: '451100',
        type: 'CITY',
      },
      {
        value: '崇左',
        label: '崇左',
        areaCode: '451400',
        type: 'CITY',
      },
      {
        value: '防城港',
        label: '防城港',
        areaCode: '450600',
        type: 'CITY',
      },
    ],
    value: '广西',
    label: '广西',
    areaCode: '450000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '芜湖',
        label: '芜湖',
        areaCode: '340200',
        type: 'CITY',
      },
      {
        value: '合肥',
        label: '合肥',
        areaCode: '340100',
        type: 'CITY',
      },
      {
        value: '六安',
        label: '六安',
        areaCode: '341500',
        type: 'CITY',
      },
      {
        value: '宿州',
        label: '宿州',
        areaCode: '341300',
        type: 'CITY',
      },
      {
        value: '阜阳',
        label: '阜阳',
        areaCode: '341200',
        type: 'CITY',
      },
      {
        value: '安庆',
        label: '安庆',
        areaCode: '340800',
        type: 'CITY',
      },
      {
        value: '马鞍山',
        label: '马鞍山',
        areaCode: '340500',
        type: 'CITY',
      },
      {
        value: '蚌埠',
        label: '蚌埠',
        areaCode: '340300',
        type: 'CITY',
      },
      {
        value: '淮北',
        label: '淮北',
        areaCode: '340600',
        type: 'CITY',
      },
      {
        value: '淮南',
        label: '淮南',
        areaCode: '340400',
        type: 'CITY',
      },
      {
        value: '宣城',
        label: '宣城',
        areaCode: '341800',
        type: 'CITY',
      },
      {
        value: '黄山',
        label: '黄山',
        areaCode: '341000',
        type: 'CITY',
      },
      {
        value: '铜陵',
        label: '铜陵',
        areaCode: '340700',
        type: 'CITY',
      },
      {
        value: '亳州',
        label: '亳州',
        areaCode: '341600',
        type: 'CITY',
      },
      {
        value: '池州',
        label: '池州',
        areaCode: '341700',
        type: 'CITY',
      },
      {
        value: '巢湖',
        label: '巢湖',
        areaCode: '341400',
        type: 'CITY',
      },
      {
        value: '滁州',
        label: '滁州',
        areaCode: '341100',
        type: 'CITY',
      },
    ],
    value: '安徽',
    label: '安徽',
    areaCode: '340000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '三亚',
        label: '三亚',
        areaCode: '460200',
        type: 'CITY',
      },
      {
        value: '海口',
        label: '海口',
        areaCode: '460100',
        type: 'CITY',
      },
      {
        value: '琼海',
        label: '琼海',
        areaCode: '469002',
        type: 'CITY',
      },
      {
        value: '文昌',
        label: '文昌',
        areaCode: '469005',
        type: 'CITY',
      },
      {
        value: '东方',
        label: '东方',
        areaCode: '469007',
        type: 'CITY',
      },
      {
        value: '昌江',
        label: '昌江',
        areaCode: '360202',
        type: 'CITY',
      },
      {
        value: '陵水',
        label: '陵水',
        type: 'CITY',
      },
      {
        value: '乐东',
        label: '乐东',
        type: 'CITY',
      },
      {
        value: '保亭',
        label: '保亭',
        type: 'CITY',
      },
      {
        value: '五指山',
        label: '五指山',
        areaCode: '469001',
        type: 'CITY',
      },
      {
        value: '澄迈',
        label: '澄迈',
        type: 'CITY',
      },
      {
        value: '万宁',
        label: '万宁',
        areaCode: '469006',
        type: 'CITY',
      },
      {
        value: '儋州',
        label: '儋州',
        areaCode: '469003',
        type: 'CITY',
      },
      {
        value: '临高',
        label: '临高',
        type: 'CITY',
      },
      {
        value: '白沙',
        label: '白沙',
        type: 'CITY',
      },
      {
        value: '定安',
        label: '定安',
        type: 'CITY',
      },
      {
        value: '琼中',
        label: '琼中',
        type: 'CITY',
      },
      {
        value: '屯昌',
        label: '屯昌',
        type: 'CITY',
      },
    ],
    value: '海南',
    label: '海南',
    areaCode: '150303',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '南昌',
        label: '南昌',
        areaCode: '360100',
        type: 'CITY',
      },
      {
        value: '赣州',
        label: '赣州',
        areaCode: '360700',
        type: 'CITY',
      },
      {
        value: '上饶',
        label: '上饶',
        areaCode: '361100',
        type: 'CITY',
      },
      {
        value: '吉安',
        label: '吉安',
        areaCode: '360800',
        type: 'CITY',
      },
      {
        value: '九江',
        label: '九江',
        areaCode: '360400',
        type: 'CITY',
      },
      {
        value: '新余',
        label: '新余',
        areaCode: '360500',
        type: 'CITY',
      },
      {
        value: '抚州',
        label: '抚州',
        areaCode: '361000',
        type: 'CITY',
      },
      {
        value: '宜春',
        label: '宜春',
        areaCode: '360900',
        type: 'CITY',
      },
      {
        value: '景德镇',
        label: '景德镇',
        areaCode: '360200',
        type: 'CITY',
      },
      {
        value: '萍乡',
        label: '萍乡',
        areaCode: '360300',
        type: 'CITY',
      },
      {
        value: '鹰潭',
        label: '鹰潭',
        areaCode: '360600',
        type: 'CITY',
      },
    ],
    value: '江西',
    label: '江西',
    areaCode: '360000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '武汉',
        label: '武汉',
        areaCode: '420100',
        type: 'CITY',
      },
      {
        value: '宜昌',
        label: '宜昌',
        areaCode: '420500',
        type: 'CITY',
      },
      {
        value: '襄樊',
        label: '襄樊',
        areaCode: '420600',
        type: 'CITY',
      },
      {
        value: '荆州',
        label: '荆州',
        areaCode: '421000',
        type: 'CITY',
      },
      {
        value: '恩施',
        label: '恩施',
        areaCode: '422800',
        type: 'CITY',
      },
      {
        value: '黄冈',
        label: '黄冈',
        areaCode: '421100',
        type: 'CITY',
      },
      {
        value: '孝感',
        label: '孝感',
        areaCode: '420900',
        type: 'CITY',
      },
      {
        value: '十堰',
        label: '十堰',
        areaCode: '420300',
        type: 'CITY',
      },
      {
        value: '咸宁',
        label: '咸宁',
        areaCode: '421200',
        type: 'CITY',
      },
      {
        value: '黄石',
        label: '黄石',
        areaCode: '420200',
        type: 'CITY',
      },
      {
        value: '仙桃',
        label: '仙桃',
        areaCode: '429004',
        type: 'CITY',
      },
      {
        value: '天门',
        label: '天门',
        areaCode: '429006',
        type: 'CITY',
      },
      {
        value: '随州',
        label: '随州',
        areaCode: '421300',
        type: 'CITY',
      },
      {
        value: '荆门',
        label: '荆门',
        areaCode: '420800',
        type: 'CITY',
      },
      {
        value: '潜江',
        label: '潜江',
        areaCode: '429005',
        type: 'CITY',
      },
      {
        value: '鄂州',
        label: '鄂州',
        areaCode: '420700',
        type: 'CITY',
      },
      {
        value: '神农架',
        label: '神农架',
        areaCode: '429021',
        type: 'CITY',
      },
    ],
    value: '湖北',
    label: '湖北',
    areaCode: '420000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '太原',
        label: '太原',
        areaCode: '140100',
        type: 'CITY',
      },
      {
        value: '大同',
        label: '大同',
        areaCode: '140200',
        type: 'CITY',
      },
      {
        value: '运城',
        label: '运城',
        areaCode: '140800',
        type: 'CITY',
      },
      {
        value: '长治',
        label: '长治',
        areaCode: '140400',
        type: 'CITY',
      },
      {
        value: '晋城',
        label: '晋城',
        areaCode: '140500',
        type: 'CITY',
      },
      {
        value: '忻州',
        label: '忻州',
        areaCode: '140900',
        type: 'CITY',
      },
      {
        value: '临汾',
        label: '临汾',
        areaCode: '141000',
        type: 'CITY',
      },
      {
        value: '吕梁',
        label: '吕梁',
        areaCode: '141100',
        type: 'CITY',
      },
      {
        value: '晋中',
        label: '晋中',
        areaCode: '140700',
        type: 'CITY',
      },
      {
        value: '阳泉',
        label: '阳泉',
        areaCode: '140300',
        type: 'CITY',
      },
      {
        value: '朔州',
        label: '朔州',
        areaCode: '140600',
        type: 'CITY',
      },
    ],
    value: '山西',
    label: '山西',
    areaCode: '140000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '大连',
        label: '大连',
        areaCode: '210200',
        type: 'CITY',
      },
      {
        value: '沈阳',
        label: '沈阳',
        areaCode: '210100',
        type: 'CITY',
      },
      {
        value: '丹东',
        label: '丹东',
        areaCode: '210600',
        type: 'CITY',
      },
      {
        value: '辽阳',
        label: '辽阳',
        areaCode: '211000',
        type: 'CITY',
      },
      {
        value: '葫芦岛',
        label: '葫芦岛',
        areaCode: '211400',
        type: 'CITY',
      },
      {
        value: '锦州',
        label: '锦州',
        areaCode: '210700',
        type: 'CITY',
      },
      {
        value: '朝阳',
        label: '朝阳',
        areaCode: '110105',
        type: 'CITY',
      },
      {
        value: '营口',
        label: '营口',
        areaCode: '210800',
        type: 'CITY',
      },
      {
        value: '鞍山',
        label: '鞍山',
        areaCode: '210300',
        type: 'CITY',
      },
      {
        value: '抚顺',
        label: '抚顺',
        areaCode: '210400',
        type: 'CITY',
      },
      {
        value: '阜新',
        label: '阜新',
        areaCode: '210900',
        type: 'CITY',
      },
      {
        value: '盘锦',
        label: '盘锦',
        areaCode: '211100',
        type: 'CITY',
      },
      {
        value: '本溪',
        label: '本溪',
        areaCode: '210500',
        type: 'CITY',
      },
      {
        value: '铁岭',
        label: '铁岭',
        areaCode: '211200',
        type: 'CITY',
      },
    ],
    value: '辽宁',
    label: '辽宁',
    areaCode: '210000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '台北',
        label: '台北',
        type: 'CITY',
      },
      {
        value: '高雄',
        label: '高雄',
        type: 'CITY',
      },
      {
        value: '台中',
        label: '台中',
        type: 'CITY',
      },
      {
        value: '新竹',
        label: '新竹',
        type: 'CITY',
      },
      {
        value: '基隆',
        label: '基隆',
        type: 'CITY',
      },
      {
        value: '台南',
        label: '台南',
        type: 'CITY',
      },
      {
        value: '嘉义',
        label: '嘉义',
        type: 'CITY',
      },
    ],
    value: '台湾',
    label: '台湾',
    areaCode: '710000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '齐齐哈尔',
        label: '齐齐哈尔',
        areaCode: '230200',
        type: 'CITY',
      },
      {
        value: '哈尔滨',
        label: '哈尔滨',
        areaCode: '230100',
        type: 'CITY',
      },
      {
        value: '大庆',
        label: '大庆',
        areaCode: '230600',
        type: 'CITY',
      },
      {
        value: '佳木斯',
        label: '佳木斯',
        areaCode: '230800',
        type: 'CITY',
      },
      {
        value: '双鸭山',
        label: '双鸭山',
        areaCode: '230500',
        type: 'CITY',
      },
      {
        value: '牡丹江',
        label: '牡丹江',
        areaCode: '231000',
        type: 'CITY',
      },
      {
        value: '鸡西',
        label: '鸡西',
        areaCode: '230300',
        type: 'CITY',
      },
      {
        value: '黑河',
        label: '黑河',
        areaCode: '231100',
        type: 'CITY',
      },
      {
        value: '绥化',
        label: '绥化',
        areaCode: '231200',
        type: 'CITY',
      },
      {
        value: '鹤岗',
        label: '鹤岗',
        areaCode: '230400',
        type: 'CITY',
      },
      {
        value: '伊春',
        label: '伊春',
        areaCode: '230700',
        type: 'CITY',
      },
      {
        value: '大兴安岭',
        label: '大兴安岭',
        areaCode: '232700',
        type: 'CITY',
      },
      {
        value: '七台河',
        label: '七台河',
        areaCode: '230900',
        type: 'CITY',
      },
    ],
    value: '黑龙江',
    label: '黑龙江',
    areaCode: '230000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '赤峰',
        label: '赤峰',
        areaCode: '150400',
        type: 'CITY',
      },
      {
        value: '包头',
        label: '包头',
        areaCode: '150200',
        type: 'CITY',
      },
      {
        value: '通辽',
        label: '通辽',
        areaCode: '150500',
        type: 'CITY',
      },
      {
        value: '呼和浩特',
        label: '呼和浩特',
        areaCode: '150100',
        type: 'CITY',
      },
      {
        value: '鄂尔多斯',
        label: '鄂尔多斯',
        areaCode: '150600',
        type: 'CITY',
      },
      {
        value: '乌海',
        label: '乌海',
        areaCode: '150300',
        type: 'CITY',
      },
      {
        value: '呼伦贝尔',
        label: '呼伦贝尔',
        areaCode: '150700',
        type: 'CITY',
      },
      {
        value: '兴安盟',
        label: '兴安盟',
        areaCode: '152200',
        type: 'CITY',
      },
      {
        value: '巴彦淖尔盟',
        label: '巴彦淖尔盟',
        type: 'CITY',
      },
      {
        value: '乌兰察布盟',
        label: '乌兰察布盟',
        type: 'CITY',
      },
      {
        value: '锡林郭勒盟',
        label: '锡林郭勒盟',
        areaCode: '152500',
        type: 'CITY',
      },
      {
        value: '阿拉善盟',
        label: '阿拉善盟',
        areaCode: '152900',
        type: 'CITY',
      },
    ],
    value: '内蒙古',
    label: '内蒙古',
    areaCode: '150000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '贵阳',
        label: '贵阳',
        areaCode: '520100',
        type: 'CITY',
      },
      {
        value: '黔东南',
        label: '黔东南',
        areaCode: '522600',
        type: 'CITY',
      },
      {
        value: '黔南',
        label: '黔南',
        areaCode: '522700',
        type: 'CITY',
      },
      {
        value: '遵义',
        label: '遵义',
        areaCode: '520300',
        type: 'CITY',
      },
      {
        value: '黔西南',
        label: '黔西南',
        areaCode: '522300',
        type: 'CITY',
      },
      {
        value: '毕节',
        label: '毕节',
        areaCode: '522400',
        type: 'CITY',
      },
      {
        value: '铜仁',
        label: '铜仁',
        areaCode: '522200',
        type: 'CITY',
      },
      {
        value: '安顺',
        label: '安顺',
        areaCode: '520400',
        type: 'CITY',
      },
      {
        value: '六盘水',
        label: '六盘水',
        areaCode: '520200',
        type: 'CITY',
      },
    ],
    value: '贵州',
    label: '贵州',
    areaCode: '520000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '兰州',
        label: '兰州',
        areaCode: '620100',
        type: 'CITY',
      },
      {
        value: '天水',
        label: '天水',
        areaCode: '620500',
        type: 'CITY',
      },
      {
        value: '庆阳',
        label: '庆阳',
        areaCode: '621000',
        type: 'CITY',
      },
      {
        value: '武威',
        label: '武威',
        areaCode: '620600',
        type: 'CITY',
      },
      {
        value: '酒泉',
        label: '酒泉',
        areaCode: '620900',
        type: 'CITY',
      },
      {
        value: '张掖',
        label: '张掖',
        areaCode: '620700',
        type: 'CITY',
      },
      {
        value: '陇南',
        label: '陇南',
        areaCode: '621200',
        type: 'CITY',
      },
      {
        value: '白银',
        label: '白银',
        areaCode: '620400',
        type: 'CITY',
      },
      {
        value: '定西',
        label: '定西',
        areaCode: '621100',
        type: 'CITY',
      },
      {
        value: '平凉',
        label: '平凉',
        areaCode: '620800',
        type: 'CITY',
      },
      {
        value: '嘉峪关',
        label: '嘉峪关',
        areaCode: '620200',
        type: 'CITY',
      },
      {
        value: '临夏',
        label: '临夏',
        areaCode: '622900',
        type: 'CITY',
      },
      {
        value: '金昌',
        label: '金昌',
        areaCode: '620300',
        type: 'CITY',
      },
      {
        value: '甘南',
        label: '甘南',
        areaCode: '623000',
        type: 'CITY',
      },
    ],
    value: '甘肃',
    label: '甘肃',
    areaCode: '620000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '西宁',
        label: '西宁',
        areaCode: '630100',
        type: 'CITY',
      },
      {
        value: '海西',
        label: '海西',
        areaCode: '632800',
        type: 'CITY',
      },
      {
        value: '海东',
        label: '海东',
        areaCode: '632100',
        type: 'CITY',
      },
      {
        value: '海北',
        label: '海北',
        areaCode: '632200',
        type: 'CITY',
      },
      {
        value: '果洛',
        label: '果洛',
        areaCode: '632600',
        type: 'CITY',
      },
      {
        value: '玉树',
        label: '玉树',
        areaCode: '632700',
        type: 'CITY',
      },
      {
        value: '黄南',
        label: '黄南',
        areaCode: '632300',
        type: 'CITY',
      },
    ],
    value: '青海',
    label: '青海',
    areaCode: '630000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '乌鲁木齐',
        label: '乌鲁木齐',
        areaCode: '650100',
        type: 'CITY',
      },
      {
        value: '伊犁',
        label: '伊犁',
        areaCode: '654000',
        type: 'CITY',
      },
      {
        value: '昌吉',
        label: '昌吉',
        areaCode: '652300',
        type: 'CITY',
      },
      {
        value: '石河子',
        label: '石河子',
        areaCode: '659001',
        type: 'CITY',
      },
      {
        value: '哈密',
        label: '哈密',
        areaCode: '652200',
        type: 'CITY',
      },
      {
        value: '阿克苏',
        label: '阿克苏',
        areaCode: '652900',
        type: 'CITY',
      },
      {
        value: '巴音郭楞',
        label: '巴音郭楞',
        areaCode: '652800',
        type: 'CITY',
      },
      {
        value: '喀什',
        label: '喀什',
        areaCode: '653100',
        type: 'CITY',
      },
      {
        value: '塔城',
        label: '塔城',
        areaCode: '654200',
        type: 'CITY',
      },
      {
        value: '克拉玛依',
        label: '克拉玛依',
        areaCode: '650200',
        type: 'CITY',
      },
      {
        value: '和田',
        label: '和田',
        areaCode: '653200',
        type: 'CITY',
      },
      {
        value: '阿勒泰',
        label: '阿勒泰',
        areaCode: '654300',
        type: 'CITY',
      },
      {
        value: '吐鲁番',
        label: '吐鲁番',
        areaCode: '652100',
        type: 'CITY',
      },
      {
        value: '阿拉尔',
        label: '阿拉尔',
        areaCode: '659002',
        type: 'CITY',
      },
      {
        value: '博尔塔拉',
        label: '博尔塔拉',
        areaCode: '652700',
        type: 'CITY',
      },
      {
        value: '五家渠',
        label: '五家渠',
        areaCode: '659004',
        type: 'CITY',
      },
      {
        value: '克孜勒苏',
        label: '克孜勒苏',
        areaCode: '653000',
        type: 'CITY',
      },
      {
        value: '图木舒克',
        label: '图木舒克',
        areaCode: '659003',
        type: 'CITY',
      },
    ],
    value: '新疆',
    label: '新疆',
    areaCode: '650000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '拉萨',
        label: '拉萨',
        areaCode: '540100',
        type: 'CITY',
      },
      {
        value: '山南',
        label: '山南',
        areaCode: '542200',
        type: 'CITY',
      },
      {
        value: '林芝',
        label: '林芝',
        areaCode: '542600',
        type: 'CITY',
      },
      {
        value: '日喀则',
        label: '日喀则',
        areaCode: '542300',
        type: 'CITY',
      },
      {
        value: '阿里',
        label: '阿里',
        areaCode: '542500',
        type: 'CITY',
      },
      {
        value: '昌都',
        label: '昌都',
        areaCode: '542100',
        type: 'CITY',
      },
      {
        value: '那曲',
        label: '那曲',
        areaCode: '542400',
        type: 'CITY',
      },
    ],
    value: '西藏',
    label: '西藏',
    areaCode: '540000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '长春',
        label: '长春',
        areaCode: '220100',
        type: 'CITY',
      },
      {
        value: '白山',
        label: '白山',
        areaCode: '220600',
        type: 'CITY',
      },
      {
        value: '延边',
        label: '延边',
        areaCode: '222400',
        type: 'CITY',
      },
      {
        value: '白城',
        label: '白城',
        areaCode: '220800',
        type: 'CITY',
      },
      {
        value: '松原',
        label: '松原',
        areaCode: '220700',
        type: 'CITY',
      },
      {
        value: '辽源',
        label: '辽源',
        areaCode: '220400',
        type: 'CITY',
      },
      {
        value: '通化',
        label: '通化',
        areaCode: '220500',
        type: 'CITY',
      },
      {
        value: '四平',
        label: '四平',
        areaCode: '220300',
        type: 'CITY',
      },
      {
        value: '吉林',
        label: '吉林',
        areaCode: '220000',
        type: 'CITY',
      },
    ],
    value: '吉林',
    label: '吉林',
    areaCode: '220000',
    type: 'PROVINCE',
  },
  {
    children: [
      {
        value: '银川',
        label: '银川',
        areaCode: '640100',
        type: 'CITY',
      },
      {
        value: '吴忠',
        label: '吴忠',
        areaCode: '640300',
        type: 'CITY',
      },
      {
        value: '中卫',
        label: '中卫',
        areaCode: '640500',
        type: 'CITY',
      },
      {
        value: '石嘴山',
        label: '石嘴山',
        areaCode: '640200',
        type: 'CITY',
      },
      {
        value: '固原',
        label: '固原',
        areaCode: '640400',
        type: 'CITY',
      },
    ],
    value: '宁夏',
    label: '宁夏',
    areaCode: '640000',
    type: 'PROVINCE',
  },
  {
    value: '香港',
    label: '香港',
    areaCode: '810000',
    type: 'CITY',
    municipality: true,
  },
  {
    value: '澳门',
    label: '澳门',
    areaCode: '820000',
    type: 'CITY',
    municipality: true,
  },
  {
    label: '海外',
    value: '海外',
  },
  // {
  //   label: '日本',
  //   value: '日本',
  // },
  // {
  //   label: '新加坡',
  //   value: '新加坡',
  // },
  // {
  //   label: '菲律宾',
  //   value: '菲律宾',
  // },
  // {
  //   label: '沙特阿拉伯',
  //   value: '沙特阿拉伯',
  // },
  // {
  //   label: '朝鲜',
  //   value: '朝鲜',
  // },
  // {
  //   label: '越南',
  //   value: '越南',
  // },
  // {
  //   label: '缅甸',
  //   value: '缅甸',
  // },
  // {
  //   label: '德国',
  //   value: '德国',
  // },
  // {
  //   label: '英国',
  //   value: '英国',
  // },
  // {
  //   label: '法国',
  //   value: '法国',
  // },
  // {
  //   label: '爱尔兰',
  //   value: '爱尔兰',
  // },
  // {
  //   label: '波兰',
  //   value: '波兰',
  // },
  // {
  //   label: '西班牙',
  //   value: '西班牙',
  // },
  // {
  //   label: '意大利',
  //   value: '意大利',
  // },
  // {
  //   label: '俄罗斯',
  //   value: '俄罗斯',
  // },
  // {
  //   label: '荷兰',
  //   value: '荷兰',
  // },
  // {
  //   label: '美国',
  //   value: '美国',
  // },
  // {
  //   label: '加拿大',
  //   value: '加拿大',
  // },
  // {
  //   label: '巴西',
  //   value: '巴西',
  // },
  // {
  //   label: '阿根廷',
  //   value: '阿根廷',
  // },
  // {
  //   label: '新西兰',
  //   value: '新西兰',
  // },
  // {
  //   label: '澳大利亚',
  //   value: '澳大利亚',
  // },
  // {
  //   label: '印度',
  //   value: '印度',
  // },
];

var AreaSelect = function AreaSelect(props) {
  return /*#__PURE__*/ React__default['default'].createElement(
    _Cascader__default['default'],
    _objectSpread2(
      _objectSpread2(
        {
          style: {
            width: '100%',
          },
          placeholder: '\u8BF7\u9009\u62E9\u8FBE\u4EBA\u5730\u57DF',
          changeOnSelect: true,
        },
        props,
      ),
      {},
      {
        options: cityAll,
      },
    ),
  );
};

exports.AreaSelect = AreaSelect;
exports.RemoteSelect = RemoteSelect;
