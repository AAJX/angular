import { TestBed } from '@angular/core/testing';

import { MygodService } from './mygod.service';

describe('MygodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MygodService = TestBed.get(MygodService);
    expect(service).toBeTruthy();
  });
});
