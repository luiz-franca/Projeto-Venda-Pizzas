import { TestBed } from '@angular/core/testing';

import { OrderUpdateService } from './order-update.service';

describe('OrderUpdateService', () => {
  let service: OrderUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
