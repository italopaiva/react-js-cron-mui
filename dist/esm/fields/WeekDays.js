const _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "monthDays", "disabled", "readOnly", "period"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function WeekDays(props) {
  const {
      value,
      setValue,
      locale,
      className,
      humanizeLabels,
      monthDays,
      disabled,
      readOnly,
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const optionsList = locale.weekDays || DEFAULT_LOCALE_EN.weekDays;
  const noMonthDays = period === 'week' || !monthDays || monthDays.length === 0;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-week-days': true,
    'react-js-cron-week-days-placeholder': !noMonthDays,
    [`${className}-field`]: !!className,
    [`${className}-week-days`]: !!className
  }), [className, noMonthDays]);
  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(() => {
    if (noMonthDays) {
      return locale.emptyWeekDays || DEFAULT_LOCALE_EN.emptyWeekDays;
    }
    return locale.emptyWeekDaysShort || DEFAULT_LOCALE_EN.emptyWeekDaysShort;
  }, [noMonthDays, localeJSON]);
  const displayWeekDays = period === 'week' || !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!monthDays || monthDays.length === 0);
  const monthDaysIsDisplayed = !readOnly || monthDays && monthDays.length > 0 || (!monthDays || monthDays.length === 0) && (!value || value.length === 0);
  return displayWeekDays ? React.createElement("div", {
    className: internalClassName
  }, locale.prefixWeekDays !== '' && (period === 'week' || !monthDaysIsDisplayed) && React.createElement("span", null, locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays), locale.prefixWeekDaysForMonthAndYearPeriod !== '' && period !== 'week' && monthDaysIsDisplayed && React.createElement("span", null, locale.prefixWeekDaysForMonthAndYearPeriod || DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod), React.createElement(CustomSelect, _extends({
    placeholder: placeholder,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, UNITS[4]), {}, {
      alt: locale.altWeekDays || DEFAULT_LOCALE_EN.altWeekDays
    }),
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period
  }, selectProps))) : null;
}