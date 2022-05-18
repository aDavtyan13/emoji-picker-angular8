import { ElementRef, OnInit } from '@angular/core';
export declare class AutofocusDirective implements OnInit {
    private element;
    constructor(element: ElementRef);
    ngOnInit(): void;
    private focusOnElement;
}
