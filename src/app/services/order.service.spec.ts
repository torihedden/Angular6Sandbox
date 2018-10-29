import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { AppModule } from '../app.module';
import { Observable, from } from 'rxjs';
// import 'rxjs/add/observable/from';
import { OrderComponent } from '../order/order.component';

describe('OrderService', () => {
  let service: OrderService = TestBed.get(OrderService);
  let component: OrderComponent;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppModule ]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get orders and return them from the data source', () => {
    
    let orders = [1, 2, 3];

    spyOn(service, 'getOrders').and.callFake(() => {
      return from([ orders ]);
    });

    component.ngOnInit();

    expect(component.orders.length).toBe(orders);
  });
});
