import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

import {IDataInterface} from '../interfaces/data.interface';
import {EmojiPickerService} from '../../emoji-picker-lib.service';

@Injectable()
export class EmojisSharedService {
  public ctx: any;
  public emojis = new BehaviorSubject<IDataInterface>({} as IDataInterface);
  public data = this.emojis.asObservable();

  constructor(private emojiPickerService: EmojiPickerService) {
    this.ctx = document.createElement('canvas').getContext('2d');
    this.ctx.canvas.width = this.ctx.canvas.height = 1;

    this.emojiPickerService.getEmojis().then((data: IDataInterface) => {
      data.emojis.forEach((element) => {
        element.isSupported = this.supportsEmoji(element.emoji);
      });
      this.emojis.next(data);
    });
  }

  private supportsEmoji(item: string): boolean {
    this.ctx.clearRect(0, 0, 4, 4);
    this.ctx.fillText(item, -4, 4);
    return this.ctx.getImageData(0, 0, 1, 1).data[1] > 0;


    // const ctx = document.createElement('canvas').getContext('2d');
    // ctx.canvas.width = ctx.canvas.height = 1;
    // ctx.fillText(item, -4, 4);
    // return ctx.getImageData(0, 0, 1, 1).data[3] > 0;
  }
}
