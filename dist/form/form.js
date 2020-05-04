"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Submit = exports.SelectField = exports.CheckBox = exports.RadioField = exports.TextField = exports.TextAreaField = exports.HiddenField = exports.Label = exports.FieldError = exports.FormError = exports.FieldErrorContext = exports.Form = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/concat"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/map"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _reactHookForm = require("react-hook-form");

var _react = _interopRequireWildcard(require("react"));

var DEFAULT_MESSAGES = {
  required: 'is required',
  pattern: 'is not formatted correctly',
  minLength: 'is too short',
  maxLength: 'is too long',
  min: 'is too high',
  max: 'is too low',
  validate: 'is not valid'
}; // Massages a hash of props depending on whether the given named field has
// any errors on it

var inputTagProps = function inputTagProps(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useFormContext = (0, _reactHookForm.useFormContext)(),
      errors = _useFormContext.errors,
      setError = _useFormContext.setError; // Check for errors from server and set on field if present
  // eslint-disable-next-line react-hooks/rules-of-hooks


  var fieldErrorsContext = (0, _react.useContext)(FieldErrorContext);
  var contextError = fieldErrorsContext[props.name]; // eslint-disable-next-line react-hooks/rules-of-hooks

  (0, _react.useEffect)(function () {
    if (contextError) {
      setError(props.name, 'server', contextError);
    }
  }, [contextError, props.name, setError]); // any errors on this field

  var validationError = errors[props.name]; // get errorStyle/errorClassName and replace style/className if present

  var errorClassName = props.errorClassName,
      errorStyle = props.errorStyle,
      tagProps = (0, _objectWithoutProperties2.default)(props, ["errorClassName", "errorStyle"]);

  if (validationError) {
    if (errorClassName) {
      tagProps.className = errorClassName;
    }

    if (errorStyle) {
      tagProps.style = errorStyle;
    }
  }

  return tagProps;
}; // Context for keeping track of errors from the server


var FieldErrorContext = _react.default.createContext(); // Big error message at the top of the page explaining everything that's wrong
// with the form fields in this form


exports.FieldErrorContext = FieldErrorContext;

var FormError = function FormError(_ref) {
  var _error$networkError, _error$networkError$r;

  var error = _ref.error,
      wrapperClassName = _ref.wrapperClassName,
      wrapperStyle = _ref.wrapperStyle,
      titleClassName = _ref.titleClassName,
      titleStyle = _ref.titleStyle,
      listClassName = _ref.listClassName,
      listStyle = _ref.listStyle,
      listItemClassName = _ref.listItemClassName,
      listItemStyle = _ref.listItemStyle;
  var rootMessage = null;
  var messages = null;
  var hasGraphQLError = !!(error === null || error === void 0 ? void 0 : error.graphQLErrors[0]);
  var hasNetworkError = !!(error === null || error === void 0 ? void 0 : (_error$networkError = error.networkError) === null || _error$networkError === void 0 ? void 0 : (_error$networkError$r = _error$networkError.result) === null || _error$networkError$r === void 0 ? void 0 : _error$networkError$r.errors);

  if (hasGraphQLError) {
    var errors = error.graphQLErrors[0].extensions.exception.messages;
    rootMessage = error.graphQLErrors[0].message;
    messages = [];

    var _loop = function _loop(e) {
      var _context;

      (0, _map.default)(_context = errors[e]).call(_context, function (fieldError) {
        var _context2;

        messages.push((0, _concat.default)(_context2 = "".concat(e, " ")).call(_context2, fieldError));
      });
    };

    for (var e in errors) {
      _loop(e);
    }
  } else if (hasNetworkError) {
    var _context3;

    rootMessage = 'An error has occurred';
    messages = (0, _map.default)(_context3 = error.networkError.result.errors).call(_context3, function (error) {
      return error.message.split(';')[1];
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, messages && /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassName,
    style: wrapperStyle
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: titleClassName,
    style: titleStyle
  }, rootMessage), /*#__PURE__*/_react.default.createElement("ul", {
    className: listClassName,
    style: listStyle
  }, (0, _map.default)(messages).call(messages, function (message, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: listItemClassName,
      style: listItemStyle
    }, message);
  }))));
}; // Renders a containing <form> tag with required contexts


exports.FormError = FormError;

var Form = function Form(props) {
  var _errorProps$graphQLEr, _errorProps$graphQLEr2, _errorProps$graphQLEr3;

  // deconstruct some props we care about and keep the remaining `formProps` to
  // pass to the <form> tag
  var errorProps = props.error,
      propFormMethods = props.formMethods,
      onSubmit = props.onSubmit,
      formProps = (0, _objectWithoutProperties2.default)(props, ["error", "formMethods", "onSubmit"]);
  var useFormMethods = (0, _reactHookForm.useForm)(props.validation);
  var formMethods = propFormMethods || useFormMethods;
  return /*#__PURE__*/_react.default.createElement("form", (0, _extends2.default)({}, formProps, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }), /*#__PURE__*/_react.default.createElement(FieldErrorContext.Provider, {
    value: (errorProps === null || errorProps === void 0 ? void 0 : (_errorProps$graphQLEr = errorProps.graphQLErrors[0]) === null || _errorProps$graphQLEr === void 0 ? void 0 : (_errorProps$graphQLEr2 = _errorProps$graphQLEr.extensions) === null || _errorProps$graphQLEr2 === void 0 ? void 0 : (_errorProps$graphQLEr3 = _errorProps$graphQLEr2.exception) === null || _errorProps$graphQLEr3 === void 0 ? void 0 : _errorProps$graphQLEr3.messages) || {}
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.FormContext, formMethods, props.children)));
}; // Renders a <label> tag that can be styled differently if errors are present
// on the related fields


exports.Form = Form;

var Label = function Label(props) {
  var tagProps = inputTagProps(props);
  return /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({
    htmlFor: props.name
  }, tagProps), props.children || props.name);
}; // Renders a <span> with a validation error message if there is an error on this
// field


exports.Label = Label;

var FieldError = function FieldError(props) {
  var _context4;

  var _useFormContext2 = (0, _reactHookForm.useFormContext)(),
      errors = _useFormContext2.errors;

  var validationError = errors[props.name];
  var errorMessage = validationError && (validationError.message || (0, _concat.default)(_context4 = "".concat(props.name, " ")).call(_context4, DEFAULT_MESSAGES[validationError.type]));
  return validationError ? /*#__PURE__*/_react.default.createElement("span", props, errorMessage) : null;
}; // Renders an <input type="hidden"> field


exports.FieldError = FieldError;

var HiddenField = function HiddenField(props) {
  var _useFormContext3 = (0, _reactHookForm.useFormContext)(),
      register = _useFormContext3.register;

  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, props, {
    type: "hidden",
    id: props.id || props.name,
    ref: register(props.validation || {
      required: false
    })
  }));
}; // Renders a <textarea> field


exports.HiddenField = HiddenField;

var TextAreaField = function TextAreaField(props) {
  var _useFormContext4 = (0, _reactHookForm.useFormContext)(),
      register = _useFormContext4.register;

  var tagProps = inputTagProps(props);
  return /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({}, tagProps, {
    id: props.id || props.name,
    ref: register(props.validation || {
      required: false
    })
  }));
}; // Renders an <input type="text"> field


exports.TextAreaField = TextAreaField;

var TextField = function TextField(props) {
  var _useFormContext5 = (0, _reactHookForm.useFormContext)(),
      register = _useFormContext5.register;

  var tagProps = inputTagProps(props);
  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, tagProps, {
    type: props.type || 'text',
    id: props.id || props.name,
    ref: register(props.validation || {
      required: false
    })
  }));
}; // Renders an <input type="radio"> field


exports.TextField = TextField;

var RadioField = function RadioField(props) {
  var _useFormContext6 = (0, _reactHookForm.useFormContext)(),
      register = _useFormContext6.register;

  var tagProps = inputTagProps(props);
  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, tagProps, {
    type: "radio",
    id: props.id || props.name,
    ref: register(props.validation || {
      required: false
    })
  }));
}; // Renders an <input type="checkbox"> field


exports.RadioField = RadioField;

var CheckBox = function CheckBox(props) {
  var _useFormContext7 = (0, _reactHookForm.useFormContext)(),
      register = _useFormContext7.register;

  var tagProps = inputTagProps(props);
  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, tagProps, {
    type: "checkbox",
    id: props.id || props.name,
    ref: register(props.validation || {
      required: false
    })
  }));
}; // Renders a <select> field


exports.CheckBox = CheckBox;

var SelectField = function SelectField(props) {
  var _useFormContext8 = (0, _reactHookForm.useFormContext)(),
      register = _useFormContext8.register;

  var tagProps = inputTagProps(props);
  return /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({}, tagProps, {
    id: props.id || props.name,
    ref: register(props.validation || {
      required: false
    })
  }));
}; // Renders a <button type="submit">


exports.SelectField = SelectField;

var Submit = _react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    ref: ref,
    type: "submit"
  }, props));
});

exports.Submit = Submit;