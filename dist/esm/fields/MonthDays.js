const _excluded = ["value", "setValue", "locale", "className", "weekDays", "disabled", "readOnly", "leadingZero", "period"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function MonthDays(props) {
  const {
      value,
      setValue,
      locale,
      className,
      weekDays,
      disabled,
      readOnly,
      leadingZero,
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const noWeekDays = !weekDays || weekDays.length === 0;
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-month-days': true,
    'react-js-cron-month-days-placeholder': !noWeekDays,
    [`${className}-field`]: !!className,
    [`${className}-month-days`]: !!className
  }), [className, noWeekDays]);
  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(() => {
    if (noWeekDays) {
      return locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays;
    }
    return locale.emptyMonthDaysShort || DEFAULT_LOCALE_EN.emptyMonthDaysShort;
  }, [noWeekDays, localeJSON]);
  const displayMonthDays = !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!weekDays || weekDays.length === 0);
  return displayMonthDays ? React.createElement("div", {
    className: internalClassName
  }, locale.prefixMonthDays !== '' && React.createElement("span", null, locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays), React.createElement(CustomSelect, _extends({
    placeholder: placeholder,
    value: value,
    setValue: setValue,
    unit: UNITS[2],
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    period: period
  }, selectProps))) : null;
}