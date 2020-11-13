import { TestBed } from '@angular/core/testing';

import { ServsServiceService } from './servs-service.service';

describe('ServsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServsServiceService = TestBed.get(ServsServiceService);
    expect(service).toBeTruthy();
  });
});
