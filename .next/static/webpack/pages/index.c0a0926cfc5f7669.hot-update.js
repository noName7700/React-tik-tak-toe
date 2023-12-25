/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/uikit/UiTextField.jsx":
/*!******************************************!*\
  !*** ./components/uikit/UiTextField.jsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_game_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game-new */ \"./components/game-new/index.js\");\n/* harmony import */ var _components_uikit_UiTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/uikit/UiTextField */ \"./components/uikit/UiTextField.jsx\");\n/* harmony import */ var _components_uikit_UiTextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_uikit_UiTextField__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomePageLayout, {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 7,\n            columnNumber: 33\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_UiTextField__WEBPACK_IMPORTED_MODULE_3__.UiTextField, {\n            label: \"Label\",\n            placeholder: \"Placeholder\",\n            required: true,\n            helperText: \"Helper text\",\n            errorText: \"Error text\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let { header, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-state-50 min-h-screen\",\n        children: [\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFDQTtBQUNnQjtBQUUvQyxTQUFTRztJQUNwQixxQkFDSSw4REFBQ0M7UUFBZUMsc0JBQVEsOERBQUNMLHNEQUFNQTs7Ozs7a0JBQzNCLDRFQUFDRSxzRUFBV0E7WUFBQ0ksT0FBTztZQUFTQyxhQUFhO1lBQWVDLFFBQVE7WUFBQ0MsWUFBWTtZQUFlQyxXQUFXOzs7Ozs7Ozs7OztBQUdwSDtLQU53QlA7QUFReEIsU0FBU0MsZUFBZSxLQUFtQjtRQUFuQixFQUFFQyxNQUFNLEVBQUVNLFFBQVEsRUFBQyxHQUFuQjtJQUNwQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDVlI7MEJBQ0QsOERBQUNTO2dCQUFLRCxXQUFVOzBCQUFzQkY7Ozs7Ozs7Ozs7OztBQUdsRDtNQVBTUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUtbmV3XCI7XHJcbmltcG9ydCB7IFVpVGV4dEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlraXQvVWlUZXh0RmllbGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SG9tZVBhZ2VMYXlvdXQgaGVhZGVyPXs8SGVhZGVyIC8+fT5cclxuICAgICAgICAgICAgPFVpVGV4dEZpZWxkIGxhYmVsPXtcIkxhYmVsXCJ9IHBsYWNlaG9sZGVyPXtcIlBsYWNlaG9sZGVyXCJ9IHJlcXVpcmVkIGhlbHBlclRleHQ9e1wiSGVscGVyIHRleHRcIn0gZXJyb3JUZXh0PXtcIkVycm9yIHRleHRcIn0gLz5cclxuICAgICAgICA8L0hvbWVQYWdlTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2VMYXlvdXQoeyBoZWFkZXIsIGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0YXRlLTUwIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJwdC02IG14LWF1dG8gdy1tYXhcIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJHYW1lIiwiVWlUZXh0RmllbGQiLCJIb21lUGFnZSIsIkhvbWVQYWdlTGF5b3V0IiwiaGVhZGVyIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiaGVscGVyVGV4dCIsImVycm9yVGV4dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});