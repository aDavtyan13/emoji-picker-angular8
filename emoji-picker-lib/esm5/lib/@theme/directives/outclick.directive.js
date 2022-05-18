/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
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
export { OutClickDirective };
if (false) {
    /** @type {?} */
    OutClickDirective.prototype.outClickEvent;
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0Y2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW1vamktcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvZGlyZWN0aXZlcy9vdXRjbGljay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhGO0lBSUUsMkJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0Isa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUQ3QixDQUFDOzs7OztJQUl6QyxzQ0FBVTs7OztJQURWLFVBQ1csS0FBVTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFKa0IsVUFBVTs7O2dDQU8xQixNQUFNOzZCQUVOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFNNUMsd0JBQUM7Q0FBQSxBQWJELElBYUM7U0FWWSxpQkFBaUI7OztJQUU1QiwwQ0FBcUU7Ozs7O0lBRHpELGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW291dENsaWNrXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE91dENsaWNrRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG4gIEBPdXRwdXQoKSBvdXRDbGlja0V2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbihldmVudDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMub3V0Q2xpY2tFdmVudC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==