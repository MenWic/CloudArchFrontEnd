import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileServiceService } from 'src/app/services/file-service.service';
import { TrashFileService } from 'src/app/services/trash-file.service';

@Component({
  selector: 'app-show-file-content',
  templateUrl: './show-file-content.component.html',
  styleUrls: ['./show-file-content.component.css'],
})
export class ShowFileContentComponent implements OnInit {
  public idArchivo: string = '';
  public archivo: any;

  public nombre: string = '';
  public extension: string = '';
  public contenido: string = '';

  //Constructor
  constructor(
    private fileService: FileServiceService, //Para obtener el objeto "Usuario" (para mostrar sus atributos en diferente componente)
    private ruta: ActivatedRoute,
    private trashService: TrashFileService
  ) {}

  ngOnInit(): void {
    this.idArchivo = this.ruta.snapshot.params['idArchivo'];
    let modoVista = this.ruta.snapshot.params['modoVista'];

    if (modoVista === 'noTrash') {
      this.fileService
        .traerArchivoPorId(this.idArchivo)
        .subscribe((respuesta: any) => {
          console.log(respuesta);
          this.archivo = respuesta;
          this.nombre = this.archivo.nombre;
          this.extension = this.archivo.extension;
          this.contenido = this.archivo.contenido;
        });
    } else {
      this.trashService
        .traerArchivoPorId(this.idArchivo)
        .subscribe((respuesta: any) => {
          console.log(respuesta);
          this.archivo = respuesta;
          this.nombre = this.archivo.nombre;
          this.extension = this.archivo.extension;
          this.contenido = this.archivo.contenido;
        });
    }
    console.log(this.idArchivo);
  }

  //Funciones
  public guardarArchivo() {}
}
