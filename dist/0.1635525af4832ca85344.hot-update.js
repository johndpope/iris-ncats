webpackHotUpdate(0,{

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(402);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _types = __webpack_require__(61);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(73);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(dispatch, active, text) {\n  var onlyOne = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  return function () {\n    if (active === true) {\n      var stripText = text.replace(/{/g, '').replace(/}/g, '');\n      if (onlyOne === true) {\n        _InputBox.input.value = text;\n      } else if (_InputBox.input.value.includes(text)) {\n        var items = _InputBox.input.value.split(\",\").map(function (x) {\n          return x.replace(/^\\s+|\\s+$/g, '');\n        });\n        var findIndex = items.indexOf(text);\n        if (findIndex > -1) {\n          items.splice(findIndex, 1);\n        }\n        _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n      } else {\n        if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n      }\n      dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n      (0, _python.updateHint)(_InputBox.input.value);\n    }\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.colMap = {};\n      for (var i = 0; i < _this.testColumns.length; i++) {\n        _this.colMap[i] = _this.testColumns[i].name;\n      }\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                var newColStyle = {};\n                if (column.type === \"Text\") {\n                  newColStyle['width'] = 350;\n                  newColStyle['height'] = '4em';\n                }\n                if (singleColumn || i == 0) {\n                  newColStyle['border-left'] = 'none';\n                };\n                if (i < 50) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', onClick: setInput(_this.props.dispatch, _this.props.active, column.name, _this.props.onlyOne), style: newColStyle },\n                    column.name\n                  );\n                }\n              })\n            ),\n            _this.testRows.map(function (row, i) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (_this.props.active && _this.props.currentInput.includes(_this.colMap[i])) {\n                    newColStyle['background-color'] = '#eee';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  if (i < 50) {\n                    return _react2.default.createElement(\n                      'span',\n                      { className: 'data_column', style: newColStyle },\n                      row[column.name]\n                    );\n                  }\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput.input\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsImRpc3BhdGNoIiwiYWN0aXZlIiwidGV4dCIsIm9ubHlPbmUiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJpbmNsdWRlcyIsIml0ZW1zIiwic3BsaXQiLCJtYXAiLCJ4IiwiZmluZEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImpvaW4iLCJUYWJsZVNlbGVjdE1lc3NhZ2UiLCJyZW5kZXIiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicHJvcHMiLCJ0ZXN0Q29sdW1ucyIsImNvbE1hcCIsImkiLCJsZW5ndGgiLCJuYW1lIiwidGVzdFJvd3MiLCJzbGljZSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SW5wdXQiLCJvcmlnaW4iLCJoaWRkZW4iLCJkaXNwbGF5Iiwid2lkdGgiLCJjb2x1bW4iLCJuZXdDb2xTdHlsZSIsInR5cGUiLCJyb3ciLCJuZXdSb3dTdHlsZSIsInByb3BUeXBlcyIsIm1lc3NhZ2VUeXBlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxTOztBQUNaOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLEVBQW1CQyxJQUFuQixFQUE2QztBQUFBLE1BQXBCQyxPQUFvQix1RUFBVixLQUFVOztBQUMxRCxTQUFPLFlBQU07QUFDVCxRQUFHRixXQUFXLElBQWQsRUFBbUI7QUFDakIsVUFBSUcsWUFBWUYsS0FBS0csT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENBQWhCO0FBQ0EsVUFBR0YsWUFBWSxJQUFmLEVBQW9CO0FBQ2xCLHdCQUFNRyxLQUFOLEdBQWNKLElBQWQ7QUFDRCxPQUZELE1BR0ssSUFBRyxnQkFBTUksS0FBTixDQUFZQyxRQUFaLENBQXFCTCxJQUFyQixDQUFILEVBQThCO0FBQ2pDLFlBQUlNLFFBQVEsZ0JBQU1GLEtBQU4sQ0FBWUcsS0FBWixDQUFrQixHQUFsQixFQUF1QkMsR0FBdkIsQ0FBMkI7QUFBQSxpQkFBS0MsRUFBRU4sT0FBRixDQUFVLFlBQVYsRUFBd0IsRUFBeEIsQ0FBTDtBQUFBLFNBQTNCLENBQVo7QUFDQSxZQUFJTyxZQUFZSixNQUFNSyxPQUFOLENBQWNYLElBQWQsQ0FBaEI7QUFDQSxZQUFHVSxZQUFZLENBQUMsQ0FBaEIsRUFBa0I7QUFDZkosZ0JBQU1NLE1BQU4sQ0FBYUYsU0FBYixFQUF3QixDQUF4QjtBQUNGO0FBQ0Qsd0JBQU1OLEtBQU4sR0FBY0UsTUFBTU8sSUFBTixDQUFXLElBQVgsQ0FBZCxDQU5pQyxDQU1GO0FBQ2hDLE9BUEksTUFRRDtBQUNGLFlBQUcsZ0JBQU1ULEtBQU4sS0FBZ0IsRUFBbkIsRUFBdUIsZ0JBQU1BLEtBQU4sR0FBYyxnQkFBTUEsS0FBTixHQUFjLElBQWQsR0FBcUJGLFNBQW5DLENBQXZCLEtBQ0ssZ0JBQU1FLEtBQU4sR0FBY0YsU0FBZDtBQUNOO0FBQ0RKLGVBQVMsOEJBQWtCLGdCQUFNTSxLQUF4QixDQUFUO0FBQ0EsOEJBQVcsZ0JBQU1BLEtBQWpCO0FBQ0Q7QUFDSixHQXJCRDtBQXNCSCxDQXZCRDs7SUF5Qk1VLGtCOzs7Ozs7Ozs7Ozs7Ozs4TUFFSkMsTSxHQUFTLFlBQU07QUFDYixVQUFNQyxPQUFPQyxLQUFLQyxLQUFMLENBQVcsTUFBS0MsS0FBTCxDQUFXbkIsSUFBdEIsQ0FBYjtBQUNBLFlBQUtvQixXQUFMLEdBQW1CSixLQUFLLGFBQUwsQ0FBbkI7QUFDQSxZQUFLSyxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUksTUFBS0YsV0FBTCxDQUFpQkcsTUFBcEMsRUFBNENELEdBQTVDLEVBQWdEO0FBQzlDLGNBQUtELE1BQUwsQ0FBWUMsQ0FBWixJQUFpQixNQUFLRixXQUFMLENBQWlCRSxDQUFqQixFQUFvQkUsSUFBckM7QUFDRDtBQUNELFlBQUtDLFFBQUwsR0FBZ0JULEtBQUssVUFBTCxFQUFpQlUsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBaEI7QUFDQSxVQUFJQyxlQUFlLEtBQW5CO0FBQ0EsVUFBSUMsZUFBZSxNQUFLUixXQUFMLENBQWlCRyxNQUFqQixLQUE0QixDQUEvQztBQUNBTSxjQUFRQyxHQUFSLENBQVksTUFBS1gsS0FBTCxDQUFXWSxZQUF2QjtBQUNBLGFBQVE7QUFBQTtBQUFBLFVBQUssV0FBYSxNQUFLWixLQUFMLENBQVdhLE1BQVgsS0FBc0IsTUFBdEIsR0FBK0IsY0FBL0IsR0FBZ0QsZUFBbEUsRUFBbUYsT0FBTyxNQUFLYixLQUFMLENBQVdjLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkIsRUFBQ0MsU0FBUyxNQUFWLEVBQTdCLEdBQWlELEVBQTNJO0FBQ0o7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmLEVBQTRCLE9BQU8sRUFBQ0MsT0FBTyxNQUFLZixXQUFMLENBQWlCRyxNQUFqQixJQUEyQixNQUFJLEVBQUosR0FBTyxDQUFsQyxDQUFSLEVBQW5DO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsUUFBZjtBQUNDLG9CQUFLSCxXQUFMLENBQWlCWixHQUFqQixDQUFxQixVQUFDNEIsTUFBRCxFQUFRZCxDQUFSLEVBQWM7QUFDbEMsb0JBQUllLGNBQWMsRUFBbEI7QUFDQSxvQkFBR0QsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QkQsOEJBQVksT0FBWixJQUF1QixHQUF2QjtBQUNBQSw4QkFBWSxRQUFaLElBQXdCLEtBQXhCO0FBQ0Q7QUFDRCxvQkFBSVQsZ0JBQWdCTixLQUFLLENBQXpCLEVBQTJCO0FBQUVlLDhCQUFZLGFBQVosSUFBNkIsTUFBN0I7QUFBcUM7QUFDbEUsb0JBQUlmLElBQUksRUFBUixFQUFXO0FBQ1QseUJBQU87QUFBQTtBQUFBLHNCQUFNLFdBQVUsYUFBaEIsRUFBOEIsU0FBU3pCLFNBQVMsTUFBS3NCLEtBQUwsQ0FBV3JCLFFBQXBCLEVBQThCLE1BQUtxQixLQUFMLENBQVdwQixNQUF6QyxFQUFpRHFDLE9BQU9aLElBQXhELEVBQThELE1BQUtMLEtBQUwsQ0FBV2xCLE9BQXpFLENBQXZDLEVBQTBILE9BQU9vQyxXQUFqSTtBQUErSUQsMkJBQU9aO0FBQXRKLG1CQUFQO0FBQ0Q7QUFDRixlQVZBO0FBREQsYUFERjtBQWNHLGtCQUFLQyxRQUFMLENBQWNqQixHQUFkLENBQWtCLFVBQUMrQixHQUFELEVBQUtqQixDQUFMLEVBQVc7QUFDNUIsa0JBQUlrQixjQUFjLEVBQWxCO0FBQ0Esa0JBQUliLFlBQUosRUFBaUI7QUFBRWEsNEJBQVksUUFBWixJQUF3QixLQUF4QjtBQUE4QjtBQUNqRCxxQkFBUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU9BLFdBQWpDO0FBQ0wsc0JBQUtwQixXQUFMLENBQWlCWixHQUFqQixDQUFxQixVQUFDNEIsTUFBRCxFQUFTZCxDQUFULEVBQWU7QUFDbkMsc0JBQUllLGNBQWMsRUFBbEI7QUFDQSxzQkFBR0QsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QkQsZ0NBQVksT0FBWixJQUF1QixHQUF2QjtBQUNBQSxnQ0FBWSxRQUFaLElBQXdCLEtBQXhCO0FBQ0Q7QUFDRCxzQkFBRyxNQUFLbEIsS0FBTCxDQUFXcEIsTUFBWCxJQUFxQixNQUFLb0IsS0FBTCxDQUFXWSxZQUFYLENBQXdCMUIsUUFBeEIsQ0FBaUMsTUFBS2dCLE1BQUwsQ0FBWUMsQ0FBWixDQUFqQyxDQUF4QixFQUF5RTtBQUN2RWUsZ0NBQVksa0JBQVosSUFBa0MsTUFBbEM7QUFDRDtBQUNELHNCQUFJVCxnQkFBZ0JOLEtBQUssQ0FBekIsRUFBMkI7QUFBRWUsZ0NBQVksYUFBWixJQUE2QixNQUE3QjtBQUFxQztBQUNsRSxzQkFBSWYsSUFBSSxFQUFSLEVBQVc7QUFDVCwyQkFBTztBQUFBO0FBQUEsd0JBQU0sV0FBVSxhQUFoQixFQUE4QixPQUFPZSxXQUFyQztBQUFtREUsMEJBQUlILE9BQU9aLElBQVg7QUFBbkQscUJBQVA7QUFDRDtBQUNGLGlCQWJBO0FBREssZUFBUjtBQWdCRCxhQW5CQTtBQWRIO0FBREE7QUFESSxPQUFSO0FBdUNELEs7Ozs7OztBQUlIVixtQkFBbUIyQixTQUFuQixHQUErQjdDLFVBQVU4QyxXQUF6Qzs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDYixrQkFBY2EsTUFBTWIsWUFBTixDQUFtQmM7QUFERCxHQUFaO0FBQUEsQ0FBeEI7O0FBSUEvQixxQkFBcUIseUJBQVE2QixlQUFSLEVBQXlCN0Isa0JBQXpCLENBQXJCOztrQkFFZUEsa0IiLCJmaWxlIjoiNTA4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHN0b3JlQ3VycmVudElucHV0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cblxuY29uc3Qgc2V0SW5wdXQgPSAoZGlzcGF0Y2gsIGFjdGl2ZSwgdGV4dCwgb25seU9uZSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYoYWN0aXZlID09PSB0cnVlKXtcbiAgICAgICAgICBsZXQgc3RyaXBUZXh0ID0gdGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgICBpZihvbmx5T25lID09PSB0cnVlKXtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihpbnB1dC52YWx1ZS5pbmNsdWRlcyh0ZXh0KSl7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBpbnB1dC52YWx1ZS5zcGxpdChcIixcIikubWFwKHggPT4geC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykpO1xuICAgICAgICAgICAgbGV0IGZpbmRJbmRleCA9IGl0ZW1zLmluZGV4T2YodGV4dCk7XG4gICAgICAgICAgICBpZihmaW5kSW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoZmluZEluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpdGVtcy5qb2luKFwiLCBcIik7Ly8gaW5wdXQudmFsdWUucmVwbGFjZShSZWdFeHAodGVzdCtcIix8XCJ0ZXN0KSwgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUgIT09IFwiXCIpIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUgKyBcIiwgXCIgKyBzdHJpcFRleHQ7XG4gICAgICAgICAgICBlbHNlIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNwYXRjaChzdG9yZUN1cnJlbnRJbnB1dChpbnB1dC52YWx1ZSkpO1xuICAgICAgICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmNsYXNzIFRhYmxlU2VsZWN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMudGV4dCk7XG4gICAgdGhpcy50ZXN0Q29sdW1ucyA9IGRhdGFbXCJjb2x1bW5fZGF0YVwiXTtcbiAgICB0aGlzLmNvbE1hcCA9IHt9O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMuY29sTWFwW2ldID0gdGhpcy50ZXN0Q29sdW1uc1tpXS5uYW1lO1xuICAgIH1cbiAgICB0aGlzLnRlc3RSb3dzID0gZGF0YVtcInJvd19kYXRhXCJdLnNsaWNlKDAsMyk7XG4gICAgbGV0IGNvbnRhaW5zVGV4dCA9IGZhbHNlO1xuICAgIGxldCBzaW5nbGVDb2x1bW4gPSB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCA9PT0gMTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmN1cnJlbnRJbnB1dCk7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZSA9IHt0aGlzLnByb3BzLm9yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXt0aGlzLnByb3BzLmhpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZSB0YWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFfdGFibGVcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCAqICgzNTArMTArMSl9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLGkpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgaWYgKGkgPCA1MCl7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIG9uQ2xpY2s9e3NldElucHV0KHRoaXMucHJvcHMuZGlzcGF0Y2gsIHRoaXMucHJvcHMuYWN0aXZlLCBjb2x1bW4ubmFtZSwgdGhpcy5wcm9wcy5vbmx5T25lKX0gc3R5bGU9e25ld0NvbFN0eWxlfT57Y29sdW1uLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy50ZXN0Um93cy5tYXAoKHJvdyxpKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um93U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChjb250YWluc1RleHQpeyBuZXdSb3dTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJ307XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIiBzdHlsZT17bmV3Um93U3R5bGV9PlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmN1cnJlbnRJbnB1dC5pbmNsdWRlcyh0aGlzLmNvbE1hcFtpXSkpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9ICcjZWVlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgICAgIGlmIChpIDwgNTApe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG5cbn1cblxuVGFibGVTZWxlY3RNZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGN1cnJlbnRJbnB1dDogc3RhdGUuY3VycmVudElucHV0LmlucHV0XG59KTtcblxuVGFibGVTZWxlY3RNZXNzYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhYmxlU2VsZWN0TWVzc2FnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlU2VsZWN0TWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlU2VsZWN0TWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})