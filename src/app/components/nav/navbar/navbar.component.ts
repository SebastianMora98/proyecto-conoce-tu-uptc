import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'Conoce Tu UPTC';
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.authService.isLogged);
  }

  onLogout() {
    this.authService.logout();
    console.log(this.authService.isLogged);
  }
}
