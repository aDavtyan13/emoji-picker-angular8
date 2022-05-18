/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class EmojiPickerService {
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
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW1vamktcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbW9qaS1waWNrZXItbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLekMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUN0QixTQUFTO1FBQ2QsT0FBTyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUMxRSxDQUFDOzs7WUFKRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtJRGF0YX0gZnJvbSAnLi9AY29yZS9pbnRlcmZhY2VzL2RhdGEuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtb2ppUGlja2VyU2VydmljZSB7XG4gIHB1YmxpYyBnZXRFbW9qaXMoKTogUHJvbWlzZTxJRGF0YT4ge1xuICAgIHJldHVybiBmZXRjaCgnLi9hc3NldHMvZGF0YS9lbW9qaXMuanNvbicpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpO1xuICB9XG59XG4iXX0=