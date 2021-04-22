import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceCenterComponent } from './customerservice-center.component';

describe('CustomerserviceCenterComponent', () => {
  let component: CustomerserviceCenterComponent;
  let fixture: ComponentFixture<CustomerserviceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerserviceCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerserviceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
