"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/magix/chat/page",{

/***/ "(app-pages-browser)/./src/app/(dashboard)/magix/chat/page.jsx":
/*!*************************************************!*\
  !*** ./src/app/(dashboard)/magix/chat/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bottombar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"border border-solid border-gray-300\",\n                    type: \"text\",\n                    onChange: (e)=>{\n                        setText(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\manor\\\\Desktop\\\\ek\\\\fe\\\\src\\\\app\\\\(dashboard)\\\\magix\\\\chat\\\\page.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"icon\",\n                        children: \"send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\manor\\\\Desktop\\\\ek\\\\fe\\\\src\\\\app\\\\(dashboard)\\\\magix\\\\chat\\\\page.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\manor\\\\Desktop\\\\ek\\\\fe\\\\src\\\\app\\\\(dashboard)\\\\magix\\\\chat\\\\page.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\manor\\\\Desktop\\\\ek\\\\fe\\\\src\\\\app\\\\(dashboard)\\\\magix\\\\chat\\\\page.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\manor\\\\Desktop\\\\ek\\\\fe\\\\src\\\\app\\\\(dashboard)\\\\magix\\\\chat\\\\page.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGRhc2hib2FyZCkvbWFnaXgvY2hhdC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFFeEMsTUFBTUUsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMscUJBQ0UsOERBQUNJO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0RELFdBQVU7b0JBQ1JFLE1BQUs7b0JBQ0xDLFVBQVUsQ0FBQ0M7d0JBQ1ROLFFBQVFNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQkFDeEI7Ozs7Ozs4QkFFRiw4REFBQ0M7OEJBQ0MsNEVBQUNSO3dCQUFJQyxXQUFVO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDO0dBbEJNSjtBQW9CTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhkYXNoYm9hcmQpL21hZ2l4L2NoYXQvcGFnZS5qc3g/NmMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbWJhclwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+c2VuZDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJ0ZXh0Iiwic2V0VGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(dashboard)/magix/chat/page.jsx\n"));

/***/ })

});