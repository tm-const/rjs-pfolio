webpackHotUpdate("react-frontity-wordpress-app",{

/***/ "./packages/mq-theme/src/Pages/Movies.js":
/*!***********************************************!*\
  !*** ./packages/mq-theme/src/Pages/Movies.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ \"./node_modules/core-js/modules/es.array.reverse.js\");\n/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./packages/mq-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./packages/mq-theme/src/components/Featured.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search */ \"./packages/mq-theme/src/components/Search.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Movies=({state,actions})=>{const data=state.source.get(state.router.link);console.log(state.source);// Set Movie objects into an array to iterate through\n// This will allow you to set the values into an Array\nconst allMovies=Object.values(state.source.movies);const filterMovies=allMovies.filter(movie=>movie.title.rendered.toLowerCase().includes(state.theme.searchInputValue.toLowerCase()));return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:\"Video\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\",{children:\"There ios somethio9ng here that will show for the mioviue.\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"There are (\",data.items.length,\")\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"pre\",{children:[\"Contador: \",state.theme.counter]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\",{onClick:actions.theme.setPlusCounter,children:\"Add 1\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),!filterMovies.length>0&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"No results found matching: \",state.theme.searchInputValue]}),filterMovies.reverse().map(movie=>{const movieCatID=movie.categories[0];console.log(movieCat);const movieC=state.source.category[movieCat];console.log(movieC);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:movie.link,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:movie.title.rendered},movie.id)})});}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h3\",{children:\"Static Old Data below\"}),data.items.map(({id})=>{const movies=state.source.movies[id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:movies.link,exact:true,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{imgID:movies.featured_media,element:\"movies\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{dangerouslySetInnerHTML:{__html:\"Post title: \"+movies.title.rendered}})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"span\",{dangerouslySetInnerHTML:{__html:movies.excerpt.rendered}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"Company: \",movies.acf.company||\"None\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"Crypto EXchanges: \",movies.acf.crypto]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{})]},id);})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Movies));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvUGFnZXMvTW92aWVzLmpzP2NkZWEiXSwibmFtZXMiOlsiTW92aWVzIiwic3RhdGUiLCJhY3Rpb25zIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjb25zb2xlIiwibG9nIiwiYWxsTW92aWVzIiwiT2JqZWN0IiwidmFsdWVzIiwibW92aWVzIiwiZmlsdGVyTW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInJlbmRlcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRoZW1lIiwic2VhcmNoSW5wdXRWYWx1ZSIsIml0ZW1zIiwibGVuZ3RoIiwiY291bnRlciIsInNldFBsdXNDb3VudGVyIiwicmV2ZXJzZSIsIm1hcCIsIm1vdmllQ2F0SUQiLCJjYXRlZ29yaWVzIiwibW92aWVDYXQiLCJtb3ZpZUMiLCJjYXRlZ29yeSIsImlkIiwiZmVhdHVyZWRfbWVkaWEiLCJfX2h0bWwiLCJleGNlcnB0IiwiYWNmIiwiY29tcGFueSIsImNyeXB0byIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxLQUFNQSxPQUFNLENBQUcsQ0FBQyxDQUFDQyxLQUFELENBQVFDLE9BQVIsQ0FBRCxHQUFzQixDQUVqQyxLQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBSyxDQUFDRyxNQUFsQixFQUNBO0FBQ0E7QUFDQSxLQUFNTSxVQUFTLENBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxLQUFLLENBQUNHLE1BQU4sQ0FBYVMsTUFBM0IsQ0FBbEIsQ0FDQSxLQUFNQyxhQUFZLENBQUdKLFNBQVMsQ0FBQ0ssTUFBVixDQUFrQkMsS0FBRCxFQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkMsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDbkIsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxnQkFBWixDQUE2QkgsV0FBN0IsRUFBNUMsQ0FBNUIsQ0FBckIsQ0FFQSxNQUNFLHdKQUNFLCtGQURGLENBRUUsbUpBRkYsQ0FHRSxxR0FBZWhCLElBQUksQ0FBQ29CLEtBQUwsQ0FBV0MsTUFBMUIsT0FIRixDQUtFLHNHQUFnQnZCLEtBQUssQ0FBQ29CLEtBQU4sQ0FBWUksT0FBNUIsR0FMRixDQU1FLGlGQUFRLE9BQU8sQ0FBRXZCLE9BQU8sQ0FBQ21CLEtBQVIsQ0FBY0ssY0FBL0IsbUJBTkYsQ0FRRSwrRUFSRixDQVVFLHVFQUFDLDBEQUFELElBVkYsQ0FZRSwrRUFaRixDQWNJLENBQUNaLFlBQVksQ0FBQ1UsTUFBZCxDQUF1QixDQUF2QixFQUE0QixxSEFBK0J2QixLQUFLLENBQUNvQixLQUFOLENBQVlDLGdCQUEzQyxHQWRoQyxDQWVJUixZQUFZLENBQUNhLE9BQWIsR0FBdUJDLEdBQXZCLENBQTZCWixLQUFELEVBQVcsQ0FFdkMsS0FBTWEsV0FBVSxDQUFHYixLQUFLLENBQUNjLFVBQU4sQ0FBaUIsQ0FBakIsQ0FBbkIsQ0FDQXRCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0IsUUFBWixFQUNBLEtBQU1DLE9BQU0sQ0FBRy9CLEtBQUssQ0FBQ0csTUFBTixDQUFhNkIsUUFBYixDQUFzQkYsUUFBdEIsQ0FBZixDQUNBdkIsT0FBTyxDQUFDQyxHQUFSLENBQVl1QixNQUFaLEVBRUEsTUFDRSxzSkFDRSx1RUFBQyx3REFBRCxFQUFNLElBQUksQ0FBRWhCLEtBQUssQ0FBQ1QsSUFBbEIsVUFDSSxzRkFBb0JTLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFoQyxFQUFTRixLQUFLLENBQUNrQixFQUFmLENBREosRUFERixFQURGLENBT0QsQ0FkQyxDQWZKLENBK0JFLCtFQS9CRixDQWlDRSwrR0FqQ0YsQ0FvQ0kvQixJQUFJLENBQUNvQixLQUFMLENBQVdLLEdBQVgsQ0FBZ0IsQ0FBQyxDQUFDTSxFQUFELENBQUQsR0FBVSxDQUUxQixLQUFNckIsT0FBTSxDQUFHWixLQUFLLENBQUNHLE1BQU4sQ0FBYVMsTUFBYixDQUFvQnFCLEVBQXBCLENBQWYsQ0FFQSxNQUNFLDBGQUNFLHdFQUFDLHdEQUFELEVBQU0sSUFBSSxDQUFFckIsTUFBTSxDQUFDTixJQUFuQixDQUF5QixLQUFLLEtBQTlCLFdBQ0UsdUVBQUMsNERBQUQsRUFBVSxLQUFLLENBQUVNLE1BQU0sQ0FBQ3NCLGNBQXhCLENBQXdDLE9BQU8sQ0FBQyxRQUFoRCxFQURGLENBRUUsNkVBQUksdUJBQXVCLENBQUUsQ0FBQ0MsTUFBTSxDQUFFLGVBQWlCdkIsTUFBTSxDQUFDSSxLQUFQLENBQWFDLFFBQXZDLENBQTdCLEVBRkYsR0FERixDQUtJLCtFQUFNLHVCQUF1QixDQUFFLENBQUVrQixNQUFNLENBQUV2QixNQUFNLENBQUN3QixPQUFQLENBQWVuQixRQUF6QixDQUEvQixFQUxKLENBTUksbUdBQWFMLE1BQU0sQ0FBQ3lCLEdBQVAsQ0FBV0MsT0FBWCxFQUFzQixNQUFuQyxHQU5KLENBT0ksNEdBQXNCMUIsTUFBTSxDQUFDeUIsR0FBUCxDQUFXRSxNQUFqQyxHQVBKLENBUUUsK0VBUkYsR0FBVU4sRUFBVixDQURGLENBWUQsQ0FoQkMsQ0FwQ0osR0FERixDQXdESCxDQWpFRCxDQW1FZU8sdUhBQU8sQ0FBQ3pDLE1BQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvUGFnZXMvTW92aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCBGZWF0dXJlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9GZWF0dXJlZFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcblxuY29uc3QgTW92aWVzID0gKHtzdGF0ZSwgYWN0aW9uc30pID0+IHtcbiAgICBcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgY29uc29sZS5sb2coc3RhdGUuc291cmNlKVxuICAgIC8vIFNldCBNb3ZpZSBvYmplY3RzIGludG8gYW4gYXJyYXkgdG8gaXRlcmF0ZSB0aHJvdWdoXG4gICAgLy8gVGhpcyB3aWxsIGFsbG93IHlvdSB0byBzZXQgdGhlIHZhbHVlcyBpbnRvIGFuIEFycmF5XG4gICAgY29uc3QgYWxsTW92aWVzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5zb3VyY2UubW92aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJNb3ZpZXMgPSBhbGxNb3ZpZXMuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUudGl0bGUucmVuZGVyZWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzdGF0ZS50aGVtZS5zZWFyY2hJbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuXG4gICAgcmV0dXJuKFxuICAgICAgPD5cbiAgICAgICAgPGgyPlZpZGVvPC9oMj5cbiAgICAgICAgPHA+VGhlcmUgaW9zIHNvbWV0aGlvOW5nIGhlcmUgdGhhdCB3aWxsIHNob3cgZm9yIHRoZSBtaW92aXVlLjwvcD5cbiAgICAgICAgPHA+VGhlcmUgYXJlICh7ZGF0YS5pdGVtcy5sZW5ndGh9KTwvcD5cblxuICAgICAgICA8cHJlPkNvbnRhZG9yOiB7c3RhdGUudGhlbWUuY291bnRlcn08L3ByZT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthY3Rpb25zLnRoZW1lLnNldFBsdXNDb3VudGVyfT5BZGQgMTwvYnV0dG9uPlxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICB7ICFmaWx0ZXJNb3ZpZXMubGVuZ3RoID4gMCAmJiA8cD5ObyByZXN1bHRzIGZvdW5kIG1hdGNoaW5nOiB7c3RhdGUudGhlbWUuc2VhcmNoSW5wdXRWYWx1ZX08L3A+fVxuICAgICAgICB7IGZpbHRlck1vdmllcy5yZXZlcnNlKCkubWFwKCAobW92aWUpID0+IHtcblxuICAgICAgICAgIGNvbnN0IG1vdmllQ2F0SUQgPSBtb3ZpZS5jYXRlZ29yaWVzWzBdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllQ2F0KTtcbiAgICAgICAgICBjb25zdCBtb3ZpZUMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbbW92aWVDYXRdXG4gICAgICAgICAgY29uc29sZS5sb2cobW92aWVDKTtcblxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e21vdmllLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgPGgyIGtleT17bW92aWUuaWR9Pnttb3ZpZS50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0pIH1cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8aDM+U3RhdGljIE9sZCBEYXRhIGJlbG93PC9oMz5cblxuXG4gICAgICAgIHsgZGF0YS5pdGVtcy5tYXAoICh7aWR9KSA9PiB7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbW92aWVzID0gc3RhdGUuc291cmNlLm1vdmllc1tpZF07XG5cbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXttb3ZpZXMubGlua30gZXhhY3Q+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVkIGltZ0lEPXttb3ZpZXMuZmVhdHVyZWRfbWVkaWF9IGVsZW1lbnQ9XCJtb3ZpZXNcIj48L0ZlYXR1cmVkPlxuICAgICAgICAgICAgICAgIDxoMiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJQb3N0IHRpdGxlOiBcIiArIG1vdmllcy50aXRsZS5yZW5kZXJlZCB9fT48L2gyPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtb3ZpZXMuZXhjZXJwdC5yZW5kZXJlZCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+Q29tcGFueToge21vdmllcy5hY2YuY29tcGFueSB8fCBcIk5vbmVcIn08L3A+XG4gICAgICAgICAgICAgICAgPHA+Q3J5cHRvIEVYY2hhbmdlczoge21vdmllcy5hY2YuY3J5cHRvfTwvcD5cbiAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pIH1cbiAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb3ZpZXMpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mq-theme/src/Pages/Movies.js\n");

/***/ })

})