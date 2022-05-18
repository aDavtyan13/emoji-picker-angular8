import { Observable } from 'rxjs';
import { IData } from '../interfaces/data.interface';
import { EmojiPickerService } from '../../emoji-picker-lib.service';
export declare class EmojisSharedService {
    private emojiPickerService;
    private ctx;
    private emojis;
    data: Observable<IData>;
    constructor(emojiPickerService: EmojiPickerService);
    private getEmojis;
    private isEmoji;
    checkEmojiSupport(data: IData): void;
}
