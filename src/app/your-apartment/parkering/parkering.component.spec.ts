import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkeringComponent } from './parkering.component';

describe('ParkeringComponent', () => {
  let component: ParkeringComponent;
  let fixture: ComponentFixture<ParkeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
