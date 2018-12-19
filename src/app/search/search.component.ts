import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataSource;

  products = ['tori', 'kathryn', 'caitlin', 'katie'];

  constructor() { }

  ngOnInit() {
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  searchOrders(searchTerm) {
    console.log(searchTerm);
    searchTerm = searchTerm.trim();
    searchTerm = searchTerm.toLowerCase();
    this.products.filter = searchTerm;
  }

}

  // this component is currently not working - TODO
