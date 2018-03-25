import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForandringComponent } from './forandring.component';

describe('ForandringComponent', () => {
  let component: ForandringComponent;
  let fixture: ComponentFixture<ForandringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForandringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForandringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
