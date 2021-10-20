import { TestBed } from '@angular/core/testing';

import { DatainputService } from './datainput.service';

describe('DatainputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatainputService = TestBed.get(DatainputService);
    expect(service).toBeTruthy();
  });
});
