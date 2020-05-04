"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.withCell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/keys"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/array/is-array"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _reactComponents = require("@apollo/react-components");

/**
 * Is a higher-order-component that executes a GraphQL query and automatically
 * manages the lifecycle of that query. If you export named parameters that match
 * the required params of `withCell` it will be automatically wrapped in this
 * HOC via a babel-plugin.
 *
 * @param {string} QUERY - The graphQL syntax tree to execute
 * @param {function=} beforeQuery - Prepare the variables and options for the query
 * @param {function=} afterQuery - Sanitize the data return from graphQL
 * @param {Component=} Loading - Loading, render this component
 * @param {Component=} Empty - Loading, render this component
 * @param {Component=} Failure - Something went wrong, render this component
 * @param {Component} Success - Data has loaded, render this component
 *
 * @example
 * ```js
 * // IMPLEMENTATION:
 * // `src/ExampleComponent/index.js`. This file is automatically dealt with
 * in webpack.
 *
 * import { withCell } from '@redwoodjs/web'
 * import * as cell from './ExampleComponent'
 *
 * export default withCell(cell)
 * ```
 *
 * // USAGE:
 * // Now you have a cell component that will handle the lifecycle methods of
 * // a query
 * import ExampleComponent from 'src/ExampleComponent'
 *
 * const ThingThatUsesExampleComponent = () => {
 *  return <div><ExampleComponent /></div>
 * }
 */
var withCell = function withCell(_ref) {
  var _ref$beforeQuery = _ref.beforeQuery,
      beforeQuery = _ref$beforeQuery === void 0 ? function (props) {
    return {
      variables: props
    };
  } : _ref$beforeQuery,
      QUERY = _ref.QUERY,
      _ref$afterQuery = _ref.afterQuery,
      afterQuery = _ref$afterQuery === void 0 ? function (data) {
    return (0, _objectSpread2.default)({}, data);
  } : _ref$afterQuery,
      _ref$Loading = _ref.Loading,
      Loading = _ref$Loading === void 0 ? function () {
    return 'Loading...';
  } : _ref$Loading,
      Failure = _ref.Failure,
      Empty = _ref.Empty,
      Success = _ref.Success;

  var isDataNull = function isDataNull(data) {
    return dataField(data) === null;
  };

  var isDataEmptyArray = function isDataEmptyArray(data) {
    return (0, _isArray.default)(dataField(data)) && dataField(data).length === 0;
  };

  var dataField = function dataField(data) {
    return data[(0, _keys.default)(data)[0]];
  };

  var isEmpty = function isEmpty(data) {
    return isDataNull(data) || isDataEmptyArray(data);
  };

  var queryObject = function queryObject(props) {
    if (typeof QUERY === 'function') {
      return QUERY(props);
    }

    return QUERY;
  };

  return function (props) {
    return /*#__PURE__*/_react.default.createElement(_reactComponents.Query, (0, _extends2.default)({
      query: queryObject
    }, beforeQuery(props)), function (_ref2) {
      var error = _ref2.error,
          loading = _ref2.loading,
          data = _ref2.data,
          queryRest = (0, _objectWithoutProperties2.default)(_ref2, ["error", "loading", "data"]);

      if (error) {
        if (Failure) {
          return /*#__PURE__*/_react.default.createElement(Failure, (0, _extends2.default)({
            error: error
          }, queryRest, props));
        } else {
          console.error(error);
        }
      } else if (loading) {
        return /*#__PURE__*/_react.default.createElement(Loading, (0, _extends2.default)({}, queryRest, props));
      } else if (data) {
        if (typeof Empty !== 'undefined' && isEmpty(data)) {
          return /*#__PURE__*/_react.default.createElement(Empty, (0, _extends2.default)({}, queryRest, props));
        } else {
          return /*#__PURE__*/_react.default.createElement(Success, (0, _extends2.default)({}, afterQuery(data), queryRest, props));
        }
      } else {
        throw 'Cannot render cell: graphQL success but `data` is null';
      }
    });
  };
};

exports.withCell = withCell;