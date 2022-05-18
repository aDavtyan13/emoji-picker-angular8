(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/emoji-picker-lib/fesm2015/emoji-picker-lib.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/user/Desktop/emoji-picker-angular8/dist/emoji-picker-lib/fesm2015/emoji-picker-lib.js ***!
  \******************************************************************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiPickerService {
    /**
     * @return {?}
     */
    getEmojis() {
        return fetch('./assets/data/emojis.json').then((/**
         * @param {?} result
         * @return {?}
         */
        result => result.json()));
    }
}
EmojiPickerService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojisSharedService {
    /**
     * @param {?} emojiPickerService
     */
    constructor(emojiPickerService) {
        this.emojiPickerService = emojiPickerService;
        this.emojis = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]((/** @type {?} */ ({})));
        this.data = this.emojis.asObservable();
        this.getEmojis();
    }
    /**
     * @private
     * @return {?}
     */
    getEmojis() {
        this.emojiPickerService.getEmojis().then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.emojis.next(data)));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    isEmoji(item) {
        this.ctx.clearRect(0, 0, 4, 4);
        this.ctx.fillText(item, -4, 4);
        return this.ctx.getImageData(0, 0, 1, 1).data[1] > 0;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    checkEmojiSupport(data) {
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
        (element) => {
            element.isSupported = this.isEmoji(element.emoji);
        }));
    }
}
EmojisSharedService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
EmojisSharedService.ctorParameters = () => [
    { type: EmojiPickerService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiPickerLibComponent {
    /**
     * @param {?} emojisSharedService
     */
    constructor(emojisSharedService) {
        this.emojisSharedService = emojisSharedService;
        this.selectEmojiEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedCategory = (/** @type {?} */ ({}));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initData();
        this.getEmojis();
    }
    /**
     * @private
     * @return {?}
     */
    initData() {
        this.emojiPickerOptions = {
            emojisPerRow: 9,
            defaultCatalogId: 0
        };
    }
    /**
     * @private
     * @return {?}
     */
    getEmojis() {
        this.emojisSharedService.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data;
        }));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    includesSearchValue(element) {
        return element.includes(this.emojiPickerOptions.searchValue.toLowerCase());
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showSelectedEmojis(index) {
        this.selectedCategory.category = this.data.categories[index];
        this.selectedCategory.emojis = this.data.emojis.filter((/**
         * @param {?} emoji
         * @return {?}
         */
        (emoji) => emoji.categoryId === this.selectedCategory.category.id));
    }
    /**
     * @param {?} count
     * @return {?}
     */
    calcEmojiSize(count) {
        return `${100 / count}%`;
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    selectEmoji(emoji) {
        this.selectEmojiEvent.emit(emoji);
    }
    /**
     * @return {?}
     */
    toggleEmojiPicker() {
        try {
            this.emojisSharedService.checkEmojiSupport(this.data);
            this.showSelectedEmojis(this.emojiPickerOptions.defaultCatalogId);
            this.emojiPickerOptions.showEmojiPicker = !this.emojiPickerOptions.showEmojiPicker;
        }
        catch (error) {
        }
    }
    /**
     * @return {?}
     */
    searchElement() {
        if (this.emojiPickerOptions.searchValue) {
            this.selectedCategory.emojis = this.data.emojis.filter((/**
             * @param {?} emoji
             * @return {?}
             */
            (emoji) => emoji.keywords.some((/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.includesSearchValue(key.toLowerCase()))) || this.includesSearchValue(emoji.name)));
        }
        else {
            this.showSelectedEmojis(0);
        }
    }
    /**
     * @return {?}
     */
    closeEmojiPicker() {
        this.emojiPickerOptions.showEmojiPicker = false;
        this.emojiPickerOptions.searchValue = '';
    }
}
EmojiPickerLibComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'emoji-picker',
                template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\"\r\n     [ngClass]=\"emojiPickerOptions?.customClass ? emojiPickerOptions?.customClass : ''\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\"\r\n          [ngClass]=\"{'active': emojiPickerOptions?.showEmojiPicker}\">\r\n    <ng-container *ngIf=\"emojiPickerOptions?.btnIcon; else btnIconImg\">\r\n      <span class=\"{{emojiPickerOptions?.btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"emojiPickerOptions?.showEmojiPicker\"\r\n       [ngClass]=\"emojiPickerOptions?.emojiPickerPosition ? 'emoji-picker--block--' + emojiPickerOptions.emojiPickerPosition : ''\"\r\n       class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"showSelectedEmojis(i)\"\r\n           [ngClass]=\"{'selected': selectedCategory?.category.id === category.id && !emojiPickerOptions.searchValue}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"emojiPickerOptions.searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"emojiPickerOptions?.searchIcon; else searchIconImg\">\r\n        <span class=\"{{emojiPickerOptions?.searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <p *ngIf=\"!emojiPickerOptions.searchValue\" class=\"emoji-picker--category-name\">{{selectedCategory?.category.name}}</p>\r\n    <div class=\"emoji-picker--emojis\"\r\n         [ngClass]=\"{'emoji-picker--emojis--full-height': emojiPickerOptions.searchValue}\">\r\n      <ng-container *ngFor=\"let emoji of selectedCategory?.emojis\">\r\n        <div *ngIf=\"emoji.isSupported\" class=\"emoji-picker--emoji\"\r\n             (click)=\"selectEmoji(emoji.emoji)\"\r\n             [ngStyle]=\"{'width': calcEmojiSize(emojiPickerOptions?.emojisPerRow)}\">\r\n          <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
EmojiPickerLibComponent.ctorParameters = () => [
    { type: EmojisSharedService }
];
EmojiPickerLibComponent.propDecorators = {
    emojiPickerOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectEmojiEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutClickDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleOpen(event) {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.outClickEvent.emit();
        }
    }
}
OutClickDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[outClick]'
            },] }
];
/** @nocollapse */
OutClickDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
OutClickDirective.propDecorators = {
    outClickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    toggleOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutofocusDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusOnElement();
    }
    /**
     * @private
     * @return {?}
     */
    focusOnElement() {
        this.element.nativeElement.focus();
    }
}
AutofocusDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[autofocus]'
            },] }
];
/** @nocollapse */
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiPickerLibModule {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.inputValue = '';
    }
    ngOnInit() {
        this.initializeEmojiPickerOptions();
    }
    initializeEmojiPickerOptions() {
        this.emojiPickerOptions = {
            customClass: 'customClass',
            emojisPerRow: 13,
            emojiPickerPosition: 'left',
            defaultCatalogId: 1
        };
    }
    selectEmoji(emoji) {
        this.inputValue += emoji;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html")
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var dist_emoji_picker_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dist/emoji-picker-lib */ "../../dist/emoji-picker-lib/fesm2015/emoji-picker-lib.js");






let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map