(self['webpackChunkcompany_component_next'] =
  self['webpackChunkcompany_component_next'] || []).push([
  ['mf-dep__mfsu-dev_mf-va_antd_es_select_js'],
  {
    /***/ './.mfsu-dev/mf-va_antd_es_select.js':
      /*!*******************************************!*\
  !*** ./.mfsu-dev/mf-va_antd_es_select.js ***!
  \*******************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! antd/es/select */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/select/index.js',
          );

        /* harmony default export */ __webpack_exports__['default'] =
          antd_es_select__WEBPACK_IMPORTED_MODULE_0__.default;

        /***/
      },

    /***/ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/select/index.js':
      /*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/select/index.js ***!
  \*********************************************************************************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ './node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js',
          );
        /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/extends */ './node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js',
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! classnames */ './node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js',
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var rc_select__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! rc-select */ './node_modules/.pnpm/rc-select@14.1.18_sfoxds7t5ydpegc3knd667wn6m/node_modules/rc-select/es/index.js',
          );
        /* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! rc-util/es/omit */ './node_modules/.pnpm/rc-util@5.39.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/rc-util/es/omit.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../config-provider */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/config-provider/context.js',
          );
        /* harmony import */ var _config_provider_defaultRenderEmpty__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../config-provider/defaultRenderEmpty */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/config-provider/defaultRenderEmpty.js',
          );
        /* harmony import */ var _config_provider_DisabledContext__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../config-provider/DisabledContext */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/config-provider/DisabledContext.js',
          );
        /* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../config-provider/SizeContext */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/config-provider/SizeContext.js',
          );
        /* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../form/context */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/form/context.js',
          );
        /* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ../_util/motion */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/_util/motion.js',
          );
        /* harmony import */ var _util_statusUtils__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../_util/statusUtils */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/_util/statusUtils.js',
          );
        /* harmony import */ var _utils_iconUtil__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ./utils/iconUtil */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/select/utils/iconUtil.js',
          );
        /* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../_util/warning */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/_util/warning.js',
          );
        /* harmony import */ var _space_Compact__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../space/Compact */ './node_modules/.pnpm/antd@4.24.15_sfoxds7t5ydpegc3knd667wn6m/node_modules/antd/es/space/Compact.js',
          );

        // TODO: 4.0 - codemod should help to change `filterOption` to support node props.
        var __rest =
          (undefined && undefined.__rest) ||
          function (s, e) {
            var t = {};
            for (var p in s)
              if (
                Object.prototype.hasOwnProperty.call(s, p) &&
                e.indexOf(p) < 0
              )
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === 'function')
              for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
              ) {
                if (
                  e.indexOf(p[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                  t[p[i]] = s[p[i]];
              }
            return t;
          };

        var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
        var InternalSelect = function InternalSelect(_a, ref) {
          var customizePrefixCls = _a.prefixCls,
            _a$bordered = _a.bordered,
            bordered = _a$bordered === void 0 ? true : _a$bordered,
            className = _a.className,
            getPopupContainer = _a.getPopupContainer,
            dropdownClassName = _a.dropdownClassName,
            popupClassName = _a.popupClassName,
            _a$listHeight = _a.listHeight,
            listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
            placement = _a.placement,
            _a$listItemHeight = _a.listItemHeight,
            listItemHeight =
              _a$listItemHeight === void 0 ? 24 : _a$listItemHeight,
            customizeSize = _a.size,
            customDisabled = _a.disabled,
            notFoundContent = _a.notFoundContent,
            customStatus = _a.status,
            showArrow = _a.showArrow,
            props = __rest(_a, [
              'prefixCls',
              'bordered',
              'className',
              'getPopupContainer',
              'dropdownClassName',
              'popupClassName',
              'listHeight',
              'placement',
              'listItemHeight',
              'size',
              'disabled',
              'notFoundContent',
              'status',
              'showArrow',
            ]);
          var _React$useContext = react__WEBPACK_IMPORTED_MODULE_5__.useContext(
              _config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigContext,
            ),
            getContextPopupContainer = _React$useContext.getPopupContainer,
            getPrefixCls = _React$useContext.getPrefixCls,
            renderEmpty = _React$useContext.renderEmpty,
            direction = _React$useContext.direction,
            virtual = _React$useContext.virtual,
            dropdownMatchSelectWidth =
              _React$useContext.dropdownMatchSelectWidth;
          var size = react__WEBPACK_IMPORTED_MODULE_5__.useContext(
            _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_7__.default,
          );
          var prefixCls = getPrefixCls('select', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          var _useCompactItemContex = (0,
            _space_Compact__WEBPACK_IMPORTED_MODULE_8__.useCompactItemContext)(
              prefixCls,
              direction,
            ),
            compactSize = _useCompactItemContex.compactSize,
            compactItemClassnames = _useCompactItemContex.compactItemClassnames;
          var mode = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(
            function () {
              var m = props.mode;
              if (m === 'combobox') {
                return undefined;
              }
              if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
                return 'combobox';
              }
              return m;
            },
            [props.mode],
          );
          var isMultiple = mode === 'multiple' || mode === 'tags';
          var mergedShowArrow =
            showArrow !== undefined
              ? showArrow
              : props.loading || !(isMultiple || mode === 'combobox');
          // =================== Warning =====================
          true
            ? (0, _util_warning__WEBPACK_IMPORTED_MODULE_9__.default)(
                !dropdownClassName,
                'Select',
                '`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.',
              )
            : 0;
          // ===================== Form Status =====================
          var _useContext = (0, react__WEBPACK_IMPORTED_MODULE_5__.useContext)(
              _form_context__WEBPACK_IMPORTED_MODULE_10__.FormItemInputContext,
            ),
            contextStatus = _useContext.status,
            hasFeedback = _useContext.hasFeedback,
            isFormItemInput = _useContext.isFormItemInput,
            feedbackIcon = _useContext.feedbackIcon;
          var mergedStatus = (0,
          _util_statusUtils__WEBPACK_IMPORTED_MODULE_11__.getMergedStatus)(
            contextStatus,
            customStatus,
          );
          // ===================== Empty =====================
          var mergedNotFound;
          if (notFoundContent !== undefined) {
            mergedNotFound = notFoundContent;
          } else if (mode === 'combobox') {
            mergedNotFound = null;
          } else {
            mergedNotFound = (
              renderEmpty ||
              _config_provider_defaultRenderEmpty__WEBPACK_IMPORTED_MODULE_12__.default
            )('Select');
          }
          // ===================== Icons =====================
          var _getIcons = (0,
            _utils_iconUtil__WEBPACK_IMPORTED_MODULE_13__.default)(
              (0,
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)(
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)(
                  {},
                  props,
                ),
                {
                  multiple: isMultiple,
                  hasFeedback: hasFeedback,
                  feedbackIcon: feedbackIcon,
                  showArrow: mergedShowArrow,
                  prefixCls: prefixCls,
                },
              ),
            ),
            suffixIcon = _getIcons.suffixIcon,
            itemIcon = _getIcons.itemIcon,
            removeIcon = _getIcons.removeIcon,
            clearIcon = _getIcons.clearIcon;
          var selectProps = (0,
          rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__.default)(props, [
            'suffixIcon',
            'itemIcon',
          ]);
          var rcSelectRtlDropdownClassName =
            classnames__WEBPACK_IMPORTED_MODULE_2___default()(
              popupClassName || dropdownClassName,
              (0,
              _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(
                {},
                ''.concat(prefixCls, '-dropdown-').concat(direction),
                direction === 'rtl',
              ),
            );
          var mergedSize = compactSize || customizeSize || size;
          // ===================== Disabled =====================
          var disabled = react__WEBPACK_IMPORTED_MODULE_5__.useContext(
            _config_provider_DisabledContext__WEBPACK_IMPORTED_MODULE_14__.default,
          );
          var mergedDisabled =
            customDisabled !== null && customDisabled !== void 0
              ? customDisabled
              : disabled;
          var mergedClassName =
            classnames__WEBPACK_IMPORTED_MODULE_2___default()(
              (0,
              _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(
                (0,
                _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(
                  (0,
                  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(
                    (0,
                    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(
                      (0,
                      _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(
                        {},
                        ''.concat(prefixCls, '-lg'),
                        mergedSize === 'large',
                      ),
                      ''.concat(prefixCls, '-sm'),
                      mergedSize === 'small',
                    ),
                    ''.concat(prefixCls, '-rtl'),
                    direction === 'rtl',
                  ),
                  ''.concat(prefixCls, '-borderless'),
                  !bordered,
                ),
                ''.concat(prefixCls, '-in-form-item'),
                isFormItemInput,
              ),
              (0,
              _util_statusUtils__WEBPACK_IMPORTED_MODULE_11__.getStatusClassNames)(
                prefixCls,
                mergedStatus,
                hasFeedback,
              ),
              compactItemClassnames,
              className,
            );
          // ===================== Placement =====================
          var getPlacement = function getPlacement() {
            if (placement !== undefined) {
              return placement;
            }
            return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
          };
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5__.createElement(
            rc_select__WEBPACK_IMPORTED_MODULE_3__.default,
            (0,
            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)(
              {
                ref: ref,
                virtual: virtual,
                dropdownMatchSelectWidth: dropdownMatchSelectWidth,
              },
              selectProps,
              {
                transitionName: (0,
                _util_motion__WEBPACK_IMPORTED_MODULE_15__.getTransitionName)(
                  rootPrefixCls,
                  (0,
                  _util_motion__WEBPACK_IMPORTED_MODULE_15__.getTransitionDirection)(
                    placement,
                  ),
                  props.transitionName,
                ),
                listHeight: listHeight,
                listItemHeight: listItemHeight,
                mode: mode,
                prefixCls: prefixCls,
                placement: getPlacement(),
                direction: direction,
                inputIcon: suffixIcon,
                menuItemSelectedIcon: itemIcon,
                removeIcon: removeIcon,
                clearIcon: clearIcon,
                notFoundContent: mergedNotFound,
                className: mergedClassName,
                getPopupContainer:
                  getPopupContainer || getContextPopupContainer,
                dropdownClassName: rcSelectRtlDropdownClassName,
                showArrow: hasFeedback || showArrow,
                disabled: mergedDisabled,
              },
            ),
          );
        };
        var Select =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5__.forwardRef(
            InternalSelect,
          );
        Select.SECRET_COMBOBOX_MODE_DO_NOT_USE =
          SECRET_COMBOBOX_MODE_DO_NOT_USE;
        Select.Option = rc_select__WEBPACK_IMPORTED_MODULE_3__.Option;
        Select.OptGroup = rc_select__WEBPACK_IMPORTED_MODULE_3__.OptGroup;
        /* harmony default export */ __webpack_exports__['default'] = Select;

        /***/
      },
  },
]);
