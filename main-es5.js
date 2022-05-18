(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!../emoji-picker-lib/src/lib/emoji-picker-lib.component.html":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/user/Desktop/emoji-picker-angular8/node_modules/raw-loader!../emoji-picker-lib/src/lib/emoji-picker-lib.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\"\r\n     [ngClass]=\"emojiPickerOptions?.customClass ? emojiPickerOptions?.customClass : ''\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\"\r\n          [ngClass]=\"{'active': emojiPickerOptions?.showEmojiPicker}\">\r\n    <ng-container *ngIf=\"emojiPickerOptions?.btnIcon; else btnIconImg\">\r\n      <span class=\"{{emojiPickerOptions?.btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"emojiPickerOptions?.showEmojiPicker\"\r\n       [ngClass]=\"emojiPickerOptions?.emojiPickerPosition ? 'emoji-picker--block--' + emojiPickerOptions.emojiPickerPosition : ''\"\r\n       class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"showSelectedEmojis(i)\"\r\n           [ngClass]=\"{'selected': selectedCategory?.category.id === category.id && !emojiPickerOptions.searchValue}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"emojiPickerOptions.searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"emojiPickerOptions?.searchIcon; else searchIconImg\">\r\n        <span class=\"{{emojiPickerOptions?.searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <p *ngIf=\"!emojiPickerOptions.searchValue\" class=\"emoji-picker--category-name\">{{selectedCategory?.category.name}}</p>\r\n    <div class=\"emoji-picker--emojis\"\r\n         [ngClass]=\"{'emoji-picker--emojis--full-height': emojiPickerOptions.searchValue}\">\r\n      <ng-container *ngFor=\"let emoji of selectedCategory?.emojis\">\r\n        <div *ngIf=\"emoji.isSupported\" class=\"emoji-picker--emoji\"\r\n             (click)=\"selectEmoji(emoji.emoji)\"\r\n             [ngStyle]=\"{'width': calcEmojiSize(emojiPickerOptions?.emojisPerRow)}\">\r\n          <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!********************************************************************************************************!*\
  !*** C:/Users/user/Desktop/emoji-picker-angular8/node_modules/raw-loader!./src/app/app.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-container\">\n  <input type=\"text\" [(ngModel)]=\"inputValue\">\n  <emoji-picker (selectEmojiEvent)=\"selectEmoji($event)\"></emoji-picker>\n</div>\n"

/***/ }),

/***/ "../emoji-picker-lib/src/lib/@core/services/emojis.shared.ts":
/*!*******************************************************************!*\
  !*** ../emoji-picker-lib/src/lib/@core/services/emojis.shared.ts ***!
  \*******************************************************************/
/*! exports provided: EmojisSharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojisSharedService", function() { return EmojisSharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _emoji_picker_lib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../emoji-picker-lib.service */ "../emoji-picker-lib/src/lib/emoji-picker-lib.service.ts");




var EmojisSharedService = /** @class */ (function () {
    function EmojisSharedService(emojiPickerService) {
        this.emojiPickerService = emojiPickerService;
        this.emojis = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.data = this.emojis.asObservable();
        this.getEmojis();
    }
    EmojisSharedService.prototype.getEmojis = function () {
        var _this = this;
        this.emojiPickerService.getEmojis().then(function (data) { return _this.emojis.next(data); });
    };
    EmojisSharedService.prototype.isEmoji = function (item) {
        this.ctx.clearRect(0, 0, 4, 4);
        this.ctx.fillText(item, -4, 4);
        return this.ctx.getImageData(0, 0, 1, 1).data[1] > 0;
    };
    EmojisSharedService.prototype.checkEmojiSupport = function (data) {
        var _this = this;
        if (this.ctx || !data.emojis) {
            return;
        }
        this.ctx = document.createElement('canvas').getContext('2d');
        this.ctx.canvas.width = 1;
        this.ctx.canvas.height = 1;
        data.emojis.forEach(function (element) {
            element.isSupported = _this.isEmoji(element.emoji);
        });
    };
    EmojisSharedService.ctorParameters = function () { return [
        { type: _emoji_picker_lib_service__WEBPACK_IMPORTED_MODULE_3__["EmojiPickerService"] }
    ]; };
    EmojisSharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EmojisSharedService);
    return EmojisSharedService;
}());



/***/ }),

/***/ "../emoji-picker-lib/src/lib/@theme/directives/autofocus.directive.ts":
/*!****************************************************************************!*\
  !*** ../emoji-picker-lib/src/lib/@theme/directives/autofocus.directive.ts ***!
  \****************************************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(element) {
        this.element = element;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        this.focusOnElement();
    };
    AutofocusDirective.prototype.focusOnElement = function () {
        this.element.nativeElement.focus();
    };
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[autofocus]'
        })
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "../emoji-picker-lib/src/lib/@theme/directives/outclick.directive.ts":
/*!***************************************************************************!*\
  !*** ../emoji-picker-lib/src/lib/@theme/directives/outclick.directive.ts ***!
  \***************************************************************************/
/*! exports provided: OutClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutClickDirective", function() { return OutClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var OutClickDirective = /** @class */ (function () {
    function OutClickDirective(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OutClickDirective.prototype.toggleOpen = function (event) {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.outClickEvent.emit();
        }
    };
    OutClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], OutClickDirective.prototype, "outClickEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], OutClickDirective.prototype, "toggleOpen", null);
    OutClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[outClick]'
        })
    ], OutClickDirective);
    return OutClickDirective;
}());



/***/ }),

/***/ "../emoji-picker-lib/src/lib/emoji-picker-lib.component.ts":
/*!*****************************************************************!*\
  !*** ../emoji-picker-lib/src/lib/emoji-picker-lib.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmojiPickerLibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerLibComponent", function() { return EmojiPickerLibComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_emojis_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@core/services/emojis.shared */ "../emoji-picker-lib/src/lib/@core/services/emojis.shared.ts");



var EmojiPickerLibComponent = /** @class */ (function () {
    function EmojiPickerLibComponent(emojisSharedService) {
        this.emojisSharedService = emojisSharedService;
        this.emojiPickerOptions = {};
        this.selectEmojiEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedCategory = {};
    }
    EmojiPickerLibComponent.prototype.ngOnInit = function () {
        this.initData();
        this.getEmojis();
    };
    EmojiPickerLibComponent.prototype.initData = function () {
        this.emojiPickerOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ emojisPerRow: 9, defaultCatalogId: 0 }, this.emojiPickerOptions);
    };
    EmojiPickerLibComponent.prototype.getEmojis = function () {
        var _this = this;
        this.emojisSharedService.data.subscribe(function (data) {
            _this.data = data;
        });
    };
    EmojiPickerLibComponent.prototype.includesSearchValue = function (element) {
        return element.includes(this.emojiPickerOptions.searchValue.toLowerCase());
    };
    EmojiPickerLibComponent.prototype.showSelectedEmojis = function (index) {
        var _this = this;
        this.selectedCategory.category = this.data.categories[index];
        this.selectedCategory.emojis = this.data.emojis.filter(function (emoji) { return emoji.categoryId === _this.selectedCategory.category.id; });
    };
    EmojiPickerLibComponent.prototype.calcEmojiSize = function (count) {
        return 100 / count + "%";
    };
    EmojiPickerLibComponent.prototype.selectEmoji = function (emoji) {
        this.selectEmojiEvent.emit(emoji);
    };
    EmojiPickerLibComponent.prototype.toggleEmojiPicker = function () {
        try {
            this.emojisSharedService.checkEmojiSupport(this.data);
            this.showSelectedEmojis(this.emojiPickerOptions.defaultCatalogId);
            this.emojiPickerOptions.showEmojiPicker = !this.emojiPickerOptions.showEmojiPicker;
        }
        catch (error) {
        }
    };
    EmojiPickerLibComponent.prototype.searchElement = function () {
        var _this = this;
        if (this.emojiPickerOptions.searchValue) {
            this.selectedCategory.emojis = this.data.emojis.filter(function (emoji) {
                return emoji.keywords.some(function (key) { return _this.includesSearchValue(key.toLowerCase()); }) || _this.includesSearchValue(emoji.name);
            });
        }
        else {
            this.showSelectedEmojis(0);
        }
    };
    EmojiPickerLibComponent.prototype.closeEmojiPicker = function () {
        this.emojiPickerOptions.showEmojiPicker = false;
        this.emojiPickerOptions.searchValue = '';
    };
    EmojiPickerLibComponent.ctorParameters = function () { return [
        { type: _core_services_emojis_shared__WEBPACK_IMPORTED_MODULE_2__["EmojisSharedService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EmojiPickerLibComponent.prototype, "emojiPickerOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], EmojiPickerLibComponent.prototype, "selectEmojiEvent", void 0);
    EmojiPickerLibComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'emoji-picker',
            template: __webpack_require__(/*! raw-loader!./emoji-picker-lib.component.html */ "../../node_modules/raw-loader/index.js!../emoji-picker-lib/src/lib/emoji-picker-lib.component.html")
        })
    ], EmojiPickerLibComponent);
    return EmojiPickerLibComponent;
}());



/***/ }),

/***/ "../emoji-picker-lib/src/lib/emoji-picker-lib.module.ts":
/*!**************************************************************!*\
  !*** ../emoji-picker-lib/src/lib/emoji-picker-lib.module.ts ***!
  \**************************************************************/
/*! exports provided: EmojiPickerLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerLibModule", function() { return EmojiPickerLibModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _emoji_picker_lib_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emoji-picker-lib.service */ "../emoji-picker-lib/src/lib/emoji-picker-lib.service.ts");
/* harmony import */ var _core_services_emojis_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@core/services/emojis.shared */ "../emoji-picker-lib/src/lib/@core/services/emojis.shared.ts");
/* harmony import */ var _emoji_picker_lib_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emoji-picker-lib.component */ "../emoji-picker-lib/src/lib/emoji-picker-lib.component.ts");
/* harmony import */ var _theme_directives_outclick_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@theme/directives/outclick.directive */ "../emoji-picker-lib/src/lib/@theme/directives/outclick.directive.ts");
/* harmony import */ var _theme_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@theme/directives/autofocus.directive */ "../emoji-picker-lib/src/lib/@theme/directives/autofocus.directive.ts");









var EmojiPickerLibModule = /** @class */ (function () {
    function EmojiPickerLibModule() {
    }
    EmojiPickerLibModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _theme_directives_outclick_directive__WEBPACK_IMPORTED_MODULE_7__["OutClickDirective"],
                _theme_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__["AutofocusDirective"],
                _emoji_picker_lib_component__WEBPACK_IMPORTED_MODULE_6__["EmojiPickerLibComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            exports: [
                _emoji_picker_lib_component__WEBPACK_IMPORTED_MODULE_6__["EmojiPickerLibComponent"]
            ],
            providers: [_emoji_picker_lib_service__WEBPACK_IMPORTED_MODULE_4__["EmojiPickerService"], _core_services_emojis_shared__WEBPACK_IMPORTED_MODULE_5__["EmojisSharedService"]]
        })
    ], EmojiPickerLibModule);
    return EmojiPickerLibModule;
}());



/***/ }),

/***/ "../emoji-picker-lib/src/lib/emoji-picker-lib.service.ts":
/*!***************************************************************!*\
  !*** ../emoji-picker-lib/src/lib/emoji-picker-lib.service.ts ***!
  \***************************************************************/
/*! exports provided: EmojiPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerService", function() { return EmojiPickerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EmojiPickerService = /** @class */ (function () {
    function EmojiPickerService() {
    }
    EmojiPickerService.prototype.getEmojis = function () {
        return fetch('./assets/data/emojis.json').then(function (result) { return result.json(); });
    };
    EmojiPickerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EmojiPickerService);
    return EmojiPickerService;
}());



/***/ }),

/***/ "../emoji-picker-lib/src/public-api.ts":
/*!*********************************************!*\
  !*** ../emoji-picker-lib/src/public-api.ts ***!
  \*********************************************/
/*! exports provided: EmojiPickerLibModule, EmojiPickerService, EmojiPickerLibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_emoji_picker_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/emoji-picker-lib.module */ "../emoji-picker-lib/src/lib/emoji-picker-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerLibModule", function() { return _lib_emoji_picker_lib_module__WEBPACK_IMPORTED_MODULE_0__["EmojiPickerLibModule"]; });

/* harmony import */ var _lib_emoji_picker_lib_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/emoji-picker-lib.service */ "../emoji-picker-lib/src/lib/emoji-picker-lib.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerService", function() { return _lib_emoji_picker_lib_service__WEBPACK_IMPORTED_MODULE_1__["EmojiPickerService"]; });

/* harmony import */ var _lib_emoji_picker_lib_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/emoji-picker-lib.component */ "../emoji-picker-lib/src/lib/emoji-picker-lib.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerLibComponent", function() { return _lib_emoji_picker_lib_component__WEBPACK_IMPORTED_MODULE_2__["EmojiPickerLibComponent"]; });

/*
 * Public API Surface of emoji-picker-lib
 */





/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.inputValue = '';
    }
    AppComponent.prototype.selectEmoji = function (emoji) {
        this.inputValue += emoji;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _emoji_picker_lib_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../emoji-picker-lib/src/public-api */ "../emoji-picker-lib/src/public-api.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _emoji_picker_lib_src_public_api__WEBPACK_IMPORTED_MODULE_5__["EmojiPickerLibModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\emoji-picker-angular8\projects\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map