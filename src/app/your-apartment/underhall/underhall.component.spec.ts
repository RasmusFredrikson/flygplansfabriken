import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderhallComponent } from './underhall.component';

describe('UnderhallComponent', () => {
  let component: UnderhallComponent;
  let fixture: ComponentFixture<UnderhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
