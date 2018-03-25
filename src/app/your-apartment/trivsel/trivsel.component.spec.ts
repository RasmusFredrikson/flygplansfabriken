import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivselComponent } from './trivsel.component';

describe('TrivselComponent', () => {
  let component: TrivselComponent;
  let fixture: ComponentFixture<TrivselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrivselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
