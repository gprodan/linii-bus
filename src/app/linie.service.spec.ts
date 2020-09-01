/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LinieService } from './linie.service';

describe('Service: Linie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinieService]
    });
  });

  it('should ...', inject([LinieService], (service: LinieService) => {
    expect(service).toBeTruthy();
  }));
});
