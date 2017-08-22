webpackJsonp([16],{

/***/ "../../../../../src/app/home/index/share/share-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_component__ = __webpack_require__("../../../../../src/app/home/index/share/share.component.ts");
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

/***/ "../../../../../src/app/home/index/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<app-share-card [datas]=\"data\"></app-share-card>"

/***/ }),

/***/ "../../../../../src/app/home/index/share/share.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/index/share/share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
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
    function ShareComponent(http, userService) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.data = [];
        this.iswork = false;
        this.userService.scrollToTop.emit();
        this.getdata();
        this.eventSub = this.userService.share_get_data.subscribe(function () {
            _this.getdata();
        });
    }
    ShareComponent.prototype.ngOnDestroy = function () {
        this.eventSub.unsubscribe();
        this.httpSub.unsubscribe();
    };
    ShareComponent.prototype.ngOnInit = function () {
    };
    //获取分享数据
    ShareComponent.prototype.getdata = function () {
        var _this = this;
        if (this.iswork) {
            return;
        }
        this.iswork = true;
        var url = "https://www.devonhello.com/chihu2/share";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.httpSub = this.http.post(url, "len=" + this.data.length, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.iswork = false;
            _this.data = _this.data.concat(res.json());
        });
    };
    return ShareComponent;
}());
ShareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-share',
        template: __webpack_require__("../../../../../src/app/home/index/share/share.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/index/share/share.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ShareComponent);

var _a, _b;
//# sourceMappingURL=share.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index/share/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_component__ = __webpack_require__("../../../../../src/app/home/index/share/share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_routing_module__ = __webpack_require__("../../../../../src/app/home/index/share/share-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_share_card_share_card_module__ = __webpack_require__("../../../../../src/app/components/home/share-card/share-card.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__components_home_share_card_share_card_module__["a" /* ShareCardModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__share_component__["a" /* ShareComponent */]]
    })
], ShareModule);

//# sourceMappingURL=share.module.js.map

/***/ })

});
//# sourceMappingURL=16.chunk.js.map