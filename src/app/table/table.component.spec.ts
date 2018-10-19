import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { AppModule } from '../app.module';
import { OrderService } from '../services/order.service';
import { Observable, from } from 'rxjs';
// import 'rxjs/add/observable/from';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: OrderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new OrderService(null);
    // component = new TableComponent(service);

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set orderData property with value returned from orders API', () => {
    spyOn(service, 'getOrders').and.callFake(() => {
      return from([])
    });
  });
});
