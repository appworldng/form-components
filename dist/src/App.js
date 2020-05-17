"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ToggleControl = _interopRequireDefault(require("./components/ToggleControl/"));

var _SliderControl = _interopRequireDefault(require("./components/SliderControl/"));

var _KnobControl = _interopRequireDefault(require("./components/KnobControl/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = {
  padding: "4em",
  textAlign: "center"
};

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("section", {
    style: section
  }, /*#__PURE__*/_react.default.createElement(_ToggleControl.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_SliderControl.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_KnobControl.default, null));
};

var _default = App;
exports.default = _default;

//# sourceMappingURL=App.js.map