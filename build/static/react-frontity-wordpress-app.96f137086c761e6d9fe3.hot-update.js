webpackHotUpdate("react-frontity-wordpress-app",{

/***/ "./packages/mq-theme/src/components/Toggle.js":
/*!****************************************************!*\
  !*** ./packages/mq-theme/src/components/Toggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sun.svg */ \"./packages/mq-theme/src/assets/sun.svg\");\n/* harmony import */ var _assets_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/night.svg */ \"./packages/mq-theme/src/assets/night.svg\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Toggle=({state,actions})=>{const{isDarkModeOn}=state.theme;const{setDarkModeOn}=actions.theme;const{setDarkModeOff}=actions.theme;if(isDarkModeOn===true){return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(ButtonStyled,{onClick:setDarkModeOff,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"img\",{src:_assets_sun_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}),\"Light\"]});}else{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(ButtonStyled,{onClick:setDarkModeOn,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"img\",{src:_assets_night_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}),\"Dark\"]});}};const ButtonStyled=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"button\", false?undefined:{target:\"eja5axu0\",label:\"ButtonStyled\"})( false?undefined:{name:\"ilx7qc\",styles:\"background-color:transparent;border:none;outline:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;& img{width:25px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5ueS9EZXNrdG9wL3JlYWN0LWZyb250aXR5LXdvcmRwcmVzcy1hcHAvcGFja2FnZXMvbXEtdGhlbWUvc3JjL2NvbXBvbmVudHMvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0MiLCJmaWxlIjoiL1VzZXJzL21hbm55L0Rlc2t0b3AvcmVhY3QtZnJvbnRpdHktd29yZHByZXNzLWFwcC9wYWNrYWdlcy9tcS10aGVtZS9zcmMvY29tcG9uZW50cy9Ub2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3QsIHN0eWxlZCwgY3NzfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTdW4gZnJvbSBcIi4uL2Fzc2V0cy9zdW4uc3ZnXCJcbmltcG9ydCBNb29uIGZyb20gXCIuLi9hc3NldHMvbmlnaHQuc3ZnXCJcblxuY29uc3QgVG9nZ2xlID0gKHtzdGF0ZSwgYWN0aW9uc30pID0+IHtcbiAgICBjb25zdCB7aXNEYXJrTW9kZU9ufSA9IHN0YXRlLnRoZW1lO1xuICAgIGNvbnN0IHtzZXREYXJrTW9kZU9ufSA9IGFjdGlvbnMudGhlbWU7XG4gICAgY29uc3Qge3NldERhcmtNb2RlT2ZmfSA9IGFjdGlvbnMudGhlbWU7XG5cbiAgICBpZiAoaXNEYXJrTW9kZU9uID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiA8QnV0dG9uU3R5bGVkIG9uQ2xpY2s9e3NldERhcmtNb2RlT2ZmfT48aW1nIHNyYz17U3VufSAvPkxpZ2h0PC9CdXR0b25TdHlsZWQ+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxCdXR0b25TdHlsZWQgb25DbGljaz17c2V0RGFya01vZGVPbn0+PGltZyBzcmM9e01vb259IC8+RGFyazwvQnV0dG9uU3R5bGVkPlxuICAgIH1cbn1cblxuY29uc3QgQnV0dG9uU3R5bGVkID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBjb2xvcjojZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5cbiAgICAmIGltZyB7XG4gICAgICAgIHdpZHRoOjI1cHg7XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUb2dnbGUpIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Toggle));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvY29tcG9uZW50cy9Ub2dnbGUuanM/ZmJlOCJdLCJuYW1lcyI6WyJUb2dnbGUiLCJzdGF0ZSIsImFjdGlvbnMiLCJpc0RhcmtNb2RlT24iLCJ0aGVtZSIsInNldERhcmtNb2RlT24iLCJzZXREYXJrTW9kZU9mZiIsIlN1biIsIk1vb24iLCJCdXR0b25TdHlsZWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFLQSxLQUFNQSxPQUFNLENBQUcsQ0FBQyxDQUFDQyxLQUFELENBQVFDLE9BQVIsQ0FBRCxHQUFzQixDQUNqQyxLQUFNLENBQUNDLFlBQUQsRUFBaUJGLEtBQUssQ0FBQ0csS0FBN0IsQ0FDQSxLQUFNLENBQUNDLGFBQUQsRUFBa0JILE9BQU8sQ0FBQ0UsS0FBaEMsQ0FDQSxLQUFNLENBQUNFLGNBQUQsRUFBbUJKLE9BQU8sQ0FBQ0UsS0FBakMsQ0FFQSxHQUFJRCxZQUFZLEdBQUssSUFBckIsQ0FBMkIsQ0FDdkIsTUFBTyx5RUFBQyxZQUFELEVBQWMsT0FBTyxDQUFFRyxjQUF2QixXQUF1Qyw4RUFBSyxHQUFHLENBQUVDLHVEQUFWLEVBQXZDLFdBQVAsQ0FDSCxDQUZELElBRU8sQ0FDSCxNQUFPLHlFQUFDLFlBQUQsRUFBYyxPQUFPLENBQUVGLGFBQXZCLFdBQXNDLDhFQUFLLEdBQUcsQ0FBRUcseURBQVYsRUFBdEMsVUFBUCxDQUNILENBQ0osQ0FWRCxDQVlBLEtBQU1DLGFBQVksdS9EQUFsQixDQWlCZUMsdUhBQU8sQ0FBQ1YsTUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21xLXRoZW1lL3NyYy9jb21wb25lbnRzL1RvZ2dsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdCwgc3R5bGVkLCBjc3N9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFN1biBmcm9tIFwiLi4vYXNzZXRzL3N1bi5zdmdcIlxuaW1wb3J0IE1vb24gZnJvbSBcIi4uL2Fzc2V0cy9uaWdodC5zdmdcIlxuXG5jb25zdCBUb2dnbGUgPSAoe3N0YXRlLCBhY3Rpb25zfSkgPT4ge1xuICAgIGNvbnN0IHtpc0RhcmtNb2RlT259ID0gc3RhdGUudGhlbWU7XG4gICAgY29uc3Qge3NldERhcmtNb2RlT259ID0gYWN0aW9ucy50aGVtZTtcbiAgICBjb25zdCB7c2V0RGFya01vZGVPZmZ9ID0gYWN0aW9ucy50aGVtZTtcblxuICAgIGlmIChpc0RhcmtNb2RlT24gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDxCdXR0b25TdHlsZWQgb25DbGljaz17c2V0RGFya01vZGVPZmZ9PjxpbWcgc3JjPXtTdW59IC8+TGlnaHQ8L0J1dHRvblN0eWxlZD5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPEJ1dHRvblN0eWxlZCBvbkNsaWNrPXtzZXREYXJrTW9kZU9ufT48aW1nIHNyYz17TW9vbn0gLz5EYXJrPC9CdXR0b25TdHlsZWQ+XG4gICAgfVxufVxuXG5jb25zdCBCdXR0b25TdHlsZWQgPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcblxuICAgICYgaW1nIHtcbiAgICAgICAgd2lkdGg6MjVweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRvZ2dsZSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mq-theme/src/components/Toggle.js\n");

/***/ })

})