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
import { useEffect } from 'react';
function useOnFatherClick(ref, /** 点击内部事件，点击外部事件 */ _ref) {
  var outside = _ref.outside,
    inside = _ref.inside;
  var type =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : 'single';
  useEffect(
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
export default useOnFatherClick;
