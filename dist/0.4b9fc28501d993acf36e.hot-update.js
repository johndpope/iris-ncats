webpackHotUpdate(0,{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// References to arg components, indexed by id (position of arg in list)\nvar arg_name = {},\n    arg_type = {},\n    arg_string = {};\n\n// Helper to update arg state using reference to components\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  var new_values = {\n    arg_name: arg_name[id].value,\n    arg_type: arg_type[id].value,\n    arg_string: arg_string[id].value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\n// Helper to update arg state to delete arg by id\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\n// Function that defines argument annotation element\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      id = _ref.id,\n      name = _ref.name,\n      string = _ref.string,\n      arg_t = _ref.arg_t;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'label' },\n      'Arguments:'\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'arguments' },\n      undefined.props.args.map(function (arg, i) {\n        var name = arg.arg_name;\n        var string = arg.arg_string;\n        var arg_t = arg.arg_type;\n        return _react2.default.createElement(\n          'div',\n          { className: 'arg_annotation' },\n          _react2.default.createElement('input', { type: 'text', className: 'arg_name', placeholder: 'name of arg', onChange: function onChange() {\n              return onChangeInput(dispatch, id);\n            }, ref: function ref(node) {\n              arg_name[id] = node;\n            }, value: name }),\n          _react2.default.createElement(\n            'select',\n            { className: 'arg_type', value: arg_t, onChange: function onChange() {\n                return onChangeInput(dispatch, id);\n              }, ref: function ref(node) {\n                arg_type[id] = node;\n              } },\n            _react2.default.createElement(\n              'option',\n              null,\n              'Int'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'String'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Array'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Float'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Any'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Dataframe'\n            )\n          ),\n          _react2.default.createElement('input', { type: 'text', className: 'arg_string', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n              return onChangeInput(dispatch, id);\n            }, ref: function ref(node) {\n              arg_string[id] = node;\n            }, value: string }),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return onClickDelete(dispatch, id);\n              } },\n            'Delete'\n          )\n        );\n      })\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: addArgument(undefined.props.dispatch) },\n      'Add Argument'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwibmV3X3ZhbHVlcyIsInZhbHVlIiwib25DbGlja0RlbGV0ZSIsIkFyZ3VtZW50QW5ub3RhdGlvbiIsIm5hbWUiLCJzdHJpbmciLCJhcmdfdCIsInByb3BzIiwiYXJncyIsIm1hcCIsImFyZyIsImkiLCJub2RlIiwiYWRkQXJndW1lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBSUEsV0FBVyxFQUFmO0FBQUEsSUFBbUJDLFdBQVcsRUFBOUI7QUFBQSxJQUFrQ0MsYUFBYSxFQUEvQzs7QUFFQTtBQUNBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDLE1BQU1DLGFBQWE7QUFDakJOLGNBQVVBLFNBQVNLLEVBQVQsRUFBYUUsS0FETjtBQUVqQk4sY0FBVUEsU0FBU0ksRUFBVCxFQUFhRSxLQUZOO0FBR2pCTCxnQkFBWUEsV0FBV0csRUFBWCxFQUFlRTtBQUhWLEdBQW5CO0FBS0FILFdBQVMsNkJBQWlCQyxFQUFqQixFQUFxQkMsVUFBckIsQ0FBVDtBQUNELENBUEQ7O0FBU0E7QUFDQSxJQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUN0Q0QsV0FBUyw2QkFBaUJDLEVBQWpCLENBQVQ7QUFDRCxDQUZEOztBQUlBO0FBQ0EsSUFBSUkscUJBQXFCO0FBQUEsTUFBR0wsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJLLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBLE1BQXVCQyxNQUF2QixRQUF1QkEsTUFBdkI7QUFBQSxNQUErQkMsS0FBL0IsUUFBK0JBLEtBQS9CO0FBQUEsU0FDckI7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxLQURBO0FBRUE7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0csZ0JBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDOUIsWUFBTVAsT0FBT00sSUFBSWhCLFFBQWpCO0FBQ0EsWUFBTVcsU0FBU0ssSUFBSWQsVUFBbkI7QUFDQSxZQUFNVSxRQUFRSSxJQUFJZixRQUFsQjtBQUNBLGVBQVE7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUNKLG1EQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLFVBQTdCLEVBQXdDLGFBQVksYUFBcEQsRUFBa0UsVUFBVTtBQUFBLHFCQUFNRSxjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsYUFBNUUsRUFBK0csS0FBSyxtQkFBUTtBQUFDTCx1QkFBU0ssRUFBVCxJQUFlYSxJQUFmO0FBQXFCLGFBQWxKLEVBQW9KLE9BQU9SLElBQTNKLEdBREk7QUFFSjtBQUFBO0FBQUEsY0FBUSxXQUFVLFVBQWxCLEVBQTZCLE9BQU9FLEtBQXBDLEVBQTJDLFVBQVU7QUFBQSx1QkFBTVQsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLGVBQXJELEVBQXdGLEtBQUssbUJBQVE7QUFBQ0oseUJBQVNJLEVBQVQsSUFBZWEsSUFBZjtBQUFxQixlQUEzSDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixXQUZJO0FBVUosbURBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsWUFBN0IsRUFBMEMsYUFBWSwrQ0FBdEQsRUFBc0csVUFBVTtBQUFBLHFCQUFNZixjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsYUFBaEgsRUFBbUosS0FBSyxtQkFBUTtBQUFDSCx5QkFBV0csRUFBWCxJQUFpQmEsSUFBakI7QUFBdUIsYUFBeEwsRUFBMEwsT0FBT1AsTUFBak0sR0FWSTtBQVdKO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTUgsY0FBY0osUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQTtBQVhJLFNBQVI7QUFhRCxPQWpCQTtBQURILEtBRkE7QUFzQkE7QUFBQTtBQUFBLFFBQVEsU0FBU2MsWUFBWSxVQUFLTixLQUFMLENBQVdULFFBQXZCLENBQWpCO0FBQUE7QUFBQTtBQXRCQSxHQURxQjtBQUFBLENBQXpCOztBQTRCQSxJQUFNZ0Isa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBRUFaLHFCQUFxQix5QkFBUVcsZUFBUixFQUF5Qlgsa0JBQXpCLENBQXJCOztrQkFFZUEsa0IiLCJmaWxlIjoiNDkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVDb21tYW5kQXJnLCBkZWxldGVDb21tYW5kQXJnIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbi8vIFJlZmVyZW5jZXMgdG8gYXJnIGNvbXBvbmVudHMsIGluZGV4ZWQgYnkgaWQgKHBvc2l0aW9uIG9mIGFyZyBpbiBsaXN0KVxubGV0IGFyZ19uYW1lID0ge30sIGFyZ190eXBlID0ge30sIGFyZ19zdHJpbmcgPSB7fTtcblxuLy8gSGVscGVyIHRvIHVwZGF0ZSBhcmcgc3RhdGUgdXNpbmcgcmVmZXJlbmNlIHRvIGNvbXBvbmVudHNcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnN0IG5ld192YWx1ZXMgPSB7XG4gICAgYXJnX25hbWU6IGFyZ19uYW1lW2lkXS52YWx1ZSxcbiAgICBhcmdfdHlwZTogYXJnX3R5cGVbaWRdLnZhbHVlLFxuICAgIGFyZ19zdHJpbmc6IGFyZ19zdHJpbmdbaWRdLnZhbHVlXG4gIH07XG4gIGRpc3BhdGNoKHVwZGF0ZUNvbW1hbmRBcmcoaWQsIG5ld192YWx1ZXMpKTtcbn07XG5cbi8vIEhlbHBlciB0byB1cGRhdGUgYXJnIHN0YXRlIHRvIGRlbGV0ZSBhcmcgYnkgaWRcbmNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGRpc3BhdGNoKGRlbGV0ZUNvbW1hbmRBcmcoaWQpKTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhcmd1bWVudCBhbm5vdGF0aW9uIGVsZW1lbnRcbmxldCBBcmd1bWVudEFubm90YXRpb24gPSAoeyBkaXNwYXRjaCwgaWQsIG5hbWUsIHN0cmluZywgYXJnX3QgfSkgPT5cbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Bcmd1bWVudHM6PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHNcIj5cbiAgICAgIHt0aGlzLnByb3BzLmFyZ3MubWFwKChhcmcsaSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXJnLmFyZ19uYW1lO1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBhcmcuYXJnX3N0cmluZztcbiAgICAgICAgY29uc3QgYXJnX3QgPSBhcmcuYXJnX3R5cGU7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJhcmdfYW5ub3RhdGlvblwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXJnX25hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgYXJnXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfbmFtZVtpZF0gPSBub2RlO319IHZhbHVlPXtuYW1lfS8+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImFyZ190eXBlXCIgdmFsdWU9e2FyZ190fSBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ190eXBlW2lkXSA9IG5vZGU7fX0+XG4gICAgICAgICAgICAgIDxvcHRpb24+SW50PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+U3RyaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+QXJyYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj5GbG9hdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPkFueTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPkRhdGFmcmFtZTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhcmdfc3RyaW5nXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlIHRvIHJlcXVlc3QgdGhpcyBhcmd1bWVudCBmcm9tIHVzZXIuLi5cIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ19zdHJpbmdbaWRdID0gbm9kZTt9fSB2YWx1ZT17c3RyaW5nfS8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17YWRkQXJndW1lbnQodGhpcy5wcm9wcy5kaXNwYXRjaCl9PkFkZCBBcmd1bWVudDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe30pO1xuXG5Bcmd1bWVudEFubm90YXRpb24gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXJndW1lbnRBbm5vdGF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQXJndW1lbnRBbm5vdGF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQXJndW1lbnRBbm5vdGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})