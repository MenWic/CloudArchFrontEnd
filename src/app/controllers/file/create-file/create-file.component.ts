import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileServiceService } from 'src/app/services/file-service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.css'],
})
export class CreateFileComponent {
  public banderaError: boolean = false;
  public banderaConfig: boolean = false;
  public mensaje: string = '';

  public carpeta_raiz_id!: string;
  public nombre!: string;
  public extension!: string;
  public contenido!: string;
  public usuario_propietario!: string;

  constructor(
    private fileService: FileServiceService,
    private router: Router,
    private cookieService: CookieService, //Para obtener el objeto "Usuario" (para mostrar sus atributos en diferente componente)
    private ruta: ActivatedRoute
  ) {}

  public crearArchivo() {
    this.banderaError = false;

    let file = new Object({
      carpeta_raiz_id: this.ruta.snapshot.params['idCarpetaPadre'],
      nombre: this.nombre,
      extension: this.extension,
      contenido: this.contenido,
      usuario_propietario: this.cookieService.get('usuario'),
    });

    this.fileService.crearArchivo(file).subscribe((respuesta: any) => {
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
