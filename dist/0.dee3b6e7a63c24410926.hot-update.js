webpackHotUpdate(0,{

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(433);\n\nvar _redux = __webpack_require__(296);\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// TODO: a bit confused why we need this function\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\n// given an action, push any new messages onto an existing set of messages\nvar appendMessages = function appendMessages(oldMessages, action) {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\n// given an action, update a conversation with new messages\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\n// reducer for conversations\n// TODO: This definition state is pretty long, messy \nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, state, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\n// combine all these reducers together\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJyZW1vdmVJbmRleCIsImFyciIsImkiLCJmaXJzdF9oYWxmIiwic2xpY2UiLCJzZWNvbmRfaGFsZiIsImJsYW5rQ29tbWFuZCIsIm5hbWUiLCJjb21tYW5kIiwiZXhwbGFuYXRpb24iLCJ0ZXN0SW5wdXQiLCJwcmV2aWV3IiwiZXJyb3IiLCJjb21tYW5kRWRpdFBhbmUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJuZXdfc3RhdGUiLCJVUERBVEVfQ09NTUFORCIsIkFERF9DT01NQU5EX0FSRyIsIlJFU0VUX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiVVBEQVRFX0NPTU1BTkRfRVhBTVBMRSIsIm5ld0V4YW1wbGVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwibmV3QXJncyIsInZhbHVlcyIsIkRFTEVURV9DT01NQU5EX0FSRyIsIkRFTEVURV9DT01NQU5EX0VYQU1QTEUiLCJpbnB1dEhpc3RvcnkiLCJuZXdJZCIsIkFERF9JTlBVVF9ISVNUT1JZIiwiY3VycklkIiwibWVzc2FnZSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsImRpcmVjdGlvbiIsInJvb3RSZWR1Y2VyIiwicm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsQzs7Ozs7O0FBRVo7QUFDQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLFVBQVVDLFNBQWQsRUFBeUI7QUFDckIsZUFBT0QsS0FBUDtBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsQ0FMRDs7QUFPQTtBQUNBLElBQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQzVDLFFBQU1DLGNBQWMsRUFBcEI7QUFDQSxRQUFJQyxhQUFhLENBQWpCO0FBQ0EsUUFBSUgsWUFBWUksTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CWCxFQUFFWSxHQUFGLENBQU1QLFdBQU4sRUFBbUIsVUFBU1EsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLEVBQUVDLEVBQVQ7QUFBYyxTQUEvQyxDQUFuQjtBQUNBTixxQkFBYVIsRUFBRWUsR0FBRixDQUFNZixFQUFFWSxHQUFGLENBQU1QLFdBQU4sRUFBbUIsVUFBU1EsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLEVBQUVDLEVBQVQ7QUFBYyxTQUEvQyxDQUFOLENBQWI7QUFDSDtBQU4yQztBQUFBO0FBQUE7O0FBQUE7QUFPNUMsNkJBQWdCUixPQUFPVSxJQUF2Qiw4SEFBNkI7QUFBQSxnQkFBbEJILENBQWtCOztBQUN6Qkw7QUFDQUQsd0JBQVlVLElBQVosQ0FBaUIsRUFBQyxVQUFVWCxPQUFPWSxNQUFsQixFQUEwQixRQUFRTCxDQUFsQyxFQUFxQyxNQUFNTCxVQUEzQztBQUNDLHlCQUFTUCxZQUFZSyxPQUFPYSxLQUFuQixDQURWLEVBQ3FDLE9BQU9sQixZQUFZSyxPQUFPYyxHQUFuQixDQUQ1QyxFQUFqQjtBQUVIO0FBWDJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWTVDLFdBQU9mLFlBQVlnQixNQUFaLENBQW1CZCxXQUFuQixDQUFQO0FBQ0gsQ0FiRDs7QUFlQTtBQUNBLElBQU1lLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBUWpCLE1BQVIsRUFBbUI7QUFBQSxRQUNuQ2tCLFFBRG1DLEdBQ3RCRCxLQURzQixDQUNuQ0MsUUFEbUM7O0FBRTNDLHdCQUFZRCxLQUFaLElBQW1CQyxVQUFVcEIsZUFBZW9CLFFBQWYsRUFBeUJsQixNQUF6QixDQUE3QixFQUErRG1CLE1BQU1uQixPQUFPb0IsT0FBNUU7QUFDSCxDQUhEOztBQUtBO0FBQ0E7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBZ0o7QUFBQSxRQUEvSVIsS0FBK0ksdUVBQXZJLEVBQUMsV0FBVyxFQUFaLEVBQWdCLGdCQUFnQixFQUFFLFlBQVksRUFBZCxFQUFrQixTQUFTLElBQTNCLEVBQWlDLFVBQVUsS0FBM0MsRUFBa0QsTUFBTSxDQUF4RCxFQUEyRCxRQUFRLEVBQW5FLEVBQWhDLEVBQXlHLFNBQVMsT0FBbEgsRUFBdUk7QUFBQSxRQUFYYixNQUFXO0FBQUEsUUFDekpzQixPQUR5SixHQUMvSFQsS0FEK0gsQ0FDekpTLE9BRHlKO0FBQUEsUUFDaEpDLFlBRGdKLEdBQy9IVixLQUQrSCxDQUNoSlUsWUFEZ0o7O0FBRWpLLFFBQUlDLGlCQUFKO0FBQ0EsWUFBUXhCLE9BQU95QixJQUFmO0FBQ0ksYUFBS2hDLE1BQU1pQyxjQUFYO0FBQ0l0QixvQkFBUUMsR0FBUixDQUFZTCxPQUFPcUIsWUFBUCxDQUFvQkUsWUFBaEM7QUFDQSxtQkFBTyxFQUFFRCxTQUFTdEIsT0FBT3FCLFlBQVAsQ0FBb0JDLE9BQS9CLEVBQXdDQyxjQUFjdkIsT0FBT3FCLFlBQVAsQ0FBb0JFLFlBQTFFLEVBQXdGLFNBQVNWLE1BQU1BLEtBQXZHLEVBQVA7QUFDSixhQUFLcEIsTUFBTWtDLFdBQVg7QUFDSSxtQkFBTyxFQUFFTCxnQkFBRixFQUFXQyxjQUFjUCxvQkFBb0JPLFlBQXBCLEVBQWtDdkIsTUFBbEMsQ0FBekIsRUFBb0UsU0FBU2EsTUFBTUEsS0FBbkYsRUFBUDtBQUNKLGFBQUtwQixNQUFNbUMsa0JBQVg7QUFDSSxnQkFBSTVCLE9BQU9VLElBQVAsQ0FBWVAsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQix1QkFBT1UsS0FBUDtBQUNIO0FBQ0RXLHVCQUFXUixvQkFBb0JPLFlBQXBCLEVBQWtDdkIsTUFBbEMsQ0FBWDtBQUNBLGdCQUFJQSxPQUFPYSxLQUFQLEtBQWlCLE9BQXJCLEVBQThCO0FBQzFCO0FBQ0E7QUFDQSxvQkFBSWdCLFFBQVE3QixPQUFPc0IsT0FBUCxDQUFlbkIsTUFBM0I7QUFDQXFCLHdDQUFlQSxRQUFmLElBQXlCTSxPQUFPOUIsT0FBTytCLEtBQXZDLEVBQThDdkIsSUFBSXFCLEtBQWxEO0FBQ0EsdUJBQU8sRUFBRVAsU0FBU3RCLE9BQU9zQixPQUFQLENBQWVQLE1BQWYsQ0FBc0IsQ0FBQ1MsUUFBRCxDQUF0QixDQUFYLEVBQThDLGdCQUFnQixFQUFFLFlBQVksRUFBZCxFQUFrQixTQUFTLElBQTNCLEVBQWlDLFVBQVUsS0FBM0MsRUFBa0QsTUFBTUEsU0FBU2hCLEVBQVQsR0FBYyxDQUF0RSxFQUF5RSxRQUFRLEVBQWpGLEVBQTlELEVBQXFKSyxPQUFPLE9BQTVKLEVBQVA7QUFDSDtBQUNELG1CQUFPLEVBQUVTLGdCQUFGLEVBQVdDLGNBQWNDLFFBQXpCLEVBQW1DWCxPQUFPYixPQUFPYSxLQUFqRCxFQUFQO0FBQ0osYUFBS3BCLE1BQU11QyxpQkFBWDtBQUNJLGdCQUFNQyxhQUFhdkMsRUFBRVksR0FBRixDQUFNZ0IsT0FBTixFQUFlLGdCQUFRO0FBQ3RDLG9CQUFNWSxtQkFBVUMsSUFBVixDQUFOO0FBQ0Esb0JBQUlBLEtBQUszQixFQUFMLEtBQVlSLE9BQU9RLEVBQXZCLEVBQTJCO0FBQ3ZCMEIsd0JBQUlFLE1BQUosR0FBYSxDQUFDRixJQUFJRSxNQUFsQjtBQUNIO0FBQ0QsdUJBQU9GLEdBQVA7QUFDSCxhQU5rQixDQUFuQjtBQU9BVixvQ0FBZUQsWUFBZjtBQUNBLGdCQUFJQyxTQUFTaEIsRUFBVCxLQUFnQlIsT0FBT1EsRUFBM0IsRUFBK0I7QUFDM0JnQix5QkFBU1ksTUFBVCxHQUFrQixDQUFDWixTQUFTWSxNQUE1QjtBQUNIO0FBQ0QsbUJBQU8sRUFBRWQsU0FBU1csVUFBWCxFQUF1QlYsY0FBY0MsUUFBckMsRUFBK0NYLE9BQU9BLE1BQU1BLEtBQTVELEVBQVA7QUFDSjtBQUNJLG1CQUFPQSxLQUFQO0FBakNSO0FBbUNILENBdENEOztBQXdDQSxJQUFNd0IsWUFBWSxTQUFaQSxTQUFZLEdBQXdCO0FBQUEsUUFBdkJ4QixLQUF1Qix1RUFBZixFQUFlO0FBQUEsUUFBWGIsTUFBVzs7QUFDdEMsWUFBUUEsT0FBT3lCLElBQWY7QUFDSSxhQUFLaEMsTUFBTTZDLGdCQUFYO0FBQ0ksbUJBQU90QyxPQUFPcUMsU0FBZDtBQUNKO0FBQ0ksbUJBQU94QixLQUFQO0FBSlI7QUFNSCxDQVBEOztBQVNBLElBQU0wQixjQUFjLFNBQWRBLFdBQWMsR0FBd0I7QUFBQSxRQUF2QjFCLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYYixNQUFXOztBQUN4QyxZQUFRQSxPQUFPeUIsSUFBZjtBQUNJLGFBQUtoQyxNQUFNK0Msa0JBQVg7QUFDSSxtQkFBT3hDLE9BQU91QyxXQUFkO0FBQ0o7QUFDSSxtQkFBTzFCLEtBQVA7QUFKUjtBQU1ILENBUEQ7O0FBU0EsSUFBTTRCLE9BQU8sU0FBUEEsSUFBTyxHQUEyRTtBQUFBLFFBQTFFNUIsS0FBMEUsdUVBQWxFLEVBQUNpQixPQUFPLEVBQVIsRUFBWVksVUFBVSxFQUF0QixFQUEwQkMsYUFBYSxFQUF2QyxFQUEyQ0MsUUFBTyxFQUFsRCxFQUFrRTtBQUFBLFFBQVg1QyxNQUFXOztBQUNwRixZQUFRQSxPQUFPeUIsSUFBZjtBQUNJLGFBQUtoQyxNQUFNb0QsV0FBWDtBQUNJLG1CQUFPN0MsT0FBTzhDLEdBQWQ7QUFDSjtBQUNJLG1CQUFPakMsS0FBUDtBQUpSO0FBTUgsQ0FQRDs7QUFTQSxJQUFNa0MsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUErQztBQUFBLFFBQTlDbEMsS0FBOEMsdUVBQXRDLEVBQUNtQyxRQUFRLEVBQVQsRUFBYUMsU0FBUyxFQUF0QixFQUFzQztBQUFBLFFBQVhqRCxNQUFXOztBQUNwRSxZQUFRQSxPQUFPeUIsSUFBZjtBQUNFLGFBQUtoQyxNQUFNeUQsV0FBWDtBQUNFLGdDQUFXckMsS0FBWCxJQUFrQm1DLFFBQVFoRCxPQUFPZ0QsTUFBakM7QUFDRixhQUFLdkQsTUFBTTBELGNBQVg7QUFDRSxnQ0FBV3RDLEtBQVgsSUFBa0JvQyxTQUFTakQsT0FBT2lELE9BQWxDO0FBQ0Y7QUFDRSxtQkFBT3BDLEtBQVA7QUFOSjtBQVFELENBVEQ7O0FBV0EsSUFBTXVDLGVBQWUsU0FBZkEsWUFBZSxHQUFtQztBQUFBLFFBQWxDdkMsS0FBa0MsdUVBQTFCLEVBQUMsU0FBUyxFQUFWLEVBQTBCO0FBQUEsUUFBWGIsTUFBVzs7QUFDdEQsWUFBUUEsT0FBT3lCLElBQWY7QUFDRSxhQUFLaEMsTUFBTTRELG1CQUFYO0FBQ0UsbUJBQU8sRUFBQyxTQUFTckQsT0FBT29ELFlBQWpCLEVBQVA7QUFDRjtBQUNFLG1CQUFPdkMsS0FBUDtBQUpKO0FBTUQsQ0FQRDs7QUFTQSxJQUFNeUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFvRDtBQUFBLFFBQW5EekMsS0FBbUQsdUVBQTdDLEVBQUMsUUFBUSxJQUFULEVBQWUsYUFBWSxJQUEzQixFQUE2QztBQUFBLFFBQVhiLE1BQVc7O0FBQ3hFLFlBQVFBLE9BQU95QixJQUFmO0FBQ0UsYUFBS2hDLE1BQU04RCxRQUFYO0FBQ0UsZ0NBQVcxQyxLQUFYLElBQWtCLFFBQVFiLE9BQU95QyxJQUFqQztBQUNGLGFBQUtoRCxNQUFNK0QsYUFBWDtBQUNFLGdDQUFXM0MsS0FBWCxJQUFrQixhQUFhYixPQUFPeUQsU0FBdEM7QUFDRjtBQUNFLG1CQUFPNUMsS0FBUDtBQU5KO0FBUUQsQ0FURDs7QUFXQSxJQUFNNkMsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQzlCLFFBQUlDLGFBQWFGLElBQUk1QyxNQUFKLENBQVcsRUFBWCxFQUFlK0MsS0FBZixDQUFxQixDQUFyQixFQUF3QkYsQ0FBeEIsQ0FBakI7QUFDQSxRQUFJRyxjQUFjSixJQUFJNUMsTUFBSixDQUFXLEVBQVgsRUFBZStDLEtBQWYsQ0FBcUJGLElBQUUsQ0FBdkIsRUFBeUJELElBQUl4RCxNQUE3QixDQUFsQjtBQUNBLFdBQU8wRCxXQUFXOUMsTUFBWCxDQUFrQmdELFdBQWxCLENBQVA7QUFDRCxDQUpEOztBQU1BLElBQU1DLGVBQWUsRUFBQ0MsTUFBTSxFQUFQLEVBQVduQyxPQUFPLEVBQWxCLEVBQXNCWCxNQUFNLEVBQTVCLEVBQWdDdUIsVUFBVSxFQUExQyxFQUE4Q3dCLFNBQVMsRUFBdkQsRUFBMkRDLGFBQWEsRUFBeEUsRUFBNEVDLFdBQVcsRUFBdkYsRUFBMkZDLFNBQVEsRUFBbkcsRUFBdUdDLE9BQU8sRUFBOUcsRUFBckI7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFxQztBQUFBLFFBQXBDMUQsS0FBb0Msb0ZBQTFCbUQsWUFBMEI7QUFBQSxRQUFYaEUsTUFBVzs7QUFDM0QsWUFBUUEsT0FBT3lCLElBQWY7QUFDRSxhQUFLaEMsTUFBTStFLGtCQUFYO0FBQ0UsZ0JBQUlDLFlBQVksRUFBaEI7QUFDQUEsc0JBQVV6RSxPQUFPaUUsSUFBakIsSUFBeUJqRSxPQUFPSixLQUFoQztBQUNBLGdDQUFXaUIsS0FBWCxFQUFxQjRELFNBQXJCO0FBQ0YsYUFBS2hGLE1BQU1pRixjQUFYO0FBQ0V0RSxvQkFBUUMsR0FBUixjQUFnQlEsS0FBaEIsRUFBMEJiLE9BQU9rRSxPQUFqQztBQUNBLGdDQUFXckQsS0FBWCxFQUFxQmIsT0FBT2tFLE9BQTVCO0FBQ0YsYUFBS3pFLE1BQU1rRixlQUFYO0FBQ0UsZ0NBQVc5RCxLQUFYLElBQWtCTSxNQUFNTixNQUFNTSxJQUFOLENBQVdKLE1BQVgsQ0FBa0IsQ0FBQyxFQUFDLFlBQVksRUFBYixFQUFpQixZQUFZLEVBQTdCLEVBQWlDLGNBQWMsRUFBL0MsRUFBRCxDQUFsQixDQUF4QjtBQUNGLGFBQUt0QixNQUFNbUYsYUFBWDtBQUNFLGdDQUFXL0QsS0FBWCxFQUFxQm1ELFlBQXJCO0FBQ0YsYUFBS3ZFLE1BQU1vRixtQkFBWDtBQUNFLGdDQUFXaEUsS0FBWCxJQUFrQjZCLFVBQVU3QixNQUFNNkIsUUFBTixDQUFlM0IsTUFBZixDQUFzQixDQUFDLEVBQUQsQ0FBdEIsQ0FBNUI7QUFDRixhQUFLdEIsTUFBTXFGLHNCQUFYO0FBQ0UsZ0JBQUlDLGNBQWNsRSxNQUFNNkIsUUFBTixDQUFlM0IsTUFBZixDQUFzQixFQUF0QixDQUFsQjtBQUNBZ0Usd0JBQVkvRSxPQUFPUSxFQUFuQixJQUF5QlIsT0FBT1UsSUFBaEM7QUFDQSxnQ0FBV0csS0FBWCxJQUFrQjZCLFVBQVVxQyxXQUE1QjtBQUNGLGFBQUt0RixNQUFNdUYsa0JBQVg7QUFDRSxnQkFBSUMsVUFBVXBFLE1BQU1NLElBQU4sQ0FBV0osTUFBWCxDQUFrQixFQUFsQixDQUFkO0FBQ0FrRSxvQkFBUWpGLE9BQU9RLEVBQWYsSUFBcUJSLE9BQU9rRixNQUE1QjtBQUNBLGdDQUFXckUsS0FBWCxJQUFrQk0sTUFBTThELE9BQXhCO0FBQ0YsYUFBS3hGLE1BQU0wRixrQkFBWDtBQUNFLGdDQUFXdEUsS0FBWCxJQUFrQk0sTUFBTXVDLFlBQVk3QyxNQUFNTSxJQUFsQixFQUF3Qm5CLE9BQU9RLEVBQS9CLENBQXhCO0FBQ0YsYUFBS2YsTUFBTTJGLHNCQUFYO0FBQ0UsZ0NBQVd2RSxLQUFYLElBQWtCNkIsVUFBVWdCLFlBQVk3QyxNQUFNNkIsUUFBbEIsRUFBNEIxQyxPQUFPUSxFQUFuQyxDQUE1QjtBQUNGO0FBQ0UsbUJBQU9LLEtBQVA7QUEzQko7QUE2QkQsQ0E5QkQ7O0FBZ0NBLElBQU13RSxlQUFlLFNBQWZBLFlBQWUsR0FBNEU7QUFBQSxRQUEzRXhFLEtBQTJFLHVFQUFuRSxFQUFDLFdBQVcsRUFBWixFQUFnQixVQUFVLElBQTFCLEVBQWdDLGVBQWUsS0FBL0MsRUFBbUU7QUFBQSxRQUFYYixNQUFXOztBQUM3RixRQUFJc0YsY0FBSjtBQUNBLFlBQVF0RixPQUFPeUIsSUFBZjtBQUNJLGFBQUtoQyxNQUFNOEYsaUJBQVg7QUFDSUQsb0JBQVF6RSxNQUFNMkUsTUFBZDtBQUNBLGdCQUFJM0UsTUFBTVMsT0FBTixDQUFjbkIsTUFBZCxLQUF5QixDQUF6QixJQUE4Qm1GLFVBQVUsSUFBNUMsRUFBa0Q7QUFDOUNBLHdCQUFRLENBQVI7QUFDSDtBQUNELGdDQUFXekUsS0FBWCxJQUFrQix3Q0FBZUEsTUFBTVMsT0FBckIsSUFBOEJ0QixPQUFPeUYsT0FBckMsRUFBbEIsRUFBaUUsVUFBVUgsS0FBM0U7QUFDSixhQUFLN0YsTUFBTWlHLGtCQUFYO0FBQ0ksZ0JBQUk3RSxNQUFNUyxPQUFOLENBQWNuQixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzVCLHVCQUFPVSxLQUFQO0FBQ0g7QUFDRHlFLG9CQUFRekUsTUFBTTJFLE1BQU4sSUFBZ0IsQ0FBeEI7QUFDQSxnQkFBSXhGLE9BQU8yRixTQUFQLEtBQXFCLElBQXpCLEVBQStCO0FBQzNCLG9CQUFJTCxRQUFTekUsTUFBTVMsT0FBTixDQUFjbkIsTUFBZCxHQUF1QixDQUFwQyxFQUF3QztBQUNwQ21GLDZCQUFTLENBQVQ7QUFDSDtBQUNKLGFBSkQsTUFJTztBQUNILG9CQUFJQSxTQUFTLENBQWIsRUFBZ0I7QUFDWkEsNkJBQVMsQ0FBVDtBQUNIO0FBQ0o7QUFDRCxnQ0FBV3pFLEtBQVgsSUFBa0IsVUFBVXlFLEtBQTVCO0FBQ0o7QUFDSSxtQkFBT3pFLEtBQVA7QUF2QlI7QUF5QkgsQ0EzQkQ7O0FBNkJBO0FBQ0EsSUFBTStFLGNBQWMsNEJBQWdCO0FBQ2hDdkUsOEJBRGdDO0FBRWhDZ0Isd0JBRmdDO0FBR2hDRSw0QkFIZ0M7QUFJaEM4Qyw4QkFKZ0M7QUFLaENqQyw4QkFMZ0M7QUFNaENYLGNBTmdDO0FBT2hDTSxrQ0FQZ0M7QUFRaENPLGdDQVJnQztBQVNoQ2lCLG9DQVRnQztBQVVoQ3NCO0FBVmdDLENBQWhCLENBQXBCOztrQkFhZUQsVyIsImZpbGUiOiI1MTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIFRPRE86IGEgYml0IGNvbmZ1c2VkIHdoeSB3ZSBuZWVkIHRoaXMgZnVuY3Rpb25cbmNvbnN0IHZhbHVlT3JOdWxsID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGdpdmVuIGFuIGFjdGlvbiwgcHVzaCBhbnkgbmV3IG1lc3NhZ2VzIG9udG8gYW4gZXhpc3Rpbmcgc2V0IG9mIG1lc3NhZ2VzXG5jb25zdCBhcHBlbmRNZXNzYWdlcyA9IChvbGRNZXNzYWdlcywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1heCA9IDA7XG4gICAgaWYgKG9sZE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcCcsIF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgICAgIGN1cnJlbnRNYXggPSBfLm1heChfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG0gb2YgYWN0aW9uLnRleHQpIHtcbiAgICAgICAgY3VycmVudE1heCsrO1xuICAgICAgICBuZXdNZXNzYWdlcy5wdXNoKHsnb3JpZ2luJzogYWN0aW9uLm9yaWdpbiwgJ3RleHQnOiBtLCAnaWQnOiBjdXJyZW50TWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB2YWx1ZU9yTnVsbChhY3Rpb24uc3RhdGUpLCAnYXJnJzogdmFsdWVPck51bGwoYWN0aW9uLmFyZyl9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZE1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlcyk7XG59O1xuXG4vLyBnaXZlbiBhbiBhY3Rpb24sIHVwZGF0ZSBhIGNvbnZlcnNhdGlvbiB3aXRoIG5ldyBtZXNzYWdlc1xuY29uc3QgYXBwZW5kTWVzc2FnZXNDb252byA9IChjb252bywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gY29udm87XG4gICAgcmV0dXJuIHsgLi4uY29udm8sIG1lc3NhZ2VzOiBhcHBlbmRNZXNzYWdlcyhtZXNzYWdlcywgYWN0aW9uKSwgYXJnczogYWN0aW9uLmFyZ19tYXAgfTtcbn07XG5cbi8vIHJlZHVjZXIgZm9yIGNvbnZlcnNhdGlvbnNcbi8vIFRPRE86IFRoaXMgZGVmaW5pdGlvbiBzdGF0ZSBpcyBwcmV0dHkgbG9uZywgbWVzc3kgXG5jb25zdCBjb252ZXJzYXRpb24gPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogMCwgJ2FyZ3MnOiB7fSB9LCAnc3RhdGUnOiAnU1RBUlQnfSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBjdXJyZW50Q29udm8gfSA9IHN0YXRlO1xuICAgIGxldCBuZXdDb252bztcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0hJU1RPUlk6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252byk7XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uY29udmVyc2F0aW9uLmhpc3RvcnksIGN1cnJlbnRDb252bzogYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8sICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX01FU1NBR0U6XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9TRVJWRVJfTUVTU0FHRTpcbiAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDb252byA9IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGF0ZSA9PT0gJ1NUQVJUJykge1xuICAgICAgICAgICAgICAgIC8vIGhhcmRjb2Rpbmcgc29tZSBsb2dpYyBoZXJlIGZvciBzeW5jaW5nIGhpc3Rvcnkgd2l0aCBzZXJ2ZXIgb24gU1RBUlRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGFsbG93cyBzb21lIGNvbW1hbmRzIHRvIG92ZXJ3cml0ZSBoaXN0b3J5IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgbGV0IHRoZUlkID0gYWN0aW9uLmhpc3RvcnkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLm5ld0NvbnZvLCB0aXRsZTogYWN0aW9uLmxhYmVsLCBpZDogdGhlSWQgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uaGlzdG9yeS5jb25jYXQoW25ld0NvbnZvXSksICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IG5ld0NvbnZvLmlkICsgMSwgJ2FyZ3MnOiB7fSB9LCBzdGF0ZTogJ1NUQVJUJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkhJREVfQ09OVkVSU0FUSU9OOlxuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IF8ubWFwKGhpc3RvcnksIGNvbnYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IHsuLi5jb252fTtcbiAgICAgICAgICAgICAgICBpZiAoY29udi5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5oaWRkZW4gPSAhb3V0LmhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4uY3VycmVudENvbnZvfTtcbiAgICAgICAgICAgIGlmIChuZXdDb252by5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8uaGlkZGVuID0gIW5ld0NvbnZvLmhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IG5ld0hpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBzdGF0ZS5zdGF0ZX07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgdmFyaWFibGVzID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfVkFSSUFCTEVTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi52YXJpYWJsZXM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgcHJlZGljdGlvbnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QUkVESUNUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucHJlZGljdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZG9jcyA9IChzdGF0ZSA9IHt0aXRsZTogJycsIGV4YW1wbGVzOiBbXSwgZGVzY3JpcHRpb246IFtdLCBzb3VyY2U6Jyd9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0RPQ1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRvYztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBmdW5jdGlvblNlYXJjaCA9IChzdGF0ZSA9IHtzZWFyY2g6ICcnLCByZXN1bHRzOiBbXX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9GVU5DOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2VhcmNoOiBhY3Rpb24uc2VhcmNofTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9SRVNVTFRTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVzdWx0czogYWN0aW9uLnJlc3VsdHN9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGN1cnJlbnRJbnB1dCA9IChzdGF0ZSA9IHsnaW5wdXQnOiAnJ30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNUT1JFX0NVUlJFTlRfSU5QVVQ6XG4gICAgICByZXR1cm4geydpbnB1dCc6IGFjdGlvbi5jdXJyZW50SW5wdXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IG1pbmltaXplU3RhdGUgPSAoc3RhdGU9eydkb2NzJzogdHJ1ZSwgJ2NvZGVfZWRpdCc6dHJ1ZX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNFVF9ET0NTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2RvY3MnOiBhY3Rpb24uZG9jc307XG4gICAgY2FzZSB0eXBlcy5TRVRfQ09ERV9FRElUOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2NvZGVfZWRpdCc6IGFjdGlvbi5jb2RlX2VkaXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUluZGV4ID0gKGFyciwgaSkgPT4ge1xuICBsZXQgZmlyc3RfaGFsZiA9IGFyci5jb25jYXQoW10pLnNsaWNlKDAsIGkpO1xuICBsZXQgc2Vjb25kX2hhbGYgPSBhcnIuY29uY2F0KFtdKS5zbGljZShpKzEsYXJyLmxlbmd0aCk7XG4gIHJldHVybiBmaXJzdF9oYWxmLmNvbmNhdChzZWNvbmRfaGFsZik7XG59XG5cbmNvbnN0IGJsYW5rQ29tbWFuZCA9IHtuYW1lOiAnJywgdGl0bGU6ICcnLCBhcmdzOiBbXSwgZXhhbXBsZXM6IFtdLCBjb21tYW5kOiAnJywgZXhwbGFuYXRpb246ICcnLCB0ZXN0SW5wdXQ6ICcnLCBwcmV2aWV3OicnLCBlcnJvcjogJyd9O1xuXG5jb25zdCBjb21tYW5kRWRpdFBhbmUgPSAoc3RhdGU9ey4uLmJsYW5rQ29tbWFuZH0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT0RFX0VESVRPUjpcbiAgICAgIGxldCBuZXdfc3RhdGUgPSB7fTtcbiAgICAgIG5ld19zdGF0ZVthY3Rpb24ubmFtZV0gPSBhY3Rpb24udmFsdWU7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5uZXdfc3RhdGV9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPTU1BTkQ6XG4gICAgICBjb25zb2xlLmxvZyh7Li4uc3RhdGUsIC4uLmFjdGlvbi5jb21tYW5kfSk7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24uY29tbWFuZH07XG4gICAgY2FzZSB0eXBlcy5BRERfQ09NTUFORF9BUkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiBzdGF0ZS5hcmdzLmNvbmNhdChbeydhcmdfbmFtZSc6ICcnLCAnYXJnX3R5cGUnOiAnJywgJ2FyZ19zdHJpbmcnOiAnJ31dKX07XG4gICAgY2FzZSB0eXBlcy5SRVNFVF9DT01NQU5EOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYmxhbmtDb21tYW5kfTtcbiAgICBjYXNlIHR5cGVzLkFERF9DT01NQU5EX0VYQU1QTEU6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBleGFtcGxlczogc3RhdGUuZXhhbXBsZXMuY29uY2F0KFsnJ10pfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EX0VYQU1QTEU6XG4gICAgICBsZXQgbmV3RXhhbXBsZXMgPSBzdGF0ZS5leGFtcGxlcy5jb25jYXQoW10pO1xuICAgICAgbmV3RXhhbXBsZXNbYWN0aW9uLmlkXSA9IGFjdGlvbi50ZXh0O1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IG5ld0V4YW1wbGVzfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EX0FSRzpcbiAgICAgIGxldCBuZXdBcmdzID0gc3RhdGUuYXJncy5jb25jYXQoW10pO1xuICAgICAgbmV3QXJnc1thY3Rpb24uaWRdID0gYWN0aW9uLnZhbHVlcztcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IG5ld0FyZ3N9O1xuICAgIGNhc2UgdHlwZXMuREVMRVRFX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogcmVtb3ZlSW5kZXgoc3RhdGUuYXJncywgYWN0aW9uLmlkKX07XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfQ09NTUFORF9FWEFNUExFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IHJlbW92ZUluZGV4KHN0YXRlLmV4YW1wbGVzLCBhY3Rpb24uaWQpfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBpbnB1dEhpc3RvcnkgPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJJZCc6IG51bGwsICdzaG93SGlzdG9yeSc6IGZhbHNlIH0sIGFjdGlvbikgPT4ge1xuICAgIGxldCBuZXdJZDtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZDtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCAmJiBuZXdJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdoaXN0b3J5JzogWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5tZXNzYWdlXSwgJ2N1cnJJZCc6IG5ld0lkfTtcbiAgICAgICAgY2FzZSB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZCB8fCAwO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPCAoc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnY3VycklkJzogbmV3SWQgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBjb21iaW5lIGFsbCB0aGVzZSByZWR1Y2VycyB0b2dldGhlclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvbnZlcnNhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICAgcHJlZGljdGlvbnMsXG4gICAgaW5wdXRIaXN0b3J5LFxuICAgIGN1cnJlbnRJbnB1dCxcbiAgICBkb2NzLFxuICAgIGZ1bmN0aW9uU2VhcmNoLFxuICAgIG1pbmltaXplU3RhdGUsXG4gICAgY29tbWFuZEVkaXRQYW5lLFxuICAgIHJvdXRpbmdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})