import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public usuario!: string;
  public password!: string;

  public banderaError: boolean = false;

  constructor(
    private usuariosService: UsuarioServiceService,
    private router: Router,
    private cookieService:CookieService
  ) {}

  public login() {
    this.banderaError = false;

    let usuario = new Object({
      correoElectronico: this.usuario,
      password: this.password,
    });

    this.usuariosService.login(usuario).subscribe((respuesta: any) => {
      console.log(respuesta);
      if (respuesta === null) {
        this.banderaError = true;
        return;
      }
      if (respuesta.respuesta === false) {
        this.banderaError = true;
        return;
      }
      this.cookieService.set("usuario", respuesta.usuarioEncontrado.correoElectronico);
      this.redirect(respuesta);
    });
  }

  private redirect(usuario: any) {
    console.log(usuario);
    switch (usuario.usuarioEncontrado.rol) {
      case 'Administrador':
        this.router.navigate(['/adminMenu/home/raiz']);
        break;
      case 'Empleado':
        console.log('entro');
        this.router.navigate(['/employeeMenu/home/raiz']);
        break;
    }
  }
}
