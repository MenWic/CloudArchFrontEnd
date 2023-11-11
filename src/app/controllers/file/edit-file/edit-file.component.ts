import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FileServiceService } from 'src/app/services/file-service.service';
import { NavegarService } from 'src/app/services/navegar.service';

@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css'],
})
export class EditFileComponent implements OnInit {
  public idArchivo: string = '';
  
  public archivo: any;
  public idCarpeta: any;

  public nombre: string = '';
  public extension: string = '';
  public contenido: string = '';

  //Constructor
  public constructor(
    private fileService: FileServiceService, //Para obtener el objeto "Usuario" (para mostrar sus atributos en diferente componente)
    private ruta: ActivatedRoute,
    private cookieService: CookieService,
    private navegarService: NavegarService
  ) {}

  ngOnInit(): void {
    this.idArchivo = this.ruta.snapshot.params['idArchivo'];
    this.fileService.traerArchivoPorId(this.idArchivo).subscribe((respuesta: any) => {
        console.log(respuesta);
        this.archivo = respuesta;
        this.nombre = this.archivo.nombre;
        this.extension = this.archivo.extension;
        this.contenido = this.archivo.contenido;
      });
    console.log(this.idArchivo);
  }

  ///--------------
  public editarArhivo(){
    this.archivo.nombre = this.nombre;
    this.archivo.extension = this.extension;
    this.archivo.contenido = this.contenido;

    console.log("xd", this.archivo)

    this.fileService.editarArchivo(this.archivo).subscribe((respuesta: any) => {
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
      this.navegarService.navegar(`home/raiz`);
    });
  }
}
