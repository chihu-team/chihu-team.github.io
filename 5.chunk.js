webpackJsonp([5],{

/***/ "../../../../../src/app/home/people/share/share-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_component__ = __webpack_require__("../../../../../src/app/home/people/share/share.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__share_component__["a" /* ShareComponent */]
    }];
var ShareRoutingModule = (function () {
    function ShareRoutingModule() {
    }
    return ShareRoutingModule;
}());
ShareRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ShareRoutingModule);

//# sourceMappingURL=share-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"people-share-page\">\n    <app-no-data *ngIf=\"data.length == 0\"></app-no-data>\n    <app-share-card [datas]=\"data\"></app-share-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/people/share/share.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/people/share/share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShareComponent = (function () {
    function ShareComponent(router, http) {
        this.router = router;
        this.http = http;
        this.data = [];
        this._id = this.router.url.split('/')[2];
        this.getdata();
    }
    ShareComponent.prototype.getdata = function () {
        var _this = this;
        var url = "https://www.devonhello.com/chihu2/my_share";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    ShareComponent.prototype.ngOnInit = function () {
    };
    return ShareComponent;
}());
ShareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-share',
        template: __webpack_require__("../../../../../src/app/home/people/share/share.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/people/share/share.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ShareComponent);

var _a, _b;
//# sourceMappingURL=share.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/share/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_component__ = __webpack_require__("../../../../../src/app/home/people/share/share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_routing_module__ = __webpack_require__("../../../../../src/app/home/people/share/share-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__ = __webpack_require__("../../../../../src/app/components/home/no-data/no-data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_share_card_share_card_module__ = __webpack_require__("../../../../../src/app/components/home/share-card/share-card.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShareModule = (function () {
    function ShareModule() {
    }
    return ShareModule;
}());
ShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__share_routing_module__["a" /* ShareRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_no_data_no_data_module__["a" /* NoDataModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_share_card_share_card_module__["a" /* ShareCardModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__share_component__["a" /* ShareComponent */]]
    })
], ShareModule);

//# sourceMappingURL=share.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map