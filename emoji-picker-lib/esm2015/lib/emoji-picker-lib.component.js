/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmojisSharedService } from './@core/services/emojis.shared';
export class EmojiPickerLibComponent {
    /**
     * @param {?} emojisSharedService
     */
    constructor(emojisSharedService) {
        this.emojisSharedService = emojisSharedService;
        this.selectEmojiEvent = new EventEmitter();
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
    { type: Component, args: [{
                selector: 'emoji-picker',
                template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\"\r\n     [ngClass]=\"emojiPickerOptions?.customClass ? emojiPickerOptions?.customClass : ''\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\"\r\n          [ngClass]=\"{'active': emojiPickerOptions?.showEmojiPicker}\">\r\n    <ng-container *ngIf=\"emojiPickerOptions?.btnIcon; else btnIconImg\">\r\n      <span class=\"{{emojiPickerOptions?.btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"emojiPickerOptions?.showEmojiPicker\"\r\n       [ngClass]=\"emojiPickerOptions?.emojiPickerPosition ? 'emoji-picker--block--' + emojiPickerOptions.emojiPickerPosition : ''\"\r\n       class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"showSelectedEmojis(i)\"\r\n           [ngClass]=\"{'selected': selectedCategory?.category.id === category.id && !emojiPickerOptions.searchValue}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"emojiPickerOptions.searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"emojiPickerOptions?.searchIcon; else searchIconImg\">\r\n        <span class=\"{{emojiPickerOptions?.searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <p *ngIf=\"!emojiPickerOptions.searchValue\" class=\"emoji-picker--category-name\">{{selectedCategory?.category.name}}</p>\r\n    <div class=\"emoji-picker--emojis\"\r\n         [ngClass]=\"{'emoji-picker--emojis--full-height': emojiPickerOptions.searchValue}\">\r\n      <ng-container *ngFor=\"let emoji of selectedCategory?.emojis\">\r\n        <div *ngIf=\"emoji.isSupported\" class=\"emoji-picker--emoji\"\r\n             (click)=\"selectEmoji(emoji.emoji)\"\r\n             [ngStyle]=\"{'width': calcEmojiSize(emojiPickerOptions?.emojisPerRow)}\">\r\n          <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
EmojiPickerLibComponent.ctorParameters = () => [
    { type: EmojisSharedService }
];
EmojiPickerLibComponent.propDecorators = {
    emojiPickerOptions: [{ type: Input }],
    selectEmojiEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbW9qaS1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Vtb2ppLXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBT25FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFLbEQscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHdkUscUJBQWdCLEdBQXNCLG1CQUFBLEVBQUUsRUFBcUIsQ0FBQztJQVByRSxDQUFDOzs7O0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3hCLFlBQVksRUFBRSxDQUFDO1lBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxPQUFlO1FBQ3pDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsQ0FBQztJQUNwSSxDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFTSxpQkFBaUI7UUFDdEIsSUFBSTtZQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDO1NBQ3BGO1FBQUMsT0FBTyxLQUFLLEVBQUU7U0FDZjtJQUNILENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3ZFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUMxSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIscW9GQUFnRDthQUNqRDs7OztZQU5PLG1CQUFtQjs7O2lDQVd4QixLQUFLOytCQUVMLE1BQU07Ozs7SUFGUCxxREFBaUQ7O0lBRWpELG1EQUE4RTs7SUFFOUUsdUNBQW1COztJQUNuQixtREFBcUU7Ozs7O0lBUnpELHNEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RW1vamlzU2hhcmVkU2VydmljZX0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlcy9lbW9qaXMuc2hhcmVkJztcbmltcG9ydCB7SURhdGEsIElFbW9qaSwgSUVtb2ppUGlja2VyT3B0aW9ucywgSVNlbGVjdGVkQ2F0ZWdvcnl9IGZyb20gJy4vQGNvcmUvaW50ZXJmYWNlcy9kYXRhLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbW9qaS1waWNrZXItbGliLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1vamlzU2hhcmVkU2VydmljZTogRW1vamlzU2hhcmVkU2VydmljZSkge1xuICB9XG5cbiAgQElucHV0KCkgZW1vamlQaWNrZXJPcHRpb25zOiBJRW1vamlQaWNrZXJPcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RFbW9qaUV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHB1YmxpYyBkYXRhOiBJRGF0YTtcbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IElTZWxlY3RlZENhdGVnb3J5ID0ge30gYXMgSVNlbGVjdGVkQ2F0ZWdvcnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RGF0YSgpO1xuICAgIHRoaXMuZ2V0RW1vamlzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZW1vamlQaWNrZXJPcHRpb25zID0ge1xuICAgICAgZW1vamlzUGVyUm93OiA5LFxuICAgICAgZGVmYXVsdENhdGFsb2dJZDogMFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEVtb2ppcygpOiB2b2lkIHtcbiAgICB0aGlzLmVtb2ppc1NoYXJlZFNlcnZpY2UuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmNsdWRlc1NlYXJjaFZhbHVlKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbGVtZW50LmluY2x1ZGVzKHRoaXMuZW1vamlQaWNrZXJPcHRpb25zLnNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgcHVibGljIHNob3dTZWxlY3RlZEVtb2ppcyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5LmNhdGVnb3J5ID0gdGhpcy5kYXRhLmNhdGVnb3JpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5lbW9qaXMgPSB0aGlzLmRhdGEuZW1vamlzLmZpbHRlcigoZW1vamk6IElFbW9qaSkgPT4gZW1vamkuY2F0ZWdvcnlJZCA9PT0gdGhpcy5zZWxlY3RlZENhdGVnb3J5LmNhdGVnb3J5LmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjRW1vamlTaXplKGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsxMDAgLyBjb3VudH0lYDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RFbW9qaShlbW9qaTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RFbW9qaUV2ZW50LmVtaXQoZW1vamkpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUVtb2ppUGlja2VyKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVtb2ppc1NoYXJlZFNlcnZpY2UuY2hlY2tFbW9qaVN1cHBvcnQodGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdGVkRW1vamlzKHRoaXMuZW1vamlQaWNrZXJPcHRpb25zLmRlZmF1bHRDYXRhbG9nSWQpO1xuICAgICAgdGhpcy5lbW9qaVBpY2tlck9wdGlvbnMuc2hvd0Vtb2ppUGlja2VyID0gIXRoaXMuZW1vamlQaWNrZXJPcHRpb25zLnNob3dFbW9qaVBpY2tlcjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2hFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVtb2ppUGlja2VyT3B0aW9ucy5zZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5LmVtb2ppcyA9IHRoaXMuZGF0YS5lbW9qaXMuZmlsdGVyKChlbW9qaTogSUVtb2ppKSA9PlxuICAgICAgICBlbW9qaS5rZXl3b3Jkcy5zb21lKChrZXk6IHN0cmluZykgPT4gdGhpcy5pbmNsdWRlc1NlYXJjaFZhbHVlKGtleS50b0xvd2VyQ2FzZSgpKSkgfHwgdGhpcy5pbmNsdWRlc1NlYXJjaFZhbHVlKGVtb2ppLm5hbWUpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dTZWxlY3RlZEVtb2ppcygwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VFbW9qaVBpY2tlcigpOiB2b2lkIHtcbiAgICB0aGlzLmVtb2ppUGlja2VyT3B0aW9ucy5zaG93RW1vamlQaWNrZXIgPSBmYWxzZTtcbiAgICB0aGlzLmVtb2ppUGlja2VyT3B0aW9ucy5zZWFyY2hWYWx1ZSA9ICcnO1xuICB9XG59XG4iXX0=