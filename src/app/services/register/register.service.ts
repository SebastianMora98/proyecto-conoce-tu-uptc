import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  RegisterUser,
  RegisterUserResponse,
} from '@interfaces/register/IRegisterUser';
import { environment } from '@env/environment';
/**
 * Servicio de registro, este servicio permite registrar usuarios.
 */
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  /**
   * Constructor del servicio de creacion de noticias
   * @param {HttpClient} http  Libreria que permite realizar peticiones al servidor
   */
  constructor(private http: HttpClient) {}
  /**
   * @param {RegisterUser} registerData  Contiene la informacion de usuario requerida (usuario , correo y contraseña) para el registro.
   * @returns Regresa una respuesta por parte del servidor con la informacion del usuario registrado
   */
  register(
    registerData: RegisterUser
  ): Observable<RegisterUserResponse | void> {
    const username: string = registerData.username;
    const email: string = registerData.email;
    const password: string = registerData.password;

    return this.http

      .post<RegisterUserResponse>(
        `${environment.API_URL}/admin/wp-json/wp/v2/users/register`,
        { username, email, password }
      )
      .pipe(
        map((res: RegisterUserResponse) => {
          console.log(res);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }
  /**
   * @param {HttpErrorResponse} error Error a manejar
   * @returns Regresa un observable del error
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError(error);
  }
}
