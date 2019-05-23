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
    key: "onMouseEnterContainer",
    value: function onMouseEnterContainer(evt) {
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
      businessCardContainer.style.transition = "transform 0.1s ease-in-out";
    }
  }, {
    key: "onMouseLeaveContainer",
    value: function onMouseLeaveContainer(evt) {
      var headerContainer = evt.currentTarget;
      headerContainer.style.setProperty("--header-height-out", "");
      headerContainer.style.setProperty("--header-height-in", "");
      headerContainer.style.setProperty("--header-fade-out", "");
      headerContainer.style.setProperty("--header-fade-in", "");
      headerContainer.style.height = "";
      headerContainer.style.overflow = "";
      var businessCardContainer = headerContainer.querySelector(".business-card-container");
      var businessCardSizer = businessCardContainer.querySelector(".business-card-sizer");
      businessCardContainer.style.width = "";
      businessCardSizer.style.width = "";
      businessCardContainer.style.transition = "transform 0.1s ease-in-out";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2709441606" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onMouseEnter: this.onMouseEnterContainer,
        onMouseLeave: this.onMouseLeaveContainer,
        className: "jsx-2709441606" + " " + "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BusinessCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2709441606" + " " + "header-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2418942475",
        __self: this
      }, ".header-container.jsx-2709441606{position:fixed;width:100%;height:calc(var(--header-height-out) * 100vh);min-height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;background-color:#FFF;box-shadow:0 0 10px rgba(0,0,0,calc((var(--header-height-in) - 0.9) * 2));}.header-scroll.jsx-2709441606{width:100%;height:calc(var(--header-height-out) * 100vh + 300px);min-height:280px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkQ0QixBQUd3QyxBQWFKLFdBQzJDLElBYjNDLFdBQ21DLHVDQWE3QixPQVpELFVBYXBCLE1BWmlCLDBFQUNVLG1HQUNQLGdCQUVNLHNCQUN1RCwwRUFDakYiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyQ29udGFpbmVyKGV2dClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBpZiAocGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0taGVhZGVyLWhlaWdodC1vdXRcIikpICE9IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiLCBcIjAuM1wiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtaW5cIiwgXCIwLjdcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1vdXRcIiwgXCIxXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWZhZGUtaW5cIiwgXCIwXCIpO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGhlYWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZFNpemVyID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZC1zaXplclwiKTtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUud2lkdGggPSBoZWFkZXJDb250YWluZXIub2Zmc2V0V2lkdGggKiAyICsgXCJweFwiO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZFNpemVyLnN0eWxlLndpZHRoID0gaGVhZGVyQ29udGFpbmVyLm9mZnNldFdpZHRoICogMiArIFwicHhcIjtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXRcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTGVhdmVDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGV2dC5jdXJyZW50VGFyZ2V0OyAgICAgICAgXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiLCBcIlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtaW5cIiwgXCJcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1vdXRcIiwgXCJcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1pblwiLCBcIlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGhlYWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZFNpemVyID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZC1zaXplclwiKTtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUud2lkdGggPSBcIlwiO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZFNpemVyLnN0eWxlLndpZHRoID0gXCJcIjtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXRcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCIgb25Nb3VzZUVudGVyPXt0aGlzLm9uTW91c2VFbnRlckNvbnRhaW5lcn0gb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1c2luZXNzQ2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zY3JvbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkgKiAxMDB2aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCBjYWxjKCh2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSAtIDAuOSkgKiAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXNjcm9sbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmggKyAzMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWhlaWdodC1vdXQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItaGVpZ2h0LWluOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWZhZGUtb3V0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWZhZGUtaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFNldHVwQmFzaWNTY3JvbGwoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZyb206ICcwdmgnLFxyXG4gICAgICAgICAgICB0bzogJzIwMHZoJyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1oZWlnaHQtb3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1oZWlnaHQtaW4nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoZWFkZXJGYWRlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogJzEwMHZoJyxcclxuICAgICAgICAgICAgdG86ICcxNTB2aCcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItZmFkZS1vdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWZhZGUtaW4nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGVhZGVySGVpZ2h0LnN0YXJ0KCk7XHJcbiAgICAgICAgaGVhZGVyRmFkZS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5TZXR1cEJhc2ljU2Nyb2xsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1428398948",
        __self: this
      }, "html{--header-height-out:1;--header-height-in:0;--header-fade-out:1;--header-fade-in:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VtQyxBQUcyQyxzQkFDRCxxQkFDRCxvQkFDRCxtQkFDckIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyQ29udGFpbmVyKGV2dClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBpZiAocGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0taGVhZGVyLWhlaWdodC1vdXRcIikpICE9IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiLCBcIjAuM1wiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtaW5cIiwgXCIwLjdcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1vdXRcIiwgXCIxXCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyLWZhZGUtaW5cIiwgXCIwXCIpO1xyXG5cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGhlYWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZFNpemVyID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZC1zaXplclwiKTtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUud2lkdGggPSBoZWFkZXJDb250YWluZXIub2Zmc2V0V2lkdGggKiAyICsgXCJweFwiO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZFNpemVyLnN0eWxlLndpZHRoID0gaGVhZGVyQ29udGFpbmVyLm9mZnNldFdpZHRoICogMiArIFwicHhcIjtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXRcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTGVhdmVDb250YWluZXIoZXZ0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGV2dC5jdXJyZW50VGFyZ2V0OyAgICAgICAgXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItaGVpZ2h0LW91dFwiLCBcIlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlci1oZWlnaHQtaW5cIiwgXCJcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1vdXRcIiwgXCJcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXItZmFkZS1pblwiLCBcIlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGhlYWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzQ2FyZFNpemVyID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZC1zaXplclwiKTtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUud2lkdGggPSBcIlwiO1xyXG4gICAgICAgIGJ1c2luZXNzQ2FyZFNpemVyLnN0eWxlLndpZHRoID0gXCJcIjtcclxuICAgICAgICBidXNpbmVzc0NhcmRDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXRcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCIgb25Nb3VzZUVudGVyPXt0aGlzLm9uTW91c2VFbnRlckNvbnRhaW5lcn0gb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1c2luZXNzQ2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zY3JvbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkgKiAxMDB2aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCBjYWxjKCh2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSAtIDAuOSkgKiAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXNjcm9sbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmggKyAzMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWhlaWdodC1vdXQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItaGVpZ2h0LWluOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWZhZGUtb3V0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taGVhZGVyLWZhZGUtaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFNldHVwQmFzaWNTY3JvbGwoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZyb206ICcwdmgnLFxyXG4gICAgICAgICAgICB0bzogJzIwMHZoJyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1oZWlnaHQtb3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1oZWlnaHQtaW4nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoZWFkZXJGYWRlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogJzEwMHZoJyxcclxuICAgICAgICAgICAgdG86ICcxNTB2aCcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItZmFkZS1vdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWZhZGUtaW4nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGVhZGVySGVpZ2h0LnN0YXJ0KCk7XHJcbiAgICAgICAgaGVhZGVyRmFkZS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5TZXR1cEJhc2ljU2Nyb2xsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"));
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
//# sourceMappingURL=index.js.4ee4180530a1144afabe.hot-update.js.map