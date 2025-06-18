"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_PERIODS = void 0;
exports["default"] = Period;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _locale = require("../locale");
var _utils = require("../utils");
var _excluded = ["value", "setValue", "locale", "className", "disabled", "readOnly", "shortcuts", "periodsToDisplay"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var ALL_PERIODS = exports.ALL_PERIODS = ['year', 'month', 'week', 'day', 'hour', 'minute', 'reboot'];
function Period(props) {
  var value = props.value,
    setValue = props.setValue,
    locale = props.locale,
    className = props.className,
    disabled = props.disabled,
    readOnly = props.readOnly,
    shortcuts = props.shortcuts,
    _props$periodsToDispl = props.periodsToDisplay,
    periodsToDisplay = _props$periodsToDispl === void 0 ? ALL_PERIODS : _props$periodsToDispl,
    selectProps = _objectWithoutProperties(props, _excluded);
  var options = (0, _react.useMemo)(function () {
    var opts = [{
      value: 'year',
      label: locale.yearOption || _locale.DEFAULT_LOCALE_EN.yearOption
    }, {
      value: 'month',
      label: locale.monthOption || _locale.DEFAULT_LOCALE_EN.monthOption
    }, {
      value: 'week',
      label: locale.weekOption || _locale.DEFAULT_LOCALE_EN.weekOption
    }, {
      value: 'day',
      label: locale.dayOption || _locale.DEFAULT_LOCALE_EN.dayOption
    }, {
      value: 'hour',
      label: locale.hourOption || _locale.DEFAULT_LOCALE_EN.hourOption
    }, {
      value: 'minute',
      label: locale.minuteOption || _locale.DEFAULT_LOCALE_EN.minuteOption
    }];
    if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
      opts.push({
        value: 'reboot',
        label: locale.rebootOption || _locale.DEFAULT_LOCALE_EN.rebootOption
      });
    }
    return opts;
  }, [locale.yearOption, locale.monthOption, locale.weekOption, locale.dayOption, locale.hourOption, locale.minuteOption, locale.rebootOption, shortcuts]);
  var selectedPeriodOptions = (0, _react.useMemo)(function () {
    return options.filter(function (option) {
      return periodsToDisplay.includes(option.value);
    });
  }, [options, periodsToDisplay]);
  var handleChange = (0, _react.useCallback)(function (event) {
    if (!readOnly) {
      setValue(event.target.value);
    }
  }, [setValue, readOnly]);
  var internalClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty(_defineProperty({
      'react-js-cron-field': true,
      'react-js-cron-period': true
    }, "".concat(className, "-field"), !!className), "".concat(className, "-period"), !!className));
  }, [className]);
  var selectClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty({
      'react-js-cron-select': true,
      'react-js-cron-select-no-prefix': locale.prefixPeriod === ''
    }, "".concat(className, "-select"), !!className));
  }, [className, locale.prefixPeriod]);
  return _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixPeriod !== '' && _react["default"].createElement("span", null, locale.prefixPeriod || _locale.DEFAULT_LOCALE_EN.prefixPeriod), _react["default"].createElement(_core.Select, _extends({
    key: JSON.stringify(locale),
    defaultValue: value,
    value: value,
    onChange: handleChange,
    className: selectClassName,
    disabled: disabled,
    open: readOnly ? false : undefined
  }, selectProps), selectedPeriodOptions.map(function (obj) {
    return _react["default"].createElement(_core.MenuItem, {
      key: obj.value,
      value: obj.value
    }, obj.label);
  })));
}