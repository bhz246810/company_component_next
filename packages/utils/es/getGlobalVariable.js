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
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
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
export default (function () {
  return SingleEnv.set();
});
