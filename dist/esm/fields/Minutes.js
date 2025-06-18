const _excluded = ["value", "setValue", "locale", "className", "disabled", "readOnly", "leadingZero", "clockFormat", "period"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo } from 'react';
import CustomSelect from '../components/CustomSelect';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
import { UNITS } from '../constants';
export default function Minutes(props) {
  const {
      value,
      setValue,
      locale,
      className,
      disabled,
      readOnly,
      leadingZero,
      clockFormat,
      period
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-minutes': true,
    [`${className}-field`]: !!className,
    [`${className}-minutes`]: !!className
  }), [className]);
  return React.createElement("div", {
    className: internalClassName
  }, period === 'hour' ? locale.prefixMinutesForHourPeriod !== '' && React.createElement("span", null, locale.prefixMinutesForHourPeriod || DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod) : locale.prefixMinutes !== '' && React.createElement("span", null, locale.prefixMinutes || DEFAULT_LOCALE_EN.prefixMinutes), React.createElement(CustomSelect, _extends({
    placeholder: period === 'hour' ? locale.emptyMinutesForHourPeriod || DEFAULT_LOCALE_EN.emptyMinutesForHourPeriod : locale.emptyMinutes || DEFAULT_LOCALE_EN.emptyMinutes,
    value: value,
    unit: UNITS[0],
    setValue: setValue,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: period
  }, selectProps)), period === 'hour' && locale.suffixMinutesForHourPeriod !== '' && React.createElement("span", null, locale.suffixMinutesForHourPeriod || DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod));
}