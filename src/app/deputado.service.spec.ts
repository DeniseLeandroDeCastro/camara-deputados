import { TestBed } from '@angular/core/testing';

import { DeputadoService } from './deputado.service';

describe('DeputadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeputadoService = TestBed.get(DeputadoService);
    expect(service).toBeTruthy();
  });
});
