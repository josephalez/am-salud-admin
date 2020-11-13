import { TestBed } from '@angular/core/testing';

import { LaserZonesService } from './laser-zones.service';

describe('LaserZonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaserZonesService = TestBed.get(LaserZonesService);
    expect(service).toBeTruthy();
  });
});
