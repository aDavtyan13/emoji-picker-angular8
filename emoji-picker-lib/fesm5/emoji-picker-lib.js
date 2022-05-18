import { Injectable, EventEmitter, Component, Input, Output, Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

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
        { type: Injectable }
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
        this.emojis = new BehaviorSubject((/** @type {?} */ ({})));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    EmojisSharedService.ctorParameters = function () { return [
        { type: EmojiPickerService }
    ]; };
    return EmojisSharedService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    EmojisSharedService.prototype.ctx;
    /**
     * @type {?}
     * @private
     */
    EmojisSharedService.prototype.emojis;
    /** @type {?} */
    EmojisSharedService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    EmojisSharedService.prototype.emojiPickerService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiPickerLibComponent = /** @class */ (function () {
    function EmojiPickerLibComponent(emojisSharedService) {
        this.emojisSharedService = emojisSharedService;
        this.selectEmojiEvent = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'emoji-picker',
                    template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\"\r\n     [ngClass]=\"emojiPickerOptions?.customClass ? emojiPickerOptions?.customClass : ''\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\"\r\n          [ngClass]=\"{'active': emojiPickerOptions?.showEmojiPicker}\">\r\n    <ng-container *ngIf=\"emojiPickerOptions?.btnIcon; else btnIconImg\">\r\n      <span class=\"{{emojiPickerOptions?.btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"emojiPickerOptions?.showEmojiPicker\"\r\n       [ngClass]=\"emojiPickerOptions?.emojiPickerPosition ? 'emoji-picker--block--' + emojiPickerOptions.emojiPickerPosition : ''\"\r\n       class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"showSelectedEmojis(i)\"\r\n           [ngClass]=\"{'selected': selectedCategory?.category.id === category.id && !emojiPickerOptions.searchValue}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"emojiPickerOptions.searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"emojiPickerOptions?.searchIcon; else searchIconImg\">\r\n        <span class=\"{{emojiPickerOptions?.searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <p *ngIf=\"!emojiPickerOptions.searchValue\" class=\"emoji-picker--category-name\">{{selectedCategory?.category.name}}</p>\r\n    <div class=\"emoji-picker--emojis\"\r\n         [ngClass]=\"{'emoji-picker--emojis--full-height': emojiPickerOptions.searchValue}\">\r\n      <ng-container *ngFor=\"let emoji of selectedCategory?.emojis\">\r\n        <div *ngIf=\"emoji.isSupported\" class=\"emoji-picker--emoji\"\r\n             (click)=\"selectEmoji(emoji.emoji)\"\r\n             [ngStyle]=\"{'width': calcEmojiSize(emojiPickerOptions?.emojisPerRow)}\">\r\n          <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    EmojiPickerLibComponent.ctorParameters = function () { return [
        { type: EmojisSharedService }
    ]; };
    EmojiPickerLibComponent.propDecorators = {
        emojiPickerOptions: [{ type: Input }],
        selectEmojiEvent: [{ type: Output }]
    };
    return EmojiPickerLibComponent;
}());
if (false) {
    /** @type {?} */
    EmojiPickerLibComponent.prototype.emojiPickerOptions;
    /** @type {?} */
    EmojiPickerLibComponent.prototype.selectEmojiEvent;
    /** @type {?} */
    EmojiPickerLibComponent.prototype.data;
    /** @type {?} */
    EmojiPickerLibComponent.prototype.selectedCategory;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerLibComponent.prototype.emojisSharedService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OutClickDirective = /** @class */ (function () {
    function OutClickDirective(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[outClick]'
                },] }
    ];
    /** @nocollapse */
    OutClickDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OutClickDirective.propDecorators = {
        outClickEvent: [{ type: Output }],
        toggleOpen: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return OutClickDirective;
}());
if (false) {
    /** @type {?} */
    OutClickDirective.prototype.outClickEvent;
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.elRef;
}

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
        { type: Directive, args: [{
                    selector: '[autofocus]'
                },] }
    ];
    /** @nocollapse */
    AutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AutofocusDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiPickerLibModule = /** @class */ (function () {
    function EmojiPickerLibModule() {
    }
    EmojiPickerLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        OutClickDirective,
                        AutofocusDirective,
                        EmojiPickerLibComponent
                    ],
                    imports: [
                        FormsModule,
                        CommonModule,
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
if (false) {
    /** @type {?} */
    IData.prototype.categories;
    /** @type {?} */
    IData.prototype.emojis;
}
/**
 * @record
 */
function ICategory() { }
if (false) {
    /** @type {?} */
    ICategory.prototype.id;
    /** @type {?} */
    ICategory.prototype.name;
    /** @type {?} */
    ICategory.prototype.emoji;
    /** @type {?|undefined} */
    ICategory.prototype.selected;
    /** @type {?|undefined} */
    ICategory.prototype.emojis;
}
/**
 * @record
 */
function IEmoji() { }
if (false) {
    /** @type {?} */
    IEmoji.prototype.id;
    /** @type {?} */
    IEmoji.prototype.name;
    /** @type {?} */
    IEmoji.prototype.emoji;
    /** @type {?} */
    IEmoji.prototype.keywords;
    /** @type {?} */
    IEmoji.prototype.categoryId;
    /** @type {?|undefined} */
    IEmoji.prototype.isSupported;
}
/**
 * @record
 */
function IEmojiPickerOptions() { }
if (false) {
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.btnIcon;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.searchIcon;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.customClass;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.emojisPerRow;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.emojiPickerPosition;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.showEmojiPicker;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.searchValue;
    /** @type {?|undefined} */
    IEmojiPickerOptions.prototype.defaultCatalogId;
}
/**
 * @record
 */
function ISelectedCategory() { }
if (false) {
    /** @type {?} */
    ISelectedCategory.prototype.category;
    /** @type {?} */
    ISelectedCategory.prototype.emojis;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EmojiPickerLibComponent, EmojiPickerLibModule, EmojiPickerService, OutClickDirective as ɵa, AutofocusDirective as ɵb, EmojisSharedService as ɵc };
//# sourceMappingURL=emoji-picker-lib.js.map
