webpackJsonp([10],{

/***/ "../../../../../src/app/home/people/collect/collect-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect_component__ = __webpack_require__("../../../../../src/app/home/people/collect/collect.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__collect_component__["a" /* CollectComponent */]
    }];
var CollectRoutingModule = (function () {
    function CollectRoutingModule() {
    }
    return CollectRoutingModule;
}());
CollectRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], CollectRoutingModule);

//# sourceMappingURL=collect-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/collect/collect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"people-collect-page\">\n    <app-no-data *ngIf=\"data.length == 0\"></app-no-data>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/people/collect/collect.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/people/collect/collect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectComponent = (function () {
    function CollectComponent(router) {
        this.router = router;
        this.data = [];
        this._id = this.router.url.split('/')[2];
    }
    CollectComponent.prototype.ngOnInit = function () {
    };
    return CollectComponent;
}());
CollectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-collect',
        template: __webpack_require__("../../../../../src/app/home/people/collect/collect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/people/collect/collect.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CollectComponent);

var _a;
//# sourceMappingURL=collect.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/collect/collect.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect_component__ = __webpack_require__("../../../../../src/app/home/people/collect/collect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collect_routing_module__ = __webpack_require__("../../../../../src/app/home/people/collect/collect-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__ = __webpack_require__("../../../../../src/app/components/home/no-data/no-data.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectModule", function() { return CollectModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CollectModule = (function () {
    function CollectModule() {
    }
    return CollectModule;
}());
CollectModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__collect_routing_module__["a" /* CollectRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__["a" /* NoDataModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__collect_component__["a" /* CollectComponent */]]
    })
], CollectModule);

//# sourceMappingURL=collect.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map