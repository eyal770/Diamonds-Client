/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDiamondsService } from './get-diamonds.service';

describe('Service: GetDiamonds', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDiamondsService]
    });
  });

  it('should ...', inject([GetDiamondsService], (service: GetDiamondsService) => {
    expect(service).toBeTruthy();
  }));
});
