import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileServiceService } from 'src/app/services/file-service.service';
import { CookieService } from 'ngx-cookie-service';
import { NavegarService } from 'src/app/services/navegar.service';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.css'],
})
export class CreateFileComponent {
  @Output() refreshEvent = new EventEmitter<any>();

  public idCarpeta: string = '';

  public nombre: string = '';
  public extension: string = '';
  public contenido: string = '';

  //Constructor
  constructor(
    private fileService: FileServiceService,
    private navegarService: NavegarService,
    private cookieService: CookieService, //Para obtener el objeto "Usuario" (para mostrar sus atributos en diferente componente)
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCarpeta = this.ruta.snapshot.params['idCarpetaPadre'];
  }

  //Funciones
  public crearArchivo() {
    console.log(this.idCarpeta);

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
        alert('No se creo el Archivo');
        return;
      }

      //Evaluamos si el atributo respuesta del objeto no es nulo
      if (respuesta.respuesta === false) {
        alert('No se creo el Archivo 2');
        return;
      }

      alert(respuesta.motivo);
      this.navegarService.navegar(`home/${this.idCarpeta}`);
    });
  }
}
