webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BusinessCard.js":
/*!************************************!*\
  !*** ./components/BusinessCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Projects\\volleio.github.io.git\\components\\BusinessCard.js";




var BusinessCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BusinessCard, _Component);

  function BusinessCard(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BusinessCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BusinessCard).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BusinessCard, [{
    key: "onIconMouseOver",
    value: function onIconMouseOver(evt) {
      var icon = evt.target;
      var iconBracketGroup = icon.closest(".icon-bracket-group");
      var iconLabel = icon.closest(".business-card__label");
      iconBracketGroup.classList.add("hover");
      iconLabel.classList.add("hover");
      var businessCardContainer = icon.closest(".business-card-container");

      if (icon.classList.contains("icon--email")) {
        var textAt = businessCardContainer.querySelector(".business-card___text__at");
        textAt.classList.add("selected");
      } else if (icon.classList.contains("icon--me")) {
        var textVolleio = businessCardContainer.querySelector(".business-card___text__volleio");
        textVolleio.classList.remove("selected");
      } else if (icon.classList.contains("icon--insta") || icon.classList.contains("icon--twitter") || icon.classList.contains("icon--github") || icon.classList.contains("icon--linkedin")) {
        var textLucas = businessCardContainer.querySelector(".business-card___text__lucas");
        textLucas.classList.remove("selected");
      }
    }
  }, {
    key: "onIconMouseOut",
    value: function onIconMouseOut(evt) {
      var icon = evt.target;
      var iconBracketGroup = icon.closest(".icon-bracket-group");
      var iconLabel = icon.closest(".business-card__label");
      iconBracketGroup.classList.remove("hover");
      iconLabel.classList.remove("hover");
      var businessCardContainer = icon.closest(".business-card-container");

      if (icon.classList.contains("icon--email")) {
        var textAt = businessCardContainer.querySelector(".business-card___text__at");
        textAt.classList.remove("selected");
      } else if (icon.classList.contains("icon--me")) {
        var textVolleio = businessCardContainer.querySelector(".business-card___text__volleio");
        textVolleio.classList.add("selected");
      } else if (icon.classList.contains("icon--insta") || icon.classList.contains("icon--twitter") || icon.classList.contains("icon--github") || icon.classList.contains("icon--linkedin")) {
        var textLucas = businessCardContainer.querySelector(".business-card___text__lucas");
        textLucas.classList.add("selected");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "business-card-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "business-card__label business-card__label--top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "mailto:Lucas@Volle.io",
        className: "jsx-3147240442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-3147240442" + " " + "icon icon--email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "business-card__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3147240442" + " " + "business-card___text__lucas selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Lucas"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3147240442" + " " + "business-card___text__at",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "@"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3147240442" + " " + "business-card___text__volleio selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Volle.io")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "business-card__label-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "business-card__label business-card__label--bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-3147240442" + " " + "icon icon--me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "business-card__label business-card__label--bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket-group bracket-group--even",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.instagram.com/volle.io/",
        className: "jsx-3147240442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-3147240442" + " " + "icon icon--insta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.twitter.com/volleio",
        className: "jsx-3147240442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-3147240442" + " " + "icon icon--twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/volleio",
        className: "jsx-3147240442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-3147240442" + " " + "icon icon--github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3147240442" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/volleio/",
        className: "jsx-3147240442",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-3147240442" + " " + "icon icon--linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3147240442",
        __self: this
      }, ".business-card-container.jsx-3147240442{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;height:250px;-webkit-transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));margin:auto;padding:4px 40px 0 40px;background-color:rgba(255,255,255,var(--header-fade-out));box-shadow:0 1px 4px 2px rgba(50,50,50,calc(var(--header-fade-out) / 2 - 0.3));border-radius:2px;-webkit-transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;}@media (min-width:900px){.business-card-container.jsx-3147240442{-webkit-transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}@media (max-width:550px){.business-card-container.jsx-3147240442{-webkit-transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}@media (max-width:450px){.business-card-container.jsx-3147240442{-webkit-transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}.business-card__text.jsx-3147240442{position:absolute;font-weight:300;font-size:67px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;margin-top:-3px;color:#C4C4C4;}.business-card__text.jsx-3147240442>.selected.jsx-3147240442{color:#323232;-webkit-transition:color 0.1s ease-in-out;transition:color 0.1s ease-in-out;}.business-card__label-group.jsx-3147240442{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:400px;}.business-card__label.jsx-3147240442{opacity:var(--header-fade-out);}.business-card__label--top.jsx-3147240442{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:400px;margin-bottom:90px;}.business-card__label--bottom.jsx-3147240442{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.business-card__label--bottom.jsx-3147240442:first-child{width:146px;}.business-card__label--bottom.jsx-3147240442:last-child{width:194px;}.bracket-group.jsx-3147240442{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.bracket-group.bracket-group--even.jsx-3147240442{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-bracket-group.jsx-3147240442{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.bracket.jsx-3147240442{background-color:#C4C4C4;-webkit-transition:background-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out;}.bracket--vert1.jsx-3147240442{width:2px;height:8px;}.icon-bracket-group.hover.jsx-3147240442>.bracket--vert1.jsx-3147240442{background-color:#888888;}.bracket--vert2.jsx-3147240442{width:2px;height:10px;}.business-card__label.hover.jsx-3147240442 .bracket--vert2.jsx-3147240442{background-color:#888888;}.bracket--horiz.jsx-3147240442{width:100%;height:2px;}.business-card__label.hover.jsx-3147240442 .bracket--horiz.jsx-3147240442{background-color:#888888;}.icon.jsx-3147240442{width:24px;height:24px;background-repeat:no-repeat;background-position:center;background-size:contain;box-sizing:content-box;border:8px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out;cursor:pointer;}.icon-bracket-group.hover.jsx-3147240442 .icon.jsx-3147240442{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.icon--email.jsx-3147240442{background-image:url(\"/static/icon-email.svg\");}.icon-bracket-group.hover.jsx-3147240442 .icon--email.jsx-3147240442{background-image:url(\"/static/icon-email-selected.svg\");}.icon--me.jsx-3147240442{background-image:url(\"/static/icon-me.svg\");}.icon-bracket-group.hover.jsx-3147240442 .icon--me.jsx-3147240442{background-image:url(\"/static/icon-me-selected.svg\");}.icon--insta.jsx-3147240442{background-image:url(\"/static/icon-insta.svg\");}.icon-bracket-group.hover.jsx-3147240442 .icon--insta.jsx-3147240442{background-image:url(\"/static/icon-insta-selected.svg\");}.icon--twitter.jsx-3147240442{background-image:url(\"/static/icon-twitter.svg\");}.icon-bracket-group.hover.jsx-3147240442 .icon--twitter.jsx-3147240442{background-image:url(\"/static/icon-twitter-selected.svg\");}.icon--github.jsx-3147240442{background-image:url(\"/static/icon-github.svg\");}.icon-bracket-group.hover.jsx-3147240442 .icon--github.jsx-3147240442{background-image:url(\"/static/icon-github-selected.svg\");}.icon--linkedin.jsx-3147240442{background-image:url(\"/static/icon-linkedin.svg\");}.icon-bracket-group.hover.jsx-3147240442 .icon--linkedin.jsx-3147240442{background-image:url(\"/static/icon-linkedin-selected.svg\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxCdXNpbmVzc0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lTLEFBRytCLEFBdUI0QyxBQU9BLEFBT0EsQUFTNUMsQUFVSixBQU1ELEFBTWtCLEFBSWxCLEFBUUEsQUFNRCxBQUlBLEFBSUQsQUFNWSxBQUlWLEFBTVksQUFLZixBQUtlLEFBSWYsQUFLZSxBQUlkLEFBS2MsQUFJZCxBQWFVLEFBSTBCLEFBR1MsQUFJWixBQUdTLEFBSU4sQUFHUyxBQUlQLEFBR1MsQUFJVixBQUdTLEFBSVAsQUFHUyxVQWpGaEQsQUFTQyxDQTlCQyxBQXVDRixBQVNDLENBeERkLEFBSUEsRUFqQ29DLElBekRyQixBQThDRyxHQXNFbEIsQ0FTQSxBQVNBLENBUzhCLEVBakNpQixBQVUvQyxBQVNBLEFBU0EsTUF0RUEsR0FyQmlCLFVBdUhqQixHQVBBLEFBY0EsQ0FjQSxDQTNJdUIsQUFvSXZCLENBY0EsQ0FsRDZCLEVBeUI3QixHQVBBLEFBY0EsQ0FjQSxDQVBBLENBY0EsZUF2SWdDLEFBVVIsQUFRQSxBQXdCQSxDQW1EeEIsR0FWMEIsT0FsRE0sS0FyQ2hDLEVBekR3QixPQW1HeEIsR0E4Q3lCLHFCQW5DekIsRUFvQytCLHlCQWxHYixFQXdCRyxBQVFBLEFBd0JBLEVBNENhLFlBbEdsQixJQWpEUyxVQWtEekIsU0FXYyxXQWlDZCxDQWhDQSx5QkFzRmlCLGVBQ2pCLElBN0VjLEFBUWQsQUF3QkEsWUEvQnFCLFlBeEVBLE9BeUVyQiw4RUFyREUsQUFPQSxHQU9BLEtBakNZLFlBQ0MsYUFFaUQsa1dBQ2xELFlBQ1ksd0JBRXFDLDBEQUVxQiwrRUFDaEUsa0JBRXFCLHNGQUN6QyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHZvbGxlaW8uZ2l0aHViLmlvLmdpdFxcY29tcG9uZW50c1xcQnVzaW5lc3NDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY2xhc3MgQnVzaW5lc3NDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBvbkljb25Nb3VzZU92ZXIoZXZ0KSB7XHJcbiAgICBjb25zdCBpY29uID0gZXZ0LnRhcmdldDtcclxuICAgIGNvbnN0IGljb25CcmFja2V0R3JvdXAgPSBpY29uLmNsb3Nlc3QoXCIuaWNvbi1icmFja2V0LWdyb3VwXCIpO1xyXG4gICAgY29uc3QgaWNvbkxhYmVsID0gaWNvbi5jbG9zZXN0KFwiLmJ1c2luZXNzLWNhcmRfX2xhYmVsXCIpO1xyXG4gICAgaWNvbkJyYWNrZXRHcm91cC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICBpY29uTGFiZWwuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGljb24uY2xvc2VzdChcIi5idXNpbmVzcy1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWVtYWlsXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0QXQgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fYXRcIik7XHJcbiAgICAgIHRleHRBdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLW1lXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0Vm9sbGVpbyA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X192b2xsZWlvXCIpO1xyXG4gICAgICB0ZXh0Vm9sbGVpby5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWluc3RhXCIpIHx8IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tdHdpdHRlclwiKSB8fFxyXG4gICAgICBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWdpdGh1YlwiKSB8fCBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWxpbmtlZGluXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0THVjYXMgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fbHVjYXNcIik7XHJcbiAgICAgIHRleHRMdWNhcy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkljb25Nb3VzZU91dChldnQpIHtcclxuICAgIGNvbnN0IGljb24gPSBldnQudGFyZ2V0O1xyXG4gICAgY29uc3QgaWNvbkJyYWNrZXRHcm91cCA9IGljb24uY2xvc2VzdChcIi5pY29uLWJyYWNrZXQtZ3JvdXBcIik7XHJcbiAgICBjb25zdCBpY29uTGFiZWwgPSBpY29uLmNsb3Nlc3QoXCIuYnVzaW5lc3MtY2FyZF9fbGFiZWxcIik7XHJcbiAgICBpY29uQnJhY2tldEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgIGljb25MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcblxyXG4gICAgY29uc3QgYnVzaW5lc3NDYXJkQ29udGFpbmVyID0gaWNvbi5jbG9zZXN0KFwiLmJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tZW1haWxcIikpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRleHRBdCA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X19hdFwiKTtcclxuICAgICAgdGV4dEF0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tbWVcIikpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRleHRWb2xsZWlvID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZF9fX3RleHRfX3ZvbGxlaW9cIik7XHJcbiAgICAgIHRleHRWb2xsZWlvLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0taW5zdGFcIikgfHwgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS10d2l0dGVyXCIpIHx8XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tZ2l0aHViXCIpIHx8IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tbGlua2VkaW5cIikpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRleHRMdWNhcyA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X19sdWNhc1wiKTtcclxuICAgICAgdGV4dEx1Y2FzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX2xhYmVsIGJ1c2luZXNzLWNhcmRfX2xhYmVsLS10b3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86THVjYXNAVm9sbGUuaW9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0tZW1haWxcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0taG9yaXpcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX3RleHRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19fdGV4dF9fbHVjYXMgc2VsZWN0ZWRcIj5MdWNhczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19fdGV4dF9fYXRcIj5APC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX190ZXh0X192b2xsZWlvIHNlbGVjdGVkXCI+Vm9sbGUuaW88L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19sYWJlbC1ncm91cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19sYWJlbCBidXNpbmVzcy1jYXJkX19sYWJlbC0tYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLWhvcml6XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLW1lXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZF9fbGFiZWwgYnVzaW5lc3MtY2FyZF9fbGFiZWwtLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS1ob3JpelwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQtZ3JvdXAgYnJhY2tldC1ncm91cC0tZXZlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3ZvbGxlLmlvL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0taW5zdGFcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS92b2xsZWlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS10d2l0dGVyXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGxlaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLWdpdGh1YlwiIG9uTW91c2VPdmVyPXt0aGlzLm9uSWNvbk1vdXNlT3Zlcn0gb25Nb3VzZU91dD17dGhpcy5vbkljb25Nb3VzZU91dH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92b2xsZWlvL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0tbGlua2VkaW5cIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjQgKiB2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkpKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtMTQwcHggKiB2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSkpO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA0MHB4IDAgNDBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0taGVhZGVyLWZhZGUtb3V0KSk7XHJcblxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgY2FsYyh2YXIoLS1oZWFkZXItZmFkZS1vdXQpIC8gMiAtIDAuMykpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjYgKiB2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkpKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtMTQwcHggKiB2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjIgKiB2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkpKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtMTQwcHggKiB2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjAyICogdmFyKC0taGVhZGVyLWhlaWdodC1vdXQpKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGNhbGMoLTE0MHB4ICogdmFyKC0taGVhZGVyLWhlaWdodC1pbikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHsvKiAuYnVzaW5lc3MtY2FyZC1jb250YWluZXI6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDJweCByZ2JhKDUwLCA1MCwgNTAsIGNhbGModmFyKC0taGVhZGVyLWZhZGUtb3V0KSAvIDIgLSAwLjMpKTtcclxuICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX190ZXh0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY3cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX190ZXh0ID4gLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMjMyMzI7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC1ncm91cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWhlYWRlci1mYWRlLW91dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLS10b3Age1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLS1ib3R0b20ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC0tYm90dG9tOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC0tYm90dG9tOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJyYWNrZXQtZ3JvdXAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5icmFja2V0LWdyb3VwLmJyYWNrZXQtZ3JvdXAtLWV2ZW4ge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnJhY2tldCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnJhY2tldC0tdmVydDEge1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyID4gLmJyYWNrZXQtLXZlcnQxIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnJhY2tldC0tdmVydDIge1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLmhvdmVyIC5icmFja2V0LS12ZXJ0MiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg4ODg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJyYWNrZXQtLWhvcml6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC5ob3ZlciAuYnJhY2tldC0taG9yaXoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi0tZW1haWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tZW1haWwuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbi0tZW1haWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tZW1haWwtc2VsZWN0ZWQuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLS1tZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1tZS5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uLS1tZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1tZS1zZWxlY3RlZC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tLWluc3RhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWluc3RhLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24tLWluc3RhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWluc3RhLXNlbGVjdGVkLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi0tdHdpdHRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi10d2l0dGVyLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24tLXR3aXR0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tdHdpdHRlci1zZWxlY3RlZC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tLWdpdGh1YiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1naXRodWIuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbi0tZ2l0aHViIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWdpdGh1Yi1zZWxlY3RlZC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tLWxpbmtlZGluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWxpbmtlZGluLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24tLWxpbmtlZGluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWxpbmtlZGluLXNlbGVjdGVkLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NDYXJkOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\BusinessCard.js */"));
    }
  }]);

  return BusinessCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BusinessCard);

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\volleio.github.io.git\\components\\Card.js";


function Card(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-271478469" + " " + "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-271478469" + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-271478469",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-271478469" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "271478469",
    __self: this
  }, ".card-container.jsx-271478469{padding:16px;margin:16px;max-width:400px;max-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-shadow:0 1px 4px 2px rgba(50,50,50,0.1);border:1px solid rgba(50,50,50,0.1);border-radius:2px;}.card-content.jsx-271478469{font-size:1em;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdTLEFBRzBCLEFBaUJDLGFBaEJILENBaUJHLFdBaEJFLEdBaUJsQixhQWhCbUIsaUJBQ0osMEVBQ1MsOEVBRXlCLDRDQUNSLG9DQUNyQixrQkFDcEIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgXHRtYXJnaW46IDE2cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLWhlYWRlciB7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9Il19 */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Card.js */"));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var basicscroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! basicscroll */ "./node_modules/basicscroll/dist/basicScroll.min.js");
/* harmony import */ var basicscroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(basicscroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BusinessCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BusinessCard */ "./components/BusinessCard.js");





var _jsxFileName = "C:\\Projects\\volleio.github.io.git\\components\\Header.js";






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3222833609" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3222833609" + " " + "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BusinessCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3222833609" + " " + "header-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3222833609",
        __self: this
      }, ".header-container.jsx-3222833609{position:fixed;width:100%;height:calc(var(--header-height-out) * 100vh);min-height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#FFF;box-shadow:0 0 10px rgba(0,0,0,calc((var(--header-height-in) - 0.9) * 2));}.header-scroll.jsx-3222833609{width:100%;height:calc(var(--header-height-out) * 100vh + 300px);min-height:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUI0QixBQUd3QyxBQVlKLFdBQzJDLElBWjNDLFdBQ21DLHVDQVk3QixPQVhELFVBWXBCLE1BWGlCLDBFQUNVLG1HQUVELHNCQUUzQiwwRUFBQyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHZvbGxlaW8uZ2l0aHViLmlvLmdpdFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBiYXNpY1Njcm9sbCBmcm9tICdiYXNpY3Njcm9sbCc7XHJcbmltcG9ydCBCdXNpbmVzc0NhcmQgZnJvbSAnLi9CdXNpbmVzc0NhcmQnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXNpbmVzc0NhcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2Nyb2xsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgY2FsYygodmFyKC0taGVhZGVyLWhlaWdodC1pbikgLSAwLjkpICogMikpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXNjcm9sbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmggKyAzMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBTZXR1cEJhc2ljU2Nyb2xsKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMHZoJyxcclxuICAgICAgICAgICAgdG86ICcyMDB2aCcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItaGVpZ2h0LW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItaGVpZ2h0LWluJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRmFkZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZyb206ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMTUwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWZhZGUtb3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLWluJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhlYWRlckhlaWdodC5zdGFydCgpO1xyXG4gICAgICAgIGhlYWRlckZhZGUuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2V0dXBCYXNpY1Njcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"));
    }
  }, {
    key: "SetupBasicScroll",
    value: function SetupBasicScroll() {
      var headerHeight = basicscroll__WEBPACK_IMPORTED_MODULE_8__["create"]({
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
      var headerFade = basicscroll__WEBPACK_IMPORTED_MODULE_8__["create"]({
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
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./components/Card.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Projects\\volleio.github.io.git\\pages\\index.js";





function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2488295363" + " " + "card-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Hi!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Lucas is working as a Software Engineer at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://www.exagoinc.com/",
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Exago"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "He graduated from ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://rpi.edu/",
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Rensselaer Polytechnic Institute"), " in 2017 with a B.S. in Computer Science. His most recent work may be viewed on his ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/volleio",
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Github profile"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Mistah man up t' Moosetown bookin' it nummah way up north. Potatoes bang a left yahd leaf peepahs dingy, bub clam chowdah up t' geez bud huck. Hum-dingah chimbly can't get theyah from heeyah rhubaahb lobstah paut If you can't stand the wintah you don't deserve the summah Bean's wicked cunnin', way up north swampdonkey stove-up Have a good one. well theyah rig up crittah. 'Roostik crittah Bangoah chimbly sawr chimbly huck. Hawsun around p'dayduhs out in th' willie-wacks, unthaw pig fat door-yahd, Mahdin's scrod Katahdin, Saddee wee bit nippy nummah Outta Staydahs.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Something Else",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2488295363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Noseeum Mount Dessuht Hammah Gohd Dammah, feeder' the beans unthaw tube steak batrees Powrtland tube steak, smokie Laum Ipsum bub yow uns sawr Yessah mistah man Mount Dessuht Have a good one.. Rig up The 'Gash some eleghant Outta Staydahs Laum Ipsum wreckah Loyston-Ahban railed 'em, Ahcadiuh Katahdin ayuh. Some wicked Chundah. Gohd dammah. back woods Chundah. Gohd dammah. Moody's. Wicked pissah hum-dingah rig up mugup Mahdin's well theyah The County Powrtland Museum of Aht hahd tellin' not knowin', no-see-um hoppa Have a good one.. Aht back woods ayuh hahd tellin' not knowin' down east You is sum wicked suhmart aht down east Shit the bed. Feed 'uh the hot suppah., stove-up Hold'er Newt she's, heddin for da ruhbarb! nummah than a faht aht."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2488295363",
    __self: this
  }, ".card-grid.jsx-2488295363{display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));grid-gap:0;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:16px;justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUcwQixhQUMrQywwREFDakQsV0FDUyxpR0FDUixZQUNTLHFCQUN2QiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHZvbGxlaW8uZ2l0aHViLmlvLmdpdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWdyaWRcIj5cclxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwiSGkhXCI+XHJcbiAgICAgICAgICAgICAgPHA+THVjYXMgaXMgd29ya2luZyBhcyBhIFNvZnR3YXJlIEVuZ2luZWVyIGF0IDxhIGhyZWY9XCJodHRwOi8vd3d3LmV4YWdvaW5jLmNvbS9cIj5FeGFnbzwvYT4uPC9wPlxyXG4gICAgICAgICAgICAgIDxwPkhlIGdyYWR1YXRlZCBmcm9tIDxhIGhyZWY9XCJodHRwOi8vcnBpLmVkdS9cIj5SZW5zc2VsYWVyIFBvbHl0ZWNobmljIEluc3RpdHV0ZTwvYT4gaW4gMjAxNyB3aXRoIGEgQi5TLiBpbiBDb21wdXRlciBTY2llbmNlLlxyXG4gICAgICAgICAgICAgIEhpcyBtb3N0IHJlY2VudCB3b3JrIG1heSBiZSB2aWV3ZWQgb24gaGlzIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdm9sbGVpb1wiPkdpdGh1YiBwcm9maWxlPC9hPi48L3A+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTWlzdGFoIG1hbiB1cCB0JyBNb29zZXRvd24gYm9va2luJyBpdCBudW1tYWggd2F5IHVwIG5vcnRoLiBQb3RhdG9lcyBiYW5nIGEgbGVmdCB5YWhkIGxlYWYgcGVlcGFocyBkaW5neSwgYnViIGNsYW0gY2hvd2RhaCB1cCB0JyBnZWV6IGJ1ZCBodWNrLiBIdW0tZGluZ2FoIGNoaW1ibHkgY2FuJ3QgZ2V0IHRoZXlhaCBmcm9tIGhlZXlhaCByaHViYWFoYiBsb2JzdGFoIHBhdXQgSWYgeW91IGNhbid0IHN0YW5kIHRoZSB3aW50YWggeW91IGRvbid0IGRlc2VydmUgdGhlIHN1bW1haCBCZWFuJ3Mgd2lja2VkIGN1bm5pbicsIHdheSB1cCBub3J0aCBzd2FtcGRvbmtleSBzdG92ZS11cCBIYXZlIGEgZ29vZCBvbmUuIHdlbGwgdGhleWFoIHJpZyB1cCBjcml0dGFoLiAnUm9vc3RpayBjcml0dGFoIEJhbmdvYWggY2hpbWJseSBzYXdyIGNoaW1ibHkgaHVjay4gSGF3c3VuIGFyb3VuZCBwJ2RheWR1aHMgb3V0IGluIHRoJyB3aWxsaWUtd2Fja3MsIHVudGhhdyBwaWcgZmF0IGRvb3IteWFoZCwgTWFoZGluJ3Mgc2Nyb2QgS2F0YWhkaW4sIFNhZGRlZSB3ZWUgYml0IG5pcHB5IG51bW1haCBPdXR0YSBTdGF5ZGFocy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlNvbWV0aGluZyBFbHNlXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBOb3NlZXVtIE1vdW50IERlc3N1aHQgSGFtbWFoIEdvaGQgRGFtbWFoLCBmZWVkZXInIHRoZSBiZWFucyB1bnRoYXcgdHViZSBzdGVhayBiYXRyZWVzIFBvd3J0bGFuZCB0dWJlIHN0ZWFrLCBzbW9raWUgTGF1bSBJcHN1bSBidWIgeW93IHVucyBzYXdyIFllc3NhaCBtaXN0YWggbWFuIE1vdW50IERlc3N1aHQgSGF2ZSBhIGdvb2Qgb25lLi4gUmlnIHVwIFRoZSAnR2FzaCBzb21lIGVsZWdoYW50IE91dHRhIFN0YXlkYWhzIExhdW0gSXBzdW0gd3JlY2thaCBMb3lzdG9uLUFoYmFuIHJhaWxlZCAnZW0sIEFoY2FkaXVoIEthdGFoZGluIGF5dWguIFNvbWUgd2lja2VkIENodW5kYWguIEdvaGQgZGFtbWFoLiBiYWNrIHdvb2RzIENodW5kYWguIEdvaGQgZGFtbWFoLiBNb29keSdzLiBXaWNrZWQgcGlzc2FoIGh1bS1kaW5nYWggcmlnIHVwIG11Z3VwIE1haGRpbidzIHdlbGwgdGhleWFoIFRoZSBDb3VudHkgUG93cnRsYW5kIE11c2V1bSBvZiBBaHQgaGFoZCB0ZWxsaW4nIG5vdCBrbm93aW4nLCBuby1zZWUtdW0gaG9wcGEgSGF2ZSBhIGdvb2Qgb25lLi4gQWh0IGJhY2sgd29vZHMgYXl1aCBoYWhkIHRlbGxpbicgbm90IGtub3dpbicgZG93biBlYXN0IFlvdSBpcyBzdW0gd2lja2VkIHN1aG1hcnQgYWh0IGRvd24gZWFzdCBTaGl0IHRoZSBiZWQuIEZlZWQgJ3VoIHRoZSBob3Qgc3VwcGFoLiwgc3RvdmUtdXAgSG9sZCdlciBOZXd0IHNoZSdzLCBoZWRkaW4gZm9yIGRhIHJ1aGJhcmIhIG51bW1haCB0aGFuIGEgZmFodCBhaHQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY2FyZC1ncmlkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTZweDtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfSJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\pages\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.b00853819c3b0b6b6fb9.hot-update.js.map