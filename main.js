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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ3lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNXNCekQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0F1RDtBQUN2RDtBQUNBLDJEQUFVO0FBQ1YsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvZGlhbG9nQm94LmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbmF2QmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvdGFza1BhZ2UuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9kaWFsb2dCb3guY3NzP2U3YWMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdkJhci5jc3M/NTZlMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvdGFza1BhZ2UuY3NzP2JkOTciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlhbG9nQm94LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvbmF2QmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lck9wZW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ29udGFpbmVyQ2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdEZvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogMzB2bWF4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5uZXdGb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDcwdm1pbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybU9wZW4ge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1dm1pbik7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9waW4gMXM7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2xvc2Uge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwb3BvdXQgMXM7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbkRldGFpbHMge1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDV2bWluKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3BvdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoNXZtaW4pO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiA+IGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuaW5wdXQ6bm90KC5kb25lVGFza1JhZGlvKSwgc2VsZWN0e1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnRuIHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAubmV3UHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgd2lkdGg6IDcwdm1pbjtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RpYWxvZ0JveC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLE1BQU07SUFDTiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE1BQU07SUFDTixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0IsVUFBVTtJQUNkO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm1Db250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXJPcGVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lckNsb3NlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3RGb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDMwdm1heDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Rm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA3MHZtaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1PcGVuIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZtaW4pO1xcclxcbiAgICBhbmltYXRpb246IHBvcGluIDFzO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNsb3NlIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIGFuaW1hdGlvbjogcG9wb3V0IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb25EZXRhaWxzIHtcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9waW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSg1dm1pbik7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9wb3V0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDV2bWluKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VJbWFnZSB7XFxyXFxuICAgIGhlaWdodDogNXZtaW47XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbm1haW4gPiBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcbmlucHV0Om5vdCguZG9uZVRhc2tSYWRpbyksIHNlbGVjdHtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb25EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLm5ld1Byb2plY3RGb3JtIHtcXHJcXG4gICAgICAgIHdpZHRoOiA3MHZtaW47XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTE6IHJnYigxOTYsIDExMiwgMTk2KTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0yOiAjQzI5MUQ5O1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTM6IHJnYigxNzAsIDgzLCAxNzApO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTQ6IHB1cnBsZTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS01OiAjRThDRkYzO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRlLTY6ICNENkI1RTU7XFxyXFxuICAgIC0tcmFkaW8tYnV0dG9uOiAjYzQ3MGM0O1xcclxcbiAgICAtLWNvbnRlbnQtYmc6ICNGQ0ZDRkM7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1cnJlZENvbnRlbnQge1xcclxcbiAgICBmaWx0ZXI6Ymx1cigxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRNb2RlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0yKTtcXHJcXG4gICAgd2lkdGg6IDQwdm1pbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhckNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDJ2bWluO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICByb3ctZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5vZmZpY2lhbEhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmljaWFsSGVhZGVyID4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2Rm9sZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZUZvbGRlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFySWNvbiB7XFxyXFxuICAgIGhlaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0ID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtcy1tb2JpbGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IHNwYW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlUHJvamVjdCB7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcclxcbiAgICBib3R0b206IDJlbTtcXHJcXG4gICAgd2lkdGg6IDMwdm1pbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBoZWlnaHQ6IDNlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkYXJrIG1vZGUgKi9cXHJcXG5pbnB1dFt0eXBlPWNoZWNrYm94XXtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZUxhYmVsIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXHJcXG4gICAgd2lkdGg6IDNlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjdlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm1vZGVMYWJlbDo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogM3B4O1xcclxcbiAgICBsZWZ0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2VkICsgLm1vZGVMYWJlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2VkICsgLm1vZGVMYWJlbDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG4ubW9kZUxhYmVsOmFjdGl2ZTphZnRlciB7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4gLmRhcmtNb2Rle1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xcclxcbiAgICAuZGlzcGxheVByb2plY3RMaXN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZCYXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdkJhckNvbnRlbnQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogNjB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAydm1pbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDF2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vZmZpY2lhbEhlYWRlciA+IGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDV2bWluO1xcclxcbiAgICAgICAgd2lkdGg6IDV2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vZmZpY2lhbEhlYWRlciA+IGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZtaW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtbGlzdCwgLm5ld1Byb2plY3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyLXByb2plY3QtbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyTWVudSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDV2bWluO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kaXNwbGF5UHJvamVjdExpc3RNb2JpbGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMyk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuZGlzcGxheVByb2plY3RMaXN0TW9iaWxlID4gaGVhZGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS01KTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZtaW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld1Byb2plY3RNb2JpbGUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0ZW07XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDI1cHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZFByb2plY3RNb2JpbGU6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdkJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJ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O0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxzQ0FBc0M7UUFDdEMsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUIsc0NBQXNDO1FBQ3RDLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsc0NBQXNDO1FBQ3RDLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0xOiByZ2IoMTk2LCAxMTIsIDE5Nik7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtMjogI0MyOTFEOTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS0zOiByZ2IoMTcwLCA4MywgMTcwKTtcXHJcXG4gICAgLS1saWdodC1zaGFkZS00OiBwdXJwbGU7XFxyXFxuICAgIC0tbGlnaHQtc2hhZGUtNTogI0U4Q0ZGMztcXHJcXG4gICAgLS1saWdodC1zaGFkZS02OiAjRDZCNUU1O1xcclxcbiAgICAtLXJhZGlvLWJ1dHRvbjogI2M0NzBjNDtcXHJcXG4gICAgLS1jb250ZW50LWJnOiAjRkNGQ0ZDO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXJyZWRDb250ZW50IHtcXHJcXG4gICAgZmlsdGVyOmJsdXIoMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0TW9kZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMik7XFxyXFxuICAgIHdpZHRoOiA0MHZtaW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAydm1pbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmaWNpYWxIZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vZmZpY2lhbEhlYWRlciA+IGltZyB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItcHJvamVjdC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkZvbGRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVGb2xkZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJhckljb24ge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbXMtbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1zaGFkZS0zKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0gPiBzcGFuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZVByb2plY3Qge1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgPiAucmVtb3ZlUHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdCB7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXHJcXG4gICAgYm90dG9tOiAyZW07XFxyXFxuICAgIHdpZHRoOiAzMHZtaW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGFyayBtb2RlICovXFxyXFxuaW5wdXRbdHlwZT1jaGVja2JveF17XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGVMYWJlbCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxyXFxuICAgIHdpZHRoOiAzZW07XFxyXFxuICAgIGhlaWdodDogMS43ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5tb2RlTGFiZWw6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDNweDtcXHJcXG4gICAgbGVmdDogM3B4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5tb2RlTGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5tb2RlTGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuLm1vZGVMYWJlbDphY3RpdmU6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuIC5kYXJrTW9kZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZDO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2QmFyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZCYXJDb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDYwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9mZmljaWFsSGVhZGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogM2VtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnZtaW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAxdm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIgPiBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgICAgIHdpZHRoOiA1dm1pbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub2ZmaWNpYWxIZWFkZXIgPiBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDV2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3QsIC5uZXdQcm9qZWN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlci1wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlck1lbnUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dm1pbjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGlzcGxheVByb2plY3RMaXN0TW9iaWxlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTMpO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmRpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZSA+IGhlYWRlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2bWluO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGhlaWdodDogNGVtO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS0xKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAyNXB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0TW9iaWxlOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpcmVjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTUpO1xcclxcbiAgICBjb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1BhZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcGFkZGluZzogMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrUGFnZSA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrSGVhZGVyID4gYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50ID4gaDMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCwgLmRvbmVMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0ID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5ub1dvcmtEaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDQwdnc7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzaywgLmRvbmVUYXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNik7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG93VG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Ub2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5oaWdoVG9kb1Rhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1Rhc2s6aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNoYWRlLTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiwgLmNvbXBsZXRlZERpdk1haW4ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNCk7XFxyXFxufVxcclxcblxcclxcbi5kb25lVGFza1JhZGlvIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXJhZGlvLWJ1dHRvbik7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWREaXZNYWluID4gc3BhbiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdlNldHRpbmdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2TWFpbiA+IGJ1dHRvbiwgLnRvZG9EaXZTZXR0aW5ncyA+IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uOmhvdmVyLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb0ljb25JbWcsIC5lZGl0VGFza0ltYWdlLCAuZGVsZXRlVGFza0ltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmRpcmVjdGlvbnMge1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWl0ZW0tbW9iaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnByb2plY3QtaXRlbS1tb2JpbGUgPiBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgLnByb2plY3QtaXRlbS1tb2JpbGU6aG92ZXIgPiAucmVtb3ZlUHJvamVjdE1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Rhc2tQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtJQUNuQjs7R0FFRDtRQUNLLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGlyZWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtNSk7XFxyXFxuICAgIGNvbG9yOiBwdXJwbGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrUGFnZSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwYWRkaW5nOiAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tQYWdlID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXIgPiBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2sge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2s6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQgPiBoMyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNWVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0LCAuZG9uZUxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcm93LWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3QgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vV29ya0RpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Xb3JrSW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UYXNrLCAuZG9uZVRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS02KTtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxyXFxufVxcclxcblxcclxcbi5sb3dUb2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bVRvZG9UYXNrIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hUb2RvVGFzayB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvVGFzazpob3ZlciwgLmRvbmVUYXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2hhZGUtMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluLCAuY29tcGxldGVkRGl2TWFpbiB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1saWdodC1zaGFkZS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmVUYXNrUmFkaW8ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcmFkaW8tYnV0dG9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZERpdk1haW4gPiBzcGFuIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2U2V0dGluZ3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXZNYWluID4gYnV0dG9uLCAudG9kb0RpdlNldHRpbmdzID4gYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0Rpdk1haW4gPiBidXR0b246aG92ZXIsIC50b2RvRGl2U2V0dGluZ3MgPiBidXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5pbmZvSWNvbkltZywgLmVkaXRUYXNrSW1hZ2UsIC5kZWxldGVUYXNrSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAuZGlyZWN0aW9ucyB7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtaXRlbS1tb2JpbGUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucHJvamVjdC1pdGVtLW1vYmlsZSA+IHNwYW4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yZW1vdmVQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAucHJvamVjdC1pdGVtLW1vYmlsZTpob3ZlciA+IC5yZW1vdmVQcm9qZWN0TW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nQm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nQm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza1BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHRvZG9zID0gW10sIGNvbXBsZXRlZCA9IFtdKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50b2RvcyA9IFtdO1xyXG5cdFx0aWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG5cdFx0XHRcdHRoaXMudG9kb3MucHVzaChcclxuXHRcdFx0XHRcdG5ldyBUYXNrKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlLCB0b2RvLnByaW9yaXR5KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21wbGV0ZWQgPSBbXTtcclxuXHRcdGlmIChjb21wbGV0ZWQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjb21wbGV0ZWQuZm9yRWFjaCgodG9kbykgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tcGxldGVkLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgVGFzayh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZSwgdG9kby5wcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZSA9IG51bGwsIHByaW9yaXR5ID0gXCJsb3dcIikge1xyXG5cdFx0dGhpcy50aXRsZSA9IG5hbWU7XHJcblx0XHRpZiAoZGVzY3JpcHRpb24gPT0gXCJcIikge1xyXG5cdFx0XHRkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gaXMgYXZhaWxhYmxlXCI7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0XHRpZiAoZHVlID09IFwiXCIgfHwgZHVlID09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5kdWUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZHVlID0gZHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9kaWFsb2dCb3guY3NzJztcclxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuLi9hc3NldHMvY2xvc2VJY29uLnN2Zyc7XHJcbmltcG9ydCB7YWRkUHJvamVjdCwgYWRkVGFzaywgdXBkYXRlVGFza30gZnJvbSAnLi90YXNrUGFnZSc7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5OZXdQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lck9wZW4nKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Rm9ybScpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybU9wZW4nKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0SGVhZGVyLmlubmVyVGV4dCA9ICdOZXcgcHJvamVjdCc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcbiAgICBjbG9zZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlSW1hZ2UnKTtcclxuICAgIGNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xvc2VGb3JtKGUsIHRydWUsIGZhbHNlKSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VJbWFnZSk7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8Zm9ybSBjbGFzcz1cIkZvcm1cIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdE5hbWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwicHJvamVjdE5hbWVcIiBuYW1lPVwicHJvamVjdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2plY3QgTmFtZVwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkQnRuXCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Zvcm0ocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXJPcGVuJyk7XHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3Rm9ybScpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybU9wZW4nKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0SGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNsb3NlSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xyXG4gICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcbiAgICBjbG9zZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdER1ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8Zm9ybSBjbGFzcz1cIkZvcm1cIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGFza05hbWVcIj5UaXRsZSA8c3VwPio8L3N1cD48L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwidGFza05hbWVcIiBuYW1lPVwidGFza05hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFRhc2sgTmFtZVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrRGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbiAoT3B0aW9uYWwpPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tEZXNjcmlwdGlvblwiIG5hbWU9XCJ0YXNrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIERlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVFbnRlcmVkXCI+RHVlIERhdGUgKE9wdGlvbmFsKSA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZUVudGVyZWRcIiBuYW1lPVwiZGF0ZUVudGVyZWRcIiB2YWx1ZT1cIiR7ZGVmYXVsdER1ZX1cIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHkgKE9wdGlvbmFsKSA8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGRCdG5cIj5BZGQgVGFzazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5gXHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5OZXdUYXNrRm9ybShlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybShwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5EZXNjcmlwdGlvbkJveCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXJPcGVuJyk7XHJcbiAgICBjb25zdCBkZXRhaWxzRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGV0YWlsc0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3Rm9ybScpO1xyXG4gICAgZGV0YWlsc0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybU9wZW4nKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRleHRIZWFkZXIuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VJbWFnZScpO1xyXG4gICAgY2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRldGFpbHNGb3JtLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtT3BlbicsICdmb3JtQ2xvc2UnKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtQ29udGFpbmVyT3BlbicsICdmb3JtQ29udGFpbmVyQ2xvc2UnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGV0ZUZvcm0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VJbWFnZSk7XHJcbiAgICBkZXRhaWxzRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRpdGxlRGlzcGxheS5pbm5lclRleHQgPSAnVGl0bGUnO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURpc3BsYXkpO1xyXG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRpdGxlVmFsdWUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKHRpdGxlVmFsdWUpO1xyXG4gICAgY29uc3QgbGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGxpbmVCcmVhazEpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGRlc2NEaXNwbGF5LmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NEaXNwbGF5KTtcclxuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NWYWx1ZS5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY1ZhbHVlKTtcclxuICAgIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWsyKTtcclxuXHJcbiAgICBjb25zdCBkdWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGR1ZURpc3BsYXkuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZHVlRGlzcGxheSk7XHJcbiAgICBjb25zdCBkdWVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGR1ZVZhbHVlLmlubmVyVGV4dCA9IGR1ZTtcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZHVlVmFsdWUpO1xyXG4gICAgY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGxpbmVCcmVhazMpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwcmlvcml0eURpc3BsYXkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcclxuICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXNwbGF5KTtcclxuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmlvcml0eVZhbHVlLmlubmVyVGV4dCA9IHByaW9yaXR5O1xyXG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eVZhbHVlKTtcclxuXHJcbiAgICBkZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGl2Jyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRldGFpbHMnKTtcclxuICAgIGRldGFpbHNGb3JtLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Zvcm0pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkVkaXRUYXNrRm9ybShwcm9qZWN0TmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KSB7XHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybShwcm9qZWN0TmFtZSk7XHJcbiAgICBcclxuICAgIC8qIEFkZCBhbGwgZXhpc3RpbmcgaW5mb3JtYXRpb25zICovXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpO1xyXG4gICAgdGFza05hbWUudmFsdWUgPSB0aXRsZTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzY3JpcHRpb24nKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZUVudGVyZWQnKTtcclxuICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gZHVlO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eTtcclxuXHJcbiAgICAvKiBSZW5hbWUgQnV0dG9uIG5hbWUgKi9cclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7XHJcbiAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiU2F2ZSBUYXNrXCI7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Gb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB1cGRhdGVUYXNrKGUsIHRpdGxlKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybShlLCBpc0Nsb3NlUHJvamVjdD1mYWxzZSwgaXNDbG9zZVRhc2s9dHJ1ZSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJyk7XHJcbiAgICBpZiAoaXNDbG9zZVByb2plY3QgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RGb3JtJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1PcGVuJywgJ2Zvcm1DbG9zZScpO1xyXG4gICAgfSBlbHNlIGlmIChpc0Nsb3NlVGFzayA9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3Rm9ybScpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZXBsYWNlKCdmb3JtT3BlbicsICdmb3JtQ2xvc2UnKTtcclxuICAgIH1cclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlcGxhY2UoJ2Zvcm1Db250YWluZXJPcGVuJywgJ2Zvcm1Db250YWluZXJDbG9zZScpO1xyXG4gICAgc2V0VGltZW91dChkZWxldGVGb3JtLCAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IHtvcGVuTmV3UHJvamVjdEZvcm0sIG9wZW5OZXdUYXNrRm9ybSxcclxuICAgICAgICBvcGVuRGVzY3JpcHRpb25Cb3gsIG9wZW5FZGl0VGFza0Zvcm0sXHJcbiAgICAgICAgY2xvc2VGb3JtfTtcclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL25hdkJhci5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9kaWFsb2dCb3guY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28ucG5nJztcclxuaW1wb3J0IGhhbWJ1cmdlck1lbnVJY29uIGZyb20gJy4uL2Fzc2V0cy9oYW1idXJnZXJJY29uLnBuZyc7XHJcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3NlSWNvbi5zdmcnO1xyXG5pbXBvcnQgeyBsb2FkUHJvamVjdHMgfSBmcm9tICcuL3Rhc2tQYWdlLmpzJztcclxuaW1wb3J0IHtcclxuXHRnZXRMb2NhbFN0b3JhZ2UsXHJcblx0c2V0TG9jYWxTdG9yYWdlLFxyXG5cdHJlbW92ZUxvY2FsU3RvcmFnZSxcclxufSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzRnJvbU1lbnUoKSB7XHJcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG5cdGNvbnN0IG1lbnVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtZW51RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlQcm9qZWN0TGlzdE1vYmlsZScpO1xyXG5cclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHRjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHRleHRIZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3QgTGlzdCc7XHJcblx0aGVhZGVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xyXG5cclxuXHRjb25zdCBjbG9zZUltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0Y2xvc2VJbWFnZS5zcmMgPSBjbG9zZUljb247XHJcblx0Y2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdjbG9zZUltYWdlJyk7XHJcblx0Y2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudURpYWxvZyk7XHJcblx0fSk7XHJcblx0aGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlSW1hZ2UpO1xyXG5cdG1lbnVEaWFsb2cuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcblx0Y29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdE1vYmlsZScpO1xyXG5cdGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRhZGRQcm9qZWN0LmlubmVyVGV4dCA9ICdBZGQgTmV3IFByb2plY3QnO1xyXG5cdGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdE1vYmlsZScpO1xyXG5cdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XHJcblx0bWVudURpYWxvZy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuXHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cHJvamVjdEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbXMtbW9iaWxlJyk7XHJcblx0bWVudURpYWxvZy5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbXMpO1xyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpYWxvZyk7XHJcblxyXG5cdGxvYWRQcm9qZWN0cyh0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlNb2RlKCkge1xyXG5cdC8vIGNvbnN0IGdldFN0eWxlID0gKGVsZW1lbnQsIHN0eWxlKSA9PlxyXG5cdC8vIFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZSk7XHJcblx0Y29uc3QgbGlnaHRNb2RlID0ge1xyXG5cdFx0J2xpZ2h0LXNoYWRlLTEnOiAncmdiKDE5NiwgMTEyLCAxOTYpJyxcclxuXHRcdCdsaWdodC1zaGFkZS0yJzogJyNDMjkxRDknLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTMnOiAncmdiKDE3MCwgODMsIDE3MCknLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTQnOiAncHVycGxlJyxcclxuXHRcdCdsaWdodC1zaGFkZS01JzogJyNFOENGRjMnLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTYnOiAnI0Q2QjVFNScsXHJcblx0XHQncmFkaW8tYnV0dG9uJzogJyNjNDcwYzQnLFxyXG5cdFx0J2NvbnRlbnQtYmcnOiAnI0ZDRkNGQycsXHJcblx0fTtcclxuXHQvLyBvdmVycmlkZSBzdHlsZXMgYXJlIGhlcmVcclxuXHRjb25zdCBkYXJrTW9kZSA9IHtcclxuXHRcdCdsaWdodC1zaGFkZS0xJzogJyNFQUVBRUEnLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTInOiAnI0M1QzVDNScsXHJcblx0XHQnbGlnaHQtc2hhZGUtMyc6ICcjOEQ4RDhEJyxcclxuXHRcdCdsaWdodC1zaGFkZS00JzogJ2dyZXknLFxyXG5cdFx0J2xpZ2h0LXNoYWRlLTUnOiAnI0M1QzVDNScsXHJcblx0XHQnbGlnaHQtc2hhZGUtNic6ICdsaWdodGdyZXknLFxyXG5cdFx0J3JhZGlvLWJ1dHRvbic6ICcjYmxhY2snLFxyXG5cdFx0J2NvbnRlbnQtYmcnOiAnIzMzMzMzMycsXHJcblx0fTtcclxuXHRjb25zdCB0cmFuc2Zvcm1LZXkgPSAoa2V5KSA9PlxyXG5cdFx0Jy0tJyArIGtleS5yZXBsYWNlKC8oW0EtWl0pLywgJy0kMScpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VDb2xvcnMgPSAoY29sb3JzKSA9PiB7XHJcblx0XHRPYmplY3Qua2V5cyhjb2xvcnMpLm1hcCgoa2V5KSA9PiB7XHJcblx0XHRcdHJvb3Quc3R5bGUuc2V0UHJvcGVydHkodHJhbnNmb3JtS2V5KGtleSksIGNvbG9yc1trZXldKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXRoZW1lXScpO1xyXG5cdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7IHRhcmdldCB9KSA9PiB7XHJcblx0XHR0YXJnZXQuY2hlY2tlZCA/IGNoYW5nZUNvbG9ycyhkYXJrTW9kZSkgOiBjaGFuZ2VDb2xvcnMobGlnaHRNb2RlKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaXNNb2RlU2V0ID0gKGtleSkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAhPSBudWxsO1xyXG5cclxuXHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG5cdFx0aWYgKHRhcmdldC5jaGVja2VkKSB7XHJcblx0XHRcdGNoYW5nZUNvbG9ycyhkYXJrTW9kZSk7XHJcblx0XHRcdHNldExvY2FsU3RvcmFnZSgnbW9kZScsICdkYXJrTW9kZScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2hhbmdlQ29sb3JzKGxpZ2h0TW9kZSk7XHJcblx0XHRcdHNldExvY2FsU3RvcmFnZSgnbW9kZScsICdsaWdodE1vZGUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0aWYgKCFpc01vZGVTZXQoJ21vZGUnKSkgc2V0TG9jYWxTdG9yYWdlKCdtb2RlJywgJ2xpZ2h0TW9kZScpO1xyXG5cclxuXHRpZiAoZ2V0TG9jYWxTdG9yYWdlKCdtb2RlJykgPT09ICdsaWdodE1vZGUnKSB7XHJcblx0XHRjaGVja2JveC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcclxuXHRcdGNoYW5nZUNvbG9ycyhsaWdodE1vZGUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XHJcblx0XHRjaGFuZ2VDb2xvcnMoZGFya01vZGUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE5hdkJhcigpIHtcclxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xyXG5cdGRpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm5hdkJhckNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib2ZmaWNpYWxIZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgxPlRvZG9MaXN0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyLXByb2plY3QtbGlzdFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPHA+TXkgUHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtaXRlbXNcIj48L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXdQcm9qZWN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0XCI+QWRkIE5ldyBQcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuXHRjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGxvZ29JbWFnZS5hbHQgPSAnUGljdHVyZSBvZiBPZmZjaWFsIGxvZ28nO1xyXG5cdGxvZ29JbWFnZS5zcmMgPSBsb2dvO1xyXG5cclxuXHRjb25zdCBvZmZpY2lhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZpY2lhbEhlYWRlcicpO1xyXG5cdG9mZmljaWFsSGVhZGVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLXByb2plY3QtbGlzdCcpO1xyXG5cdGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdG1lbnVJbWFnZS5zcmMgPSBoYW1idXJnZXJNZW51SWNvbjtcclxuXHRtZW51SW1hZ2UuYWx0ID0gJ0hhbWJ1cmdlciBNZW51IHBpY3R1cmUnO1xyXG5cdG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXJNZW51Jyk7XHJcblx0aGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xyXG5cdGhhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdHNGcm9tTWVudSk7XHJcblx0bG9hZFByb2plY3RzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWROYXZCYXIsIGFwcGx5TW9kZSB9O1xyXG4iLCJmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuXHRpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKGtleSkge1xuXHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvY2FsU3RvcmFnZShrZXkpIHtcblx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdHNldExvY2FsU3RvcmFnZShrZXksIFtdKTtcbn1cblxuZXhwb3J0IHtzZXRMb2NhbFN0b3JhZ2UsIGdldExvY2FsU3RvcmFnZSwgcmVtb3ZlTG9jYWxTdG9yYWdlfTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvdGFza1BhZ2UuY3NzXCI7XHJcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuLi9hc3NldHMvYWRkLnBuZ1wiO1xyXG5pbXBvcnQgaW5mb0ljb24gZnJvbSBcIi4uL2Fzc2V0cy9pbmZvSWNvbi5wbmdcIjtcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi9hc3NldHMvZWRpdEJ0bi5wbmdcIjtcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uL2Fzc2V0cy9kZWxldGVCdG4ucG5nXCI7XHJcbmltcG9ydCByZW1vdmVJY29uIGZyb20gXCIuLi9hc3NldHMvdHJhc2gtY2FuLnBuZ1wiO1xyXG5pbXBvcnQgY29tcGxldGVkVGFza1BpYyBmcm9tIFwiLi4vYXNzZXRzL2NvbXBsZXRlZFRhc2suanBnXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQge2dldExvY2FsU3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlLCByZW1vdmVMb2NhbFN0b3JhZ2V9IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7XHJcblx0b3Blbk5ld1Byb2plY3RGb3JtLFxyXG5cdG9wZW5OZXdUYXNrRm9ybSxcclxuXHRvcGVuRGVzY3JpcHRpb25Cb3gsXHJcblx0b3BlbkVkaXRUYXNrRm9ybSxcclxuXHRjbG9zZUZvcm0sXHJcbn0gZnJvbSBcIi4vZGlhbG9nQm94XCI7XHJcblxyXG5sZXQga2V5ID0gXCJwcm9qZWN0TGlzdFwiO1xyXG5cclxubGV0IHByb2plY3RMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlKFwicHJvamVjdExpc3RcIik7XHJcbmlmIChwcm9qZWN0TGlzdCA9PSBudWxsIHx8ICFwcm9qZWN0TGlzdCkge1xyXG5cdHByb2plY3RMaXN0ID0gW107XHJcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5jb25zdCBzYW1wbGVQcm9qZWN0cyA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiBcIldlYiBEZXZlbG9wbWVudFwiLFxyXG5cdFx0dG9kb3M6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIldvcmsgb24gVG9EbyBMaXN0XCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBBZGQgYSAnQWRkVGFzaycgYnV0dG9uIG9uIE9kaW4ncyBUT0RPIExpc3QgUHJvamVjdGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIlN0YXJ0IHN0dWR5aW5nIE9PUFwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgU3RhcnQgcmVhZGluZyBPT1AgQ2hhcHRlciBmcm9tIE9kaW4gUHJvamVjdGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiUmVhZCBvdGhlcnMgd2Vic2l0ZXNcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogYEZpbmQgYW5kIHJlYWQgMiBvZiBvdGhlcnMgd2Vic2l0ZXMgZnJvbSBPZGluJ3MgZGlzY29yZGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImxvd1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdGNvbXBsZXRlZDogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IGBBZGQgYSAnQWRkUHJvamVjdCcgYnV0dG9uIG9uIFRvRG8gTGlzdGAsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGBBZGQgYSAnQWRkUHJvamVjdCcgYnV0dG9uIG9uIE9kaW4ncyBUT0RPIExpc3QgUHJvamVjdGAsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcIldvcmtcIixcclxuXHRcdHRvZG9zOiBbXSxcclxuXHRcdGNvbXBsZXRlZDogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiU2VuZCBlbWFpbCB0byBTb25pYVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBgV3JpdGUgU29uaWEgYWJvdXQgeWVzdGVyZGF5J3MgcmVncmVzc2lvbiB0ZXN0IHJlc3VsdHNgLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrKHByb2plY3QsIHRhc2tOYW1lKSB7XHJcblx0bGV0IHJldFRhc2sgPSB1bmRlZmluZWQ7XHJcblxyXG5cdHByb2plY3QudG9kb3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG5cdFx0aWYgKHRhc2sudGl0bGUgPT0gdGFza05hbWUpIHJldFRhc2sgPSB0YXNrO1xyXG5cdH0pO1xyXG5cclxuXHRpZiAocmV0VGFzayAhPSB1bmRlZmluZWQpIHJldHVybiByZXRUYXNrO1xyXG5cclxuXHRwcm9qZWN0LmNvbXBsZXRlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblx0XHRpZiAodGFzay50aXRsZSA9PSB0YXNrTmFtZSkgcmV0VGFzayA9IHRhc2s7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXRUYXNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcblx0bGV0IHJldFByb2plY3QgPSB1bmRlZmluZWQ7XHJcblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRyZXRQcm9qZWN0ID0gcHJvamVjdDtcclxuXHRcdFx0cmV0dXJuIHJldFByb2plY3Q7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXRQcm9qZWN0O1xyXG59XHJcblxyXG5sZXQgY3VycmVudEFjdGl2ZUZvbGRlciA9IHVuZGVmaW5lZDtcclxuXHJcbmZ1bmN0aW9uIHNldEZpcnN0QXNDdXJyZW50Rm9sZGVyKCkge1xyXG5cdC8qIERlc2t0b3AgdmlldyAqL1xyXG5cdGNvbnN0IGRlc2t0b3BJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtc1wiKTtcclxuXHRpZiAoZGVza3RvcEl0ZW1zLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0Y29uc3QgZGVmYXVsdFRhc2tQYWdlID1cclxuXHRcdFx0ZGVza3RvcEl0ZW1zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XHJcblx0XHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKGRlZmF1bHRUYXNrUGFnZSk7XHJcblx0fVxyXG5cclxuXHQvKiBNb2JpbGUgdmlldyAqL1xyXG5cdGNvbnN0IG1vYmlsZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zLW1vYmlsZVwiKTtcclxuXHRpZiAobW9iaWxlSXRlbXMgIT0gbnVsbCAmJiBtb2JpbGVJdGVtcy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRUYXNrUGFnZSA9IG1vYmlsZUl0ZW1zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XHJcblx0XHRzZXRDdXJyZW50QWN0aXZlRm9sZGVyKGRlZmF1bHRUYXNrUGFnZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50QWN0aXZlRm9sZGVyKHByb2plY3ROYW1lKSB7XHJcblx0Ly8gaWYgKGN1cnJlbnRBY3RpdmVGb2xkZXIgPT0gcHJvamVjdE5hbWUpIHJldHVybjtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXNEZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zXCIpO1xyXG5cdGNvbnN0IHByb2plY3RJdGVtc01vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0aWYgKGN1cnJlbnRBY3RpdmVGb2xkZXIgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRwcm9qZWN0SXRlbXNEZXNrdG9wLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdERlc2t0b3ApID0+IHtcclxuXHRcdFx0aWYgKHByb2plY3REZXNrdG9wLmlubmVyVGV4dCA9PSBjdXJyZW50QWN0aXZlRm9sZGVyKSB7XHJcblx0XHRcdFx0cHJvamVjdERlc2t0b3AuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUZvbGRlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRpZiAocHJvamVjdEl0ZW1zTW9iaWxlICE9IG51bGwpIHtcclxuXHRcdFx0cHJvamVjdEl0ZW1zTW9iaWxlLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdE1vYmlsZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0TW9iaWxlLmlubmVyVGV4dCA9PSBjdXJyZW50QWN0aXZlRm9sZGVyKSB7XHJcblx0XHRcdFx0XHRwcm9qZWN0TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVGb2xkZXJcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y3VycmVudEFjdGl2ZUZvbGRlciA9IHByb2plY3ROYW1lO1xyXG5cdHByb2plY3RJdGVtc0Rlc2t0b3AuY2hpbGROb2Rlcy5mb3JFYWNoKChwcm9qZWN0RGVza3RvcCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3REZXNrdG9wLmlubmVyVGV4dCA9PSBjdXJyZW50QWN0aXZlRm9sZGVyKSB7XHJcblx0XHRcdHByb2plY3REZXNrdG9wLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVGb2xkZXJcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYgKHByb2plY3RJdGVtc01vYmlsZSAhPSBudWxsKSB7XHJcblx0XHRwcm9qZWN0SXRlbXNNb2JpbGUuY2hpbGROb2Rlcy5mb3JFYWNoKChwcm9qZWN0TW9iaWxlKSA9PiB7XHJcblx0XHRcdGlmIChwcm9qZWN0TW9iaWxlLmlubmVyVGV4dCA9PSBjdXJyZW50QWN0aXZlRm9sZGVyKSB7XHJcblx0XHRcdFx0cHJvamVjdE1vYmlsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlRm9sZGVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y3JlYXRlVGFza1BhZ2UoY3VycmVudEFjdGl2ZUZvbGRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUZvbGRlcihlKSB7XHJcblx0c2V0Q3VycmVudEFjdGl2ZUZvbGRlcihlLnNyY0VsZW1lbnQuaW5uZXJUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0TGlzdChuZXdQcm9qZWN0TmFtZSkge1xyXG5cdHByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUpKTtcclxuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21Qcm9qZWN0TGlzdChuZXdQcm9qZWN0KSB7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHByb2plY3RMaXN0W2ldLm5hbWUgPT0gbmV3UHJvamVjdCkge1xyXG5cdFx0XHRkZWxldGUgcHJvamVjdExpc3RbaV07XHJcblx0XHRcdHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkgcmVtb3ZlTG9jYWxTdG9yYWdlKGtleSk7XHJcblx0XHRcdGVsc2Ugc2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKiBEaXNwbGF5IEJsYW5rIFBhZ2UgdG8gaW5kaWNhdGUgc3RlcHMgdG8gdXNlIFRPRE8gTGlzdCAqL1xyXG5cdGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xyXG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHRcdC8qIERlbGV0ZSBwcmV2aW91cyBleGlzdGVkIFRhc2sgUGFnZSBEaXNwbGF5ICovXHJcblx0XHRjb25zdCBwcmV2VGFza1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpO1xyXG5cdFx0aWYgKHByZXZUYXNrUGFnZSAhPSBudWxsKSB7XHJcblx0XHRcdGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldlRhc2tQYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXMtbW9iaWxlXCIpO1xyXG5cdFx0aWYgKHByb2plY3RJdGVtcyAhPSBudWxsKSB7XHJcblx0XHRcdHByb2plY3RJdGVtcy5pbm5lclRleHQgPSBcIk5vIFByb2plY3RcIjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkaXJlY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHRcdGhlYWRlci5pbm5lclRleHQgPSBcIlBsZWFzZSBBZGQgTmV3IFByb2plY3QgRmlyc3RcIjtcclxuXHJcblx0XHRkaXJlY3Rpb25zLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblx0XHRkaXJlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25zXCIpO1xyXG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChkaXJlY3Rpb25zKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KG5ld0xpc3RJdGVtKSB7XHJcblx0bmV3TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUFjdGl2ZUZvbGRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUV2ZW50KHByb2plY3QpIHtcclxuXHRwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVGb2xkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUpIHtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXNEZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zXCIpO1xyXG5cdGNvbnN0IHByb2plY3RJdGVtc01vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtcy1tb2JpbGVcIik7XHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmlubmVyVGV4dDtcclxuXHJcblx0aWYgKGN1cnJlbnRBY3RpdmVGb2xkZXIgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdHNldEZpcnN0QXNDdXJyZW50Rm9sZGVyKCk7XHJcblx0fVxyXG5cdHByb2plY3RJdGVtc0Rlc2t0b3AuY2hpbGROb2Rlcy5mb3JFYWNoKChwcm9qZWN0RGVza3RvcCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3REZXNrdG9wLmlubmVyVGV4dCA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRkZWxldGVFdmVudChwcm9qZWN0RGVza3RvcCk7XHJcblx0XHRcdHByb2plY3RJdGVtc0Rlc2t0b3AucmVtb3ZlQ2hpbGQocHJvamVjdERlc2t0b3ApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmIChwcm9qZWN0SXRlbXNNb2JpbGUgIT0gbnVsbCkge1xyXG5cdFx0cHJvamVjdEl0ZW1zTW9iaWxlLmNoaWxkTm9kZXMuZm9yRWFjaCgocHJvamVjdE1vYmlsZSkgPT4ge1xyXG5cdFx0XHRpZiAocHJvamVjdE1vYmlsZS5pbm5lclRleHQgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0XHRkZWxldGVFdmVudChwcm9qZWN0TW9iaWxlKTtcclxuXHRcdFx0XHRwcm9qZWN0SXRlbXNNb2JpbGUucmVtb3ZlQ2hpbGQocHJvamVjdE1vYmlsZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRkZWxldGVGcm9tUHJvamVjdExpc3QocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChuYW1lKSB7XHJcblx0Y29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0bmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcclxuXHRuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xyXG5cclxuXHRjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdG5ld1Byb2plY3ROYW1lLmlubmVyVGV4dCA9IG5hbWU7XHJcblx0bmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xyXG5cclxuXHRjb25zdCByZW1vdmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdHJlbW92ZUltYWdlLnNyYyA9IHJlbW92ZUljb247XHJcblx0cmVtb3ZlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RcIik7XHJcblx0cmVtb3ZlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3QpO1xyXG5cclxuXHRuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChyZW1vdmVJbWFnZSk7XHJcblx0YWRkRXZlbnQobmV3TGlzdEl0ZW0pO1xyXG5cclxuXHRyZXR1cm4gbmV3TGlzdEl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TW9iaWxlKG5hbWUpIHtcclxuXHRjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLW1vYmlsZVwiKTtcclxuXHRuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xyXG5cclxuXHRjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdG5ld1Byb2plY3ROYW1lLmlubmVyVGV4dCA9IG5hbWU7XHJcblx0bmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xyXG5cclxuXHRjb25zdCByZW1vdmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdHJlbW92ZUltYWdlLnNyYyA9IHJlbW92ZUljb247XHJcblx0cmVtb3ZlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RNb2JpbGVcIik7XHJcblx0cmVtb3ZlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3QpO1xyXG5cclxuXHRuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChyZW1vdmVJbWFnZSk7XHJcblx0YWRkRXZlbnQobmV3TGlzdEl0ZW0pO1xyXG5cclxuXHRyZXR1cm4gbmV3TGlzdEl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3QocHJvamVjdE5hbWUsIGlzTW9iaWxlID0gZmFsc2UpIHtcclxuXHRjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbXNcIik7XHJcblx0Y29uc3QgbmV3TGlzdEl0ZW0gPSBkaXNwbGF5UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0cHJvamVjdEl0ZW1zLmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcclxuXHJcblx0LyogU2V0IE5ldyBQcm9qZWN0IGFzIEN1cnJlbnQgUHJvamVjdCAqL1xyXG5cdHNldEN1cnJlbnRBY3RpdmVGb2xkZXIocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0TW9iaWxlKHByb2plY3ROYW1lKSB7XHJcblx0Y29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zLW1vYmlsZVwiKTtcclxuXHRjb25zdCBuZXdMaXN0SXRlbSA9IGRpc3BsYXlQcm9qZWN0TW9iaWxlKHByb2plY3ROYW1lKTtcclxuXHRwcm9qZWN0SXRlbXM/LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcclxuXHJcblx0LyogU2V0IE5ldyBQcm9qZWN0IGFzIEN1cnJlbnQgUHJvamVjdCAqL1xyXG5cdHNldEN1cnJlbnRBY3RpdmVGb2xkZXIocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpO1xyXG5cdC8qIEFkZCB0byBzdG9yYWdlICovXHJcblx0YWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0TmFtZS52YWx1ZSk7XHJcblx0LyogQWRkIHRvIERPTSAqL1xyXG5cdGFkZFByb2plY3RUb0xpc3QocHJvamVjdE5hbWUudmFsdWUpO1xyXG5cdGFkZFByb2plY3RUb0xpc3RNb2JpbGUocHJvamVjdE5hbWUudmFsdWUpO1xyXG5cdC8vIGNsb3NlRm9ybShudWxsLCB0cnVlLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cyhpc01vYmlsZSA9IGZhbHNlKSB7XHJcblx0aWYgKGlzTW9iaWxlID09IGZhbHNlICYmIHByb2plY3RMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRzYW1wbGVQcm9qZWN0cy5mb3JFYWNoKChzYW1wbGUpID0+IHtcclxuXHRcdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG5cdFx0XHRcdHNhbXBsZS5uYW1lLFxyXG5cdFx0XHRcdHNhbXBsZS50b2RvcyxcclxuXHRcdFx0XHRzYW1wbGUuY29tcGxldGVkXHJcblx0XHRcdCk7XHJcblx0XHRcdHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XHJcblx0XHR9KTtcclxuXHRcdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxuXHR9XHJcblxyXG5cdGlmIChpc01vYmlsZSA9PSBmYWxzZSkge1xyXG5cdFx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRhZGRQcm9qZWN0VG9MaXN0KHByb2plY3QubmFtZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xyXG5cdFx0bmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk5ld1Byb2plY3RGb3JtKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRhZGRQcm9qZWN0VG9MaXN0TW9iaWxlKHByb2plY3QubmFtZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0TW9iaWxlXCIpO1xyXG5cdFx0bmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk5ld1Byb2plY3RGb3JtKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbVwiKTtcclxuXHJcblx0Zm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcclxuXHRcdGFkZEV2ZW50KGZvbGRlcik7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKioqKiogVGFzayBGdW5jdGlvbnMgKioqKioqKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFza1BhZ2UoY3VycmVudEFjdGl2ZUZvbGRlcikge1xyXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblx0LyogRGVsZXRlIHByZXZpb3VzIGV4aXN0ZWQgUGFnZSBEaXNwbGF5ICovXHJcblx0Y29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyZWN0aW9uc1wiKTtcclxuXHRpZiAoZGlyZWN0aW9ucyAhPSBudWxsKSB7XHJcblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKGRpcmVjdGlvbnMpO1xyXG5cdH1cclxuXHRjb25zdCBwcmV2VGFza1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpO1xyXG5cdGlmIChwcmV2VGFza1BhZ2UgIT0gbnVsbCkge1xyXG5cdFx0Y29udGVudC5yZW1vdmVDaGlsZChwcmV2VGFza1BhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdGFza1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdHRhc2tQYWdlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrUGFnZVwiKTtcclxuXHR0YXNrUGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGFza0hlYWRlclwiPlxyXG4gICAgICAgIDxidXR0b24+QWRkIE5ldyBUYXNrPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvTGlzdFwiPjwvZGl2PlxyXG4gICAgICAgIDxoMz5Db21wbGV0ZWQgVGFza3M8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb25lTGlzdFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuXHRjb250ZW50LmFwcGVuZENoaWxkKHRhc2tQYWdlKTtcclxuXHJcblx0Y29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrSGVhZGVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XHJcblx0Y29uc3QgYWRkVGFzayA9IG5ldyBJbWFnZSgpO1xyXG5cdGFkZFRhc2suc3JjID0gYWRkSWNvbjtcclxuXHRhZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrXCIpO1xyXG5cdGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OZXdUYXNrRm9ybSk7XHJcblx0YWRkQnRuLnByZXBlbmQoYWRkVGFzayk7XHJcblxyXG5cdGNvbnN0IHByb2plY3ROYW1lID0gY3VycmVudEFjdGl2ZUZvbGRlcjtcclxuXHRjb25zdCBjdXJyZXRGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRjdXJyZXRGb2xkZXIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcblx0dGFza1BhZ2UucHJlcGVuZChjdXJyZXRGb2xkZXIpO1xyXG5cdGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtUYXNrQXNUb2RvKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0LmNvbXBsZXRlZFtpXS50aXRsZSA9PSB0YXNrTmFtZSkge1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvcy5wdXNoKFxyXG5cdFx0XHRcdFx0XHRuZXcgVGFzayhcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZFtpXS50aXRsZSxcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZFtpXS5kZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZFtpXS5kdWUsXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jb21wbGV0ZWRbaV0ucHJpb3JpdHlcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBwcm9qZWN0LmNvbXBsZXRlZFtpXTtcclxuXHRcdFx0XHRcdHByb2plY3QuY29tcGxldGVkLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya1Rhc2tBc0NvbXBsZXRlZChwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcclxuXHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0LnRvZG9zW2ldLnRpdGxlID09IHRhc2tOYW1lKSB7XHJcblx0XHRcdFx0XHRwcm9qZWN0LmNvbXBsZXRlZC5wdXNoKFxyXG5cdFx0XHRcdFx0XHRuZXcgVGFzayhcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zW2ldLnRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0uZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5kdWUsXHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5wcmlvcml0eVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHByb2plY3QudG9kb3NbaV07XHJcblx0XHRcdFx0XHRwcm9qZWN0LnRvZG9zLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChcclxuXHRwcm9qZWN0TmFtZSxcclxuXHR0YXNrTmFtZSxcclxuXHR0YXNrRGVzY3JpcHRpb24sXHJcblx0dGFza0R1ZSxcclxuXHR0YXNrUHJpb3JpdHksXHJcblx0aXNUb2RvSXRlbSA9IHRydWVcclxuKSB7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHByb2plY3RMaXN0W2ldLm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0aWYgKGlzVG9kb0l0ZW0gPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdHByb2plY3RMaXN0W2ldLnRvZG9zLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgVGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHkpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwcm9qZWN0TGlzdFtpXS5jb21wbGV0ZWQucHVzaChcclxuXHRcdFx0XHRcdG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHNldExvY2FsU3RvcmFnZShrZXksIHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFza0luUHJvamVjdChcclxuXHRwcm9qZWN0TmFtZSxcclxuXHRvbGRUaXRsZSxcclxuXHR0YXNrTmFtZSxcclxuXHR0YXNrRGVzY3JpcHRpb24sXHJcblx0dGFza0R1ZSxcclxuXHR0YXNrUHJpb3JpdHksXHJcblx0aXNUb2RvSXRlbSA9IHRydWVcclxuKSB7XHJcblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0aWYgKHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAocHJvamVjdC50b2Rvc1tpXS50aXRsZSA9PSBvbGRUaXRsZSkge1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS50aXRsZSA9IHRhc2tOYW1lO1xyXG5cdFx0XHRcdFx0cHJvamVjdC50b2Rvc1tpXS5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbjtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0uZHVlID0gdGFza0R1ZTtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3NbaV0ucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c2V0TG9jYWxTdG9yYWdlKGtleSwgcHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tUaXRsZSkge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHByb2plY3QudG9kb3NbaV0udGl0bGUgPT0gdGFza1RpdGxlKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcHJvamVjdC50b2Rvc1tpXTtcclxuXHRcdFx0XHRcdHByb2plY3QudG9kb3Muc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkgcmVtb3ZlTG9jYWxTdG9yYWdlKGtleSk7XHJcblx0ZWxzZSBzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2soZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XHJcblx0Y29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGVzY3JpcHRpb25cIik7XHJcblx0Y29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVFbnRlcmVkXCIpO1xyXG5cdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcblxyXG5cdC8qIEFkZCB0byBzdG9yYWdlICovXHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblx0YWRkVGFza1RvUHJvamVjdChcclxuXHRcdHByb2plY3ROYW1lLFxyXG5cdFx0dGFza05hbWUudmFsdWUsXHJcblx0XHR0YXNrRGVzY3JpcHRpb24udmFsdWUsXHJcblx0XHR0YXNrRHVlRGF0ZS52YWx1ZSxcclxuXHRcdHRhc2tQcmlvcml0eS52YWx1ZVxyXG5cdCk7XHJcblxyXG5cdHRhc2tOYW1lLnZhbHVlID0gXCJcIjtcclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUT0RPKHRvZG9MaXN0LCB0b2RvRGl2KSB7XHJcblx0dG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XHJcblx0LyogRGVsZXRlIEZyb20gc3RvcmFnZSAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTdGF0dXMoZSkge1xyXG5cdGNvbnN0IHRhc2tOYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XHJcblx0Y29uc3QgcHJvamVjdE5hbWUgPVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrUGFnZVwiKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblxyXG5cdC8qIENoZWNrIGlmIHRoaXMgdGFzayBpcyBwZW5kaW5nIG9yIGNvbXBsZXRlZCovXHJcblx0Y29uc3QgdGFza0RpdiA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0aWYgKHRhc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1Rhc2tcIikpIHtcclxuXHRcdG1hcmtUYXNrQXNDb21wbGV0ZWQocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHR9IGVsc2UgaWYgKHRhc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG9uZVRhc2tcIikpIHtcclxuXHRcdG1hcmtUYXNrQXNUb2RvKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XHJcblx0fVxyXG5cdGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbmZvKGUpIHtcclxuXHRjb25zdCBwcm9qZWN0TmFtZSA9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tQYWdlXCIpLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHRjb25zdCB0YXNrTmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xyXG5cclxuXHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0Y29uc3QgdGFzayA9IGdldFRhc2socHJvamVjdCwgdGFza05hbWUpO1xyXG5cclxuXHRpZiAodGFzayA9PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdG9wZW5EZXNjcmlwdGlvbkJveCh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZSwgdGFzay5wcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2soZSwgdGl0bGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Y29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xyXG5cdGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NyaXB0aW9uXCIpO1xyXG5cdGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlRW50ZXJlZFwiKTtcclxuXHRjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xyXG5cclxuXHQvKiBVcGRhdGUgdG8gc3RvcmFnZSAqL1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIikuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cdHVwZGF0ZVRhc2tJblByb2plY3QoXHJcblx0XHRwcm9qZWN0TmFtZSxcclxuXHRcdHRpdGxlLFxyXG5cdFx0dGFza05hbWUudmFsdWUsXHJcblx0XHR0YXNrRGVzY3JpcHRpb24udmFsdWUsXHJcblx0XHR0YXNrRHVlRGF0ZS52YWx1ZSxcclxuXHRcdHRhc2tQcmlvcml0eS52YWx1ZVxyXG5cdCk7XHJcblx0ZGlzcGxheVRhc2tQYWdlKHByb2plY3ROYW1lKTtcclxuXHRjbG9zZUZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2soZSkge1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIikuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cdGNvbnN0IHRhc2tOYW1lID1cclxuXHRcdGUuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dDtcclxuXHJcblx0Y29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdGNvbnN0IHRhc2sgPSBnZXRUYXNrKHByb2plY3QsIHRhc2tOYW1lKTtcclxuXHJcblx0aWYgKHRhc2sgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRvcGVuRWRpdFRhc2tGb3JtKFxyXG5cdFx0cHJvamVjdE5hbWUsXHJcblx0XHR0YXNrLnRpdGxlLFxyXG5cdFx0dGFzay5kZXNjcmlwdGlvbixcclxuXHRcdHRhc2suZHVlLFxyXG5cdFx0dGFzay5wcmlvcml0eVxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xyXG5cdGNvbnN0IHRhc2tOYW1lID1cclxuXHRcdGUuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dDtcclxuXHJcblx0LyogRGVsZXRlIGZyb20gc3RvcmFnZSAqL1xyXG5cdGNvbnN0IHByb2plY3ROYW1lID1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1BhZ2VcIikuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cdGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZSwgdGFza05hbWUpO1xyXG5cclxuXHRkaXNwbGF5VGFza1BhZ2UocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VE9ETyh0b2RvTGlzdCwgdG9kbykge1xyXG5cdGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuXHRjb25zdCB0b2RvRGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0cmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG5cdHJhZGlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlU3RhdHVzKTtcclxuXHR0b2RvRGl2TWFpbi5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcblx0Y29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0dG9kb1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcblx0dG9kb0Rpdk1haW4uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuXHRjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRjb25zdCBpbmZvSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdGluZm9JY29uSW1nLnNyYyA9IGluZm9JY29uO1xyXG5cdGluZm9JY29uSW1nLmFsdCA9IFwiSW1hZ2Ugb2YgSW5mbyBJY29uXCI7XHJcblx0aW5mb0ljb25JbWcuY2xhc3NMaXN0LmFkZChcImluZm9JY29uSW1nXCIpO1xyXG5cdGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbmZvKTtcclxuXHRkZXRhaWxzLmFwcGVuZENoaWxkKGluZm9JY29uSW1nKTtcclxuXHR0b2RvRGl2TWFpbi5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuXHR0b2RvRGl2TWFpbi5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpdk1haW5cIik7XHJcblx0dG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2TWFpbik7XHJcblxyXG5cdGNvbnN0IHRvZG9EaXZTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgcmVtYWluaW5nVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdHRvZG9EaXZTZXR0aW5ncy5hcHBlbmRDaGlsZChyZW1haW5pbmdUaW1lKTtcclxuXHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRjb25zdCBlZGl0VGFza0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0ZWRpdFRhc2tJbWFnZS5zcmMgPSBlZGl0SWNvbjtcclxuXHRlZGl0VGFza0ltYWdlLmFsdCA9IFwiRWRpdCBmb3IgVGFza1wiO1xyXG5cdGVkaXRUYXNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcImVkaXRUYXNrSW1hZ2VcIik7XHJcblx0ZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0VGFza0ltYWdlKTtcclxuXHRlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XHJcblxyXG5cdHRvZG9EaXZTZXR0aW5ncy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuXHRjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdGNvbnN0IGRlbGV0ZVRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGRlbGV0ZVRhc2tJbWFnZS5zcmMgPSBkZWxldGVJY29uO1xyXG5cdGRlbGV0ZVRhc2tJbWFnZS5hbHQgPSBcIkRlZWxldCB0aGUgVGFza1wiO1xyXG5cdGRlbGV0ZVRhc2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza0ltYWdlXCIpO1xyXG5cdGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVUYXNrSW1hZ2UpO1xyXG5cdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzayk7XHJcblxyXG5cdHRvZG9EaXZTZXR0aW5ncy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cdHRvZG9EaXZTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwidG9kb0RpdlNldHRpbmdzXCIpO1xyXG5cclxuXHR0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EaXZTZXR0aW5ncyk7XHJcblx0dG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1Rhc2tcIik7XHJcblx0c3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XHJcblx0XHRjYXNlIFwiaGlnaFwiOlxyXG5cdFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoVG9kb1Rhc2tcIik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIm1lZGl1bVwiOlxyXG5cdFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Ub2RvVGFza1wiKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3dUb2RvVGFza1wiKTtcclxuXHR9XHJcblx0dG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDb21wbGV0ZWQoZG9uZUxpc3QsIGNvbXBsZXRlZFRhc2spIHtcclxuXHRjb25zdCBjb21wbGV0ZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuXHRjb25zdCBjb21wbGV0ZWREaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb25zdCByYWRpb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRyYWRpb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcblx0cmFkaW9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb25lVGFza1JhZGlvIGZhLXNvbGlkIGZhLWNpcmNsZS1jaGVja1wiKTtcclxuXHRyYWRpb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZVN0YXR1cyk7XHJcblx0Y29tcGxldGVkRGl2TWFpbi5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcblx0Y29uc3QgY29tcGxldGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRjb21wbGV0ZWRUaXRsZS5pbm5lclRleHQgPSBjb21wbGV0ZWRUYXNrLnRpdGxlO1xyXG5cdGNvbXBsZXRlZERpdk1haW4uYXBwZW5kQ2hpbGQoY29tcGxldGVkVGl0bGUpO1xyXG5cdGNvbXBsZXRlZERpdk1haW4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZERpdk1haW5cIik7XHJcblxyXG5cdGNvbXBsZXRlZERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXZNYWluKTtcclxuXHRjb21wbGV0ZWREaXYuY2xhc3NMaXN0LmFkZChcImRvbmVUYXNrXCIpO1xyXG5cdGRvbmVMaXN0LmFwcGVuZENoaWxkKGNvbXBsZXRlZERpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrUGFnZShwcm9qZWN0TmFtZSkge1xyXG5cdHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Y29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0XCIpO1xyXG5cdFx0XHRjb25zdCBkb25lTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9uZUxpc3RcIik7XHJcblxyXG5cdFx0XHQvLyBjbGVhciBwcmV2IGVsZW1lbnRzXHJcblx0XHRcdHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHQvLyB0b2RvIGxpc3RcclxuXHRcdFx0aWYgKHByb2plY3QudG9kb3MubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHQvLyBkaXNwbGF5IG5vIHdvcmsgcGljdHVyZVxyXG5cdFx0XHRcdGNvbnN0IG5vV29ya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0bm9Xb3JrRGl2LmNsYXNzTGlzdC5hZGQoXCJub1dvcmtEaXZcIik7XHJcblx0XHRcdFx0Y29uc3Qgbm9Xb3JrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0XHRub1dvcmtJbWFnZS5zcmMgPSBjb21wbGV0ZWRUYXNrUGljO1xyXG5cdFx0XHRcdG5vV29ya0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJub1dvcmtJbWFnZVwiKTtcclxuXHRcdFx0XHRub1dvcmtEaXYuYXBwZW5kQ2hpbGQobm9Xb3JrSW1hZ2UpO1xyXG5cdFx0XHRcdGNvbnN0IG5vV29ya1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRcdFx0XHRub1dvcmtUZXh0LmlubmVyVGV4dCA9IFwiTm8gd29yayBmb3IgdG9kYXkuIEVuam95IHlvdXIgZGF5LlwiO1xyXG5cdFx0XHRcdG5vV29ya0Rpdi5hcHBlbmRDaGlsZChub1dvcmtUZXh0KTtcclxuXHRcdFx0XHR0b2RvTGlzdC5hcHBlbmRDaGlsZChub1dvcmtEaXYpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNsZWFyIHByZXYgZWxlbWVudHMsIGluIGNhc2Ugb2Ygbm8gd29yayBpbWFnZSBpcyBoZXJlXHJcblx0XHRcdFx0dG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRcdFx0cHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5VE9ETyh0b2RvTGlzdCwgdG9kbyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY29tcGxldGVkIGxpc3RcclxuXHRcdFx0ZG9uZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdFx0cHJvamVjdC5jb21wbGV0ZWQuZm9yRWFjaCgoY29tcGxldGVkVGFzaykgPT4ge1xyXG5cdFx0XHRcdGRpc3BsYXlDb21wbGV0ZWQoZG9uZUxpc3QsIGNvbXBsZXRlZFRhc2spO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZFByb2plY3RzLCBhZGRQcm9qZWN0LCBhZGRUYXNrLCB1cGRhdGVUYXNrIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2xvYWROYXZCYXIsIGFwcGx5TW9kZX0gZnJvbSAnLi9tb2R1bGVzL25hdkJhcic7XHJcblxyXG5sb2FkTmF2QmFyKCk7XHJcbmFwcGx5TW9kZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=