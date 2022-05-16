import {Component, OnInit} from '@angular/core';

import {IEmojiPickerOptions} from '../../../emoji-picker-lib/src/lib/@core/interfaces/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public inputValue: string = '';
  public emojiPickerOptions: IEmojiPickerOptions;

  constructor() {
  }

  ngOnInit() {
    this.initializeEmojiPickerOptions();
  }

  private initializeEmojiPickerOptions(): void {
    this.emojiPickerOptions = {
      customClass: 'customClass',
      emojisPerRow: 13,
      emojiPickerPosition: 'left',
      defaultCatalogId: 1
    };
  }

  public selectEmoji(emoji: string): void {
    this.inputValue += emoji;
  }
}
