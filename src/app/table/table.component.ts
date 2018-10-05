import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { MatSort, MatTableDataSource } from '@angular/material';

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

  displayedColumns: string[] = ['orderNumber', 'name', 'PON', 'endCustomer', 'date'];
  dataSource = new MatTableDataSource(orderData);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    
    this.orderService.getOrders().subscribe(data => {
      this.dataSource.data = data;
    })   
    
    this.dataSource.sort = this.sort;
  }

}
