webpackJsonp([12],{

/***/ "../../../../../src/app/home/nofound/nofound-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nofound_component__ = __webpack_require__("../../../../../src/app/home/nofound/nofound.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NofoundRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__nofound_component__["a" /* NofoundComponent */]
    }];
var NofoundRoutingModule = (function () {
    function NofoundRoutingModule() {
    }
    return NofoundRoutingModule;
}());
NofoundRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], NofoundRoutingModule);

//# sourceMappingURL=nofound-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/nofound/nofound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nofound-page\">\n    <app-iheader></app-iheader>\n    <div class=\"err\">\n        <h1>404</h1>\n        <p>抱歉，您输入的地址有误，请稍后再试。</p>\n        <p>{{seconds}} 秒后系统会自动转入 <a [routerLink]=\"['/']\">首页</a></p>\n    </div>\n    <div class=\"copy-wrap\">\n        <span class=\"copy\">©2017吃乎</span>\n        <span class=\"copy\"><svg t=\"1501226796898\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"https://www.w3.org/2000/svg\" p-id=\"2359\" xmlns:xlink=\"https://www.w3.org/1999/xlink\" width=\"20\" height=\"20\"><defs><style type=\"text/css\"></style></defs><path d=\"M530.01791-7.557299C672.947218-4.362634 790.76646 44.643525 885.072968 139.46118 979.315583 234.342728 1028.002276 354.462128 1031.133048 496.752503 1029.599609 610.546467 996.566773 708.558787 933.759661 795.453672 870.888656 882.412451 789.233021 940.874819 687.13153 977.230106 674.544551 978.827438 665.088342 977.230106 660.424132 972.502002 655.696028 966.176565 652.565256 959.851129 652.565256 953.525692L654.098695 814.429982C654.098695 790.725568 650.967924 771.749259 643.109048 755.967614 636.847505 740.122076 628.988629 729.068536 619.532421 721.20966 677.675322 718.014995 729.55668 699.038685 776.646041 664.280731 822.201963 631.056216 847.375922 566.268412 850.506694 471.450757 850.506694 444.551679 845.77859 419.249933 836.322382 397.142851 826.930067 374.971877 814.343087 354.462128 798.625336 337.083151 801.820001 330.757715 806.484211 314.97607 808.081544 291.207763 811.212315 267.503349 806.484211 237.473499 793.897232 202.715545 793.897232 201.118213 782.907584 201.118213 760.92829 204.248984 738.948995 207.443649 704.382721 224.822626 655.696028 254.852476 614.86821 243.798936 573.976499 237.473499 530.01791 237.473499 486.059321 237.473499 445.16761 243.798936 404.339793 254.852476 357.186538 223.225294 321.086825 207.443649 299.10753 204.248984 277.064343 201.118213 266.074695 201.118213 266.074695 202.715545 253.551609 237.473499 248.823505 267.503349 251.954276 291.207763 255.085048 314.97607 258.21582 330.757715 261.410484 337.083151 245.692733 354.462128 231.508421 373.438438 223.649545 397.142851 214.25723 419.249933 209.529126 444.551679 209.529126 472.984196 212.659898 567.865744 236.236525 631.056216 281.792447 665.878064 327.348368 700.636018 379.229726 719.612327 437.308734 722.743099 429.449859 729.068536 423.188316 736.991305 418.460211 748.044845 412.198668 759.098386 409.067897 773.346591 405.937125 789.128236 388.622041 798.648337 366.642747 801.779109 336.804576 800.24567 306.966406 798.648337 281.792447 781.26936 259.813152 746.447513 248.823505 729.068536 237.833857 716.417663 223.649545 708.558787 209.529126 700.636018 197.00604 695.907914 181.288289 694.310581 168.701309 692.713249 160.842433 694.310581 157.711662 700.636018 154.58089 705.364122 160.842433 713.286891 176.560184 724.340431 192.277936 735.393972 204.801022 746.447513 212.659898 759.098386 220.518774 771.749259 226.84421 785.997464 233.105753 798.648337 240.964629 819.158086 258.21582 836.600956 286.520551 850.785269 313.227949 865.033474 352.522328 866.630807 402.74246 857.110705L404.339793 950.39492C404.339793 958.317689 401.209021 964.643126 396.480917 969.37123 391.752813 975.696667 382.360498 977.230106 369.773518 974.099334 267.672028 939.34138 185.952499 877.684347 123.145387 792.322901 60.274382 706.961454 28.902772 607.351802 27.30544 495.155171 30.436212 351.267463 79.122905 232.745395 173.429413 137.927741 267.672028 43.046193 387.024709-5.959967 528.420578-9.090738L530.01791-7.557299Z\" p-id=\"2360\"></path></svg><a href=\"https://github.com/chihu2\" target=\"_blank\">https://github.com/chihu2</a></span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/nofound/nofound.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nofound-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #f7fafc; }\n  .nofound-page .err {\n    width: 1000px;\n    margin: 0 auto;\n    text-align: center; }\n    .nofound-page .err h1 {\n      font-size: 300px;\n      margin: 0;\n      color: #666;\n      font-weight: 500; }\n    .nofound-page .err a {\n      color: #5079d9;\n      cursor: pointer;\n      transition: all .5s; }\n    .nofound-page .err a:hover {\n      color: #aaa; }\n  .nofound-page .copy-wrap {\n    position: absolute;\n    bottom: 30px;\n    width: 100%;\n    text-align: center;\n    color: #777; }\n    .nofound-page .copy-wrap .copy {\n      display: block; }\n      .nofound-page .copy-wrap .copy svg {\n        vertical-align: text-bottom;\n        margin-right: 10px;\n        fill: #777; }\n      .nofound-page .copy-wrap .copy a {\n        color: #777;\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/nofound/nofound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NofoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NofoundComponent = (function () {
    function NofoundComponent(router) {
        var _this = this;
        this.router = router;
        this.seconds = 9;
        this.timer = null;
        this.timer = setInterval(function () {
            if (_this.seconds-- <= 1) {
                clearInterval(_this.timer);
                _this.router.navigate(['/']);
            }
        }, 1000);
    }
    NofoundComponent.prototype.ngOnInit = function () {
    };
    return NofoundComponent;
}());
NofoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nofound',
        template: __webpack_require__("../../../../../src/app/home/nofound/nofound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/nofound/nofound.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NofoundComponent);

var _a;
//# sourceMappingURL=nofound.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/nofound/nofound.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nofound_component__ = __webpack_require__("../../../../../src/app/home/nofound/nofound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nofound_routing_module__ = __webpack_require__("../../../../../src/app/home/nofound/nofound-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_iheader_iheader_module__ = __webpack_require__("../../../../../src/app/components/home/iheader/iheader.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NofoundModule", function() { return NofoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NofoundModule = (function () {
    function NofoundModule() {
    }
    return NofoundModule;
}());
NofoundModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__nofound_routing_module__["a" /* NofoundRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_iheader_iheader_module__["a" /* IheaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__nofound_component__["a" /* NofoundComponent */]]
    })
], NofoundModule);

//# sourceMappingURL=nofound.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map