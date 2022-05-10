import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {EmojiPickerService} from './emoji-picker-lib.service';
import {EmojisSharedService} from './@core/services/emojis.shared';
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
  ],
  providers: [EmojiPickerService, EmojisSharedService]
})
export class EmojiPickerLibModule {
}
