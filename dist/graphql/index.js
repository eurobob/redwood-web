"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "withCell", {
  enumerable: true,
  get: function get() {
    return _withCell.withCell;
  }
});

exports.GraphQLProvider = exports.createGraphQLClient = void 0;

var _react = _interopRequireDefault(require("react"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectSpread2"));

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

var _reactHooks = require("@apollo/react-hooks");

var _config = require("../config");

var _withCell = require("./withCell");

var DEFAULT_CLIENT_CONFIG = {
  uri: "".concat(_config.__REDWOOD__.API_PROXY_PATH, "/graphql")
};

var createGraphQLClient = function createGraphQLClient(config) {
  return new _apolloBoost.default((0, _objectSpread2.default)({}, DEFAULT_CLIENT_CONFIG, {}, config));
};

exports.createGraphQLClient = createGraphQLClient;

var GraphQLProvider = function GraphQLProvider(_ref) {
  var _ref$client = _ref.client,
      client = _ref$client === void 0 ? createGraphQLClient() : _ref$client,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["client"]);
  return /*#__PURE__*/_react.default.createElement(_reactHooks.ApolloProvider, (0, _extends2.default)({
    client: client
  }, rest));
};

exports.GraphQLProvider = GraphQLProvider;