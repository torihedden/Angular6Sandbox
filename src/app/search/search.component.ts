import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataSource;

  constructor() { }

  ngOnInit() {
  }

  searchOrders(searchTerm: string) {
    searchTerm = searchTerm.trim();
    searchTerm = searchTerm.toLowerCase();
    this.dataSource.filter = searchTerm;
  }

}
