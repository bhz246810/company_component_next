(self['webpackChunkcompany_component_next'] =
  self['webpackChunkcompany_component_next'] || []).push([
  ['mf-dep__mfsu-dev_mf-va_lodash_isObject_js'],
  {
    /***/ './.mfsu-dev/mf-va_lodash_isObject.js':
      /*!********************************************!*\
  !*** ./.mfsu-dev/mf-va_lodash_isObject.js ***!
  \********************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! lodash/isObject */ './node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js',
          );
        /* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            lodash_isObject__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in lodash_isObject__WEBPACK_IMPORTED_MODULE_0__)
          if (__WEBPACK_IMPORT_KEY__ !== 'default')
            __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function (
              key,
            ) {
              return lodash_isObject__WEBPACK_IMPORTED_MODULE_0__[key];
            }.bind(0, __WEBPACK_IMPORT_KEY__);
        /* harmony reexport (unknown) */ __webpack_require__.d(
          __webpack_exports__,
          __WEBPACK_REEXPORT_OBJECT__,
        );

        /* harmony default export */ __webpack_exports__['default'] =
          lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default();

        /***/
      },

    /***/ './node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js ***!
  \***************************************************************************/
      /***/ function (module) {
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == 'object' || type == 'function');
        }

        module.exports = isObject;

        /***/
      },
  },
]);
