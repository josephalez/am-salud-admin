import { TestBed, async, inject } from '@angular/core/testing';

import { AtencionGuard } from './atencion.guard';

describe('AtencionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtencionGuard]
    });
  });

  it('should ...', inject([AtencionGuard], (guard: AtencionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
