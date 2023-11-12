import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-top-navbar',
  templateUrl: './admin-top-navbar.component.html',
  styleUrls: ['./admin-top-navbar.component.css'],
})
export class AdminTopNavbarComponent {
  //Constructor
  constructor(
    private router: Router, 
    private cookieService: CookieService
    ) {}

  public logout() {
    this.cookieService.delete('usuario');
    this.cookieService.delete('rol');
    this.router.navigate(['login']);
  }
}
