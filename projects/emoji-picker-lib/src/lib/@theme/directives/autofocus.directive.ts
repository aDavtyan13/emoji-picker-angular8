import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {
  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.focusOnElement();
  }

  private focusOnElement(): void {
    this.element.nativeElement.focus();
  }
}
