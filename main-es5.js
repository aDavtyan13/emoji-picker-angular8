(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/emoji-picker-lib/fesm5/emoji-picker-lib.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/user/Desktop/emoji-picker-angular8/dist/emoji-picker-lib/fesm5/emoji-picker-lib.js ***!
  \***************************************************************************************************/
/*! exports provided: EmojiPickerLibComponent, EmojiPickerLibModule, EmojiPickerService, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerLibComponent", function() { return EmojiPickerLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerLibModule", function() { return EmojiPickerLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPickerService", function() { return EmojiPickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OutClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AutofocusDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return EmojisSharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiPickerService = /** @class */ (function () {
    function EmojiPickerService() {
    }
    /**
     * @return {?}
     */
    EmojiPickerService.prototype.getEmojis = /**
     * @return {?}
     */
    function () {
        return fetch('./assets/data/emojis.json').then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.json(); }));
    };
    EmojiPickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return EmojiPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojisSharedService = /** @class */ (function () {
    function EmojisSharedService(emojiPickerService) {
        this.emojiPickerService = emojiPickerService;
        this.emojis = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]((/** @type {?} */ ({})));
        this.data = this.emojis.asObservable();
        this.getEmojis();
    }
    /**
     * @private
     * @return {?}
     */
    EmojisSharedService.prototype.getEmojis = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.emojiPickerService.getEmojis().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.emojis.next(data); }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    EmojisSharedService.prototype.isEmoji = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.ctx.clearRect(0, 0, 4, 4);
        this.ctx.fillText(item, -4, 4);
        return this.ctx.getImageData(0, 0, 1, 1).data[1] > 0;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    EmojisSharedService.prototype.checkEmojiSupport = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (this.ctx || !data.emojis) {
            return;
        }
        this.ctx = document.createElement('canvas').getContext('2d');
        this.ctx.canvas.width = 1;
        this.ctx.canvas.height = 1;
        data.emojis.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            element.isSupported = _this.isEmoji(element.emoji);
        }));
    };
    EmojisSharedService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    EmojisSharedService.ctorParameters = function () { return [
        { type: EmojiPickerService }
    ]; };
    return EmojisSharedService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiPickerLibComponent = /** @class */ (function () {
    function EmojiPickerLibComponent(emojisSharedService) {
        this.emojisSharedService = emojisSharedService;
        this.selectEmojiEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedCategory = (/** @type {?} */ ({}));
    }
    /**
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initData();
        this.getEmojis();
    };
    /**
     * @private
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.initData = /**
     * @private
     * @return {?}
     */
    function () {
        this.emojiPickerOptions = {
            emojisPerRow: 9,
            defaultCatalogId: 0
        };
    };
    /**
     * @private
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.getEmojis = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.emojisSharedService.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.data = data;
        }));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.includesSearchValue = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element.includes(this.emojiPickerOptions.searchValue.toLowerCase());
    };
    /**
     * @param {?} index
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.showSelectedEmojis = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.selectedCategory.category = this.data.categories[index];
        this.selectedCategory.emojis = this.data.emojis.filter((/**
         * @param {?} emoji
         * @return {?}
         */
        function (emoji) { return emoji.categoryId === _this.selectedCategory.category.id; }));
    };
    /**
     * @param {?} count
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.calcEmojiSize = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        return 100 / count + "%";
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.selectEmoji = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        this.selectEmojiEvent.emit(emoji);
    };
    /**
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.toggleEmojiPicker = /**
     * @return {?}
     */
    function () {
        try {
            this.emojisSharedService.checkEmojiSupport(this.data);
            this.showSelectedEmojis(this.emojiPickerOptions.defaultCatalogId);
            this.emojiPickerOptions.showEmojiPicker = !this.emojiPickerOptions.showEmojiPicker;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.searchElement = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.emojiPickerOptions.searchValue) {
            this.selectedCategory.emojis = this.data.emojis.filter((/**
             * @param {?} emoji
             * @return {?}
             */
            function (emoji) {
                return emoji.keywords.some((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return _this.includesSearchValue(key.toLowerCase()); })) || _this.includesSearchValue(emoji.name);
            }));
        }
        else {
            this.showSelectedEmojis(0);
        }
    };
    /**
     * @return {?}
     */
    EmojiPickerLibComponent.prototype.closeEmojiPicker = /**
     * @return {?}
     */
    function () {
        this.emojiPickerOptions.showEmojiPicker = false;
        this.emojiPickerOptions.searchValue = '';
    };
    EmojiPickerLibComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'emoji-picker',
                    template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\"\r\n     [ngClass]=\"emojiPickerOptions?.customClass ? emojiPickerOptions?.customClass : ''\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\"\r\n          [ngClass]=\"{'active': emojiPickerOptions?.showEmojiPicker}\">\r\n    <ng-container *ngIf=\"emojiPickerOptions?.btnIcon; else btnIconImg\">\r\n      <span class=\"{{emojiPickerOptions?.btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"emojiPickerOptions?.showEmojiPicker\"\r\n       [ngClass]=\"emojiPickerOptions?.emojiPickerPosition ? 'emoji-picker--block--' + emojiPickerOptions.emojiPickerPosition : ''\"\r\n       class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"showSelectedEmojis(i)\"\r\n           [ngClass]=\"{'selected': selectedCategory?.category.id === category.id && !emojiPickerOptions.searchValue}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"emojiPickerOptions.searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"emojiPickerOptions?.searchIcon; else searchIconImg\">\r\n        <span class=\"{{emojiPickerOptions?.searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <p *ngIf=\"!emojiPickerOptions.searchValue\" class=\"emoji-picker--category-name\">{{selectedCategory?.category.name}}</p>\r\n    <div class=\"emoji-picker--emojis\"\r\n         [ngClass]=\"{'emoji-picker--emojis--full-height': emojiPickerOptions.searchValue}\">\r\n      <ng-container *ngFor=\"let emoji of selectedCategory?.emojis\">\r\n        <div *ngIf=\"emoji.isSupported\" class=\"emoji-picker--emoji\"\r\n             (click)=\"selectEmoji(emoji.emoji)\"\r\n             [ngStyle]=\"{'width': calcEmojiSize(emojiPickerOptions?.emojisPerRow)}\">\r\n          <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    EmojiPickerLibComponent.ctorParameters = function () { return [
        { type: EmojisSharedService }
    ]; };
    EmojiPickerLibComponent.propDecorators = {
        emojiPickerOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectEmojiEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return EmojiPickerLibComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OutClickDirective = /** @class */ (function () {
    function OutClickDirective(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OutClickDirective.prototype.toggleOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.outClickEvent.emit();
        }
    };
    OutClickDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[outClick]'
                },] }
    ];
    /** @nocollapse */
    OutClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    OutClickDirective.propDecorators = {
        outClickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] }]
    };
    return OutClickDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    AutofocusDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.focusOnElement();
    };
    /**
     * @private
     * @return {?}
     */
    AutofocusDirective.prototype.focusOnElement = /**
     * @private
     * @return {?}
     */
    function () {
        this.element.nativeElement.focus();
    };
    AutofocusDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[autofocus]'
                },] }
    ];
    /** @nocollapse */
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return AutofocusDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiPickerLibModule = /** @class */ (function () {
    function EmojiPickerLibModule() {
    }
    EmojiPickerLibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        OutClickDirective,
                        AutofocusDirective,
                        EmojiPickerLibComponent
                    ],
                    imports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ],
                    exports: [
                        EmojiPickerLibComponent
                    ],
                    providers: [EmojiPickerService, EmojisSharedService]
                },] }
    ];
    return EmojiPickerLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IData() { }
if (false) {}
/**
 * @record
 */
function ICategory() { }
if (false) {}
/**
 * @record
 */
function IEmoji() { }
if (false) {}
/**
 * @record
 */
function IEmojiPickerOptions() { }
if (false) {}
/**
 * @record
 */
function ISelectedCategory() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=emoji-picker-lib.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!********************************************************************************************************!*\
  !*** C:/Users/user/Desktop/emoji-picker-angular8/node_modules/raw-loader!./src/app/app.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-container\">\n  <input type=\"text\" [(ngModel)]=\"inputValue\">\n  <emoji-picker [emojiPickerOptions]=\"emojiPickerOptions\"\n                (selectEmojiEvent)=\"selectEmoji($event)\"></emoji-picker>\n</div>\n"

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
    AppComponent.prototype.ngOnInit = function () {
        this.initializeEmojiPickerOptions();
    };
    AppComponent.prototype.initializeEmojiPickerOptions = function () {
        this.emojiPickerOptions = {
            customClass: 'customClass',
            emojisPerRow: 13,
            emojiPickerPosition: 'left',
            defaultCatalogId: 1
        };
    };
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
/* harmony import */ var dist_emoji_picker_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dist/emoji-picker-lib */ "../../dist/emoji-picker-lib/fesm5/emoji-picker-lib.js");






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
                dist_emoji_picker_lib__WEBPACK_IMPORTED_MODULE_5__["EmojiPickerLibModule"]
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