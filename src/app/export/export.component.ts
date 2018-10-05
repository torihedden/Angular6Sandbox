import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
  providers: [OrderService]
})
export class ExportComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  // exporting the table data to xls begins with trying to convert it to csv
  // utilize the raw data returned from orderService and convert it to csv
  exportTable() {
    this.orderService.getOrders().subscribe(data => {
      const csv = this.convertToCSV(data);
      console.log(csv);
      return csv;
    })
  }

  exportSingleOrder() {
    // export one order to csv
  }

  // TODO: add table headers to the created csv string
  convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','
          line += array[i][index];
        }
      str += line + '\r\n';
    }
    return str;
  }

}