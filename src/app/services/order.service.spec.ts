import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { AppModule } from '../app.module';

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppModule ]
  }));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });
});
