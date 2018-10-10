import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { ExportComponent } from './export/export.component';
import { FooterComponent } from './footer/footer.component';
import { AbsFormsModule, AbsNavModule, AbsFooterModule, BcNavModule, AbsTablesModule, AbsUtilitiesModule, AbsDropdownModule, AbsPaginationModule } from 'abs-components-bc';
import { TableSortTestComponent } from './table-sort-test/table-sort-test.component';
import { HeaderTestComponent } from './header-test/header-test.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderComponent,
    SearchComponent,
    ExportComponent,
    FooterComponent,
    TableSortTestComponent,
    HeaderTestComponent,
    TablePaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatExpansionModule,
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule,
    // MatToolbarModule,
    AbsTablesModule,
    AbsFormsModule,
    AbsNavModule,
    AbsFooterModule,
    BcNavModule,
    AbsUtilitiesModule,
    AbsDropdownModule,
    AbsPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
