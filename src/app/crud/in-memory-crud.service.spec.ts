import { TestBed, inject } from '@angular/core/testing';

import { InMemoryCrudService } from './in-memory-crud.service';

describe('InMemoryCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryCrudService]
    });
  });

  it('should be created', inject([InMemoryCrudService], (service: InMemoryCrudService) => {
    expect(service).toBeTruthy();
  }));
});
