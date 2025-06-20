const _excluded = ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "periodsToDisplay", "allowMultipleSelectFor", "allowEmpty", "humanizeLabels", "humanizeValue", "useCronIntervals", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"],
  _excluded2 = ["className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { Button } from '@mui/material';
import Period, { ALL_PERIODS } from './fields/Period';
import MonthDays from './fields/MonthDays';
import Months from './fields/Months';
import Hours from './fields/Hours';
import Minutes from './fields/Minutes';
import WeekDays from './fields/WeekDays';
import { classNames, setError, usePrevious } from './utils';
import { DEFAULT_LOCALE_EN } from './locale';
import { setValuesFromCronString, getCronStringFromValues } from './converter';
import './styles.css';
export default function Cron(props) {
  const {
      clearButton = true,
      clearButtonProps = {},
      clearButtonAction = 'fill-with-every',
      locale = DEFAULT_LOCALE_EN,
      value = '',
      setValue,
      displayError = true,
      onError,
      className,
      defaultPeriod = 'day',
      periodsToDisplay = ALL_PERIODS,
      allowMultipleSelectFor = ['months', 'month-days', 'week-days', 'hours', 'minutes'],
      allowEmpty = 'for-default-value',
      humanizeLabels = true,
      humanizeValue = false,
      useCronIntervals = true,
      disabled = false,
      readOnly = false,
      leadingZero = false,
      shortcuts = ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly'],
      clockFormat
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const internalValueRef = useRef(value);
  const defaultPeriodRef = useRef(defaultPeriod);
  const [period, setPeriod] = useState();
  const [monthDays, setMonthDays] = useState();
  const [months, setMonths] = useState();
  const [weekDays, setWeekDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [error, setInternalError] = useState(false);
  const [valueCleared, setValueCleared] = useState(false);
  const previousValueCleared = usePrevious(valueCleared);
  const localeJSON = JSON.stringify(locale);
  useEffect(() => {
    setValuesFromCronString(value, setInternalError, onError, allowEmpty, internalValueRef, true, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
  }, []);
  useEffect(() => {
    if (value !== internalValueRef.current) {
      setValuesFromCronString(value, setInternalError, onError, allowEmpty, internalValueRef, false, locale, shortcuts, setMinutes, setHours, setMonthDays, setMonths, setWeekDays, setPeriod);
    }
  }, [value, internalValueRef, localeJSON, allowEmpty, shortcuts]);
  useEffect(() => {
    if ((period || minutes || months || monthDays || weekDays || hours || minutes) && !valueCleared && !previousValueCleared) {
      const cron = getCronStringFromValues(period || defaultPeriodRef.current, months, monthDays, weekDays, hours, minutes, humanizeValue, useCronIntervals);
      setValue(cron);
      internalValueRef.current = cron;
      onError && onError(undefined);
      setInternalError(false);
    } else if (valueCleared) {
      setValueCleared(false);
    }
  }, [period, monthDays, months, weekDays, hours, minutes, humanizeValue, useCronIntervals, valueCleared]);
  const handleClear = useCallback(() => {
    setMonthDays(undefined);
    setMonths(undefined);
    setWeekDays(undefined);
    setHours(undefined);
    setMinutes(undefined);
    let newValue = '';
    const newPeriod = period !== 'reboot' && period ? period : defaultPeriodRef.current;
    if (newPeriod !== period) {
      setPeriod(newPeriod);
    }
    if (clearButtonAction === 'fill-with-every') {
      const cron = getCronStringFromValues(newPeriod, undefined, undefined, undefined, undefined, undefined);
      newValue = cron;
    }
    setValue(newValue);
    internalValueRef.current = newValue;
    setValueCleared(true);
    if (allowEmpty === 'never' && clearButtonAction === 'empty') {
      setInternalError(true);
      setError(onError, locale);
    } else {
      onError && onError(undefined);
      setInternalError(false);
    }
  }, [period, setValue, onError, clearButtonAction]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron': true,
    'react-js-cron-error': error && displayError,
    'react-js-cron-disabled': disabled,
    'react-js-cron-read-only': readOnly,
    [`${className}`]: !!className,
    [`${className}-error`]: error && displayError && !!className,
    [`${className}-disabled`]: disabled && !!className,
    [`${className}-read-only`]: readOnly && !!className
  }), [className, error, displayError, disabled, readOnly]);
  const {
      className: clearButtonClassNameProp
    } = clearButtonProps,
    otherClearButtonProps = _objectWithoutProperties(clearButtonProps, _excluded2);
  const clearButtonClassName = useMemo(() => classNames({
    'react-js-cron-clear-button': true,
    [`${className}-clear-button`]: !!className,
    [`${clearButtonClassNameProp}`]: !!clearButtonClassNameProp
  }), [className, clearButtonClassNameProp]);
  const otherClearButtonPropsJSON = JSON.stringify(otherClearButtonProps);
  const clearButtonNode = useMemo(() => {
    if (clearButton && !readOnly) {
      return React.createElement(Button, {
        sx: {
          ml: 1
        },
        className: clearButtonClassName,
        variant: "contained",
        color: "secondary",
        disabled: disabled,
        onClick: handleClear
      }, locale.clearButtonText || DEFAULT_LOCALE_EN.clearButtonText);
    }
    return null;
  }, [clearButton, readOnly, localeJSON, clearButtonClassName, disabled, otherClearButtonPropsJSON, handleClear]);
  const periodForRender = period || defaultPeriodRef.current;
  return React.createElement("div", {
    className: internalClassName
  }, React.createElement(Period, _extends({
    value: periodForRender,
    setValue: setPeriod,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    shortcuts: shortcuts,
    periodsToDisplay: periodsToDisplay
  }, selectProps)), periodForRender === 'reboot' ? clearButtonNode : React.createElement(React.Fragment, null, periodForRender === 'year' && React.createElement(Months, _extends({
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
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month') && React.createElement(MonthDays, _extends({
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
  }, selectProps)), (periodForRender === 'year' || periodForRender === 'month' || periodForRender === 'week') && React.createElement(WeekDays, _extends({
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
  }, selectProps)), React.createElement("div", null, periodForRender !== 'minute' && periodForRender !== 'hour' && React.createElement(Hours, _extends({
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
  }, selectProps)), periodForRender !== 'minute' && React.createElement(Minutes, _extends({
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