/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
export class OutClickDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new EventEmitter();
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
    { type: Directive, args: [{
                selector: '[outClick]'
            },] }
];
/** @nocollapse */
OutClickDirective.ctorParameters = () => [
    { type: ElementRef }
];
OutClickDirective.propDecorators = {
    outClickEvent: [{ type: Output }],
    toggleOpen: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    OutClickDirective.prototype.outClickEvent;
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0Y2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW1vamktcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvZGlyZWN0aXZlcy9vdXRjbGljay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3hGLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUMzQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRDdCLENBQUM7Ozs7O0lBSXpDLFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFKa0IsVUFBVTs7OzRCQU8xQixNQUFNO3lCQUVOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQUYxQywwQ0FBcUU7Ozs7O0lBRHpELGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW291dENsaWNrXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE91dENsaWNrRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG4gIEBPdXRwdXQoKSBvdXRDbGlja0V2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbihldmVudDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMub3V0Q2xpY2tFdmVudC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==