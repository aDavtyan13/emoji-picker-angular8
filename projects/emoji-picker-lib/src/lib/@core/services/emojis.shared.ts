import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

import {IDataInterface} from '../interfaces/data.interface';
import {EmojiPickerService} from '../../emoji-picker-lib.service';

@Injectable()
export class EmojisSharedService {
  public emojis = new BehaviorSubject<IDataInterface>({} as IDataInterface);
  public data = this.emojis.asObservable();

  constructor(private emojiPickerService: EmojiPickerService) {
    this.emojiPickerService.getEmojis().then((data: IDataInterface) => {
      data.emojis.forEach((element) => {
        element.isSupported = !!element.isSupported || EmojisSharedService.supportsEmoji(element.emoji);
      });
      this.emojis.next(data);
    });
  }

  static supportsEmoji(item: string): boolean {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = ctx.canvas.height = 1;
    ctx.fillText(item, -4, 4);
    return ctx.getImageData(0, 0, 1, 1).data[1] > 0;
  }
}
