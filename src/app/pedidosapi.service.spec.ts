import { TestBed } from '@angular/core/testing';

import { PedidosapiService } from './pedidosapi.service';

describe('PedidosapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidosapiService = TestBed.get(PedidosapiService);
    expect(service).toBeTruthy();
  });
});
