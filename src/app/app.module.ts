import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatPaginatorModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatGridListModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { ExportComponent } from './export/export.component';
import { FooterComponent } from './footer/footer.component';
import { AbsFlyoutModule } from 'abs-components-se';
import { AbsTagbadgeModule } from 'abs-components-bc';
import { ModalTestComponent, ModalTestDialog } from './modal-test/modal-test.component';
import { FormComponent } from './form/form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderComponent,
    SearchComponent,
    ExportComponent,
    FooterComponent,
    ModalTestComponent,
    ModalTestDialog,
    FormComponent,
    FormReactiveComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    AbsFlyoutModule,
    AbsTagbadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule
  ],
  entryComponents: [ModalTestDialog,  ModalTestComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
