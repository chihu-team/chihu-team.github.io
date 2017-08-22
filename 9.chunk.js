webpackJsonp([9],{

/***/ "../../../../../src/app/home/people/fork-que/fork-que-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fork_que_component__ = __webpack_require__("../../../../../src/app/home/people/fork-que/fork-que.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForkQueRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__fork_que_component__["a" /* ForkQueComponent */]
    }];
var ForkQueRoutingModule = (function () {
    function ForkQueRoutingModule() {
    }
    return ForkQueRoutingModule;
}());
ForkQueRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ForkQueRoutingModule);

//# sourceMappingURL=fork-que-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/fork-que/fork-que.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"people-fork-que-page\">\n    <app-no-data *ngIf=\"data.length == 0\"></app-no-data>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/people/fork-que/fork-que.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/people/fork-que/fork-que.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForkQueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForkQueComponent = (function () {
    function ForkQueComponent(router) {
        this.router = router;
        this.data = [];
        this._id = this.router.url.split('/')[2];
    }
    ForkQueComponent.prototype.ngOnInit = function () {
    };
    return ForkQueComponent;
}());
ForkQueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fork-que',
        template: __webpack_require__("../../../../../src/app/home/people/fork-que/fork-que.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/people/fork-que/fork-que.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ForkQueComponent);

var _a;
//# sourceMappingURL=fork-que.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/fork-que/fork-que.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fork_que_component__ = __webpack_require__("../../../../../src/app/home/people/fork-que/fork-que.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fork_que_routing_module__ = __webpack_require__("../../../../../src/app/home/people/fork-que/fork-que-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__ = __webpack_require__("../../../../../src/app/components/home/no-data/no-data.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForkQueModule", function() { return ForkQueModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForkQueModule = (function () {
    function ForkQueModule() {
    }
    return ForkQueModule;
}());
ForkQueModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__fork_que_routing_module__["a" /* ForkQueRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__["a" /* NoDataModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__fork_que_component__["a" /* ForkQueComponent */]]
    })
], ForkQueModule);

//# sourceMappingURL=fork-que.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map