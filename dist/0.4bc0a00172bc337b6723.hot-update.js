webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHistory = exports.getVariables = exports.setHistory = exports.testFunction = exports.doSearch = exports.updateCommandAPI = exports.updateDocs = exports.updateHint = exports.postMessages = undefined;\n\nvar _isomorphicFetch = __webpack_require__(850);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _index = __webpack_require__(315);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// This is the primary interface through which the client interacts with the state machine\n// TODO: rename, remove dispatch directly on server JSON\nvar postMessages = exports.postMessages = function postMessages(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/new_loop', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        (0, _index2.default)(json); // what is this??\n        (0, _index2.default)((0, _index3.updateVariables)(json.variables));\n    }).then(function () {\n        (0, _index2.default)((0, _index3.updatePredictions)([]));\n    });\n};\n\n// This API supports hint updates given current user input text\nvar updateHint = exports.updateHint = function updateHint(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/hint', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)((0, _index3.updatePredictions)(json.predictions));\n    });\n};\n\n// This API supports documenation search given doc-input text\n// TODO: use action from actions/index\n// TODO: what is in json.doc?\nvar updateDocs = exports.updateDocs = function updateDocs(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/docs', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)({ 'type': 'UPDATE_DOCS', 'doc': json.doc });\n        // dispatch({'type': 'UPDATE_COMMAND', 'command': json.command});\n    });\n};\n\nvar updateCommandAPI = exports.updateCommandAPI = function updateCommandAPI(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/command', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"command\", json);\n        (0, _index2.default)({ 'type': 'UPDATE_COMMAND', 'command': json.command });\n    });\n};\n\nvar doSearch = exports.doSearch = function doSearch(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/function_list', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"UPDATE RESULTS\", json);\n        (0, _index2.default)({ 'type': 'UPDATE_RESULTS', 'results': json });\n    });\n};\n\nvar testFunction = exports.testFunction = function testFunction(text) {\n    console.log(text);\n    (0, _isomorphicFetch2.default)('http://localhost:8000/function_test', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(text)\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"UPDATE Test\", json);\n        (0, _index2.default)((0, _index3.updateCodeEditor)('preview', json.func_string));\n        (0, _index2.default)((0, _index3.updateCodeEditor)('error', json.error.error_string));\n        // dispatch({'type': 'UPDATE_RESULTS', 'results': json});\n    });\n};\n\nvar setHistory = exports.setHistory = function setHistory(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/set_history', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    });\n};\n\nvar getVariables = exports.getVariables = function getVariables() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/variables', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\nvar getHistory = exports.getHistory = function getHistory() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/history', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\n// export default { postMessages, getVariables };//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcz85ZjZlIl0sIm5hbWVzIjpbInBvc3RNZXNzYWdlcyIsIm1lc3NhZ2VzIiwic3RhdGUiLCJjb252ZXJzYXRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidmFyaWFibGVzIiwidXBkYXRlSGludCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicHJlZGljdGlvbnMiLCJ1cGRhdGVEb2NzIiwiZG9jIiwidXBkYXRlQ29tbWFuZEFQSSIsImNvbW1hbmQiLCJkb1NlYXJjaCIsInRlc3RGdW5jdGlvbiIsImZ1bmNfc3RyaW5nIiwiZXJyb3IiLCJlcnJvcl9zdHJpbmciLCJzZXRIaXN0b3J5IiwiZ2V0VmFyaWFibGVzIiwiZ2V0SGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDTyxJQUFNQSxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDM0QsbUNBQU0sZ0NBQU4sRUFBd0M7QUFDcENDLGdCQUFRLE1BRDRCO0FBRXBDQyxpQkFBUztBQUNMLDRCQUFnQjtBQURYLFNBRjJCO0FBS3BDQyxjQUFNQyxLQUFLQyxTQUFMLENBQWUsRUFBQ1Asa0JBQUQsRUFBV0MsWUFBWCxFQUFrQkMsMEJBQWxCLEVBQWY7QUFMOEIsS0FBeEMsRUFPQ00sSUFQRCxDQU9NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FQTixFQVFDRixJQVJELENBUU0sZ0JBQVE7QUFDViw2QkFBU0UsSUFBVCxFQURVLENBQ007QUFDaEIsNkJBQVMsNkJBQWdCQSxLQUFLQyxTQUFyQixDQUFUO0FBQ0gsS0FYRCxFQVlDSCxJQVpELENBWU0sWUFBTTtBQUNSLDZCQUFTLCtCQUFrQixFQUFsQixDQUFUO0FBQ0gs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cnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgZGlzcGF0Y2ggZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlQ29kZUVkaXRvciwgdXBkYXRlUHJlZGljdGlvbnMsIHVwZGF0ZVZhcmlhYmxlcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbi8vIFRoaXMgaXMgdGhlIHByaW1hcnkgaW50ZXJmYWNlIHRocm91Z2ggd2hpY2ggdGhlIGNsaWVudCBpbnRlcmFjdHMgd2l0aCB0aGUgc3RhdGUgbWFjaGluZVxuLy8gVE9ETzogcmVuYW1lLCByZW1vdmUgZGlzcGF0Y2ggZGlyZWN0bHkgb24gc2VydmVyIEpTT05cbmV4cG9ydCBjb25zdCBwb3N0TWVzc2FnZXMgPSAobWVzc2FnZXMsIHN0YXRlLCBjb252ZXJzYXRpb24pID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL25ld19sb29wJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZXMsIHN0YXRlLCBjb252ZXJzYXRpb259KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBkaXNwYXRjaChqc29uKTsgLy8gd2hhdCBpcyB0aGlzPz9cbiAgICAgICAgZGlzcGF0Y2godXBkYXRlVmFyaWFibGVzKGpzb24udmFyaWFibGVzKSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVByZWRpY3Rpb25zKFtdKSk7XG4gICAgfSk7XG59O1xuXG4vLyBUaGlzIEFQSSBzdXBwb3J0cyBoaW50IHVwZGF0ZXMgZ2l2ZW4gY3VycmVudCB1c2VyIGlucHV0IHRleHRcbmV4cG9ydCBjb25zdCB1cGRhdGVIaW50ID0gKHRleHQpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hpbnQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0fSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVByZWRpY3Rpb25zKGpzb24ucHJlZGljdGlvbnMpKTtcbiAgICB9KTtcbn07XG5cbi8vIFRoaXMgQVBJIHN1cHBvcnRzIGRvY3VtZW5hdGlvbiBzZWFyY2ggZ2l2ZW4gZG9jLWlucHV0IHRleHRcbi8vIFRPRE86IHVzZSBhY3Rpb24gZnJvbSBhY3Rpb25zL2luZGV4XG4vLyBUT0RPOiB3aGF0IGlzIGluIGpzb24uZG9jP1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURvY3MgPSAodGV4dCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZG9jcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHR9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9ET0NTJywgJ2RvYyc6IGpzb24uZG9jfSk7XG4gICAgICAgIC8vIGRpc3BhdGNoKHsndHlwZSc6ICdVUERBVEVfQ09NTUFORCcsICdjb21tYW5kJzoganNvbi5jb21tYW5kfSk7XG5cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb21tYW5kQVBJID0gKHRleHQpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NvbW1hbmQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0fSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21tYW5kXCIsIGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7J3R5cGUnOiAnVVBEQVRFX0NPTU1BTkQnLCAnY29tbWFuZCc6IGpzb24uY29tbWFuZH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRvU2VhcmNoID0gKHRleHQpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Z1bmN0aW9uX2xpc3QnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0fSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVUERBVEUgUkVTVUxUU1wiLCBqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9SRVNVTFRTJywgJ3Jlc3VsdHMnOiBqc29ufSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEZ1bmN0aW9uID0gKHRleHQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Z1bmN0aW9uX3Rlc3QnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRleHQpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVBEQVRFIFRlc3RcIiwganNvbik7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUNvZGVFZGl0b3IoJ3ByZXZpZXcnLCBqc29uLmZ1bmNfc3RyaW5nKSk7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUNvZGVFZGl0b3IoJ2Vycm9yJywganNvbi5lcnJvci5lcnJvcl9zdHJpbmcpKTtcbiAgICAgICAgLy8gZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9SRVNVTFRTJywgJ3Jlc3VsdHMnOiBqc29ufSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SGlzdG9yeSA9IChtZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbikgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc2V0X2hpc3RvcnknLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbn0pXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWFibGVzID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdmFyaWFibGVzJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKGpzb24pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeScsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChqc29uKSk7XG59O1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7IHBvc3RNZXNzYWdlcywgZ2V0VmFyaWFibGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})