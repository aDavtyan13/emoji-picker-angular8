import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {EmojisSharedService} from './@core/services/emojis.shared';
import {ICategory, IDataInterface, IEmoji} from './@core/interfaces/data.interface';

@Component({
  selector: 'emoji-picker',
  templateUrl: './emoji-picker-lib.component.html'
})
export class EmojiPickerLibComponent implements OnInit {
  constructor(private emojisSharedService: EmojisSharedService) {
  }

  @Input() btnIcon!: string;
  @Input() searchIcon?: string;
  @Input() customClass: string = '';
  @Input() emojisPerRow: number = 9;
  @Input() emojiPickerRight: boolean = false;

  @Output() selectEmojiEvent: EventEmitter<string> = new EventEmitter<string>();

  public categoryName: string;
  public data: IDataInterface;
  public searchValue: string = '';
  public selectedEmojis!: IEmoji[];
  public showEmojiPicker: boolean = false;

  ngOnInit() {
    this.getEmojis();
  }

  private getEmojis(): void {
    this.emojisSharedService.data.subscribe(data => {
      this.data = data;
    });
  }

  private unselectAllCategories(): void {
    this.data.categories.forEach((category: ICategory) => category.selected = false);
  }

  private showSelectedEmojis(index: number): void {
    this.unselectAllCategories();
    this.data.categories[index].selected = true;
    this.selectedEmojis = this.data.emojis.filter((emoji: IEmoji) => emoji.categoryId === index + 1);
    this.categoryName = this.data.categories[index].name;
  }

  public calcEmojiSize(count: number): string {
    return `${100 / count}%`;
  }

  public chooseCategory(index: number): void {
    this.showSelectedEmojis(index);
  }

  public selectEmoji(emoji: string): void {
    this.selectEmojiEvent.emit(emoji);
  }

  public toggleEmojiPicker(): void {
    try {
      this.showSelectedEmojis(0);
      this.showEmojiPicker = !this.showEmojiPicker;
    } catch (error) {
    }
  }

  public searchElement(): void {
    if (this.searchValue) {
      this.selectedEmojis = this.data.emojis.filter((emoji: IEmoji) =>
        emoji.keywords.some((key: string) => key.toLowerCase().includes(this.searchValue.toLowerCase())) ||
        emoji.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
      this.unselectAllCategories();
    } else {
      this.chooseCategory(0);
    }
  }

  public closeEmojiPicker(): void {
    this.showEmojiPicker = false;
    this.searchValue = '';
  }
}
