"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DividerWithText = function DividerWithText(_ref) {
  var children = _ref.children;
  var line = _react["default"].createElement(_material.Box, {
    component: "div",
    sx: {
      borderBottom: "2px solid lightgray",
      width: "100%"
    }
  });
  return _react["default"].createElement(_material.Box, {
    component: "div",
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, line, _react["default"].createElement(_material.Box, {
    component: "span",
    sx: {
      py: 0.5,
      px: 2,
      fontWeight: 500,
      fontSize: 22,
      color: "lightgray"
    }
  }, children), line);
};
var _default = exports["default"] = DividerWithText;