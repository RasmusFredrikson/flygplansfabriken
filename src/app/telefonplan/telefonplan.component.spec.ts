import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonplanComponent } from './telefonplan.component';

describe('TelefonplanComponent', () => {
  let component: TelefonplanComponent;
  let fixture: ComponentFixture<TelefonplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
