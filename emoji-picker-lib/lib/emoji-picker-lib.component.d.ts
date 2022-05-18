import { EventEmitter, OnInit } from '@angular/core';
import { EmojisSharedService } from './@core/services/emojis.shared';
import { IData, IEmojiPickerOptions, ISelectedCategory } from './@core/interfaces/data.interface';
export declare class EmojiPickerLibComponent implements OnInit {
    private emojisSharedService;
    constructor(emojisSharedService: EmojisSharedService);
    emojiPickerOptions: IEmojiPickerOptions;
    selectEmojiEvent: EventEmitter<string>;
    data: IData;
    selectedCategory: ISelectedCategory;
    ngOnInit(): void;
    private initData;
    private getEmojis;
    private includesSearchValue;
    showSelectedEmojis(index: number): void;
    calcEmojiSize(count: number): string;
    selectEmoji(emoji: string): void;
    toggleEmojiPicker(): void;
    searchElement(): void;
    closeEmojiPicker(): void;
}
