webpackHotUpdate("react-frontity-wordpress-app",{

/***/ "./packages/mq-theme/src/Pages/Movies.js":
/*!***********************************************!*\
  !*** ./packages/mq-theme/src/Pages/Movies.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ \"./node_modules/core-js/modules/es.array.reverse.js\");\n/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./packages/mq-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./packages/mq-theme/src/components/Featured.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search */ \"./packages/mq-theme/src/components/Search.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Movies=({state,actions})=>{const data=state.source.get(state.router.link);console.log(state.source);// Set Movie objects into an array to iterate through\n// This will allow you to set the values into an Array\nconst allMovies=Object.values(state.source.movies);const filterMovies=allMovies.filter(movie=>movie.title.rendered.toLowerCase().includes(state.theme.searchInputValue.toLowerCase()));return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:\"Video\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\",{children:\"There ios somethio9ng here that will show for the mioviue.\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"There are (\",data.items.length,\")\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"pre\",{children:[\"Contador: \",state.theme.counter]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\",{onClick:actions.theme.setPlusCounter,children:\"Add 1\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),!filterMovies.length>0&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"No results found matching: \",state.theme.searchInputValue]}),filterMovies.reverse().map(movie=>{const movieC=movie.categories[0];const movieCategories=state.source.category[movieC];console.log(movieCategories.name);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:movie.link,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:movie.title.rendered},movie.id)}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\",{children:movieCategories.name})]});}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h3\",{children:\"Static Old Data below\"}),data.items.map(({id})=>{const movies=state.source.movies[id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:movies.link,exact:true,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{imgID:movies.featured_media,element:\"movies\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{dangerouslySetInnerHTML:{__html:\"Post title: \"+movies.title.rendered}})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"span\",{dangerouslySetInnerHTML:{__html:movies.excerpt.rendered}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"Company: \",movies.acf.company||\"None\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"p\",{children:[\"Crypto EXchanges: \",movies.acf.crypto]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"hr\",{})]},id);})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Movies));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvUGFnZXMvTW92aWVzLmpzP2NkZWEiXSwibmFtZXMiOlsiTW92aWVzIiwic3RhdGUiLCJhY3Rpb25zIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjb25zb2xlIiwibG9nIiwiYWxsTW92aWVzIiwiT2JqZWN0IiwidmFsdWVzIiwibW92aWVzIiwiZmlsdGVyTW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInJlbmRlcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRoZW1lIiwic2VhcmNoSW5wdXRWYWx1ZSIsIml0ZW1zIiwibGVuZ3RoIiwiY291bnRlciIsInNldFBsdXNDb3VudGVyIiwicmV2ZXJzZSIsIm1hcCIsIm1vdmllQyIsImNhdGVnb3JpZXMiLCJtb3ZpZUNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsIm5hbWUiLCJpZCIsImZlYXR1cmVkX21lZGlhIiwiX19odG1sIiwiZXhjZXJwdCIsImFjZiIsImNvbXBhbnkiLCJjcnlwdG8iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTUEsT0FBTSxDQUFHLENBQUMsQ0FBQ0MsS0FBRCxDQUFRQyxPQUFSLENBQUQsR0FBc0IsQ0FFakMsS0FBTUMsS0FBSSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQUssQ0FBQ0csTUFBbEIsRUFDQTtBQUNBO0FBQ0EsS0FBTU0sVUFBUyxDQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsS0FBSyxDQUFDRyxNQUFOLENBQWFTLE1BQTNCLENBQWxCLENBQ0EsS0FBTUMsYUFBWSxDQUFHSixTQUFTLENBQUNLLE1BQVYsQ0FBa0JDLEtBQUQsRUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0Q25CLEtBQUssQ0FBQ29CLEtBQU4sQ0FBWUMsZ0JBQVosQ0FBNkJILFdBQTdCLEVBQTVDLENBQTVCLENBQXJCLENBRUEsTUFDRSx3SkFDRSwrRkFERixDQUVFLG1KQUZGLENBR0UscUdBQWVoQixJQUFJLENBQUNvQixLQUFMLENBQVdDLE1BQTFCLE9BSEYsQ0FLRSxzR0FBZ0J2QixLQUFLLENBQUNvQixLQUFOLENBQVlJLE9BQTVCLEdBTEYsQ0FNRSxpRkFBUSxPQUFPLENBQUV2QixPQUFPLENBQUNtQixLQUFSLENBQWNLLGNBQS9CLG1CQU5GLENBUUUsK0VBUkYsQ0FVRSx1RUFBQywwREFBRCxJQVZGLENBWUUsK0VBWkYsQ0FjSSxDQUFDWixZQUFZLENBQUNVLE1BQWQsQ0FBdUIsQ0FBdkIsRUFBNEIscUhBQStCdkIsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxnQkFBM0MsR0FkaEMsQ0FlSVIsWUFBWSxDQUFDYSxPQUFiLEdBQXVCQyxHQUF2QixDQUE2QlosS0FBRCxFQUFXLENBRXZDLEtBQU1hLE9BQU0sQ0FBR2IsS0FBSyxDQUFDYyxVQUFOLENBQWlCLENBQWpCLENBQWYsQ0FDQSxLQUFNQyxnQkFBZSxDQUFHOUIsS0FBSyxDQUFDRyxNQUFOLENBQWE0QixRQUFiLENBQXNCSCxNQUF0QixDQUF4QixDQUNBckIsT0FBTyxDQUFDQyxHQUFSLENBQVlzQixlQUFlLENBQUNFLElBQTVCLEVBRUEsTUFDRSx3SkFDRSx1RUFBQyx3REFBRCxFQUFNLElBQUksQ0FBRWpCLEtBQUssQ0FBQ1QsSUFBbEIsVUFDSSxzRkFBb0JTLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFoQyxFQUFTRixLQUFLLENBQUNrQixFQUFmLENBREosRUFERixDQUlFLHFGQUFJSCxlQUFlLENBQUNFLElBQXBCLEVBSkYsR0FERixDQVFELENBZEMsQ0FmSixDQStCRSwrRUEvQkYsQ0FpQ0UsK0dBakNGLENBb0NJOUIsSUFBSSxDQUFDb0IsS0FBTCxDQUFXSyxHQUFYLENBQWdCLENBQUMsQ0FBQ00sRUFBRCxDQUFELEdBQVUsQ0FFMUIsS0FBTXJCLE9BQU0sQ0FBR1osS0FBSyxDQUFDRyxNQUFOLENBQWFTLE1BQWIsQ0FBb0JxQixFQUFwQixDQUFmLENBRUEsTUFDRSwwRkFDRSx3RUFBQyx3REFBRCxFQUFNLElBQUksQ0FBRXJCLE1BQU0sQ0FBQ04sSUFBbkIsQ0FBeUIsS0FBSyxLQUE5QixXQUNFLHVFQUFDLDREQUFELEVBQVUsS0FBSyxDQUFFTSxNQUFNLENBQUNzQixjQUF4QixDQUF3QyxPQUFPLENBQUMsUUFBaEQsRUFERixDQUVFLDZFQUFJLHVCQUF1QixDQUFFLENBQUNDLE1BQU0sQ0FBRSxlQUFpQnZCLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxRQUF2QyxDQUE3QixFQUZGLEdBREYsQ0FLSSwrRUFBTSx1QkFBdUIsQ0FBRSxDQUFFa0IsTUFBTSxDQUFFdkIsTUFBTSxDQUFDd0IsT0FBUCxDQUFlbkIsUUFBekIsQ0FBL0IsRUFMSixDQU1JLG1HQUFhTCxNQUFNLENBQUN5QixHQUFQLENBQVdDLE9BQVgsRUFBc0IsTUFBbkMsR0FOSixDQU9JLDRHQUFzQjFCLE1BQU0sQ0FBQ3lCLEdBQVAsQ0FBV0UsTUFBakMsR0FQSixDQVFFLCtFQVJGLEdBQVVOLEVBQVYsQ0FERixDQVlELENBaEJDLENBcENKLEdBREYsQ0F3REgsQ0FqRUQsQ0FtRWVPLHVIQUFPLENBQUN6QyxNQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbXEtdGhlbWUvc3JjL1BhZ2VzL01vdmllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgRmVhdHVyZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmVhdHVyZWRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5cbmNvbnN0IE1vdmllcyA9ICh7c3RhdGUsIGFjdGlvbnN9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIGNvbnNvbGUubG9nKHN0YXRlLnNvdXJjZSlcbiAgICAvLyBTZXQgTW92aWUgb2JqZWN0cyBpbnRvIGFuIGFycmF5IHRvIGl0ZXJhdGUgdGhyb3VnaFxuICAgIC8vIFRoaXMgd2lsbCBhbGxvdyB5b3UgdG8gc2V0IHRoZSB2YWx1ZXMgaW50byBhbiBBcnJheVxuICAgIGNvbnN0IGFsbE1vdmllcyA9IE9iamVjdC52YWx1ZXMoc3RhdGUuc291cmNlLm1vdmllcyk7XG4gICAgY29uc3QgZmlsdGVyTW92aWVzID0gYWxsTW92aWVzLmZpbHRlcigobW92aWUpID0+IG1vdmllLnRpdGxlLnJlbmRlcmVkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc3RhdGUudGhlbWUuc2VhcmNoSW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcblxuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICAgIDxoMj5WaWRlbzwvaDI+XG4gICAgICAgIDxwPlRoZXJlIGlvcyBzb21ldGhpbzluZyBoZXJlIHRoYXQgd2lsbCBzaG93IGZvciB0aGUgbWlvdml1ZS48L3A+XG4gICAgICAgIDxwPlRoZXJlIGFyZSAoe2RhdGEuaXRlbXMubGVuZ3RofSk8L3A+XG5cbiAgICAgICAgPHByZT5Db250YWRvcjoge3N0YXRlLnRoZW1lLmNvdW50ZXJ9PC9wcmU+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWN0aW9ucy50aGVtZS5zZXRQbHVzQ291bnRlcn0+QWRkIDE8L2J1dHRvbj5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8U2VhcmNoIC8+XG5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgeyAhZmlsdGVyTW92aWVzLmxlbmd0aCA+IDAgJiYgPHA+Tm8gcmVzdWx0cyBmb3VuZCBtYXRjaGluZzoge3N0YXRlLnRoZW1lLnNlYXJjaElucHV0VmFsdWV9PC9wPn1cbiAgICAgICAgeyBmaWx0ZXJNb3ZpZXMucmV2ZXJzZSgpLm1hcCggKG1vdmllKSA9PiB7XG5cbiAgICAgICAgICBjb25zdCBtb3ZpZUMgPSBtb3ZpZS5jYXRlZ29yaWVzWzBdO1xuICAgICAgICAgIGNvbnN0IG1vdmllQ2F0ZWdvcmllcyA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVttb3ZpZUNdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllQ2F0ZWdvcmllcy5uYW1lKTtcblxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e21vdmllLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgPGgyIGtleT17bW92aWUuaWR9Pnttb3ZpZS50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwPnttb3ZpZUNhdGVnb3JpZXMubmFtZX08L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0pIH1cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8aDM+U3RhdGljIE9sZCBEYXRhIGJlbG93PC9oMz5cblxuXG4gICAgICAgIHsgZGF0YS5pdGVtcy5tYXAoICh7aWR9KSA9PiB7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbW92aWVzID0gc3RhdGUuc291cmNlLm1vdmllc1tpZF07XG5cbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXttb3ZpZXMubGlua30gZXhhY3Q+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVkIGltZ0lEPXttb3ZpZXMuZmVhdHVyZWRfbWVkaWF9IGVsZW1lbnQ9XCJtb3ZpZXNcIj48L0ZlYXR1cmVkPlxuICAgICAgICAgICAgICAgIDxoMiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJQb3N0IHRpdGxlOiBcIiArIG1vdmllcy50aXRsZS5yZW5kZXJlZCB9fT48L2gyPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtb3ZpZXMuZXhjZXJwdC5yZW5kZXJlZCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+Q29tcGFueToge21vdmllcy5hY2YuY29tcGFueSB8fCBcIk5vbmVcIn08L3A+XG4gICAgICAgICAgICAgICAgPHA+Q3J5cHRvIEVYY2hhbmdlczoge21vdmllcy5hY2YuY3J5cHRvfTwvcD5cbiAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pIH1cbiAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNb3ZpZXMpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mq-theme/src/Pages/Movies.js\n");

/***/ })

})