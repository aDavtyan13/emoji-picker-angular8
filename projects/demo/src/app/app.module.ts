import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EmojiPickerLibModule} from 'emoji-picker-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmojiPickerLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
