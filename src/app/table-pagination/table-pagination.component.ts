import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {

public viewPerPage = 10;
// public totalPages6 = 20;
public totalPages6;
public currentPage6 = 1;
public inputClass1 ="abs-go-to-page-inline";
public tableHeader = ["Request Id", "Request Type", "Requestor", "User", "Date"];
public fullTableData = [
    {
        "requestId": "10391004101",
        "requestType": "Update rate plan with device 4101",
        "requestor": "BAN_Admin",
        "user": "Ashley Hall"
    }, {
        "requestId": "10391004102",
        "requestType": "Modify mobile share group 4102",
        "requestor": "ADMIN",
        "user": "Frank Castle"
    }, {
        "requestId": "10391004103",
        "requestType": "Update IMEI 4103",
        "requestor": "MOD",
        "user": "Derek Santos"
    }, {
        "requestId": "10391004104",
        "requestType": "Update features 4104",
        "requestor": "BAN_Admin",
        "user": "George Hines"
    }, {
        "requestId": "10391004105",
        "requestType": "Others 4105",
        "requestor": "CLU",
        "user": "Johnson Rhodes"
    }, {
        "requestId": "10391004106",
        "requestType": "Update rate plan with device 4106",
        "requestor": "IME_CLU",
        "user": "Diana Taylor"
    }, {
        "requestId": "10391004107",
        "requestType": "Modify mobile share group 4107",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004108",
        "requestType": "Modify mobile share group 4108",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004109",
        "requestType": "Modify mobile share group 4109",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004110",
        "requestType": "Modify mobile share group 4110",
        "requestor": "ADMIN",
        "user": "George Hines"
    },  {
        "requestId": "10391004111",
        "requestType": "Update rate plan with device 4111",
        "requestor": "BAN_Admin",
        "user": "Ashley Hall"
    }, {
        "requestId": "10391004112",
        "requestType": "Modify mobile share group 4112",
        "requestor": "ADMIN",
        "user": "Frank Castle"
    }, {
        "requestId": "10391004113",
        "requestType": "Update IMEI 4113",
        "requestor": "MOD",
        "user": "Derek Santos"
    }, {
        "requestId": "10391004114",
        "requestType": "Update features 4114",
        "requestor": "BAN_Admin",
        "user": "George Hines"
    }, {
        "requestId": "10391004115",
        "requestType": "Others 4115",
        "requestor": "CLU",
        "user": "Johnson Rhodes"
    }, {
        "requestId": "10391004116",
        "requestType": "Update rate plan with device 4116",
        "requestor": "IME_CLU",
        "user": "Diana Taylor"
    }, {
        "requestId": "10391004117",
        "requestType": "Modify mobile share group 4117",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004118",
        "requestType": "Modify mobile share group 4118",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004119",
        "requestType": "Modify mobile share group 4119",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004120",
        "requestType": "Modify mobile share group 4120",
        "requestor": "ADMIN",
        "user": "George Hines"
    },  {
        "requestId": "10391004121",
        "requestType": "Update rate plan with device 4121",
        "requestor": "BAN_Admin",
        "user": "Ashley Hall"
    }, {
        "requestId": "10391004122",
        "requestType": "Modify mobile share group 4122",
        "requestor": "ADMIN",
        "user": "Frank Castle"
    }, {
        "requestId": "10391004123",
        "requestType": "Update IMEI 4123",
        "requestor": "MOD",
        "user": "Derek Santos"
    }, {
        "requestId": "10391004124",
        "requestType": "Update features 4124",
        "requestor": "BAN_Admin",
        "user": "George Hines"
    }, {
        "requestId": "10391004125",
        "requestType": "Others 4125",
        "requestor": "CLU",
        "user": "Johnson Rhodes"
    }, {
        "requestId": "10391004126",
        "requestType": "Update rate plan with device 4126",
        "requestor": "IME_CLU",
        "user": "Diana Taylor"
    }, {
        "requestId": "10391004127",
        "requestType": "Modify mobile share group 4127",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004128",
        "requestType": "Modify mobile share group 4128",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004129",
        "requestType": "Modify mobile share group 4129",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004130",
        "requestType": "Modify mobile share group 4130",
        "requestor": "ADMIN",
        "user": "George Hines"
    },  {
        "requestId": "10391004131",
        "requestType": "Update rate plan with device 4131",
        "requestor": "BAN_Admin",
        "user": "Ashley Hall"
    }, {
        "requestId": "10391004132",
        "requestType": "Modify mobile share group 4132",
        "requestor": "ADMIN",
        "user": "Frank Castle"
    }, {
        "requestId": "10391004133",
        "requestType": "Update IMEI 4133",
        "requestor": "MOD",
        "user": "Derek Santos"
    }, {
        "requestId": "10391004134",
        "requestType": "Update features 4134",
        "requestor": "BAN_Admin",
        "user": "George Hines"
    }, {
        "requestId": "10391004135",
        "requestType": "Others 4135",
        "requestor": "CLU",
        "user": "Johnson Rhodes"
    }, {
        "requestId": "10391004136",
        "requestType": "Update rate plan with device 4136",
        "requestor": "IME_CLU",
        "user": "Diana Taylor"
    }, {
        "requestId": "10391004137",
        "requestType": "Modify mobile share group 4137",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004138",
        "requestType": "Modify mobile share group 4138",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004139",
        "requestType": "Modify mobile share group 4139",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004140",
        "requestType": "Modify mobile share group 4140",
        "requestor": "ADMIN",
        "user": "George Hines"
    },  {
        "requestId": "10391004141",
        "requestType": "Update rate plan with device 4141",
        "requestor": "BAN_Admin",
        "user": "Ashley Hall"
    }, {
        "requestId": "10391004142",
        "requestType": "Modify mobile share group 4142",
        "requestor": "ADMIN",
        "user": "Frank Castle"
    }, {
        "requestId": "10391004143",
        "requestType": "Update IMEI 4143",
        "requestor": "MOD",
        "user": "Derek Santos"
    }, {
        "requestId": "10391004144",
        "requestType": "Update features 4144",
        "requestor": "BAN_Admin",
        "user": "George Hines"
    }, {
        "requestId": "10391004145",
        "requestType": "Others 4145",
        "requestor": "CLU",
        "user": "Johnson Rhodes"
    }, {
        "requestId": "10391004146",
        "requestType": "Update rate plan with device 4146",
        "requestor": "IME_CLU",
        "user": "Diana Taylor"
    }, {
        "requestId": "10391004147",
        "requestType": "Modify mobile share group 4147",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004148",
        "requestType": "Modify mobile share group 4148",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004149",
        "requestType": "Modify mobile share group 4149",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004150",
        "requestType": "Modify mobile share group 4150",
        "requestor": "ADMIN",
        "user": "George Hines"
    },  {
        "requestId": "10391004151",
        "requestType": "Update rate plan with device 4151",
        "requestor": "BAN_Admin",
        "user": "Ashley Hall"
    }, {
        "requestId": "10391004152",
        "requestType": "Modify mobile share group 4152",
        "requestor": "ADMIN",
        "user": "Frank Castle"
    }, {
        "requestId": "10391004153",
        "requestType": "Update IMEI 4153",
        "requestor": "MOD",
        "user": "Derek Santos"
    }, {
        "requestId": "10391004154",
        "requestType": "Update features 4154",
        "requestor": "BAN_Admin",
        "user": "George Hines"
    }, {
        "requestId": "10391004155",
        "requestType": "Others 4155",
        "requestor": "CLU",
        "user": "Johnson Rhodes"
    }, {
        "requestId": "10391004156",
        "requestType": "Update rate plan with device 4156",
        "requestor": "IME_CLU",
        "user": "Diana Taylor"
    }, {
        "requestId": "10391004157",
        "requestType": "Modify mobile share group 4157",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004158",
        "requestType": "Modify mobile share group 4158",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004159",
        "requestType": "Modify mobile share group 4159",
        "requestor": "ADMIN",
        "user": "George Hines"
    }, {
        "requestId": "10391004160",
        "requestType": "Modify mobile share group 4160",
        "requestor": "ADMIN",
        "user": "George Hines 60"
    }
];
public dropdownOptions1: any = [
  {value: '10', text: '10 Per page'}
];
public tableData = [];
public currentPageIndex=1;

ngOnInit(){
    this.tableData = this.fullTableData.slice(0,this.viewPerPage);
}

handlePageChange1(num){
    this.currentPageIndex=num;
    var endIndex = num * this.viewPerPage;
    var startIndex = endIndex - this.viewPerPage;
    this.tableData = this.fullTableData.slice(startIndex, endIndex);
    setTimeout(function () {  
        if(!this.firstPlay)
        {
            const focusElement = <HTMLElement>document.querySelector('.abs-numericResult');
            focusElement.focus();
        }
    },50);
}

changePagesNumber(event){
    let viewPerPageTemp = this.viewPerPage;
    this.viewPerPage = parseInt(event.value);
    this.totalPages6=this.fullTableData.length/this.viewPerPage;
    this.tableData = this.fullTableData.slice(0,this.viewPerPage);
    var temp = this.currentPage6 * viewPerPageTemp;
    this.currentPage6 = 1;
}




}
