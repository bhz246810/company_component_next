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
            API_CONFIG_BASE_API: '//cps-api.sk8s.cn/API_CONFIG_BASE_API/',
            API_CONFIG_CPS_API_URL: '//cps-api.sk8s.cn/API_CONFIG_CPS_API_URL',
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
