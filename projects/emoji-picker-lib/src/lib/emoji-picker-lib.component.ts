import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {EmojisSharedService} from './@core/services/emojis.shared';
import {IData, IEmoji, IEmojiPickerOptions, ISelectedCategory} from './@core/interfaces/data.interface';

@Component({
  selector: 'emoji-picker',
  templateUrl: './emoji-picker-lib.component.html'
})
export class EmojiPickerLibComponent implements OnInit {
  constructor(private emojisSharedService: EmojisSharedService) {
  }

  @Input() emojiPickerOptions: IEmojiPickerOptions = {};

  @Output() selectEmojiEvent: EventEmitter<string> = new EventEmitter<string>();

  public data: IData;
  public selectedCategory: ISelectedCategory = {} as ISelectedCategory;

  ngOnInit(): void {
    this.initData();
    this.getEmojis();
  }

  private initData(): void {
    this.emojiPickerOptions = {
      emojisPerRow: 9,
      defaultCatalogId: 0,
      ...this.emojiPickerOptions
    };
  }

  private getEmojis(): void {
    this.emojisSharedService.data.subscribe(data => {
      this.data = data;
    });
  }

  private includesSearchValue(element: string): boolean {
    return element.includes(this.emojiPickerOptions.searchValue.toLowerCase());
  }

  public showSelectedEmojis(index: number): void {
    this.selectedCategory.category = this.data.categories[index];
    this.selectedCategory.emojis = this.data.emojis.filter((emoji: IEmoji) => emoji.categoryId === this.selectedCategory.category.id);
  }

  public calcEmojiSize(count: number): string {
    return `${100 / count}%`;
  }

  public selectEmoji(emoji: string): void {
    this.selectEmojiEvent.emit(emoji);
  }

  public toggleEmojiPicker(): void {
    try {
      this.emojisSharedService.checkEmojiSupport(this.data);
      this.showSelectedEmojis(this.emojiPickerOptions.defaultCatalogId);
      this.emojiPickerOptions.showEmojiPicker = !this.emojiPickerOptions.showEmojiPicker;
    } catch (error) {
    }
  }

  public searchElement(): void {
    if (this.emojiPickerOptions.searchValue) {
      this.selectedCategory.emojis = this.data.emojis.filter((emoji: IEmoji) =>
        emoji.keywords.some((key: string) => this.includesSearchValue(key.toLowerCase())) || this.includesSearchValue(emoji.name)
      );
    } else {
      this.showSelectedEmojis(0);
    }
  }

  public closeEmojiPicker(): void {
    this.emojiPickerOptions.showEmojiPicker = false;
    this.emojiPickerOptions.searchValue = '';
  }
}
