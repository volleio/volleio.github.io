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
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label business-card__label--top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "mailto:Lucas@Volle.io",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-129116096" + " " + "business-card___text__lucas selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Lucas"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-129116096" + " " + "business-card___text__at",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "@"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-129116096" + " " + "business-card___text__volleio selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Volle.io")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label business-card__label--bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "business-card__label business-card__label--bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--horiz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket-group bracket-group--even",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.instagram.com/volle.io/",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--insta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.twitter.com/volleio",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/volleio",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "icon-bracket-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-129116096" + " " + "bracket bracket--vert1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/volleio/",
        className: "jsx-129116096",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onMouseOver: this.onIconMouseOver,
        onMouseOut: this.onIconMouseOut,
        className: "jsx-129116096" + " " + "icon icon--linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "129116096",
        __self: this
      }, ".business-card-container.jsx-129116096{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;height:250px;-webkit-transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.4 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));margin:auto;padding:4px 40px 0 40px;background-color:rgba(255,255,255,var(--header-fade-out));box-shadow:0 1px 4px 2px rgba(50,50,50,calc(var(--header-fade-out) / 2 - 0.3));border-radius:2px;-webkit-transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;}@media (min-width:900px){.business-card-container.jsx-129116096{-webkit-transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.6 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}@media (max-width:550px){.business-card-container.jsx-129116096{-webkit-transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.2 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}@media (max-width:450px){.business-card-container.jsx-129116096{-webkit-transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));-ms-transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));transform:scale(calc(0.6 + (0.02 * var(--header-height-out))))  translateY(calc(-140px * var(--header-height-in)));}}.business-card__text.jsx-129116096{position:absolute;font-weight:300;font-size:67px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;margin-top:-3px;color:#C4C4C4;}.business-card__text.jsx-129116096>.selected.jsx-129116096{color:#323232;-webkit-transition:color 0.1s ease-in-out;transition:color 0.1s ease-in-out;}.business-card__label-group.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:400px;}.business-card__label.jsx-129116096{opacity:var(--header-fade-out);}.business-card__label--top.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:400px;margin-bottom:90px;}.business-card__label--bottom.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.business-card__label--bottom.jsx-129116096:first-child{width:146px;}.business-card__label--bottom.jsx-129116096:last-child{width:194px;}.bracket-group.jsx-129116096{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.bracket-group.bracket-group--even.jsx-129116096{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-bracket-group.jsx-129116096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.bracket.jsx-129116096{background-color:#C4C4C4;-webkit-transition:background-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out;}.bracket--vert1.jsx-129116096{width:2px;height:8px;}.icon-bracket-group.hover.jsx-129116096>.bracket--vert1.jsx-129116096{background-color:#888888;}.bracket--vert2.jsx-129116096{width:2px;height:10px;}.business-card__label.hover.jsx-129116096 .bracket--vert2.jsx-129116096{background-color:#888888;}.bracket--horiz.jsx-129116096{width:100%;height:2px;}.business-card__label.hover.jsx-129116096 .bracket--horiz.jsx-129116096{background-color:#888888;}.icon.jsx-129116096{width:24px;height:24px;background-repeat:no-repeat;background-position:center;background-size:contain;box-sizing:content-box;border:8px solid transparent;pointer-events:var(--header-fade-disabled);cursor:pointer;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out;}.icon-bracket-group.hover.jsx-129116096 .icon.jsx-129116096{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.icon--email.jsx-129116096{background-image:url(\"/static/icon-email.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--email.jsx-129116096{background-image:url(\"/static/icon-email-selected.svg\");}.icon--me.jsx-129116096{background-image:url(\"/static/icon-me.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--me.jsx-129116096{background-image:url(\"/static/icon-me-selected.svg\");}.icon--insta.jsx-129116096{background-image:url(\"/static/icon-insta.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--insta.jsx-129116096{background-image:url(\"/static/icon-insta-selected.svg\");}.icon--twitter.jsx-129116096{background-image:url(\"/static/icon-twitter.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--twitter.jsx-129116096{background-image:url(\"/static/icon-twitter-selected.svg\");}.icon--github.jsx-129116096{background-image:url(\"/static/icon-github.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--github.jsx-129116096{background-image:url(\"/static/icon-github-selected.svg\");}.icon--linkedin.jsx-129116096{background-image:url(\"/static/icon-linkedin.svg\");}.icon-bracket-group.hover.jsx-129116096 .icon--linkedin.jsx-129116096{background-image:url(\"/static/icon-linkedin-selected.svg\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdm9sbGVpby5naXRodWIuaW8uZ2l0XFxjb21wb25lbnRzXFxCdXNpbmVzc0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUlTLEFBRytCLEFBdUI0QyxBQU9BLEFBT0EsQUFLNUMsQUFVSixBQU1ELEFBTWtCLEFBSWxCLEFBUUEsQUFNRCxBQUlBLEFBSUQsQUFNWSxBQUlWLEFBTVksQUFLZixBQUtlLEFBSWYsQUFLZSxBQUlkLEFBS2MsQUFJZCxBQWNVLEFBSTBCLEFBR1MsQUFJWixBQUdTLEFBSU4sQUFHUyxBQUlQLEFBR1MsQUFJVixBQUdTLEFBSVAsQUFHUyxVQWxGaEQsQUFTQyxDQTlCQyxBQXVDRixBQVNDLENBeERkLEFBSUEsRUFqQ29DLElBckRyQixBQTBDRyxHQXNFbEIsQ0FTQSxBQVNBLENBUzhCLEVBakNpQixBQVUvQyxBQVNBLEFBU0EsTUF0RUEsR0FyQmlCLFVBd0hqQixHQVBBLEFBY0EsQ0FjQSxDQTVJdUIsQUFxSXZCLENBY0EsQ0FuRDZCLEVBMEI3QixHQVBBLEFBY0EsQ0FjQSxDQVBBLENBY0EsZUF4SWdDLEFBVVIsQUFRQSxBQXdCQSxDQW9EeEIsR0FYMEIsT0FsRE0sS0FyQ2hDLEVBckR3QixPQStGeEIsR0E4Q3lCLHFCQW5DekIsRUFvQytCLHlCQWxHYixFQXdCRyxBQVFBLEFBd0JBLEVBNEN3QixZQWxHN0IsSUE3Q1MsVUE4Q3pCLFNBV2MsUUF1RkcsR0F0RGpCLENBaENBLFdBdUZrQyxpQ0E3RXBCLEFBUWQsQUF3QkEsWUEvQnFCLFlBcEVBLE9BcUVyQixRQTRFQSxzRUE3SEUsQUFPQSxHQU9BLEtBakNZLFlBQ0MsYUFFaUQsa1dBQ2xELFlBQ1ksd0JBRXFDLDBEQUVxQiwrRUFDaEUsa0JBRXFCLHNGQUN6QyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHZvbGxlaW8uZ2l0aHViLmlvLmdpdFxcY29tcG9uZW50c1xcQnVzaW5lc3NDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY2xhc3MgQnVzaW5lc3NDYXJkIGV4dGVuZHMgQ29tcG9uZW50IFxyXG57XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIFxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgb25JY29uTW91c2VPdmVyKGV2dCkgXHJcbiAge1xyXG4gICAgY29uc3QgaWNvbiA9IGV2dC50YXJnZXQ7XHJcbiAgICBjb25zdCBpY29uQnJhY2tldEdyb3VwID0gaWNvbi5jbG9zZXN0KFwiLmljb24tYnJhY2tldC1ncm91cFwiKTtcclxuICAgIGNvbnN0IGljb25MYWJlbCA9IGljb24uY2xvc2VzdChcIi5idXNpbmVzcy1jYXJkX19sYWJlbFwiKTtcclxuICAgIGljb25CcmFja2V0R3JvdXAuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgaWNvbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuXHJcbiAgICBjb25zdCBidXNpbmVzc0NhcmRDb250YWluZXIgPSBpY29uLmNsb3Nlc3QoXCIuYnVzaW5lc3MtY2FyZC1jb250YWluZXJcIik7XHJcbiAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS1lbWFpbFwiKSlcclxuICAgIHtcclxuICAgICAgY29uc3QgdGV4dEF0ID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZF9fX3RleHRfX2F0XCIpO1xyXG4gICAgICB0ZXh0QXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS1tZVwiKSlcclxuICAgIHtcclxuICAgICAgY29uc3QgdGV4dFZvbGxlaW8gPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fdm9sbGVpb1wiKTtcclxuICAgICAgdGV4dFZvbGxlaW8uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS1pbnN0YVwiKSB8fCBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLXR3aXR0ZXJcIikgfHxcclxuICAgICAgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS1naXRodWJcIikgfHwgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJpY29uLS1saW5rZWRpblwiKSlcclxuICAgIHtcclxuICAgICAgY29uc3QgdGV4dEx1Y2FzID0gYnVzaW5lc3NDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3MtY2FyZF9fX3RleHRfX2x1Y2FzXCIpO1xyXG4gICAgICB0ZXh0THVjYXMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JY29uTW91c2VPdXQoZXZ0KSBcclxuICB7XHJcbiAgICBjb25zdCBpY29uID0gZXZ0LnRhcmdldDtcclxuICAgIGNvbnN0IGljb25CcmFja2V0R3JvdXAgPSBpY29uLmNsb3Nlc3QoXCIuaWNvbi1icmFja2V0LWdyb3VwXCIpO1xyXG4gICAgY29uc3QgaWNvbkxhYmVsID0gaWNvbi5jbG9zZXN0KFwiLmJ1c2luZXNzLWNhcmRfX2xhYmVsXCIpO1xyXG4gICAgaWNvbkJyYWNrZXRHcm91cC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICBpY29uTGFiZWwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzQ2FyZENvbnRhaW5lciA9IGljb24uY2xvc2VzdChcIi5idXNpbmVzcy1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWVtYWlsXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0QXQgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fYXRcIik7XHJcbiAgICAgIHRleHRBdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLW1lXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0Vm9sbGVpbyA9IGJ1c2luZXNzQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzLWNhcmRfX190ZXh0X192b2xsZWlvXCIpO1xyXG4gICAgICB0ZXh0Vm9sbGVpby5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWluc3RhXCIpIHx8IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaWNvbi0tdHdpdHRlclwiKSB8fFxyXG4gICAgICBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWdpdGh1YlwiKSB8fCBpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImljb24tLWxpbmtlZGluXCIpKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0ZXh0THVjYXMgPSBidXNpbmVzc0NhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzcy1jYXJkX19fdGV4dF9fbHVjYXNcIik7XHJcbiAgICAgIHRleHRMdWNhcy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSBcclxuICB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19sYWJlbCBidXNpbmVzcy1jYXJkX19sYWJlbC0tdG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOkx1Y2FzQFZvbGxlLmlvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLWVtYWlsXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDFcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLWhvcml6XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX190ZXh0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZF9fX3RleHRfX2x1Y2FzIHNlbGVjdGVkXCI+THVjYXM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZF9fX3RleHRfX2F0XCI+QDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXNpbmVzcy1jYXJkX19fdGV4dF9fdm9sbGVpbyBzZWxlY3RlZFwiPlZvbGxlLmlvPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZF9fbGFiZWwtZ3JvdXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2FyZF9fbGFiZWwgYnVzaW5lc3MtY2FyZF9fbGFiZWwtLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS1ob3JpelwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1tZVwiIG9uTW91c2VPdmVyPXt0aGlzLm9uSWNvbk1vdXNlT3Zlcn0gb25Nb3VzZU91dD17dGhpcy5vbkljb25Nb3VzZU91dH0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNhcmRfX2xhYmVsIGJ1c2luZXNzLWNhcmRfX2xhYmVsLS1ib3R0b21cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0taG9yaXpcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0LWdyb3VwIGJyYWNrZXQtZ3JvdXAtLWV2ZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS92b2xsZS5pby9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLWluc3RhXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYnJhY2tldC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFja2V0IGJyYWNrZXQtLXZlcnQxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vdm9sbGVpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi0tdHdpdHRlclwiIG9uTW91c2VPdmVyPXt0aGlzLm9uSWNvbk1vdXNlT3Zlcn0gb25Nb3VzZU91dD17dGhpcy5vbkljb25Nb3VzZU91dH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJyYWNrZXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhY2tldCBicmFja2V0LS12ZXJ0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92b2xsZWlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1naXRodWJcIiBvbk1vdXNlT3Zlcj17dGhpcy5vbkljb25Nb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMub25JY29uTW91c2VPdXR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1icmFja2V0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYWNrZXQgYnJhY2tldC0tdmVydDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdm9sbGVpby9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tLWxpbmtlZGluXCIgb25Nb3VzZU92ZXI9e3RoaXMub25JY29uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLm9uSWNvbk1vdXNlT3V0fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygwLjYgKyAoMC40ICogdmFyKC0taGVhZGVyLWhlaWdodC1vdXQpKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGNhbGMoLTE0MHB4ICogdmFyKC0taGVhZGVyLWhlaWdodC1pbikpKTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggNDBweCAwIDQwcHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLWhlYWRlci1mYWRlLW91dCkpO1xyXG5cclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDJweCByZ2JhKDUwLCA1MCwgNTAsIGNhbGModmFyKC0taGVhZGVyLWZhZGUtb3V0KSAvIDIgLSAwLjMpKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAuYnVzaW5lc3MtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygwLjYgKyAoMC42ICogdmFyKC0taGVhZGVyLWhlaWdodC1vdXQpKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGNhbGMoLTE0MHB4ICogdmFyKC0taGVhZGVyLWhlaWdodC1pbikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAuYnVzaW5lc3MtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygwLjYgKyAoMC4yICogdmFyKC0taGVhZGVyLWhlaWdodC1vdXQpKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGNhbGMoLTE0MHB4ICogdmFyKC0taGVhZGVyLWhlaWdodC1pbikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAuYnVzaW5lc3MtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygwLjYgKyAoMC4wMiAqIHZhcigtLWhlYWRlci1oZWlnaHQtb3V0KSkpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWShjYWxjKC0xNDBweCAqIHZhcigtLWhlYWRlci1oZWlnaHQtaW4pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX3RleHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjdweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICNDNEM0QzQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX3RleHQgPiAuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMyMzIzMjtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLWdyb3VwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogdmFyKC0taGVhZGVyLWZhZGUtb3V0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwtLXRvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwtLWJvdHRvbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLS1ib3R0b206Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLS1ib3R0b206bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOTRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnJhY2tldC1ncm91cCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJyYWNrZXQtZ3JvdXAuYnJhY2tldC1ncm91cC0tZXZlbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5icmFja2V0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5icmFja2V0LS12ZXJ0MSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgPiAuYnJhY2tldC0tdmVydDEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5icmFja2V0LS12ZXJ0MiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnVzaW5lc3MtY2FyZF9fbGFiZWwuaG92ZXIgLmJyYWNrZXQtLXZlcnQyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnJhY2tldC0taG9yaXoge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1c2luZXNzLWNhcmRfX2xhYmVsLmhvdmVyIC5icmFja2V0LS1ob3JpeiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg4ODg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IHZhcigtLWhlYWRlci1mYWRlLWRpc2FibGVkKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLS1lbWFpbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1lbWFpbC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uLS1lbWFpbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi1lbWFpbC1zZWxlY3RlZC5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24tLW1lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLW1lLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uLWJyYWNrZXQtZ3JvdXAuaG92ZXIgLmljb24tLW1lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLW1lLXNlbGVjdGVkLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi0taW5zdGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24taW5zdGEuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbi0taW5zdGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24taW5zdGEtc2VsZWN0ZWQuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLS10d2l0dGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLXR3aXR0ZXIuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbi0tdHdpdHRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi10d2l0dGVyLXNlbGVjdGVkLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi0tZ2l0aHViIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLWdpdGh1Yi5zdmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1icmFja2V0LWdyb3VwLmhvdmVyIC5pY29uLS1naXRodWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tZ2l0aHViLXNlbGVjdGVkLnN2Z1wiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi0tbGlua2VkaW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tbGlua2VkaW4uc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24tYnJhY2tldC1ncm91cC5ob3ZlciAuaWNvbi0tbGlua2VkaW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tbGlua2VkaW4tc2VsZWN0ZWQuc3ZnXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXNpbmVzc0NhcmQ7Il19 */\n/*@ sourceURL=C:\\Projects\\volleio.github.io.git\\components\\BusinessCard.js */"));
    }
  }]);

  return BusinessCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BusinessCard);

/***/ })

})
//# sourceMappingURL=index.js.c15aa363f92bdc6502a6.hot-update.js.map