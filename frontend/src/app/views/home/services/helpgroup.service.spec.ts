import { TestBed } from '@angular/core/testing';

import { HelpgroupService } from './helpgroup.service';

describe('HelpgroupService', () => {
  let service: HelpgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
