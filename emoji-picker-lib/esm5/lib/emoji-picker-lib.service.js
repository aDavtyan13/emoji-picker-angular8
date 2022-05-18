/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
export { EmojiPickerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW1vamktcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbW9qaS1waWNrZXItbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekM7SUFBQTtJQUtBLENBQUM7Ozs7SUFIUSxzQ0FBUzs7O0lBQWhCO1FBQ0UsT0FBTyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBSkYsVUFBVTs7SUFLWCx5QkFBQztDQUFBLEFBTEQsSUFLQztTQUpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7SURhdGF9IGZyb20gJy4vQGNvcmUvaW50ZXJmYWNlcy9kYXRhLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlclNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0RW1vamlzKCk6IFByb21pc2U8SURhdGE+IHtcbiAgICByZXR1cm4gZmV0Y2goJy4vYXNzZXRzL2RhdGEvZW1vamlzLmpzb24nKS50aGVuKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcbiAgfVxufVxuIl19