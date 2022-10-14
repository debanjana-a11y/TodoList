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
___CSS_LOADER_EXPORT___.push([module.id, ".formContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.formContainerOpen {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.formContainerClose {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 0%;\r\n}\r\n\r\n.newProjectForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 30vmax;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.newForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 70vmin;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.formOpen {\r\n    z-index: 1;\r\n    top: 0;\r\n    transform: translateY(5vmin);\r\n    animation: popin 1s;\r\n    opacity: 1;\r\n}\r\n\r\n.formClose {\r\n    top: 0;\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    animation: popout 1s;\r\n}\r\n\r\n.descriptionDetails {\r\n    margin: 1em;\r\n}\r\n\r\n@keyframes popin {\r\n    from {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform:  translateY(5vmin);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes popout {\r\n    from {\r\n        transform:  translateY(5vmin);\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--light-shade-3);\r\n    align-items: center;\r\n    padding: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n.closeImage {\r\n    height: 5vmin;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\nmain {\r\n    flex-grow: 1;\r\n}\r\n\r\nmain > form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    row-gap: 1em;\r\n}\r\ninput:not(.doneTaskRadio), select{\r\n    height: 2em;\r\n    font-size: 1em;\r\n    border: none;\r\n    padding: 5px;\r\n}\r\n\r\n.addBtn {\r\n    padding: 1em;\r\n    font-size: large;\r\n    background-color: var(--light-shade-3);\r\n    border: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.addBtn:hover {\r\n    background-color: var(--light-shade-1);\r\n}\r\n\r\n.descriptionDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .newProjectForm {\r\n        width: 70vmin;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/dialogBox.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,MAAM;IACN,4BAA4B;IAC5B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,MAAM;IACN,UAAU;IACV,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI;QACI,wBAAwB;QACxB,UAAU;IACd;IACA;QACI,6BAA6B;QAC7B,UAAU;IACd;AACJ;;AAEA;IACI;QACI,6BAA6B;QAC7B,UAAU;IACd;IACA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;IACtC,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":[".formContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.formContainerOpen {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.formContainerClose {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 0%;\r\n}\r\n\r\n.newProjectForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 30vmax;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.newForm {\r\n    margin: 0;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    height: auto;\r\n    width: 70vmin;\r\n    background-color: var(--light-shade-5);\r\n    border: 1px solid var(--light-shade-4);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.formOpen {\r\n    z-index: 1;\r\n    top: 0;\r\n    transform: translateY(5vmin);\r\n    animation: popin 1s;\r\n    opacity: 1;\r\n}\r\n\r\n.formClose {\r\n    top: 0;\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    animation: popout 1s;\r\n}\r\n\r\n.descriptionDetails {\r\n    margin: 1em;\r\n}\r\n\r\n@keyframes popin {\r\n    from {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform:  translateY(5vmin);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes popout {\r\n    from {\r\n        transform:  translateY(5vmin);\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--light-shade-3);\r\n    align-items: center;\r\n    padding: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n.closeImage {\r\n    height: 5vmin;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\nmain {\r\n    flex-grow: 1;\r\n}\r\n\r\nmain > form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    row-gap: 1em;\r\n}\r\ninput:not(.doneTaskRadio), select{\r\n    height: 2em;\r\n    font-size: 1em;\r\n    border: none;\r\n    padding: 5px;\r\n}\r\n\r\n.addBtn {\r\n    padding: 1em;\r\n    font-size: large;\r\n    background-color: var(--light-shade-3);\r\n    border: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.addBtn:hover {\r\n    background-color: var(--light-shade-1);\r\n}\r\n\r\n.descriptionDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .newProjectForm {\r\n        width: 70vmin;\r\n    }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --light-shade-1: rgb(196, 112, 196);\r\n    --light-shade-2: #C291D9;\r\n    --light-shade-3: rgb(170, 83, 170);\r\n    --light-shade-4: purple;\r\n    --light-shade-5: #E8CFF3;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Literata';\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    min-height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.blurredContent {\r\n    filter:blur(1px);\r\n}\r\n\r\n.lightMode {\r\n    background-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n    background-color: var(--light-shade-2);\r\n    width: 40vmin;\r\n    min-height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n    height: 100%;\r\n    padding: 2vmin;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: 1em;\r\n    padding: 1em;\r\n    background-color: hsla(0, 100%, 100%, 0.5);\r\n    border-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.hamburger-project-list {\r\n    display: none;\r\n}\r\n\r\n.list-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.activeFolder {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n    height: 1em;\r\n}\r\n\r\n.project-list {\r\n    width: 100%;\r\n    height: 60vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.project-list > p {\r\n    font-size: 1.5em;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    background-color: var(--light-shade-3);\r\n    text-align: center;\r\n}\r\n\r\n.project-items {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.project-items-mobile {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    overflow-y: auto;\r\n    color: white;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n    height: 15px;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n    display: block;\r\n}\r\n\r\n.newProject {\r\n    /* position: absolute; */\r\n    bottom: 2em;\r\n    width: 30vmin;\r\n    cursor: pointer;\r\n}\r\n\r\n.addProject {\r\n    font-size: 1em;\r\n    height: 3em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: var(--light-shade-4);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n    .displayProjectListMobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .content {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .navBar {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .navBarContent {\r\n        width: 100%;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-content: space-between;\r\n        column-gap: 60vw;\r\n    }\r\n\r\n    .officialHeader {\r\n        height: 3em;\r\n        font-size: 1em;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        column-gap: 2vmin;\r\n        padding: 1vmin;\r\n    }\r\n\r\n    .officialHeader > img {\r\n        height: 5vmin;\r\n        width: 5vmin;\r\n    }\r\n\r\n    .officialHeader > h1 {\r\n        font-size: 5vmin;\r\n    }\r\n\r\n    .project-list, .newProject {\r\n        display: none;\r\n    }\r\n\r\n    .hamburger-project-list {\r\n        display: block;\r\n    }\r\n\r\n    .hamburgerMenu {\r\n        height: 5vmin;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .displayProjectListMobile {\r\n        position: absolute;\r\n        z-index: 1;\r\n        height: auto;\r\n        width: 100%;\r\n        background-color: var(--light-shade-3);\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n    \r\n    .displayProjectListMobile > header {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-content: space-between;\r\n        background-color: var(--light-shade-5);\r\n        font-size: 4vmin;\r\n    }\r\n\r\n    .newProjectMobile {\r\n        height: 4em;\r\n        width: 100%;\r\n        background-color: var(--light-shade-1);\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .addProjectMobile {\r\n        height: 100%;\r\n        background-color: var(--light-shade-4);\r\n        color: white;\r\n        font-size: 1em;\r\n        padding: 1em;\r\n        border: none;\r\n        border-radius: 10px 25px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .addProjectMobile:hover {\r\n        transform: scaleX(1.1);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/navBar.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --light-shade-1: rgb(196, 112, 196);\r\n    --light-shade-2: #C291D9;\r\n    --light-shade-3: rgb(170, 83, 170);\r\n    --light-shade-4: purple;\r\n    --light-shade-5: #E8CFF3;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Literata';\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    min-height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.blurredContent {\r\n    filter:blur(1px);\r\n}\r\n\r\n.lightMode {\r\n    background-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n    background-color: var(--light-shade-2);\r\n    width: 40vmin;\r\n    min-height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n    height: 100%;\r\n    padding: 2vmin;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: 1em;\r\n    padding: 1em;\r\n    background-color: hsla(0, 100%, 100%, 0.5);\r\n    border-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.hamburger-project-list {\r\n    display: none;\r\n}\r\n\r\n.list-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.activeFolder {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n    height: 1em;\r\n}\r\n\r\n.project-list {\r\n    width: 100%;\r\n    height: 60vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.project-list > p {\r\n    font-size: 1.5em;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    background-color: var(--light-shade-3);\r\n    text-align: center;\r\n}\r\n\r\n.project-items {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.project-items-mobile {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    overflow-y: auto;\r\n    color: white;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n    height: 15px;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n    display: block;\r\n}\r\n\r\n.newProject {\r\n    /* position: absolute; */\r\n    bottom: 2em;\r\n    width: 30vmin;\r\n    cursor: pointer;\r\n}\r\n\r\n.addProject {\r\n    font-size: 1em;\r\n    height: 3em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: var(--light-shade-4);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n    .displayProjectListMobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .content {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .navBar {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .navBarContent {\r\n        width: 100%;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-content: space-between;\r\n        column-gap: 60vw;\r\n    }\r\n\r\n    .officialHeader {\r\n        height: 3em;\r\n        font-size: 1em;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        column-gap: 2vmin;\r\n        padding: 1vmin;\r\n    }\r\n\r\n    .officialHeader > img {\r\n        height: 5vmin;\r\n        width: 5vmin;\r\n    }\r\n\r\n    .officialHeader > h1 {\r\n        font-size: 5vmin;\r\n    }\r\n\r\n    .project-list, .newProject {\r\n        display: none;\r\n    }\r\n\r\n    .hamburger-project-list {\r\n        display: block;\r\n    }\r\n\r\n    .hamburgerMenu {\r\n        height: 5vmin;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .displayProjectListMobile {\r\n        position: absolute;\r\n        z-index: 1;\r\n        height: auto;\r\n        width: 100%;\r\n        background-color: var(--light-shade-3);\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n    \r\n    .displayProjectListMobile > header {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-content: space-between;\r\n        background-color: var(--light-shade-5);\r\n        font-size: 4vmin;\r\n    }\r\n\r\n    .newProjectMobile {\r\n        height: 4em;\r\n        width: 100%;\r\n        background-color: var(--light-shade-1);\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .addProjectMobile {\r\n        height: 100%;\r\n        background-color: var(--light-shade-4);\r\n        color: white;\r\n        font-size: 1em;\r\n        padding: 1em;\r\n        border: none;\r\n        border-radius: 10px 25px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .addProjectMobile:hover {\r\n        transform: scaleX(1.1);\r\n    }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".directions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    background-color: var(--light-shade-5);\r\n    color: purple;\r\n}\r\n\r\n.taskPage {\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    padding: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.taskHeader {\r\n    width: 100%;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n    padding: 0.5em;\r\n    background-color: inherit;\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: none;\r\n    display: flex;\r\n    column-gap: 1em;\r\n    align-items: center;\r\n}\r\n\r\n.addTask {\r\n    height: 1em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.taskContent > h3 {\r\n    margin-top: 3em;\r\n    margin-bottom: 1em;\r\n    height: 2.5em;\r\n    padding: 0.5em;\r\n    align-items: center;\r\n    color: white;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList, .doneList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    row-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n    font-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.noWorkImage {\r\n    width: 40vw;\r\n}\r\n\r\n.todoTask, .doneTask {\r\n    background-color: #D6B5E5;\r\n    padding: 0.5em;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n\r\n.lowTodoTask {\r\n    border-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n    border-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n    border-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover, .doneTask:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain, .completedDivMain {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    column-gap: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    transform: scale(2);\r\n    margin-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"]:checked {\r\n    accent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTaskRadio {\r\n    color: #c470c4;\r\n}\r\n\r\n.completedDivMain > span {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button, .todoDivSettings > button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover, .todoDivSettings > button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.infoIconImg, .editTaskImage, .deleteTaskImage {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .directions {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    .project-item-mobile {\r\n        width: 100%;\r\n        padding: 5px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .project-item-mobile > span {\r\n        width: 100%;\r\n        font-size: 1.2em;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .removeProjectMobile {\r\n        height: 15px;\r\n        display: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n   .project-item-mobile:hover > .removeProjectMobile {\r\n        display: block;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/taskPage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,uBAAuB;IAC3B;;IAEA;QACI,WAAW;QACX,gBAAgB;QAChB,qBAAqB;IACzB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,eAAe;IACnB;;GAED;QACK,cAAc;IAClB;AACJ","sourcesContent":[".directions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    background-color: var(--light-shade-5);\r\n    color: purple;\r\n}\r\n\r\n.taskPage {\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    padding: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.taskHeader {\r\n    width: 100%;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n    padding: 0.5em;\r\n    background-color: inherit;\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: none;\r\n    display: flex;\r\n    column-gap: 1em;\r\n    align-items: center;\r\n}\r\n\r\n.addTask {\r\n    height: 1em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.taskContent > h3 {\r\n    margin-top: 3em;\r\n    margin-bottom: 1em;\r\n    height: 2.5em;\r\n    padding: 0.5em;\r\n    align-items: center;\r\n    color: white;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList, .doneList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    row-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n    font-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.noWorkImage {\r\n    width: 40vw;\r\n}\r\n\r\n.todoTask, .doneTask {\r\n    background-color: #D6B5E5;\r\n    padding: 0.5em;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n\r\n.lowTodoTask {\r\n    border-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n    border-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n    border-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover, .doneTask:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain, .completedDivMain {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    column-gap: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    transform: scale(2);\r\n    margin-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"]:checked {\r\n    accent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTaskRadio {\r\n    color: #c470c4;\r\n}\r\n\r\n.completedDivMain > span {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button, .todoDivSettings > button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover, .todoDivSettings > button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.infoIconImg, .editTaskImage, .deleteTaskImage {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .directions {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    .project-item-mobile {\r\n        width: 100%;\r\n        padding: 5px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .project-item-mobile > span {\r\n        width: 100%;\r\n        font-size: 1.2em;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .removeProjectMobile {\r\n        height: 15px;\r\n        display: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n   .project-item-mobile:hover > .removeProjectMobile {\r\n        display: block;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_hamburgerIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hamburgerIcon.png */ "./src/assets/hamburgerIcon.png");
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/closeIcon.svg */ "./src/assets/closeIcon.svg");
/* harmony import */ var _taskPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskPage.js */ "./src/modules/taskPage.js");







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
    closeImage.addEventListener('click', function() {
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

function loadNavBar() {
    const content = document.querySelector('.content');

    const div = document.createElement('div');
    div.classList.add('navBar');
    div.innerHTML =
    `<div class="navBarContent">
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
    logoImage.alt = "Picture of Offcial logo";
    logoImage.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;

    const officialHeader = document.querySelector('.officialHeader');
    officialHeader.appendChild(logoImage);

    const hamburgerMenu = document.querySelector('.hamburger-project-list');
    const menuImage = new Image();
    menuImage.src = _assets_hamburgerIcon_png__WEBPACK_IMPORTED_MODULE_3__;
    menuImage.alt = "Hamburger Menu picture"
    menuImage.classList.add('hamburgerMenu');
    hamburgerMenu.appendChild(menuImage);
    hamburgerMenu.addEventListener('click', displayProjectsFromMenu);
    (0,_taskPage_js__WEBPACK_IMPORTED_MODULE_5__.loadProjects)();
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
/* harmony import */ var _dialogBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogBox */ "./src/modules/dialogBox.js");









let projectList = [];

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

class Project {
	constructor(name, todos = [], completed = []) {
		this.name = name;
		this.todos = [];
		if (todos.length > 0) {
			todos.forEach((todo) => {
				this.todos.push(
					new Task(todo.title, todo.description, todo.due, todo.priority)
				);
			});
		}
		this.completed = [];
		if (completed.length > 0) {
			completed.forEach((todo) => {
				this.completed.push(
					new Task(todo.title, todo.description, todo.due, todo.priority)
				);
			});
		}
	}

	getTask(taskName) {
		let retTask = undefined;
		this.todos.forEach((task) => {
			if (task.title == taskName) {
				retTask = task;
				return;
			}
		});

		if (retTask != undefined) return retTask;

		this.completed.forEach((task) => {
			if (task.title == taskName) {
				retTask = task;
				return;
			}
		});
		return retTask;
	}
}

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
createTaskPage;
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
	projectList.push(new Project(newProjectName));
}

function deleteFromProjectList(newProject) {
	for (let i = 0; i < projectList.length; i++) {
		if (projectList[i].name == newProject) {
			delete projectList[i];
			projectList.splice(i, 1);
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
			const newProject = new Project(
				sample.name,
				sample.todos,
				sample.completed
			);
			projectList.push(newProject);
		});
	}

	if (isMobile == false) {
		projectList.forEach((project) => {
			addProjectToList(project.name);
		});

		const newProjectBtn = document.querySelector(".addProject");
		newProjectBtn.addEventListener("click", _dialogBox__WEBPACK_IMPORTED_MODULE_7__.openNewProjectForm);
	} else {
		projectList.forEach((project) => {
			addProjectToListMobile(project.name);
		});

		const newProjectBtn = document.querySelector(".addProjectMobile");
		newProjectBtn.addEventListener("click", _dialogBox__WEBPACK_IMPORTED_MODULE_7__.openNewProjectForm);
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
	addTask.addEventListener("click", _dialogBox__WEBPACK_IMPORTED_MODULE_7__.openNewTaskForm);
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
						new Task(
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
}

function markTaskAsCompleted(projectName, taskName) {
	projectList.forEach((project) => {
		if (project.name == projectName) {
			for (let i = 0; i < project.todos.length; i++) {
				if (project.todos[i].title == taskName) {
					project.completed.push(
						new Task(
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
					new Task(taskName, taskDescription, taskDue, taskPriority)
				);
			} else {
				projectList[i].completed.push(
					new Task(taskName, taskDescription, taskDue, taskPriority)
				);
			}
		}
	}
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
	(0,_dialogBox__WEBPACK_IMPORTED_MODULE_7__.closeForm)();
}

function editTask(e) {
	const projectName =
		document.querySelector(".taskPage").firstElementChild.innerText;
	const taskName =
		e.srcElement.parentElement.parentElement.previousSibling.innerText;

	const project = getProject(projectName);
	const task = project.getTask(taskName);

	if (task == undefined) {
		return;
	}

	(0,_dialogBox__WEBPACK_IMPORTED_MODULE_7__.openEditTaskForm)(
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
	const radioBtn = document.createElement("input");
	radioBtn.setAttribute("type", "radio");
	radioBtn.addEventListener("change", changeStatus);
	todoDivMain.appendChild(radioBtn);
	const todoTitle = document.createElement("span");
	todoTitle.innerText = todo.title;
	todoDivMain.appendChild(todoTitle);
	const details = document.createElement("button");
	const infoIconImg = new Image();
	infoIconImg.src = _assets_infoIcon_png__WEBPACK_IMPORTED_MODULE_2__;
	infoIconImg.alt = "Image of Info Icon";
	infoIconImg.classList.add("infoIconImg");
	details.addEventListener("click", showInfo);
	details.appendChild(infoIconImg);
	todoDivMain.appendChild(details);
	todoDivMain.classList.add("todoDivMain");
	todoDiv.appendChild(todoDivMain);

	const todoDivSettings = document.createElement("div");
	const remainingTime = document.createElement("span");
	todoDivSettings.appendChild(remainingTime);
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
	const radioBtn = document.createElement("input");
	radioBtn.setAttribute("type", "radio");
	radioBtn.setAttribute("class", "doneTaskRadio fa-solid fa-circle-check");
	radioBtn.addEventListener("change", changeStatus);
	completedDivMain.appendChild(radioBtn);
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

module.exports = __webpack_require__.p + "f71e058a75181a0a6b8c.jpg";

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


(0,_modules_navBar__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMENBQTBDLDBEQUFrQjtBQUM1RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMENBQTBDLDBEQUFrQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQU87QUFDdEI7QUFDQSxtQ0FBbUMsdURBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOERBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMscURBQVM7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDREQUFnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUN5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ251QnpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBMEM7QUFDMUM7QUFDQSwyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9kaWFsb2dCb3guY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy90YXNrUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2RpYWxvZ0JveC5jc3M/ZTdhYyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbmF2QmFyLmNzcz81NmUyIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy90YXNrUGFnZS5jc3M/YmQ5NyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlhbG9nQm94LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvbmF2QmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdGFza1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ29udGFpbmVyT3BlbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXJDbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMCU7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAzMHZtYXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0Zvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogNzB2bWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtT3BlbiB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2bWluKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BpbiAxcztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DbG9zZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBhbmltYXRpb246IHBvcG91dCAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uRGV0YWlscyB7XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoNXZtaW4pO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSg1dm1pbik7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDV2bWluO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluID4gZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5pbnB1dDpub3QoLmRvbmVUYXNrUmFkaW8pLCBzZWxlY3R7XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC5uZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogNzB2bWluO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGlhbG9nQm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsTUFBTTtJQUNOLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9ybUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lck9wZW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ29udGFpbmVyQ2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdEZvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogMzB2bWF4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5uZXdGb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDcwdm1pbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybU9wZW4ge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1dm1pbik7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9waW4gMXM7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2xvc2Uge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BvdXQgMXM7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbkRldGFpbHMge1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDV2bWluKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BvdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoNXZtaW4pO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiA+IGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuaW5wdXQ6bm90KC5kb25lVGFza1JhZGlvKSwgc2VsZWN0e1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnRuIHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAubmV3UHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgd2lkdGg6IDcwdm1pbjtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMTogcmdiKDE5NiwgMTEyLCAxOTYpO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTI6ICNDMjkxRDk7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMzogcmdiKDE3MCwgODMsIDE3MCk7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNDogcHVycGxlO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTU6ICNFOENGRjM7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ibHVycmVkQ29udGVudCB7XFxyXFxuICAgIGZpbHRlcjpibHVyKDFweCk7XFxyXFxufVxcclxcblxcclxcbi5saWdodE1vZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTIpO1xcclxcbiAgICB3aWR0aDogNDB2bWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFyQ29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMnZtaW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLXByb2plY3QtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZGb2xkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlRm9sZGVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJJY29uIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zLW1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtID4gc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVQcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyID4gLnJlbW92ZVByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3Qge1xcclxcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAgIGJvdHRvbTogMmVtO1xcclxcbiAgICB3aWR0aDogMzB2bWluO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGhlaWdodDogM2VtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2QmFyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDYwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogM2VtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnZtaW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAxdm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgICAgIHdpZHRoOiA1dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIgPiBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDV2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3QsIC5uZXdQcm9qZWN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlck1lbnUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGlzcGxheVByb2plY3RMaXN0TW9iaWxlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSA+IGhlYWRlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGhlaWdodDogNGVtO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAyNXB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0TW9iaWxlOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixrQ0FB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O1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLHNDQUFzQztRQUN0QyxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QixzQ0FBc0M7UUFDdEMsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxzQ0FBc0M7UUFDdEMsYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsWUFBWTtRQUNaLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTE6IHJnYigxOTYsIDExMiwgMTk2KTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0yOiAjQzI5MUQ5O1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTM6IHJnYigxNzAsIDgzLCAxNzApO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTQ6IHB1cnBsZTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS01OiAjRThDRkYzO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1cnJlZENvbnRlbnQge1xcclxcbiAgICBmaWx0ZXI6Ymx1cigxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRNb2RlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0yKTtcXHJcXG4gICAgd2lkdGg6IDQwdm1pbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhckNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDJ2bWluO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICByb3ctZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5vZmZpY2lhbEhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyID4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2Rm9sZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZUZvbGRlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFySWNvbiB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0ID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtcy1tb2JpbGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IHNwYW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlUHJvamVjdCB7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcclxcbiAgICBib3R0b206IDJlbTtcXHJcXG4gICAgd2lkdGg6IDMwdm1pbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBoZWlnaHQ6IDNlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XFxyXFxuICAgIC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdkJhciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2QmFyQ29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiA2MHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vZmZpY2lhbEhlYWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDJ2bWluO1xcclxcbiAgICAgICAgcGFkZGluZzogMXZtaW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyID4gaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogNXZtaW47XFxyXFxuICAgICAgICB3aWR0aDogNXZtaW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyID4gaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1saXN0LCAubmV3UHJvamVjdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oYW1idXJnZXItcHJvamVjdC1saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oYW1idXJnZXJNZW51IHtcXHJcXG4gICAgICAgIGhlaWdodDogNXZtaW47XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUgPiBoZWFkZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3UHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZFByb2plY3RNb2JpbGUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMjVweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdE1vYmlsZTpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kaXJlY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tQYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2UgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlciA+IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzayB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzazpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICAgIGhlaWdodDogMi41ZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3QsIC5kb25lTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Xb3JrRGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtJbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2ssIC5kb25lVGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENkI1RTU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG93VG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Ub2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5oaWdoVG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2s6aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiwgLmNvbXBsZXRlZERpdk1haW4ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lVGFza1JhZGlvIHtcXHJcXG4gICAgY29sb3I6ICNjNDcwYzQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWREaXZNYWluID4gc3BhbiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdlNldHRpbmdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiA+IGJ1dHRvbiwgLnRvZG9EaXZTZXR0aW5ncyA+IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uOmhvdmVyLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb0ljb25JbWcsIC5lZGl0VGFza0ltYWdlLCAuZGVsZXRlVGFza0ltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmRpcmVjdGlvbnMge1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWl0ZW0tbW9iaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnByb2plY3QtaXRlbS1tb2JpbGUgPiBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgLnByb2plY3QtaXRlbS1tb2JpbGU6aG92ZXIgPiAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Rhc2tQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0dBRUQ7UUFDSyxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpcmVjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBjb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcGFkZGluZzogMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrUGFnZSA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyID4gYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50ID4gaDMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCwgLmRvbmVMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0ID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtEaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDQwdnc7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzaywgLmRvbmVUYXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2QjVFNTtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxyXFxufVxcclxcblxcclxcbi5sb3dUb2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bVRvZG9UYXNrIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hUb2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzazpob3ZlciwgLmRvbmVUYXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluLCAuY29tcGxldGVkRGl2TWFpbiB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmVUYXNrUmFkaW8ge1xcclxcbiAgICBjb2xvcjogI2M0NzBjNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZERpdk1haW4gPiBzcGFuIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2U2V0dGluZ3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4gPiBidXR0b246aG92ZXIsIC50b2RvRGl2U2V0dGluZ3MgPiBidXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5pbmZvSWNvbkltZywgLmVkaXRUYXNrSW1hZ2UsIC5kZWxldGVUYXNrSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAuZGlyZWN0aW9ucyB7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtaXRlbS1tb2JpbGUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucHJvamVjdC1pdGVtLW1vYmlsZSA+IHNwYW4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yZW1vdmVQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAucHJvamVjdC1pdGVtLW1vYmlsZTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nQm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nQm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza1BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGVzL2RpYWxvZ0JveC5jc3MnO1xyXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJy4uL2Fzc2V0cy9jbG9zZUljb24uc3ZnJztcclxuaW1wb3J0IHthZGRQcm9qZWN0LCBhZGRUYXNrLCB1cGRhdGVUYXNrfSBmcm9tICcuL3Rhc2tQYWdlJztcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Db250YWluZXInKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk5ld1Byb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyT3BlbicpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RGb3JtJyk7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtT3BlbicpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRleHRIZWFkZXIuaW5uZXJUZXh0ID0gJ05ldyBwcm9qZWN0JztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG4gICAgY2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbG9zZUZvcm0oZSwgdHJ1ZSwgZmFsc2UpKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiRm9ybVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0TmFtZVwiPlByb2plY3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJwcm9qZWN0TmFtZVwiIG5hbWU9XCJwcm9qZWN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvamVjdCBOYW1lXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGRCdG5cIj5BZGQgUHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5gXHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Gb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrRm9ybShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lck9wZW4nKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXdGb3JtJyk7XHJcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtT3BlbicpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRleHRIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcbiAgICBjbG9zZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlSW1hZ2UnKTtcclxuICAgIGNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0RHVlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiRm9ybVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrTmFtZVwiPlRpdGxlIDxzdXA+Kjwvc3VwPjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGFzayBOYW1lXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tEZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChPcHRpb25hbCk8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza0Rlc2NyaXB0aW9uXCIgbmFtZT1cInRhc2tEZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZUVudGVyZWRcIj5EdWUgRGF0ZSAoT3B0aW9uYWwpIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlRW50ZXJlZFwiIG5hbWU9XCJkYXRlRW50ZXJlZFwiIHZhbHVlPVwiJHtkZWZhdWx0RHVlfVwiLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eSAoT3B0aW9uYWwpIDwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZEJ0blwiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPmBcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk5ld1Rhc2tGb3JtKGUpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dDtcclxuICAgIGNyZWF0ZU5ld1Rhc2tGb3JtKHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkRlc2NyaXB0aW9uQm94KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lck9wZW4nKTtcclxuICAgIGNvbnN0IGRldGFpbHNGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXRhaWxzRm9ybS5jbGFzc0xpc3QuYWRkKCduZXdGb3JtJyk7XHJcbiAgICBkZXRhaWxzRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtT3BlbicpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dEhlYWRlci5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNsb3NlSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xyXG4gICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcbiAgICBjbG9zZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZGV0YWlsc0Zvcm0uY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1PcGVuJywgJ2Zvcm1DbG9zZScpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1Db250YWluZXJPcGVuJywgJ2Zvcm1Db250YWluZXJDbG9zZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRm9ybSwgMTAwMCk7XHJcbiAgICB9KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcclxuICAgIGRldGFpbHNGb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgICBjb25zdCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aXRsZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGVEaXNwbGF5LmlubmVyVGV4dCA9ICdUaXRsZSc7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHRpdGxlRGlzcGxheSk7XHJcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGl0bGVWYWx1ZS5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQodGl0bGVWYWx1ZSk7XHJcbiAgICBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQobGluZUJyZWFrMSk7XHJcblxyXG4gICAgY29uc3QgZGVzY0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZGVzY0Rpc3BsYXkuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY0Rpc3BsYXkpO1xyXG4gICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVzY1ZhbHVlLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjVmFsdWUpO1xyXG4gICAgY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGxpbmVCcmVhazIpO1xyXG5cclxuICAgIGNvbnN0IGR1ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZHVlRGlzcGxheS5pbm5lclRleHQgPSAnRHVlIERhdGUnO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkdWVEaXNwbGF5KTtcclxuICAgIGNvbnN0IGR1ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZHVlVmFsdWUuaW5uZXJUZXh0ID0gZHVlO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkdWVWYWx1ZSk7XHJcbiAgICBjb25zdCBsaW5lQnJlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQobGluZUJyZWFrMyk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHByaW9yaXR5RGlzcGxheS5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eURpc3BsYXkpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHByaW9yaXR5VmFsdWUuaW5uZXJUZXh0ID0gcHJpb3JpdHk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VmFsdWUpO1xyXG5cclxuICAgIGRlc2NEaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EaXYnKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGV0YWlscycpO1xyXG4gICAgZGV0YWlsc0Zvcm0uYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzRm9ybSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRWRpdFRhc2tGb3JtKHByb2plY3ROYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNyZWF0ZU5ld1Rhc2tGb3JtKHByb2plY3ROYW1lKTtcclxuICAgIFxyXG4gICAgLyogQWRkIGFsbCBleGlzdGluZyBpbmZvcm1hdGlvbnMgKi9cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XHJcbiAgICB0YXNrTmFtZS52YWx1ZSA9IHRpdGxlO1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjcmlwdGlvbicpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlRW50ZXJlZCcpO1xyXG4gICAgdGFza0R1ZURhdGUudmFsdWUgPSBkdWU7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5O1xyXG5cclxuICAgIC8qIFJlbmFtZSBCdXR0b24gbmFtZSAqL1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdG4nKTtcclxuICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJTYXZlIFRhc2tcIjtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHVwZGF0ZVRhc2soZSwgdGl0bGUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtKGUsIGlzQ2xvc2VQcm9qZWN0PWZhbHNlLCBpc0Nsb3NlVGFzaz10cnVlKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Db250YWluZXInKTtcclxuICAgIGlmIChpc0Nsb3NlUHJvamVjdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEZvcm0nKTtcclxuICAgICAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybU9wZW4nLCAnZm9ybUNsb3NlJyk7XHJcbiAgICB9IGVsc2UgaWYgKGlzQ2xvc2VUYXNrID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdGb3JtJyk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1PcGVuJywgJ2Zvcm1DbG9zZScpO1xyXG4gICAgfVxyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybUNvbnRhaW5lck9wZW4nLCAnZm9ybUNvbnRhaW5lckNsb3NlJyk7XHJcbiAgICBzZXRUaW1lb3V0KGRlbGV0ZUZvcm0sIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQge29wZW5OZXdQcm9qZWN0Rm9ybSwgb3Blbk5ld1Rhc2tGb3JtLFxyXG4gICAgICAgIG9wZW5EZXNjcmlwdGlvbkJveCwgb3BlbkVkaXRUYXNrRm9ybSxcclxuICAgICAgICBjbG9zZUZvcm19O1xyXG5cclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvbmF2QmFyLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2RpYWxvZ0JveC5jc3MnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgaGFtYnVyZ2VyTWVudUljb24gZnJvbSAnLi4vYXNzZXRzL2hhbWJ1cmdlckljb24ucG5nJztcclxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuLi9hc3NldHMvY2xvc2VJY29uLnN2Zyc7XHJcbmltcG9ydCB7bG9hZFByb2plY3RzfSBmcm9tICcuL3Rhc2tQYWdlLmpzJztcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c0Zyb21NZW51KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7ICAgIFxyXG5cclxuICAgIGNvbnN0IG1lbnVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheVByb2plY3RMaXN0TW9iaWxlJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dEhlYWRlci5pbm5lclRleHQgPSAnUHJvamVjdCBMaXN0JztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG4gICAgY2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudURpYWxvZyk7XHJcbiAgICB9KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcclxuICAgIG1lbnVEaWFsb2cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RNb2JpbGUnKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFByb2plY3QuaW5uZXJUZXh0ID0gJ0FkZCBOZXcgUHJvamVjdCc7XHJcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RNb2JpbGUnKTtcclxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XHJcbiAgICBtZW51RGlhbG9nLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbXMtbW9iaWxlJyk7XHJcbiAgICBtZW51RGlhbG9nLmFwcGVuZENoaWxkKHByb2plY3RJdGVtcyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaWFsb2cpO1xyXG5cclxuICAgIGxvYWRQcm9qZWN0cyh0cnVlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE5hdkJhcigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9XHJcbiAgICBgPGRpdiBjbGFzcz1cIm5hdkJhckNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib2ZmaWNpYWxIZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgxPlRvZG9MaXN0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyLXByb2plY3QtbGlzdFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPHA+TXkgUHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtaXRlbXNcIj48L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXdQcm9qZWN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0XCI+QWRkIE5ldyBQcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxvZ29JbWFnZS5hbHQgPSBcIlBpY3R1cmUgb2YgT2ZmY2lhbCBsb2dvXCI7XHJcbiAgICBsb2dvSW1hZ2Uuc3JjID0gbG9nbztcclxuXHJcbiAgICBjb25zdCBvZmZpY2lhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZpY2lhbEhlYWRlcicpO1xyXG4gICAgb2ZmaWNpYWxIZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcclxuXHJcbiAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3QnKTtcclxuICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbWVudUltYWdlLnNyYyA9IGhhbWJ1cmdlck1lbnVJY29uO1xyXG4gICAgbWVudUltYWdlLmFsdCA9IFwiSGFtYnVyZ2VyIE1lbnUgcGljdHVyZVwiXHJcbiAgICBtZW51SW1hZ2UuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyTWVudScpO1xyXG4gICAgaGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xyXG4gICAgaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0c0Zyb21NZW51KTtcclxuICAgIGxvYWRQcm9qZWN0cygpO1xyXG59IiwiaW1wb3J0IFwiLi4vc3R5bGVzL3Rhc2tQYWdlLmNzc1wiO1xyXG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2FkZC5wbmdcIjtcclxuaW1wb3J0IGluZm9JY29uIGZyb20gXCIuLi9hc3NldHMvaW5mb0ljb24ucG5nXCI7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vYXNzZXRzL2VkaXRCdG4ucG5nXCI7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi9hc3NldHMvZGVsZXRlQnRuLnBuZ1wiO1xyXG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL3RyYXNoLWNhbi5wbmdcIjtcclxuaW1wb3J0IGNvbXBsZXRlZFRhc2tQaWMgZnJvbSBcIi4uL2Fzc2V0cy9jb21wbGV0ZWRUYXNrLmpwZ1wiO1xyXG5pbXBvcnQge1xyXG5cdG9wZW5OZXdQcm9qZWN0Rm9ybSxcclxuXHRvcGVuTmV3VGFza0Zvcm0sXHJcblx0b3BlbkRlc2NyaXB0aW9uQm94LFxyXG5cdG9wZW5FZGl0VGFza0Zvcm0sXHJcblx0Y2xvc2VGb3JtLFxyXG59IGZyb20gXCIuL2RpYWxvZ0JveFwiO1xyXG5cclxubGV0IHByb2plY3RMaXN0ID0gW107XHJcblxyXG5jb25zdCBzYW1wbGVQcm9qZWN0cyA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiBcIldlYiBEZXZlbG9wbWVudFwiLFxyXG5cdFx0dG9kb3M6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIldvcmsgb24gVG9EbyBMaXN0XCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBBZGQgYSAnQWRkVGFzaycgYnV0dG9uIG9uIE9kaW4ncyBUT0RPIExpc3QgUHJvamVjdGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIlN0YXJ0IHN0dWR5aW5nIE9PUFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgU3RhcnQgcmVhZGluZyBPT1AgQ2hhcHRlciBmcm9tIE9kaW4gUHJvamVjdGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiUmVhZCBvdGhlcnMgd2Vic2l0ZXNcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogYEZpbmQgYW5kIHJlYWQgMiBvZiBvdGhlcnMgd2Vic2l0ZXMgZnJvbSBPZGluJ3MgZGlzY29yZGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImxvd1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdGNvbXBsZXRlZDogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IGBBZGQgYSAnQWRkUHJvamVjdCcgYnV0dG9uIG9uIFRvRG8gTGlzdGAsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBBZGQgYSAnQWRkUHJvamVjdCcgYnV0dG9uIG9uIE9kaW4ncyBUT0RPIExpc3QgUHJvamVjdGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcIldvcmtcIixcclxuXHRcdHRvZG9zOiBbXSxcclxuXHRcdGNvbXBsZXRlZDogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiU2VuZCBlbWFpbCB0byBTb25pYVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgV3JpdGUgU29uaWEgYWJvdXQgeWVzdGVyZGF5J3MgcmVncmVzc2lvbiB0ZXN0IHJlc3VsdHNgLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbl07XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCB0b2RvcyA9IFtdLCBjb21wbGV0ZWQgPSBbXSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudG9kb3MgPSBbXTtcclxuXHRcdGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHRcdFx0XHR0aGlzLnRvZG9zLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgVGFzayh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZSwgdG9kby5wcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29tcGxldGVkID0gW107XHJcblx0XHRpZiAoY29tcGxldGVkLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Y29tcGxldGVkLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBsZXRlZC5wdXNoKFxyXG5cdFx0XHRcdFx0bmV3IFRhc2sodG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWUsIHRvZG8ucHJpb3JpdHkpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRUYXNrKHRhc2tOYW1lKSB7XHJcblx0XHRsZXQgcmV0VGFzayA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMudG9kb3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG5cdFx0XHRpZiAodGFzay50aXRsZSA9PSB0YXNrTmFtZSkge1xyXG5cdFx0XHRcdHJldFRhc2sgPSB0YXNrO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHJldFRhc2sgIT0gdW5kZWZpbmVkKSByZXR1cm4gcmV0VGFzaztcclxuXHJcblx0XHR0aGlzLmNvbXBsZXRlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblx0XHRcdGlmICh0YXNrLnRpdGxlID09IHRhc2tOYW1lKSB7XHJcblx0XHRcdFx0cmV0VGFzayA9IHRhc2s7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXRUYXNrO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVGFzayB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZSA9IG51bGwsIHByaW9yaXR5ID0gXCJsb3dcIikge1xyXG5cdFx0dGhpcy50aXRsZSA9IG5hbWU7XHJcblx0XHRpZiAoZGVzY3JpcHRpb24gPT0gXCJcIikge1xyXG5cdFx0XHRkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gaXMgYXZhaWxhYmxlXCI7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0XHRpZiAoZHVlID09IFwiXCIgfHwgZHVlID09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5kdWUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZHVlID0gZHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cdH1cclxufVxyXG5jcmVhdGVUYXNrUGFnZTtcclxuZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG5cdGxldCByZXRQcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0cmV0UHJvamVjdCA9IHByb2plY3Q7XHJcblx0XHRcdHJldHVybiByZXRQcm9qZWN0O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmV0UHJvamVjdDtcclxufVxyXG5cclxubGV0IGN1cnJlbnRBY3RpdmVGb2xkZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBzZXRGaXJzdEFzQ3VycmVudEZvbGRlcigpIHtcclxuXHQvKiBEZXNrdG9wIHZpZXcgKi9cclxuXHRjb25zdCBkZXNrdG9wSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXNcIik7XHJcblx0aWYgKGRlc2t0b3BJdGVtcy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRUYXNrUGFnZSA9XHJcblx0XHRcdGRlc2t0b3BJdGVtcy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xyXG5cdFx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihkZWZhdWx0VGFza1BhZ2UpO1xyXG5cdH1cclxuXHJcblx0LyogTW9iaWxlIHZpZXcgKi9cclxuXHRjb25zdCBtb2JpbGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0aWYgKG1vYmlsZUl0ZW1zICE9IG51bGwgJiYgbW9iaWxlSXRlbXMuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb25zdCBkZWZhdWx0VGFza1BhZ2UgPSBtb2JpbGVJdGVtcy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xyXG5cdFx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihkZWZhdWx0VGFza1BhZ2UpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudEFjdGl2ZUZvbGRlcihwcm9qZWN0TmFtZSkge1xyXG5cdC8vIGlmIChjdXJyZW50QWN0aXZlRm9sZGVyID09IHByb2plY3ROYW1lKSByZXR1cm47XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtc1wiKTtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXNNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdGlmIChjdXJyZW50QWN0aXZlRm9sZGVyICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0cHJvamVjdEl0ZW1zRGVza3RvcC5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3REZXNrdG9wKSA9PiB7XHJcblx0XHRcdGlmIChwcm9qZWN0RGVza3RvcC5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRcdHByb2plY3REZXNrdG9wLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVGb2xkZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKHByb2plY3RJdGVtc01vYmlsZSAhPSBudWxsKSB7XHJcblx0XHRcdHByb2plY3RJdGVtc01vYmlsZS5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3RNb2JpbGUpID0+IHtcclxuXHRcdFx0XHRpZiAocHJvamVjdE1vYmlsZS5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRcdFx0cHJvamVjdE1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlRm9sZGVyXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGN1cnJlbnRBY3RpdmVGb2xkZXIgPSBwcm9qZWN0TmFtZTtcclxuXHRwcm9qZWN0SXRlbXNEZXNrdG9wLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdERlc2t0b3ApID0+IHtcclxuXHRcdGlmIChwcm9qZWN0RGVza3RvcC5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRwcm9qZWN0RGVza3RvcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlRm9sZGVyXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmIChwcm9qZWN0SXRlbXNNb2JpbGUgIT0gbnVsbCkge1xyXG5cdFx0cHJvamVjdEl0ZW1zTW9iaWxlLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdE1vYmlsZSkgPT4ge1xyXG5cdFx0XHRpZiAocHJvamVjdE1vYmlsZS5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRcdHByb2plY3RNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUZvbGRlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNyZWF0ZVRhc2tQYWdlKGN1cnJlbnRBY3RpdmVGb2xkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVGb2xkZXIoZSkge1xyXG5cdHNldEN1cnJlbnRBY3RpdmVGb2xkZXIoZS5zcmNFbGVtZW50LmlubmVyVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvUHJvamVjdExpc3QobmV3UHJvamVjdE5hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21Qcm9qZWN0TGlzdChuZXdQcm9qZWN0KSB7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHByb2plY3RMaXN0W2ldLm5hbWUgPT0gbmV3UHJvamVjdCkge1xyXG5cdFx0XHRkZWxldGUgcHJvamVjdExpc3RbaV07XHJcblx0XHRcdHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdH1cclxuXHR9XHJcblx0LyogRGlzcGxheSBCbGFuayBQYWdlIHRvIGluZGljYXRlIHN0ZXBzIHRvIHVzZSBUT0RPIExpc3QgKi9cclxuXHRpZiAocHJvamVjdExpc3QubGVuZ3RoID09IDApIHtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblx0XHQvKiBEZWxldGUgcHJldmlvdXMgZXhpc3RlZCBUYXNrIFBhZ2UgRGlzcGxheSAqL1xyXG5cdFx0Y29uc3QgcHJldlRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKTtcclxuXHRcdGlmIChwcmV2VGFza1BhZ2UgIT0gbnVsbCkge1xyXG5cdFx0XHRjb250ZW50LnJlbW92ZUNoaWxkKHByZXZUYXNrUGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zLW1vYmlsZVwiKTtcclxuXHRcdGlmIChwcm9qZWN0SXRlbXMgIT0gbnVsbCkge1xyXG5cdFx0XHRwcm9qZWN0SXRlbXMuaW5uZXJUZXh0ID0gXCJObyBQcm9qZWN0XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblx0XHRoZWFkZXIuaW5uZXJUZXh0ID0gXCJQbGVhc2UgQWRkIE5ldyBQcm9qZWN0IEZpcnN0XCI7XHJcblxyXG5cdFx0ZGlyZWN0aW9ucy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdFx0ZGlyZWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uc1wiKTtcclxuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9ucyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChuZXdMaXN0SXRlbSkge1xyXG5cdG5ld0xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVGb2xkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVFdmVudChwcm9qZWN0KSB7XHJcblx0cHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlRm9sZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtc1wiKTtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXNNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5pbm5lclRleHQ7XHJcblxyXG5cdGlmIChjdXJyZW50QWN0aXZlRm9sZGVyID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRzZXRGaXJzdEFzQ3VycmVudEZvbGRlcigpO1xyXG5cdH1cclxuXHRwcm9qZWN0SXRlbXNEZXNrdG9wLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdERlc2t0b3ApID0+IHtcclxuXHRcdGlmIChwcm9qZWN0RGVza3RvcC5pbm5lclRleHQgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0ZGVsZXRlRXZlbnQocHJvamVjdERlc2t0b3ApO1xyXG5cdFx0XHRwcm9qZWN0SXRlbXNEZXNrdG9wLnJlbW92ZUNoaWxkKHByb2plY3REZXNrdG9wKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRpZiAocHJvamVjdEl0ZW1zTW9iaWxlICE9IG51bGwpIHtcclxuXHRcdHByb2plY3RJdGVtc01vYmlsZS5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3RNb2JpbGUpID0+IHtcclxuXHRcdFx0aWYgKHByb2plY3RNb2JpbGUuaW5uZXJUZXh0ID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdFx0ZGVsZXRlRXZlbnQocHJvamVjdE1vYmlsZSk7XHJcblx0XHRcdFx0cHJvamVjdEl0ZW1zTW9iaWxlLnJlbW92ZUNoaWxkKHByb2plY3RNb2JpbGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZGVsZXRlRnJvbVByb2plY3RMaXN0KHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QobmFtZSkge1xyXG5cdGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcclxuXHJcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRuZXdQcm9qZWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xyXG5cdG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRyZW1vdmVJbWFnZS5zcmMgPSByZW1vdmVJY29uO1xyXG5cdHJlbW92ZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0XCIpO1xyXG5cdHJlbW92ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcclxuXHJcblx0bmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSW1hZ2UpO1xyXG5cdGFkZEV2ZW50KG5ld0xpc3RJdGVtKTtcclxuXHJcblx0cmV0dXJuIG5ld0xpc3RJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdE1vYmlsZShuYW1lKSB7XHJcblx0Y29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1tb2JpbGVcIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcclxuXHJcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRuZXdQcm9qZWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xyXG5cdG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRyZW1vdmVJbWFnZS5zcmMgPSByZW1vdmVJY29uO1xyXG5cdHJlbW92ZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0TW9iaWxlXCIpO1xyXG5cdHJlbW92ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcclxuXHJcblx0bmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSW1hZ2UpO1xyXG5cdGFkZEV2ZW50KG5ld0xpc3RJdGVtKTtcclxuXHJcblx0cmV0dXJuIG5ld0xpc3RJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KHByb2plY3ROYW1lLCBpc01vYmlsZSA9IGZhbHNlKSB7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zXCIpO1xyXG5cdGNvbnN0IG5ld0xpc3RJdGVtID0gZGlzcGxheVByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XHJcblxyXG5cdC8qIFNldCBOZXcgUHJvamVjdCBhcyBDdXJyZW50IFByb2plY3QgKi9cclxuXHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdE1vYmlsZShwcm9qZWN0TmFtZSkge1xyXG5cdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0Y29uc3QgbmV3TGlzdEl0ZW0gPSBkaXNwbGF5UHJvamVjdE1vYmlsZShwcm9qZWN0TmFtZSk7XHJcblx0cHJvamVjdEl0ZW1zPy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XHJcblxyXG5cdC8qIFNldCBOZXcgUHJvamVjdCBhcyBDdXJyZW50IFByb2plY3QgKi9cclxuXHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcclxuXHQvKiBBZGQgdG8gc3RvcmFnZSAqL1xyXG5cdGFkZFRvUHJvamVjdExpc3QocHJvamVjdE5hbWUudmFsdWUpO1xyXG5cdC8qIEFkZCB0byBET00gKi9cclxuXHRhZGRQcm9qZWN0VG9MaXN0KHByb2plY3ROYW1lLnZhbHVlKTtcclxuXHRhZGRQcm9qZWN0VG9MaXN0TW9iaWxlKHByb2plY3ROYW1lLnZhbHVlKTtcclxuXHQvLyBjbG9zZUZvcm0obnVsbCwgdHJ1ZSwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoaXNNb2JpbGUgPSBmYWxzZSkge1xyXG5cdGlmIChpc01vYmlsZSA9PSBmYWxzZSAmJiBwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xyXG5cdFx0c2FtcGxlUHJvamVjdHMuZm9yRWFjaCgoc2FtcGxlKSA9PiB7XHJcblx0XHRcdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuXHRcdFx0XHRzYW1wbGUubmFtZSxcclxuXHRcdFx0XHRzYW1wbGUudG9kb3MsXHJcblx0XHRcdFx0c2FtcGxlLmNvbXBsZXRlZFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoaXNNb2JpbGUgPT0gZmFsc2UpIHtcclxuXHRcdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0YWRkUHJvamVjdFRvTGlzdChwcm9qZWN0Lm5hbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcclxuXHRcdG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OZXdQcm9qZWN0Rm9ybSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0YWRkUHJvamVjdFRvTGlzdE1vYmlsZShwcm9qZWN0Lm5hbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdE1vYmlsZVwiKTtcclxuXHRcdG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OZXdQcm9qZWN0Rm9ybSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1cIik7XHJcblxyXG5cdGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XHJcblx0XHRhZGRFdmVudChmb2xkZXIpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKioqKioqIFRhc2sgRnVuY3Rpb25zICoqKioqKiovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tQYWdlKGN1cnJlbnRBY3RpdmVGb2xkZXIpIHtcclxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cdC8qIERlbGV0ZSBwcmV2aW91cyBleGlzdGVkIFBhZ2UgRGlzcGxheSAqL1xyXG5cdGNvbnN0IGRpcmVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpcmVjdGlvbnNcIik7XHJcblx0aWYgKGRpcmVjdGlvbnMgIT0gbnVsbCkge1xyXG5cdFx0Y29udGVudC5yZW1vdmVDaGlsZChkaXJlY3Rpb25zKTtcclxuXHR9XHJcblx0Y29uc3QgcHJldlRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKTtcclxuXHRpZiAocHJldlRhc2tQYWdlICE9IG51bGwpIHtcclxuXHRcdGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldlRhc2tQYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRhc2tQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0YXNrUGFnZS5jbGFzc0xpc3QuYWRkKFwidGFza1BhZ2VcIik7XHJcblx0dGFza1BhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tIZWFkZXJcIj5cclxuICAgICAgICA8YnV0dG9uPkFkZCBOZXcgVGFzazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFza0NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb0xpc3RcIj48L2Rpdj5cclxuICAgICAgICA8aDM+Q29tcGxldGVkIFRhc2tzPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG9uZUxpc3RcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZCh0YXNrUGFnZSk7XHJcblxyXG5cdGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0hlYWRlclwiKS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG5cdGNvbnN0IGFkZFRhc2sgPSBuZXcgSW1hZ2UoKTtcclxuXHRhZGRUYXNrLnNyYyA9IGFkZEljb247XHJcblx0YWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcclxuXHRhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmV3VGFza0Zvcm0pO1xyXG5cdGFkZEJ0bi5wcmVwZW5kKGFkZFRhc2spO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRBY3RpdmVGb2xkZXI7XHJcblx0Y29uc3QgY3VycmV0Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Y3VycmV0Rm9sZGVyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xyXG5cdHRhc2tQYWdlLnByZXBlbmQoY3VycmV0Rm9sZGVyKTtcclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrVGFza0FzVG9kbyhwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5jb21wbGV0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAocHJvamVjdC5jb21wbGV0ZWRbaV0udGl0bGUgPT0gdGFza05hbWUpIHtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3MucHVzaChcclxuXHRcdFx0XHRcdFx0bmV3IFRhc2soXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0udGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0uZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0uZHVlLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkW2ldLnByaW9yaXR5XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRkZWxldGUgcHJvamVjdC5jb21wbGV0ZWRbaV07XHJcblx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya1Rhc2tBc0NvbXBsZXRlZChwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0LnRvZG9zW2ldLnRpdGxlID09IHRhc2tOYW1lKSB7XHJcblx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZC5wdXNoKFxyXG5cdFx0XHRcdFx0XHRuZXcgVGFzayhcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLnRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0uZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5kdWUsXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5wcmlvcml0eVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHByb2plY3QudG9kb3NbaV07XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KFxyXG5cdHByb2plY3ROYW1lLFxyXG5cdHRhc2tOYW1lLFxyXG5cdHRhc2tEZXNjcmlwdGlvbixcclxuXHR0YXNrRHVlLFxyXG5cdHRhc2tQcmlvcml0eSxcclxuXHRpc1RvZG9JdGVtID0gdHJ1ZVxyXG4pIHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRpZiAoaXNUb2RvSXRlbSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0cHJvamVjdExpc3RbaV0udG9kb3MucHVzaChcclxuXHRcdFx0XHRcdG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByb2plY3RMaXN0W2ldLmNvbXBsZXRlZC5wdXNoKFxyXG5cdFx0XHRcdFx0bmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJblByb2plY3QoXHJcblx0cHJvamVjdE5hbWUsXHJcblx0b2xkVGl0bGUsXHJcblx0dGFza05hbWUsXHJcblx0dGFza0Rlc2NyaXB0aW9uLFxyXG5cdHRhc2tEdWUsXHJcblx0dGFza1ByaW9yaXR5LFxyXG5cdGlzVG9kb0l0ZW0gPSB0cnVlXHJcbikge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHByb2plY3QudG9kb3NbaV0udGl0bGUgPT0gb2xkVGl0bGUpIHtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0udGl0bGUgPSB0YXNrTmFtZTtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0uZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLmR1ZSA9IHRhc2tEdWU7XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tUaXRsZSkge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHByb2plY3QudG9kb3NbaV0udGl0bGUgPT0gdGFza1RpdGxlKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcHJvamVjdC50b2Rvc1tpXTtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3Muc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2soZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XHJcblx0Y29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGVzY3JpcHRpb25cIik7XHJcblx0Y29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVFbnRlcmVkXCIpO1xyXG5cdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcblxyXG5cdC8qIEFkZCB0byBzdG9yYWdlICovXHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblx0YWRkVGFza1RvUHJvamVjdChcclxuXHRcdHByb2plY3ROYW1lLFxyXG5cdFx0dGFza05hbWUudmFsdWUsXHJcblx0XHR0YXNrRGVzY3JpcHRpb24udmFsdWUsXHJcblx0XHR0YXNrRHVlRGF0ZS52YWx1ZSxcclxuXHRcdHRhc2tQcmlvcml0eS52YWx1ZVxyXG5cdCk7XHJcblxyXG5cdHRhc2tOYW1lLnZhbHVlID0gXCJcIjtcclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUT0RPKHRvZG9MaXN0LCB0b2RvRGl2KSB7XHJcblx0dG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XHJcblx0LyogRGVsZXRlIEZyb20gc3RvcmFnZSAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTdGF0dXMoZSkge1xyXG5cdGNvbnN0IHRhc2tOYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblxyXG5cdC8qIENoZWNrIGlmIHRoaXMgdGFzayBpcyBwZW5kaW5nIG9yIGNvbXBsZXRlZCovXHJcblx0Y29uc3QgdGFza0RpdiA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0aWYgKHRhc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1Rhc2tcIikpIHtcclxuXHRcdG1hcmtUYXNrQXNDb21wbGV0ZWQocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHR9IGVsc2UgaWYgKHRhc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG9uZVRhc2tcIikpIHtcclxuXHRcdG1hcmtUYXNrQXNUb2RvKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XHJcblx0fVxyXG5cdGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbmZvKGUpIHtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRjb25zdCB0YXNrTmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xyXG5cclxuXHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0Y29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrTmFtZSk7XHJcblxyXG5cdGlmICh0YXNrID09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0b3BlbkRlc2NyaXB0aW9uQm94KHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlLCB0YXNrLnByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFzayhlLCB0aXRsZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XHJcblx0Y29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGVzY3JpcHRpb25cIik7XHJcblx0Y29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVFbnRlcmVkXCIpO1xyXG5cdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcblxyXG5cdC8qIFVwZGF0ZSB0byBzdG9yYWdlICovXHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblx0dXBkYXRlVGFza0luUHJvamVjdChcclxuXHRcdHByb2plY3ROYW1lLFxyXG5cdFx0dGl0bGUsXHJcblx0XHR0YXNrTmFtZS52YWx1ZSxcclxuXHRcdHRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcclxuXHRcdHRhc2tEdWVEYXRlLnZhbHVlLFxyXG5cdFx0dGFza1ByaW9yaXR5LnZhbHVlXHJcblx0KTtcclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG5cdGNsb3NlRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFzayhlKSB7XHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblx0Y29uc3QgdGFza05hbWUgPVxyXG5cdFx0ZS5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0O1xyXG5cclxuXHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0Y29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrTmFtZSk7XHJcblxyXG5cdGlmICh0YXNrID09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0b3BlbkVkaXRUYXNrRm9ybShcclxuXHRcdHByb2plY3ROYW1lLFxyXG5cdFx0dGFzay50aXRsZSxcclxuXHRcdHRhc2suZGVzY3JpcHRpb24sXHJcblx0XHR0YXNrLmR1ZSxcclxuXHRcdHRhc2sucHJpb3JpdHlcclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuXHRjb25zdCB0YXNrTmFtZSA9XHJcblx0XHRlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XHJcblxyXG5cdC8qIERlbGV0ZSBmcm9tIHN0b3JhZ2UgKi9cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRPRE8odG9kb0xpc3QsIHRvZG8pIHtcclxuXHRjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0Y29uc3QgdG9kb0Rpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IHJhZGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cdHJhZGlvQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuXHRyYWRpb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZVN0YXR1cyk7XHJcblx0dG9kb0Rpdk1haW4uYXBwZW5kQ2hpbGQocmFkaW9CdG4pO1xyXG5cdGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xyXG5cdHRvZG9EaXZNYWluLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcblx0Y29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0Y29uc3QgaW5mb0ljb25JbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRpbmZvSWNvbkltZy5zcmMgPSBpbmZvSWNvbjtcclxuXHRpbmZvSWNvbkltZy5hbHQgPSBcIkltYWdlIG9mIEluZm8gSWNvblwiO1xyXG5cdGluZm9JY29uSW1nLmNsYXNzTGlzdC5hZGQoXCJpbmZvSWNvbkltZ1wiKTtcclxuXHRkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5mbyk7XHJcblx0ZGV0YWlscy5hcHBlbmRDaGlsZChpbmZvSWNvbkltZyk7XHJcblx0dG9kb0Rpdk1haW4uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcblx0dG9kb0Rpdk1haW4uY2xhc3NMaXN0LmFkZChcInRvZG9EaXZNYWluXCIpO1xyXG5cdHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdk1haW4pO1xyXG5cclxuXHRjb25zdCB0b2RvRGl2U2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHR0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQocmVtYWluaW5nVGltZSk7XHJcblx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0Y29uc3QgZWRpdFRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGVkaXRUYXNrSW1hZ2Uuc3JjID0gZWRpdEljb247XHJcblx0ZWRpdFRhc2tJbWFnZS5hbHQgPSBcIkVkaXQgZm9yIFRhc2tcIjtcclxuXHRlZGl0VGFza0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJlZGl0VGFza0ltYWdlXCIpO1xyXG5cdGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdFRhc2tJbWFnZSk7XHJcblx0ZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xyXG5cclxuXHR0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcblx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRjb25zdCBkZWxldGVUYXNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRkZWxldGVUYXNrSW1hZ2Uuc3JjID0gZGVsZXRlSWNvbjtcclxuXHRkZWxldGVUYXNrSW1hZ2UuYWx0ID0gXCJEZWVsZXQgdGhlIFRhc2tcIjtcclxuXHRkZWxldGVUYXNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tJbWFnZVwiKTtcclxuXHRkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0ltYWdlKTtcclxuXHRkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xyXG5cclxuXHR0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHR0b2RvRGl2U2V0dGluZ3MuY2xhc3NMaXN0LmFkZChcInRvZG9EaXZTZXR0aW5nc1wiKTtcclxuXHJcblx0dG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2U2V0dGluZ3MpO1xyXG5cdHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9UYXNrXCIpO1xyXG5cdHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xyXG5cdFx0Y2FzZSBcImhpZ2hcIjpcclxuXHRcdFx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFRvZG9UYXNrXCIpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJtZWRpdW1cIjpcclxuXHRcdFx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtVG9kb1Rhc2tcIik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG93VG9kb1Rhc2tcIik7XHJcblx0fVxyXG5cdHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29tcGxldGVkKGRvbmVMaXN0LCBjb21wbGV0ZWRUYXNrKSB7XHJcblx0Y29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0Y29uc3QgY29tcGxldGVkRGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0cmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG5cdHJhZGlvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZG9uZVRhc2tSYWRpbyBmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2tcIik7XHJcblx0cmFkaW9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VTdGF0dXMpO1xyXG5cdGNvbXBsZXRlZERpdk1haW4uYXBwZW5kQ2hpbGQocmFkaW9CdG4pO1xyXG5cdGNvbnN0IGNvbXBsZXRlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0Y29tcGxldGVkVGl0bGUuaW5uZXJUZXh0ID0gY29tcGxldGVkVGFzay50aXRsZTtcclxuXHRjb21wbGV0ZWREaXZNYWluLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRpdGxlKTtcclxuXHRjb21wbGV0ZWREaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWREaXZNYWluXCIpO1xyXG5cclxuXHRjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkRGl2TWFpbik7XHJcblx0Y29tcGxldGVkRGl2LmNsYXNzTGlzdC5hZGQoXCJkb25lVGFza1wiKTtcclxuXHRkb25lTGlzdC5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTGlzdFwiKTtcclxuXHRcdFx0Y29uc3QgZG9uZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmVMaXN0XCIpO1xyXG5cclxuXHRcdFx0Ly8gY2xlYXIgcHJldiBlbGVtZW50c1xyXG5cdFx0XHR0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRcdFx0Ly8gdG9kbyBsaXN0XHJcblx0XHRcdGlmIChwcm9qZWN0LnRvZG9zLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0Ly8gZGlzcGxheSBubyB3b3JrIHBpY3R1cmVcclxuXHRcdFx0XHRjb25zdCBub1dvcmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdG5vV29ya0Rpdi5jbGFzc0xpc3QuYWRkKFwibm9Xb3JrRGl2XCIpO1xyXG5cdFx0XHRcdGNvbnN0IG5vV29ya0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdFx0bm9Xb3JrSW1hZ2Uuc3JjID0gY29tcGxldGVkVGFza1BpYztcclxuXHRcdFx0XHRub1dvcmtJbWFnZS5jbGFzc0xpc3QuYWRkKFwibm9Xb3JrSW1hZ2VcIik7XHJcblx0XHRcdFx0bm9Xb3JrRGl2LmFwcGVuZENoaWxkKG5vV29ya0ltYWdlKTtcclxuXHRcdFx0XHRjb25zdCBub1dvcmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRcdFx0bm9Xb3JrVGV4dC5pbm5lclRleHQgPSBcIk5vIHdvcmsgZm9yIHRvZGF5LiBFbmpveSB5b3VyIGRheS5cIjtcclxuXHRcdFx0XHRub1dvcmtEaXYuYXBwZW5kQ2hpbGQobm9Xb3JrVGV4dCk7XHJcblx0XHRcdFx0dG9kb0xpc3QuYXBwZW5kQ2hpbGQobm9Xb3JrRGl2KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBjbGVhciBwcmV2IGVsZW1lbnRzLCBpbiBjYXNlIG9mIG5vIHdvcmsgaW1hZ2UgaXMgaGVyZVxyXG5cdFx0XHRcdHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVRPRE8odG9kb0xpc3QsIHRvZG8pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvbXBsZXRlZCBsaXN0XHJcblx0XHRcdGRvbmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRcdHByb2plY3QuY29tcGxldGVkLmZvckVhY2goKGNvbXBsZXRlZFRhc2spID0+IHtcclxuXHRcdFx0XHRkaXNwbGF5Q29tcGxldGVkKGRvbmVMaXN0LCBjb21wbGV0ZWRUYXNrKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRQcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkVGFzaywgdXBkYXRlVGFzayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWROYXZCYXIgZnJvbSAnLi9tb2R1bGVzL25hdkJhcic7XHJcblxyXG5sb2FkTmF2QmFyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==