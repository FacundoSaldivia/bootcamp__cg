import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up.service';
import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  administrador: Rol = {
    name: 'Administrador',
  };

  user = {
    email: '',
    fullName: '',
    address: '',
    cellPhone: '',
    observations: '',
    password: '',
    vehicle: '',
    rol: this.administrador,
  };
  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    cellPhone: new FormControl(''),
    vehicle: new FormControl(''),
    rol: new FormControl(this.administrador),
  });

  onSubmit(): void {
    this.signUp();
  }
  signUp() {
    this.signUpService.save(this.registerForm.value).subscribe((resp: any) => {
      console.log(resp);
    });
  }
  getAllClients() {
    this.signUpService.getAll().subscribe((resp) => {
      console.log(resp);
    });
  }
}
