"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @name Slider
 * @description A simple slider control that is easily customizable.
 * @param {string} props.color Color for the slider: defaults to #D1D1D1.
 * @param {function} props.onSlider onclick event function of the button: receives the state `Boolean` of the slider as an argument.
 * @returns {JSX.Element} A slider control.
 */
var sliderInActive = {
  width: 200,
  height: 5,
  borderRadius: 100,
  backgroundColor: "#D1D1D1",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative"
};
var sliderActive = {
  width: 200,
  height: 5,
  borderRadius: 100,
  backgroundColor: "#F00",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative"
};
var sliderChild = {
  width: 16,
  height: 16,
  borderRadius: "100%",
  position: "absolute",
  top: -5.5,
  left: -8,
  transition: "all 0.3s",
  backgroundColor: "#FFF",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
};

var Slider = function Slider() {
  var _useState = (0, _react.useState)(sliderInActive),
      _useState2 = _slicedToArray(_useState, 2),
      sliderState = _useState2[0],
      setSliderState = _useState2[1];

  var sliderControl = function sliderControl(event) {
    event.preventDefault();

    if (1) {
      setSliderState(sliderActive);
    } else {
      setSliderState(sliderInActive);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: sliderState
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: sliderChild,
    onDrag: sliderControl
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden"
  }));
};

var _default = Slider;
exports.default = _default;

//# sourceMappingURL=index.js.map