import { TestBed } from '@angular/core/testing';

import { EstimatesService } from './estimates.service';

describe('EstimatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstimatesService = TestBed.get(EstimatesService);
    expect(service).toBeTruthy();
  });
});
