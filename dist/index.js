"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js/object/keys");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js/instance/for-each");

var _context, _context2;

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  __REDWOOD__: true,
  RedwoodProvider: true,
  useAuth: true,
  gql: true,
  useQuery: true,
  useMutation: true,
  useApolloClient: true,
  FatalErrorBoundary: true
};

_Object$defineProperty(exports, "__REDWOOD__", {
  enumerable: true,
  get: function get() {
    return _config.__REDWOOD__;
  }
});

_Object$defineProperty(exports, "RedwoodProvider", {
  enumerable: true,
  get: function get() {
    return _RedwoodProvider.default;
  }
});

_Object$defineProperty(exports, "useAuth", {
  enumerable: true,
  get: function get() {
    return _RedwoodProvider.useAuth;
  }
});

_Object$defineProperty(exports, "gql", {
  enumerable: true,
  get: function get() {
    return _graphqlTag.default;
  }
});

_Object$defineProperty(exports, "useQuery", {
  enumerable: true,
  get: function get() {
    return _reactHooks.useQuery;
  }
});

_Object$defineProperty(exports, "useMutation", {
  enumerable: true,
  get: function get() {
    return _reactHooks.useMutation;
  }
});

_Object$defineProperty(exports, "useApolloClient", {
  enumerable: true,
  get: function get() {
    return _reactHooks.useApolloClient;
  }
});

_Object$defineProperty(exports, "FatalErrorBoundary", {
  enumerable: true,
  get: function get() {
    return _FatalErrorBoundary.default;
  }
});

var _config = require("./config");

var _RedwoodProvider = _interopRequireWildcard(require("./RedwoodProvider"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _graphql = require("./graphql");

_forEachInstanceProperty(_context = _Object$keys(_graphql)).call(_context, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _graphql[key];
    }
  });
});

var _reactHooks = require("@apollo/react-hooks");

var _form = require("./form/form");

_forEachInstanceProperty(_context2 = _Object$keys(_form)).call(_context2, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form[key];
    }
  });
});

var _FatalErrorBoundary = _interopRequireDefault(require("./FatalErrorBoundary"));