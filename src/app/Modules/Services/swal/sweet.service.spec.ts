/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SweetService } from './sweet.service';

describe('Service: Sweet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetService]
    });
  });

  it('should ...', inject([SweetService], (service: SweetService) => {
    expect(service).toBeTruthy();
  }));
});
