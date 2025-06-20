"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthDays;
var _react = _interopRequireWildcard(require("react"));
var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));
var _locale = require("../locale");
var _utils = require("../utils");
var _constants = require("../constants");
var _excluded = ["value", "setValue", "locale", "className", "weekDays", "disabled", "readOnly", "leadingZero", "period"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function MonthDays(props) {
  var value = props.value,
    setValue = props.setValue,
    locale = props.locale,
    className = props.className,
    weekDays = props.weekDays,
    disabled = props.disabled,
    readOnly = props.readOnly,
    leadingZero = props.leadingZero,
    period = props.period,
    selectProps = _objectWithoutProperties(props, _excluded);
  var noWeekDays = !weekDays || weekDays.length === 0;
  var internalClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty(_defineProperty({
      'react-js-cron-field': true,
      'react-js-cron-month-days': true,
      'react-js-cron-month-days-placeholder': !noWeekDays
    }, "".concat(className, "-field"), !!className), "".concat(className, "-month-days"), !!className));
  }, [className, noWeekDays]);
  var localeJSON = JSON.stringify(locale);
  var placeholder = (0, _react.useMemo)(function () {
    if (noWeekDays) {
      return locale.emptyMonthDays || _locale.DEFAULT_LOCALE_EN.emptyMonthDays;
    }
    return locale.emptyMonthDaysShort || _locale.DEFAULT_LOCALE_EN.emptyMonthDaysShort;
  }, [noWeekDays, localeJSON]);
  var displayMonthDays = !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!weekDays || weekDays.length === 0);
  return displayMonthDays ? _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixMonthDays !== '' && _react["default"].createElement("span", null, locale.prefixMonthDays || _locale.DEFAULT_LOCALE_EN.prefixMonthDays), _react["default"].createElement(_CustomSelect["default"], _extends({
    placeholder: placeholder,
    value: value,
    setValue: setValue,
    unit: _constants.UNITS[2],
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: period
  }, selectProps))) : null;
}