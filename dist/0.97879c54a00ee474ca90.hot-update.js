webpackHotUpdate(0,{

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(433);\n\nvar _redux = __webpack_require__(296);\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// TODO: a bit confused why we need this function\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\n// given an action, push any new messages onto an existing set of messages\nvar appendMessages = function appendMessages(oldMessages, action) {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\n// given an action, update a conversation with new messages\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\n// reducer for conversations\n// TODO: This definition state is pretty long, messy\n// Also not clear what \"args\" represents in a conversation with multiple sub-convos\n// Maybe it is only important to represent the convo title, if so maybe that should be refactored\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        // this is a bit complex, maybe needs review for clarity\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            // this is super verbose just to update a specific convo index, better way?\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            // also wasteful to do a copy everytime, indendent of the index?\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\n// variables reducer, constrols variables in right sidebar\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\n// predictions reducer, governs hints above input box\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, state, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\n// combine all these reducers together\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJyZW1vdmVJbmRleCIsImFyciIsImkiLCJmaXJzdF9oYWxmIiwic2xpY2UiLCJzZWNvbmRfaGFsZiIsImJsYW5rQ29tbWFuZCIsIm5hbWUiLCJjb21tYW5kIiwiZXhwbGFuYXRpb24iLCJ0ZXN0SW5wdXQiLCJwcmV2aWV3IiwiZXJyb3IiLCJjb21tYW5kRWRpdFBhbmUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJuZXdfc3RhdGUiLCJVUERBVEVfQ09NTUFORCIsIkFERF9DT01NQU5EX0FSRyIsIlJFU0VUX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiVVBEQVRFX0NPTU1BTkRfRVhBTVBMRSIsIm5ld0V4YW1wbGVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwibmV3QXJncyIsInZhbHVlcyIsIkRFTEVURV9DT01NQU5EX0FSRyIsIkRFTEVURV9DT01NQU5EX0VYQU1QTEUiLCJpbnB1dEhpc3RvcnkiLCJuZXdJZCIsIkFERF9JTlBVVF9ISVNUT1JZIiwiY3VycklkIiwibWVzc2FnZSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsImRpcmVjdGlvbiIsInJvb3RSZWR1Y2VyIiwicm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsQzs7Ozs7O0FBRVo7QUFDQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLFVBQVVDLFNBQWQsRUFBeUI7QUFDckIsZUFBT0QsS0FBUDtBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsQ0FMRDs7QUFPQTtBQUNBLElBQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQzVDLFFBQU1DLGNBQWMsRUFBcEI7QUFDQSxRQUFJQyxhQUFhLENBQWpCO0FBQ0EsUUFBSUgsWUFBWUksTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CWCxFQUFFWSxHQUFGLENBQU1QLFdBQU4sRUFBbUIsVUFBU1EsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLEVBQUVDLEVBQVQ7QUFBYyxTQUEvQyxDQUFuQjtBQUNBTixxQkFBYVIsRUFBRWUsR0FB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cUIsSUFBekIsRUFBK0I7QUFDM0Isb0JBQUlMLFFBQVN6RSxNQUFNUyxPQUFOLENBQWNuQixNQUFkLEdBQXVCLENBQXBDLEVBQXdDO0FBQ3BDbUYsNkJBQVMsQ0FBVDtBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsb0JBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNaQSw2QkFBUyxDQUFUO0FBQ0g7QUFDSjtBQUNELGdDQUFXekUsS0FBWCxJQUFrQixVQUFVeUUsS0FBNUI7QUFDSjtBQUNJLG1CQUFPekUsS0FBUDtBQXZCUjtBQXlCSCxDQTNCRDs7QUE2QkE7QUFDQSxJQUFNK0UsY0FBYyw0QkFBZ0I7QUFDaEN2RSw4QkFEZ0M7QUFFaENnQix3QkFGZ0M7QUFHaENFLDRCQUhnQztBQUloQzhDLDhCQUpnQztBQUtoQ2pDLDhCQUxnQztBQU1oQ1gsY0FOZ0M7QUFPaENNLGtDQVBnQztBQVFoQ08sZ0NBUmdDO0FBU2hDaUIsb0NBVGdDO0FBVWhDc0I7QUFWZ0MsQ0FBaEIsQ0FBcEI7O2tCQWFlRCxXIiwiZmlsZSI6IjUxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gVE9ETzogYSBiaXQgY29uZnVzZWQgd2h5IHdlIG5lZWQgdGhpcyBmdW5jdGlvblxuY29uc3QgdmFsdWVPck51bGwgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuLy8gZ2l2ZW4gYW4gYWN0aW9uLCBwdXNoIGFueSBuZXcgbWVzc2FnZXMgb250byBhbiBleGlzdGluZyBzZXQgb2YgbWVzc2FnZXNcbmNvbnN0IGFwcGVuZE1lc3NhZ2VzID0gKG9sZE1lc3NhZ2VzLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFtdO1xuICAgIGxldCBjdXJyZW50TWF4ID0gMDtcbiAgICBpZiAob2xkTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwJywgXy5tYXAob2xkTWVzc2FnZXMsIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0uaWQ7IH0pKTtcbiAgICAgICAgY3VycmVudE1heCA9IF8ubWF4KF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbSBvZiBhY3Rpb24udGV4dCkge1xuICAgICAgICBjdXJyZW50TWF4Kys7XG4gICAgICAgIG5ld01lc3NhZ2VzLnB1c2goeydvcmlnaW4nOiBhY3Rpb24ub3JpZ2luLCAndGV4dCc6IG0sICdpZCc6IGN1cnJlbnRNYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IHZhbHVlT3JOdWxsKGFjdGlvbi5zdGF0ZSksICdhcmcnOiB2YWx1ZU9yTnVsbChhY3Rpb24uYXJnKX0pO1xuICAgIH1cbiAgICByZXR1cm4gb2xkTWVzc2FnZXMuY29uY2F0KG5ld01lc3NhZ2VzKTtcbn07XG5cbi8vIGdpdmVuIGFuIGFjdGlvbiwgdXBkYXRlIGEgY29udmVyc2F0aW9uIHdpdGggbmV3IG1lc3NhZ2VzXG5jb25zdCBhcHBlbmRNZXNzYWdlc0NvbnZvID0gKGNvbnZvLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBjb252bztcbiAgICByZXR1cm4geyAuLi5jb252bywgbWVzc2FnZXM6IGFwcGVuZE1lc3NhZ2VzKG1lc3NhZ2VzLCBhY3Rpb24pLCBhcmdzOiBhY3Rpb24uYXJnX21hcCB9O1xufTtcblxuLy8gcmVkdWNlciBmb3IgY29udmVyc2F0aW9uc1xuLy8gVE9ETzogVGhpcyBkZWZpbml0aW9uIHN0YXRlIGlzIHByZXR0eSBsb25nLCBtZXNzeVxuLy8gQWxzbyBub3QgY2xlYXIgd2hhdCBcImFyZ3NcIiByZXByZXNlbnRzIGluIGEgY29udmVyc2F0aW9uIHdpdGggbXVsdGlwbGUgc3ViLWNvbnZvc1xuLy8gTWF5YmUgaXQgaXMgb25seSBpbXBvcnRhbnQgdG8gcmVwcmVzZW50IHRoZSBjb252byB0aXRsZSwgaWYgc28gbWF5YmUgdGhhdCBzaG91bGQgYmUgcmVmYWN0b3JlZFxuY29uc3QgY29udmVyc2F0aW9uID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IDAsICdhcmdzJzoge30gfSwgJ3N0YXRlJzogJ1NUQVJUJ30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgY3VycmVudENvbnZvIH0gPSBzdGF0ZTtcbiAgICBsZXQgbmV3Q29udm87XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ISVNUT1JZOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmNvbnZlcnNhdGlvbi5oaXN0b3J5LCBjdXJyZW50Q29udm86IGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKSwgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBhIGJpdCBjb21wbGV4LCBtYXliZSBuZWVkcyByZXZpZXcgZm9yIGNsYXJpdHlcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfU0VSVkVSX01FU1NBR0U6XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q29udm8gPSBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhdGUgPT09ICdTVEFSVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBoYXJkY29kaW5nIHNvbWUgbG9naWMgaGVyZSBmb3Igc3luY2luZyBoaXN0b3J5IHdpdGggc2VydmVyIG9uIFNUQVJUXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBhbGxvd3Mgc29tZSBjb21tYW5kcyB0byBvdmVyd3JpdGUgaGlzdG9yeSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIGxldCB0aGVJZCA9IGFjdGlvbi5oaXN0b3J5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBuZXdDb252byA9IHsuLi5uZXdDb252bywgdGl0bGU6IGFjdGlvbi5sYWJlbCwgaWQ6IHRoZUlkIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmhpc3RvcnkuY29uY2F0KFtuZXdDb252b10pLCAnY3VycmVudENvbnZvJzogeyAnbWVzc2FnZXMnOiBbXSwgJ3RpdGxlJzogbnVsbCwgJ2hpZGRlbic6IGZhbHNlLCAnaWQnOiBuZXdDb252by5pZCArIDEsICdhcmdzJzoge30gfSwgc3RhdGU6ICdTVEFSVCcgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBhY3Rpb24uc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5ISURFX0NPTlZFUlNBVElPTjpcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgc3VwZXIgdmVyYm9zZSBqdXN0IHRvIHVwZGF0ZSBhIHNwZWNpZmljIGNvbnZvIGluZGV4LCBiZXR0ZXIgd2F5P1xuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IF8ubWFwKGhpc3RvcnksIGNvbnYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IHsuLi5jb252fTtcbiAgICAgICAgICAgICAgICBpZiAoY29udi5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5oaWRkZW4gPSAhb3V0LmhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gYWxzbyB3YXN0ZWZ1bCB0byBkbyBhIGNvcHkgZXZlcnl0aW1lLCBpbmRlbmRlbnQgb2YgdGhlIGluZGV4P1xuICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4uY3VycmVudENvbnZvfTtcbiAgICAgICAgICAgIGlmIChuZXdDb252by5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8uaGlkZGVuID0gIW5ld0NvbnZvLmhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IG5ld0hpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBzdGF0ZS5zdGF0ZX07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuLy8gdmFyaWFibGVzIHJlZHVjZXIsIGNvbnN0cm9scyB2YXJpYWJsZXMgaW4gcmlnaHQgc2lkZWJhclxuY29uc3QgdmFyaWFibGVzID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfVkFSSUFCTEVTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi52YXJpYWJsZXM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuLy8gcHJlZGljdGlvbnMgcmVkdWNlciwgZ292ZXJucyBoaW50cyBhYm92ZSBpbnB1dCBib3hcbmNvbnN0IHByZWRpY3Rpb25zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUFJFRElDVElPTlM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnByZWRpY3Rpb25zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGRvY3MgPSAoc3RhdGUgPSB7dGl0bGU6ICcnLCBleGFtcGxlczogW10sIGRlc2NyaXB0aW9uOiBbXSwgc291cmNlOicnfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ET0NTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kb2M7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZnVuY3Rpb25TZWFyY2ggPSAoc3RhdGUgPSB7c2VhcmNoOiAnJywgcmVzdWx0czogW119LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfRlVOQzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlYXJjaDogYWN0aW9uLnNlYXJjaH07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfUkVTVUxUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlc3VsdHM6IGFjdGlvbi5yZXN1bHRzfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBjdXJyZW50SW5wdXQgPSAoc3RhdGUgPSB7J2lucHV0JzogJyd9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVUOlxuICAgICAgcmV0dXJuIHsnaW5wdXQnOiBhY3Rpb24uY3VycmVudElucHV0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBtaW5pbWl6ZVN0YXRlID0gKHN0YXRlPXsnZG9jcyc6IHRydWUsICdjb2RlX2VkaXQnOnRydWV9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TRVRfRE9DUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdkb2NzJzogYWN0aW9uLmRvY3N9O1xuICAgIGNhc2UgdHlwZXMuU0VUX0NPREVfRURJVDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjb2RlX2VkaXQnOiBhY3Rpb24uY29kZV9lZGl0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVJbmRleCA9IChhcnIsIGkpID0+IHtcbiAgbGV0IGZpcnN0X2hhbGYgPSBhcnIuY29uY2F0KFtdKS5zbGljZSgwLCBpKTtcbiAgbGV0IHNlY29uZF9oYWxmID0gYXJyLmNvbmNhdChbXSkuc2xpY2UoaSsxLGFyci5sZW5ndGgpO1xuICByZXR1cm4gZmlyc3RfaGFsZi5jb25jYXQoc2Vjb25kX2hhbGYpO1xufVxuXG5jb25zdCBibGFua0NvbW1hbmQgPSB7bmFtZTogJycsIHRpdGxlOiAnJywgYXJnczogW10sIGV4YW1wbGVzOiBbXSwgY29tbWFuZDogJycsIGV4cGxhbmF0aW9uOiAnJywgdGVzdElucHV0OiAnJywgcHJldmlldzonJywgZXJyb3I6ICcnfTtcblxuY29uc3QgY29tbWFuZEVkaXRQYW5lID0gKHN0YXRlPXsuLi5ibGFua0NvbW1hbmR9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09ERV9FRElUT1I6XG4gICAgICBsZXQgbmV3X3N0YXRlID0ge307XG4gICAgICBuZXdfc3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4ubmV3X3N0YXRlfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EOlxuICAgICAgY29uc29sZS5sb2coey4uLnN0YXRlLCAuLi5hY3Rpb24uY29tbWFuZH0pO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLmNvbW1hbmR9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogc3RhdGUuYXJncy5jb25jYXQoW3snYXJnX25hbWUnOiAnJywgJ2FyZ190eXBlJzogJycsICdhcmdfc3RyaW5nJzogJyd9XSl9O1xuICAgIGNhc2UgdHlwZXMuUkVTRVRfQ09NTUFORDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmJsYW5rQ29tbWFuZH07XG4gICAgY2FzZSB0eXBlcy5BRERfQ09NTUFORF9FWEFNUExFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IHN0YXRlLmV4YW1wbGVzLmNvbmNhdChbJyddKX07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORF9FWEFNUExFOlxuICAgICAgbGV0IG5ld0V4YW1wbGVzID0gc3RhdGUuZXhhbXBsZXMuY29uY2F0KFtdKTtcbiAgICAgIG5ld0V4YW1wbGVzW2FjdGlvbi5pZF0gPSBhY3Rpb24udGV4dDtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiBuZXdFeGFtcGxlc307XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORF9BUkc6XG4gICAgICBsZXQgbmV3QXJncyA9IHN0YXRlLmFyZ3MuY29uY2F0KFtdKTtcbiAgICAgIG5ld0FyZ3NbYWN0aW9uLmlkXSA9IGFjdGlvbi52YWx1ZXM7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiBuZXdBcmdzfTtcbiAgICBjYXNlIHR5cGVzLkRFTEVURV9DT01NQU5EX0FSRzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IHJlbW92ZUluZGV4KHN0YXRlLmFyZ3MsIGFjdGlvbi5pZCl9O1xuICAgIGNhc2UgdHlwZXMuREVMRVRFX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiByZW1vdmVJbmRleChzdGF0ZS5leGFtcGxlcywgYWN0aW9uLmlkKX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgaW5wdXRIaXN0b3J5ID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJySWQnOiBudWxsLCAnc2hvd0hpc3RvcnknOiBmYWxzZSB9LCBhY3Rpb24pID0+IHtcbiAgICBsZXQgbmV3SWQ7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9JTlBVVF9ISVNUT1JZOlxuICAgICAgICAgICAgbmV3SWQgPSBzdGF0ZS5jdXJySWQ7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDAgJiYgbmV3SWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnaGlzdG9yeSc6IFsuLi5zdGF0ZS5oaXN0b3J5LCBhY3Rpb24ubWVzc2FnZV0sICdjdXJySWQnOiBuZXdJZH07XG4gICAgICAgIGNhc2UgdHlwZXMuTU9WRV9JTlBVVF9ISVNUT1JZOlxuICAgICAgICAgICAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SWQgPSBzdGF0ZS5jdXJySWQgfHwgMDtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkIDwgKHN0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChuZXdJZCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lkIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2N1cnJJZCc6IG5ld0lkIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuLy8gY29tYmluZSBhbGwgdGhlc2UgcmVkdWNlcnMgdG9nZXRoZXJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb252ZXJzYXRpb24sXG4gICAgdmFyaWFibGVzLFxuICAgIHByZWRpY3Rpb25zLFxuICAgIGlucHV0SGlzdG9yeSxcbiAgICBjdXJyZW50SW5wdXQsXG4gICAgZG9jcyxcbiAgICBmdW5jdGlvblNlYXJjaCxcbiAgICBtaW5pbWl6ZVN0YXRlLFxuICAgIGNvbW1hbmRFZGl0UGFuZSxcbiAgICByb3V0aW5nXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmVkdWNlcnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})