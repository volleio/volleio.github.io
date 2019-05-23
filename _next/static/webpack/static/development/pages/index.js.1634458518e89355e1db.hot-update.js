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
      headerContainer.style.overflow = "visible";
      var businessCardContainer = headerContainer.querySelector(".business-card-container");
      var businessCardSizer = businessCardContainer.querySelector(".business-card-sizer");
      businessCardContainer.style.width = headerContainer.offsetWidth * 2 + "px";
      businessCardSizer.style.width = headerContainer.offsetWidth * 2 + "px";
    }
  }, {
    key: "onMouseOutContainer",
    value: function onMouseOutContainer(evt) {
      if (evt.target.closest(".header-container")) return; // if (parseFloat(document.documentElement.style.getPropertyValue("--header-height-out")) != 0)
      // return;

      var headerContainer = evt.currentTarget;
      var businessCardContainer = headerContainer.querySelector(".business-card-container");
      businessCardContainer.style.transition = "none";
      headerContainer.style.setProperty("--header-height-out", "");
      headerContainer.style.setProperty("--header-height-in", "");
      headerContainer.style.setProperty("--header-fade-out", "");
      headerContainer.style.setProperty("--header-fade-in", "");
      headerContainer.style.height = "";
      headerContainer.style.overflow = "";
      var businessCardSizer = businessCardContainer.querySelector(".business-card-sizer");
      businessCardContainer.style.width = "";
      businessCardSizer.style.width = "";
      businessCardContainer.offsetWidth;
      businessCardContainer.style.transition = "";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2709441606" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onMouseOver: this.onMouseOverContainer,
        onMouseOut: this.onMouseOutContainer,
        className: "jsx-2709441606" + " " + "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BusinessCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2709441606" + " " + "header-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2418942475",
        __self: this
      }, ".header-container.jsx-2709441606{position:fixed;width:100%;height:calc(var(--header-height-out) * 100vh);min-height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;background-color:#FFF;box-shadow:0 0 10px rgba(0,0,0,calc((var(--header-height-in) - 0.9) * 2));}.header-scroll.jsx-2709441606{width:100%;height:calc(var(--header-height-out) * 100vh + 300px);min-height:280px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUU0QixBQUd3QyxBQWFKLFdBQzJDLElBYjNDLFdBQ21DLHVDQWE3QixPQVpELFVBYXBCLE1BWmlCLDBFQUNVLG1HQUNQLGdCQUVNLHNCQUN1RCwwRUFDakYiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU92ZXJDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtb3V0XCIsIFwiMC4zXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1pblwiLCBcIjAuN1wiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLW91dFwiLCBcIjFcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1pblwiLCBcIjBcIik7XHJcblxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYnVzaW5lc3NDYXJkQ29udGFpbmVyID0gaGVhZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZC1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29uc3QgYnVzaW5lc3NDYXJkU2l6ZXIgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkLXNpemVyXCIpO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGhlYWRlckNvbnRhaW5lci5vZmZzZXRXaWR0aCAqIDIgKyBcInB4XCI7XHJcbiAgICAgICAgYnVzaW5lc3NDYXJkU2l6ZXIuc3R5bGUud2lkdGggPSBoZWFkZXJDb250YWluZXIub2Zmc2V0V2lkdGggKiAyICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXRDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoXCIuaGVhZGVyLWNvbnRhaW5lclwiKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBidXNpbmVzc0NhcmRDb250YWluZXIgPSBoZWFkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1vdXRcIiwgXCJcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItaGVpZ2h0LWluXCIsIFwiXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWZhZGUtb3V0XCIsIFwiXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWZhZGUtaW5cIiwgXCJcIik7XHJcblxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYnVzaW5lc3NDYXJkU2l6ZXIgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkLXNpemVyXCIpO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiXCI7XHJcbiAgICAgICAgYnVzaW5lc3NDYXJkU2l6ZXIuc3R5bGUud2lkdGggPSBcIlwiO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZENvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiIG9uTW91c2VPdmVyPXt0aGlzLm9uTW91c2VPdmVyQ29udGFpbmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uTW91c2VPdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXNpbmVzc0NhcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2Nyb2xsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgY2FsYygodmFyKC0taGVhZGVyLWhlaWdodC1pbikgLSAwLjkpICogMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1zY3JvbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSAqIDEwMHZoICsgMzAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1oZWlnaHQtb3V0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWhlaWdodC1pbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1mYWRlLW91dDogMTtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1mYWRlLWluOiAwO1xyXG4gICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBTZXR1cEJhc2ljU2Nyb2xsKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMHZoJyxcclxuICAgICAgICAgICAgdG86ICcyMDB2aCcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItaGVpZ2h0LW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItaGVpZ2h0LWluJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRmFkZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZyb206ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMTUwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWZhZGUtb3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLWluJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhlYWRlckhlaWdodC5zdGFydCgpO1xyXG4gICAgICAgIGhlYWRlckZhZGUuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2V0dXBCYXNpY1Njcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1428398948",
        __self: this
      }, "html{--header-height-out:1;--header-height-in:0;--header-fade-out:1;--header-fade-in:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZtQyxBQUcyQyxzQkFDRCxxQkFDRCxvQkFDRCxtQkFDckIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU92ZXJDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtb3V0XCIsIFwiMC4zXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1pblwiLCBcIjAuN1wiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1mYWRlLW91dFwiLCBcIjFcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1pblwiLCBcIjBcIik7XHJcblxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYnVzaW5lc3NDYXJkQ29udGFpbmVyID0gaGVhZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZC1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29uc3QgYnVzaW5lc3NDYXJkU2l6ZXIgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkLXNpemVyXCIpO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGhlYWRlckNvbnRhaW5lci5vZmZzZXRXaWR0aCAqIDIgKyBcInB4XCI7XHJcbiAgICAgICAgYnVzaW5lc3NDYXJkU2l6ZXIuc3R5bGUud2lkdGggPSBoZWFkZXJDb250YWluZXIub2Zmc2V0V2lkdGggKiAyICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXRDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoXCIuaGVhZGVyLWNvbnRhaW5lclwiKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmIChwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiKSkgIT0gMClcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBidXNpbmVzc0NhcmRDb250YWluZXIgPSBoZWFkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWhlaWdodC1vdXRcIiwgXCJcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItaGVpZ2h0LWluXCIsIFwiXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWZhZGUtb3V0XCIsIFwiXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWZhZGUtaW5cIiwgXCJcIik7XHJcblxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYnVzaW5lc3NDYXJkU2l6ZXIgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkLXNpemVyXCIpO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiXCI7XHJcbiAgICAgICAgYnVzaW5lc3NDYXJkU2l6ZXIuc3R5bGUud2lkdGggPSBcIlwiO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZENvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiIG9uTW91c2VPdmVyPXt0aGlzLm9uTW91c2VPdmVyQ29udGFpbmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uTW91c2VPdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXNpbmVzc0NhcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2Nyb2xsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgY2FsYygodmFyKC0taGVhZGVyLWhlaWdodC1pbikgLSAwLjkpICogMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1zY3JvbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSAqIDEwMHZoICsgMzAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1oZWlnaHQtb3V0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWhlaWdodC1pbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1mYWRlLW91dDogMTtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1mYWRlLWluOiAwO1xyXG4gICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBTZXR1cEJhc2ljU2Nyb2xsKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMHZoJyxcclxuICAgICAgICAgICAgdG86ICcyMDB2aCcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItaGVpZ2h0LW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItaGVpZ2h0LWluJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRmFkZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZyb206ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMTUwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWZhZGUtb3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLWluJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhlYWRlckhlaWdodC5zdGFydCgpO1xyXG4gICAgICAgIGhlYWRlckZhZGUuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2V0dXBCYXNpY1Njcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"));
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
//# sourceMappingURL=index.js.1634458518e89355e1db.hot-update.js.map