webpackJsonp([4],{

/***/ "../../../../../src/app/home/people/work/work-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_component__ = __webpack_require__("../../../../../src/app/home/people/work/work.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__work_component__["a" /* WorkComponent */]
    }];
var WorkRoutingModule = (function () {
    function WorkRoutingModule() {
    }
    return WorkRoutingModule;
}());
WorkRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], WorkRoutingModule);

//# sourceMappingURL=work-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"people-work-page\">\n    <app-no-data *ngIf=\"data.length == 0\"></app-no-data>\n    <app-card [datas]=\"data\"></app-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/people/work/work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".people-work-page {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/people/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkComponent = (function () {
    function WorkComponent(router, http) {
        this.router = router;
        this.http = http;
        this.data = [];
        this._id = this.router.url.split('/')[2];
        this.getdata();
    }
    WorkComponent.prototype.getdata = function () {
        var _this = this;
        var url = "https://www.devonhello.com/chihu2/my_work";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    WorkComponent.prototype.ngOnInit = function () { };
    return WorkComponent;
}());
WorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-work',
        template: __webpack_require__("../../../../../src/app/home/people/work/work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/people/work/work.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object])
], WorkComponent);

var _a, _b;
//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/work/work.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_component__ = __webpack_require__("../../../../../src/app/home/people/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_routing_module__ = __webpack_require__("../../../../../src/app/home/people/work/work-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__ = __webpack_require__("../../../../../src/app/components/home/no-data/no-data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_card_card_module__ = __webpack_require__("../../../../../src/app/components/home/card/card.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WorkModule = (function () {
    function WorkModule() {
    }
    return WorkModule;
}());
WorkModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__work_routing_module__["a" /* WorkRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__["a" /* NoDataModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_card_card_module__["a" /* CardModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__work_component__["a" /* WorkComponent */]]
    })
], WorkModule);

//# sourceMappingURL=work.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map