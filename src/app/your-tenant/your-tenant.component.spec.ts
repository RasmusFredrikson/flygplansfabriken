import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTenantComponent } from './your-tenant.component';

describe('YourTenantComponent', () => {
  let component: YourTenantComponent;
  let fixture: ComponentFixture<YourTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
