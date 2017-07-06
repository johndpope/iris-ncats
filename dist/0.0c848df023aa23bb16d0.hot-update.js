webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(_reactDataGrid2.default, { columns: _this.props.testColumns, rowGetter: _this.props.getRow, rowsCount: _this.props.testRows.length })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CollectionMessage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.props.testColumns = [{ key: 'col1', name: 'col1' }, { key: 'col2', name: 'col2' }];\n      this.props.testRows = [{ col1: 1, col2: 2 }, { col1: 3, col2: 4 }];\n      this.props.getRow = function (i) {\n        return _this2.testRows[i];\n      };\n    }\n  }]);\n\n  return CollectionMessage;\n}(_react.Component);\n\n// const CollectionMessage = ({ origin, text, hidden }) =>\n//     <div className = {origin === 'iris' ? 'message left' : 'message right'} style={hidden === true ? {display: 'none'} : {}}>\n//         <ReactDataGrid columns={testColumns} rowGetter={getRow} rowsCount={testRows.length} />\n//     </div>;\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwicHJvcHMiLCJvcmlnaW4iLCJoaWRkZW4iLCJkaXNwbGF5IiwidGVzdENvbHVtbnMiLCJnZXRSb3ciLCJ0ZXN0Um93cyIsImxlbmd0aCIsImtleSIsIm5hbWUiLCJjb2wxIiwiY29sMiIsImkiLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLFM7Ozs7Ozs7Ozs7OztJQUVOQyxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BY0pDLE0sR0FBUztBQUFBLGFBQ1A7QUFBQTtBQUFBLFVBQUssV0FBYSxNQUFLQyxLQUFMLENBQVdDLE1BQVgsS0FBc0IsTUFBdEIsR0FBK0IsY0FBL0IsR0FBZ0QsZUFBbEUsRUFBbUYsT0FBTyxNQUFLRCxLQUFMLENBQVdFLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkIsRUFBQ0MsU0FBUyxNQUFWLEVBQTdCLEdBQWlELEVBQTNJO0FBQ0ksaUVBQWUsU0FBUyxNQUFLSCxLQUFMLENBQVdJLFdBQW5DLEVBQWdELFdBQVcsTUFBS0osS0FBTCxDQUFXSyxNQUF0RSxFQUE4RSxXQUFXLE1BQUtMLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkMsTUFBN0c7QUFESixPQURPO0FBQUEsSzs7Ozs7d0NBWlc7QUFBQTs7QUFDbEIsV0FBS1AsS0FBTCxDQUFXSSxXQUFYLEdBQXlCLENBQ3ZCLEVBQUNJLEtBQUssTUFBTixFQUFjQyxNQUFNLE1BQXBCLEVBRHVCLEVBRXZCLEVBQUNELEtBQUssTUFBTixFQUFjQyxNQUFNLE1BQXBCLEVBRnVCLENBQXpCO0FBSUEsV0FBS1QsS0FBTCxDQUFXTSxRQUFYLEdBQXNCLENBQ3BCLEVBQUNJLE1BQU0sQ0FBUCxFQUFVQyxNQUFNLENBQWhCLEVBRG9CLEVBRXBCLEVBQUNELE1BQU0sQ0FBUCxFQUFVQyxNQUFNLENBQWhCLEVBRm9CLENBQXRCO0FBSUEsV0FBS1gsS0FBTCxDQUFXSyxNQUFYLEdBQW9CLFVBQUNPLENBQUQ7QUFBQSxlQUFPLE9BQUtOLFFBQUwsQ0FBY00sQ0FBZCxDQUFQO0FBQUEsT0FBcEI7QUFDRDs7Ozs7O0FBUUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUFkLGtCQUFrQmUsU0FBbEIsR0FBOEJoQixVQUFVaUIsV0FBeEM7O2tCQUVlaEIsaUIiLCJmaWxlIjoiNDE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgcHJvcHR5cGVzIGZyb20gJy4uL3Byb3B0eXBlcy90eXBlcyc7XG5cbmNsYXNzIENvbGxlY3Rpb25NZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnRlc3RDb2x1bW5zID0gW1xuICAgICAge2tleTogJ2NvbDEnLCBuYW1lOiAnY29sMSd9LFxuICAgICAge2tleTogJ2NvbDInLCBuYW1lOiAnY29sMid9XG4gICAgXTtcbiAgICB0aGlzLnByb3BzLnRlc3RSb3dzID0gW1xuICAgICAge2NvbDE6IDEsIGNvbDI6IDJ9LFxuICAgICAge2NvbDE6IDMsIGNvbDI6IDR9XG4gICAgXTtcbiAgICB0aGlzLnByb3BzLmdldFJvdyA9IChpKSA9PiB0aGlzLnRlc3RSb3dzW2ldO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHt0aGlzLnByb3BzLm9yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXt0aGlzLnByb3BzLmhpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgICA8UmVhY3REYXRhR3JpZCBjb2x1bW5zPXt0aGlzLnByb3BzLnRlc3RDb2x1bW5zfSByb3dHZXR0ZXI9e3RoaXMucHJvcHMuZ2V0Um93fSByb3dzQ291bnQ9e3RoaXMucHJvcHMudGVzdFJvd3MubGVuZ3RofSAvPlxuICAgIDwvZGl2Pjtcbn1cblxuLy8gY29uc3QgQ29sbGVjdGlvbk1lc3NhZ2UgPSAoeyBvcmlnaW4sIHRleHQsIGhpZGRlbiB9KSA9PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lID0ge29yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXtoaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbi8vICAgICAgICAgPFJlYWN0RGF0YUdyaWQgY29sdW1ucz17dGVzdENvbHVtbnN9IHJvd0dldHRlcj17Z2V0Um93fSByb3dzQ291bnQ9e3Rlc3RSb3dzLmxlbmd0aH0gLz5cbi8vICAgICA8L2Rpdj47XG5cbkNvbGxlY3Rpb25NZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbk1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})