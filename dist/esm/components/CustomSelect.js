const _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "useCronIntervals", "disabled", "readOnly", "leadingZero", "clockFormat", "optionsList", "unit", "multiple", "grid"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo, useCallback } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import { DEFAULT_LOCALE_EN } from '../locale';
import { classNames, sort } from '../utils';
import { parsePartArray, partToString, formatValue } from '../converter';
export default function CustomSelect(props) {
  const {
      value,
      setValue,
      locale,
      className,
      humanizeLabels,
      useCronIntervals,
      disabled,
      readOnly,
      leadingZero,
      clockFormat,
      optionsList,
      unit,
      multiple,
      grid: _grid
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const stringValue = useMemo(() => {
    if (value && Array.isArray(value)) {
      return value.map(value => value.toString());
    }
    return [];
  }, [value]);
  const options = useMemo(() => {
    if (optionsList) {
      return optionsList.map((option, index) => {
        const number = unit.min === 0 ? index : index + 1;
        return {
          value: number.toString(),
          label: option
        };
      });
    }
    return [...Array(unit.total)].map((e, index) => {
      const number = unit.min === 0 ? index : index + 1;
      return {
        value: number.toString(),
        label: formatValue(number, unit, humanizeLabels, leadingZero, clockFormat)
      };
    });
  }, [optionsList, leadingZero, humanizeLabels, clockFormat]);
  const localeJSON = JSON.stringify(locale);
  const renderTag = useCallback(props => {
    const value = props;
    if (!value || isNaN(Number(value[0]))) {
      return React.createElement(React.Fragment, null);
    }
    const parsedArray = parsePartArray(value, unit);
    const cronValue = partToString(parsedArray, unit, humanizeLabels, useCronIntervals, leadingZero, clockFormat);
    const testEveryValue = cronValue.match(/^\*\/([0-9]+),?/) || [];
    return React.createElement("div", null, testEveryValue[1] ? `${locale.everyText || DEFAULT_LOCALE_EN.everyText} 
            ${testEveryValue[1]}` : cronValue);
  }, [value, localeJSON, humanizeLabels, leadingZero, clockFormat]);
  const simpleClick = useCallback(event => {
    let newValueOption = event.target.value;
    let newValue;
    if (Array.isArray(newValueOption)) {
      if (newValueOption.length == 0) {
        newValueOption.push(0);
      }
      if (newValueOption.length > 0 && !multiple) {
        newValueOption = [newValueOption[newValueOption.length - 1]];
      }
      newValue = sort(newValueOption);
    } else {
      newValue = [newValueOption];
    }
    if (newValue.length === unit.total) {
      setValue([]);
    } else {
      setValue(newValue);
    }
  }, [setValue, value]);
  const internalClassName = useMemo(() => classNames({
    'react-js-cron-select': true,
    'react-js-cron-custom-select': true,
    [`${className}-select`]: !!className
  }), [className]);
  return React.createElement(FormControl, {
    variant: "standard"
  }, React.createElement(Select, _extends({
    multiple: true,
    open: readOnly ? false : undefined,
    value: stringValue,
    onChange: simpleClick,
    renderValue: renderTag,
    className: internalClassName,
    autoWidth: false,
    disabled: disabled
  }, selectProps), options.map(obj => React.createElement(MenuItem, {
    key: obj.value,
    value: obj.value
  }, obj.label))));
}