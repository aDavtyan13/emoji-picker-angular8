import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {IData, IEmoji} from '../interfaces/data.interface';
import {EmojiPickerService} from '../../emoji-picker-lib.service';

@Injectable()
export class EmojisSharedService {
  private ctx: CanvasRenderingContext2D;
  private emojis: BehaviorSubject<IData> = new BehaviorSubject<IData>({} as IData);

  public data: Observable<IData> = this.emojis.asObservable();

  constructor(private emojiPickerService: EmojiPickerService) {
    this.getEmojis();
  }

  private getEmojis(): void {
    this.emojiPickerService.getEmojis().then((data: IData) => this.emojis.next(data));
  }

  private isEmoji(item: string): boolean {
    this.ctx.clearRect(0, 0, 4, 4);
    this.ctx.fillText(item, -4, 4);
    return this.ctx.getImageData(0, 0, 1, 1).data[1] > 0;
  }

  public checkEmojiSupport(data: IData): void {
    if (this.ctx || !data.emojis) {
      return;
    }
    this.ctx = document.createElement('canvas').getContext('2d');
    this.ctx.canvas.width = 1;
    this.ctx.canvas.height = 1;
    data.emojis.forEach((element: IEmoji) => {
      element.isSupported = this.isEmoji(element.emoji);
    });
  }
}
