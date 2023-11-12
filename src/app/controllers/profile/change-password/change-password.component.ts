import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavegarService } from 'src/app/services/navegar.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  public idUsuario: string = '';
  public usuario: string = '';

  public password: string = '';

  //Constructor
  constructor(
    private usuarioService: UsuarioServiceService,
    private cookieService: CookieService,
    private navegarService: NavegarService
  ){}

  ngOnInit(): void {
    this.idUsuario = this.cookieService.get('usuario'); //Obtener el usuario (correo)
  }

  //Metodos
  public editarPassword(){
    let usuario = new Object({
      correoElectronico: this.idUsuario,
      password: this.password
    });

    this.usuarioService.editarUsuario(usuario).subscribe((respuesta: any) => {
    //Evaluamos si el objeto respuesta es null
    if (respuesta === null) {
      alert('No se pudo guardar');
      return;
    }

    //Evaluamos si el atributo respuesta del objeto no es nulo
    if (respuesta.respuesta === false) {
      alert('No se guardo el cambio');
      return;
    }
    alert("Se guardo el cambio");
    this.navegarService.navegar(`home/raiz`);
  });
  }
}
