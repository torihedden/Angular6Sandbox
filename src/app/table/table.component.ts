import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

export interface Orders {
  KeyId: number;
  Source: string;
  ASR: string;
  PON: number;
  ICSC: string;
  STATUS: string;
  DD: Date;
  END_CUSTOMER: string;
  CUSTOMER_DEFINED_STATE: string;
  ACNA: string;
}

let orderData: Orders[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [OrderService]
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['KeyId', 'Source', 'ASR', 'PON', 'ICSC', 'STATUS', 'DD', 'END_CUSTOMER', 'CUSTOMER_DEFINED_STATE', 'ACNA' ];
  dataSource = new MatTableDataSource(orderData);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.data.map(entry => {
        entry.DD = new Date(entry.DD);
      })      
    })   
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  searchOrders(searchTerm: string) {
    searchTerm = searchTerm.trim();
    searchTerm = searchTerm.toLowerCase();
    this.dataSource.filter = searchTerm;
  }

}
