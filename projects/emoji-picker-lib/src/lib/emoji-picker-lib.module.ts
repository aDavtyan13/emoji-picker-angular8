import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {EmojiPickerLibComponent} from './emoji-picker-lib.component';
import {OutClickDirective} from './@theme/directives/outclick.directive';
import {AutofocusDirective} from './@theme/directives/autofocus.directive';

@NgModule({
  declarations: [
    OutClickDirective,
    AutofocusDirective,
    EmojiPickerLibComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    EmojiPickerLibComponent
  ]
})
export class EmojiPickerLibModule {
}
