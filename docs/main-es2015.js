(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-wrapper\">\r\n  <div class=\"row header\">\r\n    <div class=\"col-6 d-flex align-self-center\">\r\n      <h1 class=\"display-3 text-white ml-2\"> eScoreBoard </h1>\r\n    </div>\r\n    <div class=\"col-6 d-flex justify-content-end\">\r\n      <div class=\"m-2 d-flex align-self-center\"> <button id=\"swappedButton\" type=\"button\" class=\"btn btn-info\"\r\n          (click)=\"swap()\"><i class=\"material-icons header-icon\">sync_alt</i></button></div>\r\n      <div class=\"m-2 d-flex align-self-center\"> <button id=\"resetButton\" type=\"button\" class=\"btn btn-warning\"\r\n          (click)=\"resetScore()\"><i class=\"material-icons header-icon\">refresh</i></button></div>\r\n      <div class=\"m-2 d-flex align-self-center\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#bteOptionModal\"\r\n          (click)=\"openModal()\">\r\n          <i *ngIf=\"!connecting\" #bteIcon class=\"material-icons header-icon bte-disconnected\">bluetooth</i>\r\n          <div *ngIf=\"connecting\" class=\"spinner-grow text-warning scale-spinner\" role=\"status\">\r\n            <span class=\"sr-only \">Loading...</span>\r\n          </div>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"swapped\" class=\"row score-panel\">\r\n    <div class=\"col-6  w-100 h-100 \">\r\n      <div class=\"text-white redScorePanel w-100 h-100\">\r\n        <div class=\"d-flex justify-content-center w-100 h-100\">\r\n          <p id=\"redScoreText\" class=\"card-text score-text align-self-center\">{{redScoreText}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 w-100 h-100\">\r\n      <div class=\"text-white blueScorePanel w-100 h-100\">\r\n        <div class=\"d-flex justify-content-center w-100 h-100\">\r\n          <p id=\"blueScoreText\" class=\"card-text score-text align-self-center\">{{blueScoreText}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!swapped\" class=\"row score-panel\">\r\n    <div class=\"col-6 w-100 h-100\">\r\n      <div class=\"text-white blueScorePanel w-100 h-100\">\r\n        <div class=\"d-flex justify-content-center w-100 h-100\">\r\n          <p id=\"blueScoreText\" class=\"card-text score-text align-self-center\">{{blueScoreText}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6  w-100 h-100 \">\r\n      <div class=\"text-white redScorePanel w-100 h-100\">\r\n        <div class=\"d-flex justify-content-center w-100 h-100\">\r\n          <p id=\"redScoreText\" class=\"card-text score-text align-self-center\">{{redScoreText}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"swapped\" class=\"row controls\">\r\n    <div class=\"col-6  d-flex justify-content-center align-self-center w-100 h-100 pt-4 pb-2\">\r\n      <button id=\"redScoreIncButton\" type=\"button\" class=\"btn btn-danger w-100\" (click)=\"redScoreInc()\"><i\r\n          class=\"material-icons scale-icon-80\">arrow_upward</i></button>\r\n    </div>\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-4 pb-2\">\r\n      <button id=\"blueScoreIncButton\" type=\"button\" class=\"btn btn-primary w-100\" (click)=\"blueScoreInc()\"><i\r\n          class=\"material-icons scale-icon-80\">arrow_upward</i></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"swapped\" class=\"row controls\">\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-2 pb-4\">\r\n      <button id=\"redScoreDecButton\" type=\"button\" class=\"btn btn-danger w-100\" (click)=\"redScoreDec()\"><i\r\n          class=\"material-icons scale-icon-80\">arrow_downward</i></button>\r\n    </div>\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-2 pb-4\">\r\n      <button id=\"blueScoreDecButton\" type=\"button\" class=\"btn btn-primary w-100\" (click)=\"blueScoreDec()\"> <i\r\n          class=\"material-icons scale-icon-80\">arrow_downward</i></button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"!swapped\" class=\"row controls\">\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-4 pb-2\">\r\n      <button id=\"blueScoreIncButton\" type=\"button\" class=\"btn btn-primary w-100\" (click)=\"blueScoreInc()\"><i\r\n          class=\"material-icons scale-icon-80\">arrow_upward</i></button>\r\n    </div>\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-4 pb-2\">\r\n      <button id=\"redScoreIncButton\" type=\"button\" class=\"btn btn-danger w-100\" (click)=\"redScoreInc()\"><i\r\n          class=\"material-icons scale-icon-80\">arrow_upward</i></button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!swapped\" class=\"row controls\">\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-2 pb-4\">\r\n      <button id=\"blueScoreDecButton\" type=\"button\" class=\"btn btn-primary w-100\" (click)=\"blueScoreDec()\"> <i\r\n          class=\"material-icons scale-icon-80\">arrow_downward</i></button>\r\n    </div>\r\n    <div class=\"col-6 d-flex justify-content-center align-self-center w-100 h-100 pt-2 pb-4\">\r\n      <button id=\"redScoreDecButton\" type=\"button\" class=\"btn btn-danger w-100\" (click)=\"redScoreDec()\"><i\r\n          class=\"material-icons scale-icon-80\">arrow_downward</i></button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row footer mb-1 \">\r\n    <div class=\" w-100\">\r\n      <div class=\" footer-bg-color w-100\">\r\n        <p class=\" text-center text-white \">Domenico Garreffa January 2020</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"bteOptionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Bluetooth Options</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{bteModalText}}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"connectBte()\" data-dismiss=\"modal\">Connect</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDisconnect()\" data-dismiss=\"modal\">Disconnect</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".score-panel {\r\n  height: 30%;\r\n  min-height: 30%;\r\n}\r\n\r\n.header {\r\n  height: 20%;\r\n  min-height: 20%;\r\n  background-color: #434343;\r\n}\r\n\r\n.footer {\r\n  height: 10%;\r\n  min-height: 10%;\r\n}\r\n\r\n.footer-bg-color {\r\n  background-color: #434343\r\n}\r\n\r\n.controls {\r\n  height: 20%;\r\n  min-height: 20%;\r\n}\r\n\r\n.container-wrapper {\r\n  height: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.scaleButton {\r\n  font-size: 20vh;\r\n  font-size: 20vw;\r\n}\r\n\r\n.header-icon {}\r\n\r\n.scale-icon-80 {\r\n  font-size: 9vw;\r\n  font-size: 9vh;\r\n}\r\n\r\n.scale-spinner {\r\n  height: 4vh;\r\n  width: 4vh;\r\n}\r\n\r\n.score-text {}\r\n\r\n.blueScorePanel {\r\n  background-color: #007bff;\r\n}\r\n\r\n.redScorePanel {\r\n  background-color: #dc3545;\r\n}\r\n\r\n.vertical-align {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.bte-connected {\r\n  color: #76FF03;\r\n}\r\n\r\n.bte-disconnected {\r\n  color: #FFFF00;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .score-text {\r\n    font-size: 10em;\r\n  }\r\n  .header {\r\n    font-size: 2em;\r\n  }\r\n  .display-3 {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .score-text {\r\n    font-size: 10em;\r\n  }\r\n  .footer {\r\n    font-size: 2em;\r\n  }\r\n  .header-icon {\r\n    font-size: 4em;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .score-text {\r\n    font-size: 15em;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .score-text {\r\n    font-size: 15em;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  html {\r\n    font-size: 15rem;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQSxhQUFhOztBQUViO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxpREFBaUQ7O0FBRWpEO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxvRUFBb0U7O0FBRXBFO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUEscURBQXFEOztBQUVyRDtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBLG1EQUFtRDs7QUFFbkQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxvRUFBb0U7O0FBRXBFO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlLXBhbmVsIHtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBtaW4taGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBtaW4taGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5mb290ZXItYmctY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDNcclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBtaW4taGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zY2FsZUJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAyMHZoO1xyXG4gIGZvbnQtc2l6ZTogMjB2dztcclxufVxyXG5cclxuLmhlYWRlci1pY29uIHt9XHJcblxyXG4uc2NhbGUtaWNvbi04MCB7XHJcbiAgZm9udC1zaXplOiA5dnc7XHJcbiAgZm9udC1zaXplOiA5dmg7XHJcbn1cclxuXHJcbi5zY2FsZS1zcGlubmVyIHtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogNHZoO1xyXG59XHJcblxyXG4uc2NvcmUtdGV4dCB7fVxyXG5cclxuLmJsdWVTY29yZVBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4ucmVkU2NvcmVQYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idGUtY29ubmVjdGVkIHtcclxuICBjb2xvcjogIzc2RkYwMztcclxufVxyXG5cclxuLmJ0ZS1kaXNjb25uZWN0ZWQge1xyXG4gIGNvbG9yOiAjRkZGRjAwO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zY29yZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICB9XHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbiAgLmRpc3BsYXktMyB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNjb3JlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMGVtO1xyXG4gIH1cclxuICAuZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICAuaGVhZGVyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2NvcmUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1ZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNjb3JlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNWVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNXJlbTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web
let AppComponent = class AppComponent {
    constructor(ref) {
        this.ref = ref;
        this.connecting = false; //Controls spinner;
        this.connected = false;
        this.defaultBteModalText = "Not connected to any devices.";
        this.bteModalText = this.defaultBteModalText;
        this.swapped = false;
        this.redScoreText = "00";
        this.blueScoreText = "00";
        this.redScore = 0;
        this.blueScore = 0;
        //The Scoreboards can share the same characteris identifers.
        this.SCOREBOARD_CHAR_RED = "0000aaaa-0000-1000-8000-00805f9b34fb";
        this.SCOREBOARD_CHAR_BLUE = "0000bbbb-0000-1000-8000-00805f9b34fb";
        //Aslong as the service identifer are unique. You can connect to multiple scoreboards in one room.
        this.SCOREBOARD_NAME_1 = "Green Scoreboard";
        this.SCOREBOARD_SERVICE_UUID_1 = "a7fe1050-e168-11e9-81b4-2a2ae2dbcce4";
        this.SCOREBOARD_NAME_2 = "Orange Scoreboard";
        this.SCOREBOARD_SERVICE_UUID_2 = "19614830-3320-11ea-978f-2e728ce88125";
        this.SCOREBOARD_NAME_3 = "Brando's Scoreboard";
        this.SCOREBOARD_SERVICE_UUID_3 = "df7ba31c-2537-11eb-adc1-0242ac120002";
    }
    ngOnInit() { }
    //Bluetooth logic
    connectBte() {
        this.navigator = navigator;
        this.navigator.bluetooth.requestDevice({
            filters: [{
                    //TODO: Search for multiple names.
                    name: this.SCOREBOARD_NAME_1
                },
                {
                    name: this.SCOREBOARD_NAME_2
                },
                {
                    name: this.SCOREBOARD_NAME_3
                }
            ],
            optionalServices: [this.SCOREBOARD_SERVICE_UUID_1, this.SCOREBOARD_SERVICE_UUID_2, this.SCOREBOARD_SERVICE_UUID_3]
        })
            .then(device => {
            console.log("Connecting to " + device.name);
            this.device = device;
            this.onConnect(device.name);
            device.addEventListener('gattserverdisconnected', (event) => this.onDisconnected(event));
            return device.gatt.connect();
        })
            .then(server => {
            if (this.deviceName.localeCompare(this.SCOREBOARD_NAME_1) == 0) {
                return server.getPrimaryService(this.SCOREBOARD_SERVICE_UUID_1);
            }
            else if (this.deviceName.localeCompare(this.SCOREBOARD_NAME_2) == 0) {
                return server.getPrimaryService(this.SCOREBOARD_SERVICE_UUID_2);
            }
            else if (this.deviceName.localeCompare(this.SCOREBOARD_NAME_3) == 0) {
                return server.getPrimaryService(this.SCOREBOARD_SERVICE_UUID_3);
            }
            else {
                return null;
            }
        })
            .then(service => {
            this.redScoreChar = service.getCharacteristic(this.SCOREBOARD_CHAR_RED);
            this.blueScoreChar = service.getCharacteristic(this.SCOREBOARD_CHAR_BLUE);
            this.onServiceConnect();
        })
            .catch(error => {
            console.log(error);
            this.connecting = false;
        });
    }
    writeToBlueChar(score) {
        if (this.blueScoreChar != null && this.connected) {
            this.blueScoreChar.then(char => {
                let value = Uint8Array.of(score);
                char.writeValue(value);
            }).catch(error => {
                console.log("Not connected to Service yet.");
            });
        }
    }
    writeToRedChar(score) {
        if (this.redScoreChar != null && this.connected) {
            this.redScoreChar.then(char => {
                let value = Uint8Array.of(score);
                char.writeValue(value);
            }).catch(error => {
                console.log("Not connected to Service yet.");
            });
        }
    }
    openModal() {
        $('#bteOptionModal').modal('toggle');
    }
    onConnect(deviceName) {
        this.deviceName = deviceName;
        this.connecting = true;
    }
    onDisconnect() {
        if (this.device != null) {
            this.device.gatt.disconnect();
        }
    }
    onServiceConnect() {
        this.connected = true;
        this.connecting = false;
        this.ref.detectChanges();
        this.bteIcon.nativeElement.classList.remove('bte-disconnected');
        this.bteIcon.nativeElement.classList.add('bte-connected');
        this.bteModalText = "Connected to " + this.deviceName + ".";
    }
    onDisconnected(event) {
        let device = event.target;
        console.log('Device ' + device.name + ' is disconnected.');
        this.connected = false;
        this.ref.detectChanges();
        this.bteIcon.nativeElement.classList.add('bte-disconnected');
        this.bteIcon.nativeElement.classList.remove('bte-connected');
        this.bteModalText = this.defaultBteModalText;
    }
    getServicesCharacteristic(characteristics) {
        characteristics.forEach(characteristic => {
            console.log(characteristic);
        });
    }
    //App logic
    incrementScore(value) {
        return value + 1;
    }
    decrementScore(value) {
        if (value <= 0) {
            return 0;
        }
        return value - 1;
    }
    /* If the score is less than 10 prepend a "0" for design purposes"
    takes a number and returns a string. */
    prependZeroAndConvertToString(score) {
        if (score <= 9) {
            return "0" + score;
        }
        return score + "";
    }
    blueScoreInc() {
        this.blueScore = this.incrementScore(this.blueScore);
        this.blueScoreText = this.prependZeroAndConvertToString(this.blueScore);
        this.writeToBlueChar(this.blueScore);
    }
    redScoreInc() {
        this.redScore = this.incrementScore(this.redScore);
        this.redScoreText = this.prependZeroAndConvertToString(this.redScore);
        this.writeToRedChar(this.redScore);
    }
    blueScoreDec() {
        this.blueScore = this.decrementScore(this.blueScore);
        this.blueScoreText = this.prependZeroAndConvertToString(this.blueScore);
        this.writeToBlueChar(this.blueScore);
    }
    redScoreDec() {
        this.redScore = this.decrementScore(this.redScore);
        this.redScoreText = this.prependZeroAndConvertToString(this.redScore);
        this.writeToRedChar(this.redScore);
    }
    swap() {
        this.swapped = !this.swapped;
    }
    resetScore() {
        if (confirm("Are you sure you want to reset the scores?")) {
            this.redScore = 0;
            this.blueScore = 0;
            this.redScoreText = "00";
            this.blueScoreText = "00";
            this.writeToRedChar(this.redScore);
            setTimeout(() => {
                this.writeToBlueChar(this.blueScore);
            }, 250);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("bteIcon", { static: false })
], AppComponent.prototype, "bteIcon", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Domenico\Desktop\Web\eBoardWebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);