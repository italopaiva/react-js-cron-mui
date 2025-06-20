"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Cron;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Period = _interopRequireWildcard(require("./fields/Period"));
var _MonthDays = _interopRequireDefault(require("./fields/MonthDays"));
var _Months = _interopRequireDefault(require("./fields/Months"));
var _Hours = _interopRequireDefault(require("./fields/Hours"));
var _Minutes = _interopRequireDefault(require("./fields/Minutes"));
var _WeekDays = _interopRequireDefault(require("./fields/WeekDays"));
var _utils = require("./utils");
var _locale = require("./locale");
var _converter = require("./converter");
require("./styles.css");
var _excluded = ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "periodsToDisplay", "allowMultipleSelectFor", "allowEmpty", "humanizeLabels", "humanizeValue", "useCronIntervals", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"],
  _excluded2 = ["className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function Cron(props) {
  var _props$clearButton = props.clearButton,
    clearButton = _props$clearButton === void 0 ? true : _props$clearButton,
    _props$clearButtonPro = props.clearButtonProps,
    clearButtonProps = _props$clearButtonPro === void 0 ? {} : _props$clearButtonPro,
    _props$clearButtonAct = props.clearButtonAction,
    clearButtonAction = _props$clearButtonAct === void 0 ? 'fill-with-every' : _props$clearButtonAct,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? _locale.DEFAULT_LOCALE_EN : _props$locale,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    setValue = props.setValue,
    _props$displayError = props.displayError,
    displayError = _props$displayError === void 0 ? true : _props$displayError,
    onError = props.onError,
    className = props.className,
    _props$defaultPeriod = props.defaultPeriod,
    defaultPeriod = _props$defaultPeriod === void 0 ? 'day' : _props$defaultPeriod,
    _props$periodsToDispl = props.periodsToDisplay,
    periodsToDisplay = _props$periodsToDispl === void 0 ? _Period.ALL_PERIODS : _props$periodsToDispl,
    _props$allowMultipleS = props.allowMultipleSelectFor,
    allowMultipleSelectFor = _props$allowMultipleS === void 0 ? ['months', 'month-days', 'week-days', 'hours', 'minutes'] : _props$allowMultipleS,
    _props$allowEmpty = props.allowEmpty,
    allowEmpty = _props$allowEmpty === void 0 ? 'for-default-value' : _props$allowEmpty,
    _props$humanizeLabels = props.humanizeLabels,
    humanizeLabels = _props$humanizeLabels === void 0 ? true : _props$humanizeLabels,
    _props$humanizeValue = props.humanizeValue,
    humanizeValue = _props$humanizeValue === void 0 ? false : _props$humanizeValue,
    _props$useCronInterva = props.useCronIntervals,
    useCronIntervals = _props$useCronInterva === void 0 ? true : _props$useCronInterva,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    _props$leadingZero = props.leadingZero,
    leadingZero = _props$leadingZero === void 0 ? false : _props$leadingZero,
    _props$shortcuts = props.shortcuts,
    shortcuts = _props$shortcuts === void 0 ? ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly'] : _props$shortcuts,
    clockFormat = props.clockFormat,
    selectProps = _objectWithoutProperties(props, _excluded);
  var internalValueRef = (0, _react.useRef)(value);
  var defaultPeriodRef = (0, _react.useRef)(defaultPeriod);
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    period = _useState2[0],
    setPeriod = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    monthDays = _useState4[0],
    setMonthDays = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    months = _useState6[0],
    setMonths = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    weekDays = _useState8[0],
    setWeekDays = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState0 = _slicedToArray(_useState9, 2),
    hours = _useState0[0],
    setHours = _useState0[1];
  var _useState1 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState1, 2),
    minutes = _useState10[0],
    setMinutes = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    setInternalError = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    valueCleared = _useState14[0],
    setValueCleared = _useState14[1];
  var previousValueCleared = (0, _utils.usePrevious)(valueCleared);
  var localeJSON = JSON.stringify(locale);
  (0, _react.useEffect)(function () {
    (0, _converter.setValuesFromCronString)(value, setInternalError, onError, allowEmpty, internalValueRef, true, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
  }, []);
  (0, _react.useEffect)(function () {
    if (value !== internalValueRef.current) {
      (0, _converter.setValuesFromCronString)(value, setInternalError, onError, allowEmpty, internalValueRef, false, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
    }
  }, [value, internalValueRef, localeJSON, allowEmpty, shortcuts]);
  (0, _react.useEffect)(function () {
    if ((period || minutes || months || monthDays || weekDays || hours || minutes) && !valueCleared && !previousValueCleared) {
      var cron = (0, _converter.getCronStringFromValues)(period || defaultPeriodRef.current, months, monthDays, weekDays, hours, minutes, humanizeValue, useCronIntervals);
      setValue(cron);
      internalValueRef.current = cron;
      onError && onError(undefined);
      setInternalError(false);
    } else if (valueCleared) {
      setValueCleared(false);
    }
  }, [period, monthDays, months, weekDays, hours, minutes, humanizeValue, useCronIntervals, valueCleared]);
  var handleClear = (0, _react.useCallback)(function () {
    setMonthDays(undefined);
    setMonths(undefined);
    setWeekDays(undefined);
    setHours(undefined);
    setMinutes(undefined);
    var newValue = '';
    var newPeriod = period !== 'reboot' && period ? period : defaultPeriodRef.current;
    if (newPeriod !== period) {
      setPeriod(newPeriod);
    }
    if (clearButtonAction === 'fill-with-every') {
      var cron = (0, _converter.getCronStringFromValues)(newPeriod, undefined, undefined, undefined, undefined, undefined);
      newValue = cron;
    }
    setValue(newValue);
    internalValueRef.current = newValue;
    setValueCleared(true);
    if (allowEmpty === 'never' && clearButtonAction === 'empty') {
      setInternalError(true);
      (0, _utils.setError)(onError, locale);
    } else {
      onError && onError(undefined);
      setInternalError(false);
    }
  }, [period, setValue, onError, clearButtonAction]);
  var internalClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      'react-js-cron': true,
      'react-js-cron-error': error && displayError,
      'react-js-cron-disabled': disabled,
      'react-js-cron-read-only': readOnly
    }, "".concat(className), !!className), "".concat(className, "-error"), error && displayError && !!className), "".concat(className, "-disabled"), disabled && !!className), "".concat(className, "-read-only"), readOnly && !!className));
  }, [className, error, displayError, disabled, readOnly]);
  var clearButtonClassNameProp = clearButtonProps.className,
    otherClearButtonProps = _objectWithoutProperties(clearButtonProps, _excluded2);
  var clearButtonClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty(_defineProperty({
      'react-js-cron-clear-button': true
    }, "".concat(className, "-clear-button"), !!className), "".concat(clearButtonClassNameProp), !!clearButtonClassNameProp));
  }, [className, clearButtonClassNameProp]);
  var otherClearButtonPropsJSON = JSON.stringify(otherClearButtonProps);
  var clearButtonNode = (0, _react.useMemo)(function () {
    if (clearButton && !readOnly) {
      return _react["default"].createElement(_material.Button, {
        sx: {
          ml: 1
        },
        className: clearButtonClassName,
        variant: "contained",
        color: "secondary",
        disabled: disabled,
        onClick: handleClear
      }, locale.clearButtonText || _locale.DEFAULT_LOCALE_EN.clearButtonText);
    }
    return null;
  }, [clearButton, readOnly, localeJSON, clearButtonClassName, disabled, otherClearButtonPropsJSON, handleClear]);
  var periodForRender = period || defaultPeriodRef.current;
  return _react["default"].createElement("div", {
    className: internalClassName
  }, _react["default"].createElement(_Period["default"], _extends({
    value: periodForRender,
    setValue: setPeriod,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    shortcuts: shortcuts,
    periodsToDisplay: periodsToDisplay
  }, selectProps)), periodForRender === 'reboot' ? clearButtonNode : _react["default"].createElement(_react["default"].Fragment, null, periodForRender === 'year' && _react["default"].createElement(_Months["default"], _extends({
    value: months,
    setValue: setMonths,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: periodForRender,
    useCronIntervals: useCronIntervals,
    multiple: allowMultipleSelectFor.includes('months')
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month') && _react["default"].createElement(_MonthDays["default"], _extends({
    value: monthDays,
    setValue: setMonthDays,
    locale: locale,
    className: className,
    weekDays: weekDays,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: periodForRender,
    useCronIntervals: useCronIntervals,
    multiple: allowMultipleSelectFor.includes('month-days')
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month' || periodForRender === 'week') && _react["default"].createElement(_WeekDays["default"], _extends({
    value: weekDays,
    setValue: setWeekDays,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    monthDays: monthDays,
    disabled: disabled,
    readOnly: readOnly,
    period: periodForRender,
    useCronIntervals: useCronIntervals,
    multiple: allowMultipleSelectFor.includes('week-days')
  }, selectProps)), _react["default"].createElement("div", null, periodForRender !== 'minute' && periodForRender !== 'hour' && _react["default"].createElement(_Hours["default"], _extends({
    value: hours,
    setValue: setHours,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: periodForRender,
    useCronIntervals: useCronIntervals,
    multiple: allowMultipleSelectFor.includes('hours')
  }, selectProps)), periodForRender !== 'minute' && _react["default"].createElement(_Minutes["default"], _extends({
    value: minutes,
    setValue: setMinutes,
    locale: locale,
    period: periodForRender,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    useCronIntervals: useCronIntervals,
    multiple: allowMultipleSelectFor.includes('minutes')
  }, selectProps)), clearButtonNode)));
}