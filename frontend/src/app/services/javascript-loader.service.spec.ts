import { TestBed } from '@angular/core/testing';

import { JavascriptLoaderService } from './javascript-loader.service';

describe('JavascriptLoaderService', () => {
  let service: JavascriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavascriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
