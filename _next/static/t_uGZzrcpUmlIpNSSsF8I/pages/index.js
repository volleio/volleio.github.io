(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var r,i=n("q1tI");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,u(t).call(this,e))).prevProps={},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i.Component),n=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return l.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,r),o&&s(n,o),t}();t.default=f},"7OUW":function(e,t,n){var r;e.exports=function e(t,n,i){function o(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof r&&r;if(!u&&c)return r(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){return o(t[a][1][e]||e)},f,f.exports,e,t,n,i)}return n[a].exports}for(var s="function"==typeof r&&r,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){t.exports=function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},{}],2:[function(e,t,n){t.exports=function(e){var t=1.70158;return e*e*((t+1)*e-t)}},{}],3:[function(e,t,n){t.exports=function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1}},{}],4:[function(e,t,n){var r=e("./bounce-out");t.exports=function(e){return e<.5?.5*(1-r(1-2*e)):.5*r(2*e-1)+.5}},{"./bounce-out":6}],5:[function(e,t,n){var r=e("./bounce-out");t.exports=function(e){return 1-r(1-e)}},{"./bounce-out":6}],6:[function(e,t,n){t.exports=function(e){var t=e*e;return e<4/11?7.5625*t:e<8/11?9.075*t-9.9*e+3.4:e<.9?4356/361*t-35442/1805*e+16061/1805:10.8*e*e-20.52*e+10.72}},{}],7:[function(e,t,n){t.exports=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},{}],8:[function(e,t,n){t.exports=function(e){return 1-Math.sqrt(1-e*e)}},{}],9:[function(e,t,n){t.exports=function(e){return Math.sqrt(1- --e*e)}},{}],10:[function(e,t,n){t.exports=function(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}},{}],11:[function(e,t,n){t.exports=function(e){return e*e*e}},{}],12:[function(e,t,n){t.exports=function(e){var t=e-1;return t*t*t+1}},{}],13:[function(e,t,n){t.exports=function(e){return e<.5?.5*Math.sin(13*Math.PI/2*2*e)*Math.pow(2,10*(2*e-1)):.5*Math.sin(-13*Math.PI/2*(2*e-1+1))*Math.pow(2,-10*(2*e-1))+1}},{}],14:[function(e,t,n){t.exports=function(e){return Math.sin(13*e*Math.PI/2)*Math.pow(2,10*(e-1))}},{}],15:[function(e,t,n){t.exports=function(e){return Math.sin(-13*(e+1)*Math.PI/2)*Math.pow(2,-10*e)+1}},{}],16:[function(e,t,n){t.exports=function(e){return 0===e||1===e?e:e<.5?.5*Math.pow(2,20*e-10):-.5*Math.pow(2,10-20*e)+1}},{}],17:[function(e,t,n){t.exports=function(e){return 0===e?e:Math.pow(2,10*(e-1))}},{}],18:[function(e,t,n){t.exports=function(e){return 1===e?e:1-Math.pow(2,-10*e)}},{}],19:[function(e,t,n){t.exports={backInOut:e("./back-in-out"),backIn:e("./back-in"),backOut:e("./back-out"),bounceInOut:e("./bounce-in-out"),bounceIn:e("./bounce-in"),bounceOut:e("./bounce-out"),circInOut:e("./circ-in-out"),circIn:e("./circ-in"),circOut:e("./circ-out"),cubicInOut:e("./cubic-in-out"),cubicIn:e("./cubic-in"),cubicOut:e("./cubic-out"),elasticInOut:e("./elastic-in-out"),elasticIn:e("./elastic-in"),elasticOut:e("./elastic-out"),expoInOut:e("./expo-in-out"),expoIn:e("./expo-in"),expoOut:e("./expo-out"),linear:e("./linear"),quadInOut:e("./quad-in-out"),quadIn:e("./quad-in"),quadOut:e("./quad-out"),quartInOut:e("./quart-in-out"),quartIn:e("./quart-in"),quartOut:e("./quart-out"),quintInOut:e("./quint-in-out"),quintIn:e("./quint-in"),quintOut:e("./quint-out"),sineInOut:e("./sine-in-out"),sineIn:e("./sine-in"),sineOut:e("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(e,t,n){t.exports=function(e){return e}},{}],21:[function(e,t,n){t.exports=function(e){return(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1)}},{}],22:[function(e,t,n){t.exports=function(e){return e*e}},{}],23:[function(e,t,n){t.exports=function(e){return-e*(e-2)}},{}],24:[function(e,t,n){t.exports=function(e){return e<.5?8*Math.pow(e,4):-8*Math.pow(e-1,4)+1}},{}],25:[function(e,t,n){t.exports=function(e){return Math.pow(e,4)}},{}],26:[function(e,t,n){t.exports=function(e){return Math.pow(e-1,3)*(1-e)+1}},{}],27:[function(e,t,n){t.exports=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},{}],28:[function(e,t,n){t.exports=function(e){return e*e*e*e*e}},{}],29:[function(e,t,n){t.exports=function(e){return--e*e*e*e*e+1}},{}],30:[function(e,t,n){t.exports=function(e){return-.5*(Math.cos(Math.PI*e)-1)}},{}],31:[function(e,t,n){t.exports=function(e){var t=Math.cos(e*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}},{}],32:[function(e,t,n){t.exports=function(e){return Math.sin(e*Math.PI/2)}},{}],33:[function(e,t,n){t.exports=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},{}],34:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=void 0;var r=o(e("parse-unit")),i=o(e("eases"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a,u,c=[],l="undefined"!=typeof window,f=function(){return(document.scrollingElement||document.documentElement).scrollTop},p=function(e){return!1===isNaN((0,r.default)(e)[0])},d=function(e){var t=(0,r.default)(e);return{value:t[0],unit:t[1]}},h=function(e){return null!==String(e).match(/^[a-z]+-[a-z]+$/)},m=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:f(),r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,i=t.getBoundingClientRect(),o=e.match(/^[a-z]+/)[0],s=e.match(/[a-z]+$/)[0],a=0;return"top"===s&&(a-=0),"middle"===s&&(a-=r/2),"bottom"===s&&(a-=r),"top"===o&&(a+=i.top+n),"middle"===o&&(a+=i.top+n+i.height/2),"bottom"===o&&(a+=i.top+n+i.height),"".concat(a,"px")},v=function(e){var t,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:f(),i=e.getData(),o=i.to.value-i.from.value,s=(r-i.from.value)/(o/100),a=Math.min(Math.max(s,0),100),u=(t=i.direct,n={global:document.documentElement,elem:i.elem,direct:i.direct},!0===t?n.elem:t instanceof HTMLElement==1?n.direct:n.global),c=Object.keys(i.props).reduce(function(e,t){var n=i.props[t],r=n.from.unit||n.to.unit,o=n.from.value-n.to.value,s=n.timing(a/100),u=n.from.value-o*s,c=Math.round(1e4*u)/1e4;return e[t]=c+r,e},{}),l=s<0||100<s;return 1==(0<=s&&s<=100)&&i.inside(e,s,c),!0===l&&i.outside(e,s,c),{elem:u,props:c}},b=function(e,t){Object.keys(t).forEach(function(n){return r=e,i={key:n,value:t[n]},void r.style.setProperty(i.key,i.value);var r,i})};n.create=function(e){var t=null,n=!1,r={isActive:function(){return n},getData:function(){return t},calculate:function(){t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).inside&&(e.inside=function(){}),null==e.outside&&(e.outside=function(){}),null==e.direct&&(e.direct=!1),null==e.track&&(e.track=!0),null==e.props&&(e.props={}),null==e.from)throw new Error("Missing property `from`");if(null==e.to)throw new Error("Missing property `to`");if("function"!=typeof e.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof e.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof e.direct&&e.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===e.direct&&null==e.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof e.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==s(e.props))throw new Error("Property `props` must be undefined or an object");if(null==e.elem){if(!1===p(e.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(e.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===h(e.from)&&(e.from=m(e.from,e.elem)),!0===h(e.to)&&(e.to=m(e.to,e.elem));return e.from=d(e.from),e.to=d(e.to),e.props=Object.keys(e.props).reduce(function(t,n){var r=Object.assign({},e.props[n]);if(!1===p(r.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(r.to))throw new Error("Property `from` of prop must be a absolute value");if(r.from=d(r.from),r.to=d(r.to),null==r.timing&&(r.timing=i.default.linear),"string"!=typeof r.timing&&"function"!=typeof r.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof r.timing&&null==i.default[r.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof r.timing&&(r.timing=i.default[r.timing]),t[n]=r,t},{}),e}(e)},update:function(){var e=v(r),t=e.elem,n=e.props;return b(t,n),n},start:function(){n=!0},stop:function(){n=!1},destroy:function(){c[o]=void 0}},o=c.push(r)-1;return r.calculate(),r},!0===l?(function e(t,n){var r=function(){requestAnimationFrame(function(){return e(t,n)})},i=c.filter(function(e){return null!=e&&e.isActive()});if(0===i.length)return r();var o=f();if(n===o)return r();n=o,i.map(function(e){return v(e,o)}).forEach(function(e){var t=e.elem,n=e.props;return b(t,n)}),r()}(),window.addEventListener("resize",(a=function(){c.filter(function(e){return null!=e&&e.getData().track}).forEach(function(e){e.calculate(),e.update()})},u=null,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];clearTimeout(u),u=setTimeout(function(){return a.apply(void 0,t)},50)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9Jkg":function(e,t,n){e.exports=n("oh+g")},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),a=n("0iUn"),u=n("sLSF"),c=n("MI3g"),l=n("a7VT"),f=n("Tit0"),p=n("i8i4"),d=n.n(p),h=n("7OUW");function m(e){return s.a.createElement("div",{className:"jsx-3993798220 business-card-container"},s.a.createElement("div",{className:"jsx-3993798220 business-card__label business-card__label--top"},s.a.createElement("div",{className:"jsx-3993798220 icon icon--email"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert1"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--horiz"}),s.a.createElement("div",{className:"jsx-3993798220 bracket-group"},s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert2"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert2"}))),s.a.createElement("div",{className:"jsx-3993798220 business-card__text"},"Lucas",s.a.createElement("span",{className:"jsx-3993798220 business-card___text__at"},"@"),"Volle.io"),s.a.createElement("div",{className:"jsx-3993798220 business-card__label business-card__label--bottom"},s.a.createElement("div",{className:"jsx-3993798220"},s.a.createElement("div",{className:"jsx-3993798220 bracket-group"},s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert2"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert2"})),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--horiz"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert1"}),s.a.createElement("div",{className:"jsx-3993798220 icon icon--smiley"})),s.a.createElement("div",{className:"jsx-3993798220"},s.a.createElement("div",{className:"jsx-3993798220 bracket-group"},s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert2"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert2"})),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--horiz"}),s.a.createElement("div",{className:"jsx-3993798220 bracket-group bracket-group--even"},s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert1"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert1"}),s.a.createElement("div",{className:"jsx-3993798220 bracket bracket--vert1"})),s.a.createElement("div",{className:"jsx-3993798220 bracket-group bracket-group--even"},s.a.createElement("div",{className:"jsx-3993798220 icon icon--insta"}),s.a.createElement("div",{className:"jsx-3993798220 icon icon--twitter"}),s.a.createElement("div",{className:"jsx-3993798220 icon icon--github"})))),s.a.createElement(i.a,{id:"3993798220"},['.business-card-container.jsx-3993798220{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;height:250px;margin:auto;padding-top:4px;background-color:#FFF;background-image:url("/static/business-card.svg");background-positoin:center;border:1px solid black;border-radius:1px;}',".business-card__text.jsx-3993798220{position:absolute;font-weight:300;font-size:67px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;margin-top:-3px;}",".business-card___text__at.jsx-3993798220{color:#C4C4C4;}",".business-card__label--top.jsx-3993798220{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:400px;margin-bottom:90px;}",".business-card__label--bottom.jsx-3993798220{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:400px;}",".business-card__label--bottom.jsx-3993798220>div.jsx-3993798220{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".business-card__label--bottom.jsx-3993798220>div.jsx-3993798220:first-child{width:146px;}",".business-card__label--bottom.jsx-3993798220>div.jsx-3993798220:last-child{width:194px;}",".bracket-group.jsx-3993798220{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".bracket-group.bracket-group--even.jsx-3993798220{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}",".bracket.jsx-3993798220{background-color:#C4C4C4;}",".bracket--vert1.jsx-3993798220{width:2px;height:8px;}",".bracket--vert2.jsx-3993798220{width:2px;height:10px;}",".bracket--horiz.jsx-3993798220{width:100%;height:2px;}",".icon.jsx-3993798220{width:24px;height:24px;background-repeat:no-repeat;background-position:center;}",'.icon-email.jsx-3993798220{background-image:url("/static/icon-email.svg");}','.icon-smiley.jsx-3993798220{background-image:url("/static/icon-smiley.svg");}','.icon-insta.jsx-3993798220{background-image:url("/static/icon-insta.svg");}','.icon-twitter.jsx-3993798220{background-image:url("/static/icon-twitter.svg");}','.icon-github.jsx-3993798220{background-image:url("/static/icon-github.svg");}']))}var v=function(e){function t(e){return Object(a.default)(this,t),Object(c.default)(this,Object(l.default)(t).call(this,e))}return Object(f.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"jsx-2055986540 header-container"},s.a.createElement(m,null),s.a.createElement(i.a,{id:"2055986540"},[".header-container.jsx-2055986540{position:relative;width:100%;height:100vh;}"]))}},{key:"SetupBasicScroll",value:function(){h.create({elem:d.a.findDOMNode(this),from:"top-top",to:"bottom-middle",props:{"--header-position":{from:1,to:0}}}).start()}},{key:"componentDidMount",value:function(){this.SetupBasicScroll()}}]),t}(o.Component);function b(e){return s.a.createElement("div",{className:"jsx-2220581640 layout"},s.a.createElement(v,null),e.children,s.a.createElement(i.a,{id:"668633053"},["@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');.layout.jsx-2220581640{font-family:'Source Sans Pro',sans-serif;color:#323232;}"]),s.a.createElement(i.a,{id:"3389801308"},["*,*:before,*:after{box-sizing:border-box;}"]))}function y(e){return s.a.createElement("div",{className:"card-container"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h1",null,e.title)))}n("YFqc");function x(){return s.a.createElement(b,null,s.a.createElement(y,{title:"Hi!"},s.a.createElement("p",{className:"jsx-1586328328"},"Lucas is working as a Software Engineer at ",s.a.createElement("a",{href:"http://www.exagoinc.com/",className:"jsx-1586328328"},"Exago"),"."),s.a.createElement("p",{className:"jsx-1586328328"},"He graduated from ",s.a.createElement("a",{href:"http://rpi.edu/",className:"jsx-1586328328"},"Rensselaer Polytechnic Institute")," in 2017 with a B.S. in Computer Science. His most recent work may be viewed on his ",s.a.createElement("a",{href:"https://github.com/volleio",className:"jsx-1586328328"},"Github profile"),".")),s.a.createElement(y,{title:"Projects"}),s.a.createElement(i.a,{id:"1586328328"},[]))}n.d(t,"default",function(){return x})},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,o;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=o,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var i=String(n),o=t+i;return e[o]||(e[o]="jsx-".concat((0,r.default)("".concat(t,"-").concat(i)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),o&&s(t,o),e}();t.default=a},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,c=t.isBrowser,l=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),s("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("KI45"),i=r(n("9Jkg")),o=r(n("/HRN")),s=r(n("WaGi")),a=r(n("ZDA2")),u=r(n("/+P4")),c=r(n("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),d=l(n("q1tI")),h=(f(n("17x9")),l(n("nOHt"))),m=n("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var b=function(e){function t(){var e,n,r,i,s;return(0,o.default)(this,t),(e=(0,a.default)(this,(0,u.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:v(e),as:v(t)}},r=null,i=null,s=null,function(e,t){if(e===r&&t===i)return s;var o=n(e,t);return r=e,i=t,s=o,o}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,i=n.target;if("A"!==r||!(i&&"_self"!==i||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),s=o.href,a=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=p.resolve(u,s),a=a?p.resolve(u,a):s,t.preventDefault();var c=e.props.scroll;null==c&&(c=a.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](s,a,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),s={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||r),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=h.Router._rewriteUrlForNextExport(s.href)),d.default.cloneElement(o,s)}}]),t}(d.Component);t.default=b},"oh+g":function(e,t,n){var r=n("WEpk"),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);