import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';
import { map, take } from 'rxjs/operators';
/**
 * Checj Login Guard, previene que algunas rutas puedan ser accedidas si no se encuentra autenticado el usuario
 */
@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  /**
   * Constructor de CheckLoginGuard
   *  @param {AuthService} authService  Servicio de autenticacion
   */
  constructor(private authService: AuthService) {}

  /**
   * Si un usuario logeado puede acceder a una ruta o no
   */
  canActivate(): Observable<boolean> {
    return this.authService.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => !isLogged)
    );
  }
}
