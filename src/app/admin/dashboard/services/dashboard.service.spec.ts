import { TestBed } from '@angular/core/testing';

import { DashboardServices } from './dashboard.service';

describe('DashboardServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardServices = TestBed.get(DashboardServices);
    expect(service).toBeTruthy();
  });
});
