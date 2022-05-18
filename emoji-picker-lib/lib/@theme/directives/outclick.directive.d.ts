import { ElementRef, EventEmitter } from '@angular/core';
export declare class OutClickDirective {
    private elRef;
    constructor(elRef: ElementRef);
    outClickEvent: EventEmitter<any>;
    toggleOpen(event: any): void;
}
