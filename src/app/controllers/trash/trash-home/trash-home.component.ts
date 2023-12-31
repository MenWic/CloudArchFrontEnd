import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FileServiceService } from 'src/app/services/file-service.service';
import { TrashDirService } from 'src/app/services/trash-dir.service';
import { TrashFileService } from 'src/app/services/trash-file.service';

@Component({
  selector: 'app-trash-home',
  templateUrl: './trash-home.component.html',
  styleUrls: ['./trash-home.component.css']
})
export class TrashHomeComponent implements OnInit {
  private idCarpeta: string = '';
  //private idCarpetaPadre: string = '';

  public carpetaActual: any;

  public carpetasDeCarpeta: any[] = [];
  public archivosDeCarpeta: any[] = [];

  //Constructor
  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private fileService: TrashFileService,
    private dirService: TrashDirService,
    private cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    this.idCarpeta = this.ruta.snapshot.params['idCarpeta'];
    this.cargarCarpeta();
    this.mostrarArchivosYCarpetas(); //mostrar los archivos y las carpetas de la carpeta padre
  }

  public cargarCarpeta(){
    if (this.idCarpeta  !== "raiz") {
      this.dirService
        .traerCarpetaPorId(this.idCarpeta)
        .subscribe((carpeta: any) => {
          this.carpetaActual = carpeta;
        });
    }
  }

  public mostrarArchivosYCarpetas() {
    this.mostrarCarpetas();
    this.mostrarArchivos();
  }

  /**
   * obtiene el usuario con el cookiesService
   * Utiliza el fileService para mandar a traer los archivos de la carpeta
   */
  private mostrarArchivos() {
    let usuario = this.cookiesService.get('usuario');
    this.fileService
      .mostrarArchivosDeCarpeta(this.idCarpeta, usuario)
      .subscribe((archivos: any) => {
        console.log(archivos);
        this.archivosDeCarpeta = archivos;
      });
  }

  /**
   * obtiene el usuario con el cookiesService
   * Utiliza el dirService para mandar a traer las carpetas de la carpeta
   */
  private mostrarCarpetas() {
    let usuario = this.cookiesService.get('usuario');
    this.dirService
      .mostarCarpetasDeCarpeta(this.idCarpeta, usuario)
      .subscribe((carpetas: any) => {
        console.log(carpetas);
        this.carpetasDeCarpeta = carpetas;
      });
  }

  public navegarHaciaCarpeta(objeto: any) {
    this.idCarpeta = objeto.id_carpeta;
    this.router.navigate([`papelera/${this.idCarpeta}`]);
    this.cargarCarpeta();
    this.mostrarArchivosYCarpetas();
  }

  public regresar() {
    let datos = new Object({
      id_carpeta: this.carpetaActual.carpeta_raiz_id,
    });
    this.navegarHaciaCarpeta(datos);
  }
}