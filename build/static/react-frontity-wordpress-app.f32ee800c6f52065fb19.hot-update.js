webpackHotUpdate("react-frontity-wordpress-app",{

/***/ "./packages/mq-theme/src/Pages/Movies.js":
/*!***********************************************!*\
  !*** ./packages/mq-theme/src/Pages/Movies.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ \"./node_modules/core-js/modules/es.array.reverse.js\");\n/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./packages/mq-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./packages/mq-theme/src/components/Featured.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search */ \"./packages/mq-theme/src/components/Search.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Movies=({state,actions})=>{const data=state.source.get(state.router.link);console.log(state.source);// Set Movie objects into an array to iterate through\n// This will allow you to set the values into an Array\nconst allMovies=Object.values(state.source.movies);const filterMovies=allMovies.filter(movie=>movie.title.rendered.toLowerCase().includes(state.theme.searchInputValue.toLowerCase()));return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:\"Video\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\",{children:\"There ios somethio9ng here that will show for the mioviue.\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"There are (\",data.items.length,\")\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"pre\",{children:[\"Contador: \",state.theme.counter]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\",{onClick:actions.theme.setPlusCounter,children:\"Add 1\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),!filterMovies.length>0&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"No results found matching: \",state.theme.searchInputValue]}),filterMovies.reverse().map(movie=>{const movieCatID=movie.categories[0];const movieCategory=state.source.category[movieCatID];console.log(movieCategory);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:movie.link,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:movie.title.rendered},movie.id)})});}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h3\",{children:\"Static Old Data below\"}),data.items.map(({id})=>{const movies=state.source.movies[id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:movies.link,exact:true,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{imgID:movies.featured_media,element:\"movies\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{dangerouslySetInnerHTML:{__html:\"Post title: \"+movies.title.rendered}})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"span\",{dangerouslySetInnerHTML:{__html:movies.excerpt.rendered}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"Company: \",movies.acf.company||\"None\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"Crypto EXchanges: \",movies.acf.crypto]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{})]},id);})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Movies));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvUGFnZXMvTW92aWVzLmpzP2NkZWEiXSwibmFtZXMiOlsiTW92aWVzIiwic3RhdGUiLCJhY3Rpb25zIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjb25zb2xlIiwibG9nIiwiYWxsTW92aWVzIiwiT2JqZWN0IiwidmFsdWVzIiwibW92aWVzIiwiZmlsdGVyTW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInJlbmRlcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRoZW1lIiwic2VhcmNoSW5wdXRWYWx1ZSIsIml0ZW1zIiwibGVuZ3RoIiwiY291bnRlciIsInNldFBsdXNDb3VudGVyIiwicmV2ZXJzZSIsIm1hcCIsIm1vdmllQ2F0SUQiLCJjYXRlZ29yaWVzIiwibW92aWVDYXRlZ29yeSIsImNhdGVnb3J5IiwiaWQiLCJmZWF0dXJlZF9tZWRpYSIsIl9faHRtbCIsImV4Y2VycHQiLCJhY2YiLCJjb21wYW55IiwiY3J5cHRvIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU1BLE9BQU0sQ0FBRyxDQUFDLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFELEdBQXNCLENBRWpDLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFLLENBQUNHLE1BQWxCLEVBQ0E7QUFDQTtBQUNBLEtBQU1NLFVBQVMsQ0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNYLEtBQUssQ0FBQ0csTUFBTixDQUFhUyxNQUEzQixDQUFsQixDQUNBLEtBQU1DLGFBQVksQ0FBR0osU0FBUyxDQUFDSyxNQUFWLENBQWtCQyxLQUFELEVBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFaLENBQXFCQyxXQUFyQixHQUFtQ0MsUUFBbkMsQ0FBNENuQixLQUFLLENBQUNvQixLQUFOLENBQVlDLGdCQUFaLENBQTZCSCxXQUE3QixFQUE1QyxDQUE1QixDQUFyQixDQUVBLE1BQ0Usd0pBQ0UsK0ZBREYsQ0FFRSxtSkFGRixDQUdFLHFHQUFlaEIsSUFBSSxDQUFDb0IsS0FBTCxDQUFXQyxNQUExQixPQUhGLENBS0Usc0dBQWdCdkIsS0FBSyxDQUFDb0IsS0FBTixDQUFZSSxPQUE1QixHQUxGLENBTUUsaUZBQVEsT0FBTyxDQUFFdkIsT0FBTyxDQUFDbUIsS0FBUixDQUFjSyxjQUEvQixtQkFORixDQVFFLCtFQVJGLENBVUUsdUVBQUMsMERBQUQsSUFWRixDQVlFLCtFQVpGLENBY0ksQ0FBQ1osWUFBWSxDQUFDVSxNQUFkLENBQXVCLENBQXZCLEVBQTRCLHFIQUErQnZCLEtBQUssQ0FBQ29CLEtBQU4sQ0FBWUMsZ0JBQTNDLEdBZGhDLENBZUlSLFlBQVksQ0FBQ2EsT0FBYixHQUF1QkMsR0FBdkIsQ0FBNkJaLEtBQUQsRUFBVyxDQUV2QyxLQUFNYSxXQUFVLENBQUdiLEtBQUssQ0FBQ2MsVUFBTixDQUFpQixDQUFqQixDQUFuQixDQUNBLEtBQU1DLGNBQWEsQ0FBRzlCLEtBQUssQ0FBQ0csTUFBTixDQUFhNEIsUUFBYixDQUFzQkgsVUFBdEIsQ0FBdEIsQ0FDQXJCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0IsYUFBWixFQUNBLE1BQ0Usc0pBQ0UsdUVBQUMsd0RBQUQsRUFBTSxJQUFJLENBQUVmLEtBQUssQ0FBQ1QsSUFBbEIsVUFDSSxzRkFBb0JTLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFoQyxFQUFTRixLQUFLLENBQUNpQixFQUFmLENBREosRUFERixFQURGLENBUUQsQ0FiQyxDQWZKLENBOEJFLCtFQTlCRixDQWdDRSwrR0FoQ0YsQ0FtQ0k5QixJQUFJLENBQUNvQixLQUFMLENBQVdLLEdBQVgsQ0FBZ0IsQ0FBQyxDQUFDSyxFQUFELENBQUQsR0FBVSxDQUUxQixLQUFNcEIsT0FBTSxDQUFHWixLQUFLLENBQUNHLE1BQU4sQ0FBYVMsTUFBYixDQUFvQm9CLEVBQXBCLENBQWYsQ0FFQSxNQUNFLDBGQUNFLHdFQUFDLHdEQUFELEVBQU0sSUFBSSxDQUFFcEIsTUFBTSxDQUFDTixJQUFuQixDQUF5QixLQUFLLEtBQTlCLFdBQ0UsdUVBQUMsNERBQUQsRUFBVSxLQUFLLENBQUVNLE1BQU0sQ0FBQ3FCLGNBQXhCLENBQXdDLE9BQU8sQ0FBQyxRQUFoRCxFQURGLENBRUUsNkVBQUksdUJBQXVCLENBQUUsQ0FBQ0MsTUFBTSxDQUFFLGVBQWlCdEIsTUFBTSxDQUFDSSxLQUFQLENBQWFDLFFBQXZDLENBQTdCLEVBRkYsR0FERixDQUtJLCtFQUFNLHVCQUF1QixDQUFFLENBQUVpQixNQUFNLENBQUV0QixNQUFNLENBQUN1QixPQUFQLENBQWVsQixRQUF6QixDQUEvQixFQUxKLENBTUksbUdBQWFMLE1BQU0sQ0FBQ3dCLEdBQVAsQ0FBV0MsT0FBWCxFQUFzQixNQUFuQyxHQU5KLENBT0ksNEdBQXNCekIsTUFBTSxDQUFDd0IsR0FBUCxDQUFXRSxNQUFqQyxHQVBKLENBUUUsK0VBUkYsR0FBVU4sRUFBVixDQURGLENBWUQsQ0FoQkMsQ0FuQ0osR0FERixDQXVESCxDQWhFRCxDQWtFZU8sdUhBQU8sQ0FBQ3hDLE1BQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvUGFnZXMvTW92aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCBGZWF0dXJlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9GZWF0dXJlZFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcblxuY29uc3QgTW92aWVzID0gKHtzdGF0ZSwgYWN0aW9uc30pID0+IHtcbiAgICBcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgY29uc29sZS5sb2coc3RhdGUuc291cmNlKVxuICAgIC8vIFNldCBNb3ZpZSBvYmplY3RzIGludG8gYW4gYXJyYXkgdG8gaXRlcmF0ZSB0aHJvdWdoXG4gICAgLy8gVGhpcyB3aWxsIGFsbG93IHlvdSB0byBzZXQgdGhlIHZhbHVlcyBpbnRvIGFuIEFycmF5XG4gICAgY29uc3QgYWxsTW92aWVzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5zb3VyY2UubW92aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJNb3ZpZXMgPSBhbGxNb3ZpZXMuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUudGl0bGUucmVuZGVyZWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzdGF0ZS50aGVtZS5zZWFyY2hJbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuXG4gICAgcmV0dXJuKFxuICAgICAgPD5cbiAgICAgICAgPGgyPlZpZGVvPC9oMj5cbiAgICAgICAgPHA+VGhlcmUgaW9zIHNvbWV0aGlvOW5nIGhlcmUgdGhhdCB3aWxsIHNob3cgZm9yIHRoZSBtaW92aXVlLjwvcD5cbiAgICAgICAgPHA+VGhlcmUgYXJlICh7ZGF0YS5pdGVtcy5sZW5ndGh9KTwvcD5cblxuICAgICAgICA8cHJlPkNvbnRhZG9yOiB7c3RhdGUudGhlbWUuY291bnRlcn08L3ByZT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnNldFBsdXNDb3VudGVyfT5BZGQgMTwvYnV0dG9uPlxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICB7ICFmaWx0ZXJNb3ZpZXMubGVuZ3RoID4gMCAmJiA8cD5ObyByZXN1bHRzIGZvdW5kIG1hdGNoaW5nOiB7c3RhdGUudGhlbWUuc2VhcmNoSW5wdXRWYWx1ZX08L3A+fVxuICAgICAgICB7IGZpbHRlck1vdmllcy5yZXZlcnNlKCkubWFwKCAobW92aWUpID0+IHtcblxuICAgICAgICAgIGNvbnN0IG1vdmllQ2F0SUQgPSBtb3ZpZS5jYXRlZ29yaWVzWzBdO1xuICAgICAgICAgIGNvbnN0IG1vdmllQ2F0ZWdvcnkgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbbW92aWVDYXRJRF07XG4gICAgICAgICAgY29uc29sZS5sb2cobW92aWVDYXRlZ29yeSlcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXttb3ZpZS5saW5rfT5cbiAgICAgICAgICAgICAgICAgIDxoMiBrZXk9e21vdmllLmlkfT57bW92aWUudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSkgfVxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxoMz5TdGF0aWMgT2xkIERhdGEgYmVsb3c8L2gzPlxuXG5cbiAgICAgICAgeyBkYXRhLml0ZW1zLm1hcCggKHtpZH0pID0+IHtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBtb3ZpZXMgPSBzdGF0ZS5zb3VyY2UubW92aWVzW2lkXTtcblxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e21vdmllcy5saW5rfSBleGFjdD5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZWQgaW1nSUQ9e21vdmllcy5mZWF0dXJlZF9tZWRpYX0gZWxlbWVudD1cIm1vdmllc1wiPjwvRmVhdHVyZWQ+XG4gICAgICAgICAgICAgICAgPGgyIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIlBvc3QgdGl0bGU6IFwiICsgbW92aWVzLnRpdGxlLnJlbmRlcmVkIH19PjwvaDI+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1vdmllcy5leGNlcnB0LnJlbmRlcmVkIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD5Db21wYW55OiB7bW92aWVzLmFjZi5jb21wYW55IHx8IFwiTm9uZVwifTwvcD5cbiAgICAgICAgICAgICAgICA8cD5DcnlwdG8gRVhjaGFuZ2VzOiB7bW92aWVzLmFjZi5jcnlwdG99PC9wPlxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSkgfVxuICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1vdmllcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mq-theme/src/Pages/Movies.js\n");

/***/ })

})