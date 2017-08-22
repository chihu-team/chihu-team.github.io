webpackJsonp([1],{

/***/ "../../../../../src/app/components/home/send-que/send-que.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"send-que-component\">\n    <div class=\"send-wrap\" [@sendQueStatus]=\"status\">\n        <div class=\"Modal-inner\">\n            <h3>我要提问</h3>\n            <div class=\"content\">\n                <input [(ngModel)]=\"title\" maxlength=\"30\" type=\"text\" placeholder=\"我的问题...\">\n                <p class=\"tip\">提示：最多150个字符</p>\n                <textarea [(ngModel)]=\"text\" maxlength=\"150\" placeholder=\"说点什么......\"></textarea>\n                <div (click)=\"send();\" class=\"send\">发布</div>\n            </div>\n            <button (click)=\"colseShare();\" class=\"Modal-closeButton\" aria-label=\"关闭\" type=\"button\"><svg viewBox=\"0 0 14 14\" class=\"Icon Modal-closeIcon Icon--remove\" width=\"16\" height=\"16\" aria-hidden=\"true\" style=\"height: 16px; width: 16px;\"><title></title><g><path d=\"M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z\"></path></g></svg></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/send-que/send-que.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".send-que-component .send-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.47);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  z-index: -2; }\n  .send-que-component .send-wrap .Modal-inner {\n    width: 595px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    background: #fff;\n    margin: 0 auto;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-box-orient: vertical;\n    box-shadow: 0 5px 20px 0 rgba(0, 34, 77, 0.5); }\n    .send-que-component .send-wrap .Modal-inner h3 {\n      text-align: center; }\n    .send-que-component .send-wrap .Modal-inner .content {\n      padding: 24px;\n      background: #fff; }\n      .send-que-component .send-wrap .Modal-inner .content .tip {\n        font-size: 14px;\n        color: #b3b3b3; }\n      .send-que-component .send-wrap .Modal-inner .content .imgs {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-bottom: 30px; }\n        .send-que-component .send-wrap .Modal-inner .content .imgs .file {\n          position: relative;\n          cursor: pointer;\n          display: inline-block;\n          overflow: hidden;\n          text-decoration: none;\n          text-indent: 0;\n          line-height: 20px;\n          background-size: cover !important; }\n        .send-que-component .send-wrap .Modal-inner .content .imgs .file input {\n          position: absolute;\n          font-size: 100px;\n          right: 0;\n          top: 0;\n          opacity: 0; }\n        .send-que-component .send-wrap .Modal-inner .content .imgs .file:hover {\n          text-decoration: none; }\n        .send-que-component .send-wrap .Modal-inner .content .imgs .img-w {\n          width: 80px;\n          height: 80px;\n          margin-right: 6px;\n          background-size: cover !important; }\n      .send-que-component .send-wrap .Modal-inner .content input {\n        outline: none;\n        padding: 2%;\n        margin-bottom: 12px;\n        border: 1px solid #e7eaf1;\n        width: 96%;\n        font-size: 16px;\n        line-height: 25px;\n        height: 25px; }\n      .send-que-component .send-wrap .Modal-inner .content textarea {\n        outline: none;\n        resize: none;\n        padding: 2%;\n        margin-bottom: 12px;\n        border: 1px solid #e7eaf1;\n        width: 96%;\n        font-size: 16px;\n        line-height: 28px;\n        height: 120px; }\n      .send-que-component .send-wrap .Modal-inner .content .send {\n        transition: all .5s;\n        width: 198px;\n        height: 32px;\n        cursor: pointer;\n        background: #0d79d1;\n        color: #fff;\n        border-radius: 2px;\n        text-align: center;\n        margin: 0 auto;\n        line-height: 32px;\n        font-size: 14px; }\n      .send-que-component .send-wrap .Modal-inner .content .send:hover {\n        background: #5da9e6; }\n    .send-que-component .send-wrap .Modal-inner .Modal-closeButton {\n      transition: all .5s;\n      outline: none;\n      position: absolute;\n      top: 8px;\n      right: -60px;\n      padding: 12px;\n      height: auto;\n      line-height: inherit;\n      background: transparent;\n      border: none;\n      border-radius: 0;\n      cursor: pointer; }\n      .send-que-component .send-wrap .Modal-inner .Modal-closeButton svg {\n        fill: #fff; }\n    .send-que-component .send-wrap .Modal-inner .Modal-closeButton:hover {\n      -webkit-transform: rotateZ(180deg);\n              transform: rotateZ(180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/send-que/send-que.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendQueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendQueComponent = (function () {
    function SendQueComponent(http, userService) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.status = 'on';
        this.isLoading = false;
        this.text = '';
        this.title = '';
        this.userService.show_send_que.subscribe(function () {
            _this.status = (_this.status === "on") ? 'off' : 'on';
        });
    }
    SendQueComponent.prototype.colseShare = function () {
        this.isLoading = false;
        this.text = '';
        this.title = '';
        this.status = 'on';
    };
    SendQueComponent.prototype.send = function () {
        var _this = this;
        if (this.isLoading) {
            alert("正在发布，请稍后...");
            return true;
        }
        if (this.text.length > 0 && this.title.length > 0) {
            this.isLoading = true;
            var url = "https://www.devonhello.com/chihu2/send_question";
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.userService._user._id + "&name=" + this.userService._user.nickname + "&userimg=" + this.userService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
                headers: headers
            })
                .subscribe(function (res) {
                _this.isLoading = false;
                if (res.json()['result']['ok'] == '1') {
                    _this.text = '';
                    _this.title = '';
                }
                else {
                    alert("系统错误");
                }
                _this.colseShare();
            });
        }
        else {
            alert("操作有误！");
        }
    };
    SendQueComponent.prototype.ngOnInit = function () {
    };
    return SendQueComponent;
}());
SendQueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-send-que',
        template: __webpack_require__("../../../../../src/app/components/home/send-que/send-que.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/send-que/send-que.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('sendQueStatus', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    opacity: '0',
                    zIndex: -2
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    opacity: '1',
                    zIndex: 999
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('off => on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], SendQueComponent);

var _a, _b;
//# sourceMappingURL=send-que.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/send-que/send-que.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_que_component__ = __webpack_require__("../../../../../src/app/components/home/send-que/send-que.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendQueModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SendQueModule = (function () {
    function SendQueModule() {
    }
    return SendQueModule;
}());
SendQueModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__send_que_component__["a" /* SendQueComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__send_que_component__["a" /* SendQueComponent */]]
    })
], SendQueModule);

//# sourceMappingURL=send-que.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/send-share/send-share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"send-share-component\">\n    <div class=\"send-wrap\" [@sendShareStatus]=\"status\">\n        <div class=\"Modal-inner\">\n            <h3>分享你的心情</h3>\n\n            <div class=\"content\">\n                <textarea [(ngModel)]=\"text\" placeholder=\"说点什么......\"></textarea>\n                <p class=\"tip\">提示：至少添加一张图片，最多添加四张图片</p>\n                <div class=\"imgs\">\n                    <div *ngFor=\"let item of itemArr\" class=\"img-w\" [style.background]=\"'url('+ item +')'\"></div>\n                    <div *ngIf=\"itemArr.length < 4\" class=\"img-w file\" [style.background]=\"'url(assets/img/addimg.png)'\"><input (click)=\"sele();\" type=\"file\" accept=\"image/png,image/jpeg\" ng2FileSelect [uploader]=\"uploader\" /></div>\n                </div>\n                <div (click)=\"send();\" class=\"send\">发布</div>\n            </div>\n\n            <button (click)=\"colseShare();\" class=\"Modal-closeButton\" aria-label=\"关闭\" type=\"button\"><svg viewBox=\"0 0 14 14\" class=\"Icon Modal-closeIcon Icon--remove\" width=\"16\" height=\"16\" aria-hidden=\"true\" style=\"height: 16px; width: 16px;\"><title></title><g><path d=\"M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z\"></path></g></svg></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/send-share/send-share.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".send-share-component .send-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.47);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  z-index: -2; }\n  .send-share-component .send-wrap .Modal-inner {\n    width: 595px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    background: #fff;\n    margin: 0 auto;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-box-orient: vertical;\n    box-shadow: 0 5px 20px 0 rgba(0, 34, 77, 0.5); }\n    .send-share-component .send-wrap .Modal-inner h3 {\n      text-align: center; }\n    .send-share-component .send-wrap .Modal-inner .content {\n      padding: 24px;\n      background: #fff; }\n      .send-share-component .send-wrap .Modal-inner .content .tip {\n        font-size: 14px;\n        color: #b3b3b3; }\n      .send-share-component .send-wrap .Modal-inner .content .imgs {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-bottom: 30px; }\n        .send-share-component .send-wrap .Modal-inner .content .imgs .file {\n          position: relative;\n          cursor: pointer;\n          display: inline-block;\n          overflow: hidden;\n          text-decoration: none;\n          text-indent: 0;\n          line-height: 20px;\n          background-size: cover !important; }\n        .send-share-component .send-wrap .Modal-inner .content .imgs .file input {\n          position: absolute;\n          font-size: 100px;\n          right: 0;\n          top: 0;\n          opacity: 0; }\n        .send-share-component .send-wrap .Modal-inner .content .imgs .file:hover {\n          text-decoration: none; }\n        .send-share-component .send-wrap .Modal-inner .content .imgs .img-w {\n          width: 80px;\n          height: 80px;\n          margin-right: 6px;\n          background-size: cover !important; }\n      .send-share-component .send-wrap .Modal-inner .content textarea {\n        outline: none;\n        resize: none;\n        padding: 2%;\n        margin-bottom: 12px;\n        border: 1px solid #e7eaf1;\n        width: 96%;\n        font-size: 16px;\n        line-height: 28px;\n        height: 120px; }\n      .send-share-component .send-wrap .Modal-inner .content .send {\n        transition: all .5s;\n        width: 198px;\n        height: 32px;\n        cursor: pointer;\n        background: #0d79d1;\n        color: #fff;\n        border-radius: 2px;\n        text-align: center;\n        margin: 0 auto;\n        line-height: 32px;\n        font-size: 14px; }\n      .send-share-component .send-wrap .Modal-inner .content .send:hover {\n        background: #5da9e6; }\n    .send-share-component .send-wrap .Modal-inner .Modal-closeButton {\n      transition: all .5s;\n      outline: none;\n      position: absolute;\n      top: 8px;\n      right: -60px;\n      padding: 12px;\n      height: auto;\n      line-height: inherit;\n      background: transparent;\n      border: none;\n      border-radius: 0;\n      cursor: pointer; }\n      .send-share-component .send-wrap .Modal-inner .Modal-closeButton svg {\n        fill: #fff; }\n    .send-share-component .send-wrap .Modal-inner .Modal-closeButton:hover {\n      -webkit-transform: rotateZ(180deg);\n              transform: rotateZ(180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/send-share/send-share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendShareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendShareComponent = (function () {
    function SendShareComponent(http, userService) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.status = 'on';
        this.text = '';
        this.isLoading = false;
        this.ishide = true;
        this.URL = 'https://www.devonhello.com/chihu2/upload';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploaderArr = [];
        this.itemArr = [];
        this.userService.show_send_share.subscribe(function () {
            _this.status = (_this.status === "on") ? 'off' : 'on';
        });
        this.uploader.onAfterAddingFile = function (fileItems) {
            _this.uploader.queue[0].upload(); // 开始上传
            _this.isLoading = true;
            _this.uploader.queue[0].onSuccess = function (response, status, headers) {
                // 上传文件成功   
                if (status == 200) {
                    // 上传文件后获取服务器返回的数据
                    var iurlObj = JSON.parse(response);
                    console.log(iurlObj);
                    _this.uploaderArr.push(iurlObj);
                    _this.itemArr.push(iurlObj['src']);
                    _this.isLoading = false;
                }
                else {
                    // 上传文件后获取服务器返回的数据错误
                    _this.isLoading = false;
                    alert('上传失败！');
                }
            };
        };
    }
    SendShareComponent.prototype.sele = function () {
        if (this.isLoading) {
            alert("请稍后在操作");
            return false;
        }
    };
    SendShareComponent.prototype.colseShare = function () {
        this.isLoading = false;
        this.uploader.clearQueue();
        this.uploader.cancelAll();
        this.text = '';
        this.uploaderArr = [];
        this.itemArr = [];
        this.status = 'on';
    };
    SendShareComponent.prototype.send = function () {
        var _this = this;
        if (!this.isLoading && this.text.length > 0 && this.itemArr.length > 0) {
            this.isLoading = true;
            var url = "https://www.devonhello.com/chihu2/send_share";
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.userService._user._id + "&name=" + this.userService._user.nickname + "&userimg=" + this.userService._user.userimg + "&img=" + JSON.stringify(this.uploaderArr) + "&text=" + this.text, {
                headers: headers
            })
                .subscribe(function (res) {
                _this.isLoading = false;
                if (res.json()['result']['ok'] == '1') {
                    _this.uploader.clearQueue();
                    _this.uploaderArr = [];
                    _this.itemArr = [];
                    _this.text = '';
                }
                else {
                    alert("系统错误");
                }
                _this.colseShare();
            });
        }
        else {
            alert("操作有误！");
        }
    };
    SendShareComponent.prototype.ngOnInit = function () {
    };
    return SendShareComponent;
}());
SendShareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-send-share',
        template: __webpack_require__("../../../../../src/app/components/home/send-share/send-share.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/send-share/send-share.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('sendShareStatus', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    opacity: '0',
                    zIndex: -2
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    opacity: '1',
                    zIndex: 999
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('off => on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], SendShareComponent);

var _a, _b;
//# sourceMappingURL=send-share.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/send-share/send-share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_share_component__ = __webpack_require__("../../../../../src/app/components/home/send-share/send-share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SendShareModule = (function () {
    function SendShareModule() {
    }
    return SendShareModule;
}());
SendShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__send_share_component__["a" /* SendShareComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__send_share_component__["a" /* SendShareComponent */]]
    })
], SendShareModule);

//# sourceMappingURL=send-share.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/index/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/index/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/index/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div #home class=\"index-home-page\">\n    <div class=\"TopstoryHeader\">\n        <div class=\"TopstoryHeader-nav\">\n            <a (click)=\"sendShare();\">\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 17 18\" xmlns=\"https://www.w3.org/2000/svg\" class=\"Icon Icon--paper\" aria-hidden=\"true\" style=\"height: 16px; width: 16px;\"><title></title><g><g fill=\"#8590A6\" fill-rule=\"evenodd\">     <path d=\"M.833 4.35c0-2.21 1.79-4 4.01-4h7.315c2.214 0 4.01 1.79 4.01 4v8.743c0 2.21-1.79 4-4.01 4H4.842c-2.214 0-4.01-1.792-4.01-4V4.35zm1.643-.32v9.383c0 1.106.897 2.006 2.003 2.006h8.04c1.118 0 2.004-.9 2.004-2.007V4.03c0-1.107-.897-2.007-2.003-2.007H4.48c-1.118 0-2.004.898-2.004 2.006z\"></path><path d=\"M4.667 4.814h7.666v1.674H4.667V4.814zm0 2.79h7.666V9.28H4.667V7.604zm0 2.79h4.928v1.676H4.667v-1.675z\"></path>   </g></g></svg>                分享\n            </a>\n            <a (click)=\"sendQue();\">\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 17 17\" xmlns=\"https://www.w3.org/2000/svg\" class=\"Icon Icon--question\" aria-hidden=\"true\" style=\"height: 16px; width: 16px;\"><title></title><g><g transform=\"translate(-3 -3)\" fill=\"#8590A6\" fill-rule=\"evenodd\">     <path d=\"M3.833 6.356c0-1.66 1.334-3.007 2.993-3.007h9.348c1.653 0 2.993 1.338 2.993 3.006v8.498c0 1.66-1.266 3.467-2.812 4.03l-1.09.396c-2.08.757-5.447.76-7.53 0l-1.09-.396c-1.553-.565-2.812-2.363-2.812-4.03V6.356zm1.643.67v7.492c0 1.1.84 2.314 1.873 2.697l2.277.844c1.035.383 2.712.383 3.746 0l2.278-.845c1.036-.384 1.874-1.59 1.874-2.697V7.026c0-1.1-.897-2.003-2.003-2.003H7.48c-1.118 0-2.004.897-2.004 2.003z\"></path>     <path d=\"M13.012 11.46l-.422.29c-.232.177-.433.53-.433.53s-.08.134-.11.398v.16h-1.63v-.24c.02-.555.11-.86.343-1.13.364-.422 1.168-.935 1.202-.956.114-.086.212-.184.284-.288.17-.23.244-.412.244-.59 0-.25-.074-.478-.22-.682-.143-.197-.41-.296-.798-.296-.385 0-.648.12-.806.368-.162.254-.243.523-.243.796l-.005.23-1.656-.003.003-.23c.043-1.007.406-1.732 1.078-2.155.424-.27 1.113-.396 1.657-.406.873.01 1.39.193 1.923.575.54.387.815.965.815 1.72 0 .422-.135.82-.4 1.18-.14.193-.442.434-.826.73z\"></path>     <ellipse cx=\"11.226\" cy=\"14.791\" rx=\"1.095\" ry=\"1.116\"></ellipse>   </g></g></svg>                提问\n            </a>\n            <a [routerLink]=\"['/send-work']\">\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 18 18\" xmlns=\"https://www.w3.org/2000/svg\" class=\"Icon Icon--write\" aria-hidden=\"true\" style=\"height: 16px; width: 16px;\"><title></title><g><g fill=\"none\" fill-rule=\"evenodd\">     <path d=\"M9.595 2.023H4.842c-2.22 0-4.01 1.793-4.01 4.005v7.62c0 2.21 1.796 4.003 4.01 4.003h7.316c2.22 0 4.01-1.792 4.01-4.003v-7.11.51L14.523 8.72v4.253c0 1.66-1.336 3.004-3.01 3.004h-6.03c-1.66 0-3.008-1.338-3.008-3.004V6.7c0-1.657 1.336-3.002 3.01-3.002h2.467L9.595 2.03v-.007z\" fill=\"#8590A6\"></path>     <path d=\"M6.372 11.08c-.185-.915.2-2.238.85-2.888l6.616-6.616c.565-.565 1.472-.567 2.038 0 .56.56.56 1.477 0 2.038L9.258 10.23c-.652.65-1.975 1.034-2.888.85z\" stroke=\"#8590A6\" stroke-width=\"1.5\"></path>     <path fill=\"#8590A6\" d=\"M13.04 2.088l2.324 2.324-.987.986-2.323-2.324z\"></path>   </g></g></svg>                写作品\n            </a>\n        </div>\n    </div>\n\n    <app-card [datas]=\"datas\"></app-card>\n\n    <!--发布框  -->\n    <app-send-share></app-send-share>\n    <!--发布框  -->\n    <app-send-que></app-send-que>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/index/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index-home-page .TopstoryHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: 58px;\n  padding: 0 20px;\n  background: #fff;\n  margin-bottom: 10px;\n  border: 1px solid #e7eaf1;\n  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);\n  border-radius: 2px;\n  box-sizing: border-box; }\n  .index-home-page .TopstoryHeader a {\n    text-decoration: none;\n    margin-right: 40px;\n    font-size: 16px;\n    display: inline-block; }\n  .index-home-page .TopstoryHeader .TopstoryHeader-nav a {\n    cursor: pointer;\n    outline: none; }\n  .index-home-page .TopstoryHeader .TopstoryHeader-nav svg {\n    width: 16px;\n    height: 16px;\n    margin-right: 8px;\n    vertical-align: text-bottom; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/index/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(http, userService) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.datas = [];
        this.iswork = false;
        this.getdata();
        this.eventSub = this.userService.home_get_data.subscribe(function () {
            _this.getdata();
        });
    }
    HomeComponent.prototype.ngOnDestroy = function () {
        this.eventSub.unsubscribe();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    //获取数据
    HomeComponent.prototype.getdata = function () {
        var _this = this;
        if (this.iswork) {
            return;
        }
        this.iswork = true;
        var url = "https://www.devonhello.com/chihu2/home";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "len=" + this.datas.length, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.iswork = false;
            _this.datas = _this.datas.concat(res.json());
        });
    };
    HomeComponent.prototype.sendShare = function () {
        this.userService.show_send_share.emit();
    };
    HomeComponent.prototype.sendQue = function () {
        this.userService.show_send_que.emit();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/index/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/index/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/index/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/index/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_card_card_module__ = __webpack_require__("../../../../../src/app/components/home/card/card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_send_share_send_share_module__ = __webpack_require__("../../../../../src/app/components/home/send-share/send-share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_send_que_send_que_module__ = __webpack_require__("../../../../../src/app/components/home/send-que/send-que.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_card_card_module__["a" /* CardModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_5__components_home_send_share_send_share_module__["a" /* SendShareModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_send_que_send_que_module__["a" /* SendQueModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-select.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "../../../../ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/ng2-file-upload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/index.js"));


/***/ })

});
//# sourceMappingURL=1.chunk.js.map