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
___CSS_LOADER_EXPORT___.push([module.id, ".formContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.formContainerOpen {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.formContainerClose {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 0%;\r\n}\r\n\r\n.newProjectForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 30vmax;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.newForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 30vmax;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.formOpen {\r\n    z-index: 1;\r\n    top: 0;\r\n    transform: translateY(20%);\r\n    animation: popin 1s;\r\n    opacity: 1;\r\n}\r\n\r\n.formClose {\r\n    top: 0;\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    animation: popout 1s;\r\n}\r\n\r\n.descriptionDetails {\r\n    margin: 1em;\r\n}\r\n\r\n@keyframes popin {\r\n    from {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: translateY(20%);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes popout {\r\n    from {\r\n        transform: translateY(20%);\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--light-shade-3);\r\n    align-items: center;\r\n    padding: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n.closeImage {\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\nmain {\r\n    flex-grow: 1;\r\n}\r\n\r\nmain > form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    row-gap: 1em;\r\n}\r\ninput, select{\r\n    height: 2em;\r\n    font-size: 1em;\r\n    border: none;\r\n    padding: 5px;\r\n}\r\n\r\n.addBtn {\r\n    padding: 1em;\r\n    font-size: large;\r\n    background-color: var(--light-shade-3);\r\n    border: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.addBtn:hover {\r\n    background-color: var(--light-shade-1);\r\n}\r\n\r\n.descriptionDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/dialogBox.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,MAAM;IACN,0BAA0B;IAC1B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,MAAM;IACN,UAAU;IACV,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI;QACI,wBAAwB;QACxB,UAAU;IACd;IACA;QACI,0BAA0B;QAC1B,UAAU;IACd;AACJ;;AAEA;IACI;QACI,0BAA0B;QAC1B,UAAU;IACd;IACA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;IACtC,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB","sourcesContent":[".formContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.formContainerOpen {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.formContainerClose {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 0%;\r\n}\r\n\r\n.newProjectForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 30vmax;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.newForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 30vmax;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.formOpen {\r\n    z-index: 1;\r\n    top: 0;\r\n    transform: translateY(20%);\r\n    animation: popin 1s;\r\n    opacity: 1;\r\n}\r\n\r\n.formClose {\r\n    top: 0;\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    animation: popout 1s;\r\n}\r\n\r\n.descriptionDetails {\r\n    margin: 1em;\r\n}\r\n\r\n@keyframes popin {\r\n    from {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: translateY(20%);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes popout {\r\n    from {\r\n        transform: translateY(20%);\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--light-shade-3);\r\n    align-items: center;\r\n    padding: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n.closeImage {\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\nmain {\r\n    flex-grow: 1;\r\n}\r\n\r\nmain > form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    row-gap: 1em;\r\n}\r\ninput, select{\r\n    height: 2em;\r\n    font-size: 1em;\r\n    border: none;\r\n    padding: 5px;\r\n}\r\n\r\n.addBtn {\r\n    padding: 1em;\r\n    font-size: large;\r\n    background-color: var(--light-shade-3);\r\n    border: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.addBtn:hover {\r\n    background-color: var(--light-shade-1);\r\n}\r\n\r\n.descriptionDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --light-shade-1: rgb(196, 112, 196);\r\n    --light-shade-2: #C291D9;\r\n    --light-shade-3: rgb(170, 83, 170);\r\n    --light-shade-4: purple;\r\n    --light-shade-5: #E8CFF3;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.blurredContent {\r\n    filter:blur(1px);\r\n}\r\n\r\n.lightMode {\r\n    background-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n    background-color: var(--light-shade-2);\r\n    width: 40vmin;\r\n    height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n    padding: 2vmin;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: 1em;\r\n    padding: 1em;\r\n    background-color: hsla(0, 100%, 100%, 0.5);\r\n    border-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.list-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.activeFolder {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n    height: 1em;\r\n}\r\n\r\n.project-list {\r\n    width: 100%;\r\n    height: 40vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.project-list > p {\r\n    font-size: 1.5em;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    background-color: var(--light-shade-3);\r\n    text-align: center;\r\n}\r\n\r\n.project-items {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n    height: 15px;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n    display: block;\r\n}\r\n\r\n.newProject {\r\n    position: absolute;\r\n    bottom: 2em;\r\n    width: 30vmin;\r\n}\r\n\r\n.addProject {\r\n    font-size: 1em;\r\n    height: 3em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: var(--light-shade-4);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/navBar.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;IACnC,wBAAwB;IACxB,kCAAkC;IAClC,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;IACtC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,0CAA0C;IAC1C,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,WAAW;IACX,eAAe;IACf,sCAAsC;IACtC,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":[":root {\r\n    --light-shade-1: rgb(196, 112, 196);\r\n    --light-shade-2: #C291D9;\r\n    --light-shade-3: rgb(170, 83, 170);\r\n    --light-shade-4: purple;\r\n    --light-shade-5: #E8CFF3;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.blurredContent {\r\n    filter:blur(1px);\r\n}\r\n\r\n.lightMode {\r\n    background-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n    background-color: var(--light-shade-2);\r\n    width: 40vmin;\r\n    height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n    padding: 2vmin;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: 1em;\r\n    padding: 1em;\r\n    background-color: hsla(0, 100%, 100%, 0.5);\r\n    border-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.list-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.activeFolder {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n    height: 1em;\r\n}\r\n\r\n.project-list {\r\n    width: 100%;\r\n    height: 40vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.project-list > p {\r\n    font-size: 1.5em;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    background-color: var(--light-shade-3);\r\n    text-align: center;\r\n}\r\n\r\n.project-items {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n    height: 15px;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n    display: block;\r\n}\r\n\r\n.newProject {\r\n    position: absolute;\r\n    bottom: 2em;\r\n    width: 30vmin;\r\n}\r\n\r\n.addProject {\r\n    font-size: 1em;\r\n    height: 3em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: var(--light-shade-4);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".directions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--light-shade-5);\r\n    color: purple;\r\n}\r\n\r\n.taskPage {\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    padding: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.taskHeader {\r\n    width: 100%;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n    padding: 0.5em;\r\n    background-color: inherit;\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: none;\r\n    display: flex;\r\n    column-gap: 1em;\r\n    align-items: center;\r\n}\r\n\r\n.addTask {\r\n    height: 1em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.taskContent > h3 {\r\n    margin-top: 3em;\r\n    margin-bottom: 1em;\r\n    height: 2em;\r\n    padding: 0.5em;\r\n    color: white;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList, .doneList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    row-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n    font-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.noWorkImage {\r\n    width: 40vw;\r\n}\r\n\r\n.todoTask, .doneTask {\r\n    background-color: #D6B5E5;\r\n    padding: 0.5em;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n\r\n.lowTodoTask {\r\n    border-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n    border-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n    border-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover, .doneTask:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    column-gap: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    transform: scale(2);\r\n    margin-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"]:checked {\r\n    accent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTask {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button, .todoDivSettings > button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover, .todoDivSettings > button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.infoIconImg, .editTaskImage, .deleteTaskImage {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/taskPage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB","sourcesContent":[".directions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--light-shade-5);\r\n    color: purple;\r\n}\r\n\r\n.taskPage {\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    padding: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.taskHeader {\r\n    width: 100%;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n    padding: 0.5em;\r\n    background-color: inherit;\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: none;\r\n    display: flex;\r\n    column-gap: 1em;\r\n    align-items: center;\r\n}\r\n\r\n.addTask {\r\n    height: 1em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.taskContent > h3 {\r\n    margin-top: 3em;\r\n    margin-bottom: 1em;\r\n    height: 2em;\r\n    padding: 0.5em;\r\n    color: white;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList, .doneList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    row-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n    font-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.noWorkImage {\r\n    width: 40vw;\r\n}\r\n\r\n.todoTask, .doneTask {\r\n    background-color: #D6B5E5;\r\n    padding: 0.5em;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n\r\n.lowTodoTask {\r\n    border-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n    border-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n    border-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover, .doneTask:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    column-gap: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    transform: scale(2);\r\n    margin-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"]:checked {\r\n    accent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTask {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button, .todoDivSettings > button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover, .todoDivSettings > button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.infoIconImg, .editTaskImage, .deleteTaskImage {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ loadNavBar)
/* harmony export */ });
/* harmony import */ var _styles_navBar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/navBar.css */ "./src/styles/navBar.css");
/* harmony import */ var _styles_dialogBox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/dialogBox.css */ "./src/styles/dialogBox.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");




function loadNavBar() {
    const content = document.querySelector('.content');

    const div = document.createElement('div');
    div.classList.add('navBar');
    div.innerHTML =
    `<div class="navBarContent">
        <div class="officialHeader">
            <h1>TodoList</h1>
        </div>
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
    logoImage.alt = "picture of logo";
    logoImage.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;

    const officialHeader = document.querySelector('.officialHeader');
    officialHeader.appendChild(logoImage);
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
/* harmony import */ var _assets_infoIcon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/infoIcon.jpg */ "./src/assets/infoIcon.jpg");
/* harmony import */ var _assets_editBtn_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/editBtn.jpg */ "./src/assets/editBtn.jpg");
/* harmony import */ var _assets_deleteBtn_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/deleteBtn.jpg */ "./src/assets/deleteBtn.jpg");
/* harmony import */ var _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/trash-can.png */ "./src/assets/trash-can.png");
/* harmony import */ var _assets_completedTask_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/completedTask.jpg */ "./src/assets/completedTask.jpg");
/* harmony import */ var _dialogBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogBox */ "./src/modules/dialogBox.js");









let projectList = [];

const sampleProjects = [
    {
        name: 'Web Development',
        todos: [
            {
                title: 'Work on ToDo List',
                description: `Add a 'AddTask' button on Odin's TODO List Project`,
                due: null,
                priority: 'high'
            },
            {
                title: 'Start studying OOP',
                description: `Start reading OOP Chapter from Odin Project`,
                due: null,
                priority: 'medium'
            },
            {
                title: 'Read others websites',
                description: `Find and read 2 of others websites from Odin's discord`,
                due: null,
                priority: 'low'
            }
        ],
        completed: [
            {
                title: `Add a 'AddProject' button on ToDo List`,
                description: `Add a 'AddProject' button on Odin's TODO List Project`,
                due: null,
                priority: 'high'
            }
        ]
    },
    {
        name: 'Work',
        todos: [],
        completed: [
            {
                title: 'Send email to Sonia',
                description: `Write Sonia about yesterday's regression test results`,
                due: null,
                priority: 'high'
            }
        ]
    }
];

class Project {
    constructor(name, todos = [], completed= []) {
        this.name = name;
        this.todos = [];
        if (todos.length > 0) {
            todos.forEach(todo => {
                this.todos.push(new Task(todo.title, todo.description, todo.due, todo.priority));
            });
        }
        this.completed = [];
        if (completed.length > 0) {
            completed.forEach(todo => {
                this.completed.push(new Task(todo.title, todo.description, todo.due, todo.priority));
            });
        }
    }

    getTask(taskName) {
        let retTask = undefined;
        this.todos.forEach(task => {
            if (task.title == taskName) {
                retTask = task;
                return;
            }
        });

        if (retTask != undefined) return retTask;

        this.completed.forEach(task => {
            if (task.title == taskName) {
                retTask = task;
                return;
            }
        });
        return retTask;
    }
}

class Task {
    constructor(name, description, due = null, priority='low') {
        this.title = name;
        if (description == '') {
            description = 'No description is available';
        }
        this.description = description;
        if (due == '' || due == null) {
            this.due = new Date().toJSON().slice(0, 10);
        } else {
            this.due = due;
        }
        this.priority = priority;
    }
}
createTaskPage
function getProject(projectName) {
    let retProject = undefined;
    projectList.forEach(project => {
        if (project.name == projectName) {
            retProject = project;
            return retProject;
        }
    });

    return retProject;
}

let currentActiveFolder = undefined;

function setFirstAsCurrentFolder() {
    const listItems = document.querySelectorAll('.list-item');
    if (listItems.length > 0) {
        const defaultTaskPage = document.querySelectorAll('.list-item')[0];
        setCurrentActiveFolder(defaultTaskPage);
    }
}

function setCurrentActiveFolder(projectListItem) {
    if (currentActiveFolder == projectListItem) return;
    if (currentActiveFolder != undefined) {
        currentActiveFolder.classList.remove('activeFolder');
    }
    currentActiveFolder = projectListItem;
    projectListItem.classList.add('activeFolder');
    createTaskPage(currentActiveFolder);
}

function changeActiveFolder(e) { 
    setCurrentActiveFolder(e.target.parentElement);
}

function addToProjectList(newProjectName) {
    projectList.push(new Project(newProjectName));
}

function deleteFromProjectList(newProject) {
    for(let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == newProject) {
            delete(projectList[i]);
            projectList.splice(i, 1);
        } 
    }
    /* Display Blank Page to indicate steps to use TODO List */
    if (projectList.length == 0) {
        const content = document.querySelector('.content');
        /* Delete previous existed Task Page Display */
        const prevTaskPage = document.querySelector('.taskPage');
        if (prevTaskPage != null) {
            content.removeChild(prevTaskPage);
        }

        const directions = document.createElement('div');
        const header = document.createElement('h2');
        header.innerText = 'Please Add New Project First';

        directions.appendChild(header);
        directions.classList.add('directions');
        content.appendChild(directions);
    }
}

function addEvent(newListItem) {
    newListItem.addEventListener('click', changeActiveFolder);
}

function deleteEvent(project) {
    project.removeEventListener('click', changeActiveFolder);
}

function removeProject(e) {
    const projectItems = document.querySelector('.project-items');
    let removingItem = e.target.parentElement;
    if (currentActiveFolder == removingItem) {
        setFirstAsCurrentFolder();
    }
    deleteEvent(removingItem);
    projectItems.removeChild(removingItem);
    deleteFromProjectList(removingItem.querySelector('span').innerText);
}

function displayProject(name) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('project-item');
    newListItem.classList.add('list-item');

    const newProjectName = document.createElement('span')
    newProjectName.innerText = name;
    newListItem.appendChild(newProjectName);

    const removeImage = new Image();
    removeImage.src = _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_5__;
    removeImage.classList.add('removeProject');
    removeImage.addEventListener('click', removeProject);

    newListItem.appendChild(removeImage);  
    addEvent(newListItem);

    /* Set New Project as Current Project */
    setCurrentActiveFolder(newListItem);

    return newListItem;
}

function addProjectToList(projectName) {
    const projectItems = document.querySelector('.project-items');
    const newListItem = displayProject(projectName);
    projectItems.appendChild(newListItem);
}

function addProject(e) {
    e.preventDefault();
    const projectName = document.querySelector('#projectName');
    /* Add to storage */
    addToProjectList(projectName.value);
    /* Add to DOM */
    addProjectToList(projectName.value);
    (0,_dialogBox__WEBPACK_IMPORTED_MODULE_7__.closeForm)(null, true, false);
}

function loadProjects() {
    if (projectList.length == 0) {
        sampleProjects.forEach(sample => {
            const newProject = new Project(sample.name, sample.todos, sample.completed);
            projectList.push(newProject);
        });
    }

    projectList.forEach(project => {
        addProjectToList(project.name);
    });

    const newProjectBtn = document.querySelector('.addProject');
    newProjectBtn.addEventListener('click', _dialogBox__WEBPACK_IMPORTED_MODULE_7__.openNewProjectForm);

    const folders = document.querySelectorAll('.list-item');
    
    folders.forEach(folder => {
        addEvent(folder);
    });
}

/****** Task Functions *******/
function createTaskPage(currentActiveFolder) {
    const content = document.querySelector('.content');
    /* Delete previous existed Page Display */
    const directions = document.querySelector('.directions');
    if (directions != null) {
        content.removeChild(directions);
    }
    const prevTaskPage = document.querySelector('.taskPage');
    if (prevTaskPage != null) {
        content.removeChild(prevTaskPage);
    }

    const taskPage = document.createElement('div');
    taskPage.classList.add('taskPage');
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

    const addBtn = document.querySelector('.taskHeader').querySelector('button');
    const addTask = new Image();
    addTask.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_1__;
    addTask.classList.add('addTask');
    addTask.addEventListener('click', _dialogBox__WEBPACK_IMPORTED_MODULE_7__.openNewTaskForm);
    addBtn.prepend(addTask);

    const projectName = currentActiveFolder.querySelector('span').innerText;
    const curretFolder = document.createElement('p');
    curretFolder.innerText = projectName;
    taskPage.prepend(curretFolder);
    displayTaskPage(projectName);
}

function markTaskAsTodo(projectName, taskName) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.completed.length; i++) {
                if (project.completed[i].title == taskName) {
                    project.todos.push(
                        new Task(project.completed[i].title,
                                    project.completed[i].description,
                                    project.completed[i].due,
                                    project.completed[i].priority));
                    delete(project.completed[i]);
                    project.completed.splice(i, 1);
                    break;
                }
            }
        }
    });
}

function markTaskAsCompleted(projectName, taskName) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.todos.length; i++) {
                if (project.todos[i].title == taskName) {
                    project.completed.push(
                        new Task(project.todos[i].title,
                                    project.todos[i].description,
                                    project.todos[i].due,
                                    project.todos[i].priority));
                    delete(project.todos[i]);
                    project.todos.splice(i, 1);
                    break;
                }
            }
        }
    });
}

function addTaskToProject(projectName, taskName, taskDescription, taskDue, taskPriority, isTodoItem=true) {
    for(let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == projectName) {
            if (isTodoItem == true) {
                projectList[i].todos.push(new Task(taskName, taskDescription, taskDue, taskPriority));
            } else {
                projectList[i].completed.push(new Task(taskName, taskDescription, taskDue, taskPriority));
            }
        } 
    }
}

function updateTaskInProject(projectName, oldTitle, taskName, taskDescription, taskDue, taskPriority, isTodoItem=true) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.todos.length; i++) {
                if (project.todos[i].title == oldTitle) {
                    project.todos[i].title = taskName;
                    project.todos[i].description = taskDescription;
                    project.todos[i].due = taskDue;
                    project.todos[i].priority = taskPriority;
                }
            }
        }
    });
}

function deleteTaskFromProject(projectName, taskTitle) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.todos.length; i++) {
                if (project.todos[i].title == taskTitle) {
                    delete(project.todos[i]);
                    project.todos.splice(i, 1);
                    break;
                }
            }
        }
    });
}

function addTask(e) {
    e.preventDefault();
    const taskName = document.querySelector('#taskName');
    const taskDescription = document.querySelector('#taskDescription');
    const taskDueDate = document.querySelector('#dateEntered');
    const taskPriority = document.querySelector('#priority');
    
    /* Add to storage */
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    addTaskToProject(projectName, taskName.value, taskDescription.value, taskDueDate.value, taskPriority.value);

    taskName.value = '';
    displayTaskPage(projectName);
}

function deleteTODO(todoList, todoDiv) {
    todoList.removeChild(todoDiv);
    /* Delete From storage */
}

function changeStatus(e) {
    const taskName = e.currentTarget.parentElement.childNodes[1].innerText;
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;

    /* Check if this task is pending or completed*/
    const taskDiv = e.currentTarget.parentElement.parentElement;
    if (taskDiv.classList.contains('todoTask')) {
        markTaskAsCompleted(projectName, taskName);
    } else if (taskDiv.classList.contains('doneTask')) {
        markTaskAsTodo(projectName, taskName);
    }
    displayTaskPage(projectName);
}

function showInfo(e) {
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    const taskName = e.currentTarget.parentElement.childNodes[1].innerText;

    const project = getProject(projectName);
    const task = project.getTask(taskName);

    if (task == undefined) {
        return;
    }

    (0,_dialogBox__WEBPACK_IMPORTED_MODULE_7__.openDescriptionBox)(task.title, task.description, task.due, task.priority);
}

function updateTask(e, title) {
    e.preventDefault();
    const taskName = document.querySelector('#taskName');
    const taskDescription = document.querySelector('#taskDescription');
    const taskDueDate = document.querySelector('#dateEntered');
    const taskPriority = document.querySelector('#priority');
    
    /* Update to storage */
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    updateTaskInProject(projectName, title, taskName.value, taskDescription.value,
                        taskDueDate.value, taskPriority.value);
    displayTaskPage(projectName);
    (0,_dialogBox__WEBPACK_IMPORTED_MODULE_7__.closeForm)();
}

function editTask(e) {
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    const taskName = e.srcElement.parentElement.parentElement.previousSibling.innerText;

    const project = getProject(projectName);
    const task = project.getTask(taskName);

    if (task == undefined) {
        return;
    }

    (0,_dialogBox__WEBPACK_IMPORTED_MODULE_7__.openEditTaskForm)(projectName, task.title, task.description, task.due, task.priority);
}

function deleteTask(e) {    
    const taskName = e.srcElement.parentElement.parentElement.previousSibling.innerText;
    
    /* Delete from storage */
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    deleteTaskFromProject(projectName, taskName);

    displayTaskPage(projectName);
}

function displayTODO(todoList, todo) {
    const todoDiv = document.createElement('div');

    const todoDivMain = document.createElement('div');
    const radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.addEventListener('change', changeStatus);
    todoDivMain.appendChild(radioBtn);
    const todoTitle = document.createElement('span');
    todoTitle.innerText = todo.title;
    todoDivMain.appendChild(todoTitle);
    const details = document.createElement('button');
    const infoIconImg = new Image();
    infoIconImg.src = _assets_infoIcon_jpg__WEBPACK_IMPORTED_MODULE_2__;
    infoIconImg.alt = "Image of Info Icon";
    infoIconImg.classList.add('infoIconImg');
    details.addEventListener('click', showInfo);
    details.appendChild(infoIconImg);
    todoDivMain.appendChild(details);
    todoDivMain.classList.add('todoDivMain');
    todoDiv.appendChild(todoDivMain);

    const todoDivSettings = document.createElement('div');
    const remainingTime = document.createElement('span');
    todoDivSettings.appendChild(remainingTime);
    const editBtn = document.createElement('button');
    const editTaskImage = new Image();
    editTaskImage.src = _assets_editBtn_jpg__WEBPACK_IMPORTED_MODULE_3__;
    editTaskImage.alt = "Edit for Task";
    editTaskImage.classList.add('editTaskImage');
    editBtn.appendChild(editTaskImage);
    editBtn.addEventListener('click', editTask);

    todoDivSettings.appendChild(editBtn);
    const deleteBtn = document.createElement('button');
    const deleteTaskImage = new Image();
    deleteTaskImage.src = _assets_deleteBtn_jpg__WEBPACK_IMPORTED_MODULE_4__;
    deleteTaskImage.alt = "Deelet the Task";
    deleteTaskImage.classList.add('deleteTaskImage');
    deleteBtn.appendChild(deleteTaskImage);
    deleteBtn.addEventListener('click', deleteTask);

    todoDivSettings.appendChild(deleteBtn);
    todoDivSettings.classList.add('todoDivSettings');

    todoDiv.appendChild(todoDivSettings);
    todoDiv.classList.add('todoTask');
    switch(todo.priority) {
        case 'high':
            todoDiv.classList.add('highTodoTask');
            break;
        case 'medium':
            todoDiv.classList.add('mediumTodoTask');
            break;
        default:
            todoDiv.classList.add('lowTodoTask');
    }
    todoList.appendChild(todoDiv);
}

function displayCompleted(doneList, completedTask) {
    const completedDiv = document.createElement('div');
    
    const completedDivMain = document.createElement('div');
    const radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.addEventListener('change', changeStatus);
    completedDivMain.appendChild(radioBtn);
    const completedTitle = document.createElement('span');
    completedTitle.innerText = completedTask.title;
    completedDivMain.appendChild(completedTitle);
    completedDivMain.classList.add('todoDivMain');

    completedDiv.appendChild(completedDivMain);
    completedDiv.classList.add('doneTask');
    doneList.appendChild(completedDiv);
}

function displayTaskPage(projectName) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            const todoList = document.querySelector('.todoList');
            const doneList = document.querySelector('.doneList');

            // clear prev elements
            todoList.innerHTML = '';

            // todo list
            if (project.todos.length == 0) {
                // display no work picture
                const noWorkDiv = document.createElement('div');
                noWorkDiv.classList.add('noWorkDiv');
                const noWorkImage = new Image();
                noWorkImage.src = _assets_completedTask_jpg__WEBPACK_IMPORTED_MODULE_6__;
                noWorkImage.classList.add('noWorkImage');
                noWorkDiv.appendChild(noWorkImage);
                const noWorkText = document.createElement('p');
                noWorkText.innerText = "No work for today. Enjoy your day.";
                noWorkDiv.appendChild(noWorkText);
                todoList.appendChild(noWorkDiv);
            } else {
                // clear prev elements, in case of no work image is here
                todoList.innerHTML = '';

                project.todos.forEach(todo => {
                    displayTODO(todoList, todo);
                });
            }
            // completed list
            doneList.innerHTML = '';
            project.completed.forEach(completedTask => {
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

module.exports = __webpack_require__.p + "f71e058a75181a0a6b8c.jpg";

/***/ }),

/***/ "./src/assets/deleteBtn.jpg":
/*!**********************************!*\
  !*** ./src/assets/deleteBtn.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "445d4b5b6767f417c736.jpg";

/***/ }),

/***/ "./src/assets/editBtn.jpg":
/*!********************************!*\
  !*** ./src/assets/editBtn.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "990ae0950548dfb58775.jpg";

/***/ }),

/***/ "./src/assets/infoIcon.jpg":
/*!*********************************!*\
  !*** ./src/assets/infoIcon.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a37fae7ca4c7ac6b4355.jpg";

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
/* harmony import */ var _modules_taskPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskPage */ "./src/modules/taskPage.js");



(0,_modules_navBar__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_taskPage__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdmtCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNNO0FBQ2hEO0FBQ0EsMkRBQVU7QUFDViwrREFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9kaWFsb2dCb3guY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy90YXNrUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2RpYWxvZ0JveC5jc3M/ZTdhYyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbmF2QmFyLmNzcz81NmUyIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy90YXNrUGFnZS5jc3M/YmQ5NyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlhbG9nQm94LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvbmF2QmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdGFza1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ29udGFpbmVyT3BlbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXJDbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMCU7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAzMHZtYXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0Zvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogMzB2bWF4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtT3BlbiB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9waW4gMXM7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2xvc2Uge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BvdXQgMXM7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbkRldGFpbHMge1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BvdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbm1haW4gPiBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcbmlucHV0LCBzZWxlY3R7XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RpYWxvZ0JveC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE1BQU07SUFDTixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm1Db250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXJPcGVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lckNsb3NlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3RGb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDMwdm1heDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Rm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAzMHZtYXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1PcGVuIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BpbiAxcztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DbG9zZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBhbmltYXRpb246IHBvcG91dCAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uRGV0YWlscyB7XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiA+IGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuaW5wdXQsIHNlbGVjdHtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb25EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0xOiByZ2IoMTk2LCAxMTIsIDE5Nik7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMjogI0MyOTFEOTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0zOiByZ2IoMTcwLCA4MywgMTcwKTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS00OiBwdXJwbGU7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNTogI0U4Q0ZGMztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ibHVycmVkQ29udGVudCB7XFxyXFxuICAgIGZpbHRlcjpibHVyKDFweCk7XFxyXFxufVxcclxcblxcclxcbi5saWdodE1vZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTIpO1xcclxcbiAgICB3aWR0aDogNDB2bWluO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMnZtaW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2Rm9sZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZUZvbGRlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFySWNvbiB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IHNwYW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlUHJvamVjdCB7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDJlbTtcXHJcXG4gICAgd2lkdGg6IDMwdm1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0xOiByZ2IoMTk2LCAxMTIsIDE5Nik7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMjogI0MyOTFEOTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0zOiByZ2IoMTcwLCA4MywgMTcwKTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS00OiBwdXJwbGU7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNTogI0U4Q0ZGMztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ibHVycmVkQ29udGVudCB7XFxyXFxuICAgIGZpbHRlcjpibHVyKDFweCk7XFxyXFxufVxcclxcblxcclxcbi5saWdodE1vZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTIpO1xcclxcbiAgICB3aWR0aDogNDB2bWluO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMnZtaW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2Rm9sZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZUZvbGRlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFySWNvbiB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IHNwYW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlUHJvamVjdCB7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDJlbTtcXHJcXG4gICAgd2lkdGg6IDMwdm1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpcmVjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGNvbG9yOiBwdXJwbGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrUGFnZSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwYWRkaW5nOiAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tQYWdlID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXIgPiBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2sge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2s6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0LCAuZG9uZUxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3QgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0RpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Xb3JrSW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UYXNrLCAuZG9uZVRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZCNUU1O1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxvd1RvZG9UYXNrIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtVG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaFRvZG9UYXNrIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UYXNrOmhvdmVyLCAuZG9uZVRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lVGFzayB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdlNldHRpbmdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiA+IGJ1dHRvbiwgLnRvZG9EaXZTZXR0aW5ncyA+IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uOmhvdmVyLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb0ljb25JbWcsIC5lZGl0VGFza0ltYWdlLCAuZGVsZXRlVGFza0ltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGFza1BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGlyZWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tQYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2UgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlciA+IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzayB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzazpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50ID4gaDMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3QsIC5kb25lTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Xb3JrRGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtJbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2ssIC5kb25lVGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENkI1RTU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG93VG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Ub2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5oaWdoVG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2s6aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmVUYXNrIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2U2V0dGluZ3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4gPiBidXR0b246aG92ZXIsIC50b2RvRGl2U2V0dGluZ3MgPiBidXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5pbmZvSWNvbkltZywgLmVkaXRUYXNrSW1hZ2UsIC5kZWxldGVUYXNrSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2dCb3guY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2dCb3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza1BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrUGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZXMvZGlhbG9nQm94LmNzcyc7XHJcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3NlSWNvbi5zdmcnO1xyXG5pbXBvcnQge2FkZFByb2plY3QsIGFkZFRhc2ssIHVwZGF0ZVRhc2t9IGZyb20gJy4vdGFza1BhZ2UnO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTmV3UHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXJPcGVuJyk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEZvcm0nKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1PcGVuJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dEhlYWRlci5pbm5lclRleHQgPSAnTmV3IHByb2plY3QnO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNsb3NlSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xyXG4gICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcbiAgICBjbG9zZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsb3NlRm9ybShlLCB0cnVlLCBmYWxzZSkpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJGb3JtXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3ROYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInByb2plY3ROYW1lXCIgbmFtZT1cInByb2plY3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9qZWN0IE5hbWVcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZEJ0blwiPkFkZCBQcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPmBcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkUHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tGb3JtKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyT3BlbicpO1xyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld0Zvcm0nKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1PcGVuJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dEhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG4gICAgY2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VJbWFnZSk7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHREdWUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJGb3JtXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tOYW1lXCI+VGl0bGUgPHN1cD4qPC9zdXA+PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBUYXNrIE5hbWVcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGFza0Rlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gKE9wdGlvbmFsKTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrRGVzY3JpcHRpb25cIiBuYW1lPVwidGFza0Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlRW50ZXJlZFwiPkR1ZSBEYXRlIChPcHRpb25hbCkgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVFbnRlcmVkXCIgbmFtZT1cImRhdGVFbnRlcmVkXCIgdmFsdWU9XCIke2RlZmF1bHREdWV9XCIvPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5IChPcHRpb25hbCkgPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkQnRuXCI+QWRkIFRhc2s8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTmV3VGFza0Zvcm0oZSkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xyXG4gICAgY3JlYXRlTmV3VGFza0Zvcm0ocHJvamVjdE5hbWUpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Gb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRhc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRGVzY3JpcHRpb25Cb3godGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyT3BlbicpO1xyXG4gICAgY29uc3QgZGV0YWlsc0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbHNGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld0Zvcm0nKTtcclxuICAgIGRldGFpbHNGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1PcGVuJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0SGVhZGVyLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcbiAgICBjbG9zZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlSW1hZ2UnKTtcclxuICAgIGNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBkZXRhaWxzRm9ybS5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybU9wZW4nLCAnZm9ybUNsb3NlJyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybUNvbnRhaW5lck9wZW4nLCAnZm9ybUNvbnRhaW5lckNsb3NlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxldGVGb3JtLCAxMDAwKTtcclxuICAgIH0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG4gICAgZGV0YWlsc0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZURpc3BsYXkuaW5uZXJUZXh0ID0gJ1RpdGxlJztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcclxuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZVZhbHVlLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZCh0aXRsZVZhbHVlKTtcclxuICAgIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWsxKTtcclxuXHJcbiAgICBjb25zdCBkZXNjRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBkZXNjRGlzcGxheS5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjRGlzcGxheSk7XHJcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjVmFsdWUuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NWYWx1ZSk7XHJcbiAgICBjb25zdCBsaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQobGluZUJyZWFrMik7XHJcblxyXG4gICAgY29uc3QgZHVlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBkdWVEaXNwbGF5LmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGR1ZURpc3BsYXkpO1xyXG4gICAgY29uc3QgZHVlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVWYWx1ZS5pbm5lclRleHQgPSBkdWU7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGR1ZVZhbHVlKTtcclxuICAgIGNvbnN0IGxpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWszKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcHJpb3JpdHlEaXNwbGF5LmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGlzcGxheSk7XHJcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcHJpb3JpdHlWYWx1ZS5pbm5lclRleHQgPSBwcmlvcml0eTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlWYWx1ZSk7XHJcblxyXG4gICAgZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRpdicpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjRGl2KTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EZXRhaWxzJyk7XHJcbiAgICBkZXRhaWxzRm9ybS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNGb3JtKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FZGl0VGFza0Zvcm0ocHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkge1xyXG4gICAgY3JlYXRlTmV3VGFza0Zvcm0ocHJvamVjdE5hbWUpO1xyXG4gICAgXHJcbiAgICAvKiBBZGQgYWxsIGV4aXN0aW5nIGluZm9ybWF0aW9ucyAqL1xyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWUnKTtcclxuICAgIHRhc2tOYW1lLnZhbHVlID0gdGl0bGU7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGVFbnRlcmVkJyk7XHJcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IGR1ZTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgdGFza1ByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XHJcblxyXG4gICAgLyogUmVuYW1lIEJ1dHRvbiBuYW1lICovXHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ0bicpO1xyXG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIlNhdmUgVGFza1wiO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdXBkYXRlVGFzayhlLCB0aXRsZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm0oZSwgaXNDbG9zZVByb2plY3Q9ZmFsc2UsIGlzQ2xvc2VUYXNrPXRydWUpIHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGlzQ2xvc2VQcm9qZWN0ID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybScpO1xyXG4gICAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtT3BlbicsICdmb3JtQ2xvc2UnKTtcclxuICAgIH0gZWxzZSBpZiAoaXNDbG9zZVRhc2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0Zvcm0nKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybU9wZW4nLCAnZm9ybUNsb3NlJyk7XHJcbiAgICB9XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtQ29udGFpbmVyT3BlbicsICdmb3JtQ29udGFpbmVyQ2xvc2UnKTtcclxuICAgIHNldFRpbWVvdXQoZGVsZXRlRm9ybSwgMTAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7b3Blbk5ld1Byb2plY3RGb3JtLCBvcGVuTmV3VGFza0Zvcm0sXHJcbiAgICAgICAgb3BlbkRlc2NyaXB0aW9uQm94LCBvcGVuRWRpdFRhc2tGb3JtLFxyXG4gICAgICAgIGNsb3NlRm9ybX07XHJcblxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9uYXZCYXIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZGlhbG9nQm94LmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTmF2QmFyKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID1cclxuICAgIGA8ZGl2IGNsYXNzPVwibmF2QmFyQ29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvZmZpY2lhbEhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDE+VG9kb0xpc3Q8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPHA+TXkgUHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtaXRlbXNcIj48L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXdQcm9qZWN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0XCI+QWRkIE5ldyBQcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxvZ29JbWFnZS5hbHQgPSBcInBpY3R1cmUgb2YgbG9nb1wiO1xyXG4gICAgbG9nb0ltYWdlLnNyYyA9IGxvZ287XHJcblxyXG4gICAgY29uc3Qgb2ZmaWNpYWxIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmaWNpYWxIZWFkZXInKTtcclxuICAgIG9mZmljaWFsSGVhZGVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XHJcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy90YXNrUGFnZS5jc3MnO1xyXG5pbXBvcnQgYWRkSWNvbiBmcm9tICcuLi9hc3NldHMvYWRkLnBuZyc7XHJcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuLi9hc3NldHMvaW5mb0ljb24uanBnJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4uL2Fzc2V0cy9lZGl0QnRuLmpwZyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4uL2Fzc2V0cy9kZWxldGVCdG4uanBnJztcclxuaW1wb3J0IHJlbW92ZUljb24gZnJvbSAnLi4vYXNzZXRzL3RyYXNoLWNhbi5wbmcnO1xyXG5pbXBvcnQgY29tcGxldGVkVGFza1BpYyBmcm9tICcuLi9hc3NldHMvY29tcGxldGVkVGFzay5qcGcnO1xyXG5pbXBvcnQgeyBvcGVuTmV3UHJvamVjdEZvcm0sIG9wZW5OZXdUYXNrRm9ybSxcclxuICAgICAgICAgb3BlbkRlc2NyaXB0aW9uQm94LCBvcGVuRWRpdFRhc2tGb3JtLFxyXG4gICAgICAgICBjbG9zZUZvcm0gfSBmcm9tICcuL2RpYWxvZ0JveCc7XHJcblxyXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbmNvbnN0IHNhbXBsZVByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgIHRvZG9zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnV29yayBvbiBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBZGQgYSAnQWRkVGFzaycgYnV0dG9uIG9uIE9kaW4ncyBUT0RPIExpc3QgUHJvamVjdGAsXHJcbiAgICAgICAgICAgICAgICBkdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RhcnQgc3R1ZHlpbmcgT09QJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgU3RhcnQgcmVhZGluZyBPT1AgQ2hhcHRlciBmcm9tIE9kaW4gUHJvamVjdGAsXHJcbiAgICAgICAgICAgICAgICBkdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ21lZGl1bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSZWFkIG90aGVycyB3ZWJzaXRlcycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEZpbmQgYW5kIHJlYWQgMiBvZiBvdGhlcnMgd2Vic2l0ZXMgZnJvbSBPZGluJ3MgZGlzY29yZGAsXHJcbiAgICAgICAgICAgICAgICBkdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ2xvdydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tcGxldGVkOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBgQWRkIGEgJ0FkZFByb2plY3QnIGJ1dHRvbiBvbiBUb0RvIExpc3RgLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBZGQgYSAnQWRkUHJvamVjdCcgYnV0dG9uIG9uIE9kaW4ncyBUT0RPIExpc3QgUHJvamVjdGAsXHJcbiAgICAgICAgICAgICAgICBkdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdXb3JrJyxcclxuICAgICAgICB0b2RvczogW10sXHJcbiAgICAgICAgY29tcGxldGVkOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VuZCBlbWFpbCB0byBTb25pYScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFdyaXRlIFNvbmlhIGFib3V0IHllc3RlcmRheSdzIHJlZ3Jlc3Npb24gdGVzdCByZXN1bHRzYCxcclxuICAgICAgICAgICAgICAgIGR1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MgPSBbXSwgY29tcGxldGVkPSBbXSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRhc2sodG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWUsIHRvZG8ucHJpb3JpdHkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gW107XHJcbiAgICAgICAgaWYgKGNvbXBsZXRlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZC5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQucHVzaChuZXcgVGFzayh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZSwgdG9kby5wcmlvcml0eSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xyXG4gICAgICAgIGxldCByZXRUYXNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldFRhc2sgPSB0YXNrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXRUYXNrICE9IHVuZGVmaW5lZCkgcmV0dXJuIHJldFRhc2s7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09IHRhc2tOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXRUYXNrID0gdGFzaztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRUYXNrO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWUgPSBudWxsLCBwcmlvcml0eT0nbG93Jykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBuYW1lO1xyXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PSAnJykge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9ICdObyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgaWYgKGR1ZSA9PSAnJyB8fCBkdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmR1ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHVlID0gZHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbn1cclxuY3JlYXRlVGFza1BhZ2VcclxuZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgbGV0IHJldFByb2plY3QgPSB1bmRlZmluZWQ7XHJcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0UHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRQcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXRQcm9qZWN0O1xyXG59XHJcblxyXG5sZXQgY3VycmVudEFjdGl2ZUZvbGRlciA9IHVuZGVmaW5lZDtcclxuXHJcbmZ1bmN0aW9uIHNldEZpcnN0QXNDdXJyZW50Rm9sZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpO1xyXG4gICAgaWYgKGxpc3RJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpWzBdO1xyXG4gICAgICAgIHNldEN1cnJlbnRBY3RpdmVGb2xkZXIoZGVmYXVsdFRhc2tQYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudEFjdGl2ZUZvbGRlcihwcm9qZWN0TGlzdEl0ZW0pIHtcclxuICAgIGlmIChjdXJyZW50QWN0aXZlRm9sZGVyID09IHByb2plY3RMaXN0SXRlbSkgcmV0dXJuO1xyXG4gICAgaWYgKGN1cnJlbnRBY3RpdmVGb2xkZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3VycmVudEFjdGl2ZUZvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVGb2xkZXInKTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRBY3RpdmVGb2xkZXIgPSBwcm9qZWN0TGlzdEl0ZW07XHJcbiAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlRm9sZGVyJyk7XHJcbiAgICBjcmVhdGVUYXNrUGFnZShjdXJyZW50QWN0aXZlRm9sZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlRm9sZGVyKGUpIHsgXHJcbiAgICBzZXRDdXJyZW50QWN0aXZlRm9sZGVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RMaXN0KG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21Qcm9qZWN0TGlzdChuZXdQcm9qZWN0KSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZShwcm9qZWN0TGlzdFtpXSk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgLyogRGlzcGxheSBCbGFuayBQYWdlIHRvIGluZGljYXRlIHN0ZXBzIHRvIHVzZSBUT0RPIExpc3QgKi9cclxuICAgIGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgIC8qIERlbGV0ZSBwcmV2aW91cyBleGlzdGVkIFRhc2sgUGFnZSBEaXNwbGF5ICovXHJcbiAgICAgICAgY29uc3QgcHJldlRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQYWdlJyk7XHJcbiAgICAgICAgaWYgKHByZXZUYXNrUGFnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldlRhc2tQYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSAnUGxlYXNlIEFkZCBOZXcgUHJvamVjdCBGaXJzdCc7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbnMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICBkaXJlY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2RpcmVjdGlvbnMnKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpcmVjdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChuZXdMaXN0SXRlbSkge1xyXG4gICAgbmV3TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBY3RpdmVGb2xkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVFdmVudChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQWN0aXZlRm9sZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtcycpO1xyXG4gICAgbGV0IHJlbW92aW5nSXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAoY3VycmVudEFjdGl2ZUZvbGRlciA9PSByZW1vdmluZ0l0ZW0pIHtcclxuICAgICAgICBzZXRGaXJzdEFzQ3VycmVudEZvbGRlcigpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlRXZlbnQocmVtb3ZpbmdJdGVtKTtcclxuICAgIHByb2plY3RJdGVtcy5yZW1vdmVDaGlsZChyZW1vdmluZ0l0ZW0pO1xyXG4gICAgZGVsZXRlRnJvbVByb2plY3RMaXN0KHJlbW92aW5nSXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XHJcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgbmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcmVtb3ZlSW1hZ2Uuc3JjID0gcmVtb3ZlSWNvbjtcclxuICAgIHJlbW92ZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3QnKTtcclxuICAgIHJlbW92ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUHJvamVjdCk7XHJcblxyXG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSW1hZ2UpOyAgXHJcbiAgICBhZGRFdmVudChuZXdMaXN0SXRlbSk7XHJcblxyXG4gICAgLyogU2V0IE5ldyBQcm9qZWN0IGFzIEN1cnJlbnQgUHJvamVjdCAqL1xyXG4gICAgc2V0Q3VycmVudEFjdGl2ZUZvbGRlcihuZXdMaXN0SXRlbSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld0xpc3RJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtcycpO1xyXG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkaXNwbGF5UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBwcm9qZWN0SXRlbXMuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XHJcbiAgICAvKiBBZGQgdG8gc3RvcmFnZSAqL1xyXG4gICAgYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0TmFtZS52YWx1ZSk7XHJcbiAgICAvKiBBZGQgdG8gRE9NICovXHJcbiAgICBhZGRQcm9qZWN0VG9MaXN0KHByb2plY3ROYW1lLnZhbHVlKTtcclxuICAgIGNsb3NlRm9ybShudWxsLCB0cnVlLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHNhbXBsZVByb2plY3RzLmZvckVhY2goc2FtcGxlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHNhbXBsZS5uYW1lLCBzYW1wbGUudG9kb3MsIHNhbXBsZS5jb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0Lm5hbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XHJcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld1Byb2plY3RGb3JtKTtcclxuXHJcbiAgICBjb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpO1xyXG4gICAgXHJcbiAgICBmb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcclxuICAgICAgICBhZGRFdmVudChmb2xkZXIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKioqKiogVGFzayBGdW5jdGlvbnMgKioqKioqKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFza1BhZ2UoY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAvKiBEZWxldGUgcHJldmlvdXMgZXhpc3RlZCBQYWdlIERpc3BsYXkgKi9cclxuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9ucycpO1xyXG4gICAgaWYgKGRpcmVjdGlvbnMgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGlyZWN0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmV2VGFza1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BhZ2UnKTtcclxuICAgIGlmIChwcmV2VGFza1BhZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldlRhc2tQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1BhZ2UuY2xhc3NMaXN0LmFkZCgndGFza1BhZ2UnKTtcclxuICAgIHRhc2tQYWdlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrSGVhZGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbj5BZGQgTmV3IFRhc2s8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9MaXN0XCI+PC9kaXY+XHJcbiAgICAgICAgPGgzPkNvbXBsZXRlZCBUYXNrczwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRvbmVMaXN0XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrUGFnZSk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tIZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGFkZFRhc2suc3JjID0gYWRkSWNvbjtcclxuICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xyXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5OZXdUYXNrRm9ybSk7XHJcbiAgICBhZGRCdG4ucHJlcGVuZChhZGRUYXNrKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRBY3RpdmVGb2xkZXIucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVyVGV4dDtcclxuICAgIGNvbnN0IGN1cnJldEZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1cnJldEZvbGRlci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuICAgIHRhc2tQYWdlLnByZXBlbmQoY3VycmV0Rm9sZGVyKTtcclxuICAgIGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtUYXNrQXNUb2RvKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QuY29tcGxldGVkW2ldLnRpdGxlID09IHRhc2tOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGFzayhwcm9qZWN0LmNvbXBsZXRlZFtpXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5jb21wbGV0ZWRbaV0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVkW2ldLmR1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5jb21wbGV0ZWRbaV0ucHJpb3JpdHkpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUocHJvamVjdC5jb21wbGV0ZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVkLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrVGFza0FzQ29tcGxldGVkKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50b2Rvc1tpXS50aXRsZSA9PSB0YXNrTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVkLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUYXNrKHByb2plY3QudG9kb3NbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3NbaV0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3NbaV0uZHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zW2ldLnByaW9yaXR5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlKHByb2plY3QudG9kb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgaXNUb2RvSXRlbT10cnVlKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNUb2RvSXRlbSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtpXS50b2Rvcy5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RbaV0uY29tcGxldGVkLnB1c2gobmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrSW5Qcm9qZWN0KHByb2plY3ROYW1lLCBvbGRUaXRsZSwgdGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCBpc1RvZG9JdGVtPXRydWUpIHtcclxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QudG9kb3NbaV0udGl0bGUgPT0gb2xkVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zW2ldLnRpdGxlID0gdGFza05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvc1tpXS5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zW2ldLmR1ZSA9IHRhc2tEdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvc1tpXS5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tUaXRsZSkge1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50b2Rvc1tpXS50aXRsZSA9PSB0YXNrVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUocHJvamVjdC50b2Rvc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFzayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpO1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZUVudGVyZWQnKTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgXHJcbiAgICAvKiBBZGQgdG8gc3RvcmFnZSAqL1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BhZ2UnKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrTmFtZS52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlKTtcclxuXHJcbiAgICB0YXNrTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVE9ETyh0b2RvTGlzdCwgdG9kb0Rpdikge1xyXG4gICAgdG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XHJcbiAgICAvKiBEZWxldGUgRnJvbSBzdG9yYWdlICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVN0YXR1cyhlKSB7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BhZ2UnKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblxyXG4gICAgLyogQ2hlY2sgaWYgdGhpcyB0YXNrIGlzIHBlbmRpbmcgb3IgY29tcGxldGVkKi9cclxuICAgIGNvbnN0IHRhc2tEaXYgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKHRhc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvVGFzaycpKSB7XHJcbiAgICAgICAgbWFya1Rhc2tBc0NvbXBsZXRlZChwcm9qZWN0TmFtZSwgdGFza05hbWUpO1xyXG4gICAgfSBlbHNlIGlmICh0YXNrRGl2LmNsYXNzTGlzdC5jb250YWlucygnZG9uZVRhc2snKSkge1xyXG4gICAgICAgIG1hcmtUYXNrQXNUb2RvKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5mbyhlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUGFnZScpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrTmFtZSk7XHJcblxyXG4gICAgaWYgKHRhc2sgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EZXNjcmlwdGlvbkJveCh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZSwgdGFzay5wcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2soZSwgdGl0bGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlRW50ZXJlZCcpO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICBcclxuICAgIC8qIFVwZGF0ZSB0byBzdG9yYWdlICovXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUGFnZScpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuICAgIHVwZGF0ZVRhc2tJblByb2plY3QocHJvamVjdE5hbWUsIHRpdGxlLCB0YXNrTmFtZS52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlKTtcclxuICAgIGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcbiAgICBjbG9zZUZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2soZSkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BhZ2UnKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dDtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrKHRhc2tOYW1lKTtcclxuXHJcbiAgICBpZiAodGFzayA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkVkaXRUYXNrRm9ybShwcm9qZWN0TmFtZSwgdGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWUsIHRhc2sucHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHsgICAgXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dDtcclxuICAgIFxyXG4gICAgLyogRGVsZXRlIGZyb20gc3RvcmFnZSAqL1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BhZ2UnKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcbiAgICBkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHJcbiAgICBkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VE9ETyh0b2RvTGlzdCwgdG9kbykge1xyXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCByYWRpb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHJhZGlvQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgIHJhZGlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0YXR1cyk7XHJcbiAgICB0b2RvRGl2TWFpbi5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgIHRvZG9EaXZNYWluLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBpbmZvSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW5mb0ljb25JbWcuc3JjID0gaW5mb0ljb247XHJcbiAgICBpbmZvSWNvbkltZy5hbHQgPSBcIkltYWdlIG9mIEluZm8gSWNvblwiO1xyXG4gICAgaW5mb0ljb25JbWcuY2xhc3NMaXN0LmFkZCgnaW5mb0ljb25JbWcnKTtcclxuICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SW5mbyk7XHJcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGluZm9JY29uSW1nKTtcclxuICAgIHRvZG9EaXZNYWluLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gICAgdG9kb0Rpdk1haW4uY2xhc3NMaXN0LmFkZCgndG9kb0Rpdk1haW4nKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdk1haW4pO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EaXZTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZG9EaXZTZXR0aW5ncy5hcHBlbmRDaGlsZChyZW1haW5pbmdUaW1lKTtcclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGVkaXRUYXNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGVkaXRUYXNrSW1hZ2Uuc3JjID0gZWRpdEljb247XHJcbiAgICBlZGl0VGFza0ltYWdlLmFsdCA9IFwiRWRpdCBmb3IgVGFza1wiO1xyXG4gICAgZWRpdFRhc2tJbWFnZS5jbGFzc0xpc3QuYWRkKCdlZGl0VGFza0ltYWdlJyk7XHJcbiAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRUYXNrSW1hZ2UpO1xyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcclxuXHJcbiAgICB0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRlbGV0ZVRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZGVsZXRlVGFza0ltYWdlLnNyYyA9IGRlbGV0ZUljb247XHJcbiAgICBkZWxldGVUYXNrSW1hZ2UuYWx0ID0gXCJEZWVsZXQgdGhlIFRhc2tcIjtcclxuICAgIGRlbGV0ZVRhc2tJbWFnZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrSW1hZ2UnKTtcclxuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVUYXNrSW1hZ2UpO1xyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7XHJcblxyXG4gICAgdG9kb0RpdlNldHRpbmdzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICB0b2RvRGl2U2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgndG9kb0RpdlNldHRpbmdzJyk7XHJcblxyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2U2V0dGluZ3MpO1xyXG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGFzaycpO1xyXG4gICAgc3dpdGNoKHRvZG8ucHJpb3JpdHkpIHtcclxuICAgICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWdoVG9kb1Rhc2snKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Ub2RvVGFzaycpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2xvd1RvZG9UYXNrJyk7XHJcbiAgICB9XHJcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUNvbXBsZXRlZChkb25lTGlzdCwgY29tcGxldGVkVGFzaykge1xyXG4gICAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbXBsZXRlZERpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHJhZGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgcmFkaW9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlU3RhdHVzKTtcclxuICAgIGNvbXBsZXRlZERpdk1haW4uYXBwZW5kQ2hpbGQocmFkaW9CdG4pO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb21wbGV0ZWRUaXRsZS5pbm5lclRleHQgPSBjb21wbGV0ZWRUYXNrLnRpdGxlO1xyXG4gICAgY29tcGxldGVkRGl2TWFpbi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUaXRsZSk7XHJcbiAgICBjb21wbGV0ZWREaXZNYWluLmNsYXNzTGlzdC5hZGQoJ3RvZG9EaXZNYWluJyk7XHJcblxyXG4gICAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZERpdk1haW4pO1xyXG4gICAgY29tcGxldGVkRGl2LmNsYXNzTGlzdC5hZGQoJ2RvbmVUYXNrJyk7XHJcbiAgICBkb25lTGlzdC5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpIHtcclxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkb25lTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25lTGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2xlYXIgcHJldiBlbGVtZW50c1xyXG4gICAgICAgICAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZG8gbGlzdFxyXG4gICAgICAgICAgICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBubyB3b3JrIHBpY3R1cmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vV29ya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgbm9Xb3JrRGl2LmNsYXNzTGlzdC5hZGQoJ25vV29ya0RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9Xb3JrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIG5vV29ya0ltYWdlLnNyYyA9IGNvbXBsZXRlZFRhc2tQaWM7XHJcbiAgICAgICAgICAgICAgICBub1dvcmtJbWFnZS5jbGFzc0xpc3QuYWRkKCdub1dvcmtJbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgbm9Xb3JrRGl2LmFwcGVuZENoaWxkKG5vV29ya0ltYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vV29ya1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICBub1dvcmtUZXh0LmlubmVyVGV4dCA9IFwiTm8gd29yayBmb3IgdG9kYXkuIEVuam95IHlvdXIgZGF5LlwiO1xyXG4gICAgICAgICAgICAgICAgbm9Xb3JrRGl2LmFwcGVuZENoaWxkKG5vV29ya1RleHQpO1xyXG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobm9Xb3JrRGl2KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHByZXYgZWxlbWVudHMsIGluIGNhc2Ugb2Ygbm8gd29yayBpbWFnZSBpcyBoZXJlXHJcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRPRE8odG9kb0xpc3QsIHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29tcGxldGVkIGxpc3RcclxuICAgICAgICAgICAgZG9uZUxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVkLmZvckVhY2goY29tcGxldGVkVGFzayA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29tcGxldGVkKGRvbmVMaXN0LCBjb21wbGV0ZWRUYXNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9hZFByb2plY3RzLCBhZGRQcm9qZWN0LCBhZGRUYXNrLCB1cGRhdGVUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWROYXZCYXIgZnJvbSAnLi9tb2R1bGVzL25hdkJhcic7XHJcbmltcG9ydCB7bG9hZFByb2plY3RzfSBmcm9tICcuL21vZHVsZXMvdGFza1BhZ2UnO1xyXG5cclxubG9hZE5hdkJhcigpO1xyXG5sb2FkUHJvamVjdHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9