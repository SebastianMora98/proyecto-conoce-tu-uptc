import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckPostGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

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
