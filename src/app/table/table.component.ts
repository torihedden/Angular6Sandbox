import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  orderNumber: string;
  PON: number;
  endCustomer: string;
  date: string;
}

const ORDER_DATA: PeriodicElement[] = [
  {orderNumber: '1243234ATT', name: 'ABC123', PON: 14353479, endCustomer: 'ABC Corp', date: 'Thu Oct 04 2018 17:31:24 GMT-0400'},
  {orderNumber: '2243234ATT', name: 'XYZ98765', PON: 45256, endCustomer: 'Company Name LLC', date: 'Mon Nov 05 2018 17:31:24 GMT-0400'},
  {orderNumber: '3243234ATT', name: 'QRSTUV12', PON: 456541, endCustomer: 'Test Inc.', date: 'Fri Oct 05 2018 17:31:24 GMT-0400'},
  {orderNumber: '4243234ATT', name: 'BET678', PON: 903722, endCustomer: 'Best Company', date: 'Thu Oct 04 2018 17:31:24 GMT-0400'},
  {orderNumber: '5243234ATT', name: 'ZYX9898', PON: 6576511, endCustomer: 'Test Services Inc.', date: 'Sat Oct 06 2018 17:31:24 GMT-0400'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  // not all columns have to be displayed- you can easily control them here
  displayedColumns: string[] = ['orderNumber', 'name', 'PON', 'endCustomer', 'date'];
  dataSource = ORDER_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
