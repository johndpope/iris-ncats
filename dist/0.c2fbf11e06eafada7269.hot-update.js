webpackHotUpdate(0,{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _python = __webpack_require__(61);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// reference to the file input dom element\nvar file_input = void 0;\n\n// update the main input box with path from file selected, and pass to hint for confirmation\nvar onChangeFile = function onChangeFile(dispatch) {\n    _InputBox.input.value = file_input.files[0].path;\n    (0, _python.updateHint)(_InputBox.input.value);\n};\n\nvar FilePickMessage = function FilePickMessage(_ref) {\n    var dispatch = _ref.dispatch,\n        active = _ref.active,\n        origin = _ref.origin,\n        text = _ref.text,\n        hidden = _ref.hidden;\n\n    console.log(active);\n    var readonly = active === true ? {} : { 'disabled': true };\n    return _react2.default.createElement(\n        'div',\n        { className: origin === 'iris' ? 'message left' : 'message right', style: hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n            'div',\n            { className: 'bubble' },\n            _react2.default.createElement('input', _extends({ type: 'file', name: 'file', id: 'file' }, readonly, { className: 'inputfile', onChange: function onChange() {\n                    return onChangeFile(dispatch);\n                }, ref: function ref(node) {\n                    file_input = node;\n                } }))\n        )\n    );\n};\n\nexports.default = FilePickMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GaWxlUGlja01lc3NhZ2UuanM/MjEwYSJdLCJuYW1lcyI6WyJmaWxlX2lucHV0Iiwib25DaGFuZ2VGaWxlIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsImZpbGVzIiwicGF0aCIsIkZpbGVQaWNrTWVzc2FnZSIsImFjdGl2ZSIsIm9yaWdpbiIsInRleHQiLCJoaWRkZW4iLCJjb25zb2xlIiwibG9nIiwicmVhZG9ubHkiLCJkaXNwbGF5Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFJQSxtQkFBSjs7QUFFQTtBQUNBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQWM7QUFDL0Isb0JBQU1DLEtBQU4sR0FBY0gsV0FBV0ksS0FBWCxDQUFpQixDQUFqQixFQUFvQkMsSUFBbEM7QUFDQSw0QkFBVyxnQkFBTUYsS0FBakI7QUFDSCxDQUhEOztBQUtBLElBQU1HLGtCQUFrQixTQUFsQkEsZUFBa0IsT0FBK0M7QUFBQSxRQUE1Q0osUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsUUFBbENLLE1BQWtDLFFBQWxDQSxNQUFrQztBQUFBLFFBQTFCQyxNQUEwQixRQUExQkEsTUFBMEI7QUFBQSxRQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsUUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUNyRUMsWUFBUUMsR0FBUixDQUFZTCxNQUFaO0FBQ0EsUUFBTU0sV0FBV04sV0FBVyxJQUFYLEdBQWtCLEVBQWxCLEdBQXVCLEVBQUMsWUFBVyxJQUFaLEVBQXhDO0FBQ0EsV0FBUTtBQUFBO0FBQUEsVUFBSyxXQUFhQyxXQUFXLE1BQVgsR0FBb0IsY0FBcEIsR0FBcUMsZUFBdkQsRUFBd0UsT0FBT0UsV0FBVyxJQUFYLEdBQWtCLEVBQUNJLFNBQVMsTUFBVixFQUFsQixHQUFzQyxFQUFySDtBQUNKO0FBQUE7QUFBQSxjQUFLLFdBQVksUUFBakI7QUFDQSw4REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixJQUFHLE1BQWxDLElBQTZDRCxRQUE3QyxJQUF1RCxXQUFVLFdBQWpFLEVBQTZFLFVBQVU7QUFBQSwyQkFBTVosYUFBYUMsUUFBYixDQUFOO0FBQUEsaUJBQXZGLEVBQXFILEtBQUssbUJBQVE7QUFBQ0YsaUNBQWFlLElBQWI7QUFBbUIsaUJBQXRKO0FBREE7QUFESSxLQUFSO0FBS0QsQ0FSRDs7a0JBV2VULGUiLCJmaWxlIjoiNDk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi4vY29udGFpbmVycy9JbnB1dEJveCc7XG5pbXBvcnQgeyB1cGRhdGVIaW50IH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5cbi8vIHJlZmVyZW5jZSB0byB0aGUgZmlsZSBpbnB1dCBkb20gZWxlbWVudFxubGV0IGZpbGVfaW5wdXQ7XG5cbi8vIHVwZGF0ZSB0aGUgbWFpbiBpbnB1dCBib3ggd2l0aCBwYXRoIGZyb20gZmlsZSBzZWxlY3RlZCwgYW5kIHBhc3MgdG8gaGludCBmb3IgY29uZmlybWF0aW9uXG5jb25zdCBvbkNoYW5nZUZpbGUgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9IGZpbGVfaW5wdXQuZmlsZXNbMF0ucGF0aDtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IEZpbGVQaWNrTWVzc2FnZSA9ICh7IGRpc3BhdGNoLCBhY3RpdmUsIG9yaWdpbiwgdGV4dCwgaGlkZGVuIH0pID0+e1xuICBjb25zb2xlLmxvZyhhY3RpdmUpO1xuICBjb25zdCByZWFkb25seSA9IGFjdGl2ZSA9PT0gdHJ1ZSA/IHt9IDogeydkaXNhYmxlZCc6dHJ1ZX07XG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWUgPSB7b3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e2hpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ1YmJsZVwiPlxuICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIG5hbWU9XCJmaWxlXCIgaWQ9XCJmaWxlXCIgey4uLnJlYWRvbmx5fSBjbGFzc05hbWU9XCJpbnB1dGZpbGVcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VGaWxlKGRpc3BhdGNoKX0gcmVmPXtub2RlID0+IHtmaWxlX2lucHV0ID0gbm9kZTt9fS8+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBGaWxlUGlja01lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9GaWxlUGlja01lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})