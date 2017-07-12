webpackHotUpdate(0,{

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _reactRouter = __webpack_require__(291);\n\nvar _routes = __webpack_require__(518);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import DevTools from './DevTools';\n\n\nvar Root = function (_Component) {\n    _inherits(Root, _Component);\n\n    function Root() {\n        _classCallCheck(this, Root);\n\n        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));\n    }\n\n    _createClass(Root, [{\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                store = _props.store,\n                history = _props.history;\n\n            return _react2.default.createElement(\n                _reactRedux.Provider,\n                { store: store },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })\n                )\n            );\n        }\n    }]);\n\n    return Root;\n}(_react.Component);\n\nexports.default = Root;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Sb290LmRldi5qcz82NzhlIl0sIm5hbWVzIjpbIlJvb3QiLCJwcm9wcyIsInN0b3JlIiwiaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7OztBQUZBOzs7SUFLcUJBLEk7Ozs7Ozs7Ozs7O2lDQUNSO0FBQUEseUJBQ3NCLEtBQUtDLEtBRDNCO0FBQUEsZ0JBQ0dDLEtBREgsVUFDR0EsS0FESDtBQUFBLGdCQUNVQyxPQURWLFVBQ1VBLE9BRFY7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFVLE9BQU9ELEtBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0kseUVBQVEsU0FBU0MsT0FBakIsRUFBMEIsd0JBQTFCO0FBREo7QUFESixhQURKO0FBT0g7Ozs7OztrQkFWZ0JILEkiLCJmaWxlIjoiNTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgRGV2VG9vbHMgZnJvbSAnLi9EZXZUb29scyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSwgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0gcm91dGVzPXtyb3V0ZXN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL1Jvb3QuZGV2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})