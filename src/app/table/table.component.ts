import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

export interface Orders {
  name: string;
  orderNumber: string;
  PON: number;
  endCustomer: string;
  date: string;
}

let orderData: Orders[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [OrderService]
})

export class TableComponent implements OnInit {

  // not all columns have to be displayed
  // you can easily control them here
  // while even still leaving them in the .html template
  displayedColumns: string[] = ['orderNumber', 'name', 'PON', 'endCustomer', 'date'];
  dataSource = orderData;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.dataSource = data;
    })   
  }

}
