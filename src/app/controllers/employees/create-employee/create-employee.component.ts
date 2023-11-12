import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  /*
  //Constructor
  constructor(
    private fileService: FileServiceService,
    private navegarService: NavegarService,
    private cookieService: CookieService, //Para obtener el objeto "Usuario" (para mostrar sus atributos en diferente componente)
    private ruta: ActivatedRoute
  ) {}

  public crearArchivo() {
    console.log(this.idCarpeta);

    let file = new Object({
      carpeta_raiz_id: this.ruta.snapshot.params['idCarpetaPadre'],
      nombre: this.nombre,
      extension: this.extension,
      contenido: this.contenido,
      usuario_propietario: this.cookieService.get('usuario'),
    });
    */

}
