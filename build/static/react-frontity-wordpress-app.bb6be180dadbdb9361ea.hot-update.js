webpackHotUpdate("react-frontity-wordpress-app",{

/***/ "./packages/mq-theme/src/components/Header.js":
/*!****************************************************!*\
  !*** ./packages/mq-theme/src/components/Header.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./packages/mq-theme/src/components/Link.js\");\n/* harmony import */ var _assets_cc_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cc.png */ \"./packages/mq-theme/src/assets/cc.png\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toggle */ \"./packages/mq-theme/src/components/Toggle.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Navigation=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"nav\", false?undefined:{target:\"e1jfnnpz2\",label:\"Navigation\"})( false?undefined:{name:\"kx1cd3\",styles:\"display:flex;justify-content:space-between;align-items:center;width:95%;margin:2rem auto\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5ueS9EZXNrdG9wL3JlYWN0LWZyb250aXR5LXdvcmRwcmVzcy1hcHAvcGFja2FnZXMvbXEtdGhlbWUvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU02QiIsImZpbGUiOiIvVXNlcnMvbWFubnkvRGVza3RvcC9yZWFjdC1mcm9udGl0eS13b3JkcHJlc3MtYXBwL3BhY2thZ2VzL21xLXRoZW1lL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdCwgc3R5bGVkLCBjc3N9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2Fzc2V0cy9jYy5wbmdcIlxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICB3aWR0aDo5NSU7XG4gICAgbWFyZ2luOjJyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZW50TGVmdCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGVudFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgICAmIGE6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgfVxuICAgICYgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcbiAgICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udGVudExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGltZyBjbGFzc05hbWU9XCJuYXYtbG9nb1wiIHNyYz17TG9nb30gYWx0PVwiV2Vic2l0ZSBzYW1wbGUgbG9nb1wiLz48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQ29udGVudExlZnQ+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25Db250ZW50UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllc1wiPk1vdmllczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZSAvPlxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkNvbnRlbnRSaWdodD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRlcik7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const NavigationContentLeft=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1jfnnpz1\",label:\"NavigationContentLeft\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5ueS9EZXNrdG9wL3JlYWN0LWZyb250aXR5LXdvcmRwcmVzcy1hcHAvcGFja2FnZXMvbXEtdGhlbWUvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN3QyIsImZpbGUiOiIvVXNlcnMvbWFubnkvRGVza3RvcC9yZWFjdC1mcm9udGl0eS13b3JkcHJlc3MtYXBwL3BhY2thZ2VzL21xLXRoZW1lL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdCwgc3R5bGVkLCBjc3N9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2Fzc2V0cy9jYy5wbmdcIlxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICB3aWR0aDo5NSU7XG4gICAgbWFyZ2luOjJyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZW50TGVmdCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGVudFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgICAmIGE6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgfVxuICAgICYgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcbiAgICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udGVudExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGltZyBjbGFzc05hbWU9XCJuYXYtbG9nb1wiIHNyYz17TG9nb30gYWx0PVwiV2Vic2l0ZSBzYW1wbGUgbG9nb1wiLz48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQ29udGVudExlZnQ+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25Db250ZW50UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllc1wiPk1vdmllczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZSAvPlxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkNvbnRlbnRSaWdodD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRlcik7Il19 */\");const NavigationContentRight=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1jfnnpz0\",label:\"NavigationContentRight\"})( false?undefined:{name:\"37nafv\",styles:\"& a:not(last-child){margin-right:10px;}& a:last-child{margin-right:0px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5ueS9EZXNrdG9wL3JlYWN0LWZyb250aXR5LXdvcmRwcmVzcy1hcHAvcGFja2FnZXMvbXEtdGhlbWUvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCeUMiLCJmaWxlIjoiL1VzZXJzL21hbm55L0Rlc2t0b3AvcmVhY3QtZnJvbnRpdHktd29yZHByZXNzLWFwcC9wYWNrYWdlcy9tcS10aGVtZS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3QsIHN0eWxlZCwgY3NzfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9hc3NldHMvY2MucG5nXCJcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgd2lkdGg6OTUlO1xuICAgIG1hcmdpbjoycmVtIGF1dG87XG5gO1xuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGVudExlZnQgPSBzdHlsZWQuZGl2YFxuYDtcblxuY29uc3QgTmF2aWdhdGlvbkNvbnRlbnRSaWdodCA9IHN0eWxlZC5kaXZgXG4gICAgJiBhOm5vdChsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIH1cbiAgICAmIGE6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDowcHg7XG4gICAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRlbnRMZWZ0PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxpbWcgY2xhc3NOYW1lPVwibmF2LWxvZ29cIiBzcmM9e0xvZ299IGFsdD1cIldlYnNpdGUgc2FtcGxlIGxvZ29cIi8+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkNvbnRlbnRMZWZ0PlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udGVudFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5Nb3ZpZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGUgLz5cbiAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25Db250ZW50UmlnaHQ+XG4gICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChIZWFkZXIpOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Header=()=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(Navigation,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(NavigationContentLeft,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{href:\"/\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\",{className:\"nav-logo\",src:_assets_cc_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],alt:\"Website sample logo\"})})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(NavigationContentRight,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{href:\"/\",children:\"Home\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{href:\"/about\",children:\"About\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{href:\"/movies\",children:\"Movies\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Toggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{})]})]})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Header));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tcS10aGVtZS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/YmNkOSJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbkNvbnRlbnRMZWZ0IiwiTmF2aWdhdGlvbkNvbnRlbnRSaWdodCIsIkhlYWRlciIsIkxvZ28iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7cVJBTUEsS0FBTUEsV0FBVSx3eEVBQWhCLENBUUEsS0FBTUMsc0JBQXFCLG1vRUFBM0IsQ0FHQSxLQUFNQyx1QkFBc0Isd3hFQUE1QixDQVNBLEtBQU1DLE9BQU0sQ0FBRyxJQUFNLENBQ2pCLE1BQ0ksc0pBQ0ksd0VBQUMsVUFBRCxZQUNJLHVFQUFDLHFCQUFELFdBQ0ksdUVBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUMsR0FBWCxVQUFlLDhFQUFLLFNBQVMsQ0FBQyxVQUFmLENBQTBCLEdBQUcsQ0FBRUMsc0RBQS9CLENBQXFDLEdBQUcsQ0FBQyxxQkFBekMsRUFBZixFQURKLEVBREosQ0FJSSx3RUFBQyxzQkFBRCxZQUNJLHVFQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFDLEdBQVgsa0JBREosQ0FFSSx1RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBQyxRQUFYLG1CQUZKLENBR0ksdUVBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUMsU0FBWCxvQkFISixDQUlJLHVFQUFDLCtDQUFELElBSkosR0FKSixHQURKLEVBREosQ0FlSCxDQWhCRCxDQWtCZUMsdUhBQU8sQ0FBQ0YsTUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21xLXRoZW1lL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdCwgc3R5bGVkLCBjc3N9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2Fzc2V0cy9jYy5wbmdcIlxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICB3aWR0aDo5NSU7XG4gICAgbWFyZ2luOjJyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZW50TGVmdCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGVudFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgICAmIGE6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgfVxuICAgICYgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcbiAgICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udGVudExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGltZyBjbGFzc05hbWU9XCJuYXYtbG9nb1wiIHNyYz17TG9nb30gYWx0PVwiV2Vic2l0ZSBzYW1wbGUgbG9nb1wiLz48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQ29udGVudExlZnQ+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25Db250ZW50UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllc1wiPk1vdmllczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZSAvPlxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkNvbnRlbnRSaWdodD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRlcik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mq-theme/src/components/Header.js\n");

/***/ })

})