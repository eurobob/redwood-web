"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/reflect/construct"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = (0, _construct.default)(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct.default) return false; if (_construct.default.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct.default)(Date, [], function () {})); return true; } catch (e) { return false; } }

var InfallibleErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(InfallibleErrorBoundary, _React$Component);

  var _super = _createSuper(InfallibleErrorBoundary);

  function InfallibleErrorBoundary() {
    var _context;

    var _this;

    (0, _classCallCheck2.default)(this, InfallibleErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat.default)(_context = [this]).call(_context, args));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  (0, _createClass2.default)(InfallibleErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/_react.default.createElement("h1", null, "Something went wrong and we are unable to show this page.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return InfallibleErrorBoundary;
}(_react.default.Component);

var FatalErrorBoundary = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2.default)(FatalErrorBoundary, _React$Component2);

  var _super2 = _createSuper(FatalErrorBoundary);

  function FatalErrorBoundary() {
    var _context2;

    var _this2;

    (0, _classCallCheck2.default)(this, FatalErrorBoundary);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, (0, _concat.default)(_context2 = [this]).call(_context2, args));
    _this2.state = {
      hasError: false
    };
    return _this2;
  }

  (0, _createClass2.default)(FatalErrorBoundary, [{
    key: "render",
    value: function render() {
      var Page = this.props.page;

      if (this.state.hasError) {
        return /*#__PURE__*/_react.default.createElement(InfallibleErrorBoundary, null, /*#__PURE__*/_react.default.createElement(Page, null));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return FatalErrorBoundary;
}(_react.default.Component);

var _default = FatalErrorBoundary;
exports.default = _default;