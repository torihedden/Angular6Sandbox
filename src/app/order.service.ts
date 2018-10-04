import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 
  orders: any;

  constructor() { }

  getOrders() {

    this.orders = [
      {
        "description": "test",
        "dueDate": "12312018",
        "status": "NRT",
        "act": "N",
        "PON": "123456789",
        "ASR": "17181920",
        "ICSC": "ABCD",
        "endCustomer": "Test Company, Inc.",
        "address": "4625 Creekstone Drive, NC",
        "commonId": "12312314564562"
      }, 
      {
        "description": "test order",
        "dueDate": "12312018",
        "status": "PRT",
        "act": "N",
        "PON": "123456789",
        "ASR": "17181920",
        "ICSC": "ABCD",
        "endCustomer": "Test Company, Inc.",
        "address": "4625 Creekstone Drive, NC",
        "commonId": "12312312"
      },
      {
        "description": "test",
        "dueDate": "12312018",
        "status": "NRT",
        "act": "N",
        "PON": "123456789",
        "ASR": "17181920",
        "ICSC": "ABCD",
        "endCustomer": "Test Company, Inc.",
        "address": "4625 Creekstone Drive, NC",
        "commonId": "12312314564562"
      }
    ];

    return this.orders;
  }
}
