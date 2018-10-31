import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // access the reference to the form
  @ViewChild('form') registrationForm: NgForm;

  suggestUserName() {
    const suggestedUserName = 'Admin';
  }

  onSubmit(form: NgForm) {
    console.log(this.registrationForm);
  }

}
/*
validity is tracked on a per-control basis
but also on a per-form basis
*/