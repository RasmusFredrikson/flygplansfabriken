import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklareComponent } from './maklare.component';

describe('MaklareComponent', () => {
  let component: MaklareComponent;
  let fixture: ComponentFixture<MaklareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaklareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaklareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
