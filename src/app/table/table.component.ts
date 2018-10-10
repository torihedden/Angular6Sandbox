import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../services/order.service';
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
  export: string;
}

let orderData: Orders[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [OrderService]
})

export class TableComponent implements OnInit {

  invoiceTableHeaderList: Array<Object>;
  invoiceObject: Array<Object>;
  tableBreakpoints: Array<Object>;

ngOnInit() {
    this.invoiceTableHeaderList = [
        {"value":"accountNumber","text":"Account number"},
        {"value":"label","text":"Account label"},
        {"value":"date","text":"Invoice date"},
        {"value":"invoiceNumber","text":"Invoice number"},
        {"value":"service","text":"Service"},
        {"value":"currentCharges","text":"Current charges"},
        {"value":"adjustments","text":"Payments / Adjustments"},
        {"value":"previousBalance","text":"Previous balance"},
        {"value":"totalAmount","text":"Invoice amount"}
    ];
    this.invoiceObject=[
        {
            "accountNumber": "155874744",
            "label": "Sony Europe Ltd.",
            "date": "June 10, 2015",
            "invoiceNumber": "55434992111033",
            "service": 'AT&T',
            "currentCharges": '$253.00',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$253.00'
        }, {
            "accountNumber": "145658788",
            "label": "GMIS - England",
            "date": "May 6, 2015",
            "invoiceNumber": "43384992115477",
            "service": 'AT&T',
            "currentCharges": '$154.32',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$154.32'
        }, {
            "accountNumber": "155874744",
            "label": "Sony Europe Ltd.",
            "date": "June 10, 2015",
            "invoiceNumber": "55434992111033",
            "service": 'AT&T',
            "currentCharges": '$253.00',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$253.00'
        }, {
            "accountNumber": "145658788",
            "label": "GMIS - England",
            "date": "May 6, 2015",
            "invoiceNumber": "43384992115477",
            "service": 'AT&T',
            "currentCharges": '$154.32',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$154.32'
        }, {
            "accountNumber": "155874744",
            "label": "Sony Europe Ltd.",
            "date": "June 10, 2015",
            "invoiceNumber": "55434992111033",
            "service": 'AT&T',
            "currentCharges": '$253.00',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$253.00'
        }, {
            "accountNumber": "145658788",
            "label": "GMIS - England",
            "date": "May 6, 2015",
            "invoiceNumber": "43384992115477",
            "service": 'AT&T',
            "currentCharges": '$154.32',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$154.32'
        }, {
            "accountNumber": "155874744",
            "label": "Sony Europe Ltd.",
            "date": "June 10, 2015",
            "invoiceNumber": "55434992111033",
            "service": 'AT&T',
            "currentCharges": '$253.00',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$253.00'
        }, {
            "accountNumber": "145658788",
            "label": "GMIS - England",
            "date": "May 6, 2015",
            "invoiceNumber": "43384992115477",
            "service": 'AT&T',
            "currentCharges": '$154.32',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$154.32'
        }, {
            "accountNumber": "155874744",
            "label": "Sony Europe Ltd.",
            "date": "June 10, 2015",
            "invoiceNumber": "55434992111033",
            "service": 'AT&T',
            "currentCharges": '$253.00',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$253.00'
        }, {
            "accountNumber": "145658788",
            "label": "GMIS - England",
            "date": "May 6, 2015",
            "invoiceNumber": "43384992115477",
            "service": 'AT&T',
            "currentCharges": '$154.32',
            "adjustments": '$0.00',
            "previousBalance": '$0.00',
            "totalAmount": '$154.32'
        }
    ];
}

}
