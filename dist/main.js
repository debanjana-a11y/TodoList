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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --light-shade-1: rgb(196, 112, 196);\r\n    --light-shade-2: #C291D9;\r\n    --light-shade-3: rgb(170, 83, 170);\r\n    --light-shade-4: purple;\r\n    --light-shade-5: #E8CFF3;\r\n    --light-shade-6: #D6B5E5;\r\n    --radio-button: #c470c4;\r\n    --content-bg: #FCFCFC;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Literata';\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    min-height: 100%;\r\n    display: flex;\r\n    background-color: var(--content-bg);\r\n}\r\n\r\n.blurredContent {\r\n    filter:blur(1px);\r\n}\r\n\r\n.lightMode {\r\n    background-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n    background-color: var(--light-shade-2);\r\n    width: 40vmin;\r\n    min-height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n    height: 100%;\r\n    padding: 2vmin;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: 1em;\r\n    padding: 1em;\r\n    background-color: hsla(0, 100%, 100%, 0.5);\r\n    border-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.hamburger-project-list {\r\n    display: none;\r\n}\r\n\r\n.list-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.activeFolder {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n    height: 1em;\r\n}\r\n\r\n.project-list {\r\n    width: 100%;\r\n    height: 60vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.project-list > p {\r\n    font-size: 1.5em;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    background-color: var(--light-shade-3);\r\n    text-align: center;\r\n}\r\n\r\n.project-items {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.project-items-mobile {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    overflow-y: auto;\r\n    color: white;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n    height: 15px;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n    display: block;\r\n}\r\n\r\n.newProject {\r\n    /* position: absolute; */\r\n    bottom: 2em;\r\n    width: 30vmin;\r\n    cursor: pointer;\r\n}\r\n\r\n.addProject {\r\n    font-size: 1em;\r\n    height: 3em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: var(--light-shade-4);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n}\r\n\r\n/* dark mode */\r\ninput[type=checkbox]{\r\n    height: 0;\r\n    width: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.modeLabel {\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    width: 3em;\r\n    height: 1.7em;\r\n    background: var(--light-shade-1);\r\n    float: right;\r\n    border-radius: 100px;\r\n    position: relative;\r\n}\r\n.modeLabel::after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: white;\r\n    border-radius: 90px;\r\n    transition: 0.3s;\r\n}\r\ninput:checked + .modeLabel {\r\n    background-color: black;\r\n}\r\ninput:checked + .modeLabel::after {\r\n    left: calc(100% - 5px);\r\n    transform: translateX(-100%);\r\n}\r\n.modeLabel:active:after {\r\n    width: 45px;\r\n}\r\n\r\n .darkMode{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    background-color: #FCFCFC;\r\n    padding: 0.5em;\r\n    border-radius: 4px;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.toggle {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n    .displayProjectListMobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .content {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .navBar {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .navBarContent {\r\n        width: 100%;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-content: space-between;\r\n        column-gap: 60vw;\r\n    }\r\n\r\n    .officialHeader {\r\n        height: 3em;\r\n        font-size: 1em;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        column-gap: 2vmin;\r\n        padding: 1vmin;\r\n    }\r\n\r\n    .officialHeader > img {\r\n        height: 5vmin;\r\n        width: 5vmin;\r\n    }\r\n\r\n    .officialHeader > h1 {\r\n        font-size: 5vmin;\r\n    }\r\n\r\n    .project-list, .newProject {\r\n        display: none;\r\n    }\r\n\r\n    .hamburger-project-list {\r\n        display: block;\r\n    }\r\n\r\n    .hamburgerMenu {\r\n        height: 5vmin;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .displayProjectListMobile {\r\n        position: absolute;\r\n        z-index: 1;\r\n        height: auto;\r\n        width: 100%;\r\n        background-color: var(--light-shade-3);\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n    \r\n    .displayProjectListMobile > header {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-content: space-between;\r\n        background-color: var(--light-shade-5);\r\n        font-size: 4vmin;\r\n    }\r\n\r\n    .newProjectMobile {\r\n        height: 4em;\r\n        width: 100%;\r\n        background-color: var(--light-shade-1);\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .addProjectMobile {\r\n        height: 100%;\r\n        background-color: var(--light-shade-4);\r\n        color: white;\r\n        font-size: 1em;\r\n        padding: 1em;\r\n        border: none;\r\n        border-radius: 10px 25px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .addProjectMobile:hover {\r\n        transform: scaleX(1.1);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/navBar.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --light-shade-1: rgb(196, 112, 196);\r\n    --light-shade-2: #C291D9;\r\n    --light-shade-3: rgb(170, 83, 170);\r\n    --light-shade-4: purple;\r\n    --light-shade-5: #E8CFF3;\r\n    --light-shade-6: #D6B5E5;\r\n    --radio-button: #c470c4;\r\n    --content-bg: #FCFCFC;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Literata';\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    min-height: 100%;\r\n    display: flex;\r\n    background-color: var(--content-bg);\r\n}\r\n\r\n.blurredContent {\r\n    filter:blur(1px);\r\n}\r\n\r\n.lightMode {\r\n    background-color: var(--light-shade-5);\r\n}\r\n\r\n.navBar {\r\n    background-color: var(--light-shade-2);\r\n    width: 40vmin;\r\n    min-height: 100%;\r\n}\r\n\r\n.navBarContent {\r\n    height: 100%;\r\n    padding: 2vmin;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 2em;\r\n}\r\n\r\n.officialHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: 1em;\r\n    padding: 1em;\r\n    background-color: hsla(0, 100%, 100%, 0.5);\r\n    border-radius: 20px;\r\n}\r\n\r\n.officialHeader > img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.hamburger-project-list {\r\n    display: none;\r\n}\r\n\r\n.list-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.navFolder {\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.activeFolder {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navBarIcon {\r\n    height: 1em;\r\n}\r\n\r\n.project-list {\r\n    width: 100%;\r\n    height: 60vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.project-list > p {\r\n    font-size: 1.5em;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    background-color: var(--light-shade-3);\r\n    text-align: center;\r\n}\r\n\r\n.project-items {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.project-items-mobile {\r\n    width: 100%;\r\n    height: inherit;\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n    overflow-y: auto;\r\n    color: white;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: var(--light-shade-3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--light-shade-4);\r\n}\r\n\r\n.project-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project-item > span {\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.removeProject {\r\n    height: 15px;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover > .removeProject {\r\n    display: block;\r\n}\r\n\r\n.newProject {\r\n    /* position: absolute; */\r\n    bottom: 2em;\r\n    width: 30vmin;\r\n    cursor: pointer;\r\n}\r\n\r\n.addProject {\r\n    font-size: 1em;\r\n    height: 3em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: var(--light-shade-4);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n}\r\n\r\n/* dark mode */\r\ninput[type=checkbox]{\r\n    height: 0;\r\n    width: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.modeLabel {\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    width: 3em;\r\n    height: 1.7em;\r\n    background: var(--light-shade-1);\r\n    float: right;\r\n    border-radius: 100px;\r\n    position: relative;\r\n}\r\n.modeLabel::after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: white;\r\n    border-radius: 90px;\r\n    transition: 0.3s;\r\n}\r\ninput:checked + .modeLabel {\r\n    background-color: black;\r\n}\r\ninput:checked + .modeLabel::after {\r\n    left: calc(100% - 5px);\r\n    transform: translateX(-100%);\r\n}\r\n.modeLabel:active:after {\r\n    width: 45px;\r\n}\r\n\r\n .darkMode{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    background-color: #FCFCFC;\r\n    padding: 0.5em;\r\n    border-radius: 4px;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.toggle {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n    .displayProjectListMobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .content {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .navBar {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .navBarContent {\r\n        width: 100%;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-content: space-between;\r\n        column-gap: 60vw;\r\n    }\r\n\r\n    .officialHeader {\r\n        height: 3em;\r\n        font-size: 1em;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        column-gap: 2vmin;\r\n        padding: 1vmin;\r\n    }\r\n\r\n    .officialHeader > img {\r\n        height: 5vmin;\r\n        width: 5vmin;\r\n    }\r\n\r\n    .officialHeader > h1 {\r\n        font-size: 5vmin;\r\n    }\r\n\r\n    .project-list, .newProject {\r\n        display: none;\r\n    }\r\n\r\n    .hamburger-project-list {\r\n        display: block;\r\n    }\r\n\r\n    .hamburgerMenu {\r\n        height: 5vmin;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .displayProjectListMobile {\r\n        position: absolute;\r\n        z-index: 1;\r\n        height: auto;\r\n        width: 100%;\r\n        background-color: var(--light-shade-3);\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n    \r\n    .displayProjectListMobile > header {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-content: space-between;\r\n        background-color: var(--light-shade-5);\r\n        font-size: 4vmin;\r\n    }\r\n\r\n    .newProjectMobile {\r\n        height: 4em;\r\n        width: 100%;\r\n        background-color: var(--light-shade-1);\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .addProjectMobile {\r\n        height: 100%;\r\n        background-color: var(--light-shade-4);\r\n        color: white;\r\n        font-size: 1em;\r\n        padding: 1em;\r\n        border: none;\r\n        border-radius: 10px 25px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .addProjectMobile:hover {\r\n        transform: scaleX(1.1);\r\n    }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".directions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    background-color: var(--light-shade-5);\r\n    color: purple;\r\n}\r\n\r\n.taskPage {\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    padding: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.taskHeader {\r\n    width: 100%;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n    padding: 0.5em;\r\n    background-color: inherit;\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: none;\r\n    display: flex;\r\n    column-gap: 1em;\r\n    align-items: center;\r\n}\r\n\r\n.addTask {\r\n    height: 1em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.taskContent > h3 {\r\n    margin-top: 3em;\r\n    margin-bottom: 1em;\r\n    height: 2.5em;\r\n    padding: 0.5em;\r\n    align-items: center;\r\n    color: white;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList, .doneList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    row-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n    font-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.noWorkImage {\r\n    width: 40vw;\r\n}\r\n\r\n.todoTask, .doneTask {\r\n    background-color: var(--light-shade-6);\r\n    padding: 0.5em;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n\r\n.lowTodoTask {\r\n    border-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n    border-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n    border-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover, .doneTask:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain, .completedDivMain {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    column-gap: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    transform: scale(2);\r\n    margin-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"]:checked {\r\n    accent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTaskRadio {\r\n    color: var(--radio-button);\r\n}\r\n\r\n.completedDivMain > span {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button, .todoDivSettings > button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover, .todoDivSettings > button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.infoIconImg, .editTaskImage, .deleteTaskImage {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .directions {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    .project-item-mobile {\r\n        width: 100%;\r\n        padding: 5px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .project-item-mobile > span {\r\n        width: 100%;\r\n        font-size: 1.2em;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .removeProjectMobile {\r\n        height: 15px;\r\n        display: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n   .project-item-mobile:hover > .removeProjectMobile {\r\n        display: block;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/taskPage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,sCAAsC;IACtC,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,uBAAuB;IAC3B;;IAEA;QACI,WAAW;QACX,gBAAgB;QAChB,qBAAqB;IACzB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,eAAe;IACnB;;GAED;QACK,cAAc;IAClB;AACJ","sourcesContent":[".directions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    background-color: var(--light-shade-5);\r\n    color: purple;\r\n}\r\n\r\n.taskPage {\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    padding: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n}\r\n\r\n.taskPage > p {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.taskHeader {\r\n    width: 100%;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.taskHeader > button {\r\n    padding: 0.5em;\r\n    background-color: inherit;\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: none;\r\n    display: flex;\r\n    column-gap: 1em;\r\n    align-items: center;\r\n}\r\n\r\n.addTask {\r\n    height: 1em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTask:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.taskContent > h3 {\r\n    margin-top: 3em;\r\n    margin-bottom: 1em;\r\n    height: 2.5em;\r\n    padding: 0.5em;\r\n    align-items: center;\r\n    color: white;\r\n    background-color: var(--light-shade-4);\r\n}\r\n\r\n.todoList, .doneList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    row-gap: 1em;\r\n}\r\n\r\n.todoList > p {\r\n    font-size: large;\r\n}\r\n\r\n.noWorkDiv {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.noWorkImage {\r\n    width: 40vw;\r\n}\r\n\r\n.todoTask, .doneTask {\r\n    background-color: var(--light-shade-6);\r\n    padding: 0.5em;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n\r\n.lowTodoTask {\r\n    border-left: 0.3em solid var(--light-shade-4);\r\n}\r\n\r\n.mediumTodoTask {\r\n    border-left: 0.3em solid yellow;\r\n}\r\n\r\n.highTodoTask {\r\n    border-left: 0.3em solid red;\r\n}\r\n\r\n.todoTask:hover, .doneTask:hover {\r\n    background-color: var(--light-shade-1);\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain, .completedDivMain {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    column-gap: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    transform: scale(2);\r\n    margin-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"]:checked {\r\n    accent-color: var(--light-shade-4);\r\n}\r\n\r\n.doneTaskRadio {\r\n    color: var(--radio-button);\r\n}\r\n\r\n.completedDivMain > span {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todoDivSettings {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todoDivMain > button, .todoDivSettings > button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoDivMain > button:hover, .todoDivSettings > button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.infoIconImg, .editTaskImage, .deleteTaskImage {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .directions {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    .project-item-mobile {\r\n        width: 100%;\r\n        padding: 5px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .project-item-mobile > span {\r\n        width: 100%;\r\n        font-size: 1.2em;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .removeProjectMobile {\r\n        height: 15px;\r\n        display: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n   .project-item-mobile:hover > .removeProjectMobile {\r\n        display: block;\r\n    }\r\n}"],"sourceRoot":""}]);
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
	// const getStyle = (element, style) =>
	// 	window.getComputedStyle(element).getPropertyValue(style);
	const lightMode = {
		'light-shade-1': 'rgb(196, 112, 196)',
		'light-shade-2': '#C291D9',
		'light-shade-3': 'rgb(170, 83, 170)',
		'light-shade-4': 'purple',
		'light-shade-5': '#E8CFF3',
		'light-shade-6': '#D6B5E5',
		'radio-button': '#c470c4',
		'content-bg': '#FCFCFC',
	};
	// override styles are here
	const darkMode = {
		'light-shade-1': '#EAEAEA',
		'light-shade-2': '#C5C5C5',
		'light-shade-3': '#8D8D8D',
		'light-shade-4': 'grey',
		'light-shade-5': '#C5C5C5',
		'light-shade-6': 'lightgrey',
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
            <h2>TodoList</h2>
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
	const taskName = e.currentTarget.parentElement.childNodes[1].innerText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsMERBQTBELHNCQUFzQixnQ0FBZ0MsS0FBSyw0QkFBNEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsS0FBSyw2QkFBNkIsMkJBQTJCLG9CQUFvQixtQkFBbUIsS0FBSyx5QkFBeUIsa0JBQWtCLDJCQUEyQix5QkFBeUIscUJBQXFCLHNCQUFzQiwrQ0FBK0MsK0NBQStDLHNCQUFzQiwrQkFBK0IsS0FBSyxrQkFBa0Isa0JBQWtCLDJCQUEyQix5QkFBeUIscUJBQXFCLHNCQUFzQiwrQ0FBK0MsK0NBQStDLHNCQUFzQiwrQkFBK0IsS0FBSyxtQkFBbUIsbUJBQW1CLGVBQWUscUNBQXFDLDRCQUE0QixtQkFBbUIsS0FBSyxvQkFBb0IsZUFBZSxtQkFBbUIsaUNBQWlDLDZCQUE2QixLQUFLLDZCQUE2QixvQkFBb0IsS0FBSywwQkFBMEIsY0FBYyxxQ0FBcUMsdUJBQXVCLFNBQVMsWUFBWSwwQ0FBMEMsdUJBQXVCLFNBQVMsS0FBSywyQkFBMkIsY0FBYywwQ0FBMEMsdUJBQXVCLFNBQVMsWUFBWSxxQ0FBcUMsdUJBQXVCLFNBQVMsS0FBSyxnQkFBZ0Isc0JBQXNCLHVDQUF1QywrQ0FBK0MsNEJBQTRCLHFCQUFxQiwwQkFBMEIsS0FBSyxxQkFBcUIsc0JBQXNCLDBCQUEwQix3QkFBd0IsS0FBSyxjQUFjLHFCQUFxQixLQUFLLHFCQUFxQixzQkFBc0IsK0JBQStCLHFCQUFxQixxQkFBcUIsS0FBSyxzQ0FBc0Msb0JBQW9CLHVCQUF1QixxQkFBcUIscUJBQXFCLEtBQUssaUJBQWlCLHFCQUFxQix5QkFBeUIsK0NBQStDLHFCQUFxQiwwQkFBMEIsd0JBQXdCLEtBQUssdUJBQXVCLCtDQUErQyxLQUFLLHlCQUF5QixzQkFBc0IsK0JBQStCLHFCQUFxQixLQUFLLG1EQUFtRCx5QkFBeUIsMEJBQTBCLFNBQVMsS0FBSyxPQUFPLDJGQUEyRixVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0seUNBQXlDLHNCQUFzQixnQ0FBZ0MsS0FBSyw0QkFBNEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsS0FBSyw2QkFBNkIsMkJBQTJCLG9CQUFvQixtQkFBbUIsS0FBSyx5QkFBeUIsa0JBQWtCLDJCQUEyQix5QkFBeUIscUJBQXFCLHNCQUFzQiwrQ0FBK0MsK0NBQStDLHNCQUFzQiwrQkFBK0IsS0FBSyxrQkFBa0Isa0JBQWtCLDJCQUEyQix5QkFBeUIscUJBQXFCLHNCQUFzQiwrQ0FBK0MsK0NBQStDLHNCQUFzQiwrQkFBK0IsS0FBSyxtQkFBbUIsbUJBQW1CLGVBQWUscUNBQXFDLDRCQUE0QixtQkFBbUIsS0FBSyxvQkFBb0IsZUFBZSxtQkFBbUIsaUNBQWlDLDZCQUE2QixLQUFLLDZCQUE2QixvQkFBb0IsS0FBSywwQkFBMEIsY0FBYyxxQ0FBcUMsdUJBQXVCLFNBQVMsWUFBWSwwQ0FBMEMsdUJBQXVCLFNBQVMsS0FBSywyQkFBMkIsY0FBYywwQ0FBMEMsdUJBQXVCLFNBQVMsWUFBWSxxQ0FBcUMsdUJBQXVCLFNBQVMsS0FBSyxnQkFBZ0Isc0JBQXNCLHVDQUF1QywrQ0FBK0MsNEJBQTRCLHFCQUFxQiwwQkFBMEIsS0FBSyxxQkFBcUIsc0JBQXNCLDBCQUEwQix3QkFBd0IsS0FBSyxjQUFjLHFCQUFxQixLQUFLLHFCQUFxQixzQkFBc0IsK0JBQStCLHFCQUFxQixxQkFBcUIsS0FBSyxzQ0FBc0Msb0JBQW9CLHVCQUF1QixxQkFBcUIscUJBQXFCLEtBQUssaUJBQWlCLHFCQUFxQix5QkFBeUIsK0NBQStDLHFCQUFxQiwwQkFBMEIsd0JBQXdCLEtBQUssdUJBQXVCLCtDQUErQyxLQUFLLHlCQUF5QixzQkFBc0IsK0JBQStCLHFCQUFxQixLQUFLLG1EQUFtRCx5QkFBeUIsMEJBQTBCLFNBQVMsS0FBSyxtQkFBbUI7QUFDLzRNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCw0Q0FBNEMsaUNBQWlDLDJDQUEyQyxnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxnQ0FBZ0MsOEJBQThCLEtBQUssV0FBVyxrQkFBa0IsbUJBQW1CLCtCQUErQixnQ0FBZ0MsS0FBSyxvQkFBb0IscUJBQXFCLEtBQUssa0JBQWtCLHlCQUF5QixzQkFBc0IsNENBQTRDLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLG9CQUFvQiwrQ0FBK0MsS0FBSyxpQkFBaUIsK0NBQStDLHNCQUFzQix5QkFBeUIsS0FBSyx3QkFBd0IscUJBQXFCLHVCQUF1QixzQkFBc0IsK0JBQStCLDRCQUE0QixxQkFBcUIsS0FBSyx5QkFBeUIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsbURBQW1ELDRCQUE0QixLQUFLLCtCQUErQixxQkFBcUIsb0JBQW9CLEtBQUssaUNBQWlDLHNCQUFzQixLQUFLLHFCQUFxQixzQkFBc0IsK0JBQStCLGdDQUFnQyx5QkFBeUIseUJBQXlCLEtBQUssb0JBQW9CLHNCQUFzQixzQkFBc0IsS0FBSyx1QkFBdUIsbUNBQW1DLEtBQUsscUJBQXFCLG9CQUFvQixLQUFLLHVCQUF1QixvQkFBb0IscUJBQXFCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLHFCQUFxQixLQUFLLDJCQUEyQix5QkFBeUIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsK0NBQStDLDJCQUEyQixLQUFLLHdCQUF3QixvQkFBb0Isd0JBQXdCLHlCQUF5QixzQkFBc0IsK0JBQStCLHNCQUFzQix5QkFBeUIsS0FBSywrQkFBK0Isb0JBQW9CLHdCQUF3Qix5QkFBeUIsc0JBQXNCLCtCQUErQixxQkFBcUIseUJBQXlCLHFCQUFxQixLQUFLLDZCQUE2Qix5Q0FBeUMsS0FBSyxtQ0FBbUMseUNBQXlDLEtBQUssdUJBQXVCLG9CQUFvQixxQkFBcUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsS0FBSyw4QkFBOEIsb0JBQW9CLHlCQUF5Qiw4QkFBOEIsS0FBSyx3QkFBd0IscUJBQXFCLHNCQUFzQix3QkFBd0IsS0FBSywwQkFBMEIsK0NBQStDLHdCQUF3QixLQUFLLDhDQUE4Qyx1QkFBdUIsS0FBSyxxQkFBcUIsK0JBQStCLHNCQUFzQixzQkFBc0Isd0JBQXdCLEtBQUsscUJBQXFCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHdCQUF3QiwrQ0FBK0MscUJBQXFCLDRCQUE0QixxQkFBcUIsS0FBSyxnREFBZ0Qsa0JBQWtCLGlCQUFpQiwyQkFBMkIsS0FBSyxvQkFBb0Isd0JBQXdCLDZCQUE2QixtQkFBbUIsc0JBQXNCLHlDQUF5QyxxQkFBcUIsNkJBQTZCLDJCQUEyQixLQUFLLHNCQUFzQixvQkFBb0IsMkJBQTJCLGlCQUFpQixrQkFBa0Isb0JBQW9CLHFCQUFxQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixLQUFLLGdDQUFnQyxnQ0FBZ0MsS0FBSyx1Q0FBdUMsK0JBQStCLHFDQUFxQyxLQUFLLDZCQUE2QixvQkFBb0IsS0FBSyxtQkFBbUIsMkJBQTJCLHFCQUFxQixvQkFBb0Isa0NBQWtDLHVCQUF1QiwyQkFBMkIsOElBQThJLEtBQUssaUJBQWlCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLEtBQUssbURBQW1ELG1DQUFtQywwQkFBMEIsU0FBUyxLQUFLLG1EQUFtRCxrQkFBa0IsbUNBQW1DLFNBQVMscUJBQXFCLHdCQUF3Qix5QkFBeUIsU0FBUyw0QkFBNEIsd0JBQXdCLGdDQUFnQyxvQ0FBb0MseUNBQXlDLDZCQUE2QixTQUFTLDZCQUE2Qix3QkFBd0IsMkJBQTJCLDBCQUEwQixnQ0FBZ0Msb0NBQW9DLDhCQUE4QiwyQkFBMkIsU0FBUyxtQ0FBbUMsMEJBQTBCLHlCQUF5QixTQUFTLGtDQUFrQyw2QkFBNkIsU0FBUyx3Q0FBd0MsMEJBQTBCLFNBQVMscUNBQXFDLDJCQUEyQixTQUFTLDRCQUE0QiwwQkFBMEIsNEJBQTRCLFNBQVMsdUNBQXVDLCtCQUErQix1QkFBdUIseUJBQXlCLHdCQUF3QixtREFBbUQsMEJBQTBCLG1DQUFtQyxvQ0FBb0MsU0FBUyxvREFBb0Qsd0JBQXdCLDBCQUEwQiwyQ0FBMkMseUNBQXlDLG1EQUFtRCw2QkFBNkIsU0FBUywrQkFBK0Isd0JBQXdCLHdCQUF3QixtREFBbUQsMEJBQTBCLG9DQUFvQyxTQUFTLCtCQUErQix5QkFBeUIsbURBQW1ELHlCQUF5QiwyQkFBMkIseUJBQXlCLHlCQUF5QixxQ0FBcUMsNEJBQTRCLFNBQVMscUNBQXFDLG1DQUFtQyxTQUFTLEtBQUssT0FBTyx3RkFBd0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFB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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBdUQ7QUFDdkQ7QUFDQSwyREFBVTtBQUNWLDBEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2RpYWxvZ0JveC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdkJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Rhc2tQYWdlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvZGlhbG9nQm94LmNzcz9lN2FjIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzPzU2ZTIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Rhc2tQYWdlLmNzcz9iZDk3Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2RpYWxvZ0JveC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL25hdkJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm1Db250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXJPcGVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lckNsb3NlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3RGb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDMwdm1heDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Rm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA3MHZtaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1PcGVuIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZtaW4pO1xcclxcbiAgICBhbmltYXRpb246IHBvcGluIDFzO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNsb3NlIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9wb3V0IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb25EZXRhaWxzIHtcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9waW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSg1dm1pbik7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9wb3V0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDV2bWluKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VJbWFnZSB7XFxyXFxuICAgIGhlaWdodDogNXZtaW47XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbm1haW4gPiBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcbmlucHV0Om5vdCguZG9uZVRhc2tSYWRpbyksIHNlbGVjdHtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb25EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLm5ld1Byb2plY3RGb3JtIHtcXHJcXG4gICAgICAgIHdpZHRoOiA3MHZtaW47XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaWFsb2dCb3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixNQUFNO0lBQ04sNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxNQUFNO0lBQ04sVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ29udGFpbmVyT3BlbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXJDbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMCU7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAzMHZtYXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0Zvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogNzB2bWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtT3BlbiB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2bWluKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BpbiAxcztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DbG9zZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBhbmltYXRpb246IHBvcG91dCAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uRGV0YWlscyB7XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoNXZtaW4pO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSg1dm1pbik7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDV2bWluO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluID4gZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5pbnB1dDpub3QoLmRvbmVUYXNrUmFkaW8pLCBzZWxlY3R7XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC5uZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogNzB2bWluO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0xOiByZ2IoMTk2LCAxMTIsIDE5Nik7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMjogI0MyOTFEOTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0zOiByZ2IoMTcwLCA4MywgMTcwKTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS00OiBwdXJwbGU7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNTogI0U4Q0ZGMztcXHJcXG4gICAgLS1saWdodC1zaGFkZS02OiAjRDZCNUU1O1xcclxcbiAgICAtLXJhZGlvLWJ1dHRvbjogI2M0NzBjNDtcXHJcXG4gICAgLS1jb250ZW50LWJnOiAjRkNGQ0ZDO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXJyZWRDb250ZW50IHtcXHJcXG4gICAgZmlsdGVyOmJsdXIoMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0TW9kZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMik7XFxyXFxuICAgIHdpZHRoOiA0MHZtaW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAydm1pbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmaWNpYWxIZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vZmZpY2lhbEhlYWRlciA+IGltZyB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItcHJvamVjdC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkZvbGRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVGb2xkZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhckljb24ge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbXMtbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0gPiBzcGFuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZVByb2plY3Qge1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgPiAucmVtb3ZlUHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdCB7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXHJcXG4gICAgYm90dG9tOiAyZW07XFxyXFxuICAgIHdpZHRoOiAzMHZtaW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGFyayBtb2RlICovXFxyXFxuaW5wdXRbdHlwZT1jaGVja2JveF17XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGVMYWJlbCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxyXFxuICAgIHdpZHRoOiAzZW07XFxyXFxuICAgIGhlaWdodDogMS43ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5tb2RlTGFiZWw6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDNweDtcXHJcXG4gICAgbGVmdDogM3B4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5tb2RlTGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5tb2RlTGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuLm1vZGVMYWJlbDphY3RpdmU6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuIC5kYXJrTW9kZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZDO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2QmFyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDYwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogM2VtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnZtaW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAxdm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgICAgIHdpZHRoOiA1dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIgPiBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDV2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3QsIC5uZXdQcm9qZWN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlck1lbnUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGlzcGxheVByb2plY3RMaXN0TW9iaWxlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSA+IGhlYWRlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGhlaWdodDogNGVtO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAyNXB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0TW9iaWxlOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXZCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJ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QUN6STs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsNEJBQTRCO1FBQzVCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0NBQXNDO1FBQ3RDLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QyxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLHNDQUFzQztRQUN0QyxhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMTogcmdiKDE5NiwgMTEyLCAxOTYpO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTI6ICNDMjkxRDk7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMzogcmdiKDE3MCwgODMsIDE3MCk7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNDogcHVycGxlO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTU6ICNFOENGRjM7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNjogI0Q2QjVFNTtcXHJcXG4gICAgLS1yYWRpby1idXR0b246ICNjNDcwYzQ7XFxyXFxuICAgIC0tY29udGVudC1iZzogI0ZDRkNGQztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZyk7XFxyXFxufVxcclxcblxcclxcbi5ibHVycmVkQ29udGVudCB7XFxyXFxuICAgIGZpbHRlcjpibHVyKDFweCk7XFxyXFxufVxcclxcblxcclxcbi5saWdodE1vZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTIpO1xcclxcbiAgICB3aWR0aDogNDB2bWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFyQ29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMnZtaW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLXByb2plY3QtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZGb2xkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlRm9sZGVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJJY29uIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zLW1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtID4gc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVQcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyID4gLnJlbW92ZVByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3Qge1xcclxcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAgIGJvdHRvbTogMmVtO1xcclxcbiAgICB3aWR0aDogMzB2bWluO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGhlaWdodDogM2VtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIGRhcmsgbW9kZSAqL1xcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb2RlTGFiZWwge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcclxcbiAgICB3aWR0aDogM2VtO1xcclxcbiAgICBoZWlnaHQ6IDEuN2VtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubW9kZUxhYmVsOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAzcHg7XFxyXFxuICAgIGxlZnQ6IDNweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWQgKyAubW9kZUxhYmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWQgKyAubW9kZUxhYmVsOjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcbi5tb2RlTGFiZWw6YWN0aXZlOmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbiAuZGFya01vZGV7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQztcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XFxyXFxuICAgIC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdkJhciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2QmFyQ29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiA2MHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vZmZpY2lhbEhlYWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDJ2bWluO1xcclxcbiAgICAgICAgcGFkZGluZzogMXZtaW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyID4gaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogNXZtaW47XFxyXFxuICAgICAgICB3aWR0aDogNXZtaW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyID4gaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1saXN0LCAubmV3UHJvamVjdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oYW1idXJnZXItcHJvamVjdC1saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oYW1idXJnZXJNZW51IHtcXHJcXG4gICAgICAgIGhlaWdodDogNXZtaW47XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUgPiBoZWFkZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3UHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZFByb2plY3RNb2JpbGUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMjVweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdE1vYmlsZTpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kaXJlY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tQYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2UgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlciA+IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzayB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFzazpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICAgIGhlaWdodDogMi41ZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3QsIC5kb25lTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Xb3JrRGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtJbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2ssIC5kb25lVGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTYpO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxvd1RvZG9UYXNrIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtVG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaFRvZG9UYXNrIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UYXNrOmhvdmVyLCAuZG9uZVRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4sIC5jb21wbGV0ZWREaXZNYWluIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQge1xcclxcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZVRhc2tSYWRpbyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1yYWRpby1idXR0b24pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkRGl2TWFpbiA+IHNwYW4ge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZTZXR0aW5ncyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4gPiBidXR0b24sIC50b2RvRGl2U2V0dGluZ3MgPiBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiA+IGJ1dHRvbjpob3ZlciwgLnRvZG9EaXZTZXR0aW5ncyA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9JY29uSW1nLCAuZWRpdFRhc2tJbWFnZSwgLmRlbGV0ZVRhc2tJbWFnZSB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC5kaXJlY3Rpb25zIHtcXHJcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1pdGVtLW1vYmlsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wcm9qZWN0LWl0ZW0tbW9iaWxlID4gc3BhbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlbW92ZVByb2plY3RNb2JpbGUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgIC5wcm9qZWN0LWl0ZW0tbW9iaWxlOmhvdmVyID4gLnJlbW92ZVByb2plY3RNb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90YXNrUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0dBRUQ7UUFDSyxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpcmVjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBjb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcGFkZGluZzogMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrUGFnZSA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyID4gYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50ID4gaDMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCwgLmRvbmVMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0ID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtEaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDQwdnc7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzaywgLmRvbmVUYXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNik7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG93VG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Ub2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5oaWdoVG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2s6aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiwgLmNvbXBsZXRlZERpdk1haW4ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lVGFza1JhZGlvIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXJhZGlvLWJ1dHRvbik7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWREaXZNYWluID4gc3BhbiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdlNldHRpbmdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiA+IGJ1dHRvbiwgLnRvZG9EaXZTZXR0aW5ncyA+IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uOmhvdmVyLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb0ljb25JbWcsIC5lZGl0VGFza0ltYWdlLCAuZGVsZXRlVGFza0ltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmRpcmVjdGlvbnMge1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWl0ZW0tbW9iaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnByb2plY3QtaXRlbS1tb2JpbGUgPiBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgLnByb2plY3QtaXRlbS1tb2JpbGU6aG92ZXIgPiAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZ0JveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZ0JveC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrUGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tQYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCB0b2RvcyA9IFtdLCBjb21wbGV0ZWQgPSBbXSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudG9kb3MgPSBbXTtcclxuXHRcdGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHRcdFx0XHR0aGlzLnRvZG9zLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgVGFzayh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZSwgdG9kby5wcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29tcGxldGVkID0gW107XHJcblx0XHRpZiAoY29tcGxldGVkLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Y29tcGxldGVkLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBsZXRlZC5wdXNoKFxyXG5cdFx0XHRcdFx0bmV3IFRhc2sodG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWUsIHRvZG8ucHJpb3JpdHkpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWUgPSBudWxsLCBwcmlvcml0eSA9IFwibG93XCIpIHtcclxuXHRcdHRoaXMudGl0bGUgPSBuYW1lO1xyXG5cdFx0aWYgKGRlc2NyaXB0aW9uID09IFwiXCIpIHtcclxuXHRcdFx0ZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uIGlzIGF2YWlsYWJsZVwiO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cdFx0aWYgKGR1ZSA9PSBcIlwiIHx8IGR1ZSA9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuZHVlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmR1ZSA9IGR1ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZGlhbG9nQm94LmNzcyc7XHJcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3NlSWNvbi5zdmcnO1xyXG5pbXBvcnQge2FkZFByb2plY3QsIGFkZFRhc2ssIHVwZGF0ZVRhc2t9IGZyb20gJy4vdGFza1BhZ2UnO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTmV3UHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXJPcGVuJyk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEZvcm0nKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1PcGVuJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dEhlYWRlci5pbm5lclRleHQgPSAnTmV3IHByb2plY3QnO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNsb3NlSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xyXG4gICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcbiAgICBjbG9zZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsb3NlRm9ybShlLCB0cnVlLCBmYWxzZSkpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJGb3JtXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3ROYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInByb2plY3ROYW1lXCIgbmFtZT1cInByb2plY3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9qZWN0IE5hbWVcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZEJ0blwiPkFkZCBQcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPmBcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkUHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tGb3JtKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyT3BlbicpO1xyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld0Zvcm0nKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1PcGVuJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dEhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG4gICAgY2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VJbWFnZSk7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHREdWUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJGb3JtXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tOYW1lXCI+VGl0bGUgPHN1cD4qPC9zdXA+PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBUYXNrIE5hbWVcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGFza0Rlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gKE9wdGlvbmFsKTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrRGVzY3JpcHRpb25cIiBuYW1lPVwidGFza0Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlRW50ZXJlZFwiPkR1ZSBEYXRlIChPcHRpb25hbCkgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVFbnRlcmVkXCIgbmFtZT1cImRhdGVFbnRlcmVkXCIgdmFsdWU9XCIke2RlZmF1bHREdWV9XCIvPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5IChPcHRpb25hbCkgPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkQnRuXCI+QWRkIFRhc2s8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTmV3VGFza0Zvcm0oZSkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xyXG4gICAgY3JlYXRlTmV3VGFza0Zvcm0ocHJvamVjdE5hbWUpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Gb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRhc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRGVzY3JpcHRpb25Cb3godGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyT3BlbicpO1xyXG4gICAgY29uc3QgZGV0YWlsc0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbHNGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld0Zvcm0nKTtcclxuICAgIGRldGFpbHNGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1PcGVuJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0SGVhZGVyLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcbiAgICBjbG9zZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlSW1hZ2UnKTtcclxuICAgIGNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBkZXRhaWxzRm9ybS5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybU9wZW4nLCAnZm9ybUNsb3NlJyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybUNvbnRhaW5lck9wZW4nLCAnZm9ybUNvbnRhaW5lckNsb3NlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxldGVGb3JtLCAxMDAwKTtcclxuICAgIH0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG4gICAgZGV0YWlsc0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZURpc3BsYXkuaW5uZXJUZXh0ID0gJ1RpdGxlJztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcclxuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZVZhbHVlLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZCh0aXRsZVZhbHVlKTtcclxuICAgIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWsxKTtcclxuXHJcbiAgICBjb25zdCBkZXNjRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBkZXNjRGlzcGxheS5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjRGlzcGxheSk7XHJcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjVmFsdWUuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NWYWx1ZSk7XHJcbiAgICBjb25zdCBsaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQobGluZUJyZWFrMik7XHJcblxyXG4gICAgY29uc3QgZHVlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBkdWVEaXNwbGF5LmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGR1ZURpc3BsYXkpO1xyXG4gICAgY29uc3QgZHVlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVWYWx1ZS5pbm5lclRleHQgPSBkdWU7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGR1ZVZhbHVlKTtcclxuICAgIGNvbnN0IGxpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWszKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcHJpb3JpdHlEaXNwbGF5LmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGlzcGxheSk7XHJcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcHJpb3JpdHlWYWx1ZS5pbm5lclRleHQgPSBwcmlvcml0eTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlWYWx1ZSk7XHJcblxyXG4gICAgZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRpdicpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjRGl2KTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EZXRhaWxzJyk7XHJcbiAgICBkZXRhaWxzRm9ybS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNGb3JtKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FZGl0VGFza0Zvcm0ocHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkge1xyXG4gICAgY3JlYXRlTmV3VGFza0Zvcm0ocHJvamVjdE5hbWUpO1xyXG4gICAgXHJcbiAgICAvKiBBZGQgYWxsIGV4aXN0aW5nIGluZm9ybWF0aW9ucyAqL1xyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWUnKTtcclxuICAgIHRhc2tOYW1lLnZhbHVlID0gdGl0bGU7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGVFbnRlcmVkJyk7XHJcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IGR1ZTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgdGFza1ByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XHJcblxyXG4gICAgLyogUmVuYW1lIEJ1dHRvbiBuYW1lICovXHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ0bicpO1xyXG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIlNhdmUgVGFza1wiO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdXBkYXRlVGFzayhlLCB0aXRsZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm0oZSwgaXNDbG9zZVByb2plY3Q9ZmFsc2UsIGlzQ2xvc2VUYXNrPXRydWUpIHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGlzQ2xvc2VQcm9qZWN0ID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybScpO1xyXG4gICAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtT3BlbicsICdmb3JtQ2xvc2UnKTtcclxuICAgIH0gZWxzZSBpZiAoaXNDbG9zZVRhc2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0Zvcm0nKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVwbGFjZSgnZm9ybU9wZW4nLCAnZm9ybUNsb3NlJyk7XHJcbiAgICB9XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtQ29udGFpbmVyT3BlbicsICdmb3JtQ29udGFpbmVyQ2xvc2UnKTtcclxuICAgIHNldFRpbWVvdXQoZGVsZXRlRm9ybSwgMTAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7b3Blbk5ld1Byb2plY3RGb3JtLCBvcGVuTmV3VGFza0Zvcm0sXHJcbiAgICAgICAgb3BlbkRlc2NyaXB0aW9uQm94LCBvcGVuRWRpdFRhc2tGb3JtLFxyXG4gICAgICAgIGNsb3NlRm9ybX07XHJcblxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9uYXZCYXIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZGlhbG9nQm94LmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvLnBuZyc7XHJcbmltcG9ydCBoYW1idXJnZXJNZW51SWNvbiBmcm9tICcuLi9hc3NldHMvaGFtYnVyZ2VySWNvbi5wbmcnO1xyXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJy4uL2Fzc2V0cy9jbG9zZUljb24uc3ZnJztcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzIH0gZnJvbSAnLi90YXNrUGFnZS5qcyc7XHJcbmltcG9ydCB7XHJcblx0Z2V0TG9jYWxTdG9yYWdlLFxyXG5cdHNldExvY2FsU3RvcmFnZSxcclxuXHRyZW1vdmVMb2NhbFN0b3JhZ2UsXHJcbn0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c0Zyb21NZW51KCkge1xyXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuXHRjb25zdCBtZW51RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudURpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5UHJvamVjdExpc3RNb2JpbGUnKTtcclxuXHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0Y29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHR0ZXh0SGVhZGVyLmlubmVyVGV4dCA9ICdQcm9qZWN0IExpc3QnO1xyXG5cdGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcblx0Y29uc3QgY2xvc2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGNsb3NlSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xyXG5cdGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG5cdGNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKG1lbnVEaWFsb2cpO1xyXG5cdH0pO1xyXG5cdGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcclxuXHRtZW51RGlhbG9nLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG5cdGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RNb2JpbGUnKTtcclxuXHRjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0YWRkUHJvamVjdC5pbm5lclRleHQgPSAnQWRkIE5ldyBQcm9qZWN0JztcclxuXHRhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RNb2JpbGUnKTtcclxuXHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xyXG5cdG1lbnVEaWFsb2cuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcblxyXG5cdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHByb2plY3RJdGVtcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW1zLW1vYmlsZScpO1xyXG5cdG1lbnVEaWFsb2cuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1zKTtcclxuXHRjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaWFsb2cpO1xyXG5cclxuXHRsb2FkUHJvamVjdHModHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TW9kZSgpIHtcclxuXHQvLyBjb25zdCBnZXRTdHlsZSA9IChlbGVtZW50LCBzdHlsZSkgPT5cclxuXHQvLyBcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGUpO1xyXG5cdGNvbnN0IGxpZ2h0TW9kZSA9IHtcclxuXHRcdCdsaWdodC1zaGFkZS0xJzogJ3JnYigxOTYsIDExMiwgMTk2KScsXHJcblx0XHQnbGlnaHQtc2hhZGUtMic6ICcjQzI5MUQ5JyxcclxuXHRcdCdsaWdodC1zaGFkZS0zJzogJ3JnYigxNzAsIDgzLCAxNzApJyxcclxuXHRcdCdsaWdodC1zaGFkZS00JzogJ3B1cnBsZScsXHJcblx0XHQnbGlnaHQtc2hhZGUtNSc6ICcjRThDRkYzJyxcclxuXHRcdCdsaWdodC1zaGFkZS02JzogJyNENkI1RTUnLFxyXG5cdFx0J3JhZGlvLWJ1dHRvbic6ICcjYzQ3MGM0JyxcclxuXHRcdCdjb250ZW50LWJnJzogJyNGQ0ZDRkMnLFxyXG5cdH07XHJcblx0Ly8gb3ZlcnJpZGUgc3R5bGVzIGFyZSBoZXJlXHJcblx0Y29uc3QgZGFya01vZGUgPSB7XHJcblx0XHQnbGlnaHQtc2hhZGUtMSc6ICcjRUFFQUVBJyxcclxuXHRcdCdsaWdodC1zaGFkZS0yJzogJyNDNUM1QzUnLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTMnOiAnIzhEOEQ4RCcsXHJcblx0XHQnbGlnaHQtc2hhZGUtNCc6ICdncmV5JyxcclxuXHRcdCdsaWdodC1zaGFkZS01JzogJyNDNUM1QzUnLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTYnOiAnbGlnaHRncmV5JyxcclxuXHRcdCdyYWRpby1idXR0b24nOiAnI2JsYWNrJyxcclxuXHRcdCdjb250ZW50LWJnJzogJyMzMzMzMzMnLFxyXG5cdH07XHJcblx0Y29uc3QgdHJhbnNmb3JtS2V5ID0gKGtleSkgPT5cclxuXHRcdCctLScgKyBrZXkucmVwbGFjZSgvKFtBLVpdKS8sICctJDEnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlQ29sb3JzID0gKGNvbG9ycykgPT4ge1xyXG5cdFx0T2JqZWN0LmtleXMoY29sb3JzKS5tYXAoKGtleSkgPT4ge1xyXG5cdFx0XHRyb290LnN0eWxlLnNldFByb3BlcnR5KHRyYW5zZm9ybUtleShrZXkpLCBjb2xvcnNba2V5XSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT10aGVtZV0nKTtcclxuXHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG5cdFx0dGFyZ2V0LmNoZWNrZWQgPyBjaGFuZ2VDb2xvcnMoZGFya01vZGUpIDogY2hhbmdlQ29sb3JzKGxpZ2h0TW9kZSk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGlzTW9kZVNldCA9IChrZXkpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgIT0gbnVsbDtcclxuXHJcblx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuXHRcdGlmICh0YXJnZXQuY2hlY2tlZCkge1xyXG5cdFx0XHRjaGFuZ2VDb2xvcnMoZGFya01vZGUpO1xyXG5cdFx0XHRzZXRMb2NhbFN0b3JhZ2UoJ21vZGUnLCAnZGFya01vZGUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNoYW5nZUNvbG9ycyhsaWdodE1vZGUpO1xyXG5cdFx0XHRzZXRMb2NhbFN0b3JhZ2UoJ21vZGUnLCAnbGlnaHRNb2RlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGlmICghaXNNb2RlU2V0KCdtb2RlJykpIHNldExvY2FsU3RvcmFnZSgnbW9kZScsICdsaWdodE1vZGUnKTtcclxuXHJcblx0aWYgKGdldExvY2FsU3RvcmFnZSgnbW9kZScpID09PSAnbGlnaHRNb2RlJykge1xyXG5cdFx0Y2hlY2tib3gucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblx0XHRjaGFuZ2VDb2xvcnMobGlnaHRNb2RlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xyXG5cdFx0Y2hhbmdlQ29sb3JzKGRhcmtNb2RlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWROYXZCYXIoKSB7XHJcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCduYXZCYXInKTtcclxuXHRkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJuYXZCYXJDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmljaWFsSGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMj5Ub2RvTGlzdDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlci1wcm9qZWN0LWxpc3RcIj48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XHJcbiAgICAgICAgICAgIDxwPk15IFByb2plY3RzPC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWl0ZW1zXCI+PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3UHJvamVjdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkUHJvamVjdFwiPkFkZCBOZXcgUHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRsb2dvSW1hZ2UuYWx0ID0gJ1BpY3R1cmUgb2YgT2ZmY2lhbCBsb2dvJztcclxuXHRsb2dvSW1hZ2Uuc3JjID0gbG9nbztcclxuXHJcblx0Y29uc3Qgb2ZmaWNpYWxIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmaWNpYWxIZWFkZXInKTtcclxuXHRvZmZpY2lhbEhlYWRlci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xyXG5cclxuXHRjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3QnKTtcclxuXHRjb25zdCBtZW51SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRtZW51SW1hZ2Uuc3JjID0gaGFtYnVyZ2VyTWVudUljb247XHJcblx0bWVudUltYWdlLmFsdCA9ICdIYW1idXJnZXIgTWVudSBwaWN0dXJlJztcclxuXHRtZW51SW1hZ2UuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyTWVudScpO1xyXG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcclxuXHRoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3RzRnJvbU1lbnUpO1xyXG5cdGxvYWRQcm9qZWN0cygpO1xyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkTmF2QmFyLCBhcHBseU1vZGUgfTtcclxuIiwiZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcblx0aWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShrZXkpIHtcblx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMb2NhbFN0b3JhZ2Uoa2V5KSB7XG5cdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBbXSk7XG59XG5cbmV4cG9ydCB7c2V0TG9jYWxTdG9yYWdlLCBnZXRMb2NhbFN0b3JhZ2UsIHJlbW92ZUxvY2FsU3RvcmFnZX07IiwiaW1wb3J0IFwiLi4vc3R5bGVzL3Rhc2tQYWdlLmNzc1wiO1xyXG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2FkZC5wbmdcIjtcclxuaW1wb3J0IGluZm9JY29uIGZyb20gXCIuLi9hc3NldHMvaW5mb0ljb24ucG5nXCI7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vYXNzZXRzL2VkaXRCdG4ucG5nXCI7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi9hc3NldHMvZGVsZXRlQnRuLnBuZ1wiO1xyXG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL3RyYXNoLWNhbi5wbmdcIjtcclxuaW1wb3J0IGNvbXBsZXRlZFRhc2tQaWMgZnJvbSBcIi4uL2Fzc2V0cy9jb21wbGV0ZWRUYXNrLmpwZ1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IHtnZXRMb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZSwgcmVtb3ZlTG9jYWxTdG9yYWdlfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQge1xyXG5cdG9wZW5OZXdQcm9qZWN0Rm9ybSxcclxuXHRvcGVuTmV3VGFza0Zvcm0sXHJcblx0b3BlbkRlc2NyaXB0aW9uQm94LFxyXG5cdG9wZW5FZGl0VGFza0Zvcm0sXHJcblx0Y2xvc2VGb3JtLFxyXG59IGZyb20gXCIuL2RpYWxvZ0JveFwiO1xyXG5cclxubGV0IGtleSA9IFwicHJvamVjdExpc3RcIjtcclxuXHJcbmxldCBwcm9qZWN0TGlzdCA9IGdldExvY2FsU3RvcmFnZShcInByb2plY3RMaXN0XCIpO1xyXG5pZiAocHJvamVjdExpc3QgPT0gbnVsbCB8fCAhcHJvamVjdExpc3QpIHtcclxuXHRwcm9qZWN0TGlzdCA9IFtdO1xyXG5cdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuY29uc3Qgc2FtcGxlUHJvamVjdHMgPSBbXHJcblx0e1xyXG5cdFx0bmFtZTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcclxuXHRcdHRvZG9zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCJXb3JrIG9uIFRvRG8gTGlzdFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgQWRkIGEgJ0FkZFRhc2snIGJ1dHRvbiBvbiBPZGluJ3MgVE9ETyBMaXN0IFByb2plY3RgLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCJTdGFydCBzdHVkeWluZyBPT1BcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogYFN0YXJ0IHJlYWRpbmcgT09QIENoYXB0ZXIgZnJvbSBPZGluIFByb2plY3RgLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIlJlYWQgb3RoZXJzIHdlYnNpdGVzXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBGaW5kIGFuZCByZWFkIDIgb2Ygb3RoZXJzIHdlYnNpdGVzIGZyb20gT2RpbidzIGRpc2NvcmRgLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRwcmlvcml0eTogXCJsb3dcIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRjb21wbGV0ZWQ6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBgQWRkIGEgJ0FkZFByb2plY3QnIGJ1dHRvbiBvbiBUb0RvIExpc3RgLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgQWRkIGEgJ0FkZFByb2plY3QnIGJ1dHRvbiBvbiBPZGluJ3MgVE9ETyBMaXN0IFByb2plY3RgLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJXb3JrXCIsXHJcblx0XHR0b2RvczogW10sXHJcblx0XHRjb21wbGV0ZWQ6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIlNlbmQgZW1haWwgdG8gU29uaWFcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogYFdyaXRlIFNvbmlhIGFib3V0IHllc3RlcmRheSdzIHJlZ3Jlc3Npb24gdGVzdCByZXN1bHRzYCxcclxuXHRcdFx0XHRkdWU6IG51bGwsXHJcblx0XHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFzayhwcm9qZWN0LCB0YXNrTmFtZSkge1xyXG5cdGxldCByZXRUYXNrID0gdW5kZWZpbmVkO1xyXG5cclxuXHRwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRhc2spID0+IHtcclxuXHRcdGlmICh0YXNrLnRpdGxlID09IHRhc2tOYW1lKSByZXRUYXNrID0gdGFzaztcclxuXHR9KTtcclxuXHJcblx0aWYgKHJldFRhc2sgIT0gdW5kZWZpbmVkKSByZXR1cm4gcmV0VGFzaztcclxuXHJcblx0cHJvamVjdC5jb21wbGV0ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xyXG5cdFx0aWYgKHRhc2sudGl0bGUgPT0gdGFza05hbWUpIHJldFRhc2sgPSB0YXNrO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmV0VGFzaztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG5cdGxldCByZXRQcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0cmV0UHJvamVjdCA9IHByb2plY3Q7XHJcblx0XHRcdHJldHVybiByZXRQcm9qZWN0O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmV0UHJvamVjdDtcclxufVxyXG5cclxubGV0IGN1cnJlbnRBY3RpdmVGb2xkZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBzZXRGaXJzdEFzQ3VycmVudEZvbGRlcigpIHtcclxuXHQvKiBEZXNrdG9wIHZpZXcgKi9cclxuXHRjb25zdCBkZXNrdG9wSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXNcIik7XHJcblx0aWYgKGRlc2t0b3BJdGVtcy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRUYXNrUGFnZSA9XHJcblx0XHRcdGRlc2t0b3BJdGVtcy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xyXG5cdFx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihkZWZhdWx0VGFza1BhZ2UpO1xyXG5cdH1cclxuXHJcblx0LyogTW9iaWxlIHZpZXcgKi9cclxuXHRjb25zdCBtb2JpbGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0aWYgKG1vYmlsZUl0ZW1zICE9IG51bGwgJiYgbW9iaWxlSXRlbXMuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb25zdCBkZWZhdWx0VGFza1BhZ2UgPSBtb2JpbGVJdGVtcy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0O1xyXG5cdFx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihkZWZhdWx0VGFza1BhZ2UpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudEFjdGl2ZUZvbGRlcihwcm9qZWN0TmFtZSkge1xyXG5cdC8vIGlmIChjdXJyZW50QWN0aXZlRm9sZGVyID09IHByb2plY3ROYW1lKSByZXR1cm47XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtc1wiKTtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXNNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdGlmIChjdXJyZW50QWN0aXZlRm9sZGVyICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0cHJvamVjdEl0ZW1zRGVza3RvcC5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3REZXNrdG9wKSA9PiB7XHJcblx0XHRcdGlmIChwcm9qZWN0RGVza3RvcC5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRcdHByb2plY3REZXNrdG9wLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVGb2xkZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKHByb2plY3RJdGVtc01vYmlsZSAhPSBudWxsKSB7XHJcblx0XHRcdHByb2plY3RJdGVtc01vYmlsZS5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3RNb2JpbGUpID0+IHtcclxuXHRcdFx0XHRpZiAocHJvamVjdE1vYmlsZS5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRcdFx0cHJvamVjdE1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlRm9sZGVyXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGN1cnJlbnRBY3RpdmVGb2xkZXIgPSBwcm9qZWN0TmFtZTtcclxuXHRwcm9qZWN0SXRlbXNEZXNrdG9wLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdERlc2t0b3ApID0+IHtcclxuXHRcdGlmIChwcm9qZWN0RGVza3RvcC5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRwcm9qZWN0RGVza3RvcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlRm9sZGVyXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmIChwcm9qZWN0SXRlbXNNb2JpbGUgIT0gbnVsbCkge1xyXG5cdFx0cHJvamVjdEl0ZW1zTW9iaWxlLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdE1vYmlsZSkgPT4ge1xyXG5cdFx0XHRpZiAocHJvamVjdE1vYmlsZS5pbm5lclRleHQgPT0gY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdFx0XHRcdHByb2plY3RNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUZvbGRlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNyZWF0ZVRhc2tQYWdlKGN1cnJlbnRBY3RpdmVGb2xkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVGb2xkZXIoZSkge1xyXG5cdHNldEN1cnJlbnRBY3RpdmVGb2xkZXIoZS5zcmNFbGVtZW50LmlubmVyVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvUHJvamVjdExpc3QobmV3UHJvamVjdE5hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSk7XHJcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVGcm9tUHJvamVjdExpc3QobmV3UHJvamVjdCkge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChwcm9qZWN0TGlzdFtpXS5uYW1lID09IG5ld1Byb2plY3QpIHtcclxuXHRcdFx0ZGVsZXRlIHByb2plY3RMaXN0W2ldO1xyXG5cdFx0XHRwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT09IDApIHJlbW92ZUxvY2FsU3RvcmFnZShrZXkpO1xyXG5cdFx0XHRlbHNlIHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0LyogRGlzcGxheSBCbGFuayBQYWdlIHRvIGluZGljYXRlIHN0ZXBzIHRvIHVzZSBUT0RPIExpc3QgKi9cclxuXHRpZiAocHJvamVjdExpc3QubGVuZ3RoID09IDApIHtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblx0XHQvKiBEZWxldGUgcHJldmlvdXMgZXhpc3RlZCBUYXNrIFBhZ2UgRGlzcGxheSAqL1xyXG5cdFx0Y29uc3QgcHJldlRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKTtcclxuXHRcdGlmIChwcmV2VGFza1BhZ2UgIT0gbnVsbCkge1xyXG5cdFx0XHRjb250ZW50LnJlbW92ZUNoaWxkKHByZXZUYXNrUGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zLW1vYmlsZVwiKTtcclxuXHRcdGlmIChwcm9qZWN0SXRlbXMgIT0gbnVsbCkge1xyXG5cdFx0XHRwcm9qZWN0SXRlbXMuaW5uZXJUZXh0ID0gXCJObyBQcm9qZWN0XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblx0XHRoZWFkZXIuaW5uZXJUZXh0ID0gXCJQbGVhc2UgQWRkIE5ldyBQcm9qZWN0IEZpcnN0XCI7XHJcblxyXG5cdFx0ZGlyZWN0aW9ucy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdFx0ZGlyZWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uc1wiKTtcclxuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9ucyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChuZXdMaXN0SXRlbSkge1xyXG5cdG5ld0xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVGb2xkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVFdmVudChwcm9qZWN0KSB7XHJcblx0cHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlRm9sZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtc1wiKTtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXNNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5pbm5lclRleHQ7XHJcblxyXG5cdGlmIChjdXJyZW50QWN0aXZlRm9sZGVyID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRzZXRGaXJzdEFzQ3VycmVudEZvbGRlcigpO1xyXG5cdH1cclxuXHRwcm9qZWN0SXRlbXNEZXNrdG9wLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdERlc2t0b3ApID0+IHtcclxuXHRcdGlmIChwcm9qZWN0RGVza3RvcC5pbm5lclRleHQgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0ZGVsZXRlRXZlbnQocHJvamVjdERlc2t0b3ApO1xyXG5cdFx0XHRwcm9qZWN0SXRlbXNEZXNrdG9wLnJlbW92ZUNoaWxkKHByb2plY3REZXNrdG9wKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRpZiAocHJvamVjdEl0ZW1zTW9iaWxlICE9IG51bGwpIHtcclxuXHRcdHByb2plY3RJdGVtc01vYmlsZS5jaGlsZE5vZGVzLmZvckVhY2goKHByb2plY3RNb2JpbGUpID0+IHtcclxuXHRcdFx0aWYgKHByb2plY3RNb2JpbGUuaW5uZXJUZXh0ID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdFx0ZGVsZXRlRXZlbnQocHJvamVjdE1vYmlsZSk7XHJcblx0XHRcdFx0cHJvamVjdEl0ZW1zTW9iaWxlLnJlbW92ZUNoaWxkKHByb2plY3RNb2JpbGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZGVsZXRlRnJvbVByb2plY3RMaXN0KHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QobmFtZSkge1xyXG5cdGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcclxuXHJcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRuZXdQcm9qZWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xyXG5cdG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRyZW1vdmVJbWFnZS5zcmMgPSByZW1vdmVJY29uO1xyXG5cdHJlbW92ZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0XCIpO1xyXG5cdHJlbW92ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcclxuXHJcblx0bmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSW1hZ2UpO1xyXG5cdGFkZEV2ZW50KG5ld0xpc3RJdGVtKTtcclxuXHJcblx0cmV0dXJuIG5ld0xpc3RJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdE1vYmlsZShuYW1lKSB7XHJcblx0Y29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1tb2JpbGVcIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcclxuXHJcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRuZXdQcm9qZWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xyXG5cdG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRyZW1vdmVJbWFnZS5zcmMgPSByZW1vdmVJY29uO1xyXG5cdHJlbW92ZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0TW9iaWxlXCIpO1xyXG5cdHJlbW92ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcclxuXHJcblx0bmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSW1hZ2UpO1xyXG5cdGFkZEV2ZW50KG5ld0xpc3RJdGVtKTtcclxuXHJcblx0cmV0dXJuIG5ld0xpc3RJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KHByb2plY3ROYW1lLCBpc01vYmlsZSA9IGZhbHNlKSB7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zXCIpO1xyXG5cdGNvbnN0IG5ld0xpc3RJdGVtID0gZGlzcGxheVByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XHJcblxyXG5cdC8qIFNldCBOZXcgUHJvamVjdCBhcyBDdXJyZW50IFByb2plY3QgKi9cclxuXHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdE1vYmlsZShwcm9qZWN0TmFtZSkge1xyXG5cdGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0Y29uc3QgbmV3TGlzdEl0ZW0gPSBkaXNwbGF5UHJvamVjdE1vYmlsZShwcm9qZWN0TmFtZSk7XHJcblx0cHJvamVjdEl0ZW1zPy5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XHJcblxyXG5cdC8qIFNldCBOZXcgUHJvamVjdCBhcyBDdXJyZW50IFByb2plY3QgKi9cclxuXHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcclxuXHQvKiBBZGQgdG8gc3RvcmFnZSAqL1xyXG5cdGFkZFRvUHJvamVjdExpc3QocHJvamVjdE5hbWUudmFsdWUpO1xyXG5cdC8qIEFkZCB0byBET00gKi9cclxuXHRhZGRQcm9qZWN0VG9MaXN0KHByb2plY3ROYW1lLnZhbHVlKTtcclxuXHRhZGRQcm9qZWN0VG9MaXN0TW9iaWxlKHByb2plY3ROYW1lLnZhbHVlKTtcclxuXHQvLyBjbG9zZUZvcm0obnVsbCwgdHJ1ZSwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoaXNNb2JpbGUgPSBmYWxzZSkge1xyXG5cdGlmIChpc01vYmlsZSA9PSBmYWxzZSAmJiBwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xyXG5cdFx0c2FtcGxlUHJvamVjdHMuZm9yRWFjaCgoc2FtcGxlKSA9PiB7XHJcblx0XHRcdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuXHRcdFx0XHRzYW1wbGUubmFtZSxcclxuXHRcdFx0XHRzYW1wbGUudG9kb3MsXHJcblx0XHRcdFx0c2FtcGxlLmNvbXBsZXRlZFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG5cdFx0fSk7XHJcblx0XHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcblx0fVxyXG5cclxuXHRpZiAoaXNNb2JpbGUgPT0gZmFsc2UpIHtcclxuXHRcdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0YWRkUHJvamVjdFRvTGlzdChwcm9qZWN0Lm5hbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcclxuXHRcdG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OZXdQcm9qZWN0Rm9ybSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0YWRkUHJvamVjdFRvTGlzdE1vYmlsZShwcm9qZWN0Lm5hbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdE1vYmlsZVwiKTtcclxuXHRcdG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OZXdQcm9qZWN0Rm9ybSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1cIik7XHJcblxyXG5cdGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XHJcblx0XHRhZGRFdmVudChmb2xkZXIpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKioqKioqIFRhc2sgRnVuY3Rpb25zICoqKioqKiovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tQYWdlKGN1cnJlbnRBY3RpdmVGb2xkZXIpIHtcclxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cdC8qIERlbGV0ZSBwcmV2aW91cyBleGlzdGVkIFBhZ2UgRGlzcGxheSAqL1xyXG5cdGNvbnN0IGRpcmVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpcmVjdGlvbnNcIik7XHJcblx0aWYgKGRpcmVjdGlvbnMgIT0gbnVsbCkge1xyXG5cdFx0Y29udGVudC5yZW1vdmVDaGlsZChkaXJlY3Rpb25zKTtcclxuXHR9XHJcblx0Y29uc3QgcHJldlRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKTtcclxuXHRpZiAocHJldlRhc2tQYWdlICE9IG51bGwpIHtcclxuXHRcdGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldlRhc2tQYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRhc2tQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0YXNrUGFnZS5jbGFzc0xpc3QuYWRkKFwidGFza1BhZ2VcIik7XHJcblx0dGFza1BhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tIZWFkZXJcIj5cclxuICAgICAgICA8YnV0dG9uPkFkZCBOZXcgVGFzazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFza0NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb0xpc3RcIj48L2Rpdj5cclxuICAgICAgICA8aDM+Q29tcGxldGVkIFRhc2tzPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG9uZUxpc3RcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZCh0YXNrUGFnZSk7XHJcblxyXG5cdGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0hlYWRlclwiKS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG5cdGNvbnN0IGFkZFRhc2sgPSBuZXcgSW1hZ2UoKTtcclxuXHRhZGRUYXNrLnNyYyA9IGFkZEljb247XHJcblx0YWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcclxuXHRhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmV3VGFza0Zvcm0pO1xyXG5cdGFkZEJ0bi5wcmVwZW5kKGFkZFRhc2spO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRBY3RpdmVGb2xkZXI7XHJcblx0Y29uc3QgY3VycmV0Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Y3VycmV0Rm9sZGVyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xyXG5cdHRhc2tQYWdlLnByZXBlbmQoY3VycmV0Rm9sZGVyKTtcclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrVGFza0FzVG9kbyhwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5jb21wbGV0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAocHJvamVjdC5jb21wbGV0ZWRbaV0udGl0bGUgPT0gdGFza05hbWUpIHtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3MucHVzaChcclxuXHRcdFx0XHRcdFx0bmV3IFRhc2soXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0udGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0uZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0uZHVlLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkW2ldLnByaW9yaXR5XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRkZWxldGUgcHJvamVjdC5jb21wbGV0ZWRbaV07XHJcblx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtUYXNrQXNDb21wbGV0ZWQocHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XHJcblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAocHJvamVjdC50b2Rvc1tpXS50aXRsZSA9PSB0YXNrTmFtZSkge1xyXG5cdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWQucHVzaChcclxuXHRcdFx0XHRcdFx0bmV3IFRhc2soXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS50aXRsZSxcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0uZHVlLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0ucHJpb3JpdHlcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBwcm9qZWN0LnRvZG9zW2ldO1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QoXHJcblx0cHJvamVjdE5hbWUsXHJcblx0dGFza05hbWUsXHJcblx0dGFza0Rlc2NyaXB0aW9uLFxyXG5cdHRhc2tEdWUsXHJcblx0dGFza1ByaW9yaXR5LFxyXG5cdGlzVG9kb0l0ZW0gPSB0cnVlXHJcbikge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChwcm9qZWN0TGlzdFtpXS5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGlmIChpc1RvZG9JdGVtID09IHRydWUpIHtcclxuXHRcdFx0XHRwcm9qZWN0TGlzdFtpXS50b2Rvcy5wdXNoKFxyXG5cdFx0XHRcdFx0bmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHJvamVjdExpc3RbaV0uY29tcGxldGVkLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgVGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHkpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJblByb2plY3QoXHJcblx0cHJvamVjdE5hbWUsXHJcblx0b2xkVGl0bGUsXHJcblx0dGFza05hbWUsXHJcblx0dGFza0Rlc2NyaXB0aW9uLFxyXG5cdHRhc2tEdWUsXHJcblx0dGFza1ByaW9yaXR5LFxyXG5cdGlzVG9kb0l0ZW0gPSB0cnVlXHJcbikge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHByb2plY3QudG9kb3NbaV0udGl0bGUgPT0gb2xkVGl0bGUpIHtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0udGl0bGUgPSB0YXNrTmFtZTtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0uZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLmR1ZSA9IHRhc2tEdWU7XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrVGl0bGUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0LnRvZG9zW2ldLnRpdGxlID09IHRhc2tUaXRsZSkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHByb2plY3QudG9kb3NbaV07XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT09IDApIHJlbW92ZUxvY2FsU3RvcmFnZShrZXkpO1xyXG5cdGVsc2Ugc2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Y29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xyXG5cdGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NyaXB0aW9uXCIpO1xyXG5cdGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlRW50ZXJlZFwiKTtcclxuXHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xyXG5cclxuXHQvKiBBZGQgdG8gc3RvcmFnZSAqL1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIikuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cdGFkZFRhc2tUb1Byb2plY3QoXHJcblx0XHRwcm9qZWN0TmFtZSxcclxuXHRcdHRhc2tOYW1lLnZhbHVlLFxyXG5cdFx0dGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxyXG5cdFx0dGFza0R1ZURhdGUudmFsdWUsXHJcblx0XHR0YXNrUHJpb3JpdHkudmFsdWVcclxuXHQpO1xyXG5cclxuXHR0YXNrTmFtZS52YWx1ZSA9IFwiXCI7XHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVE9ETyh0b2RvTGlzdCwgdG9kb0Rpdikge1xyXG5cdHRvZG9MaXN0LnJlbW92ZUNoaWxkKHRvZG9EaXYpO1xyXG5cdC8qIERlbGV0ZSBGcm9tIHN0b3JhZ2UgKi9cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGUpIHtcclxuXHRjb25zdCB0YXNrTmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIikuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cclxuXHQvKiBDaGVjayBpZiB0aGlzIHRhc2sgaXMgcGVuZGluZyBvciBjb21wbGV0ZWQqL1xyXG5cdGNvbnN0IHRhc2tEaXYgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cdGlmICh0YXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9UYXNrXCIpKSB7XHJcblx0XHRtYXJrVGFza0FzQ29tcGxldGVkKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XHJcblx0fSBlbHNlIGlmICh0YXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhcImRvbmVUYXNrXCIpKSB7XHJcblx0XHRtYXJrVGFza0FzVG9kbyhwcm9qZWN0TmFtZSwgdGFza05hbWUpO1xyXG5cdH1cclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5mbyhlKSB7XHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblx0Y29uc3QgdGFza05hbWUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcclxuXHJcblx0Y29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdGNvbnN0IHRhc2sgPSBnZXRUYXNrKHByb2plY3QsIHRhc2tOYW1lKTtcclxuXHJcblx0aWYgKHRhc2sgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRvcGVuRGVzY3JpcHRpb25Cb3godGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWUsIHRhc2sucHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrKGUsIHRpdGxlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcclxuXHRjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjcmlwdGlvblwiKTtcclxuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZUVudGVyZWRcIik7XHJcblx0Y29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuXHJcblx0LyogVXBkYXRlIHRvIHN0b3JhZ2UgKi9cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHR1cGRhdGVUYXNrSW5Qcm9qZWN0KFxyXG5cdFx0cHJvamVjdE5hbWUsXHJcblx0XHR0aXRsZSxcclxuXHRcdHRhc2tOYW1lLnZhbHVlLFxyXG5cdFx0dGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxyXG5cdFx0dGFza0R1ZURhdGUudmFsdWUsXHJcblx0XHR0YXNrUHJpb3JpdHkudmFsdWVcclxuXHQpO1xyXG5cdGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcblx0Y2xvc2VGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRjb25zdCB0YXNrTmFtZSA9XHJcblx0XHRlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XHJcblxyXG5cdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHRjb25zdCB0YXNrID0gZ2V0VGFzayhwcm9qZWN0LCB0YXNrTmFtZSk7XHJcblxyXG5cdGlmICh0YXNrID09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0b3BlbkVkaXRUYXNrRm9ybShcclxuXHRcdHByb2plY3ROYW1lLFxyXG5cdFx0dGFzay50aXRsZSxcclxuXHRcdHRhc2suZGVzY3JpcHRpb24sXHJcblx0XHR0YXNrLmR1ZSxcclxuXHRcdHRhc2sucHJpb3JpdHlcclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuXHRjb25zdCB0YXNrTmFtZSA9XHJcblx0XHRlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XHJcblxyXG5cdC8qIERlbGV0ZSBmcm9tIHN0b3JhZ2UgKi9cclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRPRE8odG9kb0xpc3QsIHRvZG8pIHtcclxuXHRjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0Y29uc3QgdG9kb0Rpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IHJhZGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cdHJhZGlvQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuXHRyYWRpb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZVN0YXR1cyk7XHJcblx0dG9kb0Rpdk1haW4uYXBwZW5kQ2hpbGQocmFkaW9CdG4pO1xyXG5cdGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xyXG5cdHRvZG9EaXZNYWluLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcblx0Y29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0Y29uc3QgaW5mb0ljb25JbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRpbmZvSWNvbkltZy5zcmMgPSBpbmZvSWNvbjtcclxuXHRpbmZvSWNvbkltZy5hbHQgPSBcIkltYWdlIG9mIEluZm8gSWNvblwiO1xyXG5cdGluZm9JY29uSW1nLmNsYXNzTGlzdC5hZGQoXCJpbmZvSWNvbkltZ1wiKTtcclxuXHRkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5mbyk7XHJcblx0ZGV0YWlscy5hcHBlbmRDaGlsZChpbmZvSWNvbkltZyk7XHJcblx0dG9kb0Rpdk1haW4uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcblx0dG9kb0Rpdk1haW4uY2xhc3NMaXN0LmFkZChcInRvZG9EaXZNYWluXCIpO1xyXG5cdHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdk1haW4pO1xyXG5cclxuXHRjb25zdCB0b2RvRGl2U2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHR0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQocmVtYWluaW5nVGltZSk7XHJcblx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0Y29uc3QgZWRpdFRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGVkaXRUYXNrSW1hZ2Uuc3JjID0gZWRpdEljb247XHJcblx0ZWRpdFRhc2tJbWFnZS5hbHQgPSBcIkVkaXQgZm9yIFRhc2tcIjtcclxuXHRlZGl0VGFza0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJlZGl0VGFza0ltYWdlXCIpO1xyXG5cdGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdFRhc2tJbWFnZSk7XHJcblx0ZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xyXG5cclxuXHR0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcblx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRjb25zdCBkZWxldGVUYXNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRkZWxldGVUYXNrSW1hZ2Uuc3JjID0gZGVsZXRlSWNvbjtcclxuXHRkZWxldGVUYXNrSW1hZ2UuYWx0ID0gXCJEZWVsZXQgdGhlIFRhc2tcIjtcclxuXHRkZWxldGVUYXNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tJbWFnZVwiKTtcclxuXHRkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0ltYWdlKTtcclxuXHRkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xyXG5cclxuXHR0b2RvRGl2U2V0dGluZ3MuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHR0b2RvRGl2U2V0dGluZ3MuY2xhc3NMaXN0LmFkZChcInRvZG9EaXZTZXR0aW5nc1wiKTtcclxuXHJcblx0dG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2U2V0dGluZ3MpO1xyXG5cdHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9UYXNrXCIpO1xyXG5cdHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xyXG5cdFx0Y2FzZSBcImhpZ2hcIjpcclxuXHRcdFx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFRvZG9UYXNrXCIpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJtZWRpdW1cIjpcclxuXHRcdFx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtVG9kb1Rhc2tcIik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG93VG9kb1Rhc2tcIik7XHJcblx0fVxyXG5cdHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29tcGxldGVkKGRvbmVMaXN0LCBjb21wbGV0ZWRUYXNrKSB7XHJcblx0Y29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0Y29uc3QgY29tcGxldGVkRGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0cmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG5cdHJhZGlvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZG9uZVRhc2tSYWRpbyBmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2tcIik7XHJcblx0cmFkaW9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VTdGF0dXMpO1xyXG5cdGNvbXBsZXRlZERpdk1haW4uYXBwZW5kQ2hpbGQocmFkaW9CdG4pO1xyXG5cdGNvbnN0IGNvbXBsZXRlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0Y29tcGxldGVkVGl0bGUuaW5uZXJUZXh0ID0gY29tcGxldGVkVGFzay50aXRsZTtcclxuXHRjb21wbGV0ZWREaXZNYWluLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRpdGxlKTtcclxuXHRjb21wbGV0ZWREaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWREaXZNYWluXCIpO1xyXG5cclxuXHRjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkRGl2TWFpbik7XHJcblx0Y29tcGxldGVkRGl2LmNsYXNzTGlzdC5hZGQoXCJkb25lVGFza1wiKTtcclxuXHRkb25lTGlzdC5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTGlzdFwiKTtcclxuXHRcdFx0Y29uc3QgZG9uZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmVMaXN0XCIpO1xyXG5cclxuXHRcdFx0Ly8gY2xlYXIgcHJldiBlbGVtZW50c1xyXG5cdFx0XHR0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRcdFx0Ly8gdG9kbyBsaXN0XHJcblx0XHRcdGlmIChwcm9qZWN0LnRvZG9zLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0Ly8gZGlzcGxheSBubyB3b3JrIHBpY3R1cmVcclxuXHRcdFx0XHRjb25zdCBub1dvcmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdG5vV29ya0Rpdi5jbGFzc0xpc3QuYWRkKFwibm9Xb3JrRGl2XCIpO1xyXG5cdFx0XHRcdGNvbnN0IG5vV29ya0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdFx0bm9Xb3JrSW1hZ2Uuc3JjID0gY29tcGxldGVkVGFza1BpYztcclxuXHRcdFx0XHRub1dvcmtJbWFnZS5jbGFzc0xpc3QuYWRkKFwibm9Xb3JrSW1hZ2VcIik7XHJcblx0XHRcdFx0bm9Xb3JrRGl2LmFwcGVuZENoaWxkKG5vV29ya0ltYWdlKTtcclxuXHRcdFx0XHRjb25zdCBub1dvcmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRcdFx0bm9Xb3JrVGV4dC5pbm5lclRleHQgPSBcIk5vIHdvcmsgZm9yIHRvZGF5LiBFbmpveSB5b3VyIGRheS5cIjtcclxuXHRcdFx0XHRub1dvcmtEaXYuYXBwZW5kQ2hpbGQobm9Xb3JrVGV4dCk7XHJcblx0XHRcdFx0dG9kb0xpc3QuYXBwZW5kQ2hpbGQobm9Xb3JrRGl2KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBjbGVhciBwcmV2IGVsZW1lbnRzLCBpbiBjYXNlIG9mIG5vIHdvcmsgaW1hZ2UgaXMgaGVyZVxyXG5cdFx0XHRcdHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVRPRE8odG9kb0xpc3QsIHRvZG8pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvbXBsZXRlZCBsaXN0XHJcblx0XHRcdGRvbmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRcdHByb2plY3QuY29tcGxldGVkLmZvckVhY2goKGNvbXBsZXRlZFRhc2spID0+IHtcclxuXHRcdFx0XHRkaXNwbGF5Q29tcGxldGVkKGRvbmVMaXN0LCBjb21wbGV0ZWRUYXNrKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRQcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkVGFzaywgdXBkYXRlVGFzayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtsb2FkTmF2QmFyLCBhcHBseU1vZGV9IGZyb20gJy4vbW9kdWxlcy9uYXZCYXInO1xyXG5cclxubG9hZE5hdkJhcigpO1xyXG5hcHBseU1vZGUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9