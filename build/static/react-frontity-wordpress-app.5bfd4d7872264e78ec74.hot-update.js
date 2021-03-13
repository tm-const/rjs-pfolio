webpackHotUpdate("react-frontity-wordpress-app",{

/***/ "./packages/mq-theme/src/components/Post.js":
/*!**************************************************!*\
  !*** ./packages/mq-theme/src/components/Post.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./packages/mq-theme/src/components/Link.js\");\n/* harmony import */ var _Featured__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Featured */ \"./packages/mq-theme/src/components/Featured.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Post=({state,element,imgID})=>{const data=state.source.get(state.router.link);const movies=state.source[data.type][data.id];if(element==='movie'){const movieC=movie.categories[0];const movieCategories=state.source.category[movieC];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{href:\"/movies\",exact:true,children:\"Back\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_Featured__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{imgID:movies.featured_media,element:\"movies\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"h2\",{dangerouslySetInnerHTML:{__html:movies.title.rendered}}),\"movieCategories\",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:movies.content.rendered}})]});}else{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",{children:\"Im' not a movie\"});}};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvY29tcG9uZW50cy9Qb3N0LmpzPzBkY2QiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiZWxlbWVudCIsImltZ0lEIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJtb3ZpZXMiLCJ0eXBlIiwiaWQiLCJtb3ZpZUMiLCJtb3ZpZSIsImNhdGVnb3JpZXMiLCJtb3ZpZUNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImZlYXR1cmVkX21lZGlhIiwiX19odG1sIiwidGl0bGUiLCJyZW5kZXJlZCIsImNvbnRlbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsS0FBTUEsS0FBSSxDQUFHLENBQUUsQ0FBQ0MsS0FBRCxDQUFRQyxPQUFSLENBQWlCQyxLQUFqQixDQUFGLEdBQStCLENBQ3hDLEtBQU1DLEtBQUksQ0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsT0FBTSxDQUFHUixLQUFLLENBQUNJLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFmLENBRUEsR0FBR1QsT0FBTyxHQUFLLE9BQWYsQ0FBd0IsQ0FFcEIsS0FBTVUsT0FBTSxDQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsQ0FBakIsQ0FBZixDQUNBLEtBQU1DLGdCQUFlLENBQUdkLEtBQUssQ0FBQ0ksTUFBTixDQUFhVyxRQUFiLENBQXNCSixNQUF0QixDQUF4QixDQUVBLE1BQ0ksd0pBQ0ksdUVBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUMsU0FBWCxDQUFxQixLQUFLLEtBQTFCLGtCQURKLENBR0ksdUVBQUMsaURBQUQsRUFDSSxLQUFLLENBQUVILE1BQU0sQ0FBQ1EsY0FEbEIsQ0FFSSxPQUFPLENBQUMsUUFGWixFQUhKLENBUUksNkVBQUksdUJBQXVCLENBQUUsQ0FBQ0MsTUFBTSxDQUFFVCxNQUFNLENBQUNVLEtBQVAsQ0FBYUMsUUFBdEIsQ0FBN0IsRUFSSixtQkFXSSw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFDRixNQUFNLENBQUVULE1BQU0sQ0FBQ1ksT0FBUCxDQUFlRCxRQUF4QixDQUE5QixFQVhKLEdBREosQ0FlSCxDQXBCRCxJQW9CTyxDQUNILE1BQ0kseUdBREosQ0FHSCxDQUNKLENBN0JELENBK0JlRSx1SEFBTyxDQUFDdEIsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21xLXRoZW1lL3NyYy9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgRmVhdHVyZWQgZnJvbSBcIi4vRmVhdHVyZWRcIlxuXG5cbmNvbnN0IFBvc3QgPSAoIHtzdGF0ZSwgZWxlbWVudCwgaW1nSUR9ICkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgICBjb25zdCBtb3ZpZXMgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcblxuICAgIGlmKGVsZW1lbnQgPT09ICdtb3ZpZScpIHtcblxuICAgICAgICBjb25zdCBtb3ZpZUMgPSBtb3ZpZS5jYXRlZ29yaWVzWzBdO1xuICAgICAgICBjb25zdCBtb3ZpZUNhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbbW92aWVDXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllc1wiIGV4YWN0PkJhY2s8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZWQgXG4gICAgICAgICAgICAgICAgICAgIGltZ0lEPXttb3ZpZXMuZmVhdHVyZWRfbWVkaWF9IFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50PVwibW92aWVzXCJcbiAgICAgICAgICAgICAgICA+PC9GZWF0dXJlZD5cblxuICAgICAgICAgICAgICAgIDxoMiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbW92aWVzLnRpdGxlLnJlbmRlcmVkfX0+PC9oMj5cbiAgICAgICAgICAgICAgICBtb3ZpZUNhdGVnb3JpZXNcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtb3ZpZXMuY29udGVudC5yZW5kZXJlZH19PjwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHA+SW0nIG5vdCBhIG1vdmllPC9wPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mq-theme/src/components/Post.js\n");

/***/ })

})