"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomSelect;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _locale = require("../locale");
var _utils = require("../utils");
var _converter = require("../converter");
var _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "useCronIntervals", "disabled", "readOnly", "leadingZero", "clockFormat", "optionsList", "unit", "multiple", "grid"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function CustomSelect(props) {
  var value = props.value,
    setValue = props.setValue,
    locale = props.locale,
    className = props.className,
    humanizeLabels = props.humanizeLabels,
    useCronIntervals = props.useCronIntervals,
    disabled = props.disabled,
    readOnly = props.readOnly,
    leadingZero = props.leadingZero,
    clockFormat = props.clockFormat,
    optionsList = props.optionsList,
    unit = props.unit,
    multiple = props.multiple,
    _grid = props.grid,
    selectProps = _objectWithoutProperties(props, _excluded);
  var stringValue = (0, _react.useMemo)(function () {
    if (value && Array.isArray(value)) {
      return value.map(function (value) {
        return value.toString();
      });
    }
    return [];
  }, [value]);
  var options = (0, _react.useMemo)(function () {
    if (optionsList) {
      return optionsList.map(function (option, index) {
        var number = unit.min === 0 ? index : index + 1;
        return {
          value: number.toString(),
          label: option
        };
      });
    }
    return _toConsumableArray(Array(unit.total)).map(function (e, index) {
      var number = unit.min === 0 ? index : index + 1;
      return {
        value: number.toString(),
        label: (0, _converter.formatValue)(number, unit, humanizeLabels, leadingZero, clockFormat)
      };
    });
  }, [optionsList, leadingZero, humanizeLabels, clockFormat]);
  var localeJSON = JSON.stringify(locale);
  var renderTag = (0, _react.useCallback)(function (props) {
    var value = props;
    if (!value || isNaN(Number(value[0]))) {
      return _react["default"].createElement(_react["default"].Fragment, null);
    }
    var parsedArray = (0, _converter.parsePartArray)(value, unit);
    var cronValue = (0, _converter.partToString)(parsedArray, unit, humanizeLabels, useCronIntervals, leadingZero, clockFormat);
    var testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
    return _react["default"].createElement("div", null, testEveryValue[1] ? "".concat(locale.everyText || _locale.DEFAULT_LOCALE_EN.everyText, " \n            ").concat(testEveryValue[1]) : cronValue);
  }, [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
  var simpleClick = (0, _react.useCallback)(function (event) {
    var newValueOption = event.target.value;
    var newValue;
    if (Array.isArray(newValueOption)) {
      if (newValueOption.length == 0) {
        newValueOption.push(0);
      }
      if (newValueOption.length > 0 && !multiple) {
        newValueOption = [newValueOption[newValueOption.length - 1]];
      }
      newValue = (0, _utils.sort)(newValueOption);
    } else {
      newValue = [newValueOption];
    }
    if (newValue.length === unit.total) {
      setValue([]);
    } else {
      setValue(newValue);
    }
  }, [setValue, value]);
  var internalClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty({
      'react-js-cron-select': true,
      'react-js-cron-custom-select': true
    }, "".concat(className, "-select"), !!className));
  }, [className]);
  return _react["default"].createElement(_core.Select, _extends({
    multiple: true,
    open: readOnly ? false : undefined,
    value: stringValue,
    onChange: simpleClick,
    renderValue: renderTag,
    className: internalClassName,
    autoWidth: false,
    disabled: disabled
  }, selectProps), options.map(function (obj) {
    return _react["default"].createElement(_core.MenuItem, {
      key: obj.value,
      value: obj.value
    }, obj.label);
  }));
}