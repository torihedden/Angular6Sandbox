import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit{
  // property declaration area, whattuppp
  genders = ['gender 1', 'gender 2', 'gender 3'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      // wrap name as a string to ensure it is maintined during minification
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    
  }
  
}
