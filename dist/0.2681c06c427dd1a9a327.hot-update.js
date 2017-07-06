webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(1302);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables,\n        doc = _ref.doc;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactSplitPane2.default,\n            { split: 'horizontal', defaultSize: '30%' },\n            _react2.default.createElement(\n                'div',\n                { className: 'variableTable' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'title' },\n                    'Current Variables'\n                ),\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    _.map(_.sortBy(variables, function (v) {\n                        return v.order;\n                    }), function (x) {\n                        return _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'three_quarter name' },\n                                x.name\n                            ),\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'quarter' },\n                                x.value\n                            )\n                        );\n                    })\n                )\n            ),\n            _react2.default.createElement(\n                _reactSplitPane2.default,\n                { className: 'secondSplit', split: 'horizontal', defaultSize: '50%' },\n                _react2.default.createElement(_FunctionSearch2.default, null),\n                _react2.default.createElement(_FunctionInfo2.default, null)\n            )\n        ),\n        _react2.default.createElement(\n            'button',\n            null,\n            'Minimize'\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlDLFlBQVk7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxRQUFjQyxHQUFkLFFBQWNBLEdBQWQ7QUFBQSxXQUNSO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxjQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUNJSCxzQkFBRUksR0FBRixDQUFNSixFQUFFSyxNQUFGLENBQVNILFNBQVQsRUFBb0IsVUFBQ0ksQ0FBRCxFQUFPO0FBQy9CLCtCQUFPQSxFQUFFQyxLQUFUO0FBQ0gscUJBRk8sQ0FBTixFQUdBLFVBQUNDLENBQUQsRUFBTztBQUNILCtCQUFPO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLG9CQUFoQjtBQUF1Q0Esa0NBQUVDO0FBQXpDLDZCQUFKO0FBQTBEO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLFNBQWhCO0FBQTRCRCxrQ0FBRUU7QUFBOUI7QUFBMUQseUJBQVA7QUFDSCxxQkFMRDtBQURKO0FBRkosYUFERjtBQVlFO0FBQUE7QUFBQSxrQkFBVyxXQUFVLGFBQXJCLEVBQW1DLE9BQU0sWUFBekMsRUFBc0QsYUFBWSxLQUFsRTtBQUNFLDZFQURGO0FBRUU7QUFGRjtBQVpGLFNBREE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxCQSxLQURRO0FBQUEsQ0FBaEI7O0FBc0JBVCxVQUFVVSxTQUFWLEdBQXNCO0FBQ2xCVCxlQUFXLGlCQUFVVSxPQUFWLENBQWtCLGlCQUFVQyxHQUE1QjtBQURPLENBQXRCOztBQUlBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDaENiLG1CQUFXYSxNQUFNYixTQURlO0FBRWhDQyxhQUFLWSxNQUFNQztBQUZxQixLQUFaO0FBQUEsQ0FBeEI7O0FBS0FmLFlBQVkseUJBQVFhLGVBQVIsRUFBeUJiLFNBQXpCLENBQVo7O2tCQUVlQSxTIiwiZmlsZSI6IjQyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEZ1bmN0aW9uU2VhcmNoIGZyb20gJy4vRnVuY3Rpb25TZWFyY2gnO1xuaW1wb3J0IEZ1bmN0aW9uSW5mbyBmcm9tICcuL0Z1bmN0aW9uSW5mbyc7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuXG5sZXQgUmlnaHRQYW5lID0gKHsgdmFyaWFibGVzLCBkb2MgfSkgPT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjMwJVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VycmVudCBWYXJpYWJsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5vcmRlcjtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3BhbiBjbGFzc05hbWU9XCJ0aHJlZV9xdWFydGVyIG5hbWVcIj57IHgubmFtZSB9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInF1YXJ0ZXJcIj57IHgudmFsdWUgfTwvc3Bhbj48L2xpPjtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwic2Vjb25kU3BsaXRcIiBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjUwJVwiPlxuICAgICAgICAgICAgPEZ1bmN0aW9uU2VhcmNoIC8+XG4gICAgICAgICAgICA8RnVuY3Rpb25JbmZvIC8+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8YnV0dG9uPk1pbmltaXplPC9idXR0b24+XG4gICAgICAgIDwvZGl2PjtcblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhcmlhYmxlczogc3RhdGUudmFyaWFibGVzLFxuICAgIGRvYzogc3RhdGUuZG9jc1xufSk7XG5cblJpZ2h0UGFuZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSaWdodFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})