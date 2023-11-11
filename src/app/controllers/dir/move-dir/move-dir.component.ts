import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';
import { NavegarService } from 'src/app/services/navegar.service';

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
    private ruta: ActivatedRoute,
    private navegarServicee: NavegarService
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

      //al final mostrar la raiz
      this.carpetas.push({ _id: 'raiz', path: 'raiz' });
    });
  }

  /**
   * Mueve la carpeta al path indicado
   */
  public moverCarpeta() {
    let update = {
      _id: this.idCarpeta,
      destino_id: this.carptaOp,
    };

    this.dirService.moverCarpeta(update).subscribe((res: any) => {
      alert(res.motivo);
      if (res.respuesta === true) {
        this.navegarServicee.navegar(`home/${this.carptaOp}`);
      }
    });
  }
}
