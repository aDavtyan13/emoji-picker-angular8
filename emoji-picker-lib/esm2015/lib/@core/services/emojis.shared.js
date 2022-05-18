/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmojiPickerService } from '../../emoji-picker-lib.service';
export class EmojisSharedService {
    /**
     * @param {?} emojiPickerService
     */
    constructor(emojiPickerService) {
        this.emojiPickerService = emojiPickerService;
        this.emojis = new BehaviorSubject((/** @type {?} */ ({})));
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
    { type: Injectable }
];
/** @nocollapse */
EmojisSharedService.ctorParameters = () => [
    { type: EmojiPickerService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamlzLnNoYXJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Vtb2ppLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvQGNvcmUvc2VydmljZXMvZW1vamlzLnNoYXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBR2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBR2xFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFNOUIsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKbEQsV0FBTSxHQUEyQixJQUFJLGVBQWUsQ0FBUSxtQkFBQSxFQUFFLEVBQVMsQ0FBQyxDQUFDO1FBRTFFLFNBQUksR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUcxRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNwRixDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsSUFBWTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsSUFBVztRQUNsQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLENBQUMsT0FBZSxFQUFFLEVBQUU7WUFDdEMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQS9CRixVQUFVOzs7O1lBRkgsa0JBQWtCOzs7Ozs7O0lBSXhCLGtDQUFzQzs7Ozs7SUFDdEMscUNBQWlGOztJQUVqRixtQ0FBNEQ7Ozs7O0lBRWhELGlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7SURhdGEsIElFbW9qaX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7RW1vamlQaWNrZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9lbW9qaS1waWNrZXItbGliLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1vamlzU2hhcmVkU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIGVtb2ppczogQmVoYXZpb3JTdWJqZWN0PElEYXRhPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SURhdGE+KHt9IGFzIElEYXRhKTtcclxuXHJcbiAgcHVibGljIGRhdGE6IE9ic2VydmFibGU8SURhdGE+ID0gdGhpcy5lbW9qaXMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1vamlQaWNrZXJTZXJ2aWNlOiBFbW9qaVBpY2tlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuZ2V0RW1vamlzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVtb2ppcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZW1vamlQaWNrZXJTZXJ2aWNlLmdldEVtb2ppcygpLnRoZW4oKGRhdGE6IElEYXRhKSA9PiB0aGlzLmVtb2ppcy5uZXh0KGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNFbW9qaShpdGVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA0LCA0KTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGl0ZW0sIC00LCA0KTtcclxuICAgIHJldHVybiB0aGlzLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YVsxXSA+IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tFbW9qaVN1cHBvcnQoZGF0YTogSURhdGEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmN0eCB8fCAhZGF0YS5lbW9qaXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gMTtcclxuICAgIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgPSAxO1xyXG4gICAgZGF0YS5lbW9qaXMuZm9yRWFjaCgoZWxlbWVudDogSUVtb2ppKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuaXNTdXBwb3J0ZWQgPSB0aGlzLmlzRW1vamkoZWxlbWVudC5lbW9qaSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19