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

/***/ "./components/uikit/UiTextField.jsx":
/*!******************************************!*\
  !*** ./components/uikit/UiTextField.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiTextField: function() { return /* binding */ UiTextField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fields_UiFieldInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/UiFieldInput */ \"./components/uikit/fields/UiFieldInput.jsx\");\n/* harmony import */ var _fields_UiFieldLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/UiFieldLabel */ \"./components/uikit/fields/UiFieldLabel.jsx\");\n\n\n\nfunction UiTextField(param) {\n    let { label, required, helperText, errorText, className, inputProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fields_UiFieldLabel__WEBPACK_IMPORTED_MODULE_2__.UiFieldLabel, {\n                label: label,\n                required: required\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\components\\\\uikit\\\\UiTextField.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fields_UiFieldInput__WEBPACK_IMPORTED_MODULE_1__.UiFieldInput, {\n                required: required,\n                errorText: errorText,\n                ...inputProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\components\\\\uikit\\\\UiTextField.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP OMEN\\\\react\\\\tic-tak-toe\\\\components\\\\uikit\\\\UiTextField.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = UiTextField;\nvar _c;\n$RefreshReg$(_c, \"UiTextField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L1VpVGV4dEZpZWxkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUQ7QUFDQTtBQUU5QyxTQUFTRSxZQUFZLEtBQWlFO1FBQWpFLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBakU7SUFDeEIscUJBQ0ksOERBQUNDO1FBQUlGLFdBQVdBOzswQkFDWiw4REFBQ04sOERBQVlBO2dCQUFDRSxPQUFPQTtnQkFBT0MsVUFBVUE7Ozs7OzswQkFDdEMsOERBQUNKLDhEQUFZQTtnQkFBQ0ksVUFBVUE7Z0JBQVVFLFdBQVdBO2dCQUFZLEdBQUdFLFVBQVU7Ozs7Ozs7Ozs7OztBQUdsRjtLQVBnQk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aWtpdC9VaVRleHRGaWVsZC5qc3g/YmVmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVaUZpZWxkSW5wdXQgfSBmcm9tIFwiLi9maWVsZHMvVWlGaWVsZElucHV0XCI7XHJcbmltcG9ydCB7IFVpRmllbGRMYWJlbCB9IGZyb20gXCIuL2ZpZWxkcy9VaUZpZWxkTGFiZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVaVRleHRGaWVsZCh7IGxhYmVsLCByZXF1aXJlZCwgaGVscGVyVGV4dCwgZXJyb3JUZXh0LCBjbGFzc05hbWUsIGlucHV0UHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPFVpRmllbGRMYWJlbCBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gLz5cclxuICAgICAgICAgICAgPFVpRmllbGRJbnB1dCByZXF1aXJlZD17cmVxdWlyZWR9IGVycm9yVGV4dD17ZXJyb3JUZXh0fSB7Li4uaW5wdXRQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiVWlGaWVsZElucHV0IiwiVWlGaWVsZExhYmVsIiwiVWlUZXh0RmllbGQiLCJsYWJlbCIsInJlcXVpcmVkIiwiaGVscGVyVGV4dCIsImVycm9yVGV4dCIsImNsYXNzTmFtZSIsImlucHV0UHJvcHMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/uikit/UiTextField.jsx\n"));

/***/ })

});