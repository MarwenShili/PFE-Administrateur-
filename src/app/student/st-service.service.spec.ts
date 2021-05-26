import { TestBed } from '@angular/core/testing';

import { StServiceService } from './st-service.service';

describe('StServiceService', () => {
  let service: StServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
