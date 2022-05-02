import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiPickerLibComponent } from './emoji-picker-lib.component';

describe('EmojiPickerLibComponent', () => {
  let component: EmojiPickerLibComponent;
  let fixture: ComponentFixture<EmojiPickerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiPickerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiPickerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
