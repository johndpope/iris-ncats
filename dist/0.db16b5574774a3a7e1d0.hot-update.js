webpackHotUpdate(0,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Message = __webpack_require__(502);\n\nvar _Message2 = _interopRequireDefault(_Message);\n\nvar _TitleMessage = __webpack_require__(510);\n\nvar _TitleMessage2 = _interopRequireDefault(_TitleMessage);\n\nvar _VisualMessage = __webpack_require__(513);\n\nvar _VisualMessage2 = _interopRequireDefault(_VisualMessage);\n\nvar _DataMessage = __webpack_require__(495);\n\nvar _DataMessage2 = _interopRequireDefault(_DataMessage);\n\nvar _CodeMessage = __webpack_require__(491);\n\nvar _CodeMessage2 = _interopRequireDefault(_CodeMessage);\n\nvar _ExplainMessage = __webpack_require__(497);\n\nvar _ExplainMessage2 = _interopRequireDefault(_ExplainMessage);\n\nvar _FilePickMessage = __webpack_require__(498);\n\nvar _FilePickMessage2 = _interopRequireDefault(_FilePickMessage);\n\nvar _CollectionMessage = __webpack_require__(492);\n\nvar _CollectionMessage2 = _interopRequireDefault(_CollectionMessage);\n\nvar _TableSelectMessage = __webpack_require__(508);\n\nvar _TableSelectMessage2 = _interopRequireDefault(_TableSelectMessage);\n\nvar _VegaMessage = __webpack_require__(512);\n\nvar _VegaMessage2 = _interopRequireDefault(_VegaMessage);\n\nvar _Title = __webpack_require__(509);\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nvar _types = __webpack_require__(62);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Conversation = function (_Component) {\n    _inherits(Conversation, _Component);\n\n    function Conversation() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Conversation);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n            // this is somewhat cludgy, but basically we only want one SelectMessage component to be visually fuctional within a conversation\n            var lastSelectMessageIndex = null;\n            var i = void 0;\n            for (i = 0; i < _this.props.messages.length; i++) {\n                if (_typeof(_this.props.messages[i].text) === 'object' && (_this.props.messages[i].text.type === 'collection_select' || _this.props.messages[i].text.type === 'collection_select_one')) {\n                    lastSelectMessageIndex = i;\n                }\n            }\n            // TODO: is there a way to clean this up, maybe via switch?\n            return _react2.default.createElement(\n                'div',\n                { className: 'innerConversation' },\n                _react2.default.createElement(_Title2.default, { text: _this.props.title, args: _this.props.args, id: _this.props.id }),\n                _this.props.messages.map(function (message, i) {\n                    var content = void 0;\n                    if (_typeof(message.text) === 'object' && message.text.type === 'image') {\n                        content = _react2.default.createElement(_VisualMessage2.default, { key: message.id, origin: message.origin, content: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'data') {\n                        content = _react2.default.createElement(_DataMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'explain') {\n                        content = _react2.default.createElement(_ExplainMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'file_pick') {\n                        content = _react2.default.createElement(_FilePickMessage2.default, { key: message.id, active: _this.props.active, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'code') {\n                        content = _react2.default.createElement(_CodeMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection') {\n                        content = _react2.default.createElement(_CollectionMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection_select') {\n                        content = _react2.default.createElement(_TableSelectMessage2.default, { key: message.id, onlyOne: false, active: _this.props.active && i === lastSelectMessageIndex, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection_select_one') {\n                        console.log(message.text.value);\n                        content = _react2.default.createElement(_TableSelectMessage2.default, { key: message.id, onlyOne: true, active: _this.props.active && i === lastSelectMessageIndex, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'vega') {\n                        console.log(\"vega\", message.text);\n                        content = _react2.default.createElement(_VegaMessage2.default, { key: message.id, origin: message.origin, spec: message.text.spec, data: message.text.data, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'title') {\n                        content = _react2.default.createElement(_TitleMessage2.default, { key: message.id, origin: message.origin, text: message.text.text, title: message.text.title, titlehidden: _this.props.hidden });\n                    } else {\n                        content = _react2.default.createElement(_Message2.default, { key: message.id, origin: message.origin, text: message.text, hidden: _this.props.hidden });\n                    }\n                    return content;\n                })\n            );\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    return Conversation;\n}(_react.Component);\n\nexports.default = Conversation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db252ZXJzYXRpb24uanM/Yjg5NiJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJDb252ZXJzYXRpb24iLCJyZW5kZXIiLCJsYXN0U2VsZWN0TWVzc2FnZUluZGV4IiwiaSIsInByb3BzIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJ0ZXh0IiwidHlwZSIsInRpdGxlIiwiYXJncyIsImlkIiwibWFwIiwibWVzc2FnZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJ2YWx1ZSIsImhpZGRlbiIsImFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJzcGVjIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7O0lBR05DLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUVGQyxNLEdBQVMsWUFBTTtBQUNYO0FBQ0EsZ0JBQUlDLHlCQUF5QixJQUE3QjtBQUNBLGdCQUFJQyxVQUFKO0FBQ0EsaUJBQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJLE1BQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsTUFBcEMsRUFBNENILEdBQTVDLEVBQWdEO0FBQzlDLG9CQUFJLFFBQU8sTUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixDQUFwQixFQUF1QkksSUFBOUIsTUFBdUMsUUFBdkMsS0FBb0QsTUFBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixDQUFwQixFQUF1QkksSUFBdkIsQ0FBNEJDLElBQTVCLEtBQXFDLG1CQUFyQyxJQUE0RCxNQUFLSixLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLENBQXBCLEVBQXVCSSxJQUF2QixDQUE0QkMsSUFBNUIsS0FBcUMsdUJBQXJKLENBQUosRUFBa0w7QUFDaExOLDZDQUF5QkMsQ0FBekI7QUFDRDtBQUNGO0FB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QVIsQ0FBYUMsSUFBYixLQUFzQixPQUE5RCxFQUFzRTtBQUN2RU0sa0NBQVUsd0RBQWMsS0FBS0QsUUFBUUYsRUFBM0IsRUFBK0IsUUFBUUUsUUFBUUUsTUFBL0MsRUFBdUQsTUFBTUYsUUFBUU4sSUFBUixDQUFhQSxJQUExRSxFQUFnRixPQUFPTSxRQUFRTixJQUFSLENBQWFFLEtBQXBHLEVBQTJHLGFBQWEsTUFBS0wsS0FBTCxDQUFXYSxNQUFuSSxHQUFWO0FBQ0wscUJBRk0sTUFHSDtBQUNFSCxrQ0FBVSxtREFBUyxLQUFLRCxRQUFRRixFQUF0QixFQUEwQixRQUFRRSxRQUFRRSxNQUExQyxFQUFrRCxNQUFNRixRQUFRTixJQUFoRSxFQUFzRSxRQUFRLE1BQUtILEtBQUwsQ0FBV2EsTUFBekYsR0FBVjtBQUNMO0FBQ0QsMkJBQU9ILE9BQVA7QUFDSCxpQkE3QkE7QUFGRyxhQUFSO0FBaUNELFM7Ozs7OztrQkFHUWQsWSIsImZpbGUiOiI0OTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xuaW1wb3J0IFRpdGxlTWVzc2FnZSBmcm9tICcuL1RpdGxlTWVzc2FnZSc7XG5pbXBvcnQgVmlzdWFsTWVzc2FnZSBmcm9tICcuL1Zpc3VhbE1lc3NhZ2UnO1xuaW1wb3J0IERhdGFNZXNzYWdlIGZyb20gJy4vRGF0YU1lc3NhZ2UnO1xuaW1wb3J0IENvZGVNZXNzYWdlIGZyb20gJy4vQ29kZU1lc3NhZ2UnO1xuaW1wb3J0IEV4cGxhaW5NZXNzYWdlIGZyb20gJy4vRXhwbGFpbk1lc3NhZ2UnO1xuaW1wb3J0IEZpbGVQaWNrTWVzc2FnZSBmcm9tICcuL0ZpbGVQaWNrTWVzc2FnZSc7XG5pbXBvcnQgQ29sbGVjdGlvbk1lc3NhZ2UgZnJvbSAnLi9Db2xsZWN0aW9uTWVzc2FnZSc7XG5pbXBvcnQgVGFibGVTZWxlY3RNZXNzYWdlIGZyb20gJy4vVGFibGVTZWxlY3RNZXNzYWdlJztcbmltcG9ydCBWZWdhTWVzc2FnZSBmcm9tICcuL1ZlZ2FNZXNzYWdlJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuXG5cbmNsYXNzIENvbnZlcnNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMgaXMgc29tZXdoYXQgY2x1ZGd5LCBidXQgYmFzaWNhbGx5IHdlIG9ubHkgd2FudCBvbmUgU2VsZWN0TWVzc2FnZSBjb21wb25lbnQgdG8gYmUgdmlzdWFsbHkgZnVjdGlvbmFsIHdpdGhpbiBhIGNvbnZlcnNhdGlvblxuICAgICAgICBsZXQgbGFzdFNlbGVjdE1lc3NhZ2VJbmRleCA9IG51bGw7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm1lc3NhZ2VzW2ldLnRleHQgPT09ICdvYmplY3QnICYmICh0aGlzLnByb3BzLm1lc3NhZ2VzW2ldLnRleHQudHlwZSA9PT0gJ2NvbGxlY3Rpb25fc2VsZWN0JyB8fCB0aGlzLnByb3BzLm1lc3NhZ2VzW2ldLnRleHQudHlwZSA9PT0gJ2NvbGxlY3Rpb25fc2VsZWN0X29uZScpKXtcbiAgICAgICAgICAgIGxhc3RTZWxlY3RNZXNzYWdlSW5kZXggPSBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiBpcyB0aGVyZSBhIHdheSB0byBjbGVhbiB0aGlzIHVwLCBtYXliZSB2aWEgc3dpdGNoP1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJDb252ZXJzYXRpb25cIj5cbiAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0aGlzLnByb3BzLnRpdGxlfSBhcmdzPXt0aGlzLnByb3BzLmFyZ3N9IGlkPXt0aGlzLnByb3BzLmlkfS8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8VmlzdWFsTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IGNvbnRlbnQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxEYXRhTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnZXhwbGFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxFeHBsYWluTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnZmlsZV9waWNrJykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPEZpbGVQaWNrTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnY29kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxDb2RlTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnY29sbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8Q29sbGVjdGlvbk1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvcmlnaW49e21lc3NhZ2Uub3JpZ2lufSB0ZXh0PXttZXNzYWdlLnRleHQudmFsdWV9IGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59Lz47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZS50ZXh0ID09PSAnb2JqZWN0JyAmJiBtZXNzYWdlLnRleHQudHlwZSA9PT0gJ2NvbGxlY3Rpb25fc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxUYWJsZVNlbGVjdE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvbmx5T25lPXtmYWxzZX0gYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZSAmJiBpID09PSBsYXN0U2VsZWN0TWVzc2FnZUluZGV4fSBvcmlnaW49e21lc3NhZ2Uub3JpZ2lufSB0ZXh0PXttZXNzYWdlLnRleHQudmFsdWV9IGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59Lz47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZS50ZXh0ID09PSAnb2JqZWN0JyAmJiBtZXNzYWdlLnRleHQudHlwZSA9PT0gJ2NvbGxlY3Rpb25fc2VsZWN0X29uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UudGV4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPFRhYmxlU2VsZWN0TWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9ubHlPbmU9e3RydWV9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmUgJiYgaSA9PT0gbGFzdFNlbGVjdE1lc3NhZ2VJbmRleH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICd2ZWdhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2ZWdhXCIsIG1lc3NhZ2UudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPFZlZ2FNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gc3BlYz17bWVzc2FnZS50ZXh0LnNwZWN9IGRhdGE9e21lc3NhZ2UudGV4dC5kYXRhfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICd0aXRsZScpe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8VGl0bGVNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnRleHR9IHRpdGxlPXttZXNzYWdlLnRleHQudGl0bGV9IHRpdGxlaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvcmlnaW49e21lc3NhZ2Uub3JpZ2lufSB0ZXh0PXttZXNzYWdlLnRleHR9IGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59Lz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})