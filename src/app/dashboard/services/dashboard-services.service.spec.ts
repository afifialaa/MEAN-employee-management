import { TestBed } from '@angular/core/testing';

import { DashboardServicesService } from './dashboard-services.service';

describe('DashboardServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardServicesService = TestBed.get(DashboardServicesService);
    expect(service).toBeTruthy();
  });
});
