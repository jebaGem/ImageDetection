import { TestBed } from '@angular/core/testing';

import { FlikkerService } from './flikker.service';

describe('FlikkerService', () => {
  let service: FlikkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlikkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
