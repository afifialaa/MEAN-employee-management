import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDashboardComponent } from './normal-dashboard.component';

describe('NormalDashboardComponent', () => {
  let component: NormalDashboardComponent;
  let fixture: ComponentFixture<NormalDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalDashboardComponent]
    });
    fixture = TestBed.createComponent(NormalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
