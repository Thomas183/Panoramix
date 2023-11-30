import { TestBed } from '@angular/core/testing';

import { AllcsvService } from './allcsv.service';

describe('AllcsvService', () => {
  let service: AllcsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
