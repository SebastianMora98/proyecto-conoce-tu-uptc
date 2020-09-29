import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { environment } from '@env/environment';
import { UserResponse, User } from '@interfaces/auth/user.interface';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
/**
 * Servicio de autenticación, este servicio permite iniciar una sesion de usuario y ademas cerrarla.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Estado del usuario, si se encuentra loggeado o no
   */
  private loggedIn = new BehaviorSubject<boolean>(false);
  /**
   * Nombre de usuario del usuario
   */
  private userNiceName = new BehaviorSubject<string>('');
  /**
   * Si el usuario es administrador o editor cambia su estado a true
   */
  private role = new BehaviorSubject<boolean>(false);
  /**
   * Constructor del servicio de autenticacion de usuarios
   * @param {HttpClient} http  Libreria que permite realizar peticiones al servidor
   */
  constructor(private http: HttpClient) {
    this.checkToken();
  }
  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get userName(): Observable<string> {
    return this.userNiceName.asObservable();
  }

  get userRole(): Observable<boolean> {
    return this.role.asObservable();
  }

  /**
   * @param {User} authData  Contiene la informacion de usuario requerida (usuario y contraseña) para el inicio de sesion
   * @returns Regresa una respuesta por parte del servidor con la informacion del usuario y el token generado
   */
  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(
        `${environment.API_URL}/admin/wp-json/jwt-auth/v1/token`,
        authData
      )
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token, res.user_nicename, res.user_role[0]);
          this.loggedIn.next(true);
          console.log(
            res.user_role[0] == 'administrator' || res.user_role[0] == 'editor'
              ? true
              : false
          );
          this.role.next(
            res.user_role[0] == 'administrator' || res.user_role[0] == 'editor'
              ? true
              : false
          );
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }
  /**
   * @param {HttpErrorResponse} error Error a manejar
   * @returns Regresa un observable del error
   */
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'An error ocurred retrieving data';

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
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * Cierra la sesion, elimina datos almacenados del storage
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nicename');
    localStorage.removeItem('role');

    this.loggedIn.next(false);
    this.userNiceName.next('');
    this.role.next(false);
  }
  /**
   * Comprueba si el token de usuario todavia es valido
   */
  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpire = helper.isTokenExpired(userToken);

    //si expiro el token se cierra sesion , si no ha expirado la sesion se mantiene

    isExpire ? this.logout() : this.loggedIn.next(true);
    isExpire
      ? this.logout()
      : this.userNiceName.next(localStorage.getItem('nicename'));
    isExpire
      ? this.logout()
      : this.userNiceName.next(localStorage.getItem('role'));
  }
  /**
   * Almacena el informacion del usuario en el localstorage
   */
  private saveToken(token: string, nicename: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('nicename', nicename);
    localStorage.setItem('role', role);
  }
}
