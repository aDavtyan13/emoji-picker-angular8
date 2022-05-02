import { TestBed } from '@angular/core/testing';

import { EmojiPickerLibService } from './emoji-picker-lib.service';

describe('EmojiPickerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmojiPickerLibService = TestBed.get(EmojiPickerLibService);
    expect(service).toBeTruthy();
  });
});
