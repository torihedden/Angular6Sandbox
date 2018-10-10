import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-sort-test',
  templateUrl: './table-sort-test.component.html',
  styleUrls: ['./table-sort-test.component.css']
})
export class TableSortTestComponent implements OnInit {

  constructor() { }

  tableBreakpoints: Array<Object>;
tableDataSummary: Array<Object>;
tableData:  Array<Object>;
tableDataHeader: Array<Object>;
sortingConfig: any;
requestSortingConfig: any;
tableSortingConfig: any;

ngOnInit() {
    this.tableBreakpoints = [ // breakpoints are >= min and < max
        { min: 0,max: 480,columns: 3 },
        { min: 480,max: 768,columns: 3 },
        { min: 768,max: 1025,columns: 5 },
        {min: 1025,max: 1921,columns: 7 }
    ];
    this.tableDataHeader = [{ value: "c1Data", text: "Column heading" },
        { value: "c2Data", text: "Heading" },
        { value: "c3Data", text: "Long column heading" },
        { value: "c4Data", text: "Column heading 1 " },
        { value: "c5Data", text: "Column heading 2" },
        { value: "c6Data", text: "Heading" }
        ];
        this.requestSortingConfig = {
            column: 'requestID', //to match the variable of one of the columns
            descending: false
        };
        this.tableSortingConfig = {
            column: 'c1Data',
            descending: false
        }
        
        this.sortingConfig = {
            column: 'accountNumber', //to match the variable of one of the columns
            descending: false
        };
        this.tableData = [
            { "c1Data": "Column A", "c2Data": "Column 2A", "c3Data": "Column 3A", "c4Data": "Column 4", "c5Data": "Column 5", "c6Data": "Column 6", "hidden": true },
            { "c1Data": "Column B", "c2Data": "Column 2B", "c3Data": "Column 3C", "c4Data": "Column 4", "c5Data": "Column 5", "c6Data": "Column 6", "hidden": true },
            { "c1Data": "Column C", "c2Data": "Column 2C", "c3Data": "Column 3B", "c4Data": "Column 4", "c5Data": "Column 5", "c6Data": "Column 6", "hidden": true }
        ];
    this.tableDataSummary = [
        {
            "0": "Account charges",
            "1": "<span>$100.00</span>",
            "2": '<ul class="bullet">' +
                    '<li class="li-2">' +
                        '<div class="faux-table-cell no-dots" style="background-position: 0px 15px;">' +
                            '<span>Monthly plan charges</span>' +
                        '</div>' +
                        '<div class="faux-table-cell no-dots" style="background-position: 0px 15px;">' +
                            '<span></span>'+
                        '</div>' +                           
                    '</li>' +
                    '<li class="li-3">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Mobile Share Value iPhone on 4G LTE w/VVM</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>$100.00</span>' +
                        '</div>' +
                    '</li>' +
                    '<li class="li-4">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Discount for Mobile Share Value Savings</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>-$100.00</span>' +
                        '</div>' +
                    '</li>' +
                    '<li class="li-5">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Total monthly plan charges</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>$100.00</span>' +
                        '</div>' +
                    '</li>' +             
                '</ul>'
        }, {
            "0": "Daniel Blackman <br aria-hidden='true' tabindex='-1'> 404-231-7479",
            "1": "<span>$100.00</span>",
            "2": '<ul class="bullet">' +
                    '<li class="li-2">' +
                        '<div class="faux-table-cell no-dots" style="background-position: 0px 15px;">' +
                            '<span>Monthly plan charges</span>' +
                        '</div>' +
                        '<div class="faux-table-cell no-dots" style="background-position: 0px 15px;">' +
                            '<span></span>'+
                        '</div>' +                           
                    '</li>' +
                    '<li class="li-3">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Mobile Share Value iPhone on 4G LTE w/VVM</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>$140.00</span>' +
                        '</div>' +
                    '</li>' +
                    '<li class="li-4">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Discount for Mobile Share Value Savings</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>-$50.00</span>' +
                        '</div>' +
                    '</li>' +
                    '<li class="li-5">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Total monthly plan charges</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>$99.00</span>' +
                        '</div>' +
                    '</li>' +             
                '</ul>'
        }, {
            "0": "Surcharges & Fees",
            "1": "<span>-$100.00</span>",
            "2": '<ul class="bullet">' +
                    '<li class="li-2">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Discount for Mobile Share Value Savings</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>-$200.00</span>'+
                        '</div>' +                           
                    '</li>' +
                    '<li class="li-3">' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>Total monthly plan charges</span>' +
                        '</div>' +
                        '<div class="faux-table-cell" style="background-position: 0px 15px;">' +
                            '<span>$100.00</span>' +
                        '</div>' +
                    '</li>' +         
                '</ul>'
        },
        {
            "0": "Gov't Fees &' Taxes",
            "1": "<span>$100.00</span>",
            "2": ""
        },
        {
            "0": "<strong>Total for 404-231-7479</strong>",
            "1": "<span>$1000.00</span>",
            "2": ""
        }
    ];
}
convertRequestSorting():string{
    return this.requestSortingConfig.descending ? '-' + this.requestSortingConfig.column : this.requestSortingConfig.column;
}

convertSorting(): string{
    return this.sortingConfig.descending ? '-' + this.sortingConfig.column : this.sortingConfig.column;
}

convertTableSorting():string{
    return this.tableSortingConfig.descending ? '-' + this.tableSortingConfig.column : this.tableSortingConfig.column;
}


}
