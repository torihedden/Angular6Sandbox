import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})

export class OrderComponent implements OnInit {

  orders: any = [];

  constructor(private orderService: OrderService) {}

  // components should consume services. components should not make http requests, but only deal with displaying the data returned from them
  // http calls, requests for data, passing data around, etc. should go in a service.
  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
  
}
