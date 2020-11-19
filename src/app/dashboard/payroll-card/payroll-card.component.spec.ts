import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCardComponent } from './payroll-card.component';

describe('PayrollCardComponent', () => {
  let component: PayrollCardComponent;
  let fixture: ComponentFixture<PayrollCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
