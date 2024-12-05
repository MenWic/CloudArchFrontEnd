import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class NavegarService {
  constructor(
    private router: Router, 
    private coockieService: CookieService
    ) {}

  //Funciones
  public navegar(ruta: string) {
    let rol = this.coockieService.get('rol');
    switch (rol) {
      case 'Administrador':
        this.router.navigate([`/adminMenu/${ruta}`]);
        break;
      case 'Empleado':
        console.log('entro');
        this.router.navigate([`/employeeMenu/${ruta}`]);
        break;
    }
  }
}
