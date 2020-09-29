import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';
import { map, take } from 'rxjs/operators';
/**
 * Check Post Guard, previene que el usuario ingrese a crear noticias si no es administrador o editor
 */
@Injectable({
  providedIn: 'root',
})
export class CheckPostGuard implements CanActivate {
  /**
   * Constructor de CheckLoginGuard
   *  @param {AuthService} authService  Servicio de autenticacion
   *  @param {Router} router  Dependecia que permite navegar entre rutas
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Si un usuario no es editor o administrador es redirigido a la ruta home
   */
  canActivate(): Observable<boolean> {
    return this.authService.userRole.pipe(
      take(1),
      map((userRole: boolean) => {
        userRole =
          localStorage.getItem('role') == 'editor' ||
          localStorage.getItem('role') == 'administrator'
            ? true
            : false;

        if (!userRole) {
          this.router.navigate(['/']);
        }
        return userRole;
      })
    );
  }
}
