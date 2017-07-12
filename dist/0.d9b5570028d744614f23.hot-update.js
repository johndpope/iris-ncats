webpackHotUpdate(0,{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// References to arg components, indexed by id (position of arg in list)\nvar arg_name = {},\n    arg_type = {},\n    arg_string = {};\n\n// Helper to update arg state using reference to components\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  var new_values = {\n    arg_name: arg_name[id].value,\n    arg_type: arg_type[id].value,\n    arg_string: arg_string[id].value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\n// Helper to update arg state to delete arg by id\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\n// Function that defines argument annotation element\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      args = _ref.args;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'label' },\n      'Arguments:'\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'arguments' },\n      undefined.props.args.map(function (arg, i) {\n        var name = arg.arg_name;\n        var string = arg.arg_string;\n        var arg_t = arg.arg_type;\n        return _react2.default.createElement(\n          'div',\n          { className: 'arg_annotation' },\n          _react2.default.createElement('input', { type: 'text', className: 'arg_name', placeholder: 'name of arg', onChange: function onChange() {\n              return onChangeInput(dispatch, id);\n            }, ref: function ref(node) {\n              arg_name[id] = node;\n            }, value: name }),\n          _react2.default.createElement(\n            'select',\n            { className: 'arg_type', value: arg_t, onChange: function onChange() {\n                return onChangeInput(dispatch, id);\n              }, ref: function ref(node) {\n                arg_type[id] = node;\n              } },\n            _react2.default.createElement(\n              'option',\n              null,\n              'Int'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'String'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Array'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Float'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Any'\n            ),\n            _react2.default.createElement(\n              'option',\n              null,\n              'Dataframe'\n            )\n          ),\n          _react2.default.createElement('input', { type: 'text', className: 'arg_string', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n              return onChangeInput(dispatch, id);\n            }, ref: function ref(node) {\n              arg_string[id] = node;\n            }, value: string }),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return onClickDelete(dispatch, id);\n              } },\n            'Delete'\n          )\n        );\n      })\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: addArgument(undefined.props.dispatch) },\n      'Add Argument'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwibmV3X3ZhbHVlcyIsInZhbHVlIiwib25DbGlja0RlbGV0ZSIsIkFyZ3VtZW50QW5ub3RhdGlvbiIsImFyZ3MiLCJwcm9wcyIsIm1hcCIsImFyZyIsImkiLCJuYW1lIiwic3RyaW5nIiwiYXJnX3QiLCJub2RlIiwiYWRkQXJndW1lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBSUEsV0FBVyxFQUFmO0FBQUEsSUFBbUJDLFdBQVcsRUFBOUI7QUFBQSxJQUFrQ0MsYUFBYSxFQUEvQzs7QUFFQTtBQUNBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDLE1BQU1DLGFBQWE7QUFDakJOLGNBQVVBLFNBQVNLLEVBQVQsRUFBYUUsS0FETjtBQUVqQk4sY0FBVUEsU0FBU0ksRUFBVCxFQUFhRSxLQUZOO0FBR2pCTCxnQkFBWUEsV0FBV0csRUFBWCxFQUFlRTtBQUhWLEdBQW5CO0FBS0FILFdBQVMsNkJBQWlCQyxFQUFqQixFQUFxQkMsVUFBckIsQ0FBVDtBQUNELENBUEQ7O0FBU0E7QUFDQSxJQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUN0Q0QsV0FBUyw2QkFBaUJDLEVBQWpCLENBQVQ7QUFDRCxDQUZEOztBQUlBO0FBQ0EsSUFBSUkscUJBQXFCO0FBQUEsTUFBR0wsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYU0sSUFBYixRQUFhQSxJQUFiO0FBQUEsU0FDckI7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxLQURBO0FBRUE7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0csZ0JBQUtDLEtBQUwsQ0FBV0QsSUFBWCxDQUFnQkUsR0FBaEIsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDOUIsWUFBTUMsT0FBT0YsSUFBSWIsUUFBakI7QUFDQSxZQUFNZ0IsU0FBU0gsSUFBSVgsVUFBbkI7QUFDQSxZQUFNZSxRQUFRSixJQUFJWixRQUFsQjtBQUNBLGVBQVE7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUNKLG1EQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLFVBQTdCLEVBQXdDLGFBQVksYUFBcEQsRUFBa0UsVUFBVTtBQUFBLHFCQUFNRSxjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsYUFBNUUsRUFBK0csS0FBSyxtQkFBUTtBQUFDTCx1QkFBU0ssRUFBVCxJQUFlYSxJQUFmO0FBQXFCLGFBQWxKLEVBQW9KLE9BQU9ILElBQTNKLEdBREk7QUFFSjtBQUFBO0FBQUEsY0FBUSxXQUFVLFVBQWxCLEVBQTZCLE9BQU9FLEtBQXBDLEVBQTJDLFVBQVU7QUFBQSx1QkFBTWQsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLGVBQXJELEVBQXdGLEtBQUssbUJBQVE7QUFBQ0oseUJBQVNJLEVBQVQsSUFBZWEsSUFBZjtBQUFxQixlQUEzSDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixXQUZJO0FBVUosbURBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsWUFBN0IsRUFBMEMsYUFBWSwrQ0FBdEQsRUFBc0csVUFBVTtBQUFBLHFCQUFNZixjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsYUFBaEgsRUFBbUosS0FBSyxtQkFBUTtBQUFDSCx5QkFBV0csRUFBWCxJQUFpQmEsSUFBakI7QUFBdUIsYUFBeEwsRUFBMEwsT0FBT0YsTUFBak0sR0FWSTtBQVdKO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTVIsY0FBY0osUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQTtBQVhJLFNBQVI7QUFhRCxPQWpCQTtBQURILEtBRkE7QUFzQkE7QUFBQTtBQUFBLFFBQVEsU0FBU2MsWUFBWSxVQUFLUixLQUFMLENBQVdQLFFBQXZCLENBQWpCO0FBQUE7QUFBQTtBQXRCQSxHQURxQjtBQUFBLENBQXpCOztBQTRCQSxJQUFNZ0Isa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBRUFaLHFCQUFxQix5QkFBUVcsZUFBUixFQUF5Qlgsa0JBQXpCLENBQXJCOztrQkFFZUEsa0IiLCJmaWxlIjoiNDkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVDb21tYW5kQXJnLCBkZWxldGVDb21tYW5kQXJnIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbi8vIFJlZmVyZW5jZXMgdG8gYXJnIGNvbXBvbmVudHMsIGluZGV4ZWQgYnkgaWQgKHBvc2l0aW9uIG9mIGFyZyBpbiBsaXN0KVxubGV0IGFyZ19uYW1lID0ge30sIGFyZ190eXBlID0ge30sIGFyZ19zdHJpbmcgPSB7fTtcblxuLy8gSGVscGVyIHRvIHVwZGF0ZSBhcmcgc3RhdGUgdXNpbmcgcmVmZXJlbmNlIHRvIGNvbXBvbmVudHNcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnN0IG5ld192YWx1ZXMgPSB7XG4gICAgYXJnX25hbWU6IGFyZ19uYW1lW2lkXS52YWx1ZSxcbiAgICBhcmdfdHlwZTogYXJnX3R5cGVbaWRdLnZhbHVlLFxuICAgIGFyZ19zdHJpbmc6IGFyZ19zdHJpbmdbaWRdLnZhbHVlXG4gIH07XG4gIGRpc3BhdGNoKHVwZGF0ZUNvbW1hbmRBcmcoaWQsIG5ld192YWx1ZXMpKTtcbn07XG5cbi8vIEhlbHBlciB0byB1cGRhdGUgYXJnIHN0YXRlIHRvIGRlbGV0ZSBhcmcgYnkgaWRcbmNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGRpc3BhdGNoKGRlbGV0ZUNvbW1hbmRBcmcoaWQpKTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhcmd1bWVudCBhbm5vdGF0aW9uIGVsZW1lbnRcbmxldCBBcmd1bWVudEFubm90YXRpb24gPSAoeyBkaXNwYXRjaCwgYXJncyB9KSA9PlxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50c1wiPlxuICAgICAge3RoaXMucHJvcHMuYXJncy5tYXAoKGFyZyxpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhcmcuYXJnX25hbWU7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IGFyZy5hcmdfc3RyaW5nO1xuICAgICAgICBjb25zdCBhcmdfdCA9IGFyZy5hcmdfdHlwZTtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImFyZ19hbm5vdGF0aW9uXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhcmdfbmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZSBvZiBhcmdcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ19uYW1lW2lkXSA9IG5vZGU7fX0gdmFsdWU9e25hbWV9Lz5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYXJnX3R5cGVcIiB2YWx1ZT17YXJnX3R9IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX3R5cGVbaWRdID0gbm9kZTt9fT5cbiAgICAgICAgICAgICAgPG9wdGlvbj5JbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj5TdHJpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj5BcnJheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPkZsb2F0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+QW55PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+RGF0YWZyYW1lPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFyZ19zdHJpbmdcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgdG8gcmVxdWVzdCB0aGlzIGFyZ3VtZW50IGZyb20gdXNlci4uLlwiIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX3N0cmluZ1tpZF0gPSBub2RlO319IHZhbHVlPXtzdHJpbmd9Lz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGlja0RlbGV0ZShkaXNwYXRjaCwgaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRBcmd1bWVudCh0aGlzLnByb3BzLmRpc3BhdGNoKX0+QWRkIEFyZ3VtZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XG5cbkFyZ3VtZW50QW5ub3RhdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcmd1bWVudEFubm90YXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBBcmd1bWVudEFubm90YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})