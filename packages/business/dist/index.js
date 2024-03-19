'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/es/date-picker/style');
var _DatePicker = require('antd/es/date-picker');
require('antd/es/input/style');
var _Input = require('antd/es/input');
require('antd/es/checkbox/style');
var _Checkbox = require('antd/es/checkbox');
var React = require('react');
var utils = require('@company-component-next/utils');
var trim = require('lodash/trim');
var moment = require('moment');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var _DatePicker__default = /*#__PURE__*/ _interopDefaultLegacy(_DatePicker);
var _Input__default = /*#__PURE__*/ _interopDefaultLegacy(_Input);
var _Checkbox__default = /*#__PURE__*/ _interopDefaultLegacy(_Checkbox);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var trim__default = /*#__PURE__*/ _interopDefaultLegacy(trim);
var moment__default = /*#__PURE__*/ _interopDefaultLegacy(moment);

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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  ".index_wordContent__3d62M {\n  width: 789px;\n  margin: 0 auto;\n}\n.index_wordContent__3d62M p {\n  margin: 2px 0;\n}\n.index_wordContent__3d62M table {\n  margin-bottom: 5px;\n  border-collapse: collapse;\n  display: table;\n}\n.index_wordContent__3d62M table td,\n.index_wordContent__3d62M table th {\n  padding: 5px 10px;\n  border: 1px solid #ddd;\n}\n.index_wordContent__3d62M table th {\n  border-top: 1px solid #bbb;\n  background-color: #f7f7f7;\n}\n.index_wordContent__3d62M table table tr.index_firstRow__3o9De th {\n  border-top-width: 2px;\n}\n.index_wordContent__3d62M table td p {\n  margin: 0;\n  padding: 0;\n}\n.index_wordContent__3d62M .index_textCenter__2xzTC {\n  text-align: center;\n  white-space: nowrap;\n}\n.index_wordContent__3d62M .index_font1__1vrtd {\n  font-family: 'Times New Roman', serif;\n}\n.index_wordContent__3d62M .index_font2__2Wr4z {\n  font-family: 'Verdana', sans-serif;\n}\n.index_wordContent__3d62M .index_songFont__3HA50 {\n  font-family: 'SimSun', 'fangsong', sans-serif;\n}\n.index_wordContent__3d62M .index_blackFont__2HW72 {\n  color: black;\n}\n.index_wordContent__3d62M .index_td1__1kAO- {\n  border: 1px solid windowtext;\n  padding: 0px 7px;\n}\n.index_wordContent__3d62M .index_td2__3DwMV {\n  border-top: 1px solid windowtext;\n  border-right: 1px solid windowtext;\n  border-bottom: 1px solid windowtext;\n  -o-border-image: initial;\n     border-image: initial;\n  border-left: none;\n  padding: 0px 7px;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 {\n  padding: 0;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 input {\n  border: 0;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 table {\n  margin-bottom: 5px;\n  border-collapse: collapse;\n  display: table;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 table td,\n.index_wordContent__3d62M .index_edit__U3Su1 table th {\n  padding: 5px 10px;\n  border: 0;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 table th {\n  border-top: 0;\n  background-color: transparent;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 table table tr.index_firstRow__3o9De th {\n  border-top-width: 2px;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 table td p {\n  margin: 0;\n  padding: 0;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 .ant-picker {\n  padding: 0 11px 0;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 .ant-checkbox-wrapper {\n  margin-left: 0 !important;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 .ant-checkbox {\n  transform: scale(0.55);\n}\n.index_wordContent__3d62M .index_edit__U3Su1 .ant-checkbox .ant-checkbox-inner {\n  background-color: #fff !important;\n  border-color: #000 !important;\n  border-radius: 0;\n}\n.index_wordContent__3d62M .index_edit__U3Su1 .ant-checkbox .ant-checkbox-inner::after {\n  border-color: #000;\n}\n.index_wordContent__3d62M .index_td3__23Jl0 {\n  border-right: 1px solid windowtext;\n  border-bottom: 1px solid windowtext;\n  border-left: 1px solid windowtext;\n  -o-border-image: initial;\n     border-image: initial;\n  border-top: none;\n  padding: 0px 7px;\n}\n.index_wordContent__3d62M .index_td4__YDU3m {\n  border-top: none;\n  border-left: none;\n  border-bottom: 1px solid windowtext;\n  border-right: 1px solid windowtext;\n  padding: 0px 7px;\n}\n.index_wordContent__3d62M .index_amount__4apHO {\n  display: flex;\n  align-items: center;\n}\n.index_wordContent__3d62M .index_feeTable__GnSsY {\n  width: 100%;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.index_wordContent__3d62M .index_feeTable__GnSsY td {\n  padding: 2px 0;\n  border: none;\n}\n";
var styles = {
  wordContent: 'index_wordContent__3d62M',
  firstRow: 'index_firstRow__3o9De',
  textCenter: 'index_textCenter__2xzTC',
  font1: 'index_font1__1vrtd',
  font2: 'index_font2__2Wr4z',
  songFont: 'index_songFont__3HA50',
  blackFont: 'index_blackFont__2HW72',
  td1: 'index_td1__1kAO-',
  td2: 'index_td2__3DwMV',
  edit: 'index_edit__U3Su1',
  td3: 'index_td3__23Jl0',
  td4: 'index_td4__YDU3m',
  amount: 'index_amount__4apHO',
  feeTable: 'index_feeTable__GnSsY',
};
styleInject(css_248z);

// 收入详情
function incomeInfo(_x) {
  return _incomeInfo.apply(this, arguments);
}
function _incomeInfo() {
  _incomeInfo = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch ((_context.prev = _context.next)) {
            case 0:
              return _context.abrupt(
                'return',
                utils.request('/project/income/info', {
                  method: 'GET',
                  params: params,
                }),
              );
            case 1:
            case 'end':
              return _context.stop();
          }
      }, _callee);
    }),
  );
  return _incomeInfo.apply(this, arguments);
}

var _excluded = [
  'RemarkSlot',
  'id',
  'isFillTime',
  'style',
  'resKey',
  'incomeInfo',
  'division_code',
  'edit',
];
var number2cnText = utils.utils.number2cnText;
var defaultFocus = {
  depart: false,
  nature: false,
  date: false,
  amount: false,
};
// & EitherOr<
//   { id?: number; paymentInfo?: paymentInfoType },
//   'id',
//   'paymentInfo'
// >;
var getResKey = function getResKey(keyNames, res) {
  if (keyNames === '') return res;
  var keyNameList = keyNames.split(',').map(function (item) {
    return trim__default['default'](item);
  });
  return keyNameList.reduce(function (pre, curr) {
    return pre === null || pre === void 0 ? void 0 : pre[curr];
  }, res);
};
var PAYMENT_TYPE_MAP = {
  0: '转账(银行)',
  1: '现金',
  2: '支票',
  3: '电汇',
  4: '汇票',
  5: '其他',
  6: '转账(Paypal)',
};
var PAYMENT_TYPE_MAP_KEY = Object.entries(PAYMENT_TYPE_MAP).reduce(function (
  pre,
  _ref,
) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  return _objectSpread2(
    _objectSpread2({}, pre),
    {},
    _defineProperty({}, value, key),
  );
},
{});
var CURRENCY_MAP = {
  RMB: 'CNY',
  USD: 'USD',
};
var ApprovalPaymentTable = function ApprovalPaymentTable(_ref3) {
  var _Object$keys,
    _editRef$current,
    _editRef$current2,
    _editRef$current3,
    _editRef$current5;
  var RemarkSlot = _ref3.RemarkSlot,
    id = _ref3.id,
    isFillTime = _ref3.isFillTime,
    style = _ref3.style,
    _ref3$resKey = _ref3.resKey,
    resKey = _ref3$resKey === void 0 ? 'data, d' : _ref3$resKey,
    _ref3$incomeInfo = _ref3.incomeInfo,
    incomeInfo$1 = _ref3$incomeInfo === void 0 ? incomeInfo : _ref3$incomeInfo,
    _ref3$division_code = _ref3.division_code,
    division_code =
      _ref3$division_code === void 0 ? 'bert' : _ref3$division_code,
    _ref3$edit = _ref3.edit,
    edit = _ref3$edit === void 0 ? false : _ref3$edit,
    props = _objectWithoutProperties(_ref3, _excluded);
  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    paymentInfo = _useState2[0],
    setPaymentInfo = _useState2[1];
  var _useState3 = React.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var now = moment__default['default']()
    .locale('zh-cn')
    .format('YYYY-MM-DD')
    .split('-');
  var _useState5 = React.useState(defaultFocus),
    _useState6 = _slicedToArray(_useState5, 2),
    focus = _useState6[0],
    setFocus = _useState6[1];
  var editType = function editType(keyName) {
    return edit ? (Array.isArray(edit) ? edit.includes(keyName) : true) : false;
  };
  var editRef = React.useRef(
    (_Object$keys = Object.keys(defaultFocus)) === null ||
      _Object$keys === void 0
      ? void 0
      : _Object$keys.reduce(function (pre, curr) {
          return _objectSpread2(
            _objectSpread2({}, pre),
            {},
            _defineProperty({}, curr, React.useRef(null)),
          );
        }, {}),
  );
  utils.useOnFatherClick(
    editRef,
    {
      outside: function outside(name) {
        editType(name) &&
          setFocus(function (pre) {
            return _objectSpread2(
              _objectSpread2({}, pre),
              {},
              _defineProperty({}, name, false),
            );
          });
      },
      inside: function inside(name) {
        editType(name) &&
          setFocus(function (pre) {
            return _objectSpread2(
              _objectSpread2({}, pre),
              {},
              _defineProperty({}, name, true),
            );
          });
      },
    },
    'multi',
  );
  React.useEffect(
    function () {
      _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
          var res, d;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (
                    props === null || props === void 0
                      ? void 0
                      : props.paymentInfo
                  ) {
                    setPaymentInfo(
                      props === null || props === void 0
                        ? void 0
                        : props.paymentInfo,
                    );
                  }
                  if (!id) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 4;
                  return incomeInfo$1({
                    id: id,
                    division_code: division_code,
                  });
                case 4:
                  res = _context.sent;
                  if (
                    getResKey(resKey.replace(/d$/, 'f'), res) > 0 &&
                    getResKey(resKey, res)
                  ) {
                    console.log(res);
                    d = getResKey(resKey, res);
                    setPaymentInfo(
                      _objectSpread2(
                        _objectSpread2({}, d),
                        {},
                        {
                          companyName:
                            d === null || d === void 0 ? void 0 : d.companyName,
                          topSupplierName:
                            d === null || d === void 0
                              ? void 0
                              : d.supplierName,
                          amount:
                            (d === null || d === void 0
                              ? void 0
                              : d.paySourceAmount) ||
                            (d === null || d === void 0 ? void 0 : d.amount),
                          capitalAmount:
                            d === null || d === void 0
                              ? void 0
                              : d.capitalAmount,
                          paymentType:
                            (d === null || d === void 0
                              ? void 0
                              : d.paymentType) ||
                            (d === null || d === void 0
                              ? void 0
                              : d.payment_type),
                          bankCardId:
                            d === null || d === void 0 ? void 0 : d.bankCardId,
                          bankNameSub:
                            d === null || d === void 0 ? void 0 : d.bankNameSub,
                          orderIds:
                            d === null || d === void 0 ? void 0 : d.orderIds,
                          message:
                            d === null || d === void 0 ? void 0 : d.message,
                          currency:
                            d === null || d === void 0 ? void 0 : d.currency,
                        },
                      ),
                    );
                    setAmount(
                      (d === null || d === void 0
                        ? void 0
                        : d.paySourceAmount) ||
                        (d === null || d === void 0 ? void 0 : d.amount),
                    );
                  }
                case 6:
                case 'end':
                  return _context.stop();
              }
          }, _callee);
        }),
      )();
    },
    [props === null || props === void 0 ? void 0 : props.paymentInfo, id],
  );
  var leftInfo = [
    {
      keyName: 'supplierName',
      name: '收款单位',
    },
    {
      keyName: 'bankCardId',
      name: '收款账号',
    },
    {
      keyName: 'bankNameSub',
      name: '开户银行',
    },
    {
      keyName: 'otherInfo',
      name: '其他相关信息',
      autoHidden: false,
    },
  ];
  var replaceCheckBox = function replaceCheckBox(str, checkedKey, keyMap) {
    var _str$split, _str$split$reduce;
    return edit && (checkedKey ? paymentInfo[checkedKey] : true)
      ? str === null || str === void 0
        ? void 0
        : (_str$split = str.split('□')) === null || _str$split === void 0
        ? void 0
        : (_str$split$reduce = _str$split.reduce) === null ||
          _str$split$reduce === void 0
        ? void 0
        : _str$split$reduce.call(
            _str$split,
            function (pre, curr) {
              return /*#__PURE__*/ React__default['default'].createElement(
                React__default['default'].Fragment,
                null,
                pre,
                curr &&
                  /*#__PURE__*/ React__default['default'].createElement(
                    React__default['default'].Fragment,
                    null,
                    /*#__PURE__*/ React__default['default'].createElement(
                      _Checkbox__default['default'],
                      _objectSpread2(
                        {},
                        checkedKey && {
                          defaultChecked:
                            (keyMap ? keyMap[curr] : curr) ==
                            paymentInfo[checkedKey],
                        },
                      ),
                    ),
                    curr,
                  ),
              );
            },
            /*#__PURE__*/ React__default['default'].createElement(
              React__default['default'].Fragment,
              null,
            ),
          )
      : str;
  };
  return /*#__PURE__*/ React__default['default'].createElement(
    React__default['default'].Fragment,
    null,
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: styles.wordContent,
        style: style,
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        {
          className: styles.textCenter,
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: styles.songFont,
            style: {
              fontSize: '24px',
            },
          },
          (paymentInfo === null || paymentInfo === void 0
            ? void 0
            : paymentInfo.companyName) || '四十大盗',
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement('hr', {
        style: {
          fontWeight: 'bolder',
          width: '350px',
          margin: '1px auto',
        },
      }),
      /*#__PURE__*/ React__default['default'].createElement('hr', {
        style: {
          fontWeight: 'bolder',
          width: '350px',
          margin: '1px auto',
        },
      }),
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        {
          className: styles.textCenter,
          style: {
            lineHeight: '34px',
          },
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'strong',
          null,
          /*#__PURE__*/ React__default['default'].createElement(
            'span',
            {
              className: ''
                .concat(styles.songFont, ' ')
                .concat(styles.blackFont),
              style: {
                fontSize: '30px',
              },
            },
            '\u4ED8\u6B3E\u5BA1\u6279\u5355',
          ),
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          style: {
            lineHeight: '23px',
            overflow: 'hidden',
          },
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'p',
          {
            className: styles.blackFont,
            style: {
              lineHeight: '23px',
              float: 'left',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'strong',
            null,
            '\u5E94\u4ED8\u5355\u4F4D\u5168\u79F0',
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'span',
            {
              className: styles.font2,
            },
            ':',
          ),
          '\xA0',
          paymentInfo === null || paymentInfo === void 0
            ? void 0
            : paymentInfo.topSupplierName,
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'p',
          {
            className: styles.blackFont,
            style: {
              lineHeight: '23px',
              float: 'right',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'strong',
            null,
            /*#__PURE__*/ React__default['default'].createElement(
              'span',
              {
                className: styles.songFont,
              },
              isFillTime && (now === null || now === void 0 ? void 0 : now[0]),
              '\u5E74',
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'strong',
            null,
            /*#__PURE__*/ React__default['default'].createElement(
              'span',
              {
                className: styles.songFont,
                style: {
                  marginLeft: isFillTime ? '15px' : '30px',
                },
              },
              isFillTime && (now === null || now === void 0 ? void 0 : now[1]),
              '\u6708',
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'strong',
            null,
            /*#__PURE__*/ React__default['default'].createElement(
              'span',
              {
                className: styles.songFont,
                style: {
                  marginLeft: isFillTime ? '15px' : '30px',
                },
              },
              isFillTime && (now === null || now === void 0 ? void 0 : now[2]),
              '\u65E5',
            ),
          ),
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'table',
        null,
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
            className: styles.firstRow,
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '85px',
              },
              className: styles.td1,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u90E8\xA0 \u95E8',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '170px',
              },
              colSpan: 2,
              className: ''
                .concat(styles.td2, ' ')
                .concat(editType('depart') ? styles.edit : ''),
              ref:
                editRef === null || editRef === void 0
                  ? void 0
                  : (_editRef$current = editRef.current) === null ||
                    _editRef$current === void 0
                  ? void 0
                  : _editRef$current.depart,
            },
            editType('depart') &&
              /*#__PURE__*/ React__default['default'].createElement(
                _Input__default['default'],
                {
                  placeholder: (focus.depart && '请输入所属部门') || '',
                },
              ),
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '85px',
              },
              colSpan: 2,
              className: styles.td2,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u4ED8\u6B3E\u6027\u8D28',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '160px',
              },
              colSpan: 2,
              className: ''
                .concat(styles.td2, ' ')
                .concat(editType('nature') ? styles.edit : ''),
              ref:
                editRef === null || editRef === void 0
                  ? void 0
                  : (_editRef$current2 = editRef.current) === null ||
                    _editRef$current2 === void 0
                  ? void 0
                  : _editRef$current2.nature,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  editType('nature')
                    ? /*#__PURE__*/ React__default['default'].createElement(
                        _Input__default['default'],
                        {
                          defaultValue:
                            (paymentInfo === null || paymentInfo === void 0
                              ? void 0
                              : paymentInfo.paymentType) || '',
                          placeholder:
                            ((focus === null || focus === void 0
                              ? void 0
                              : focus.nature) &&
                              '请输入付款性质') ||
                            '',
                        },
                      )
                    : (paymentInfo === null || paymentInfo === void 0
                        ? void 0
                        : paymentInfo.paymentType) || '',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '140px',
              },
              colSpan: 2,
              className: styles.td2,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u4ED8\u6B3E\u65E5\u671F',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '132px',
              },
              colSpan: 2,
              className: ''
                .concat(styles.td2, ' ')
                .concat(editType('date') ? styles.edit : ''),
              ref:
                editRef === null || editRef === void 0
                  ? void 0
                  : (_editRef$current3 = editRef.current) === null ||
                    _editRef$current3 === void 0
                  ? void 0
                  : _editRef$current3.date,
            },
            editType('date') &&
              /*#__PURE__*/ React__default['default'].createElement(
                _DatePicker__default['default'],
                {
                  getPopupContainer: function getPopupContainer() {
                    var _editRef$current4, _editRef$current4$dat, _document;
                    return (
                      (editRef === null || editRef === void 0
                        ? void 0
                        : (_editRef$current4 = editRef.current) === null ||
                          _editRef$current4 === void 0
                        ? void 0
                        : (_editRef$current4$dat = _editRef$current4.date) ===
                            null || _editRef$current4$dat === void 0
                        ? void 0
                        : _editRef$current4$dat.current) ||
                      ((_document = document) === null || _document === void 0
                        ? void 0
                        : _document.body)
                    );
                  },
                  bordered: false,
                  suffixIcon: function suffixIcon() {
                    return false;
                  },
                  placeholder:
                    ((focus === null || focus === void 0
                      ? void 0
                      : focus.date) &&
                      '请选择付款日期') ||
                    '',
                  style: {
                    width: '100%',
                  },
                  format: 'YYYY\u5E74MM\u6708DD\u65E5',
                },
              ),
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '85px',
              },
              className: styles.td3,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u4ED8\u6B3E\u603B\u989D',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: _objectSpread2(
                {
                  width: 584,
                },
                editType('amount') && {
                  paddingRight: 0,
                },
              ),
              colSpan: 10,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.blackFont, ' ')
                  .concat(styles.amount),
                style: {
                  lineHeight: '23px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.songFont,
                },
                '\u5C0F\u5199\uFF1A',
                (paymentInfo === null || paymentInfo === void 0
                  ? void 0
                  : paymentInfo.currency) === 'USD'
                  ? '$'
                  : '￥',
                '\uFF1A',
              ),
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.font2,
                  style: {
                    textDecoration: 'underline',
                    flex: 1,
                  },
                  ref:
                    editRef === null || editRef === void 0
                      ? void 0
                      : (_editRef$current5 = editRef.current) === null ||
                        _editRef$current5 === void 0
                      ? void 0
                      : _editRef$current5.amount,
                },
                (focus === null || focus === void 0 ? void 0 : focus.amount)
                  ? /*#__PURE__*/ React__default['default'].createElement(
                      React__default['default'].Fragment,
                      null,
                      /*#__PURE__*/ React__default['default'].createElement(
                        _Input__default['default'],
                        {
                          value: amount,
                          bordered: false,
                          placeholder:
                            '\u8BF7\u8F93\u5165\u4ED8\u6B3E\u603B\u989D',
                          style: {
                            padding: 0,
                          },
                          onChange: function onChange(e) {
                            var value = e.target.value;
                            var tempArr =
                              value === null || value === void 0
                                ? void 0
                                : value.split('.');
                            if (
                              (tempArr === null || tempArr === void 0
                                ? void 0
                                : tempArr.length) > 1
                            ) {
                              var _tempArr$;
                              setAmount(
                                ''
                                  .concat(tempArr[0], '.')
                                  .concat(
                                    tempArr === null || tempArr === void 0
                                      ? void 0
                                      : (_tempArr$ = tempArr[1]) === null ||
                                        _tempArr$ === void 0
                                      ? void 0
                                      : _tempArr$.slice(0, 2),
                                  )
                                  .replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, ''),
                              );
                            } else {
                              setAmount(
                                value === null || value === void 0
                                  ? void 0
                                  : value.replace(
                                      /[^\d{1,}\.\d{1,}|\d{1,}]/g,
                                      '',
                                    ),
                              );
                            }
                          },
                        },
                      ),
                    )
                  : amount ||
                      /*#__PURE__*/ React__default['default'].createElement(
                        React__default['default'].Fragment,
                        null,
                        '\xA0\xA0\xA0\xA0',
                      ),
              ),
            ),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '85px',
              },
              className: styles.td3,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u5BA1\u6279\u91D1\u989D',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: 584,
              },
              colSpan: 10,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: styles.blackFont,
                style: {
                  lineHeight: '23px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.songFont,
                },
                '\u5927\u5199\uFF1A',
                (paymentInfo === null || paymentInfo === void 0
                  ? void 0
                  : paymentInfo.currency) === 'USD'
                  ? '$'
                  : '￥',
                '\uFF1A',
              ),
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.font2,
                  style: {
                    textDecoration: 'underline',
                  },
                },
                (Number(amount) > 0
                  ? number2cnText(amount)
                  : '负' + number2cnText(Math.abs(Number(amount)))) ||
                  /*#__PURE__*/ React__default['default'].createElement(
                    React__default['default'].Fragment,
                    null,
                    '\xA0\xA0\xA0\xA0',
                  ),
              ),
            ),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '85px',
              },
              className: styles.td3,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u7ED3\u7B97\u65B9\u5F0F',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '331px',
              },
              colSpan: 5,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: styles.textCenter,
                style: {
                  lineHeight: '23px',
                  fontSize: '12px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: ''
                    .concat(styles.songFont, ' ')
                    .concat(styles.blackFont, ' ')
                    .concat(edit ? styles.edit : ''),
                },
                replaceCheckBox(
                  '□现金□转账(银行)□转账(Paypal)□支票□电汇□汇票□其他',
                  'paymentType',
                  PAYMENT_TYPE_MAP_KEY,
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '57px',
              },
              colSpan: 2,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u5E01\u79CD',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '196px',
              },
              colSpan: 3,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.blackFont, ' ')
                  .concat(edit ? styles.edit : ''),
                style: {
                  lineHeight: '23px',
                  fontSize: '12px',
                },
              },
              replaceCheckBox('□RMB□USD□其他', 'currency', CURRENCY_MAP),
            ),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                height: '170px',
              },
              colSpan: 4,
              valign: 'top',
              className: ''.concat(styles.blackFont, ' ').concat(styles.td3),
            },
            (leftInfo === null || leftInfo === void 0
              ? void 0
              : leftInfo.length) &&
              (leftInfo === null || leftInfo === void 0
                ? void 0
                : leftInfo.map(function (item) {
                    return (paymentInfo === null || paymentInfo === void 0
                      ? void 0
                      : paymentInfo[item.keyName]) || item.autoHidden === false
                      ? /*#__PURE__*/ React__default['default'].createElement(
                          React__default['default'].Fragment,
                          null,
                          /*#__PURE__*/ React__default['default'].createElement(
                            'p',
                            {
                              style: {
                                lineHeight: '23px',
                              },
                            },
                            /*#__PURE__*/ React__default[
                              'default'
                            ].createElement(
                              'strong',
                              null,
                              /*#__PURE__*/ React__default[
                                'default'
                              ].createElement(
                                'span',
                                {
                                  className: styles.songFont,
                                },
                                item.name,
                              ),
                            ),
                            /*#__PURE__*/ React__default[
                              'default'
                            ].createElement(
                              'strong',
                              null,
                              /*#__PURE__*/ React__default[
                                'default'
                              ].createElement(
                                'span',
                                {
                                  className: styles.font2,
                                },
                                '\uFF1A',
                              ),
                            ),
                            /*#__PURE__*/ React__default[
                              'default'
                            ].createElement(
                              'strong',
                              null,
                              /*#__PURE__*/ React__default[
                                'default'
                              ].createElement(
                                'span',
                                {
                                  style: {
                                    fontSize: '12px',
                                  },
                                  className: styles.songFont,
                                },
                                (paymentInfo === null || paymentInfo === void 0
                                  ? void 0
                                  : paymentInfo[item.keyName]) || '',
                              ),
                            ),
                          ),
                          /*#__PURE__*/ React__default['default'].createElement(
                            'p',
                            {
                              style: {
                                lineHeight: '10px',
                              },
                            },
                            /*#__PURE__*/ React__default[
                              'default'
                            ].createElement(
                              'strong',
                              null,
                              /*#__PURE__*/ React__default[
                                'default'
                              ].createElement(
                                'span',
                                {
                                  className: styles.font2,
                                },
                                '\xA0',
                              ),
                            ),
                          ),
                        )
                      : /*#__PURE__*/ React__default['default'].createElement(
                          React__default['default'].Fragment,
                          null,
                        );
                  })),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '357px',
                position: 'relative',
              },
              colSpan: 7,
              valign: 'top',
              className: ''.concat(styles.blackFont, ' ').concat(styles.td4),
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                style: {
                  lineHeight: '23px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    className: styles.songFont,
                  },
                  '\u5907\u6CE8',
                ),
              ),
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.songFont,
                },
                '\uFF08\u7528\u9014',
              ),
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.font2,
                },
                '/',
              ),
              /*#__PURE__*/ React__default['default'].createElement(
                'span',
                {
                  className: styles.songFont,
                },
                '\u9879\u76EE\u7B49\uFF09',
                /*#__PURE__*/ React__default['default'].createElement(
                  'strong',
                  null,
                  '\uFF1A',
                ),
              ),
            ),
            RemarkSlot &&
              /*#__PURE__*/ React__default['default'].createElement(
                RemarkSlot,
                {
                  info: paymentInfo,
                },
              ),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '104px',
              },
              className: styles.td3,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u7ECF\u529E\u4EBA',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '95px',
              },
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '104px',
              },
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u4E0A\u7EA7\u9886\u5BFC',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '95px',
              },
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '104px',
              },
              colSpan: 2,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u8D22\u52A1\u5BA1\u6838',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '95px',
              },
              colSpan: 2,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '140px',
              },
              colSpan: 2,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '13px',
                    },
                  },
                  '\u603B\u7ECF\u7406\u7B7E\u6279',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '104px',
              },
              colSpan: 1,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'tr',
          {
            style: {
              height: '32px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '85px',
              },
              className: styles.td3,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u4ED8\u6B3E\u8D26\u6237',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '150px',
              },
              colSpan: 3,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement('span', {
                  style: {
                    fontSize: '15px',
                  },
                }),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '135px',
              },
              colSpan: 2,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'p',
              {
                className: ''
                  .concat(styles.textCenter, ' ')
                  .concat(styles.songFont, ' ')
                  .concat(styles.blackFont),
                style: {
                  lineHeight: '20px',
                },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                'strong',
                null,
                /*#__PURE__*/ React__default['default'].createElement(
                  'span',
                  {
                    style: {
                      fontSize: '15px',
                    },
                  },
                  '\u5B9E\u9645\u652F\u4ED8\u65E5\u671F',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React__default['default'].createElement(
            'td',
            {
              style: {
                width: '243px',
              },
              colSpan: 5,
              className: styles.td4,
            },
            /*#__PURE__*/ React__default['default'].createElement('br', null),
          ),
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        {
          className: styles.blackFont,
          style: {
            lineHeight: '23px',
          },
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'p',
          {
            className: styles.songFont,
          },
          '\u5907\u6CE8\uFF1A1\u3001\u7ECF\u529E\u4EBA\u6BCF\u7533\u8BF7\u4E00\u6B21\u4ED8\u6B3E\u987B\u586B\u5199\u6B64\u8868\uFF0C\u5982\u6709\u9884\u4ED8\u6B3E\u7684\u8BF7\u81EA\u884C\u505A\u597D\u8BB0\u5F55\uFF0C\u6B64\u5355\u636E\u7531\u8D22\u52A1\u4FDD\u5B58\uFF1B',
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'p',
        {
          className: styles.blackFont,
          style: {
            lineHeight: '23px',
          },
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: styles.font2,
          },
          '\xA0\xA0\xA0\xA0\xA0\xA0\xA0 2',
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: styles.songFont,
          },
          '\u3001\u4ED8\u6B3E\u6027\u8D28\u4E00\u680F\u8BF7\u6CE8\u660E\u662F\u9884\u4ED8\u6B3E\u3001\u5C3E\u6B3E\u6216\u662F\u5176\u4ED6\u3002',
        ),
      ),
    ),
  );
};

exports.ApprovalPaymentTable = ApprovalPaymentTable;
