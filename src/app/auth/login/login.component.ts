import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public banderaError: boolean = false;

  constructor(
    private usuariosService: UsuarioServiceService,
    private router: Router
  ) {}

  public login() {
    let usuario = new Object({
      xx: '',
      xx2: '',
    });
    this.usuariosService.login(usuario).subscribe((resupuesta: any) => {
      if (resupuesta !== null) {
        this.router.navigate(['/login']);
      } else {
        this.banderaError = true;
      }
    });
  }

  private redirect(usuario: any) {
    switch (usuario.rol) {
      case 'administrador':
        this.router.navigate(['/menuAdmin']);
        break;
      case 'emppleado':
        this.router.navigate(['/menuEmpleado']);
        break;
    }
  }
}
