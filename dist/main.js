/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialogBox.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialogBox.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".formContainer {\n    display: flex;\n    justify-content: center;\n}\n\n.formContainerOpen {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.formContainerClose {\n    position: absolute;\n    width: 100%;\n    height: 0%;\n}\n\n.newProjectForm {\n    margin: 0;\n    position: absolute;\n    font-size: 1.2em;\n    height: auto;\n    width: 30vmax;\n    background-color: var(--light-shade-5);\n    border: 1px solid var(--light-shade-4);\n    display: flex;\n    flex-direction: column;\n}\n\n.newForm {\n    margin: 0;\n    position: absolute;\n    font-size: 1.2em;\n    height: auto;\n    width: 70vmin;\n    background-color: var(--light-shade-5);\n    border: 1px solid var(--light-shade-4);\n    display: flex;\n    flex-direction: column;\n}\n\n.formOpen {\n    z-index: 1;\n    top: 0;\n    transform: translateY(5vmin);\n    animation: popin 1s;\n    opacity: 1;\n}\n\n.formClose {\n    top: 0;\n    opacity: 0;\n    transform: translateY(0);\n    animation: popout 1s;\n}\n\n.descriptionDetails {\n    margin: 1em;\n}\n\n@keyframes popin {\n    from {\n        transform: translateY(0);\n        opacity: 0;\n    }\n    to {\n        transform:  translateY(5vmin);\n        opacity: 1;\n    }\n}\n\n@keyframes popout {\n    from {\n        transform:  translateY(5vmin);\n        opacity: 1;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 0;\n    }\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--light-shade-3);\n    align-items: center;\n    padding: 1em;\n    font-weight: bold;\n}\n\n.closeImage {\n    height: 5vmin;\n    font-weight: bold;\n    cursor: pointer;\n}\n\nmain {\n    flex-grow: 1;\n}\n\nmain > form {\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    row-gap: 1em;\n}\ninput:not(.doneTaskRadio), select{\n    height: 2em;\n    font-size: 1em;\n    border: none;\n    padding: 5px;\n}\n\n.addBtn {\n    padding: 1em;\n    font-size: large;\n    background-color: var(--light-shade-3);\n    border: none;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.addBtn:hover {\n    background-color: var(--light-shade-1);\n}\n\n.descriptionDiv {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1em;\n}\n\n@media only screen and (max-width: 800px) {\n    .newProjectForm {\n        width: 70vmin;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/dialogBox.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,MAAM;IACN,4BAA4B;IAC5B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,MAAM;IACN,UAAU;IACV,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI;QACI,wBAAwB;QACxB,UAAU;IACd;IACA;QACI,6BAA6B;QAC7B,UAAU;IACd;AACJ;;AAEA;IACI;QACI,6BAA6B;QAC7B,UAAU;IACd;IACA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;IACtC,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":[".formContainer {\n    display: flex;\n    justify-content: center;\n}\n\n.formContainerOpen {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.formContainerClose {\n    position: absolute;\n    width: 100%;\n    height: 0%;\n}\n\n.newProjectForm {\n    margin: 0;\n    position: absolute;\n    font-size: 1.2em;\n    height: auto;\n    width: 30vmax;\n    background-color: var(--light-shade-5);\n    border: 1px solid var(--light-shade-4);\n    display: flex;\n    flex-direction: column;\n}\n\n.newForm {\n    margin: 0;\n    position: absolute;\n    font-size: 1.2em;\n    height: auto;\n    width: 70vmin;\n    background-color: var(--light-shade-5);\n    border: 1px solid var(--light-shade-4);\n    display: flex;\n    flex-direction: column;\n}\n\n.formOpen {\n    z-index: 1;\n    top: 0;\n    transform: translateY(5vmin);\n    animation: popin 1s;\n    opacity: 1;\n}\n\n.formClose {\n    top: 0;\n    opacity: 0;\n    transform: translateY(0);\n    animation: popout 1s;\n}\n\n.descriptionDetails {\n    margin: 1em;\n}\n\n@keyframes popin {\n    from {\n        transform: translateY(0);\n        opacity: 0;\n    }\n    to {\n        transform:  translateY(5vmin);\n        opacity: 1;\n    }\n}\n\n@keyframes popout {\n    from {\n        transform:  translateY(5vmin);\n        opacity: 1;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 0;\n    }\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--light-shade-3);\n    align-items: center;\n    padding: 1em;\n    font-weight: bold;\n}\n\n.closeImage {\n    height: 5vmin;\n    font-weight: bold;\n    cursor: pointer;\n}\n\nmain {\n    flex-grow: 1;\n}\n\nmain > form {\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    row-gap: 1em;\n}\ninput:not(.doneTaskRadio), select{\n    height: 2em;\n    font-size: 1em;\n    border: none;\n    padding: 5px;\n}\n\n.addBtn {\n    padding: 1em;\n    font-size: large;\n    background-color: var(--light-shade-3);\n    border: none;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.addBtn:hover {\n    background-color: var(--light-shade-1);\n}\n\n.descriptionDiv {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1em;\n}\n\n@media only screen and (max-width: 800px) {\n    .newProjectForm {\n        width: 70vmin;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/navBar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/navBar.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--light-shade-1: rgb(196, 112, 196);\r\n\t--light-shade-2: #c291d9;\r\n\t--light-shade-3: rgb(170, 83, 170);\r\n\t--light-shade-4: purple;\r\n\t--light-shade-5: #e8cff3;\r\n\t--light-shade-6: #d6b5e5;\r\n\t--mobile-project-text: white;\r\n    --task-text: black;\r\n\t--radio-button: #c470c4;\r\n\t--content-bg: #fcfcfc;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: 'Literata';\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n}\r\n\r\n.content {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tbackground-color: var(--content-bg);\r\n}\r\n\r\n.blurredContent {\r\n\tfilter: blur(1px);\r\n}\r\n\r\n.lightMode {\r\n\tbackground-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n\tbackground-color: var(--light-shade-2);\r\n\twidth: 40vmin;\r\n\tmin-height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n\theight: 100%;\r\n\tpadding: 2vmin;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\trow-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tcolumn-gap: 1em;\r\n\tpadding: 1em;\r\n\tbackground-color: hsla(0, 100%, 100%, 0.5);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n}\r\n\r\n.hamburger-project-list {\r\n\tdisplay: none;\r\n}\r\n\r\n.list-items {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tlist-style: none;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n\tpadding: 10px;\r\n\tdisplay: flex;\r\n}\r\n\r\n.activeFolder {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n\theight: 1em;\r\n}\r\n\r\n.project-list {\r\n\twidth: 100%;\r\n\theight: 60vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tflex-grow: 1;\r\n}\r\n\r\n.project-list > p {\r\n\tfont-size: 1.5em;\r\n\twidth: 100%;\r\n\tpadding: 1rem;\r\n\tfont-weight: bold;\r\n\tbackground-color: var(--light-shade-3);\r\n\ttext-align: center;\r\n}\r\n\r\n.project-items {\r\n\twidth: 100%;\r\n\theight: inherit;\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 10px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.project-items-mobile {\r\n\twidth: 100%;\r\n\theight: inherit;\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1em;\r\n\toverflow-y: auto;\r\n\tcolor: var(--mobile-project-text);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n\tbackground: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n\tbackground: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n\twidth: 100%;\r\n\tpadding: 5px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n\twidth: 100%;\r\n\tfont-size: 1.2em;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n\theight: 15px;\r\n\tdisplay: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n\tbackground-color: var(--light-shade-1);\r\n\tcursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n\tdisplay: block;\r\n}\r\n\r\n.newProject {\r\n\tbottom: 2em;\r\n\twidth: 30vmin;\r\n\tcursor: pointer;\r\n}\r\n\r\n.addProject {\r\n\tfont-size: 1em;\r\n\theight: 3em;\r\n\twidth: 100%;\r\n\tcursor: pointer;\r\n\tbackground-color: var(--light-shade-4);\r\n\tborder: none;\r\n\tborder-radius: 50px;\r\n\tcolor: white;\r\n}\r\n\r\n/* dark mode */\r\n.theme {\r\n\theight: 0;\r\n\twidth: 0;\r\n\tvisibility: hidden;\r\n}\r\n\r\n.modeLabel {\r\n\tcursor: pointer;\r\n\twidth: 3em;\r\n\theight: 1.6em;\r\n\tbackground: var(--light-shade-1);\r\n\tfloat: right;\r\n\tborder-radius: 100px;\r\n\tposition: relative;\r\n}\r\n.modeLabel::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground-color: white;\r\n\tborder-radius: 90px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\ninput:checked + .modeLabel {\r\n\tbackground-color: black;\r\n}\r\ninput:checked + .modeLabel::after {\r\n\tleft: calc(100% - 5px);\r\n\ttransform: translateX(-100%);\r\n}\r\n.modeLabel:active:after {\r\n\twidth: 45px;\r\n}\r\n\r\n.darkMode {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tright: 20px;\r\n\tbackground-color: #fcfcfc;\r\n\tpadding: 0.5em;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n\t\trgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n\t\trgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.toggle {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n\t.displayProjectListMobile {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.content {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.navBar {\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\t}\r\n\r\n\t.navBarContent {\r\n\t\twidth: 100%;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: center;\r\n\t\talign-content: space-between;\r\n\t\tcolumn-gap: 60vw;\r\n\t}\r\n\r\n\t.officialHeader {\r\n\t\theight: 3em;\r\n\t\tfont-size: 1em;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcolumn-gap: 2vmin;\r\n\t\tpadding: 1vmin;\r\n\t}\r\n\r\n\t.officialHeader > img {\r\n\t\theight: 5vmin;\r\n\t\twidth: 5vmin;\r\n\t}\r\n\r\n\t.officialHeader > h1 {\r\n\t\tfont-size: 5vmin;\r\n\t}\r\n\r\n\t.project-list,\r\n\t.newProject {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.hamburger-project-list {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.hamburgerMenu {\r\n\t\theight: 5vmin;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.displayProjectListMobile {\r\n\t\tposition: absolute;\r\n\t\tz-index: 1;\r\n\t\theight: auto;\r\n\t\twidth: 100%;\r\n\t\tbackground-color: var(--light-shade-3);\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: flex-start;\r\n\t}\r\n\r\n\t.displayProjectListMobile > header {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-content: space-between;\r\n\t\tbackground-color: var(--light-shade-5);\r\n\t\tfont-size: 4vmin;\r\n\t}\r\n\r\n\t.newProjectMobile {\r\n\t\theight: 4em;\r\n\t\twidth: 100%;\r\n\t\tbackground-color: var(--light-shade-1);\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t.addProjectMobile {\r\n\t\theight: 100%;\r\n\t\tbackground-color: var(--light-shade-4);\r\n\t\tcolor: white;\r\n\t\tfont-size: 1em;\r\n\t\tpadding: 1em;\r\n\t\tborder: none;\r\n\t\tborder-radius: 10px 25px;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.addProjectMobile:hover {\r\n\t\ttransform: scaleX(1.1);\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/navBar.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--light-shade-1: rgb(196, 112, 196);\r\n\t--light-shade-2: #c291d9;\r\n\t--light-shade-3: rgb(170, 83, 170);\r\n\t--light-shade-4: purple;\r\n\t--light-shade-5: #e8cff3;\r\n\t--light-shade-6: #d6b5e5;\r\n\t--mobile-project-text: white;\r\n    --task-text: black;\r\n\t--radio-button: #c470c4;\r\n\t--content-bg: #fcfcfc;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: 'Literata';\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n}\r\n\r\n.content {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tbackground-color: var(--content-bg);\r\n}\r\n\r\n.blurredContent {\r\n\tfilter: blur(1px);\r\n}\r\n\r\n.lightMode {\r\n\tbackground-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n\tbackground-color: var(--light-shade-2);\r\n\twidth: 40vmin;\r\n\tmin-height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n\theight: 100%;\r\n\tpadding: 2vmin;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\trow-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tcolumn-gap: 1em;\r\n\tpadding: 1em;\r\n\tbackground-color: hsla(0, 100%, 100%, 0.5);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n}\r\n\r\n.hamburger-project-list {\r\n\tdisplay: none;\r\n}\r\n\r\n.list-items {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tlist-style: none;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n\tpadding: 10px;\r\n\tdisplay: flex;\r\n}\r\n\r\n.activeFolder {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n\theight: 1em;\r\n}\r\n\r\n.project-list {\r\n\twidth: 100%;\r\n\theight: 60vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tflex-grow: 1;\r\n}\r\n\r\n.project-list > p {\r\n\tfont-size: 1.5em;\r\n\twidth: 100%;\r\n\tpadding: 1rem;\r\n\tfont-weight: bold;\r\n\tbackground-color: var(--light-shade-3);\r\n\ttext-align: center;\r\n}\r\n\r\n.project-items {\r\n\twidth: 100%;\r\n\theight: inherit;\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 10px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.project-items-mobile {\r\n\twidth: 100%;\r\n\theight: inherit;\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1em;\r\n\toverflow-y: auto;\r\n\tcolor: var(--mobile-project-text);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n\tbackground: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n\tbackground: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n\twidth: 100%;\r\n\tpadding: 5px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n\twidth: 100%;\r\n\tfont-size: 1.2em;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n\theight: 15px;\r\n\tdisplay: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n\tbackground-color: var(--light-shade-1);\r\n\tcursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n\tdisplay: block;\r\n}\r\n\r\n.newProject {\r\n\tbottom: 2em;\r\n\twidth: 30vmin;\r\n\tcursor: pointer;\r\n}\r\n\r\n.addProject {\r\n\tfont-size: 1em;\r\n\theight: 3em;\r\n\twidth: 100%;\r\n\tcursor: pointer;\r\n\tbackground-color: var(--light-shade-4);\r\n\tborder: none;\r\n\tborder-radius: 50px;\r\n\tcolor: white;\r\n}\r\n\r\n/* dark mode */\r\n.theme {\r\n\theight: 0;\r\n\twidth: 0;\r\n\tvisibility: hidden;\r\n}\r\n\r\n.modeLabel {\r\n\tcursor: pointer;\r\n\twidth: 3em;\r\n\theight: 1.6em;\r\n\tbackground: var(--light-shade-1);\r\n\tfloat: right;\r\n\tborder-radius: 100px;\r\n\tposition: relative;\r\n}\r\n.modeLabel::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground-color: white;\r\n\tborder-radius: 90px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\ninput:checked + .modeLabel {\r\n\tbackground-color: black;\r\n}\r\ninput:checked + .modeLabel::after {\r\n\tleft: calc(100% - 5px);\r\n\ttransform: translateX(-100%);\r\n}\r\n.modeLabel:active:after {\r\n\twidth: 45px;\r\n}\r\n\r\n.darkMode {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tright: 20px;\r\n\tbackground-color: #fcfcfc;\r\n\tpadding: 0.5em;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n\t\trgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n\t\trgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.toggle {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n\t.displayProjectListMobile {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.content {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.navBar {\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\t}\r\n\r\n\t.navBarContent {\r\n\t\twidth: 100%;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: center;\r\n\t\talign-content: space-between;\r\n\t\tcolumn-gap: 60vw;\r\n\t}\r\n\r\n\t.officialHeader {\r\n\t\theight: 3em;\r\n\t\tfont-size: 1em;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcolumn-gap: 2vmin;\r\n\t\tpadding: 1vmin;\r\n\t}\r\n\r\n\t.officialHeader > img {\r\n\t\theight: 5vmin;\r\n\t\twidth: 5vmin;\r\n\t}\r\n\r\n\t.officialHeader > h1 {\r\n\t\tfont-size: 5vmin;\r\n\t}\r\n\r\n\t.project-list,\r\n\t.newProject {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.hamburger-project-list {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.hamburgerMenu {\r\n\t\theight: 5vmin;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.displayProjectListMobile {\r\n\t\tposition: absolute;\r\n\t\tz-index: 1;\r\n\t\theight: auto;\r\n\t\twidth: 100%;\r\n\t\tbackground-color: var(--light-shade-3);\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: flex-start;\r\n\t}\r\n\r\n\t.displayProjectListMobile > header {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-content: space-between;\r\n\t\tbackground-color: var(--light-shade-5);\r\n\t\tfont-size: 4vmin;\r\n\t}\r\n\r\n\t.newProjectMobile {\r\n\t\theight: 4em;\r\n\t\twidth: 100%;\r\n\t\tbackground-color: var(--light-shade-1);\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t.addProjectMobile {\r\n\t\theight: 100%;\r\n\t\tbackground-color: var(--light-shade-4);\r\n\t\tcolor: white;\r\n\t\tfont-size: 1em;\r\n\t\tpadding: 1em;\r\n\t\tborder: none;\r\n\t\tborder-radius: 10px 25px;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.addProjectMobile:hover {\r\n\t\ttransform: scaleX(1.1);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskPage.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/taskPage.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".directions {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 100%;\r\n\twidth: 100%;\r\n\tbackground-color: var(--light-shade-5);\r\n\tcolor: purple;\r\n}\r\n\r\n.taskPage {\r\n\theight: 100%;\r\n\tflex-grow: 1;\r\n\tpadding: 2em;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\trow-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: bold;\r\n\tcolor: var(--task-text);\r\n}\r\n\r\n.taskHeader {\r\n\twidth: 100%;\r\n\tbackground-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n\tpadding: 0.5em;\r\n\tbackground-color: inherit;\r\n\tfont-size: 1.5em;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\tcolumn-gap: 1em;\r\n\talign-items: center;\r\n}\r\n\r\n.addTask {\r\n\theight: 1em;\r\n\tbackground-color: white;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid white;\r\n\tcursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n}\r\n\r\n.taskContent > h3 {\r\n\tmargin-top: 3em;\r\n\tmargin-bottom: 1em;\r\n\theight: 2.5em;\r\n\tpadding: 0.5em;\r\n\talign-items: center;\r\n\tcolor: white;\r\n\tbackground-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList,\r\n.doneList {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\trow-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n\tfont-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n.noWorkDiv > p {\r\n\tcolor: var(--task-text);\r\n}\r\n\r\n.noWorkImage {\r\n\twidth: 40vw;\r\n}\r\n\r\n.todoTask,\r\n.doneTask {\r\n\tbackground-color: var(--light-shade-6);\r\n\tpadding: 0.5em;\r\n\twidth: 100%;\r\n\tfont-size: 1.2em;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.lowTodoTask {\r\n\tborder-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n\tborder-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n\tborder-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover,\r\n.doneTask:hover {\r\n\tbackground-color: var(--light-shade-1);\r\n\tcursor: pointer;\r\n}\r\n\r\n.todoDivMain,\r\n.completedDivMain {\r\n\twidth: 70%;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\tcolumn-gap: 1em;\r\n}\r\n\r\n.completedDivMain {\r\n\tflex-grow: 1;\r\n}\r\n\r\n.checkBtn {\r\n\ttransform: scale(2);\r\n\tmargin-left: 1em;\r\n}\r\n\r\n.checkBtn:checked {\r\n\taccent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTaskRadio {\r\n\tcolor: var(--radio-button);\r\n}\r\n\r\n.completedDivMain > span {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n\tdisplay: flex;\r\n\twidth: 30%;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button,\r\n.todoDivSettings > button {\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover,\r\n.todoDivSettings > button:hover {\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n.infoIconImg,\r\n.editTaskImage,\r\n.deleteTaskImage {\r\n\theight: 30px;\r\n\tbackground-color: inherit;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.directions {\r\n\t\tflex-grow: 1;\r\n\t}\r\n\r\n\t.project-item-mobile {\r\n\t\twidth: 100%;\r\n\t\tpadding: 5px;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t.project-item-mobile > span {\r\n\t\twidth: 100%;\r\n\t\tfont-size: 1.2em;\r\n\t\tword-wrap: break-word;\r\n\t}\r\n\r\n\t.removeProjectMobile {\r\n\t\theight: 15px;\r\n\t\tdisplay: none;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.project-item-mobile:hover > .removeProjectMobile {\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 460px) {\r\n\t.todoDivMain {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.todoDivSettings {\r\n\t\tmargin-top: 0.5em;\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: space-evenly;\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/taskPage.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,gBAAgB;CAChB,WAAW;CACX,sCAAsC;CACtC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;CACjB,uBAAuB;AACxB;;AAEA;CACC,WAAW;CACX,sCAAsC;AACvC;;AAEA;CACC,cAAc;CACd,yBAAyB;CACzB,gBAAgB;CAChB,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,uBAAuB;CACvB,kBAAkB;CAClB,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,aAAa;CACb,cAAc;CACd,mBAAmB;CACnB,YAAY;CACZ,sCAAsC;AACvC;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,WAAW;AACZ;;AAEA;;CAEC,sCAAsC;CACtC,cAAc;CACd,WAAW;CACX,gBAAgB;CAChB,aAAa;CACb,eAAe;CACf,8BAA8B;AAC/B;;AAEA;CACC,6CAA6C;AAC9C;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;;CAEC,sCAAsC;CACtC,eAAe;AAChB;;AAEA;;CAEC,UAAU;CACV,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,UAAU;CACV,6BAA6B;AAC9B;;AAEA;;CAEC,6BAA6B;CAC7B,YAAY;CACZ,eAAe;AAChB;;AAEA;;CAEC,qBAAqB;AACtB;;AAEA;;;CAGC,YAAY;CACZ,yBAAyB;CACzB,kBAAkB;AACnB;;AAEA;CACC;EACC,YAAY;CACb;;CAEA;EACC,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;CACxB;;CAEA;EACC,WAAW;EACX,gBAAgB;EAChB,qBAAqB;CACtB;;CAEA;EACC,YAAY;EACZ,aAAa;EACb,eAAe;CAChB;;CAEA;EACC,cAAc;CACf;AACD;;AAEA;CACC;EACC,WAAW;CACZ;;CAEA;EACC,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,6BAA6B;CAC9B;AACD","sourcesContent":[".directions {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 100%;\r\n\twidth: 100%;\r\n\tbackground-color: var(--light-shade-5);\r\n\tcolor: purple;\r\n}\r\n\r\n.taskPage {\r\n\theight: 100%;\r\n\tflex-grow: 1;\r\n\tpadding: 2em;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\trow-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: bold;\r\n\tcolor: var(--task-text);\r\n}\r\n\r\n.taskHeader {\r\n\twidth: 100%;\r\n\tbackground-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n\tpadding: 0.5em;\r\n\tbackground-color: inherit;\r\n\tfont-size: 1.5em;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\tcolumn-gap: 1em;\r\n\talign-items: center;\r\n}\r\n\r\n.addTask {\r\n\theight: 1em;\r\n\tbackground-color: white;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid white;\r\n\tcursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n}\r\n\r\n.taskContent > h3 {\r\n\tmargin-top: 3em;\r\n\tmargin-bottom: 1em;\r\n\theight: 2.5em;\r\n\tpadding: 0.5em;\r\n\talign-items: center;\r\n\tcolor: white;\r\n\tbackground-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList,\r\n.doneList {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\trow-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n\tfont-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n.noWorkDiv > p {\r\n\tcolor: var(--task-text);\r\n}\r\n\r\n.noWorkImage {\r\n\twidth: 40vw;\r\n}\r\n\r\n.todoTask,\r\n.doneTask {\r\n\tbackground-color: var(--light-shade-6);\r\n\tpadding: 0.5em;\r\n\twidth: 100%;\r\n\tfont-size: 1.2em;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.lowTodoTask {\r\n\tborder-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n\tborder-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n\tborder-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover,\r\n.doneTask:hover {\r\n\tbackground-color: var(--light-shade-1);\r\n\tcursor: pointer;\r\n}\r\n\r\n.todoDivMain,\r\n.completedDivMain {\r\n\twidth: 70%;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\tcolumn-gap: 1em;\r\n}\r\n\r\n.completedDivMain {\r\n\tflex-grow: 1;\r\n}\r\n\r\n.checkBtn {\r\n\ttransform: scale(2);\r\n\tmargin-left: 1em;\r\n}\r\n\r\n.checkBtn:checked {\r\n\taccent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTaskRadio {\r\n\tcolor: var(--radio-button);\r\n}\r\n\r\n.completedDivMain > span {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n\tdisplay: flex;\r\n\twidth: 30%;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button,\r\n.todoDivSettings > button {\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover,\r\n.todoDivSettings > button:hover {\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n.infoIconImg,\r\n.editTaskImage,\r\n.deleteTaskImage {\r\n\theight: 30px;\r\n\tbackground-color: inherit;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.directions {\r\n\t\tflex-grow: 1;\r\n\t}\r\n\r\n\t.project-item-mobile {\r\n\t\twidth: 100%;\r\n\t\tpadding: 5px;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t.project-item-mobile > span {\r\n\t\twidth: 100%;\r\n\t\tfont-size: 1.2em;\r\n\t\tword-wrap: break-word;\r\n\t}\r\n\r\n\t.removeProjectMobile {\r\n\t\theight: 15px;\r\n\t\tdisplay: none;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.project-item-mobile:hover > .removeProjectMobile {\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 460px) {\r\n\t.todoDivMain {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.todoDivSettings {\r\n\t\tmargin-top: 0.5em;\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: space-evenly;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/dialogBox.css":
/*!**********************************!*\
  !*** ./src/styles/dialogBox.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialogBox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialogBox.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialogBox.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialogBox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialogBox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialogBox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialogBox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/navBar.css":
/*!*******************************!*\
  !*** ./src/styles/navBar.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/navBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/taskPage.css":
/*!*********************************!*\
  !*** ./src/styles/taskPage.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");


class Project {
	constructor(name, todos = [], completed = []) {
		this.name = name;
		this.todos = [];
		if (todos.length > 0) {
			todos.forEach((todo) => {
				this.todos.push(
					new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](todo.title, todo.description, todo.due, todo.priority)
				);
			});
		}
		this.completed = [];
		if (completed.length > 0) {
			completed.forEach((todo) => {
				this.completed.push(
					new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](todo.title, todo.description, todo.due, todo.priority)
				);
			});
		}
	}
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
	constructor(name, description, due = null, priority = "low") {
		this.title = name;
		if (description == "") {
			description = "No description is available";
		}
		this.description = description;
		if (due == "" || due == null) {
			this.due = new Date().toJSON().slice(0, 10);
		} else {
			this.due = due;
		}
		this.priority = priority;
	}
}


/***/ }),

/***/ "./src/modules/dialogBox.js":
/*!**********************************!*\
  !*** ./src/modules/dialogBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "openDescriptionBox": () => (/* binding */ openDescriptionBox),
/* harmony export */   "openEditTaskForm": () => (/* binding */ openEditTaskForm),
/* harmony export */   "openNewProjectForm": () => (/* binding */ openNewProjectForm),
/* harmony export */   "openNewTaskForm": () => (/* binding */ openNewTaskForm)
/* harmony export */ });
/* harmony import */ var _styles_dialogBox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/dialogBox.css */ "./src/styles/dialogBox.css");
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/closeIcon.svg */ "./src/assets/closeIcon.svg");
/* harmony import */ var _taskPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskPage */ "./src/modules/taskPage.js");




function deleteForm() {
    const formContainer = document.querySelector('.formContainer');
    const content = document.querySelector('.content');
    content.removeChild(formContainer);
}

function openNewProjectForm() {
    const content = document.querySelector('.content');
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('newProjectForm');
    newProjectForm.classList.add('formOpen');

    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = 'New project';
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', (e) => closeForm(e, true, false));
    header.appendChild(closeImage);
    newProjectForm.appendChild(header);

    const main = document.createElement('main');
    main.innerHTML = `
        <form class="Form">
        <label for="projectName">Project Name</label>
        <input type="text" required id="projectName" name="projectName" placeholder="Enter Project Name">
        <button type="submit" class="addBtn">Add Project</button>
        </form>`
    newProjectForm.appendChild(main);

    formContainer.appendChild(newProjectForm);
    content.appendChild(formContainer);

    const form = document.querySelector('.Form');
    form.addEventListener('submit', _taskPage__WEBPACK_IMPORTED_MODULE_2__.addProject);
}

function createNewTaskForm(projectName) {
    const content = document.querySelector('.content');
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const newTaskForm = document.createElement('div');
    newTaskForm.classList.add('newForm');
    newTaskForm.classList.add('formOpen');

    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = projectName;
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', closeForm);
    header.appendChild(closeImage);
    newTaskForm.appendChild(header);

    const defaultDue = new Date().toJSON().slice(0, 10);

    const main = document.createElement('main');
    main.innerHTML = `
        <form class="Form">
        <label for="taskName">Title <sup>*</sup></label>
        <input type="text" required id="taskName" name="taskName" placeholder="Enter Task Name">
        <label for="taskDescription">Description (Optional)</label>
        <input type="text" id="taskDescription" name="taskDescription" placeholder="Enter Description">
        <label for="dateEntered">Due Date (Optional) </label>
        <input type="date" id="dateEntered" name="dateEntered" value="${defaultDue}"/>
        <label for="priority">Priority (Optional) </label>
        <select id="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button type="submit" class="addBtn">Add Task</button>
        </form>`
    newTaskForm.appendChild(main);

    formContainer.appendChild(newTaskForm);
    content.appendChild(formContainer);
}

function openNewTaskForm(e) {
    const projectName = e.srcElement.parentElement.parentElement.
                        parentNode.childNodes[0].innerText;
    createNewTaskForm(projectName);
    const form = document.querySelector('.Form');
    form.addEventListener('submit', _taskPage__WEBPACK_IMPORTED_MODULE_2__.addTask);
}

function openDescriptionBox(title, description, due, priority) {
    const content = document.querySelector('.content');
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const detailsForm = document.createElement('div');
    detailsForm.classList.add('newForm');
    detailsForm.classList.add('formOpen');
    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = 'Description';
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', function() {
        detailsForm.classList.replace('formOpen', 'formClose');
        formContainer.classList.replace('formContainerOpen', 'formContainerClose');
        setTimeout(deleteForm, 1000);
    });
    header.appendChild(closeImage);
    detailsForm.appendChild(header);

    const main = document.createElement('main');

    const descDiv = document.createElement('div');
    const titleDisplay = document.createElement('h3');
    titleDisplay.innerText = 'Title';
    descDiv.appendChild(titleDisplay);
    const titleValue = document.createElement('p');
    titleValue.innerText = title;
    descDiv.appendChild(titleValue);
    const lineBreak1 = document.createElement('hr');
    descDiv.appendChild(lineBreak1);

    const descDisplay = document.createElement('h3');
    descDisplay.innerText = 'Description';
    descDiv.appendChild(descDisplay);
    const descValue = document.createElement('p');
    descValue.innerText = description;
    descDiv.appendChild(descValue);
    const lineBreak2 = document.createElement('hr');
    descDiv.appendChild(lineBreak2);

    const dueDisplay = document.createElement('h3');
    dueDisplay.innerText = 'Due Date';
    descDiv.appendChild(dueDisplay);
    const dueValue = document.createElement('p');
    dueValue.innerText = due;
    descDiv.appendChild(dueValue);
    const lineBreak3 = document.createElement('hr');
    descDiv.appendChild(lineBreak3);

    const priorityDisplay = document.createElement('h3');
    priorityDisplay.innerText = 'Priority';
    descDiv.appendChild(priorityDisplay);
    const priorityValue = document.createElement('p');
    priorityValue.innerText = priority;
    descDiv.appendChild(priorityValue);

    descDiv.classList.add('descriptionDiv');
    main.appendChild(descDiv);
    main.classList.add('descriptionDetails');
    detailsForm.appendChild(main);

    formContainer.appendChild(detailsForm);
    content.appendChild(formContainer);
}

function openEditTaskForm(projectName, title, description, due, priority) {
    createNewTaskForm(projectName);
    
    /* Add all existing informations */
    const taskName = document.querySelector('#taskName');
    taskName.value = title;
    const taskDescription = document.querySelector('#taskDescription');
    taskDescription.value = description;
    const taskDueDate = document.querySelector('#dateEntered');
    taskDueDate.value = due;
    const taskPriority = document.querySelector('#priority');
    taskPriority.value = priority;

    /* Rename Button name */
    const editBtn = document.querySelector('.addBtn');
    editBtn.innerText = "Save Task";

    const form = document.querySelector('.Form');
    form.addEventListener('submit', (e) => (0,_taskPage__WEBPACK_IMPORTED_MODULE_2__.updateTask)(e, title));
}

function closeForm(e, isCloseProject=false, isCloseTask=true) {
    const formContainer = document.querySelector('.formContainer');
    if (isCloseProject == true) {
        const newProjectForm = document.querySelector('.newProjectForm');
        newProjectForm.classList.replace('formOpen', 'formClose');
    } else if (isCloseTask == true) {
        const newTaskForm = document.querySelector('.newForm');
        newTaskForm.classList.replace('formOpen', 'formClose');
    }
    formContainer.classList.replace('formContainerOpen', 'formContainerClose');
    setTimeout(deleteForm, 1000);
}





/***/ }),

/***/ "./src/modules/navBar.js":
/*!*******************************!*\
  !*** ./src/modules/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMode": () => (/* binding */ applyMode),
/* harmony export */   "loadNavBar": () => (/* binding */ loadNavBar)
/* harmony export */ });
/* harmony import */ var _styles_navBar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/navBar.css */ "./src/styles/navBar.css");
/* harmony import */ var _styles_dialogBox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/dialogBox.css */ "./src/styles/dialogBox.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_hamburgerIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hamburgerIcon.png */ "./src/assets/hamburgerIcon.png");
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/closeIcon.svg */ "./src/assets/closeIcon.svg");
/* harmony import */ var _taskPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskPage.js */ "./src/modules/taskPage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");








function displayProjectsFromMenu() {
	const content = document.querySelector('.content');

	const menuDialog = document.createElement('div');
	menuDialog.classList.add('displayProjectListMobile');

	const header = document.createElement('header');
	const textHeader = document.createElement('span');
	textHeader.innerText = 'Project List';
	header.appendChild(textHeader);

	const closeImage = new Image();
	closeImage.src = _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__;
	closeImage.classList.add('closeImage');
	closeImage.addEventListener('click', function () {
		content.removeChild(menuDialog);
	});
	header.appendChild(closeImage);
	menuDialog.appendChild(header);

	const newProject = document.createElement('div');
	newProject.classList.add('newProjectMobile');
	const addProject = document.createElement('button');
	addProject.innerText = 'Add New Project';
	addProject.classList.add('addProjectMobile');
	newProject.appendChild(addProject);
	menuDialog.appendChild(newProject);

	const projectItems = document.createElement('div');
	projectItems.classList.add('project-items-mobile');
	menuDialog.appendChild(projectItems);
	content.appendChild(menuDialog);

	(0,_taskPage_js__WEBPACK_IMPORTED_MODULE_5__.loadProjects)(true);
}

function applyMode() {
	const lightMode = {
		'light-shade-1': 'rgb(196, 112, 196)',
		'light-shade-2': '#C291D9',
		'light-shade-3': 'rgb(170, 83, 170)',
		'light-shade-4': 'purple',
		'light-shade-5': '#E8CFF3',
		'light-shade-6': '#D6B5E5',
		'mobile-project-text': 'white',
		'task-text': 'black',
		'radio-button': '#c470c4',
		'content-bg': '#FCFCFC',
	};
	const darkMode = {
		'light-shade-1': '#EAEAEA',
		'light-shade-2': '#C5C5C5',
		'light-shade-3': '#8D8D8D',
		'light-shade-4': 'grey',
		'light-shade-5': '#C5C5C5',
		'light-shade-6': 'lightgrey',
		'mobile-project-text': 'black',
		'task-text': 'white',
		'radio-button': '#black',
		'content-bg': '#333333',
	};
	const transformKey = (key) =>
		'--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

	const root = document.querySelector(':root');

	const changeColors = (colors) => {
		Object.keys(colors).map((key) => {
			root.style.setProperty(transformKey(key), colors[key]);
		});
	};
	const checkbox = document.querySelector('input[name=theme]');
	checkbox.addEventListener('change', ({ target }) => {
		target.checked ? changeColors(darkMode) : changeColors(lightMode);
	});

	const isModeSet = (key) => localStorage.getItem(key) != null;

	checkbox.addEventListener('change', ({ target }) => {
		if (target.checked) {
			changeColors(darkMode);
			(0,_storage__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)('mode', 'darkMode');
		} else {
			changeColors(lightMode);
			(0,_storage__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)('mode', 'lightMode');
		}
	});

	if (!isModeSet('mode')) (0,_storage__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)('mode', 'lightMode');

	if ((0,_storage__WEBPACK_IMPORTED_MODULE_6__.getLocalStorage)('mode') === 'lightMode') {
		checkbox.removeAttribute('checked');
		changeColors(lightMode);
	} else {
		checkbox.setAttribute('checked', '');
		changeColors(darkMode);
	}
}

function loadNavBar() {
	const content = document.querySelector('.content');

	const div = document.createElement('div');
	div.classList.add('navBar');
	div.innerHTML = `<div class="navBarContent">
        <div class="officialHeader">
            <h1>TodoList</h1>
        </div>
        <div class="hamburger-project-list"></div>
        <div class="project-list">
            <p>My Projects</p>
            <ul class="project-items"></ul>
        </div>
        <div class="newProject">
            <button class="addProject">Add New Project</button>
        </div>
    </div>`;

	content.appendChild(div);

	const logoImage = new Image();
	logoImage.alt = 'Picture of Offcial logo';
	logoImage.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;

	const officialHeader = document.querySelector('.officialHeader');
	officialHeader.appendChild(logoImage);

	const hamburgerMenu = document.querySelector('.hamburger-project-list');
	const menuImage = new Image();
	menuImage.src = _assets_hamburgerIcon_png__WEBPACK_IMPORTED_MODULE_3__;
	menuImage.alt = 'Hamburger Menu picture';
	menuImage.classList.add('hamburgerMenu');
	hamburgerMenu.appendChild(menuImage);
	hamburgerMenu.addEventListener('click', displayProjectsFromMenu);
	(0,_taskPage_js__WEBPACK_IMPORTED_MODULE_5__.loadProjects)();
}




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "removeLocalStorage": () => (/* binding */ removeLocalStorage),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
function setLocalStorage(key, value) {
	if (value.length > 0) {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
}

function getLocalStorage(key) {
	return JSON.parse(window.localStorage.getItem(key));
}

function removeLocalStorage(key) {
	window.localStorage.removeItem(key);
	setLocalStorage(key, []);
}



/***/ }),

/***/ "./src/modules/taskPage.js":
/*!*********************************!*\
  !*** ./src/modules/taskPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _styles_taskPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/taskPage.css */ "./src/styles/taskPage.css");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/add.png */ "./src/assets/add.png");
/* harmony import */ var _assets_infoIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/infoIcon.png */ "./src/assets/infoIcon.png");
/* harmony import */ var _assets_editBtn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/editBtn.png */ "./src/assets/editBtn.png");
/* harmony import */ var _assets_deleteBtn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/deleteBtn.png */ "./src/assets/deleteBtn.png");
/* harmony import */ var _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/trash-can.png */ "./src/assets/trash-can.png");
/* harmony import */ var _assets_completedTask_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/completedTask.jpg */ "./src/assets/completedTask.jpg");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _dialogBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogBox */ "./src/modules/dialogBox.js");












let key = "projectList";

let projectList = (0,_storage__WEBPACK_IMPORTED_MODULE_9__.getLocalStorage)("projectList");
if (projectList == null || !projectList) {
	projectList = [];
	(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

const sampleProjects = [
	{
		name: "Web Development",
		todos: [
			{
				title: "Work on ToDo List",
				description: `Add a 'AddTask' button on Odin's TODO List Project`,
				due: null,
				priority: "high",
			},
			{
				title: "Start studying OOP",
				description: `Start reading OOP Chapter from Odin Project`,
				due: null,
				priority: "medium",
			},
			{
				title: "Read others websites",
				description: `Find and read 2 of others websites from Odin's discord`,
				due: null,
				priority: "low",
			},
		],
		completed: [
			{
				title: `Add a 'AddProject' button on ToDo List`,
				description: `Add a 'AddProject' button on Odin's TODO List Project`,
				due: null,
				priority: "high",
			},
		],
	},
	{
		name: "Work",
		todos: [],
		completed: [
			{
				title: "Send email to Sonia",
				description: `Write Sonia about yesterday's regression test results`,
				due: null,
				priority: "high",
			},
		],
	},
];

function getTask(project, taskName) {
	let retTask = undefined;

	project.todos.forEach((task) => {
		if (task.title == taskName) retTask = task;
	});

	if (retTask != undefined) return retTask;

	project.completed.forEach((task) => {
		if (task.title == taskName) retTask = task;
	});

	return retTask;
}

function getProject(projectName) {
	let retProject = undefined;
	projectList.forEach((project) => {
		if (project.name == projectName) {
			retProject = project;
			return retProject;
		}
	});

	return retProject;
}

let currentActiveFolder = undefined;

function setFirstAsCurrentFolder() {
	/* Desktop view */
	const desktopItems = document.querySelector(".project-items");
	if (desktopItems.childNodes.length > 0) {
		const defaultTaskPage =
			desktopItems.childNodes[0].childNodes[0].innerText;
		setCurrentActiveFolder(defaultTaskPage);
	}

	/* Mobile view */
	const mobileItems = document.querySelector(".project-items-mobile");
	if (mobileItems != null && mobileItems.childNodes.length > 0) {
		const defaultTaskPage = mobileItems.childNodes[0].childNodes[0].innerText;
		setCurrentActiveFolder(defaultTaskPage);
	}
}

function setCurrentActiveFolder(projectName) {
	// if (currentActiveFolder == projectName) return;
	const projectItemsDesktop = document.querySelector(".project-items");
	const projectItemsMobile = document.querySelector(".project-items-mobile");
	if (currentActiveFolder != undefined) {
		projectItemsDesktop.childNodes.forEach((projectDesktop) => {
			if (projectDesktop.innerText == currentActiveFolder) {
				projectDesktop.classList.remove("activeFolder");
			}
		});
		if (projectItemsMobile != null) {
			projectItemsMobile.childNodes.forEach((projectMobile) => {
				if (projectMobile.innerText == currentActiveFolder) {
					projectMobile.classList.remove("activeFolder");
				}
			});
		}
	}
	currentActiveFolder = projectName;
	projectItemsDesktop.childNodes.forEach((projectDesktop) => {
		if (projectDesktop.innerText == currentActiveFolder) {
			projectDesktop.classList.add("activeFolder");
		}
	});
	if (projectItemsMobile != null) {
		projectItemsMobile.childNodes.forEach((projectMobile) => {
			if (projectMobile.innerText == currentActiveFolder) {
				projectMobile.classList.add("activeFolder");
			}
		});
	}
	createTaskPage(currentActiveFolder);
}

function changeActiveFolder(e) {
	setCurrentActiveFolder(e.srcElement.innerText);
}

function addToProjectList(newProjectName) {
	projectList.push(new _Project__WEBPACK_IMPORTED_MODULE_8__["default"](newProjectName));
	(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

function deleteFromProjectList(newProject) {
	for (let i = 0; i < projectList.length; i++) {
		if (projectList[i].name == newProject) {
			delete projectList[i];
			projectList.splice(i, 1);
			if (projectList.length === 0) (0,_storage__WEBPACK_IMPORTED_MODULE_9__.removeLocalStorage)(key);
			else (0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
		}
	}
	/* Display Blank Page to indicate steps to use TODO List */
	if (projectList.length == 0) {
		const content = document.querySelector(".content");
		/* Delete previous existed Task Page Display */
		const prevTaskPage = document.querySelector(".taskPage");
		if (prevTaskPage != null) {
			content.removeChild(prevTaskPage);
		}

		const projectItems = document.querySelector(".project-items-mobile");
		if (projectItems != null) {
			projectItems.innerText = "No Project";
		}

		const directions = document.createElement("div");
		const header = document.createElement("h2");
		header.innerText = "Please Add New Project First";

		directions.appendChild(header);
		directions.classList.add("directions");
		content.appendChild(directions);
	}
}

function addEvent(newListItem) {
	newListItem.addEventListener("click", changeActiveFolder);
}

function deleteEvent(project) {
	project.removeEventListener("click", changeActiveFolder);
}

function removeProject(e) {
	const projectItemsDesktop = document.querySelector(".project-items");
	const projectItemsMobile = document.querySelector(".project-items-mobile");
	const projectName = e.target.parentElement.querySelector("span").innerText;

	if (currentActiveFolder == projectName) {
		setFirstAsCurrentFolder();
	}
	projectItemsDesktop.childNodes.forEach((projectDesktop) => {
		if (projectDesktop.innerText == projectName) {
			deleteEvent(projectDesktop);
			projectItemsDesktop.removeChild(projectDesktop);
		}
	});
	if (projectItemsMobile != null) {
		projectItemsMobile.childNodes.forEach((projectMobile) => {
			if (projectMobile.innerText == projectName) {
				deleteEvent(projectMobile);
				projectItemsMobile.removeChild(projectMobile);
			}
		});
	}
	deleteFromProjectList(projectName);
}

function displayProject(name) {
	const newListItem = document.createElement("li");
	newListItem.classList.add("project-item");
	newListItem.classList.add("list-item");

	const newProjectName = document.createElement("span");
	newProjectName.innerText = name;
	newListItem.appendChild(newProjectName);

	const removeImage = new Image();
	removeImage.src = _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_5__;
	removeImage.classList.add("removeProject");
	removeImage.addEventListener("click", removeProject);

	newListItem.appendChild(removeImage);
	addEvent(newListItem);

	return newListItem;
}

function displayProjectMobile(name) {
	const newListItem = document.createElement("li");
	newListItem.classList.add("project-item-mobile");
	newListItem.classList.add("list-item");

	const newProjectName = document.createElement("span");
	newProjectName.innerText = name;
	newListItem.appendChild(newProjectName);

	const removeImage = new Image();
	removeImage.src = _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_5__;
	removeImage.classList.add("removeProjectMobile");
	removeImage.addEventListener("click", removeProject);

	newListItem.appendChild(removeImage);
	addEvent(newListItem);

	return newListItem;
}

function addProjectToList(projectName, isMobile = false) {
	const projectItems = document.querySelector(".project-items");
	const newListItem = displayProject(projectName);
	projectItems.appendChild(newListItem);

	/* Set New Project as Current Project */
	setCurrentActiveFolder(projectName);
}

function addProjectToListMobile(projectName) {
	const projectItems = document.querySelector(".project-items-mobile");
	const newListItem = displayProjectMobile(projectName);
	projectItems?.appendChild(newListItem);

	/* Set New Project as Current Project */
	setCurrentActiveFolder(projectName);
}

function addProject(e) {
	e.preventDefault();
	const projectName = document.querySelector("#projectName");
	/* Add to storage */
	addToProjectList(projectName.value);
	/* Add to DOM */
	addProjectToList(projectName.value);
	addProjectToListMobile(projectName.value);
	// closeForm(null, true, false);
}

function loadProjects(isMobile = false) {
	if (isMobile == false && projectList.length == 0) {
		sampleProjects.forEach((sample) => {
			const newProject = new _Project__WEBPACK_IMPORTED_MODULE_8__["default"](
				sample.name,
				sample.todos,
				sample.completed
			);
			projectList.push(newProject);
		});
		(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
	}

	if (isMobile == false) {
		projectList.forEach((project) => {
			addProjectToList(project.name);
		});

		const newProjectBtn = document.querySelector(".addProject");
		newProjectBtn.addEventListener("click", _dialogBox__WEBPACK_IMPORTED_MODULE_10__.openNewProjectForm);
	} else {
		projectList.forEach((project) => {
			addProjectToListMobile(project.name);
		});

		const newProjectBtn = document.querySelector(".addProjectMobile");
		newProjectBtn.addEventListener("click", _dialogBox__WEBPACK_IMPORTED_MODULE_10__.openNewProjectForm);
	}

	const folders = document.querySelectorAll(".list-item");

	folders.forEach((folder) => {
		addEvent(folder);
	});
}

/****** Task Functions *******/
function createTaskPage(currentActiveFolder) {
	const content = document.querySelector(".content");
	/* Delete previous existed Page Display */
	const directions = document.querySelector(".directions");
	if (directions != null) {
		content.removeChild(directions);
	}
	const prevTaskPage = document.querySelector(".taskPage");
	if (prevTaskPage != null) {
		content.removeChild(prevTaskPage);
	}

	const taskPage = document.createElement("div");
	taskPage.classList.add("taskPage");
	taskPage.innerHTML = `
    <div class="taskHeader">
        <button>Add New Task</button>
    </div>
    <div class="taskContent">
        <div class="todoList"></div>
        <h3>Completed Tasks</h3>
        <div class="doneList"></div>
    </div>
    `;

	content.appendChild(taskPage);

	const addBtn = document.querySelector(".taskHeader").querySelector("button");
	const addTask = new Image();
	addTask.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_1__;
	addTask.classList.add("addTask");
	addTask.addEventListener("click", _dialogBox__WEBPACK_IMPORTED_MODULE_10__.openNewTaskForm);
	addBtn.prepend(addTask);

	const projectName = currentActiveFolder;
	const curretFolder = document.createElement("p");
	curretFolder.innerText = projectName;
	taskPage.prepend(curretFolder);
	displayTaskPage(projectName);
}

function markTaskAsTodo(projectName, taskName) {
	projectList.forEach((project) => {
		if (project.name == projectName) {
			for (let i = 0; i < project.completed.length; i++) {
				if (project.completed[i].title == taskName) {
					project.todos.push(
						new _Task__WEBPACK_IMPORTED_MODULE_7__["default"](
							project.completed[i].title,
							project.completed[i].description,
							project.completed[i].due,
							project.completed[i].priority
						)
					);
					delete project.completed[i];
					project.completed.splice(i, 1);
					break;
				}
			}
		}
	});
	(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

function markTaskAsCompleted(projectName, taskName) {
	projectList.forEach((project) => {
		if (project.name == projectName) {
			for (let i = 0; i < project.todos.length; i++) {
				if (project.todos[i].title == taskName) {
					project.completed.push(
						new _Task__WEBPACK_IMPORTED_MODULE_7__["default"](
							project.todos[i].title,
							project.todos[i].description,
							project.todos[i].due,
							project.todos[i].priority
						)
					);
					delete project.todos[i];
					project.todos.splice(i, 1);
					break;
				}
			}
		}
	});
	(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

function addTaskToProject(
	projectName,
	taskName,
	taskDescription,
	taskDue,
	taskPriority,
	isTodoItem = true
) {
	for (let i = 0; i < projectList.length; i++) {
		if (projectList[i].name == projectName) {
			if (isTodoItem == true) {
				projectList[i].todos.push(
					new _Task__WEBPACK_IMPORTED_MODULE_7__["default"](taskName, taskDescription, taskDue, taskPriority)
				);
			} else {
				projectList[i].completed.push(
					new _Task__WEBPACK_IMPORTED_MODULE_7__["default"](taskName, taskDescription, taskDue, taskPriority)
				);
			}
		}
	}
	(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

function updateTaskInProject(
	projectName,
	oldTitle,
	taskName,
	taskDescription,
	taskDue,
	taskPriority,
	isTodoItem = true
) {
	projectList.forEach((project) => {
		if (project.name == projectName) {
			for (let i = 0; i < project.todos.length; i++) {
				if (project.todos[i].title == oldTitle) {
					project.todos[i].title = taskName;
					project.todos[i].description = taskDescription;
					project.todos[i].due = taskDue;
					project.todos[i].priority = taskPriority;
				}
			}
		}
	});
	(0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

function deleteTaskFromProject(projectName, taskTitle) {
	projectList.forEach((project) => {
		if (project.name == projectName) {
			for (let i = 0; i < project.todos.length; i++) {
				if (project.todos[i].title == taskTitle) {
					delete project.todos[i];
					project.todos.splice(i, 1);
					break;
				}
			}
		}
	});
	if (projectList.length === 0) (0,_storage__WEBPACK_IMPORTED_MODULE_9__.removeLocalStorage)(key);
	else (0,_storage__WEBPACK_IMPORTED_MODULE_9__.setLocalStorage)(key, projectList);
}

function addTask(e) {
	e.preventDefault();
	const taskName = document.querySelector("#taskName");
	const taskDescription = document.querySelector("#taskDescription");
	const taskDueDate = document.querySelector("#dateEntered");
	const taskPriority = document.querySelector("#priority");

	/* Add to storage */
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;
	addTaskToProject(
		projectName,
		taskName.value,
		taskDescription.value,
		taskDueDate.value,
		taskPriority.value
	);

	taskName.value = "";
	displayTaskPage(projectName);
}

function deleteTODO(todoList, todoDiv) {
	todoList.removeChild(todoDiv);
	/* Delete From storage */
}

function changeStatus(e) {
	const taskName = e.currentTarget.parentElement.childNodes[1].innerText;
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;

	/* Check if this task is pending or completed*/
	const taskDiv = e.currentTarget.parentElement.parentElement;
	if (taskDiv.classList.contains("todoTask")) {
		markTaskAsCompleted(projectName, taskName);
	} else if (taskDiv.classList.contains("doneTask")) {
		markTaskAsTodo(projectName, taskName);
	}
	displayTaskPage(projectName);
}

function showInfo(e) {
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;
	const taskName = e.currentTarget.parentElement.parentElement.childNodes[0].innerText;

	const project = getProject(projectName);
	const task = getTask(project, taskName);

	if (task == undefined) {
		return;
	}

	(0,_dialogBox__WEBPACK_IMPORTED_MODULE_10__.openDescriptionBox)(task.title, task.description, task.due, task.priority);
}

function updateTask(e, title) {
	e.preventDefault();
	const taskName = document.querySelector("#taskName");
	const taskDescription = document.querySelector("#taskDescription");
	const taskDueDate = document.querySelector("#dateEntered");
	const taskPriority = document.querySelector("#priority");

	/* Update to storage */
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;
	updateTaskInProject(
		projectName,
		title,
		taskName.value,
		taskDescription.value,
		taskDueDate.value,
		taskPriority.value
	);
	displayTaskPage(projectName);
	(0,_dialogBox__WEBPACK_IMPORTED_MODULE_10__.closeForm)();
}

function editTask(e) {
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;
	const taskName =
		e.srcElement.parentElement.parentElement.previousSibling.innerText;

	const project = getProject(projectName);
	const task = getTask(project, taskName);

	if (task == undefined) {
		return;
	}

	(0,_dialogBox__WEBPACK_IMPORTED_MODULE_10__.openEditTaskForm)(
		projectName,
		task.title,
		task.description,
		task.due,
		task.priority
	);
}

function deleteTask(e) {
	const taskName =
		e.srcElement.parentElement.parentElement.previousSibling.innerText;

	/* Delete from storage */
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;
	deleteTaskFromProject(projectName, taskName);

	displayTaskPage(projectName);
}

function displayTODO(todoList, todo) {
	const todoDiv = document.createElement("div");

	const todoDivMain = document.createElement("div");
	const checkBtn = document.createElement("input");
	checkBtn.setAttribute("type", "checkbox");
	checkBtn.addEventListener("change", changeStatus);
	checkBtn.classList.add('checkBtn');
	todoDivMain.appendChild(checkBtn);
	const todoTitle = document.createElement("span");
	todoTitle.innerText = todo.title;
	todoDivMain.appendChild(todoTitle);
	todoDivMain.classList.add("todoDivMain");
	todoDiv.appendChild(todoDivMain);

	const todoDivSettings = document.createElement("div");
	const details = document.createElement("button");
	const infoIconImg = new Image();
	infoIconImg.src = _assets_infoIcon_png__WEBPACK_IMPORTED_MODULE_2__;
	infoIconImg.alt = "Image of Info Icon";
	infoIconImg.classList.add("infoIconImg");
	details.addEventListener("click", showInfo);
	details.appendChild(infoIconImg);
	todoDivSettings.appendChild(details);

	const editBtn = document.createElement("button");
	const editTaskImage = new Image();
	editTaskImage.src = _assets_editBtn_png__WEBPACK_IMPORTED_MODULE_3__;
	editTaskImage.alt = "Edit for Task";
	editTaskImage.classList.add("editTaskImage");
	editBtn.appendChild(editTaskImage);
	editBtn.addEventListener("click", editTask);

	todoDivSettings.appendChild(editBtn);
	const deleteBtn = document.createElement("button");
	const deleteTaskImage = new Image();
	deleteTaskImage.src = _assets_deleteBtn_png__WEBPACK_IMPORTED_MODULE_4__;
	deleteTaskImage.alt = "Deelet the Task";
	deleteTaskImage.classList.add("deleteTaskImage");
	deleteBtn.appendChild(deleteTaskImage);
	deleteBtn.addEventListener("click", deleteTask);

	todoDivSettings.appendChild(deleteBtn);
	todoDivSettings.classList.add("todoDivSettings");

	todoDiv.appendChild(todoDivSettings);
	todoDiv.classList.add("todoTask");
	switch (todo.priority) {
		case "high":
			todoDiv.classList.add("highTodoTask");
			break;
		case "medium":
			todoDiv.classList.add("mediumTodoTask");
			break;
		default:
			todoDiv.classList.add("lowTodoTask");
	}
	todoList.appendChild(todoDiv);
}

function displayCompleted(doneList, completedTask) {
	const completedDiv = document.createElement("div");

	const completedDivMain = document.createElement("div");
	const checkBtn = document.createElement("input");
	checkBtn.setAttribute("type", "checkbox");
	checkBtn.addEventListener("change", changeStatus);
	checkBtn.checked = true;
	checkBtn.classList.add('checkBtn');
	completedDivMain.appendChild(checkBtn);
	const completedTitle = document.createElement("span");
	completedTitle.innerText = completedTask.title;
	completedDivMain.appendChild(completedTitle);
	completedDivMain.classList.add("completedDivMain");

	completedDiv.appendChild(completedDivMain);
	completedDiv.classList.add("doneTask");
	doneList.appendChild(completedDiv);
}

function displayTaskPage(projectName) {
	projectList.forEach((project) => {
		if (project.name == projectName) {
			const todoList = document.querySelector(".todoList");
			const doneList = document.querySelector(".doneList");

			// clear prev elements
			todoList.innerHTML = "";

			// todo list
			if (project.todos.length == 0) {
				// display no work picture
				const noWorkDiv = document.createElement("div");
				noWorkDiv.classList.add("noWorkDiv");
				const noWorkImage = new Image();
				noWorkImage.src = _assets_completedTask_jpg__WEBPACK_IMPORTED_MODULE_6__;
				noWorkImage.classList.add("noWorkImage");
				noWorkDiv.appendChild(noWorkImage);
				const noWorkText = document.createElement("p");
				noWorkText.innerText = "No work for today. Enjoy your day.";
				noWorkDiv.appendChild(noWorkText);
				todoList.appendChild(noWorkDiv);
			} else {
				// clear prev elements, in case of no work image is here
				todoList.innerHTML = "";

				project.todos.forEach((todo) => {
					displayTODO(todoList, todo);
				});
			}
			// completed list
			doneList.innerHTML = "";
			project.completed.forEach((completedTask) => {
				displayCompleted(doneList, completedTask);
			});
		}
	});
}




/***/ }),

/***/ "./src/assets/add.png":
/*!****************************!*\
  !*** ./src/assets/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb2e346234184fb6bb62.png";

/***/ }),

/***/ "./src/assets/closeIcon.svg":
/*!**********************************!*\
  !*** ./src/assets/closeIcon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08233535a9321b39bf5f.svg";

/***/ }),

/***/ "./src/assets/completedTask.jpg":
/*!**************************************!*\
  !*** ./src/assets/completedTask.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "727c97dca6548d7c77b5.jpg";

/***/ }),

/***/ "./src/assets/deleteBtn.png":
/*!**********************************!*\
  !*** ./src/assets/deleteBtn.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2fb920066b17ef27c82.png";

/***/ }),

/***/ "./src/assets/editBtn.png":
/*!********************************!*\
  !*** ./src/assets/editBtn.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df6fdbd2f539bff41092.png";

/***/ }),

/***/ "./src/assets/hamburgerIcon.png":
/*!**************************************!*\
  !*** ./src/assets/hamburgerIcon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ddc344d9a51d1e83e7d.png";

/***/ }),

/***/ "./src/assets/infoIcon.png":
/*!*********************************!*\
  !*** ./src/assets/infoIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb4f991b4d1b1d8b7bc1.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6932d5e80a58e1682c8.png";

/***/ }),

/***/ "./src/assets/trash-can.png":
/*!**********************************!*\
  !*** ./src/assets/trash-can.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92881cf98b591daca7ae.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _modules_navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navBar */ "./src/modules/navBar.js");


(0,_modules_navBar__WEBPACK_IMPORTED_MODULE_0__.loadNavBar)();
(0,_modules_navBar__WEBPACK_IMPORTED_MODULE_0__.applyMode)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUN5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdzQnpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBdUQ7QUFDdkQ7QUFDQSwyREFBVTtBQUNWLDBEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2RpYWxvZ0JveC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdkJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Rhc2tQYWdlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvZGlhbG9nQm94LmNzcz9lN2FjIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzPzU2ZTIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Rhc2tQYWdlLmNzcz9iZDk3Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2RpYWxvZ0JveC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL25hdkJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJPcGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lckNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwJTtcXG59XFxuXFxuLm5ld1Byb2plY3RGb3JtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDMwdm1heDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3Rm9ybSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA3MHZtaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm1PcGVuIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZtaW4pO1xcbiAgICBhbmltYXRpb246IHBvcGluIDFzO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9ybUNsb3NlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIGFuaW1hdGlvbjogcG9wb3V0IDFzO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25EZXRhaWxzIHtcXG4gICAgbWFyZ2luOiAxZW07XFxufVxcblxcbkBrZXlmcmFtZXMgcG9waW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSg1dm1pbik7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcG9wb3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDV2bWluKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2VJbWFnZSB7XFxuICAgIGhlaWdodDogNXZtaW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbm1haW4gPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICByb3ctZ2FwOiAxZW07XFxufVxcbmlucHV0Om5vdCguZG9uZVRhc2tSYWRpbyksIHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmFkZEJ0biB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAxZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLm5ld1Byb2plY3RGb3JtIHtcXG4gICAgICAgIHdpZHRoOiA3MHZtaW47XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaWFsb2dCb3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixNQUFNO0lBQ04sNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxNQUFNO0lBQ04sVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyT3BlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZvcm1Db250YWluZXJDbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMCU7XFxufVxcblxcbi5uZXdQcm9qZWN0Rm9ybSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAzMHZtYXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ld0Zvcm0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNzB2bWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtT3BlbiB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2bWluKTtcXG4gICAgYW5pbWF0aW9uOiBwb3BpbiAxcztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZvcm1DbG9zZSB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBhbmltYXRpb246IHBvcG91dCAxcztcXG59XFxuXFxuLmRlc2NyaXB0aW9uRGV0YWlscyB7XFxuICAgIG1hcmdpbjogMWVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcGluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoNXZtaW4pO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSg1dm1pbik7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlSW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDV2bWluO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5tYWluID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgcm93LWdhcDogMWVtO1xcbn1cXG5pbnB1dDpub3QoLmRvbmVUYXNrUmFkaW8pLCBzZWxlY3R7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5hZGRCdG4ge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMWVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5uZXdQcm9qZWN0Rm9ybSB7XFxuICAgICAgICB3aWR0aDogNzB2bWluO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG5cXHQtLWxpZ2h0LXNoYWRlLTE6IHJnYigxOTYsIDExMiwgMTk2KTtcXHJcXG5cXHQtLWxpZ2h0LXNoYWRlLTI6ICNjMjkxZDk7XFxyXFxuXFx0LS1saWdodC1zaGFkZS0zOiByZ2IoMTcwLCA4MywgMTcwKTtcXHJcXG5cXHQtLWxpZ2h0LXNoYWRlLTQ6IHB1cnBsZTtcXHJcXG5cXHQtLWxpZ2h0LXNoYWRlLTU6ICNlOGNmZjM7XFxyXFxuXFx0LS1saWdodC1zaGFkZS02OiAjZDZiNWU1O1xcclxcblxcdC0tbW9iaWxlLXByb2plY3QtdGV4dDogd2hpdGU7XFxyXFxuICAgIC0tdGFzay10ZXh0OiBibGFjaztcXHJcXG5cXHQtLXJhZGlvLWJ1dHRvbjogI2M0NzBjNDtcXHJcXG5cXHQtLWNvbnRlbnQtYmc6ICNmY2ZjZmM7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1cnJlZENvbnRlbnQge1xcclxcblxcdGZpbHRlcjogYmx1cigxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRNb2RlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMik7XFxyXFxuXFx0d2lkdGg6IDQwdm1pbjtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFyQ29udGVudCB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDJ2bWluO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHJvdy1nYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Y29sdW1uLWdhcDogMWVtO1xcclxcblxcdHBhZGRpbmc6IDFlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyID4gaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItcHJvamVjdC1saXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtcyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkZvbGRlciB7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlRm9sZGVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhckljb24ge1xcclxcblxcdGhlaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDYwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0ID4gcCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbXMge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zLW1vYmlsZSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiBpbmhlcml0O1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHBhZGRpbmc6IDFlbTtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGNvbG9yOiB2YXIoLS1tb2JpbGUtcHJvamVjdC10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtID4gc3BhbiB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVQcm9qZWN0IHtcXHJcXG5cXHRoZWlnaHQ6IDE1cHg7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW06aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3Qge1xcclxcblxcdGJvdHRvbTogMmVtO1xcclxcblxcdHdpZHRoOiAzMHZtaW47XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0aGVpZ2h0OiAzZW07XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGFyayBtb2RlICovXFxyXFxuLnRoZW1lIHtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZUxhYmVsIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0d2lkdGg6IDNlbTtcXHJcXG5cXHRoZWlnaHQ6IDEuNmVtO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcblxcdGZsb2F0OiByaWdodDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5tb2RlTGFiZWw6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAzcHg7XFxyXFxuXFx0bGVmdDogM3B4O1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA5MHB4O1xcclxcblxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAubW9kZUxhYmVsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5tb2RlTGFiZWw6OmFmdGVyIHtcXHJcXG5cXHRsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcbi5tb2RlTGFiZWw6YWN0aXZlOmFmdGVyIHtcXHJcXG5cXHR3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtNb2RlIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0Ym90dG9tOiAyMHB4O1xcclxcblxcdHJpZ2h0OiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxyXFxuXFx0cGFkZGluZzogMC41ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCxcXHJcXG5cXHRcXHRyZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCxcXHJcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcXHJcXG5cXHQuZGlzcGxheVByb2plY3RMaXN0TW9iaWxlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcdC5jb250ZW50IHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmF2QmFyIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXZCYXJDb250ZW50IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0Y29sdW1uLWdhcDogNjB2dztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm9mZmljaWFsSGVhZGVyIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDNlbTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDFlbTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0Y29sdW1uLWdhcDogMnZtaW47XFxyXFxuXFx0XFx0cGFkZGluZzogMXZtaW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5vZmZpY2lhbEhlYWRlciA+IGltZyB7XFxyXFxuXFx0XFx0aGVpZ2h0OiA1dm1pbjtcXHJcXG5cXHRcXHR3aWR0aDogNXZtaW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5vZmZpY2lhbEhlYWRlciA+IGgxIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDV2bWluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucHJvamVjdC1saXN0LFxcclxcblxcdC5uZXdQcm9qZWN0IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaGFtYnVyZ2VyLXByb2plY3QtbGlzdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5oYW1idXJnZXJNZW51IHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDV2bWluO1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSA+IGhlYWRlciB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0YWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDR2bWluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmV3UHJvamVjdE1vYmlsZSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiA0ZW07XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmFkZFByb2plY3RNb2JpbGUge1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG5cXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0XFx0cGFkZGluZzogMWVtO1xcclxcblxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4IDI1cHg7XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYWRkUHJvamVjdE1vYmlsZTpob3ZlciB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2QmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1DQUFtQztDQUNuQyx3QkFBd0I7Q0FDeEIsa0NBQWtDO0NBQ2xDLHVCQUF1QjtDQUN2Qix3QkFBd0I7Q0FDeEIsd0JBQXdCO0NBQ3hCLDRCQUE0QjtJQUN6QixrQkFBa0I7Q0FDckIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLHNDQUFzQztDQUN0QyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLFlBQVk7Q0FDWiwwQ0FBMEM7Q0FDMUMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtBQUNkOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsc0NBQXNDO0NBQ3RDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsV0FBVztDQUNYLGVBQWU7Q0FDZixzQ0FBc0M7Q0FDdEMsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUEsY0FBYztBQUNkO0NBQ0MsU0FBUztDQUNULFFBQVE7Q0FDUixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQjs7NkNBRTRDO0FBQzdDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQztFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0M7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtDQUNiOztDQUVBO0VBQ0MsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0NBRUE7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7O0VBRUMsYUFBYTtDQUNkOztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuXFx0LS1saWdodC1zaGFkZS0xOiByZ2IoMTk2LCAxMTIsIDE5Nik7XFxyXFxuXFx0LS1saWdodC1zaGFkZS0yOiAjYzI5MWQ5O1xcclxcblxcdC0tbGlnaHQtc2hhZGUtMzogcmdiKDE3MCwgODMsIDE3MCk7XFxyXFxuXFx0LS1saWdodC1zaGFkZS00OiBwdXJwbGU7XFxyXFxuXFx0LS1saWdodC1zaGFkZS01OiAjZThjZmYzO1xcclxcblxcdC0tbGlnaHQtc2hhZGUtNjogI2Q2YjVlNTtcXHJcXG5cXHQtLW1vYmlsZS1wcm9qZWN0LXRleHQ6IHdoaXRlO1xcclxcbiAgICAtLXRhc2stdGV4dDogYmxhY2s7XFxyXFxuXFx0LS1yYWRpby1idXR0b246ICNjNDcwYzQ7XFxyXFxuXFx0LS1jb250ZW50LWJnOiAjZmNmY2ZjO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXJyZWRDb250ZW50IHtcXHJcXG5cXHRmaWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0TW9kZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTIpO1xcclxcblxcdHdpZHRoOiA0MHZtaW47XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhckNvbnRlbnQge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAydm1pbjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRyb3ctZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5vZmZpY2lhbEhlYWRlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGNvbHVtbi1nYXA6IDFlbTtcXHJcXG5cXHRwYWRkaW5nOiAxZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjUpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vZmZpY2lhbEhlYWRlciA+IGltZyB7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLXByb2plY3QtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbXMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZGb2xkZXIge1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZUZvbGRlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJJY29uIHtcXHJcXG5cXHRoZWlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiA2MHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IHAge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtcy1tb2JpbGUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxZW07XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRjb2xvcjogdmFyKC0tbW9iaWxlLXByb2plY3QtdGV4dCk7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IHNwYW4ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlUHJvamVjdCB7XFxyXFxuXFx0aGVpZ2h0OiAxNXB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgPiAucmVtb3ZlUHJvamVjdCB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG5cXHRib3R0b206IDJlbTtcXHJcXG5cXHR3aWR0aDogMzB2bWluO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3Qge1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcblxcdGhlaWdodDogM2VtO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTBweDtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIGRhcmsgbW9kZSAqL1xcclxcbi50aGVtZSB7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHdpZHRoOiAwO1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGVMYWJlbCB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHdpZHRoOiAzZW07XFxyXFxuXFx0aGVpZ2h0OiAxLjZlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG5cXHRmbG9hdDogcmlnaHQ7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubW9kZUxhYmVsOjphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogM3B4O1xcclxcblxcdGxlZnQ6IDNweDtcXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogOTBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLm1vZGVMYWJlbCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWQgKyAubW9kZUxhYmVsOjphZnRlciB7XFxyXFxuXFx0bGVmdDogY2FsYygxMDAlIC0gNXB4KTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG4ubW9kZUxhYmVsOmFjdGl2ZTphZnRlciB7XFxyXFxuXFx0d2lkdGg6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYXJrTW9kZSB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGJvdHRvbTogMjBweDtcXHJcXG5cXHRyaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcclxcblxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsXFxyXFxuXFx0XFx0cmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuXFx0XFx0cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XFxyXFxuXFx0LmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG5cXHQuY29udGVudCB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5hdkJhciB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmF2QmFyQ29udGVudCB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGNvbHVtbi1nYXA6IDYwdnc7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5vZmZpY2lhbEhlYWRlciB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAzZW07XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGNvbHVtbi1nYXA6IDJ2bWluO1xcclxcblxcdFxcdHBhZGRpbmc6IDF2bWluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcblxcdFxcdGhlaWdodDogNXZtaW47XFxyXFxuXFx0XFx0d2lkdGg6IDV2bWluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQub2ZmaWNpYWxIZWFkZXIgPiBoMSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiA1dm1pbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnByb2plY3QtbGlzdCxcXHJcXG5cXHQubmV3UHJvamVjdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhhbWJ1cmdlci1wcm9qZWN0LWxpc3Qge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaGFtYnVyZ2VyTWVudSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiA1dm1pbjtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUgPiBoZWFkZXIge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiA0dm1pbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5ld1Byb2plY3RNb2JpbGUge1xcclxcblxcdFxcdGhlaWdodDogNGVtO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hZGRQcm9qZWN0TW9iaWxlIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuXFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMWVtO1xcclxcblxcdFxcdHBhZGRpbmc6IDFlbTtcXHJcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweCAyNXB4O1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmFkZFByb2plY3RNb2JpbGU6aG92ZXIge1xcclxcblxcdFxcdHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZGlyZWN0aW9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG5cXHRjb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2Uge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0cGFkZGluZzogMmVtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRyb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrUGFnZSA+IHAge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRhc2stdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXIgPiBidXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Y29sdW1uLWdhcDogMWVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrIHtcXHJcXG5cXHRoZWlnaHQ6IDFlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzazpob3ZlciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50ID4gaDMge1xcclxcblxcdG1hcmdpbi10b3A6IDNlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuXFx0aGVpZ2h0OiAyLjVlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0LFxcclxcbi5kb25lTGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0ID4gcCB7XFxyXFxuXFx0Zm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0RpdiB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtEaXYgPiBwIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tdGFzay10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0ltYWdlIHtcXHJcXG5cXHR3aWR0aDogNDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UYXNrLFxcclxcbi5kb25lVGFzayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNik7XFxyXFxuXFx0cGFkZGluZzogMC41ZW07XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sb3dUb2RvVGFzayB7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtVG9kb1Rhc2sge1xcclxcblxcdGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5oaWdoVG9kb1Rhc2sge1xcclxcblxcdGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzazpob3ZlcixcXHJcXG4uZG9uZVRhc2s6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluLFxcclxcbi5jb21wbGV0ZWREaXZNYWluIHtcXHJcXG5cXHR3aWR0aDogNzAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Y29sdW1uLWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkRGl2TWFpbiB7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tCdG4ge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrQnRuOmNoZWNrZWQge1xcclxcblxcdGFjY2VudC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lVGFza1JhZGlvIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmFkaW8tYnV0dG9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZERpdk1haW4gPiBzcGFuIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZTZXR0aW5ncyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMzAlO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4gPiBidXR0b24sXFxyXFxuLnRvZG9EaXZTZXR0aW5ncyA+IGJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uOmhvdmVyLFxcclxcbi50b2RvRGl2U2V0dGluZ3MgPiBidXR0b246aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9JY29uSW1nLFxcclxcbi5lZGl0VGFza0ltYWdlLFxcclxcbi5kZWxldGVUYXNrSW1hZ2Uge1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcdC5kaXJlY3Rpb25zIHtcXHJcXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5wcm9qZWN0LWl0ZW0tbW9iaWxlIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucHJvamVjdC1pdGVtLW1vYmlsZSA+IHNwYW4ge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuXFx0XFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxNXB4O1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucHJvamVjdC1pdGVtLW1vYmlsZTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0TW9iaWxlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcXHJcXG5cXHQudG9kb0Rpdk1haW4ge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQudG9kb0RpdlNldHRpbmdzIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90YXNrUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxzQ0FBc0M7Q0FDdEMsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHNDQUFzQztBQUN2Qzs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsc0NBQXNDO0NBQ3RDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBOztDQUVDLHNDQUFzQztDQUN0QyxlQUFlO0FBQ2hCOztBQUVBOztDQUVDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0NBQ1YsNkJBQTZCO0FBQzlCOztBQUVBOztDQUVDLDZCQUE2QjtDQUM3QixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7O0FBRUE7OztDQUdDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0M7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxjQUFjO0NBQ2Y7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0NBQzlCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpcmVjdGlvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuXFx0Y29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tQYWdlIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcdHBhZGRpbmc6IDJlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2UgPiBwIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGNvbG9yOiB2YXIoLS10YXNrLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyID4gYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGNvbHVtbi1nYXA6IDFlbTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzayB7XFxyXFxuXFx0aGVpZ2h0OiAxZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2s6aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCA+IGgzIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcclxcblxcdGhlaWdodDogMi41ZW07XFxyXFxuXFx0cGFkZGluZzogMC41ZW07XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCxcXHJcXG4uZG9uZUxpc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRyb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCA+IHAge1xcclxcblxcdGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtEaXYge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Xb3JrRGl2ID4gcCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRhc2stdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtJbWFnZSB7XFxyXFxuXFx0d2lkdGg6IDQwdnc7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzayxcXHJcXG4uZG9uZVRhc2sge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTYpO1xcclxcblxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93VG9kb1Rhc2sge1xcclxcblxcdGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bVRvZG9UYXNrIHtcXHJcXG5cXHRib3JkZXItbGVmdDogMC4zZW0gc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaFRvZG9UYXNrIHtcXHJcXG5cXHRib3JkZXItbGVmdDogMC4zZW0gc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2s6aG92ZXIsXFxyXFxuLmRvbmVUYXNrOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbixcXHJcXG4uY29tcGxldGVkRGl2TWFpbiB7XFxyXFxuXFx0d2lkdGg6IDcwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGNvbHVtbi1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZERpdk1haW4ge1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrQnRuIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja0J0bjpjaGVja2VkIHtcXHJcXG5cXHRhY2NlbnQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZVRhc2tSYWRpbyB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJhZGlvLWJ1dHRvbik7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWREaXZNYWluID4gc3BhbiB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2U2V0dGluZ3Mge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDMwJTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uLFxcclxcbi50b2RvRGl2U2V0dGluZ3MgPiBidXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiA+IGJ1dHRvbjpob3ZlcixcXHJcXG4udG9kb0RpdlNldHRpbmdzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5pbmZvSWNvbkltZyxcXHJcXG4uZWRpdFRhc2tJbWFnZSxcXHJcXG4uZGVsZXRlVGFza0ltYWdlIHtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG5cXHQuZGlyZWN0aW9ucyB7XFxyXFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucHJvamVjdC1pdGVtLW1vYmlsZSB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0cGFkZGluZzogNXB4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnByb2plY3QtaXRlbS1tb2JpbGUgPiBzcGFuIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDEuMmVtO1xcclxcblxcdFxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnJlbW92ZVByb2plY3RNb2JpbGUge1xcclxcblxcdFxcdGhlaWdodDogMTVweDtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnByb2plY3QtaXRlbS1tb2JpbGU6aG92ZXIgPiAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XFxyXFxuXFx0LnRvZG9EaXZNYWluIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnRvZG9EaXZTZXR0aW5ncyB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMC41ZW07XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nQm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nQm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza1BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHRvZG9zID0gW10sIGNvbXBsZXRlZCA9IFtdKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50b2RvcyA9IFtdO1xyXG5cdFx0aWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG5cdFx0XHRcdHRoaXMudG9kb3MucHVzaChcclxuXHRcdFx0XHRcdG5ldyBUYXNrKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlLCB0b2RvLnByaW9yaXR5KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21wbGV0ZWQgPSBbXTtcclxuXHRcdGlmIChjb21wbGV0ZWQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjb21wbGV0ZWQuZm9yRWFjaCgodG9kbykgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tcGxldGVkLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgVGFzayh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZSwgdG9kby5wcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZSA9IG51bGwsIHByaW9yaXR5ID0gXCJsb3dcIikge1xyXG5cdFx0dGhpcy50aXRsZSA9IG5hbWU7XHJcblx0XHRpZiAoZGVzY3JpcHRpb24gPT0gXCJcIikge1xyXG5cdFx0XHRkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gaXMgYXZhaWxhYmxlXCI7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0XHRpZiAoZHVlID09IFwiXCIgfHwgZHVlID09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5kdWUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZHVlID0gZHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9kaWFsb2dCb3guY3NzJztcclxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuLi9hc3NldHMvY2xvc2VJY29uLnN2Zyc7XHJcbmltcG9ydCB7YWRkUHJvamVjdCwgYWRkVGFzaywgdXBkYXRlVGFza30gZnJvbSAnLi90YXNrUGFnZSc7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5OZXdQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lck9wZW4nKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Rm9ybScpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybU9wZW4nKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0SGVhZGVyLmlubmVyVGV4dCA9ICdOZXcgcHJvamVjdCc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcbiAgICBjbG9zZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlSW1hZ2UnKTtcclxuICAgIGNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xvc2VGb3JtKGUsIHRydWUsIGZhbHNlKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VJbWFnZSk7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8Zm9ybSBjbGFzcz1cIkZvcm1cIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdE5hbWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwicHJvamVjdE5hbWVcIiBuYW1lPVwicHJvamVjdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2plY3QgTmFtZVwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkQnRuXCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Zvcm0ocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXJPcGVuJyk7XHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3Rm9ybScpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybU9wZW4nKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0SGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNsb3NlSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xyXG4gICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcbiAgICBjbG9zZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdER1ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8Zm9ybSBjbGFzcz1cIkZvcm1cIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGFza05hbWVcIj5UaXRsZSA8c3VwPio8L3N1cD48L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwidGFza05hbWVcIiBuYW1lPVwidGFza05hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFRhc2sgTmFtZVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrRGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbiAoT3B0aW9uYWwpPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tEZXNjcmlwdGlvblwiIG5hbWU9XCJ0YXNrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIERlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVFbnRlcmVkXCI+RHVlIERhdGUgKE9wdGlvbmFsKSA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZUVudGVyZWRcIiBuYW1lPVwiZGF0ZUVudGVyZWRcIiB2YWx1ZT1cIiR7ZGVmYXVsdER1ZX1cIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHkgKE9wdGlvbmFsKSA8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGRCdG5cIj5BZGQgVGFzazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5gXHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5OZXdUYXNrRm9ybShlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybShwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5EZXNjcmlwdGlvbkJveCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXJPcGVuJyk7XHJcbiAgICBjb25zdCBkZXRhaWxzRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGV0YWlsc0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3Rm9ybScpO1xyXG4gICAgZGV0YWlsc0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybU9wZW4nKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRleHRIZWFkZXIuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG4gICAgY2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRldGFpbHNGb3JtLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtT3BlbicsICdmb3JtQ2xvc2UnKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtQ29udGFpbmVyT3BlbicsICdmb3JtQ29udGFpbmVyQ2xvc2UnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGV0ZUZvcm0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VJbWFnZSk7XHJcbiAgICBkZXRhaWxzRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRpdGxlRGlzcGxheS5pbm5lclRleHQgPSAnVGl0bGUnO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURpc3BsYXkpO1xyXG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRpdGxlVmFsdWUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHRpdGxlVmFsdWUpO1xyXG4gICAgY29uc3QgbGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGxpbmVCcmVhazEpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGRlc2NEaXNwbGF5LmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NEaXNwbGF5KTtcclxuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NWYWx1ZS5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY1ZhbHVlKTtcclxuICAgIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWsyKTtcclxuXHJcbiAgICBjb25zdCBkdWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGR1ZURpc3BsYXkuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZHVlRGlzcGxheSk7XHJcbiAgICBjb25zdCBkdWVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGR1ZVZhbHVlLmlubmVyVGV4dCA9IGR1ZTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZHVlVmFsdWUpO1xyXG4gICAgY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGxpbmVCcmVhazMpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwcmlvcml0eURpc3BsYXkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXNwbGF5KTtcclxuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmlvcml0eVZhbHVlLmlubmVyVGV4dCA9IHByaW9yaXR5O1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eVZhbHVlKTtcclxuXHJcbiAgICBkZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGl2Jyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRldGFpbHMnKTtcclxuICAgIGRldGFpbHNGb3JtLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Zvcm0pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkVkaXRUYXNrRm9ybShwcm9qZWN0TmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KSB7XHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybShwcm9qZWN0TmFtZSk7XHJcbiAgICBcclxuICAgIC8qIEFkZCBhbGwgZXhpc3RpbmcgaW5mb3JtYXRpb25zICovXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpO1xyXG4gICAgdGFza05hbWUudmFsdWUgPSB0aXRsZTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzY3JpcHRpb24nKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZUVudGVyZWQnKTtcclxuICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gZHVlO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eTtcclxuXHJcbiAgICAvKiBSZW5hbWUgQnV0dG9uIG5hbWUgKi9cclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7XHJcbiAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiU2F2ZSBUYXNrXCI7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Gb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB1cGRhdGVUYXNrKGUsIHRpdGxlKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybShlLCBpc0Nsb3NlUHJvamVjdD1mYWxzZSwgaXNDbG9zZVRhc2s9dHJ1ZSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJyk7XHJcbiAgICBpZiAoaXNDbG9zZVByb2plY3QgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RGb3JtJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1PcGVuJywgJ2Zvcm1DbG9zZScpO1xyXG4gICAgfSBlbHNlIGlmIChpc0Nsb3NlVGFzayA9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3Rm9ybScpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtT3BlbicsICdmb3JtQ2xvc2UnKTtcclxuICAgIH1cclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1Db250YWluZXJPcGVuJywgJ2Zvcm1Db250YWluZXJDbG9zZScpO1xyXG4gICAgc2V0VGltZW91dChkZWxldGVGb3JtLCAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IHtvcGVuTmV3UHJvamVjdEZvcm0sIG9wZW5OZXdUYXNrRm9ybSxcclxuICAgICAgICBvcGVuRGVzY3JpcHRpb25Cb3gsIG9wZW5FZGl0VGFza0Zvcm0sXHJcbiAgICAgICAgY2xvc2VGb3JtfTtcclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL25hdkJhci5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9kaWFsb2dCb3guY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28ucG5nJztcclxuaW1wb3J0IGhhbWJ1cmdlck1lbnVJY29uIGZyb20gJy4uL2Fzc2V0cy9oYW1idXJnZXJJY29uLnBuZyc7XHJcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3NlSWNvbi5zdmcnO1xyXG5pbXBvcnQgeyBsb2FkUHJvamVjdHMgfSBmcm9tICcuL3Rhc2tQYWdlLmpzJztcclxuaW1wb3J0IHtcclxuXHRnZXRMb2NhbFN0b3JhZ2UsXHJcblx0c2V0TG9jYWxTdG9yYWdlLFxyXG5cdHJlbW92ZUxvY2FsU3RvcmFnZSxcclxufSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzRnJvbU1lbnUoKSB7XHJcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG5cdGNvbnN0IG1lbnVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtZW51RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZScpO1xyXG5cclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHRjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHRleHRIZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3QgTGlzdCc7XHJcblx0aGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuXHRjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0Y2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcblx0Y2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcblx0Y2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudURpYWxvZyk7XHJcblx0fSk7XHJcblx0aGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG5cdG1lbnVEaWFsb2cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcblx0Y29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdE1vYmlsZScpO1xyXG5cdGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRhZGRQcm9qZWN0LmlubmVyVGV4dCA9ICdBZGQgTmV3IFByb2plY3QnO1xyXG5cdGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdE1vYmlsZScpO1xyXG5cdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XHJcblx0bWVudURpYWxvZy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuXHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cHJvamVjdEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbXMtbW9iaWxlJyk7XHJcblx0bWVudURpYWxvZy5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbXMpO1xyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpYWxvZyk7XHJcblxyXG5cdGxvYWRQcm9qZWN0cyh0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlNb2RlKCkge1xyXG5cdGNvbnN0IGxpZ2h0TW9kZSA9IHtcclxuXHRcdCdsaWdodC1zaGFkZS0xJzogJ3JnYigxOTYsIDExMiwgMTk2KScsXHJcblx0XHQnbGlnaHQtc2hhZGUtMic6ICcjQzI5MUQ5JyxcclxuXHRcdCdsaWdodC1zaGFkZS0zJzogJ3JnYigxNzAsIDgzLCAxNzApJyxcclxuXHRcdCdsaWdodC1zaGFkZS00JzogJ3B1cnBsZScsXHJcblx0XHQnbGlnaHQtc2hhZGUtNSc6ICcjRThDRkYzJyxcclxuXHRcdCdsaWdodC1zaGFkZS02JzogJyNENkI1RTUnLFxyXG5cdFx0J21vYmlsZS1wcm9qZWN0LXRleHQnOiAnd2hpdGUnLFxyXG5cdFx0J3Rhc2stdGV4dCc6ICdibGFjaycsXHJcblx0XHQncmFkaW8tYnV0dG9uJzogJyNjNDcwYzQnLFxyXG5cdFx0J2NvbnRlbnQtYmcnOiAnI0ZDRkNGQycsXHJcblx0fTtcclxuXHRjb25zdCBkYXJrTW9kZSA9IHtcclxuXHRcdCdsaWdodC1zaGFkZS0xJzogJyNFQUVBRUEnLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTInOiAnI0M1QzVDNScsXHJcblx0XHQnbGlnaHQtc2hhZGUtMyc6ICcjOEQ4RDhEJyxcclxuXHRcdCdsaWdodC1zaGFkZS00JzogJ2dyZXknLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTUnOiAnI0M1QzVDNScsXHJcblx0XHQnbGlnaHQtc2hhZGUtNic6ICdsaWdodGdyZXknLFxyXG5cdFx0J21vYmlsZS1wcm9qZWN0LXRleHQnOiAnYmxhY2snLFxyXG5cdFx0J3Rhc2stdGV4dCc6ICd3aGl0ZScsXHJcblx0XHQncmFkaW8tYnV0dG9uJzogJyNibGFjaycsXHJcblx0XHQnY29udGVudC1iZyc6ICcjMzMzMzMzJyxcclxuXHR9O1xyXG5cdGNvbnN0IHRyYW5zZm9ybUtleSA9IChrZXkpID0+XHJcblx0XHQnLS0nICsga2V5LnJlcGxhY2UoLyhbQS1aXSkvLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZUNvbG9ycyA9IChjb2xvcnMpID0+IHtcclxuXHRcdE9iamVjdC5rZXlzKGNvbG9ycykubWFwKChrZXkpID0+IHtcclxuXHRcdFx0cm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSh0cmFuc2Zvcm1LZXkoa2V5KSwgY29sb3JzW2tleV0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9dGhlbWVdJyk7XHJcblx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuXHRcdHRhcmdldC5jaGVja2VkID8gY2hhbmdlQ29sb3JzKGRhcmtNb2RlKSA6IGNoYW5nZUNvbG9ycyhsaWdodE1vZGUpO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpc01vZGVTZXQgPSAoa2V5KSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9IG51bGw7XHJcblxyXG5cdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7IHRhcmdldCB9KSA9PiB7XHJcblx0XHRpZiAodGFyZ2V0LmNoZWNrZWQpIHtcclxuXHRcdFx0Y2hhbmdlQ29sb3JzKGRhcmtNb2RlKTtcclxuXHRcdFx0c2V0TG9jYWxTdG9yYWdlKCdtb2RlJywgJ2RhcmtNb2RlJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjaGFuZ2VDb2xvcnMobGlnaHRNb2RlKTtcclxuXHRcdFx0c2V0TG9jYWxTdG9yYWdlKCdtb2RlJywgJ2xpZ2h0TW9kZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoIWlzTW9kZVNldCgnbW9kZScpKSBzZXRMb2NhbFN0b3JhZ2UoJ21vZGUnLCAnbGlnaHRNb2RlJyk7XHJcblxyXG5cdGlmIChnZXRMb2NhbFN0b3JhZ2UoJ21vZGUnKSA9PT0gJ2xpZ2h0TW9kZScpIHtcclxuXHRcdGNoZWNrYm94LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cdFx0Y2hhbmdlQ29sb3JzKGxpZ2h0TW9kZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcclxuXHRcdGNoYW5nZUNvbG9ycyhkYXJrTW9kZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTmF2QmFyKCkge1xyXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRkaXYuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XHJcblx0ZGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibmF2QmFyQ29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvZmZpY2lhbEhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDE+VG9kb0xpc3Q8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXItcHJvamVjdC1saXN0XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlzdFwiPlxyXG4gICAgICAgICAgICA8cD5NeSBQcm9qZWN0czwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvamVjdC1pdGVtc1wiPjwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld1Byb2plY3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZFByb2plY3RcIj5BZGQgTmV3IFByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0Y29uc3QgbG9nb0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0bG9nb0ltYWdlLmFsdCA9ICdQaWN0dXJlIG9mIE9mZmNpYWwgbG9nbyc7XHJcblx0bG9nb0ltYWdlLnNyYyA9IGxvZ287XHJcblxyXG5cdGNvbnN0IG9mZmljaWFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmljaWFsSGVhZGVyJyk7XHJcblx0b2ZmaWNpYWxIZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcclxuXHJcblx0Y29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItcHJvamVjdC1saXN0Jyk7XHJcblx0Y29uc3QgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0bWVudUltYWdlLnNyYyA9IGhhbWJ1cmdlck1lbnVJY29uO1xyXG5cdG1lbnVJbWFnZS5hbHQgPSAnSGFtYnVyZ2VyIE1lbnUgcGljdHVyZSc7XHJcblx0bWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlck1lbnUnKTtcclxuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XHJcblx0aGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0c0Zyb21NZW51KTtcclxuXHRsb2FkUHJvamVjdHMoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZE5hdkJhciwgYXBwbHlNb2RlIH07XHJcbiIsImZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShrZXksIHZhbHVlKSB7XG5cdGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2Uoa2V5KSB7XG5cdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTG9jYWxTdG9yYWdlKGtleSkge1xuXHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgW10pO1xufVxuXG5leHBvcnQge3NldExvY2FsU3RvcmFnZSwgZ2V0TG9jYWxTdG9yYWdlLCByZW1vdmVMb2NhbFN0b3JhZ2V9OyIsImltcG9ydCBcIi4uL3N0eWxlcy90YXNrUGFnZS5jc3NcIjtcclxuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4uL2Fzc2V0cy9hZGQucG5nXCI7XHJcbmltcG9ydCBpbmZvSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2luZm9JY29uLnBuZ1wiO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL2Fzc2V0cy9lZGl0QnRuLnBuZ1wiO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2RlbGV0ZUJ0bi5wbmdcIjtcclxuaW1wb3J0IHJlbW92ZUljb24gZnJvbSBcIi4uL2Fzc2V0cy90cmFzaC1jYW4ucG5nXCI7XHJcbmltcG9ydCBjb21wbGV0ZWRUYXNrUGljIGZyb20gXCIuLi9hc3NldHMvY29tcGxldGVkVGFzay5qcGdcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7Z2V0TG9jYWxTdG9yYWdlLCBzZXRMb2NhbFN0b3JhZ2UsIHJlbW92ZUxvY2FsU3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHtcclxuXHRvcGVuTmV3UHJvamVjdEZvcm0sXHJcblx0b3Blbk5ld1Rhc2tGb3JtLFxyXG5cdG9wZW5EZXNjcmlwdGlvbkJveCxcclxuXHRvcGVuRWRpdFRhc2tGb3JtLFxyXG5cdGNsb3NlRm9ybSxcclxufSBmcm9tIFwiLi9kaWFsb2dCb3hcIjtcclxuXHJcbmxldCBrZXkgPSBcInByb2plY3RMaXN0XCI7XHJcblxyXG5sZXQgcHJvamVjdExpc3QgPSBnZXRMb2NhbFN0b3JhZ2UoXCJwcm9qZWN0TGlzdFwiKTtcclxuaWYgKHByb2plY3RMaXN0ID09IG51bGwgfHwgIXByb2plY3RMaXN0KSB7XHJcblx0cHJvamVjdExpc3QgPSBbXTtcclxuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmNvbnN0IHNhbXBsZVByb2plY3RzID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6IFwiV2ViIERldmVsb3BtZW50XCIsXHJcblx0XHR0b2RvczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiV29yayBvbiBUb0RvIExpc3RcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogYEFkZCBhICdBZGRUYXNrJyBidXR0b24gb24gT2RpbidzIFRPRE8gTGlzdCBQcm9qZWN0YCxcclxuXHRcdFx0XHRkdWU6IG51bGwsXHJcblx0XHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiU3RhcnQgc3R1ZHlpbmcgT09QXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBTdGFydCByZWFkaW5nIE9PUCBDaGFwdGVyIGZyb20gT2RpbiBQcm9qZWN0YCxcclxuXHRcdFx0XHRkdWU6IG51bGwsXHJcblx0XHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCJSZWFkIG90aGVycyB3ZWJzaXRlc1wiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgRmluZCBhbmQgcmVhZCAyIG9mIG90aGVycyB3ZWJzaXRlcyBmcm9tIE9kaW4ncyBkaXNjb3JkYCxcclxuXHRcdFx0XHRkdWU6IG51bGwsXHJcblx0XHRcdFx0cHJpb3JpdHk6IFwibG93XCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0Y29tcGxldGVkOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogYEFkZCBhICdBZGRQcm9qZWN0JyBidXR0b24gb24gVG9EbyBMaXN0YCxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogYEFkZCBhICdBZGRQcm9qZWN0JyBidXR0b24gb24gT2RpbidzIFRPRE8gTGlzdCBQcm9qZWN0YCxcclxuXHRcdFx0XHRkdWU6IG51bGwsXHJcblx0XHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiV29ya1wiLFxyXG5cdFx0dG9kb3M6IFtdLFxyXG5cdFx0Y29tcGxldGVkOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCJTZW5kIGVtYWlsIHRvIFNvbmlhXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBXcml0ZSBTb25pYSBhYm91dCB5ZXN0ZXJkYXkncyByZWdyZXNzaW9uIHRlc3QgcmVzdWx0c2AsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldFRhc2socHJvamVjdCwgdGFza05hbWUpIHtcclxuXHRsZXQgcmV0VGFzayA9IHVuZGVmaW5lZDtcclxuXHJcblx0cHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblx0XHRpZiAodGFzay50aXRsZSA9PSB0YXNrTmFtZSkgcmV0VGFzayA9IHRhc2s7XHJcblx0fSk7XHJcblxyXG5cdGlmIChyZXRUYXNrICE9IHVuZGVmaW5lZCkgcmV0dXJuIHJldFRhc2s7XHJcblxyXG5cdHByb2plY3QuY29tcGxldGVkLmZvckVhY2goKHRhc2spID0+IHtcclxuXHRcdGlmICh0YXNrLnRpdGxlID09IHRhc2tOYW1lKSByZXRUYXNrID0gdGFzaztcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHJldFRhc2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuXHRsZXQgcmV0UHJvamVjdCA9IHVuZGVmaW5lZDtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdHJldFByb2plY3QgPSBwcm9qZWN0O1xyXG5cdFx0XHRyZXR1cm4gcmV0UHJvamVjdDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHJldFByb2plY3Q7XHJcbn1cclxuXHJcbmxldCBjdXJyZW50QWN0aXZlRm9sZGVyID0gdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gc2V0Rmlyc3RBc0N1cnJlbnRGb2xkZXIoKSB7XHJcblx0LyogRGVza3RvcCB2aWV3ICovXHJcblx0Y29uc3QgZGVza3RvcEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zXCIpO1xyXG5cdGlmIChkZXNrdG9wSXRlbXMuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb25zdCBkZWZhdWx0VGFza1BhZ2UgPVxyXG5cdFx0XHRkZXNrdG9wSXRlbXMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dDtcclxuXHRcdHNldEN1cnJlbnRBY3RpdmVGb2xkZXIoZGVmYXVsdFRhc2tQYWdlKTtcclxuXHR9XHJcblxyXG5cdC8qIE1vYmlsZSB2aWV3ICovXHJcblx0Y29uc3QgbW9iaWxlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdGlmIChtb2JpbGVJdGVtcyAhPSBudWxsICYmIG1vYmlsZUl0ZW1zLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0Y29uc3QgZGVmYXVsdFRhc2tQYWdlID0gbW9iaWxlSXRlbXMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dDtcclxuXHRcdHNldEN1cnJlbnRBY3RpdmVGb2xkZXIoZGVmYXVsdFRhc2tQYWdlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRBY3RpdmVGb2xkZXIocHJvamVjdE5hbWUpIHtcclxuXHQvLyBpZiAoY3VycmVudEFjdGl2ZUZvbGRlciA9PSBwcm9qZWN0TmFtZSkgcmV0dXJuO1xyXG5cdGNvbnN0IHByb2plY3RJdGVtc0Rlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXNcIik7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zLW1vYmlsZVwiKTtcclxuXHRpZiAoY3VycmVudEFjdGl2ZUZvbGRlciAhPSB1bmRlZmluZWQpIHtcclxuXHRcdHByb2plY3RJdGVtc0Rlc2t0b3AuY2hpbGROb2Rlcy5mb3JFYWNoKChwcm9qZWN0RGVza3RvcCkgPT4ge1xyXG5cdFx0XHRpZiAocHJvamVjdERlc2t0b3AuaW5uZXJUZXh0ID09IGN1cnJlbnRBY3RpdmVGb2xkZXIpIHtcclxuXHRcdFx0XHRwcm9qZWN0RGVza3RvcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlRm9sZGVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGlmIChwcm9qZWN0SXRlbXNNb2JpbGUgIT0gbnVsbCkge1xyXG5cdFx0XHRwcm9qZWN0SXRlbXNNb2JpbGUuY2hpbGROb2Rlcy5mb3JFYWNoKChwcm9qZWN0TW9iaWxlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHByb2plY3RNb2JpbGUuaW5uZXJUZXh0ID09IGN1cnJlbnRBY3RpdmVGb2xkZXIpIHtcclxuXHRcdFx0XHRcdHByb2plY3RNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUZvbGRlclwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjdXJyZW50QWN0aXZlRm9sZGVyID0gcHJvamVjdE5hbWU7XHJcblx0cHJvamVjdEl0ZW1zRGVza3RvcC5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3REZXNrdG9wKSA9PiB7XHJcblx0XHRpZiAocHJvamVjdERlc2t0b3AuaW5uZXJUZXh0ID09IGN1cnJlbnRBY3RpdmVGb2xkZXIpIHtcclxuXHRcdFx0cHJvamVjdERlc2t0b3AuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUZvbGRlclwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRpZiAocHJvamVjdEl0ZW1zTW9iaWxlICE9IG51bGwpIHtcclxuXHRcdHByb2plY3RJdGVtc01vYmlsZS5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3RNb2JpbGUpID0+IHtcclxuXHRcdFx0aWYgKHByb2plY3RNb2JpbGUuaW5uZXJUZXh0ID09IGN1cnJlbnRBY3RpdmVGb2xkZXIpIHtcclxuXHRcdFx0XHRwcm9qZWN0TW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVGb2xkZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjcmVhdGVUYXNrUGFnZShjdXJyZW50QWN0aXZlRm9sZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlRm9sZGVyKGUpIHtcclxuXHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKGUuc3JjRWxlbWVudC5pbm5lclRleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RMaXN0KG5ld1Byb2plY3ROYW1lKSB7XHJcblx0cHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSkpO1xyXG5cdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlRnJvbVByb2plY3RMaXN0KG5ld1Byb2plY3QpIHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBuZXdQcm9qZWN0KSB7XHJcblx0XHRcdGRlbGV0ZSBwcm9qZWN0TGlzdFtpXTtcclxuXHRcdFx0cHJvamVjdExpc3Quc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAwKSByZW1vdmVMb2NhbFN0b3JhZ2Uoa2V5KTtcclxuXHRcdFx0ZWxzZSBzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8qIERpc3BsYXkgQmxhbmsgUGFnZSB0byBpbmRpY2F0ZSBzdGVwcyB0byB1c2UgVE9ETyBMaXN0ICovXHJcblx0aWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cdFx0LyogRGVsZXRlIHByZXZpb3VzIGV4aXN0ZWQgVGFzayBQYWdlIERpc3BsYXkgKi9cclxuXHRcdGNvbnN0IHByZXZUYXNrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIik7XHJcblx0XHRpZiAocHJldlRhc2tQYWdlICE9IG51bGwpIHtcclxuXHRcdFx0Y29udGVudC5yZW1vdmVDaGlsZChwcmV2VGFza1BhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0XHRpZiAocHJvamVjdEl0ZW1zICE9IG51bGwpIHtcclxuXHRcdFx0cHJvamVjdEl0ZW1zLmlubmVyVGV4dCA9IFwiTm8gUHJvamVjdFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGRpcmVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cdFx0aGVhZGVyLmlubmVyVGV4dCA9IFwiUGxlYXNlIEFkZCBOZXcgUHJvamVjdCBGaXJzdFwiO1xyXG5cclxuXHRcdGRpcmVjdGlvbnMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHRcdGRpcmVjdGlvbnMuY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbnNcIik7XHJcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKGRpcmVjdGlvbnMpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnQobmV3TGlzdEl0ZW0pIHtcclxuXHRuZXdMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlRm9sZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlRXZlbnQocHJvamVjdCkge1xyXG5cdHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUFjdGl2ZUZvbGRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSkge1xyXG5cdGNvbnN0IHByb2plY3RJdGVtc0Rlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXNcIik7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zLW1vYmlsZVwiKTtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIikuaW5uZXJUZXh0O1xyXG5cclxuXHRpZiAoY3VycmVudEFjdGl2ZUZvbGRlciA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0c2V0Rmlyc3RBc0N1cnJlbnRGb2xkZXIoKTtcclxuXHR9XHJcblx0cHJvamVjdEl0ZW1zRGVza3RvcC5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3REZXNrdG9wKSA9PiB7XHJcblx0XHRpZiAocHJvamVjdERlc2t0b3AuaW5uZXJUZXh0ID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGRlbGV0ZUV2ZW50KHByb2plY3REZXNrdG9wKTtcclxuXHRcdFx0cHJvamVjdEl0ZW1zRGVza3RvcC5yZW1vdmVDaGlsZChwcm9qZWN0RGVza3RvcCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYgKHByb2plY3RJdGVtc01vYmlsZSAhPSBudWxsKSB7XHJcblx0XHRwcm9qZWN0SXRlbXNNb2JpbGUuY2hpbGROb2Rlcy5mb3JFYWNoKChwcm9qZWN0TW9iaWxlKSA9PiB7XHJcblx0XHRcdGlmIChwcm9qZWN0TW9iaWxlLmlubmVyVGV4dCA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRcdGRlbGV0ZUV2ZW50KHByb2plY3RNb2JpbGUpO1xyXG5cdFx0XHRcdHByb2plY3RJdGVtc01vYmlsZS5yZW1vdmVDaGlsZChwcm9qZWN0TW9iaWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGRlbGV0ZUZyb21Qcm9qZWN0TGlzdChwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KG5hbWUpIHtcclxuXHRjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xyXG5cdG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XHJcblxyXG5cdGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0bmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuXHRuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XHJcblxyXG5cdGNvbnN0IHJlbW92ZUltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0cmVtb3ZlSW1hZ2Uuc3JjID0gcmVtb3ZlSWNvbjtcclxuXHRyZW1vdmVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdFwiKTtcclxuXHRyZW1vdmVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlUHJvamVjdCk7XHJcblxyXG5cdG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKHJlbW92ZUltYWdlKTtcclxuXHRhZGRFdmVudChuZXdMaXN0SXRlbSk7XHJcblxyXG5cdHJldHVybiBuZXdMaXN0SXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RNb2JpbGUobmFtZSkge1xyXG5cdGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tbW9iaWxlXCIpO1xyXG5cdG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XHJcblxyXG5cdGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0bmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuXHRuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XHJcblxyXG5cdGNvbnN0IHJlbW92ZUltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0cmVtb3ZlSW1hZ2Uuc3JjID0gcmVtb3ZlSWNvbjtcclxuXHRyZW1vdmVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdE1vYmlsZVwiKTtcclxuXHRyZW1vdmVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlUHJvamVjdCk7XHJcblxyXG5cdG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKHJlbW92ZUltYWdlKTtcclxuXHRhZGRFdmVudChuZXdMaXN0SXRlbSk7XHJcblxyXG5cdHJldHVybiBuZXdMaXN0SXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0TmFtZSwgaXNNb2JpbGUgPSBmYWxzZSkge1xyXG5cdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtc1wiKTtcclxuXHRjb25zdCBuZXdMaXN0SXRlbSA9IGRpc3BsYXlQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHRwcm9qZWN0SXRlbXMuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xyXG5cclxuXHQvKiBTZXQgTmV3IFByb2plY3QgYXMgQ3VycmVudCBQcm9qZWN0ICovXHJcblx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3RNb2JpbGUocHJvamVjdE5hbWUpIHtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdGNvbnN0IG5ld0xpc3RJdGVtID0gZGlzcGxheVByb2plY3RNb2JpbGUocHJvamVjdE5hbWUpO1xyXG5cdHByb2plY3RJdGVtcz8uYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xyXG5cclxuXHQvKiBTZXQgTmV3IFByb2plY3QgYXMgQ3VycmVudCBQcm9qZWN0ICovXHJcblx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XHJcblx0LyogQWRkIHRvIHN0b3JhZ2UgKi9cclxuXHRhZGRUb1Byb2plY3RMaXN0KHByb2plY3ROYW1lLnZhbHVlKTtcclxuXHQvKiBBZGQgdG8gRE9NICovXHJcblx0YWRkUHJvamVjdFRvTGlzdChwcm9qZWN0TmFtZS52YWx1ZSk7XHJcblx0YWRkUHJvamVjdFRvTGlzdE1vYmlsZShwcm9qZWN0TmFtZS52YWx1ZSk7XHJcblx0Ly8gY2xvc2VGb3JtKG51bGwsIHRydWUsIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzKGlzTW9iaWxlID0gZmFsc2UpIHtcclxuXHRpZiAoaXNNb2JpbGUgPT0gZmFsc2UgJiYgcHJvamVjdExpc3QubGVuZ3RoID09IDApIHtcclxuXHRcdHNhbXBsZVByb2plY3RzLmZvckVhY2goKHNhbXBsZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcblx0XHRcdFx0c2FtcGxlLm5hbWUsXHJcblx0XHRcdFx0c2FtcGxlLnRvZG9zLFxyXG5cdFx0XHRcdHNhbXBsZS5jb21wbGV0ZWRcclxuXHRcdFx0KTtcclxuXHRcdFx0cHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuXHRcdH0pO1xyXG5cdFx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG5cdH1cclxuXHJcblx0aWYgKGlzTW9iaWxlID09IGZhbHNlKSB7XHJcblx0XHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdGFkZFByb2plY3RUb0xpc3QocHJvamVjdC5uYW1lKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XHJcblx0XHRuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmV3UHJvamVjdEZvcm0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdGFkZFByb2plY3RUb0xpc3RNb2JpbGUocHJvamVjdC5uYW1lKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RNb2JpbGVcIik7XHJcblx0XHRuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmV3UHJvamVjdEZvcm0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1pdGVtXCIpO1xyXG5cclxuXHRmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xyXG5cdFx0YWRkRXZlbnQoZm9sZGVyKTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqKioqKiBUYXNrIEZ1bmN0aW9ucyAqKioqKioqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrUGFnZShjdXJyZW50QWN0aXZlRm9sZGVyKSB7XHJcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHQvKiBEZWxldGUgcHJldmlvdXMgZXhpc3RlZCBQYWdlIERpc3BsYXkgKi9cclxuXHRjb25zdCBkaXJlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXJlY3Rpb25zXCIpO1xyXG5cdGlmIChkaXJlY3Rpb25zICE9IG51bGwpIHtcclxuXHRcdGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGlyZWN0aW9ucyk7XHJcblx0fVxyXG5cdGNvbnN0IHByZXZUYXNrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIik7XHJcblx0aWYgKHByZXZUYXNrUGFnZSAhPSBudWxsKSB7XHJcblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKHByZXZUYXNrUGFnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0YXNrUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dGFza1BhZ2UuY2xhc3NMaXN0LmFkZChcInRhc2tQYWdlXCIpO1xyXG5cdHRhc2tQYWdlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrSGVhZGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbj5BZGQgTmV3IFRhc2s8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9MaXN0XCI+PC9kaXY+XHJcbiAgICAgICAgPGgzPkNvbXBsZXRlZCBUYXNrczwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRvbmVMaXN0XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1BhZ2UpO1xyXG5cclxuXHRjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tIZWFkZXJcIikucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuXHRjb25zdCBhZGRUYXNrID0gbmV3IEltYWdlKCk7XHJcblx0YWRkVGFzay5zcmMgPSBhZGRJY29uO1xyXG5cdGFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XHJcblx0YWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk5ld1Rhc2tGb3JtKTtcclxuXHRhZGRCdG4ucHJlcGVuZChhZGRUYXNrKTtcclxuXHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPSBjdXJyZW50QWN0aXZlRm9sZGVyO1xyXG5cdGNvbnN0IGN1cnJldEZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGN1cnJldEZvbGRlci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuXHR0YXNrUGFnZS5wcmVwZW5kKGN1cnJldEZvbGRlcik7XHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya1Rhc2tBc1RvZG8ocHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XHJcblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QuY29tcGxldGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHByb2plY3QuY29tcGxldGVkW2ldLnRpdGxlID09IHRhc2tOYW1lKSB7XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zLnB1c2goXHJcblx0XHRcdFx0XHRcdG5ldyBUYXNrKFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkW2ldLnRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkW2ldLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkW2ldLmR1ZSxcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZFtpXS5wcmlvcml0eVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHByb2plY3QuY29tcGxldGVkW2ldO1xyXG5cdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWQuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrVGFza0FzQ29tcGxldGVkKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHByb2plY3QudG9kb3NbaV0udGl0bGUgPT0gdGFza05hbWUpIHtcclxuXHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkLnB1c2goXHJcblx0XHRcdFx0XHRcdG5ldyBUYXNrKFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0udGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5kZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLmR1ZSxcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLnByaW9yaXR5XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRkZWxldGUgcHJvamVjdC50b2Rvc1tpXTtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3Muc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KFxyXG5cdHByb2plY3ROYW1lLFxyXG5cdHRhc2tOYW1lLFxyXG5cdHRhc2tEZXNjcmlwdGlvbixcclxuXHR0YXNrRHVlLFxyXG5cdHRhc2tQcmlvcml0eSxcclxuXHRpc1RvZG9JdGVtID0gdHJ1ZVxyXG4pIHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRpZiAoaXNUb2RvSXRlbSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0cHJvamVjdExpc3RbaV0udG9kb3MucHVzaChcclxuXHRcdFx0XHRcdG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByb2plY3RMaXN0W2ldLmNvbXBsZXRlZC5wdXNoKFxyXG5cdFx0XHRcdFx0bmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrSW5Qcm9qZWN0KFxyXG5cdHByb2plY3ROYW1lLFxyXG5cdG9sZFRpdGxlLFxyXG5cdHRhc2tOYW1lLFxyXG5cdHRhc2tEZXNjcmlwdGlvbixcclxuXHR0YXNrRHVlLFxyXG5cdHRhc2tQcmlvcml0eSxcclxuXHRpc1RvZG9JdGVtID0gdHJ1ZVxyXG4pIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0LnRvZG9zW2ldLnRpdGxlID09IG9sZFRpdGxlKSB7XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLnRpdGxlID0gdGFza05hbWU7XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5kdWUgPSB0YXNrRHVlO1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZSwgdGFza1RpdGxlKSB7XHJcblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAocHJvamVjdC50b2Rvc1tpXS50aXRsZSA9PSB0YXNrVGl0bGUpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSBwcm9qZWN0LnRvZG9zW2ldO1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAwKSByZW1vdmVMb2NhbFN0b3JhZ2Uoa2V5KTtcclxuXHRlbHNlIHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFzayhlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcclxuXHRjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjcmlwdGlvblwiKTtcclxuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZUVudGVyZWRcIik7XHJcblx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuXHJcblx0LyogQWRkIHRvIHN0b3JhZ2UgKi9cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRhZGRUYXNrVG9Qcm9qZWN0KFxyXG5cdFx0cHJvamVjdE5hbWUsXHJcblx0XHR0YXNrTmFtZS52YWx1ZSxcclxuXHRcdHRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcclxuXHRcdHRhc2tEdWVEYXRlLnZhbHVlLFxyXG5cdFx0dGFza1ByaW9yaXR5LnZhbHVlXHJcblx0KTtcclxuXHJcblx0dGFza05hbWUudmFsdWUgPSBcIlwiO1xyXG5cdGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRPRE8odG9kb0xpc3QsIHRvZG9EaXYpIHtcclxuXHR0b2RvTGlzdC5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcclxuXHQvKiBEZWxldGUgRnJvbSBzdG9yYWdlICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVN0YXR1cyhlKSB7XHJcblx0Y29uc3QgdGFza05hbWUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHJcblx0LyogQ2hlY2sgaWYgdGhpcyB0YXNrIGlzIHBlbmRpbmcgb3IgY29tcGxldGVkKi9cclxuXHRjb25zdCB0YXNrRGl2ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHRpZiAodGFza0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RvVGFza1wiKSkge1xyXG5cdFx0bWFya1Rhc2tBc0NvbXBsZXRlZChwcm9qZWN0TmFtZSwgdGFza05hbWUpO1xyXG5cdH0gZWxzZSBpZiAodGFza0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJkb25lVGFza1wiKSkge1xyXG5cdFx0bWFya1Rhc2tBc1RvZG8ocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHR9XHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0luZm8oZSkge1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIikuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cdGNvbnN0IHRhc2tOYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dDtcclxuXHJcblx0Y29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdGNvbnN0IHRhc2sgPSBnZXRUYXNrKHByb2plY3QsIHRhc2tOYW1lKTtcclxuXHJcblx0aWYgKHRhc2sgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRvcGVuRGVzY3JpcHRpb25Cb3godGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWUsIHRhc2sucHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrKGUsIHRpdGxlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcclxuXHRjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjcmlwdGlvblwiKTtcclxuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZUVudGVyZWRcIik7XHJcblx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuXHJcblx0LyogVXBkYXRlIHRvIHN0b3JhZ2UgKi9cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHR1cGRhdGVUYXNrSW5Qcm9qZWN0KFxyXG5cdFx0cHJvamVjdE5hbWUsXHJcblx0XHR0aXRsZSxcclxuXHRcdHRhc2tOYW1lLnZhbHVlLFxyXG5cdFx0dGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxyXG5cdFx0dGFza0R1ZURhdGUudmFsdWUsXHJcblx0XHR0YXNrUHJpb3JpdHkudmFsdWVcclxuXHQpO1xyXG5cdGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcblx0Y2xvc2VGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRjb25zdCB0YXNrTmFtZSA9XHJcblx0XHRlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XHJcblxyXG5cdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHRjb25zdCB0YXNrID0gZ2V0VGFzayhwcm9qZWN0LCB0YXNrTmFtZSk7XHJcblxyXG5cdGlmICh0YXNrID09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0b3BlbkVkaXRUYXNrRm9ybShcclxuXHRcdHByb2plY3ROYW1lLFxyXG5cdFx0dGFzay50aXRsZSxcclxuXHRcdHRhc2suZGVzY3JpcHRpb24sXHJcblx0XHR0YXNrLmR1ZSxcclxuXHRcdHRhc2sucHJpb3JpdHlcclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuXHRjb25zdCB0YXNrTmFtZSA9XHJcblx0XHRlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XHJcblxyXG5cdC8qIERlbGV0ZSBmcm9tIHN0b3JhZ2UgKi9cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRPRE8odG9kb0xpc3QsIHRvZG8pIHtcclxuXHRjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0Y29uc3QgdG9kb0Rpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cdGNoZWNrQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHRjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZVN0YXR1cyk7XHJcblx0Y2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tCdG4nKTtcclxuXHR0b2RvRGl2TWFpbi5hcHBlbmRDaGlsZChjaGVja0J0bik7XHJcblx0Y29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0dG9kb1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcblx0dG9kb0Rpdk1haW4uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuXHR0b2RvRGl2TWFpbi5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpdk1haW5cIik7XHJcblx0dG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2TWFpbik7XHJcblxyXG5cdGNvbnN0IHRvZG9EaXZTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0Y29uc3QgaW5mb0ljb25JbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRpbmZvSWNvbkltZy5zcmMgPSBpbmZvSWNvbjtcclxuXHRpbmZvSWNvbkltZy5hbHQgPSBcIkltYWdlIG9mIEluZm8gSWNvblwiO1xyXG5cdGluZm9JY29uSW1nLmNsYXNzTGlzdC5hZGQoXCJpbmZvSWNvbkltZ1wiKTtcclxuXHRkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5mbyk7XHJcblx0ZGV0YWlscy5hcHBlbmRDaGlsZChpbmZvSWNvbkltZyk7XHJcblx0dG9kb0RpdlNldHRpbmdzLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG5cclxuXHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRjb25zdCBlZGl0VGFza0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0ZWRpdFRhc2tJbWFnZS5zcmMgPSBlZGl0SWNvbjtcclxuXHRlZGl0VGFza0ltYWdlLmFsdCA9IFwiRWRpdCBmb3IgVGFza1wiO1xyXG5cdGVkaXRUYXNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcImVkaXRUYXNrSW1hZ2VcIik7XHJcblx0ZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0VGFza0ltYWdlKTtcclxuXHRlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XHJcblxyXG5cdHRvZG9EaXZTZXR0aW5ncy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuXHRjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdGNvbnN0IGRlbGV0ZVRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGRlbGV0ZVRhc2tJbWFnZS5zcmMgPSBkZWxldGVJY29uO1xyXG5cdGRlbGV0ZVRhc2tJbWFnZS5hbHQgPSBcIkRlZWxldCB0aGUgVGFza1wiO1xyXG5cdGRlbGV0ZVRhc2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza0ltYWdlXCIpO1xyXG5cdGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVUYXNrSW1hZ2UpO1xyXG5cdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzayk7XHJcblxyXG5cdHRvZG9EaXZTZXR0aW5ncy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cdHRvZG9EaXZTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwidG9kb0RpdlNldHRpbmdzXCIpO1xyXG5cclxuXHR0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EaXZTZXR0aW5ncyk7XHJcblx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1Rhc2tcIik7XHJcblx0c3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XHJcblx0XHRjYXNlIFwiaGlnaFwiOlxyXG5cdFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoVG9kb1Rhc2tcIik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIm1lZGl1bVwiOlxyXG5cdFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Ub2RvVGFza1wiKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3dUb2RvVGFza1wiKTtcclxuXHR9XHJcblx0dG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDb21wbGV0ZWQoZG9uZUxpc3QsIGNvbXBsZXRlZFRhc2spIHtcclxuXHRjb25zdCBjb21wbGV0ZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuXHRjb25zdCBjb21wbGV0ZWREaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRjaGVja0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcblx0Y2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VTdGF0dXMpO1xyXG5cdGNoZWNrQnRuLmNoZWNrZWQgPSB0cnVlO1xyXG5cdGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrQnRuJyk7XHJcblx0Y29tcGxldGVkRGl2TWFpbi5hcHBlbmRDaGlsZChjaGVja0J0bik7XHJcblx0Y29uc3QgY29tcGxldGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRjb21wbGV0ZWRUaXRsZS5pbm5lclRleHQgPSBjb21wbGV0ZWRUYXNrLnRpdGxlO1xyXG5cdGNvbXBsZXRlZERpdk1haW4uYXBwZW5kQ2hpbGQoY29tcGxldGVkVGl0bGUpO1xyXG5cdGNvbXBsZXRlZERpdk1haW4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZERpdk1haW5cIik7XHJcblxyXG5cdGNvbXBsZXRlZERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXZNYWluKTtcclxuXHRjb21wbGV0ZWREaXYuY2xhc3NMaXN0LmFkZChcImRvbmVUYXNrXCIpO1xyXG5cdGRvbmVMaXN0LmFwcGVuZENoaWxkKGNvbXBsZXRlZERpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSkge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Y29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0XCIpO1xyXG5cdFx0XHRjb25zdCBkb25lTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9uZUxpc3RcIik7XHJcblxyXG5cdFx0XHQvLyBjbGVhciBwcmV2IGVsZW1lbnRzXHJcblx0XHRcdHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHQvLyB0b2RvIGxpc3RcclxuXHRcdFx0aWYgKHByb2plY3QudG9kb3MubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHQvLyBkaXNwbGF5IG5vIHdvcmsgcGljdHVyZVxyXG5cdFx0XHRcdGNvbnN0IG5vV29ya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0bm9Xb3JrRGl2LmNsYXNzTGlzdC5hZGQoXCJub1dvcmtEaXZcIik7XHJcblx0XHRcdFx0Y29uc3Qgbm9Xb3JrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0XHRub1dvcmtJbWFnZS5zcmMgPSBjb21wbGV0ZWRUYXNrUGljO1xyXG5cdFx0XHRcdG5vV29ya0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJub1dvcmtJbWFnZVwiKTtcclxuXHRcdFx0XHRub1dvcmtEaXYuYXBwZW5kQ2hpbGQobm9Xb3JrSW1hZ2UpO1xyXG5cdFx0XHRcdGNvbnN0IG5vV29ya1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRcdFx0XHRub1dvcmtUZXh0LmlubmVyVGV4dCA9IFwiTm8gd29yayBmb3IgdG9kYXkuIEVuam95IHlvdXIgZGF5LlwiO1xyXG5cdFx0XHRcdG5vV29ya0Rpdi5hcHBlbmRDaGlsZChub1dvcmtUZXh0KTtcclxuXHRcdFx0XHR0b2RvTGlzdC5hcHBlbmRDaGlsZChub1dvcmtEaXYpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNsZWFyIHByZXYgZWxlbWVudHMsIGluIGNhc2Ugb2Ygbm8gd29yayBpbWFnZSBpcyBoZXJlXHJcblx0XHRcdFx0dG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRcdFx0cHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5VE9ETyh0b2RvTGlzdCwgdG9kbyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY29tcGxldGVkIGxpc3RcclxuXHRcdFx0ZG9uZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdFx0cHJvamVjdC5jb21wbGV0ZWQuZm9yRWFjaCgoY29tcGxldGVkVGFzaykgPT4ge1xyXG5cdFx0XHRcdGRpc3BsYXlDb21wbGV0ZWQoZG9uZUxpc3QsIGNvbXBsZXRlZFRhc2spO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZFByb2plY3RzLCBhZGRQcm9qZWN0LCBhZGRUYXNrLCB1cGRhdGVUYXNrIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2xvYWROYXZCYXIsIGFwcGx5TW9kZX0gZnJvbSAnLi9tb2R1bGVzL25hdkJhcic7XHJcblxyXG5sb2FkTmF2QmFyKCk7XHJcbmFwcGx5TW9kZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=