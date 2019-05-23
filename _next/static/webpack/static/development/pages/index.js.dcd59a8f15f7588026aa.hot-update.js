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
        className: "jsx-129116096" + " " + "business-card-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label business-card__label--top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "mailto:Lucas@Volle.io",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-129116096" + " " + "business-card___text__lucas selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Lucas"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-129116096" + " " + "business-card___text__at",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "@"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-129116096" + " " + "business-card___text__volleio selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Volle.io")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label business-card__label--bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label business-card__label--bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group bracket-group--even",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.instagram.com/volle.io/",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--insta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.twitter.com/volleio",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/volleio",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/volleio/",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "129116096",
        __self: this
      }, ".business-card-container.jsx-129116096{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;height:250px;-webkit-transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));margin:auto;padding:4px 40px 0 40px;background-color:rgba(255,255,255,var(--header-fade-out));box-shadow:0 1px 4px 2px rgba(50,50,50,calc(var(--header-fade-out) / 2 - 0.3));border-radius:2px;-webkit-transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;}@media (min-width:900px){.business-card-container.jsx-129116096{-webkit-transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}@media (max-width:550px){.business-card-container.jsx-129116096{-webkit-transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}@media (max-width:450px){.business-card-container.jsx-129116096{-webkit-transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}.business-card__text.jsx-129116096{position:absolute;font-weight:300;font-size:67px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;margin-top:-3px;color:#C4C4C4;}.business-card__text.jsx-129116096>.selected.jsx-129116096{color:#323232;-webkit-transition:color 0.1s ease-in-out;transition:color 0.1s ease-in-out;}.business-card__label-group.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:400px;}.business-card__label.jsx-129116096{opacity:var(--header-fade-out);}.business-card__label--top.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:400px;margin-bottom:90px;}.business-card__label--bottom.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.business-card__label--bottom.jsx-129116096:first-child{width:146px;}.business-card__label--bottom.jsx-129116096:last-child{width:194px;}.bracket-group.jsx-129116096{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.bracket-group.bracket-group--even.jsx-129116096{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-bracket-group.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.bracket.jsx-129116096{background-color:#C4C4C4;-webkit-transition:background-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out;}.bracket--vert1.jsx-129116096{width:2px;height:8px;}.icon-bracket-group.hover.jsx-129116096>.bracket--vert1.jsx-129116096{background-color:#888888;}.bracket--vert2.jsx-129116096{width:2px;height:10px;}.business-card__label.hover.jsx-129116096 .bracket--vert2.jsx-129116096{background-color:#888888;}.bracket--horiz.jsx-129116096{width:100%;height:2px;}.business-card__label.hover.jsx-129116096 .bracket--horiz.jsx-129116096{background-color:#888888;}.icon.jsx-129116096{width:24px;height:24px;background-repeat:no-repeat;background-position:center;background-size:contain;box-sizing:content-box;border:8px solid transparent;pointer-events:var(--header-fade-disabled);cursor:pointer;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out;}.icon-bracket-group.hover.jsx-129116096 .icon.jsx-129116096{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.icon--email.jsx-129116096{background-image:url(\"/static/icon-email.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--email.jsx-129116096{background-image:url(\"/static/icon-email-selected.svg\");}.icon--me.jsx-129116096{background-image:url(\"/static/icon-me.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--me.jsx-129116096{background-image:url(\"/static/icon-me-selected.svg\");}.icon--insta.jsx-129116096{background-image:url(\"/static/icon-insta.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--insta.jsx-129116096{background-image:url(\"/static/icon-insta-selected.svg\");}.icon--twitter.jsx-129116096{background-image:url(\"/static/icon-twitter.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--twitter.jsx-129116096{background-image:url(\"/static/icon-twitter-selected.svg\");}.icon--github.jsx-129116096{background-image:url(\"/static/icon-github.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--github.jsx-129116096{background-image:url(\"/static/icon-github-selected.svg\");}.icon--linkedin.jsx-129116096{background-image:url(\"/static/icon-linkedin.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--linkedin.jsx-129116096{background-image:url(\"/static/icon-linkedin-selected.svg\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxCdXNpbmVzc0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lTLEFBRytCLEFBdUI0QyxBQU9BLEFBT0EsQUFLNUMsQUFVSixBQU1ELEFBTWtCLEFBSWxCLEFBUUEsQUFNRCxBQUlBLEFBSUQsQUFNWSxBQUlWLEFBTVksQUFLZixBQUtlLEFBSWYsQUFLZSxBQUlkLEFBS2MsQUFJZCxBQWNVLEFBSTBCLEFBR1MsQUFJWixBQUdTLEFBSU4sQUFHUyxBQUlQLEFBR1MsQUFJVixBQUdTLEFBSVAsQUFHUyxVQWxGaEQsQUFTQyxDQTlCQyxBQXVDRixBQVNDLENBeERkLEFBSUEsRUFqQ29DLElBckRyQixBQTBDRyxHQXNFbEIsQ0FTQSxBQVNBLENBUzhCLEVBakNpQixBQVUvQyxBQVNBLEFBU0EsTUF0RUEsR0FyQmlCLFVBd0hqQixHQVBBLEFBY0EsQ0FjQSxDQTVJdUIsQUFxSXZCLENBY0EsQ0FuRDZCLEVBMEI3QixHQVBBLEFBY0EsQ0FjQSxDQVBBLENBY0EsZUF4SWdDLEFBVVIsQUFRQSxBQXdCQSxDQW9EeEIsR0FYMEIsT0FsRE0sS0FyQ2hDLEVBckR3QixPQStGeEIsR0E4Q3lCLHFCQW5DekIsRUFvQytCLHlCQWxHYixFQXdCRyxBQVFBLEFBd0JBLEVBNEN3QixZQWxHN0IsSUE3Q1MsVUE4Q3pCLFNBV2MsUUF1RkcsR0F0RGpCLENBaENBLFdBdUZrQyxpQ0E3RXBCLEFBUWQsQUF3QkEsWUEvQnFCLFlBcEVBLE9BcUVyQixRQTRFQSxzRUE3SEUsQUFPQSxHQU9BLEtBakNZLFlBQ0MsYUFFaUQsa1dBQ2xELFlBQ1ksd0JBRXFDLDBEQUVxQiwrRUFDaEUsa0JBRXFCLHNGQUN6QyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHZvbGxlaW8uZ2l0aHViLmlvLmdpdFxcY29tcG9uZW50c1xcQnVzaW5lc3NDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY2xhc3MgQnVzaW5lc3NDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBvbkljb25Nb3VzZU92ZXIoZXZ0KSB7XHJcbiAgICBjb25zdCBpY29uID0gZXZ0LnRhcmdldDtcclxuICAgIGNvbnN0IGljb25CcmFja2V0R3JvdXAgPSBpY29uLmNsb3Nlc3QoXCIuaWNvbi1icmFja2V0LWdyb3VwXCIpO1xyXG4gICAgY29uc3QgaWNvbkxhYmVsID0gaWNvbi5jbG9zZXN0KFwiLmJ1c2luZXNzLWNhcmRfX2xhYmVsXCIpO1xyXG4gICAgaWNvbkJyYWNrZXRHcm91cC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICBpY29uTGFiZWwuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGljb24uY2xvc2VzdChcIi5idXNpbmVzcy1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWVtYWlsXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0QXQgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fYXRcIik7XHJcbiAgICAgIHRleHRBdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLW1lXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0Vm9sbGVpbyA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X192b2xsZWlvXCIpO1xyXG4gICAgICB0ZXh0Vm9sbGVpby5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWluc3RhXCIpIHx8IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tdHdpdHRlclwiKSB8fFxyXG4gICAgICBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWdpdGh1YlwiKSB8fCBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWxpbmtlZGluXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0THVjYXMgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fbHVjYXNcIik7XHJcbiAgICAgIHRleHRMdWNhcy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkljb25Nb3VzZU91dChldnQpIHtcclxuICAgIGNvbnN0IGljb24gPSBldnQudGFyZ2V0O1xyXG4gICAgY29uc3QgaWNvbkJyYWNrZXRHcm91cCA9IGljb24uY2xvc2VzdChcIi5pY29uLWJyYWNrZXQtZ3JvdXBcIik7XHJcbiAgICBjb25zdCBpY29uTGFiZWwgPSBpY29uLmNsb3Nlc3QoXCIuYnVzaW5lc3MtY2FyZF9fbGFiZWxcIik7XHJcbiAgICBpY29uQnJhY2tldEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgIGljb25MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcblxyXG4gICAgY29uc3QgYnVzaW5lc3NDYXJkQ29udGFpbmVyID0gaWNvbi5jbG9zZXN0KFwiLmJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tZW1haWxcIikpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRleHRBdCA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X19hdFwiKTtcclxuICAgICAgdGV4dEF0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tbWVcIikpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRleHRWb2xsZWlvID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZF9fX3RleHRfX3ZvbGxlaW9cIik7XHJcbiAgICAgIHRleHRWb2xsZWlvLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0taW5zdGFcIikgfHwgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS10d2l0dGVyXCIpIHx8XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tZ2l0aHViXCIpIHx8IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tbGlua2VkaW5cIikpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRleHRMdWNhcyA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X19sdWNhc1wiKTtcclxuICAgICAgdGV4dEx1Y2FzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX2xhYmVsIGJ1c2luZXNzLWNhcmRfX2xhYmVsLS10b3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86THVjYXNAVm9sbGUuaW9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0tZW1haWxcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0taG9yaXpcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX3RleHRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19fdGV4dF9fbHVjYXMgc2VsZWN0ZWRcIj5MdWNhczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19fdGV4dF9fYXRcIj5APC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX190ZXh0X192b2xsZWlvIHNlbGVjdGVkXCI+Vm9sbGUuaW88L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19sYWJlbC1ncm91cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19sYWJlbCBidXNpbmVzcy1jYXJkX19sYWJlbC0tYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLWhvcml6XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLW1lXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZF9fbGFiZWwgYnVzaW5lc3MtY2FyZF9fbGFiZWwtLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS1ob3JpelwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQtZ3JvdXAgYnJhY2tldC1ncm91cC0tZXZlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3ZvbGxlLmlvL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0taW5zdGFcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS92b2xsZWlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS10d2l0dGVyXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGxlaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLWdpdGh1YlwiIG9uTW91c2VPdmVyPXt0aGlzLm9uSWNvbk1vdXNlT3Zlcn0gb25Nb3VzZU91dD17dGhpcy5vbkljb25Nb3VzZU91dH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92b2xsZWlvL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0tbGlua2VkaW5cIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjQgKiB2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkpKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtMTQwcHggKiB2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSkpO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA0MHB4IDAgNDBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0taGVhZGVyLWZhZGUtb3V0KSk7XHJcblxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgY2FsYyh2YXIoLS1oZWFkZXItZmFkZS1vdXQpIC8gMiAtIDAuMykpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjYgKiB2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkpKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtMTQwcHggKiB2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjIgKiB2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkpKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtMTQwcHggKiB2YXIoLS1oZWFkZXItaGVpZ2h0LWluKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgIC5idXNpbmVzcy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDAuNiArICgwLjAyICogdmFyKC0taGVhZGVyLWhlaWdodC1vdXQpKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGNhbGMoLTE0MHB4ICogdmFyKC0taGVhZGVyLWhlaWdodC1pbikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fdGV4dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2N3B4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI0M0QzRDNDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fdGV4dCA+IC5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjMyO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwtZ3JvdXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1oZWFkZXItZmFkZS1vdXQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC0tdG9wIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC0tYm90dG9tIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwtLWJvdHRvbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwtLWJvdHRvbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5icmFja2V0LWdyb3VwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnJhY2tldC1ncm91cC5icmFja2V0LWdyb3VwLS1ldmVuIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJyYWNrZXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJyYWNrZXQtLXZlcnQxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciA+IC5icmFja2V0LS12ZXJ0MSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg4ODg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJyYWNrZXQtLXZlcnQyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXNpbmVzcy1jYXJkX19sYWJlbC5ob3ZlciAuYnJhY2tldC0tdmVydDIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5icmFja2V0LS1ob3JpeiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwuaG92ZXIgLmJyYWNrZXQtLWhvcml6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogdmFyKC0taGVhZGVyLWZhZGUtZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tLWVtYWlsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWVtYWlsLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24tLWVtYWlsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWVtYWlsLXNlbGVjdGVkLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi0tbWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tbWUuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbi0tbWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tbWUtc2VsZWN0ZWQuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLS1pbnN0YSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1pbnN0YS5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uLS1pbnN0YSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1pbnN0YS1zZWxlY3RlZC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tLXR3aXR0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tdHdpdHRlci5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uLS10d2l0dGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLXR3aXR0ZXItc2VsZWN0ZWQuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLS1naXRodWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tZ2l0aHViLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24tLWdpdGh1YiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1naXRodWItc2VsZWN0ZWQuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLS1saW5rZWRpbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1saW5rZWRpbi5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uLS1saW5rZWRpbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1saW5rZWRpbi1zZWxlY3RlZC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2luZXNzQ2FyZDsiXX0= */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\BusinessCard.js */"));
    }
  }]);

  return BusinessCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BusinessCard);

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
        className: "jsx-2893281619" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2893281619" + " " + "header-container",
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
        className: "jsx-2893281619" + " " + "header-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "155886142",
        __self: this
      }, ".header-container.jsx-2893281619{position:fixed;width:100%;height:calc(var(--header-height-out) * 100vh);min-height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#FFF;box-shadow:0 0 10px rgba(0,0,0,calc((var(--header-height-in) - 0.9) * 2));}.header-scroll.jsx-2893281619{width:100%;<<<<<<< Updated upstream height:calc(var(--header-height-out) * 100vh + 300px);min-height:400px;======= height:calc(var(--header-height-out) * 100vh + 100px);min-height:280px;>>>>>>> Stashed changes;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUI0QixBQUd3QyxBQVlKLFdBRTJDLElBYjNDLFdBQ21DLDhDQUM5QixnQkFDSCxFQVdJLGlCQUVxQyx1REFaL0IsT0FhTixpQkFFdEIsd0JBQUMsbURBYjBCLHNCQUN1RCwwRUFDakYiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnVzaW5lc3NDYXJkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNjcm9sbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSAqIDEwMHZoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIGNhbGMoKHZhcigtLWhlYWRlci1oZWlnaHQtaW4pIC0gMC45KSAqIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItc2Nyb2xsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbjw8PDw8PDwgVXBkYXRlZCB1cHN0cmVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmggKyAzMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG49PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkgKiAxMDB2aCArIDEwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbj4+Pj4+Pj4gU3Rhc2hlZCBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItaGVpZ2h0LW91dDogMTtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1oZWlnaHQtaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1vdXQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1pbjogMDtcclxuICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgU2V0dXBCYXNpY1Njcm9sbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogJzB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMjAwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1vdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckZhZGUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB0bzogJzE1MHZoJyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItZmFkZS1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoZWFkZXJIZWlnaHQuc3RhcnQoKTtcclxuICAgICAgICBoZWFkZXJGYWRlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNldHVwQmFzaWNTY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1428398948",
        __self: this
      }, "html{--header-height-out:1;--header-height-in:0;--header-fade-out:1;--header-fade-in:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNtQyxBQUcyQyxzQkFDRCxxQkFDRCxvQkFDRCxtQkFDckIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx2b2xsZWlvLmdpdGh1Yi5pby5naXRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgYmFzaWNTY3JvbGwgZnJvbSAnYmFzaWNzY3JvbGwnO1xyXG5pbXBvcnQgQnVzaW5lc3NDYXJkIGZyb20gJy4vQnVzaW5lc3NDYXJkJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnVzaW5lc3NDYXJkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNjcm9sbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSAqIDEwMHZoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIGNhbGMoKHZhcigtLWhlYWRlci1oZWlnaHQtaW4pIC0gMC45KSAqIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItc2Nyb2xsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbjw8PDw8PDwgVXBkYXRlZCB1cHN0cmVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodC1vdXQpICogMTAwdmggKyAzMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG49PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0LW91dCkgKiAxMDB2aCArIDEwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbj4+Pj4+Pj4gU3Rhc2hlZCBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItaGVpZ2h0LW91dDogMTtcclxuICAgICAgICAgICAgICAgICAgICAtLWhlYWRlci1oZWlnaHQtaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1vdXQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1oZWFkZXItZmFkZS1pbjogMDtcclxuICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgU2V0dXBCYXNpY1Njcm9sbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcclxuICAgICAgICAgICAgZnJvbTogJzB2aCcsXHJcbiAgICAgICAgICAgIHRvOiAnMjAwdmgnLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1vdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJy0taGVhZGVyLWhlaWdodC1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckZhZGUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBmcm9tOiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB0bzogJzE1MHZoJyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICctLWhlYWRlci1mYWRlLW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnLS1oZWFkZXItZmFkZS1pbic6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoZWFkZXJIZWlnaHQuc3RhcnQoKTtcclxuICAgICAgICBoZWFkZXJGYWRlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNldHVwQmFzaWNTY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Header.js */"));
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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Projects\\volleio.github.io.git\\components\\Layout.js";



function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3842799143" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2862586574",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');.layout.jsx-3842799143{font-family:'Source Sans Pro',sans-serif;color:#323232;min-height:100vh;margin-bottom:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVMsQUFFeUYsQUFFbEMseUNBQzVCLGNBQ0csaUJBQ0UsbUJBQ3JCIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86MzAwLDQwMCcpO1xyXG4gICAgICAgICAgLmxheW91dCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY29sb3I6ICMzMjMyMzI7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgKixcclxuICAgICAgICAgICo6YmVmb3JlLFxyXG4gICAgICAgICAgKjphZnRlciB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSJdfQ== */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3628919360",
    __self: this
  }, "*,*:before,*:after{box-sizing:border-box;}html{font-size:100%;}body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJTLEFBS21DLEFBSVAsQUFJTixTQUNYLE1BSkEsT0FKQSIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHZvbGxlaW8uZ2l0aHViLmlvLmdpdFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjMwMCw0MDAnKTtcclxuICAgICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjMyO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTB2aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgICosXHJcbiAgICAgICAgICAqOmJlZm9yZSxcclxuICAgICAgICAgICo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0iXX0= */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\Layout.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.dcd59a8f15f7588026aa.hot-update.js.map