import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  language = ['English', 'German', 'Japanese'];

  registrationFormData = {
    username: '',
    email: '',
    secret: '',
    language: ''
  }

  // access the reference to the form (fetch from the template with ViewChild)
  @ViewChild('form') registrationForm: NgForm;

  suggestUserName() {  
    const suggestedUserName = 'Admin';
    // setValue requires each field to be represented
    // not the best as you have to address each value even when just addressing one value
    // this.registrationForm.setValue({
    //   username: suggestedUserName,
    //   email: this.registrationForm.controls.email.value,
    //   secret: this.registrationForm.controls.secret.value,
    //   language: this.registrationForm.controls.language.value  
    // });

    // better approach is to use patchValue and set the desired value
    this.registrationForm.form.patchValue({
      username: suggestedUserName
    })
  }

  onSubmit(form: NgForm) {
    this.registrationFormData.username = form.controls.username.value;
    this.registrationFormData.email = form.controls.email.value;
    this.registrationFormData.secret = form.controls.secret.value
    this.registrationFormData.language = form.controls.language.value

    // clear the form values
    this.registrationForm.reset();

    // this will have all key's values as "null", because .reset() is called on the form
    console.log(this.registrationForm.value);
    // this will contain the user's provided information as the key's values
    console.log(this.registrationFormData);
  }

}
/*
- validity is tracked on a per-control basis
- but also on a per-form basis
*/