/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./DancingScript.ttf */ "./src/DancingScript.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Light.ttf */ "./src/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Thin.ttf */ "./src/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/bg.jpg */ "./src/Images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

:root {
	--text-color: #ffffff;
	--border-color: #222;
    --bg-light: #0000008c;
    --bg-light-hover: #63636366;
    --bg-dark: #000000d9;
}

* {
    box-sizing: border-box;
}

@font-face {
	font-family: 'LogoFont';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
	font-family: 'TextFont';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}),
	url(${___CSS_LOADER_URL_REPLACEMENT_2___}),
	url(${___CSS_LOADER_URL_REPLACEMENT_3___}),
	url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

body {
	font-family: 'TextFont';
	color: var(--text-color);
	background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
	background-size: cover;
    background-position: center 0%;
    background-attachment: fixed;
	backdrop-filter: blur(0px) brightness(0.85);
}

svg {
	height: 20px;
	fill: var(--text-color);
}

#content {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

header {
	text-align: center;
	background-color: var(--bg-dark);
	padding: 15px;
}
footer {
	width: 100%;
	padding: 15px;
	background-color: var(--bg-light);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
}
.logo {
	font-size: 5rem;
	font-family: 'LogoFont';
	margin-bottom: 15px;
}
.btn {
	font: inherit;
	font-size: 1.25rem;
	letter-spacing: 3px;
	color: var(--text-color);
	padding: 1em;
	margin: 0;
	background: none;
	border: none;
	transition: all 0.3s ease-out;
}
.btn:hover {
	transform: translateY(-10px);
}
.active {
	border-bottom: 2px solid var(--text-color);
}

main {
	text-align: center;
	width: 900px;
	margin: 50px auto;
	padding: 30px;
	border: 1px solid var(--border-color);
	background-color: var(--bg-light);
	box-shadow: 5px 5px 15px black;
	/* transition: all 1s linear; */
}

/* ---------------------------------- */

.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	animation: fadeIn 1.5s;
}
.home img {
	height: 300px;
	width: 300px;
}
.home p {
	font-size: 1.25rem;
	font-weight: 400;
}

/* ---------------------------------- */

.menu{
	padding-top: 25px;
	display: grid;
	grid-template: repeat(4, 1fr) / repeat(2, 1fr);
	place-items: center;
	row-gap: 25px;
	animation: fadeIn 1.5s;
}

.card {
	width: 350px;
	padding: 2em 1em;
	background-color: var(--bg-light);
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	transition: all 0.25s linear;
}
.card:hover {
	background-color: var(--bg-light-hover);
}
.card h1 {
	font-size: 1.75rem;
}
.card p {
	font-size: 0.95rem;
	font-weight: 300;
	padding: 0 40px;
}
.card img {
	width: 200px;
	border-radius: 25px;
}

/* ---------------------------------- */

.contact {
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	animation: fadeIn 1.5s;
}
.contact p {
	font-size: 1.25rem;
	margin-left: 120px;
	align-self: flex-start;
}
.contact img {
	width: 600px;
}

/* ---------------------------------- */

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

/* ---------------------------------- */

::-webkit-scrollbar {
	width: 15px;
}

::-webkit-scrollbar-track {
	background-color: #000;
}

::-webkit-scrollbar-thumb {
	background-color: rgb(40, 40, 40);
}

::-webkit-scrollbar-thumb:hover {
	background-color: #444;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,qBAAqB;CACrB,oBAAoB;IACjB,qBAAqB;IACrB,2BAA2B;IAC3B,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;CACC,uBAAuB;CACvB,4CAA+B;AAChC;;AAEA;CACC,uBAAuB;CACvB;;;wCAGwB;AACzB;;AAEA;CACC,uBAAuB;CACvB,wBAAwB;CACxB,mDAAkC;CAClC,sBAAsB;IACnB,8BAA8B;IAC9B,4BAA4B;CAC/B,2CAA2C;AAC5C;;AAEA;CACC,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,gCAAgC;CAChC,aAAa;AACd;AACA;CACC,WAAW;CACX,aAAa;CACb,iCAAiC;CACjC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;AACV;AACA;CACC,eAAe;CACf,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,kBAAkB;CAClB,mBAAmB;CACnB,wBAAwB;CACxB,YAAY;CACZ,SAAS;CACT,gBAAgB;CAChB,YAAY;CACZ,6BAA6B;AAC9B;AACA;CACC,4BAA4B;AAC7B;AACA;CACC,0CAA0C;AAC3C;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,iBAAiB;CACjB,aAAa;CACb,qCAAqC;CACrC,iCAAiC;CACjC,8BAA8B;CAC9B,+BAA+B;AAChC;;AAEA,uCAAuC;;AAEvC;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,sBAAsB;AACvB;AACA;CACC,aAAa;CACb,YAAY;AACb;AACA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA,uCAAuC;;AAEvC;CACC,iBAAiB;CACjB,aAAa;CACb,8CAA8C;CAC9C,mBAAmB;CACnB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,iCAAiC;CACjC,mBAAmB;CACnB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;CACT,4BAA4B;AAC7B;AACA;CACC,uCAAuC;AACxC;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,eAAe;AAChB;AACA;CACC,YAAY;CACZ,mBAAmB;AACpB;;AAEA,uCAAuC;;AAEvC;CACC,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,sBAAsB;AACvB;AACA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,sBAAsB;AACvB;AACA;CACC,YAAY;AACb;;AAEA,uCAAuC;;AAEvC;CACC;EACC,UAAU;CACX;;CAEA;EACC,UAAU;CACX;AACD;;AAEA,uCAAuC;;AAEvC;CACC,WAAW;AACZ;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,sBAAsB;AACvB","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n:root {\r\n\t--text-color: #ffffff;\r\n\t--border-color: #222;\r\n    --bg-light: #0000008c;\r\n    --bg-light-hover: #63636366;\r\n    --bg-dark: #000000d9;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'LogoFont';\r\n\tsrc: url('./DancingScript.ttf');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'TextFont';\r\n\tsrc: url('./Roboto-Regular.ttf'),\r\n\turl('./Roboto-Light.ttf'),\r\n\turl('./Roboto-Thin.ttf'),\r\n\turl('./Roboto-Bold.ttf');\r\n}\r\n\r\nbody {\r\n\tfont-family: 'TextFont';\r\n\tcolor: var(--text-color);\r\n\tbackground: url('./Images/bg.jpg');\r\n\tbackground-size: cover;\r\n    background-position: center 0%;\r\n    background-attachment: fixed;\r\n\tbackdrop-filter: blur(0px) brightness(0.85);\r\n}\r\n\r\nsvg {\r\n\theight: 20px;\r\n\tfill: var(--text-color);\r\n}\r\n\r\n#content {\r\n\tmin-height: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\nheader {\r\n\ttext-align: center;\r\n\tbackground-color: var(--bg-dark);\r\n\tpadding: 15px;\r\n}\r\nfooter {\r\n\twidth: 100%;\r\n\tpadding: 15px;\r\n\tbackground-color: var(--bg-light);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 15px;\r\n}\r\n.logo {\r\n\tfont-size: 5rem;\r\n\tfont-family: 'LogoFont';\r\n\tmargin-bottom: 15px;\r\n}\r\n.btn {\r\n\tfont: inherit;\r\n\tfont-size: 1.25rem;\r\n\tletter-spacing: 3px;\r\n\tcolor: var(--text-color);\r\n\tpadding: 1em;\r\n\tmargin: 0;\r\n\tbackground: none;\r\n\tborder: none;\r\n\ttransition: all 0.3s ease-out;\r\n}\r\n.btn:hover {\r\n\ttransform: translateY(-10px);\r\n}\r\n.active {\r\n\tborder-bottom: 2px solid var(--text-color);\r\n}\r\n\r\nmain {\r\n\ttext-align: center;\r\n\twidth: 900px;\r\n\tmargin: 50px auto;\r\n\tpadding: 30px;\r\n\tborder: 1px solid var(--border-color);\r\n\tbackground-color: var(--bg-light);\r\n\tbox-shadow: 5px 5px 15px black;\r\n\t/* transition: all 1s linear; */\r\n}\r\n\r\n/* ---------------------------------- */\r\n\r\n.home {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 30px;\r\n\tanimation: fadeIn 1.5s;\r\n}\r\n.home img {\r\n\theight: 300px;\r\n\twidth: 300px;\r\n}\r\n.home p {\r\n\tfont-size: 1.25rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\n/* ---------------------------------- */\r\n\r\n.menu{\r\n\tpadding-top: 25px;\r\n\tdisplay: grid;\r\n\tgrid-template: repeat(4, 1fr) / repeat(2, 1fr);\r\n\tplace-items: center;\r\n\trow-gap: 25px;\r\n\tanimation: fadeIn 1.5s;\r\n}\r\n\r\n.card {\r\n\twidth: 350px;\r\n\tpadding: 2em 1em;\r\n\tbackground-color: var(--bg-light);\r\n\tborder-radius: 25px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n\ttransition: all 0.25s linear;\r\n}\r\n.card:hover {\r\n\tbackground-color: var(--bg-light-hover);\r\n}\r\n.card h1 {\r\n\tfont-size: 1.75rem;\r\n}\r\n.card p {\r\n\tfont-size: 0.95rem;\r\n\tfont-weight: 300;\r\n\tpadding: 0 40px;\r\n}\r\n.card img {\r\n\twidth: 200px;\r\n\tborder-radius: 25px;\r\n}\r\n\r\n/* ---------------------------------- */\r\n\r\n.contact {\r\n\tpadding: 10px 0;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n\tanimation: fadeIn 1.5s;\r\n}\r\n.contact p {\r\n\tfont-size: 1.25rem;\r\n\tmargin-left: 120px;\r\n\talign-self: flex-start;\r\n}\r\n.contact img {\r\n\twidth: 600px;\r\n}\r\n\r\n/* ---------------------------------- */\r\n\r\n@keyframes fadeIn {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n/* ---------------------------------- */\r\n\r\n::-webkit-scrollbar {\r\n\twidth: 15px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n\tbackground-color: #000;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n\tbackground-color: rgb(40, 40, 40);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n\tbackground-color: #444;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contact = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const image = document.createElement("img");

    contact.classList.add("contact");

    p1.textContent = "📞 123 456 789";
    p2.textContent = "🏠 Outer Circle, Connaught Place, Delhi, India";
    image.src = "../src/Images/map.png";
    image.alt = "map";

    contact.appendChild(p1);
    contact.appendChild(p2);
    contact.appendChild(image);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    const home = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const image = document.createElement("img");

    home.classList.add("home");
    p1.textContent = "Best Sub in the town";
    p2.textContent = "Made with passion since 1968";
    p3.textContent = "Order online or visit us!";
    image.src = "../src/Images/chef.png";

    home.appendChild(p1);
    home.appendChild(p2);
    home.appendChild(image);
    home.appendChild(p3);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement("menu");
    menu.classList.add("menu");

    menu.appendChild( createCard(
        "../src/Images/Chicken Teriyaki.png", 
        "Chicken Teriyaki", 
        "Chicken Teriyaki", 
        "Chicken strips glazed with teriyaki sauce."
    ));

    menu.appendChild( createCard(
        "../src/Images/Tangy Paneer Tikka.png",
        "Tangy Paneer Tikka",
        "Tangy Paneer Tikka",
        "Your favourite cheese cubes marinated with tandoori sauce."
    ));

    menu.appendChild( createCard(
        "../src/Images/Italian BMT.png",
        "Italian BMT",
        "Italian BMT",
        "Sub with a mix of chicken pepperoni, smoked chicken slice."
    ));

    menu.appendChild( createCard(
        "../src/Images/Chicken Kofta.png",
        "Chicken Kofta",
        "Chicken Kofta",
        "Authentic indian meatballs perfectly seasoned and spiced."
    ));

    menu.appendChild( createCard( 
        "../src/Images/Aloo Patty.png",
        "Aloo Patty",
        "Aloo Patty",
        "Aloo patty seasoned with special herbs and spices."
    ));

    menu.appendChild( createCard( 
        "../src/Images/Tuna.png",
        "Tuna",
        "Tuna",
        "Flaked light tuna mixed with eggless mayo."
    ));

    menu.appendChild( createCard(
        "../src/Images/Choco Chip Cookie.png",
        "Double Choco Chunk Cookie",
        "Double Choco Chunk Cookie",
        "Tasty & chocolatey."
    ));

    menu.appendChild( createCard(
        "../src/Images/Pepsi Black.png",
        "Pepsi Black",
        "Pepsi Black",
        "The Orignal Pepsi but with 0 Kcal."
    ));

    return menu;
}

function createCard(source, alt, hText, pText) {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    card.classList.add("card");

    image.src = `${source}`;
    image.alt = `${alt}`;
    h1.textContent = `${hText}`;
    p.textContent = `${pText}`;

    card.appendChild(image);
    card.appendChild(h1);
    card.appendChild(p);

    return card;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/DancingScript.ttf":
/*!*******************************!*\
  !*** ./src/DancingScript.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d02a1ee17643667e9808.ttf";

/***/ }),

/***/ "./src/Images/bg.jpg":
/*!***************************!*\
  !*** ./src/Images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "167abbeac3f262176c2a.jpg";

/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/Roboto-Light.ttf":
/*!******************************!*\
  !*** ./src/Roboto-Light.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/Roboto-Thin.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Thin.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a732a12eb07742232407.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");





const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement("header");
    const logo = document.createElement("h1");

    logo.classList.add('logo');
    logo.textContent = "Sublicious";

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    
    homeBtn.classList.add("btn");
    menuBtn.classList.add("btn");
    contactBtn.classList.add("btn");

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        document.querySelector('.active').classList.remove('active');
        homeBtn.classList.add('active');
        (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        document.querySelector('.active').classList.remove('active');
        menuBtn.classList.add('active');
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        document.querySelector('.active').classList.remove('active');
        contactBtn.classList.add('active');
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");

    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const a = document.createElement("a");

    span1.textContent = "Copyright © 2023";
    span2.textContent = "Hriday2406";
    a.href = "https://github.com/Hriday2406";
    a.target = "_blank";
    a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>`;

    footer.appendChild(span1);
    footer.appendChild(span2);
    footer.appendChild(a);

    return footer;
}


content.appendChild(createHeader());
content.appendChild(createMain());
content.appendChild(createFooter());

(0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.querySelectorAll('.btn')[0].classList.add('active');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QyxpSEFBcUM7QUFDakYsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DLE9BQU8sbUNBQW1DO0FBQzFDLE9BQU8sbUNBQW1DO0FBQzFDLE9BQU8sbUNBQW1DO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FB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cmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0RhbmNpbmdTY3JpcHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG5cdC0tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuXHQtLWJvcmRlci1jb2xvcjogIzIyMjtcclxuICAgIC0tYmctbGlnaHQ6ICMwMDAwMDA4YztcclxuICAgIC0tYmctbGlnaHQtaG92ZXI6ICM2MzYzNjM2NjtcclxuICAgIC0tYmctZGFyazogIzAwMDAwMGQ5O1xyXG59XHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnTG9nb0ZvbnQnO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ1RleHRGb250JztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSxcclxuXHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSksXHJcblx0dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pLFxyXG5cdHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6ICdUZXh0Rm9udCc7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDAuODUpO1xyXG59XHJcblxyXG5zdmcge1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmspO1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuZm9vdGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Z2FwOiAxNXB4O1xyXG59XHJcbi5sb2dvIHtcclxuXHRmb250LXNpemU6IDVyZW07XHJcblx0Zm9udC1mYW1pbHk6ICdMb2dvRm9udCc7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uYnRuIHtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRsZXR0ZXItc3BhY2luZzogM3B4O1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHRwYWRkaW5nOiAxZW07XHJcblx0bWFyZ2luOiAwO1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcbi5idG46aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuLmFjdGl2ZSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5tYWluIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDkwMHB4O1xyXG5cdG1hcmdpbjogNTBweCBhdXRvO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxNXB4IGJsYWNrO1xyXG5cdC8qIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7ICovXHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5ob21lIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDMwcHg7XHJcblx0YW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxufVxyXG4uaG9tZSBpbWcge1xyXG5cdGhlaWdodDogMzAwcHg7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi5ob21lIHAge1xyXG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ubWVudXtcclxuXHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XHJcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHRyb3ctZ2FwOiAyNXB4O1xyXG5cdGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuXHR3aWR0aDogMzUwcHg7XHJcblx0cGFkZGluZzogMmVtIDFlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XHJcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDEwcHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQtaG92ZXIpO1xyXG59XHJcbi5jYXJkIGgxIHtcclxuXHRmb250LXNpemU6IDEuNzVyZW07XHJcbn1cclxuLmNhcmQgcCB7XHJcblx0Zm9udC1zaXplOiAwLjk1cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0cGFkZGluZzogMCA0MHB4O1xyXG59XHJcbi5jYXJkIGltZyB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5jb250YWN0IHtcclxuXHRwYWRkaW5nOiAxMHB4IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAyMHB4O1xyXG5cdGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuLmNvbnRhY3QgcCB7XHJcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5jb250YWN0IGltZyB7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcblx0MCUge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdDEwMCUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixvQkFBb0I7SUFDakIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsNENBQStCO0FBQ2hDOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCOzs7d0NBR3dCO0FBQ3pCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixtREFBa0M7Q0FDbEMsc0JBQXNCO0lBQ25CLDhCQUE4QjtJQUM5Qiw0QkFBNEI7Q0FDL0IsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQ0FBZ0M7Q0FDaEMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7QUFDQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQywwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUIsK0JBQStCO0FBQ2hDOztBQUVBLHVDQUF1Qzs7QUFFdkM7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBLHVDQUF1Qzs7QUFFdkM7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLDhDQUE4QztDQUM5QyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsaUNBQWlDO0NBQ2pDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsdUNBQXVDO0FBQ3hDO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQSx1Q0FBdUM7O0FBRXZDO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUEsdUNBQXVDOztBQUV2QztDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0FBRUEsdUNBQXVDOztBQUV2QztDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLXRleHQtY29sb3I6ICNmZmZmZmY7XFxyXFxuXFx0LS1ib3JkZXItY29sb3I6ICMyMjI7XFxyXFxuICAgIC0tYmctbGlnaHQ6ICMwMDAwMDA4YztcXHJcXG4gICAgLS1iZy1saWdodC1ob3ZlcjogIzYzNjM2MzY2O1xcclxcbiAgICAtLWJnLWRhcms6ICMwMDAwMDBkOTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTG9nb0ZvbnQnO1xcclxcblxcdHNyYzogdXJsKCcuL0RhbmNpbmdTY3JpcHQudHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcclxcblxcdHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpLFxcclxcblxcdHVybCgnLi9Sb2JvdG8tTGlnaHQudHRmJyksXFxyXFxuXFx0dXJsKCcuL1JvYm90by1UaGluLnR0ZicpLFxcclxcblxcdHVybCgnLi9Sb2JvdG8tQm9sZC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUZXh0Rm9udCc7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcblxcdGJhY2tncm91bmQ6IHVybCgnLi9JbWFnZXMvYmcuanBnJyk7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMC44NSk7XFxyXFxufVxcclxcblxcclxcbnN2ZyB7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyayk7XFxyXFxuXFx0cGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxNXB4O1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuXFx0Zm9udC1zaXplOiA1cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTG9nb0ZvbnQnO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcbi5idG4ge1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcblxcdHBhZGRpbmc6IDFlbTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcbi5idG46aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiA5MDBweDtcXHJcXG5cXHRtYXJnaW46IDUwcHggYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xcclxcblxcdGJveC1zaGFkb3c6IDVweCA1cHggMTVweCBibGFjaztcXHJcXG5cXHQvKiB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmhvbWUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMzBweDtcXHJcXG5cXHRhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG4uaG9tZSBpbWcge1xcclxcblxcdGhlaWdodDogMzAwcHg7XFxyXFxuXFx0d2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4uaG9tZSBwIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5tZW51e1xcclxcblxcdHBhZGRpbmctdG9wOiAyNXB4O1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcdHJvdy1nYXA6IDI1cHg7XFxyXFxuXFx0YW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdHdpZHRoOiAzNTBweDtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gMWVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgbGluZWFyO1xcclxcbn1cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQtaG92ZXIpO1xcclxcbn1cXHJcXG4uY2FyZCBoMSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcclxcbn1cXHJcXG4uY2FyZCBwIHtcXHJcXG5cXHRmb250LXNpemU6IDAuOTVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRwYWRkaW5nOiAwIDQwcHg7XFxyXFxufVxcclxcbi5jYXJkIGltZyB7XFxyXFxuXFx0d2lkdGg6IDIwMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG5cXHRhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG4uY29udGFjdCBwIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDEyMHB4O1xcclxcblxcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi5jb250YWN0IGltZyB7XFxyXFxuXFx0d2lkdGg6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdHdpZHRoOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwi8J+TniAxMjMgNDU2IDc4OVwiO1xyXG4gICAgcDIudGV4dENvbnRlbnQgPSBcIvCfj6AgT3V0ZXIgQ2lyY2xlLCBDb25uYXVnaHQgUGxhY2UsIERlbGhpLCBJbmRpYVwiO1xyXG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvSW1hZ2VzL21hcC5wbmdcIjtcclxuICAgIGltYWdlLmFsdCA9IFwibWFwXCI7XHJcblxyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwMSk7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHAyKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0IiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwiQmVzdCBTdWIgaW4gdGhlIHRvd25cIjtcclxuICAgIHAyLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxOTY4XCI7XHJcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lIG9yIHZpc2l0IHVzIVwiO1xyXG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvSW1hZ2VzL2NoZWYucG5nXCI7XHJcblxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChwMSk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKHAyKTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChwMyk7XHJcblxyXG4gICAgcmV0dXJuIGhvbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWUiLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZW51XCIpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKCBjcmVhdGVDYXJkKFxyXG4gICAgICAgIFwiLi4vc3JjL0ltYWdlcy9DaGlja2VuIFRlcml5YWtpLnBuZ1wiLCBcclxuICAgICAgICBcIkNoaWNrZW4gVGVyaXlha2lcIiwgXHJcbiAgICAgICAgXCJDaGlja2VuIFRlcml5YWtpXCIsIFxyXG4gICAgICAgIFwiQ2hpY2tlbiBzdHJpcHMgZ2xhemVkIHdpdGggdGVyaXlha2kgc2F1Y2UuXCJcclxuICAgICkpO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoIGNyZWF0ZUNhcmQoXHJcbiAgICAgICAgXCIuLi9zcmMvSW1hZ2VzL1Rhbmd5IFBhbmVlciBUaWtrYS5wbmdcIixcclxuICAgICAgICBcIlRhbmd5IFBhbmVlciBUaWtrYVwiLFxyXG4gICAgICAgIFwiVGFuZ3kgUGFuZWVyIFRpa2thXCIsXHJcbiAgICAgICAgXCJZb3VyIGZhdm91cml0ZSBjaGVlc2UgY3ViZXMgbWFyaW5hdGVkIHdpdGggdGFuZG9vcmkgc2F1Y2UuXCJcclxuICAgICkpO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoIGNyZWF0ZUNhcmQoXHJcbiAgICAgICAgXCIuLi9zcmMvSW1hZ2VzL0l0YWxpYW4gQk1ULnBuZ1wiLFxyXG4gICAgICAgIFwiSXRhbGlhbiBCTVRcIixcclxuICAgICAgICBcIkl0YWxpYW4gQk1UXCIsXHJcbiAgICAgICAgXCJTdWIgd2l0aCBhIG1peCBvZiBjaGlja2VuIHBlcHBlcm9uaSwgc21va2VkIGNoaWNrZW4gc2xpY2UuXCJcclxuICAgICkpO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoIGNyZWF0ZUNhcmQoXHJcbiAgICAgICAgXCIuLi9zcmMvSW1hZ2VzL0NoaWNrZW4gS29mdGEucG5nXCIsXHJcbiAgICAgICAgXCJDaGlja2VuIEtvZnRhXCIsXHJcbiAgICAgICAgXCJDaGlja2VuIEtvZnRhXCIsXHJcbiAgICAgICAgXCJBdXRoZW50aWMgaW5kaWFuIG1lYXRiYWxscyBwZXJmZWN0bHkgc2Vhc29uZWQgYW5kIHNwaWNlZC5cIlxyXG4gICAgKSk7XHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZCggY3JlYXRlQ2FyZCggXHJcbiAgICAgICAgXCIuLi9zcmMvSW1hZ2VzL0Fsb28gUGF0dHkucG5nXCIsXHJcbiAgICAgICAgXCJBbG9vIFBhdHR5XCIsXHJcbiAgICAgICAgXCJBbG9vIFBhdHR5XCIsXHJcbiAgICAgICAgXCJBbG9vIHBhdHR5IHNlYXNvbmVkIHdpdGggc3BlY2lhbCBoZXJicyBhbmQgc3BpY2VzLlwiXHJcbiAgICApKTtcclxuXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKCBjcmVhdGVDYXJkKCBcclxuICAgICAgICBcIi4uL3NyYy9JbWFnZXMvVHVuYS5wbmdcIixcclxuICAgICAgICBcIlR1bmFcIixcclxuICAgICAgICBcIlR1bmFcIixcclxuICAgICAgICBcIkZsYWtlZCBsaWdodCB0dW5hIG1peGVkIHdpdGggZWdnbGVzcyBtYXlvLlwiXHJcbiAgICApKTtcclxuXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKCBjcmVhdGVDYXJkKFxyXG4gICAgICAgIFwiLi4vc3JjL0ltYWdlcy9DaG9jbyBDaGlwIENvb2tpZS5wbmdcIixcclxuICAgICAgICBcIkRvdWJsZSBDaG9jbyBDaHVuayBDb29raWVcIixcclxuICAgICAgICBcIkRvdWJsZSBDaG9jbyBDaHVuayBDb29raWVcIixcclxuICAgICAgICBcIlRhc3R5ICYgY2hvY29sYXRleS5cIlxyXG4gICAgKSk7XHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZCggY3JlYXRlQ2FyZChcclxuICAgICAgICBcIi4uL3NyYy9JbWFnZXMvUGVwc2kgQmxhY2sucG5nXCIsXHJcbiAgICAgICAgXCJQZXBzaSBCbGFja1wiLFxyXG4gICAgICAgIFwiUGVwc2kgQmxhY2tcIixcclxuICAgICAgICBcIlRoZSBPcmlnbmFsIFBlcHNpIGJ1dCB3aXRoIDAgS2NhbC5cIlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoc291cmNlLCBhbHQsIGhUZXh0LCBwVGV4dCkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG5cclxuICAgIGltYWdlLnNyYyA9IGAke3NvdXJjZX1gO1xyXG4gICAgaW1hZ2UuYWx0ID0gYCR7YWx0fWA7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9IGAke2hUZXh0fWA7XHJcbiAgICBwLnRleHRDb250ZW50ID0gYCR7cFRleHR9YDtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlN1YmxpY2lvdXNcIjtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gICAgXHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xyXG5cclxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGxvYWRIb21lKCk7XHJcbiAgICB9KTtcclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGxvYWRNZW51KCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGxvYWRDb250YWN0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICBzcGFuMS50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjNcIjtcclxuICAgIHNwYW4yLnRleHRDb250ZW50ID0gXCJIcmlkYXkyNDA2XCI7XHJcbiAgICBhLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9IcmlkYXkyNDA2XCI7XHJcbiAgICBhLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBhLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+YDtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc3BhbjEpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHNwYW4yKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5cclxuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcblxyXG5sb2FkSG9tZSgpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=