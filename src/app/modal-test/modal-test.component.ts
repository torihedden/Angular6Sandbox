import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  inquiryReason: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-modal-test',
  templateUrl: 'modal-test.component.html',
  styleUrls: ['modal-test.component.css'],
})
export class ModalTestComponent {

  inquiryReason: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalTestDialog, {
      width: '250px',
      data: {name: this.name, inquiryReason: this.inquiryReason}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.inquiryReason = result;
    });
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

  onNoClick(): void {
    this.dialogRef.close();
  }

}
