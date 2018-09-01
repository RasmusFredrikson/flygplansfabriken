import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadgarComponent } from './stadgar.component';

describe('StadgarComponent', () => {
  let component: StadgarComponent;
  let fixture: ComponentFixture<StadgarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadgarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadgarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
