import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employee-top-navbar',
  templateUrl: './employee-top-navbar.component.html',
  styleUrls: ['./employee-top-navbar.component.css'],
})
export class EmployeeTopNavbarComponent {
  //Constructor
  constructor(private router: Router, private cookieService: CookieService) {}

  //metodo
  public logout() {
    this.cookieService.delete('usuario');
    this.cookieService.delete('rol');
    this.router.navigate(['login']);
  }
}
