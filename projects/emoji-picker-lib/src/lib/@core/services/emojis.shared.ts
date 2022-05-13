import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {EmojiPickerService} from '../../emoji-picker-lib.service';
import {IDataInterface, IEmoji} from '../interfaces/data.interface';

@Injectable()
export class EmojisSharedService {
  private ctx: CanvasRenderingContext2D;
  private emojis: BehaviorSubject<IDataInterface> = new BehaviorSubject<IDataInterface>({} as IDataInterface);

  public data: Observable<IDataInterface> = this.emojis.asObservable();

  constructor(private emojiPickerService: EmojiPickerService) {
    this.getEmojis();
  }

  private getEmojis(): void {
    this.emojiPickerService.getEmojis().then((data: IDataInterface) => this.emojis.next(data));
  }

  private isEmoji(item: string): boolean {
    this.ctx.clearRect(0, 0, 4, 4);
    this.ctx.fillText(item, -4, 4);
    return this.ctx.getImageData(0, 0, 1, 1).data[1] > 0;
  }

  public checkEmojiSupport(data: IDataInterface): void {
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
