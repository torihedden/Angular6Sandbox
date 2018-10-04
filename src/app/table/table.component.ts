import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() testProperty : string = 'shared property';

  tableId: string  = 'test-table';
  fileName: string = '';
  fullFileName: string = `${this.fileName}`;

  constructor() {
    console.log('constructor');
    
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  convertTable(){
    const table = document.getElementById('test-table');    
    var csv = this.tableToCSV(table);    
    var blob = new Blob([csv], {type: "text/csv"});    
    this.downloadAnchor(URL.createObjectURL(blob), 'csv');    
  }

  tableToCSV(table) {
    var slice = Array.prototype.slice;

    var converted =
     slice
      .call(table.rows)
      .map(function(row) {
        return slice
          .call(row.cells)
          .map(function(cell) {
            return '"t"'.replace("t", cell.textContent);
          })
          .join(",");
      })
      .join("\r\n");
    return converted;
  }

  downloadAnchor(content, extension) {
    var anchor = document.getElementById("download-anchor");
    this.fullFileName = content + '.' + extension;
    setTimeout(function(){ anchor.click(); }, 1000);    
  }
}

// lifecycle
// ngOnChanges - when change in input property
// ngOnInit - executed once component has initialized
// ngDoCheck - runs when change detection runs
// ngAfterContentInit - called after content projected into view
// ngAfterViewInit - component's views initialized
// ngAfterViewChecked - view has been checked
// ngOnDestroy - right before component is destroyed
