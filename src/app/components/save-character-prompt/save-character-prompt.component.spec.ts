import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCharacterPromptComponent } from './save-character-prompt.component';

describe('SaveCharacterPromptComponent', () => {
  let component: SaveCharacterPromptComponent;
  let fixture: ComponentFixture<SaveCharacterPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCharacterPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCharacterPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
