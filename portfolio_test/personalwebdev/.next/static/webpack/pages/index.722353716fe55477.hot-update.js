"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SkillSQL.tsx":
/*!*********************************!*\
  !*** ./components/SkillSQL.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction skill(param) {\n    let { directionLeft  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative flex cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                initial: {\n                    x: directionLeft ? -200 : 200,\n                    opacity: 0\n                },\n                transition: {\n                    duration: 1\n                },\n                whileInView: {\n                    opacity: 1,\n                    x: 0\n                },\n                src: \"https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo.png\",\n                className: \"rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/Builds/portfolio_next/portfolio_test/personalwebdev/components/SkillSQL.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-bold text-black opacity-100\",\n                        children: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/masonhoi/Desktop/Builds/portfolio_next/portfolio_test/personalwebdev/components/SkillSQL.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/masonhoi/Desktop/Builds/portfolio_next/portfolio_test/personalwebdev/components/SkillSQL.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/Builds/portfolio_next/portfolio_test/personalwebdev/components/SkillSQL.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/masonhoi/Desktop/Builds/portfolio_next/portfolio_test/personalwebdev/components/SkillSQL.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (skill);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxsU1FMLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ2I7QUFNMUIsU0FBU0UsTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLGNBQWEsRUFBUyxHQUF4QjtJQUNiLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0wscURBQVU7Z0JBQ1BPLFNBQVM7b0JBQ0xDLEdBQUdMLGdCQUFnQixDQUFDLE1BQU0sR0FBRztvQkFDN0JNLFNBQVM7Z0JBQ2I7Z0JBQ0pDLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUU7Z0JBQzFCQyxhQUFhO29CQUFFSCxTQUFTO29CQUFHRCxHQUFHO2dCQUFDO2dCQUMvQkssS0FBSTtnQkFFSlIsV0FBVTs7Ozs7OzBCQUVWLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNTO3dCQUFFVCxXQUFVO2tDQUE0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6RTtBQUVBLCtEQUFlSCxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxTUUwudHN4P2NlM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGRpcmVjdGlvbkxlZnQ/OiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gc2tpbGwoeyBkaXJlY3Rpb25MZWZ0IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBmbGV4IGN1cnNvci1wb2ludGVyXCI+IFxuICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICAgIHg6IGRpcmVjdGlvbkxlZnQgPyAtMjAwIDogMjAwLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMH19XG4gICAgICAgIHNyYz1cImh0dHBzOi8vdzcucG5nd2luZy5jb20vcG5ncy8yOC82MDEvcG5nLXRyYW5zcGFyZW50LXNxbC1sb2dvLWlsbHVzdHJhdGlvbi1taWNyb3NvZnQtYXp1cmUtc3FsLWRhdGFiYXNlLW1pY3Jvc29mdC1zcWwtc2VydmVyLWRhdGFiYXNlLWJsdWUtdGV4dC1sb2dvLnBuZ1wiXG4gICAgICAgIFxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBvYmplY3QtY292ZXIgdy0yNCBoLTI0IHhsOnctMzIgeGw6aC0zMiBmaWx0ZXIgZ3JvdXAtaG92ZXI6Z3JheXNjYWxlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBncm91cC1ob3ZlcjpiZy13aGl0ZSBoLTI0IHctMjQgbWQ6dy0yOCBtZDpoLTI4IHhsOnctMzIgeGw6aC0zMiByb3VuZGVkLWZ1bGwgei0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIG9wYWNpdHktMTAwXCI+MTAwJTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2tpbGwiXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJza2lsbCIsImRpcmVjdGlvbkxlZnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJpbml0aWFsIiwieCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ3aGlsZUluVmlldyIsInNyYyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SkillSQL.tsx\n"));

/***/ })

});