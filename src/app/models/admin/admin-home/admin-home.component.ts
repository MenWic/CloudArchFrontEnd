import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';
import { FileServiceService } from 'src/app/services/file-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  private idCarpeta: string = '';


  public carpetaActual: any;

  public carpetasDeCarpeta: any[] = [];
  public archivosDeCarpeta: any[] = [];

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private fileService: FileServiceService,
    private dirService: DirServiceService,
    private cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    this.idCarpeta = 'raiz';
    this.mostrarArchivosYCarpetas(); //mostrar los archivos y las carpetas de la carpeta padre
  }

  private mostrarArchivosYCarpetas() {
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

  public toCrearArchivo() {
    this.router.navigate([`/adminMenu/crearArchivo/${this.idCarpeta}`]); //enviamos al formulario de creacion de archivo la carpeta en la que nos encontramos
  }

  public toCrearCarpeta() {
    this.router.navigate(['/adminMenu/adminHome/null']);
  }

  public navegarHaciaCarpeta(objeto: any) {
    this.idCarpeta = objeto.id_carpeta;

    if (objeto.id_carpeta !== "raiz") {
      this.dirService
        .traerCarpetaPorId(objeto.id_carpeta)
        .subscribe((carpeta: any) => {
          this.carpetaActual = carpeta;
        });
    }

    this.mostrarArchivosYCarpetas();
  }

  public regresar() {
    let datos = new Object({
      id_carpeta: this.carpetaActual.carpeta_raiz_id,
    });
    this.navegarHaciaCarpeta(datos);
  }
}
