import { TestBed, inject } from '@angular/core/testing';

import { AyahService } from './ayah.service';

describe('AyahService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AyahService]
    });
  });

  it('should be created', inject([AyahService], (service: AyahService) => {
    expect(service).toBeTruthy();
  }));
});
