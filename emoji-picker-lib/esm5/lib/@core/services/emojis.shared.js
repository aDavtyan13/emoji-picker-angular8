/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmojiPickerService } from '../../emoji-picker-lib.service';
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
export { EmojisSharedService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamlzLnNoYXJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Vtb2ppLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvQGNvcmUvc2VydmljZXMvZW1vamlzLnNoYXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBR2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFO0lBT0UsNkJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSmxELFdBQU0sR0FBMkIsSUFBSSxlQUFlLENBQVEsbUJBQUEsRUFBRSxFQUFTLENBQUMsQ0FBQztRQUUxRSxTQUFJLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sdUNBQVM7Ozs7SUFBakI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFXLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7OztJQUVPLHFDQUFPOzs7OztJQUFmLFVBQWdCLElBQVk7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVNLCtDQUFpQjs7OztJQUF4QixVQUF5QixJQUFXO1FBQXBDLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQWU7WUFDbEMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQS9CRixVQUFVOzs7O2dCQUZILGtCQUFrQjs7SUFrQzFCLDBCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EvQlksbUJBQW1COzs7Ozs7SUFDOUIsa0NBQXNDOzs7OztJQUN0QyxxQ0FBaUY7O0lBRWpGLG1DQUE0RDs7Ozs7SUFFaEQsaURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtJRGF0YSwgSUVtb2ppfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RhdGEuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtFbW9qaVBpY2tlclNlcnZpY2V9IGZyb20gJy4uLy4uL2Vtb2ppLXBpY2tlci1saWIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbW9qaXNTaGFyZWRTZXJ2aWNlIHtcclxuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByaXZhdGUgZW1vamlzOiBCZWhhdmlvclN1YmplY3Q8SURhdGE+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJRGF0YT4oe30gYXMgSURhdGEpO1xyXG5cclxuICBwdWJsaWMgZGF0YTogT2JzZXJ2YWJsZTxJRGF0YT4gPSB0aGlzLmVtb2ppcy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVBpY2tlclNlcnZpY2U6IEVtb2ppUGlja2VyU2VydmljZSkge1xyXG4gICAgdGhpcy5nZXRFbW9qaXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RW1vamlzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbW9qaVBpY2tlclNlcnZpY2UuZ2V0RW1vamlzKCkudGhlbigoZGF0YTogSURhdGEpID0+IHRoaXMuZW1vamlzLm5leHQoZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Vtb2ppKGl0ZW06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDQsIDQpO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoaXRlbSwgLTQsIDQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhWzFdID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0Vtb2ppU3VwcG9ydChkYXRhOiBJRGF0YSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3R4IHx8ICFkYXRhLmVtb2ppcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmN0eC5jYW52YXMud2lkdGggPSAxO1xyXG4gICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IDE7XHJcbiAgICBkYXRhLmVtb2ppcy5mb3JFYWNoKChlbGVtZW50OiBJRW1vamkpID0+IHtcclxuICAgICAgZWxlbWVudC5pc1N1cHBvcnRlZCA9IHRoaXMuaXNFbW9qaShlbGVtZW50LmVtb2ppKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=