/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
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
export { AutofocusDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Vtb2ppLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvQHRoZW1lL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFNUQ7SUFJRSw0QkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUN2QyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sMkNBQWM7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQUprQixVQUFVOztJQWdCN0IseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FYWSxrQkFBa0I7Ozs7OztJQUNqQixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F1dG9mb2N1c10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvZm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzT25FbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvY3VzT25FbGVtZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcbn1cclxuIl19