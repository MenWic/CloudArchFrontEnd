import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';

@Component({
  selector: 'app-move-dir',
  templateUrl: './move-dir.component.html',
  styleUrls: ['./move-dir.component.css'],
})
export class MoveDirComponent implements OnInit {
  public carpetas: any[] = [];
  private idCarpeta: any;
  public carpetaActual: any;
  public carptaOp: any;
  constructor(
    private dirService: DirServiceService,
    private cookiesService: CookieService,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCarpeta = this.ruta.snapshot.params['idCarpetaActual'];
    this.llenarComboCarpetas();
    this.cargarCarpeta();
  }

  public cargarCarpeta() {
    this.dirService
      .traerCarpetaPorId(this.idCarpeta)
      .subscribe((carpeta: any) => {
        this.carpetaActual = carpeta;
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
    });
  }

  public moverCarpeta() {
    console.log('Datos a enviar al backend:', this.carptaOp);

    let update = {
      _id: this.idCarpeta,
      carpeta_raiz_id: this.carptaOp,
    };

    this.dirService.moverCarpeta(update).subscribe((res: any) => {
      alert(res.motivo);
    });
  }
}
