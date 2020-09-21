import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RegisterUser } from '@interfaces/register/IRegisterUser';
import { RegisterService } from '@services/register/register.service';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  private isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  private subcription: Subscription = new Subscription();

  registerForm: FormGroup;

  usernameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  constructor(
    public registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {
    this.usernameCtrl = new FormControl(null, [Validators.required]);
    this.emailCtrl = new FormControl(null, [
      Validators.required,
      Validators.pattern(this.isValidEmail),
    ]);
    this.passwordCtrl = new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]);

    this.registerForm = this.formBuilder.group({
      username: this.usernameCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  ngOnInit(): void {}

  onRegister(): void {
    const formValue: RegisterUser = {
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
    };
    console.log(formValue);
    this.subcription.add(
      this.registerService.register(formValue).subscribe(
        (res) => {
          if (res) {
            this.messageService.add({
              severity: 'success',
              summary: 'Usuario registrado',
              detail: formValue.username + ' ha registrado correctamente',
            });
          }
        },
        (err) => {
          if (err.error.code === 406) {
            this.messageService.add({
              severity: 'warn',
              summary: 'El usuario ya se encuentra registrado',
              detail:
                'El nombre de usuario y/o correo se encuentran registrados',
            });
          } else if (err.error.code === 400) {
            this.messageService.add({
              severity: 'error',
              summary: 'El nombre de usuario es incorrecto',
              detail: 'Verifique que los datos ingresados son correctos',
            });
          } else if (err.error.code === 401) {
            this.messageService.add({
              severity: 'error',
              summary: 'El email es incorrecto',
              detail: 'Verifique que los datos ingresados son correctos',
            });
          } else if (err.error.code === 404) {
            this.messageService.add({
              severity: 'error',
              summary: 'La contraseña es incorrecta',
              detail: 'Verifique que los datos ingresados son correctos',
            });
          }
        }
      )
    );
  }
  isValidField(field: string): boolean {
    return (
      (this.registerForm.get(field).touched ||
        this.registerForm.get(field).dirty) &&
      !this.registerForm.get(field).valid
    );
  }

  getErrorMessage(field: string): string {
    let message = '';
    if (this.registerForm.get(field).errors?.required) {
      message = 'Este campo no puede estar vacio';
    } else if (this.registerForm.get(field).hasError('pattern')) {
      message = 'No es un email valido';
    } else if (this.registerForm.get(field).hasError('minlength')) {
      const minLength = this.registerForm.get(field).errors?.minlength
        .requiredLength;
      message = `La contraseña debe tener minimo ${minLength} caracteres`;
    }
    return message;
  }
}
