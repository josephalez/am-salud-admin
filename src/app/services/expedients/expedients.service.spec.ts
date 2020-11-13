import { TestBed } from '@angular/core/testing';

import { ExpedientsService } from './expedients.service';

describe('ExpedientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpedientsService = TestBed.get(ExpedientsService);
    expect(service).toBeTruthy();
  });
});
