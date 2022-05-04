import {Injectable} from '@angular/core';

import {IDataInterface} from './@core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class EmojiPickerService {
  public getEmojis(): Promise<IDataInterface> {
    return fetch('./assets/data/emojis.json').then(result => result.json());
  }
}
