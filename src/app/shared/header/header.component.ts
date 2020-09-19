import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { SidebarService } from '@services/sidebar/sidebar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'Conoce Tu UPTC';
  isLogged = false;
  role = '';

  private subscription: Subscription = new Subscription();

  constructor(
    public authService: AuthService,
    public router: Router,
    public sideBarService: SidebarService
  ) {
    this.role = localStorage.getItem('role');
  }

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isLogged.subscribe((res) => (this.isLogged = res))
    );
  }

  getRole(): string {
    return localStorage.getItem('role');
  }

  getNiceName(): string {
    return localStorage.getItem('nicename');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
