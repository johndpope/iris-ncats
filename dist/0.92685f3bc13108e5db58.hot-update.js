webpackHotUpdate(0,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(402);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(61);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      print(data);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"];\n      _this.getRow = function (i) {\n        return _this.testRows[i];\n      };\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                var newColStyle = {};\n                if (column.type === \"Text\") {\n                  newColStyle['width'] = 350;\n                  newColStyle['height'] = '4em';\n                }\n                if (singleColumn || i == 0) {\n                  newColStyle['border-left'] = 'none';\n                };\n                if (i < 50) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    column.name\n                  );\n                }\n              })\n            ),\n            _this.testRows.map(function (row) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  if (i < 50) {\n                    return _react2.default.createElement(\n                      'span',\n                      { className: 'data_column', style: newColStyle },\n                      row[column.name]\n                    );\n                  }\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CollectionMessage;\n}(_react.Component);\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInByb3BzIiwidGV4dCIsInByaW50IiwidGVzdENvbHVtbnMiLCJ0ZXN0Um93cyIsImdldFJvdyIsImkiLCJjb250YWluc1RleHQiLCJzaW5nbGVDb2x1bW4iLCJsZW5ndGgiLCJvcmlnaW4iLCJoaWRkZW4iLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXAiLCJjb2x1bW4iLCJuZXdDb2xTdHlsZSIsInR5cGUiLCJuYW1lIiwibmV3Um93U3R5bGUiLCJyb3ciLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7SUFFTkMsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUVKQyxNLEdBQVMsWUFBTTtBQUNiLFVBQU1DLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxNQUFLQyxLQUFMLENBQVdDLElBQXRCLENBQWI7QUFDQUMsWUFBTUwsSUFBTjtBQUNBLFlBQUtNLFdBQUwsR0FBbUJOLEtBQUssYUFBTCxDQUFuQjtBQUNBLFlBQUtPLFFBQUwsR0FBZ0JQLEtBQUssVUFBTCxDQUFoQjtBQUNBLFlBQUtRLE1BQUwsR0FBYyxVQUFDQyxDQUFEO0FBQUEsZUFBTyxNQUFLRixRQUFMLENBQWNFLENBQWQsQ0FBUDtBQUFBLE9BQWQ7QUFDQSxVQUFJQyxlQUFlLEtBQW5CO0FBQ0EsVUFBSUMsZUFBZSxNQUFLTCxXQUFMLENBQWlCTSxNQUFqQixLQUE0QixDQUEvQztBQUNBLGFBQVE7QUFBQTtBQUFBLFVBQUssV0FBYSxNQUFLVCxLQUFMLENBQVdVLE1BQVgsS0FBc0IsTUFBdEIsR0FBK0IsY0FBL0IsR0FBZ0QsZUFBbEUsRUFBbUYsT0FBTyxNQUFLVixLQUFMLENBQVdXLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkIsRUFBQ0MsU0FBUyxNQUFWLEVBQTdCLEdBQWlELEVBQTNJO0FBQ0o7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmLEVBQTRCLE9BQU8sRUFBQ0MsT0FBTyxNQUFLVixXQUFMLENBQWlCTSxNQUFqQixJQUEyQixNQUFJLEVBQUosR0FBTyxDQUFsQyxDQUFSLEVBQW5DO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsUUFBZjtBQUNDLG9CQUFLTixXQUFMLENBQWlCVyxHQUFqQixDQUFxQixVQUFDQyxNQUFELEVBQVFULENBQVIsRUFBYztBQUNsQyxvQkFBSVUsY0FBYyxFQUFsQjtBQUNBLG9CQUFHRCxPQUFPRSxJQUFQLEtBQWdCLE1BQW5CLEVBQTBCO0FBQ3hCRCw4QkFBWSxPQUFaLElBQXVCLEdBQXZCO0FBQ0FBLDhCQUFZLFFBQVosSUFBd0IsS0FBeEI7QUFDRDtBQUNELG9CQUFJUixnQkFBZ0JGLEtBQUssQ0FBekIsRUFBMkI7QUFBRVUsOEJBQVksYUFBWixJQUE2QixNQUE3QjtBQUFxQztBQUNsRSxvQkFBR1YsSUFBSSxFQUFQLEVBQVU7QUFDUix5QkFBTztBQUFBO0FBQUEsc0JBQU0sV0FBVSxhQUFoQixFQUE4QixPQUFPVSxXQUFyQztBQUFtREQsMkJBQU9HO0FBQTFELG1CQUFQO0FBQ0Q7QUFDRixlQVZBO0FBREQsYUFERjtBQWNHLGtCQUFLZCxRQUFMLENBQWNVLEdBQWQsQ0FBa0IsZUFBTztBQUN4QixrQkFBSUssY0FBYyxFQUFsQjtBQUNBLGtCQUFJWixZQUFKLEVBQWlCO0FBQUVZLDRCQUFZLFFBQVosSUFBd0IsS0FBeEI7QUFBOEI7QUFDakQscUJBQVE7QUFBQTtBQUFBLGtCQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPQSxXQUFqQztBQUNMLHNCQUFLaEIsV0FBTCxDQUFpQlcsR0FBakIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFTVCxDQUFULEVBQWU7QUFDbkMsc0JBQUlVLGNBQWMsRUFBbEI7QUFDQSxzQkFBR0QsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QkQsZ0NBQVksT0FBWixJQUF1QixHQUF2QjtBQUNBQSxnQ0FBWSxRQUFaLElBQXdCLEtBQXhCO0FBQ0Q7QUFDRCxzQkFBSVIsZ0JBQWdCRixLQUFLLENBQXpCLEVBQTJCO0FBQUVVLGdDQUFZLGFBQVosSUFBNkIsTUFBN0I7QUFBcUM7QUFDbEUsc0JBQUdWLElBQUksRUFBUCxFQUFVO0FBQ1IsMkJBQU87QUFBQTtBQUFBLHdCQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBT1UsV0FBckM7QUFBbURJLDBCQUFJTCxPQUFPRyxJQUFYO0FBQW5ELHFCQUFQO0FBQ0Q7QUFDRixpQkFWQTtBQURLLGVBQVI7QUFhRCxhQWhCQTtBQWRIO0FBREE7QUFESSxPQUFSO0FBb0NELEs7Ozs7OztBQUlIdkIsa0JBQWtCMEIsU0FBbEIsR0FBOEIzQixVQUFVNEIsV0FBeEM7O2tCQUVlM0IsaUIiLCJmaWxlIjoiNDkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgcHJvcHR5cGVzIGZyb20gJy4uL3Byb3B0eXBlcy90eXBlcyc7XG5cbmNsYXNzIENvbGxlY3Rpb25NZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy50ZXh0KTtcbiAgICBwcmludChkYXRhKVxuICAgIHRoaXMudGVzdENvbHVtbnMgPSBkYXRhW1wiY29sdW1uX2RhdGFcIl07XG4gICAgdGhpcy50ZXN0Um93cyA9IGRhdGFbXCJyb3dfZGF0YVwiXTtcbiAgICB0aGlzLmdldFJvdyA9IChpKSA9PiB0aGlzLnRlc3RSb3dzW2ldO1xuICAgIGxldCBjb250YWluc1RleHQgPSBmYWxzZTtcbiAgICBsZXQgc2luZ2xlQ29sdW1uID0gdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggPT09IDE7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZSA9IHt0aGlzLnByb3BzLm9yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXt0aGlzLnByb3BzLmhpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZSB0YWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFfdGFibGVcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCAqICgzNTArMTArMSl9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLGkpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgaWYoaSA8IDUwKXtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57Y29sdW1uLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy50ZXN0Um93cy5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdSb3dTdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5zVGV4dCl7IG5ld1Jvd1N0eWxlWydoZWlnaHQnXSA9ICc0ZW0nfTtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJkYXRhX3Jvd1wiIHN0eWxlPXtuZXdSb3dTdHlsZX0+XG4gICAgICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbFN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWyd3aWR0aCddID0gMzUwO1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ2hlaWdodCddID0gJzRlbSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW5nbGVDb2x1bW4gfHwgaSA9PSAwKXsgbmV3Q29sU3R5bGVbJ2JvcmRlci1sZWZ0J10gPSAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICBpZihpIDwgNTApe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG5cbn1cblxuQ29sbGVjdGlvbk1lc3NhZ2UucHJvcFR5cGVzID0gcHJvcHR5cGVzLm1lc3NhZ2VUeXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uTWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbGxlY3Rpb25NZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})