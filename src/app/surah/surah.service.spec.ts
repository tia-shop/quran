import { TestBed, inject } from '@angular/core/testing';

import { SurahService } from './surah.service';

describe('SurahService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurahService]
    });
  });

  it('should be created', inject([SurahService], (service: SurahService) => {
    expect(service).toBeTruthy();
  }));
});
