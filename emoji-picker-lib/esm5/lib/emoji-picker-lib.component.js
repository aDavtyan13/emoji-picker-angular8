/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmojisSharedService } from './@core/services/emojis.shared';
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
export { EmojiPickerLibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbW9qaS1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Vtb2ppLXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBR25FO0lBS0UsaUNBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBS2xELHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3ZFLHFCQUFnQixHQUFzQixtQkFBQSxFQUFFLEVBQXFCLENBQUM7SUFQckUsQ0FBQzs7OztJQVNELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTywwQ0FBUTs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRztZQUN4QixZQUFZLEVBQUUsQ0FBQztZQUNmLGdCQUFnQixFQUFFLENBQUM7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sMkNBQVM7Ozs7SUFBakI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUMxQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHFEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsT0FBZTtRQUN6QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRU0sb0RBQWtCOzs7O0lBQXpCLFVBQTBCLEtBQWE7UUFBdkMsaUJBR0M7UUFGQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBdEQsQ0FBc0QsRUFBQyxDQUFDO0lBQ3BJLENBQUM7Ozs7O0lBRU0sK0NBQWE7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUNoQyxPQUFVLEdBQUcsR0FBRyxLQUFLLE1BQUcsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLDZDQUFXOzs7O0lBQWxCLFVBQW1CLEtBQWE7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRU0sbURBQWlCOzs7SUFBeEI7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7U0FDcEY7UUFBQyxPQUFPLEtBQUssRUFBRTtTQUNmO0lBQ0gsQ0FBQzs7OztJQUVNLCtDQUFhOzs7SUFBcEI7UUFBQSxpQkFRQztRQVBDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLEtBQWE7Z0JBQ25FLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUEzQyxDQUEyQyxFQUFDLElBQUksS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFBekgsQ0FBeUgsRUFDMUgsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBRU0sa0RBQWdCOzs7SUFBdkI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qixxb0ZBQWdEO2lCQUNqRDs7OztnQkFOTyxtQkFBbUI7OztxQ0FXeEIsS0FBSzttQ0FFTCxNQUFNOztJQStEVCw4QkFBQztDQUFBLEFBekVELElBeUVDO1NBckVZLHVCQUF1Qjs7O0lBSWxDLHFEQUFpRDs7SUFFakQsbURBQThFOztJQUU5RSx1Q0FBbUI7O0lBQ25CLG1EQUFxRTs7Ozs7SUFSekQsc0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtFbW9qaXNTaGFyZWRTZXJ2aWNlfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2VzL2Vtb2ppcy5zaGFyZWQnO1xuaW1wb3J0IHtJRGF0YSwgSUVtb2ppLCBJRW1vamlQaWNrZXJPcHRpb25zLCBJU2VsZWN0ZWRDYXRlZ29yeX0gZnJvbSAnLi9AY29yZS9pbnRlcmZhY2VzL2RhdGEuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vtb2ppLXBpY2tlci1saWIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEVtb2ppUGlja2VyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaXNTaGFyZWRTZXJ2aWNlOiBFbW9qaXNTaGFyZWRTZXJ2aWNlKSB7XG4gIH1cblxuICBASW5wdXQoKSBlbW9qaVBpY2tlck9wdGlvbnM6IElFbW9qaVBpY2tlck9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIHNlbGVjdEVtb2ppRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHVibGljIGRhdGE6IElEYXRhO1xuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogSVNlbGVjdGVkQ2F0ZWdvcnkgPSB7fSBhcyBJU2VsZWN0ZWRDYXRlZ29yeTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgdGhpcy5nZXRFbW9qaXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5lbW9qaVBpY2tlck9wdGlvbnMgPSB7XG4gICAgICBlbW9qaXNQZXJSb3c6IDksXG4gICAgICBkZWZhdWx0Q2F0YWxvZ0lkOiAwXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW1vamlzKCk6IHZvaWQge1xuICAgIHRoaXMuZW1vamlzU2hhcmVkU2VydmljZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluY2x1ZGVzU2VhcmNoVmFsdWUoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5jbHVkZXModGhpcy5lbW9qaVBpY2tlck9wdGlvbnMuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBwdWJsaWMgc2hvd1NlbGVjdGVkRW1vamlzKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuY2F0ZWdvcnkgPSB0aGlzLmRhdGEuY2F0ZWdvcmllc1tpbmRleF07XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5LmVtb2ppcyA9IHRoaXMuZGF0YS5lbW9qaXMuZmlsdGVyKChlbW9qaTogSUVtb2ppKSA9PiBlbW9qaS5jYXRlZ29yeUlkID09PSB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuY2F0ZWdvcnkuaWQpO1xuICB9XG5cbiAgcHVibGljIGNhbGNFbW9qaVNpemUoY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkezEwMCAvIGNvdW50fSVgO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEVtb2ppKGVtb2ppOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEVtb2ppRXZlbnQuZW1pdChlbW9qaSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRW1vamlQaWNrZXIoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZW1vamlzU2hhcmVkU2VydmljZS5jaGVja0Vtb2ppU3VwcG9ydCh0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5zaG93U2VsZWN0ZWRFbW9qaXModGhpcy5lbW9qaVBpY2tlck9wdGlvbnMuZGVmYXVsdENhdGFsb2dJZCk7XG4gICAgICB0aGlzLmVtb2ppUGlja2VyT3B0aW9ucy5zaG93RW1vamlQaWNrZXIgPSAhdGhpcy5lbW9qaVBpY2tlck9wdGlvbnMuc2hvd0Vtb2ppUGlja2VyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlYXJjaEVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW1vamlQaWNrZXJPcHRpb25zLnNlYXJjaFZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuZW1vamlzID0gdGhpcy5kYXRhLmVtb2ppcy5maWx0ZXIoKGVtb2ppOiBJRW1vamkpID0+XG4gICAgICAgIGVtb2ppLmtleXdvcmRzLnNvbWUoKGtleTogc3RyaW5nKSA9PiB0aGlzLmluY2x1ZGVzU2VhcmNoVmFsdWUoa2V5LnRvTG93ZXJDYXNlKCkpKSB8fCB0aGlzLmluY2x1ZGVzU2VhcmNoVmFsdWUoZW1vamkubmFtZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdGVkRW1vamlzKDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUVtb2ppUGlja2VyKCk6IHZvaWQge1xuICAgIHRoaXMuZW1vamlQaWNrZXJPcHRpb25zLnNob3dFbW9qaVBpY2tlciA9IGZhbHNlO1xuICAgIHRoaXMuZW1vamlQaWNrZXJPcHRpb25zLnNlYXJjaFZhbHVlID0gJyc7XG4gIH1cbn1cbiJdfQ==