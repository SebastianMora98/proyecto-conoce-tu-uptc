import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit, OnDestroy {
  private isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  private subcription: Subscription = new Subscription();

  loginForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.pattern(this.isValidEmail)],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberMe: [''],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.isRememberMeStorage();
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  onLogin(): void {
    if (this.loginForm.value.rememberMe) {
      localStorage.setItem('username', this.loginForm.value.username);
      localStorage.setItem(
        'RememberMe',
        JSON.stringify(this.loginForm.value.rememberMe)
      );
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('rememberMe');
    }

    const formValue = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.subcription.add(
      this.authService.login(formValue).subscribe(
        (res) => {
          if (res) {
            this.router.navigate(['/home']);
          }
        },
        (err) => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Usuario o contraseña incorrectos',
            detail: 'Verifique que los datos ingresados son correctos',
          });
        }
      )
    );
  }
  getErrorMessage(field: string): string {
    let message = '';
    if (this.loginForm.get(field).errors?.required) {
      message = 'Este campo no puede estar vacio';
    } else if (this.loginForm.get(field).hasError('pattern')) {
      message = 'No es un email valido';
    } else if (this.loginForm.get(field).hasError('minlength')) {
      const minLength = this.loginForm.get(field).errors?.minlength
        .requiredLength;
      message = `La contraseña debe tener minimo ${minLength} caracteres`;
    }
    return message;
  }
  isValidField(field: string): boolean {
    return (
      (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) &&
      !this.loginForm.get(field).valid
    );
  }

  isRememberMeStorage() {
    if (localStorage.getItem('RememberMe') == 'true') {
      this.loginForm.controls['username'].setValue(
        localStorage.getItem('username')
      );
      this.loginForm.controls['rememberMe'].setValue(true);
    } else {
      this.loginForm.controls['rememberMe'].setValue(false);
    }
  }
}
