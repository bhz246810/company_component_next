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
import 'antd/es/empty/style';
import _Empty from 'antd/es/empty';
import 'antd/es/spin/style';
import _Spin from 'antd/es/spin';
import 'antd/es/tooltip/style';
import _Tooltip from 'antd/es/tooltip';
import 'antd/es/auto-complete/style';
import _AutoComplete from 'antd/es/auto-complete';
import 'antd/es/select/style';
import _Select from 'antd/es/select';
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
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
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
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
import React, {
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { request as innerRequest, utils } from '@company-component-next/utils';
import debounce from 'lodash/debounce';
import isObject from 'lodash/isObject';
import qs from 'qs';
import ReactDOMServer from 'react-dom/server';
import usePrevious from './usePrevious';
var getResKey = utils.getResKey;
var Option = _Select.Option;
var components = {
  AutoComplete: _AutoComplete,
  Select: _Select,
};
var ReactElement2String = function ReactElement2String(elem) {
  var _ReactDOMServer$rende;
  return (
    ((_ReactDOMServer$rende = ReactDOMServer.renderToString(elem)) === null ||
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
var RemoteSelect = /*#__PURE__*/ forwardRef(function (_ref, ref) {
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
  var innerRef = useRef();
  var areaRef = useRef(null);
  // 数据
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetching = _React$useState2[0],
    setFetching = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inPopup = _React$useState4[0],
    setInPopup = _React$useState4[1];
  var _React$useState5 = React.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    waitList = _React$useState6[0],
    setWaitList = _React$useState6[1]; // wait 队列
  var request = rq || innerRequest;
  var useDebounce = function useDebounce(fn, delay) {
    return useCallback(debounce(fn, delay), []);
  };
  var debounceSetInPopup = useDebounce(setInPopup, SET_IN_POPUP_DELAY);
  // 上一次传入的searchParams
  var preParams = usePrevious(
    _objectSpread(
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
  var debounceGetList = useCallback(
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
                      _objectSpread(
                        _objectSpread(
                          {
                            // TODO 分页
                            method: searchMethod,
                          },
                          searchMethod === 'POST'
                            ? isStringifyParams
                              ? {
                                  data: qs.stringify(params),
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
  useEffect(
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
  useEffect(function () {
    if (!isObject(searchParams()) || disabled) {
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
  useImperativeHandle(ref, function () {
    return {
      getList: function getList() {
        debounceGetList(searchParams());
      },
      innerRef: innerRef,
    };
  });
  var DropdownRender = function DropdownRender(menu) {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      /*#__PURE__*/ React.createElement(
        'div',
        _objectSpread(
          _objectSpread({}, popupProps),
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
    var _React$useState7 = React.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      tooltipTitle = _React$useState8[0],
      setTooltipTitle = _React$useState8[1];
    useEffect(
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
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: _objectSpread(
        {
          width: '100%',
        },
        outDivstyle || style,
      ),
      ref: areaRef,
    },
    /*#__PURE__*/ React.createElement(
      _Tooltip,
      _objectSpread(
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
      /*#__PURE__*/ React.createElement(
        UnitSelect,
        _objectSpread(
          _objectSpread(
            {
              ref: innerRef,
              style: _objectSpread(
                {
                  width: '100%',
                },
                style,
              ),
              allowClear: true,
              showSearch: true,
              notFoundContent: fetching
                ? /*#__PURE__*/ React.createElement(_Spin, {
                    size: 'small',
                  })
                : /*#__PURE__*/ React.createElement(_Empty, {
                    image: _Empty.PRESENTED_IMAGE_SIMPLE,
                  }),
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
                if (/*#__PURE__*/ isValidElement(children)) {
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
            return /*#__PURE__*/ React.createElement(
              Option,
              _objectSpread(
                _objectSpread(
                  _objectSpread({}, optionProps),
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
                  ? /*#__PURE__*/ React.createElement(
                      _Tooltip,
                      _objectSpread(
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
export default RemoteSelect;
