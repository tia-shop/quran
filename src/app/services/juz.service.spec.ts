import { TestBed, inject } from '@angular/core/testing';

import { JuzService } from './juz.service';

describe('JuzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuzService]
    });
  });

  it('should be created', inject([JuzService], (service: JuzService) => {
    expect(service).toBeTruthy();
  }));
});
