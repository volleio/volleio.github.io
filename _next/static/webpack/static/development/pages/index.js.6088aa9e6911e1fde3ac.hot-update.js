webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var basicscroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! basicscroll */ "./node_modules/basicscroll/dist/basicScroll.min.js");
/* harmony import */ var basicscroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(basicscroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _BusinessCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BusinessCard */ "./components/BusinessCard.js");






var _jsxFileName = "C:\\Projects\\volleio.github.io.git\\components\\Header.js";






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "onMouseOverContainer",
    value: function onMouseOverContainer(evt) {
      var headerContainer = evt.currentTarget;
      if (_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(document.documentElement.style.getPropertyValue("--header-height-out")) != 0) return;
      headerContainer.style.setProperty("--header-height-out", "0.3");
      headerContainer.style.setProperty("--header-height-in", "0.7");
      headerContainer.style.setProperty("--header-fade-out", "1");
      headerContainer.style.setProperty("--header-fade-in", "0");
      headerContainer.style.height = "0";
      headerContainer.style.backgroundColor = "transparent";
      headerContainer.style.overflow = "visible";
    }
  }, {
    key: "onMouseOutContainer",
    value: function onMouseOutContainer(evt) {
      // if (parseFloat(document.documentElement.style.getPropertyValue("--header-height-out")) != 0)
      // return;
      var headerContainer = evt.currentTarget;
      headerContainer.style.setProperty("--header-height-out", "");
      headerContainer.style.setProperty("--header-height-in", "");
      headerContainer.style.setProperty("--header-fade-out", "");
      headerContainer.style.setProperty("--header-fade-in", "");
      headerContainer.style.height = "";
      headerContainer.style.backgroundColor = "";
      headerContainer.style.overflow = "";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2709441606" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onMouseOver: this.onMouseOverContainer,
        onMouseOut: this.onMouseOutContainer,
        className: "jsx-2709441606" + " " + "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BusinessCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2709441606" + " " + "header-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2418942475",
        __self: this
      }, ".header-container.jsx-2709441606{position:fixed;width:100%;height:calc(var(--header-height-out) * 100vh);min-height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;background-color:#FFF;box-shadow:0 0 10px rgba(0,0,0,calc((var(--header-height-in) - 0.9) * 2));}.header-scroll.jsx-2709441606{width:100%;height:calc(var(--header-height-out) * 100vh + 300px);min-height:280px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0Q0QixBQUd3QyxBQWFKLFdBQzJDLElBYjNDLFdBQ21DLHVDQWE3QixPQVpELFVBYXBCLE1BWmlCLDBFQUNVLG1HQUNQLGdCQUVNLHNCQUN1RCwwRUFDakYiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU92ZXJDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtb3V0XCIsIFwiMC4zXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1pblwiLCBcIjAuN1wiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLW91dFwiLCBcIjFcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1pblwiLCBcIjBcIik7XHJcblxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXRDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIC8vIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtb3V0XCIsIFwiXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1pblwiLCBcIlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLW91dFwiLCBcIlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLWluXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlT3ZlckNvbnRhaW5lcn0gb25Nb3VzZU91dD17dGhpcy5vbk1vdXNlT3V0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnVzaW5lc3NDYXJkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNjcm9sbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSAqIDEwMHZoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIGNhbGMoKHZhcigtLWhlYWRlci1oZWlnaHQtaW4pIC0gMC45KSAqIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItc2Nyb2xsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkgKiAxMDB2aCArIDMwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItaGVpZ2h0LW91dDogMTtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1oZWlnaHQtaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1vdXQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1pbjogMDtcclxuICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgU2V0dXBCYXNpY1Njcm9sbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogJzB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMjAwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1vdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckZhZGUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB0bzogJzE1MHZoJyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItZmFkZS1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoZWFkZXJIZWlnaHQuc3RhcnQoKTtcclxuICAgICAgICBoZWFkZXJGYWRlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNldHVwQmFzaWNTY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1428398948",
        __self: this
      }, "html{--header-height-out:1;--header-height-in:0;--header-fade-out:1;--header-fade-in:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VtQyxBQUcyQyxzQkFDRCxxQkFDRCxvQkFDRCxtQkFDckIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU92ZXJDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtb3V0XCIsIFwiMC4zXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1pblwiLCBcIjAuN1wiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLW91dFwiLCBcIjFcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1pblwiLCBcIjBcIik7XHJcblxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXRDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIC8vIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtb3V0XCIsIFwiXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1pblwiLCBcIlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLW91dFwiLCBcIlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLWluXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlT3ZlckNvbnRhaW5lcn0gb25Nb3VzZU91dD17dGhpcy5vbk1vdXNlT3V0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnVzaW5lc3NDYXJkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNjcm9sbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSAqIDEwMHZoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIGNhbGMoKHZhcigtLWhlYWRlci1oZWlnaHQtaW4pIC0gMC45KSAqIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItc2Nyb2xsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkgKiAxMDB2aCArIDMwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItaGVpZ2h0LW91dDogMTtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1oZWlnaHQtaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1vdXQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1pbjogMDtcclxuICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgU2V0dXBCYXNpY1Njcm9sbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogJzB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMjAwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1vdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckZhZGUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB0bzogJzE1MHZoJyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItZmFkZS1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoZWFkZXJIZWlnaHQuc3RhcnQoKTtcclxuICAgICAgICBoZWFkZXJGYWRlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNldHVwQmFzaWNTY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"));
    }
  }, {
    key: "SetupBasicScroll",
    value: function SetupBasicScroll() {
      var headerHeight = basicscroll__WEBPACK_IMPORTED_MODULE_9__["create"]({
        from: '0vh',
        to: '200vh',
        props: {
          '--header-height-out': {
            from: "1",
            to: "0"
          },
          '--header-height-in': {
            from: "0",
            to: "1"
          }
        }
      });
      var headerFade = basicscroll__WEBPACK_IMPORTED_MODULE_9__["create"]({
        from: '100vh',
        to: '150vh',
        props: {
          '--header-fade-out': {
            from: "1",
            to: "0"
          },
          '--header-fade-in': {
            from: "0",
            to: "1"
          }
        }
      });
      headerHeight.start();
      headerFade.start();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.SetupBasicScroll();
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.6088aa9e6911e1fde3ac.hot-update.js.map