import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';

@Component({
  selector: 'app-create-dir',
  templateUrl: './create-dir.component.html',
  styleUrls: ['./create-dir.component.css']
})
export class CreateDirComponent {
  public banderaError: boolean = false;
  public banderaConfig: boolean = false;
  public mensaje: string = "";

  public carpeta_raiz_id!: string;
  public nombre!: string;
  public usuario_propietario!: String;

  constructor(
    private dirService: DirServiceService,
    private router: Router,
    private cookieService: CookieService,
    private ruta: ActivatedRoute
  ) {}

  public crearDirectorio(){
    this.banderaError = false;

    let dir = new Object({
      carpeta_raiz_id: this.ruta.snapshot.params['idCarpetaPadre'],
      nombre: this.nombre,
      usuario_propietario: this.cookieService.get('usuario')
    });

    this.dirService.crearCarpeta(dir).subscribe((respuesta: any) =>{
      console.log(respuesta);

      //Evaluamos si el objeto respuesta es null
      if (respuesta === null) {
        this.banderaError = true;
        return;
      }

      //Evaluamos si el atributo respuesta del objeto no es nulo
      if (respuesta.respuesta === false) {
        this.banderaError = true;
        this.mensaje = respuesta.motivo;
        return;
      }

      //Todo esta bien, mandamos bandera:true a html
      this.banderaConfig = true;
      this.mensaje = respuesta.motivo; //motivo viene del backend (Correcto o no)
      this.cookieService.set(
        'usuario',
        respuesta.usuarioEncontrado.correoElectronico
      );

    });
  }
}
