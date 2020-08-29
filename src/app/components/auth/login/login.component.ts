import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onLogin(): void {
    const formValue = this.loginForm.value;
    this.authService.login(formValue).subscribe((res) => {
      if (res) {
        this.router.navigate(['/home']);
      }
    });
  }
}
