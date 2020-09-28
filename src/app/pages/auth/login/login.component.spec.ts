import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { User, UserResponse } from '@interfaces/auth/user.interface';

import { LoginComponent } from './login.component';
import { AuthService } from '@services/auth/auth.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

const loginServiceStub = {
  login({ username, password }: User) {
    const authData: User = {
      username,
      password,
    };
    const response: UserResponse = {
      user_email: authData.username,
      token: 'token',
      user_nicename: authData.username,
      user_display_name: authData.username,
      user_role: ['editor', 'bbp_participant'],
    };
    return response;
  },
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: AuthService;
  let store: MockStore;

  let isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const formBuilder: FormBuilder = new FormBuilder();
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [CommonModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: loginServiceStub },
        { provide: formBuilder, useValue: formBuilder },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(AuthService);
    store = TestBed.inject(MockStore);

    const emailCtrl = new FormControl(null, [
      Validators.required,
      Validators.pattern(isValidEmail),
    ]);
    const passwordCtrl = new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]);
    const rememberMeCtrl = new FormControl(false);

    component.loginForm = formBuilder.group({
      username: emailCtrl,
      password: passwordCtrl,
      rememberMe: rememberMeCtrl,
    });

    fixture.detectChanges();
  });

  // Verifica si el componente se creo correctamente
  it('Se creó el componente', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario de login es valido', () => {
    component.loginForm.controls['username'].setValue('test@gmail.com');
    component.loginForm.controls['password'].setValue('Test123456');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('el formulario de login es invalido', () => {
    component.loginForm.controls['username'].setValue(null);
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['password'].setValue(null);
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('se agrega ng-invalid en el imput de email', () => {
    // se ingresa un valor nulo en el correo
    component.loginForm.controls['username'].setValue(null);
    // se marca como tocado
    component.loginForm.controls['username'].markAllAsTouched();

    const emailInput = fixture.debugElement.query(
      By.css('[formcontrolname=username]')
    ).nativeElement;

    //se verifica si se agrega ng-valid
    expect(emailInput).toHaveClass('ng-invalid');
  });

  it('deberia desactivarse el atributo submit del boton de login cuando el formulario es invalido', () => {
    // se le asigna un valor invalido al correo
    component.loginForm.get('username').setValue(null);

    const submitBtb = fixture.debugElement.query(By.css('.btn-submit'))
      .nativeElement;

    submitBtb.click();

    // pasa la prueba si el boton esta desactivado
    expect(submitBtb.disabled).toBeTrue();
  });

  it('llama a la funcion onLogin cuando se clickea el boton de submit', () => {
    spyOn(component, 'onLogin');

    const submitBtb = fixture.debugElement.query(By.css('.btn-submit'))
      .nativeElement;
    submitBtb.click();

    //se espera que cuando se de click en el boton se llame  a la funcion onLogin
    fixture.whenStable().then(() => {
      expect(component.onLogin).toHaveBeenCalled();
    });
  });

  it('deberia cambiar agregar la clase checkbox-checked si esta marcado, y removarla si no.', () => {
    component.loginForm.get('rememberMe').setValue(false);

    const checkboxInput = fixture.debugElement.query(
      By.css('[formControlName=rememberMe]')
    ).nativeElement;

    expect(checkboxInput).not.toHaveClass('checkbox-checked');
    component.loginForm.get('rememberMe').setValue(true);
    fixture.detectChanges();
    expect(checkboxInput).toHaveClass('checkbox-checked');
  });

  it('debiera llamar al servicio de authenticacion cuando el formulario de login es valido', () => {
    const userResponse = {
      user_email: 'sebastian',
      token: 'fake-token',
      user_nicename: 'test',
      user_display_name: 'test',
      user_role: ['editor', 'bbp_participant'],
    };

    // se simula una respuesta por parte del metodo login del servicio de autenticacion
    const serviceLogin = spyOn(loginService, 'login').and.returnValue(
      of(userResponse as UserResponse)
    );

    component.loginForm.get('username').setValue('sebastian');
    component.loginForm.get('password').setValue('Test123456');
    component.loginForm.get('rememberMe').setValue(false);

    // se ejecuta onLogin
    component.onLogin();

    expect(serviceLogin).toHaveBeenCalled();
  });

  it('debiera NO llamar al servicio de authenticacion cuando el formulario de login es INVALIDO', () => {
    const userResponse = {
      user_email: 'sebastian',
      token: 'fake-token',
      user_nicename: 'test',
      user_display_name: 'test',
      user_role: ['editor', 'bbp_participant'],
    };

    // se simula una respuesta por parte del metodo login del servicio de autenticacion
    const serviceLogin = spyOn(loginService, 'login').and.returnValue(
      of(userResponse as UserResponse)
    );

    // CORREO INVALIDO
    component.loginForm.get('username').setValue(null);

    component.loginForm.get('password').setValue('Test123456');
    component.loginForm.get('rememberMe').setValue(false);

    // se ejecuta onLogin
    component.onLogin();

    expect(serviceLogin).not.toHaveBeenCalled();
  });
});
