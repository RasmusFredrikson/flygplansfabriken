import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelanmalanComponent } from './felanmalan.component';

describe('FelanmalanComponent', () => {
  let component: FelanmalanComponent;
  let fixture: ComponentFixture<FelanmalanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelanmalanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelanmalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
