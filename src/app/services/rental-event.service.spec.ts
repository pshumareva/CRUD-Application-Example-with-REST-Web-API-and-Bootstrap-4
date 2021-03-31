import { TestBed } from '@angular/core/testing';

import { RentalEventService } from './rental-event.service';

describe('RentalEventService', () => {
  let service: RentalEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
