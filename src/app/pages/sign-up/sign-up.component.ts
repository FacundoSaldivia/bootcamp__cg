import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user = {
    email: '',
    password: '',
    fullName: '',
    address: '',
    cellPhone: '',
  };
  constructor() {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    cellPhone: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.user);
  }
}
