import {Injectable} from '@angular/core';

import {IData} from './@core/interfaces/data.interface';

@Injectable()
export class EmojiPickerService {
  public getEmojis(): Promise<IData> {
    return fetch('./assets/data/emojis.json').then(result => result.json());
  }
}
