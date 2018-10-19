import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderService } from '../services/order.service';

export interface DialogData {
  inquiryReason: string;
  // name: string;
  customerReason: string;
  reasons: string[];

  // the id from the order. this is to test how to pass data from the orderservice to the modal component
  id: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-modal-test',
  templateUrl: 'modal-test.component.html',
  styleUrls: ['modal-test.component.css'],
  providers: [OrderService]
})

export class ModalTestComponent {

  inquiryReason: string;
  // name: string;

  customerReason: string;
  reasons: string[] = ['Inquiry', 'Not Ready', 'Order', 'Test'];

  id: string = '#';

  constructor(public dialog: MatDialog, private orderService: OrderService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalTestDialog, {
      width: '250px',
      data: {
        // name: this.name,
        inquiryReason: this.inquiryReason,
        customerReason: this.customerReason,
        reasons: this.reasons,
        id: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.inquiryReason = result;
    });
  }

  getOrderIdentifiers() {
    // don't initiate another call to the order service. that's breaking the app
    // try to pass the order data from the table component instead
  }

}

@Component({
  selector: 'modal-test-example-dialog',
  templateUrl: 'modal-test-example-dialog.html',
  styleUrls: ['modal-test.component.css']
})

export class ModalTestDialog {

  constructor(
    public dialogRef: MatDialogRef<ModalTestDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
