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
  public carpetasDeCarpeta: any[] = [];

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private fileService: FileServiceService,
    private dirService: DirServiceService,
    private cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    this.idCarpeta = this.ruta.snapshot.params['idCarpeta']; //traer la carpeta padre
    this.mostrarArchivosYCarpetas(); //mostrar los archivos y las carpetas de la carpeta padre
  }

  private mostrarArchivosYCarpetas() {
    this.mostrarCarpetas();
    this.mostrarArchivos();
  }

  private mostrarArchivos() {}

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
}
