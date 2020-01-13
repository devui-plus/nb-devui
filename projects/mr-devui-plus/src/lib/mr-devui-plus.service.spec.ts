import { TestBed } from '@angular/core/testing';

import { MrDevuiPlusService } from './mr-devui-plus.service';

describe('MrDevuiPlusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MrDevuiPlusService = TestBed.get(MrDevuiPlusService);
    expect(service).toBeTruthy();
  });
});
