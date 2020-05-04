"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.useAuth = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphql = require("./graphql");

var USE_AUTH;

var useAuth = function useAuth() {
  return USE_AUTH();
};

exports.useAuth = useAuth;

var RedwoodProvider = function RedwoodProvider(_ref) {
  var _ref$auth = _ref.auth,
      auth = _ref$auth === void 0 ? {} : _ref$auth,
      children = _ref.children;
  var _auth$AuthProvider = auth.AuthProvider,
      AuthProvider = _auth$AuthProvider === void 0 ? _react.default.Fragment : _auth$AuthProvider,
      _auth$GraphQLProvider = auth.GraphQLProvider,
      GraphQLProvider = _auth$GraphQLProvider === void 0 ? _graphql.GraphQLProvider : _auth$GraphQLProvider,
      _auth$useAuth = auth.useAuth,
      useAuth = _auth$useAuth === void 0 ? function () {
    return {};
  } : _auth$useAuth;
  USE_AUTH = useAuth;
  return /*#__PURE__*/_react.default.createElement(AuthProvider, null, /*#__PURE__*/_react.default.createElement(GraphQLProvider, null, children));
};

RedwoodProvider.propTypes = {
  auth: _propTypes.default.shape({
    AuthProvider: _propTypes.default.func.isRequired,
    useAuth: _propTypes.default.func.isRequired,
    GraphQLProvider: _propTypes.default.func.isRequired
  })
};
var _default = RedwoodProvider;
exports.default = _default;