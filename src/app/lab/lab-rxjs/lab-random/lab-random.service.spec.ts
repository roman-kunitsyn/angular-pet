import { TestBed, inject } from '@angular/core/testing';

import { LabRandomService } from './lab-random.service';

describe('LabRandomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabRandomService]
    });
  });

  it('should be created', inject([LabRandomService], (service: LabRandomService) => {
    expect(service).toBeTruthy();
  }));
});
