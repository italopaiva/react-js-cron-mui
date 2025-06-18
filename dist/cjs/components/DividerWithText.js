"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@material-ui/core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    container: {
      display: "flex",
      alignItems: "center"
    },
    border: {
      borderBottom: "2px solid lightgray",
      width: "100%"
    },
    content: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      fontWeight: 500,
      fontSize: 22,
      color: "lightgray"
    }
  };
});
var DividerWithText = function DividerWithText(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement("div", {
    className: classes.border
  }), _react["default"].createElement("span", {
    className: classes.content
  }, children), _react["default"].createElement("div", {
    className: classes.border
  }));
};
var _default = exports["default"] = DividerWithText;