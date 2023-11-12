import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';
import { FileServiceService } from 'src/app/services/file-service.service';
import { NavegarService } from 'src/app/services/navegar.service';

@Component({
  selector: 'app-move-file',
  templateUrl: './move-file.component.html',
  styleUrls: ['./move-file.component.css'],
})
export class MoveFileComponent {
  public carpetas: any[] = []; //Arreglo de carpetas
  public carpetaOp: any; //Carpeta destino elegida

  private idArchivo: any;
  public archivoActual: any;

  //Constructor
  constructor(
    private dirService: DirServiceService, //Trae carpetas mediante metodo
    private fileService: FileServiceService,
    private cookiesService: CookieService,
    private ruta: ActivatedRoute,
    private navegarServicee: NavegarService
  ) {}

  ngOnInit() {
    this.idArchivo = this.ruta.snapshot.params['idArchivoActual'];
    this.llenarComboCarpetas();
    this.cargarArchivo();
  }

  //Metodos
  public cargarArchivo() {
    this.fileService
      .traerArchivoPorId(this.idArchivo)
      .subscribe((archivo: any) => {
        this.archivoActual = archivo;
      });
  }

  public mostrarPath(objeto: any) {
    this.dirService.mostrarPathDeCarpeta(objeto._id).subscribe((res: any) => {
      objeto.path = res;
    });
  }

  public llenarComboCarpetas() {
    let usuario = this.cookiesService.get('usuario');
    this.dirService.mostrarCarpetasDeUsuario(usuario).subscribe((res: any) => {
      this.carpetas = res;

      for (let carpeta of this.carpetas) {
        this.mostrarPath(carpeta);
      }

      console.log(this.carpetas)

      //al final mostrar la raiz
      this.carpetas.push({ _id: 'raiz', path: 'raiz' });
    });
  }

  /**
   * Mueve la carpeta al path indicado
   */
  public moverArchivo() {
    let update = {
      _id: this.idArchivo,
      destino_id: this.carpetaOp,
    };

    this.dirService.moverCarpeta(update).subscribe((res: any) => {
      alert(res.motivo);
      if (res.respuesta === true) {
        this.navegarServicee.navegar(`home/${this.carpetaOp}`);
      }
    });
  }
}
