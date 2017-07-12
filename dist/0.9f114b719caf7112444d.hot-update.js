webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _reactSyntaxHighlighter = __webpack_require__(443);\n\nvar _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);\n\nvar _python = __webpack_require__(61);\n\nvar _index = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// function to load a command into the command edit pane, and open pane\n// the button for this is in the docs pane, but maybe logic should be moved to CommandEdit?\nvar editCommand = function editCommand(dispatch, text) {\n  (0, _python.updateCommandAPI)(text);\n  dispatch((0, _index.setCodeEdit)({ code_edit: false }));\n};\n\n// this component defines what is displayed in the docs window\n\nvar FunctionInfo = function (_Component) {\n  _inherits(FunctionInfo, _Component);\n\n  function FunctionInfo() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FunctionInfo);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FunctionInfo.__proto__ || Object.getPrototypeOf(FunctionInfo)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      if (_this.props.doc.title === \"\") {\n        return _react2.default.createElement(\n          'div',\n          { className: 'func_info' },\n          _react2.default.createElement(\n            'div',\n            { className: 'func_title' },\n            'Search for a command to see documentation'\n          )\n        );\n      } else {\n        return _react2.default.createElement(\n          'div',\n          { className: 'func_info' },\n          _react2.default.createElement(\n            'div',\n            { className: 'func_title' },\n            _this.props.doc.title\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'func_description' },\n            _this.props.doc.description.join(\" \")\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'examples' },\n            _react2.default.createElement(\n              'div',\n              { className: 'head' },\n              'Examples:'\n            ),\n            _this.props.doc.examples.map(function (ex) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'example' },\n                ex\n              );\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'func_code' },\n            _react2.default.createElement(\n              'div',\n              { className: 'head' },\n              'Code:'\n            ),\n            _react2.default.createElement(\n              'pre',\n              null,\n              _react2.default.createElement(\n                _reactSyntaxHighlighter2.default,\n                { language: 'python' },\n                _this.props.doc.source\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return editCommand(_this.props.dispatch, _this.props.doc.title);\n              } },\n            'Edit Command'\n          )\n        );\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return FunctionInfo;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nFunctionInfo = (0, _reactRedux.connect)(mapStateToProps)(FunctionInfo);\n\nexports.default = FunctionInfo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvbkluZm8uanM/YmY0ZCJdLCJuYW1lcyI6WyJlZGl0Q29tbWFuZCIsImRpc3BhdGNoIiwidGV4dCIsImNvZGVfZWRpdCIsIkZ1bmN0aW9uSW5mbyIsInJlbmRlciIsInByb3BzIiwiZG9jIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImpvaW4iLCJleGFtcGxlcyIsIm1hcCIsImV4Iiwic291cmNlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkb2NzIiwibWluaW1pemVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDdEMsZ0NBQWlCQSxJQUFqQjtBQUNBRCxXQUFTLHdCQUFZLEVBQUNFLFdBQVUsS0FBWCxFQUFaLENBQVQ7QUFDRCxDQUhEOztBQUtBOztJQUNNQyxZOzs7Ozs7Ozs7Ozs7OztrTUFFRkMsTSxHQUFTLFlBQU07QUFDYixVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxLQUFmLEtBQXlCLEVBQTdCLEVBQWdDO0FBQzlCLGVBQU87QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQTJCO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUFBO0FBQUE7QUFBM0IsU0FBUDtBQUNELE9BRkQsTUFHSTtBQUNGLGVBQVE7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ047QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQTZCLGtCQUFLRixLQUFMLENBQVdDLEdBQVgsQ0FBZUM7QUFBNUMsV0FETTtBQUVOO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRyxrQkFBS0YsS0FBTCxDQUFXQyxHQUFYLENBQWVFLFdBQWYsQ0FBMkJDLElBQTNCLENBQWdDLEdBQWhDO0FBREgsV0FGTTtBQUtOO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLGFBREY7QUFFRyxrQkFBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVJLFFBQWYsQ0FBd0JDLEdBQXhCLENBQTRCO0FBQUEscUJBQU07QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUEwQkM7QUFBMUIsZUFBTjtBQUFBLGFBQTVCO0FBRkgsV0FMTTtBQVNOO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsa0JBQW1CLFVBQVcsUUFBOUI7QUFDQyxzQkFBS1AsS0FBTCxDQUFXQyxHQUFYLENBQWVPO0FBRGhCO0FBREE7QUFGRixXQVRNO0FBaUJOO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTWQsWUFBWSxNQUFLTSxLQUFMLENBQVdMLFFBQXZCLEVBQWlDLE1BQUtLLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxLQUFoRCxDQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBO0FBakJNLFNBQVI7QUFtQkQ7QUFDRixLOzs7Ozs7QUFHTCxJQUFNTyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDVCxTQUFLUyxNQUFNQyxJQURxQjtBQUVoQ0MsbUJBQWVGLE1BQU1FO0FBRlcsR0FBWjtBQUFBLENBQXhCOztBQUtBZCxlQUFlLHlCQUFRVyxlQUFSLEVBQXlCWCxZQUF6QixDQUFmOztrQkFFZUEsWSIsImZpbGUiOiI0OTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcic7XG5pbXBvcnQgeyB1cGRhdGVDb21tYW5kQVBJIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgeyBzZXRDb2RlRWRpdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbi8vIGZ1bmN0aW9uIHRvIGxvYWQgYSBjb21tYW5kIGludG8gdGhlIGNvbW1hbmQgZWRpdCBwYW5lLCBhbmQgb3BlbiBwYW5lXG4vLyB0aGUgYnV0dG9uIGZvciB0aGlzIGlzIGluIHRoZSBkb2NzIHBhbmUsIGJ1dCBtYXliZSBsb2dpYyBzaG91bGQgYmUgbW92ZWQgdG8gQ29tbWFuZEVkaXQ/XG5jb25zdCBlZGl0Q29tbWFuZCA9IChkaXNwYXRjaCwgdGV4dCkgPT4ge1xuICB1cGRhdGVDb21tYW5kQVBJKHRleHQpO1xuICBkaXNwYXRjaChzZXRDb2RlRWRpdCh7Y29kZV9lZGl0OmZhbHNlfSkpO1xufVxuXG4vLyB0aGlzIGNvbXBvbmVudCBkZWZpbmVzIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBkb2NzIHdpbmRvd1xuY2xhc3MgRnVuY3Rpb25JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRvYy50aXRsZSA9PT0gXCJcIil7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfaW5mb1wiPjxkaXYgY2xhc3NOYW1lPVwiZnVuY190aXRsZVwiPlNlYXJjaCBmb3IgYSBjb21tYW5kIHRvIHNlZSBkb2N1bWVudGF0aW9uPC9kaXY+PC9kaXY+XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZnVuY19pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX3RpdGxlXCI+e3RoaXMucHJvcHMuZG9jLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZG9jLmRlc2NyaXB0aW9uLmpvaW4oXCIgXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPkV4YW1wbGVzOjwvZGl2PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZG9jLmV4YW1wbGVzLm1hcChleCA9PiA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj57ZXh9PC9kaXY+KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfY29kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2UgPSBcInB5dGhvblwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZG9jLnNvdXJjZX1cbiAgICAgICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRDb21tYW5kKHRoaXMucHJvcHMuZGlzcGF0Y2gsIHRoaXMucHJvcHMuZG9jLnRpdGxlKX0+RWRpdCBDb21tYW5kPC9idXR0b24+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBkb2M6IHN0YXRlLmRvY3MsXG4gICAgbWluaW1pemVTdGF0ZTogc3RhdGUubWluaW1pemVTdGF0ZVxufSk7XG5cbkZ1bmN0aW9uSW5mbyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGdW5jdGlvbkluZm8pO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkluZm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvbkluZm8uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})