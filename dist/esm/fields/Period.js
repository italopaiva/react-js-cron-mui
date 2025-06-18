const _excluded = ["value", "setValue", "locale", "className", "disabled", "readOnly", "shortcuts", "periodsToDisplay"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useCallback, useMemo } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames } from '../utils';
export const ALL_PERIODS = ['year', 'month', 'week', 'day', 'hour', 'minute', 'reboot'];
export default function Period(props) {
  const {
      value,
      setValue,
      locale,
      className,
      disabled,
      readOnly,
      shortcuts,
      periodsToDisplay = ALL_PERIODS
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const options = useMemo(() => {
    const opts = [{
      value: 'year',
      label: locale.yearOption || DEFAULT_LOCALE_EN.yearOption
    }, {
      value: 'month',
      label: locale.monthOption || DEFAULT_LOCALE_EN.monthOption
    }, {
      value: 'week',
      label: locale.weekOption || DEFAULT_LOCALE_EN.weekOption
    }, {
      value: 'day',
      label: locale.dayOption || DEFAULT_LOCALE_EN.dayOption
    }, {
      value: 'hour',
      label: locale.hourOption || DEFAULT_LOCALE_EN.hourOption
    }, {
      value: 'minute',
      label: locale.minuteOption || DEFAULT_LOCALE_EN.minuteOption
    }];
    if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
      opts.push({
        value: 'reboot',
        label: locale.rebootOption || DEFAULT_LOCALE_EN.rebootOption
      });
    }
    return opts;
  }, [locale.yearOption, locale.monthOption, locale.weekOption, locale.dayOption, locale.hourOption, locale.minuteOption, locale.rebootOption, shortcuts]);
  const selectedPeriodOptions = useMemo(() => {
    return options.filter(option => periodsToDisplay.includes(option.value));
  }, [options, periodsToDisplay]);
  const handleChange = useCallback(event => {
    if (!readOnly) {
      setValue(event.target.value);
    }
  }, [setValue, readOnly]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-field': true,
    'react-js-cron-period': true,
    [`${className}-field`]: !!className,
    [`${className}-period`]: !!className
  }), [className]);
  const selectClassName = useMemo(() => classNames({
    'react-js-cron-select': true,
    'react-js-cron-select-no-prefix': locale.prefixPeriod === '',
    [`${className}-select`]: !!className
  }), [className, locale.prefixPeriod]);
  return React.createElement("div", {
    className: internalClassName
  }, locale.prefixPeriod !== '' && React.createElement("span", null, locale.prefixPeriod || DEFAULT_LOCALE_EN.prefixPeriod), React.createElement(Select, _extends({
    key: JSON.stringify(locale),
    defaultValue: value,
    value: value,
    onChange: handleChange,
    className: selectClassName,
    disabled: disabled,
    open: readOnly ? false : undefined
  }, selectProps), selectedPeriodOptions.map(obj => React.createElement(MenuItem, {
    key: obj.value,
    value: obj.value
  }, obj.label))));
}