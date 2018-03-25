import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrahandsuthyrningComponent } from './andrahandsuthyrning.component';

describe('AndrahandsuthyrningComponent', () => {
  let component: AndrahandsuthyrningComponent;
  let fixture: ComponentFixture<AndrahandsuthyrningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndrahandsuthyrningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndrahandsuthyrningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
