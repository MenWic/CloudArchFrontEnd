import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FileServiceService } from 'src/app/services/file-service.service';
import { NavegarService } from 'src/app/services/navegar.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.css'],
})
export class ShareFileComponent implements OnInit {
  public idArchivo: string = '';
  public idCarpeta: any;
  public archivo: any;
  public usuarioCompartir: string = '';

  //Constructor
  public constructor(
    private fileService: FileServiceService, //Para obtener el objeto "Usuario" (para mostrar sus atributos en diferente componente)
    private ruta: ActivatedRoute,
    private navegarService: NavegarService,
    private compartirService: SharedService,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this.idArchivo = this.ruta.snapshot.params['idArchivo'];
    this.idCarpeta = this.ruta.snapshot.params['idCarpeta'];

    this.fileService
      .traerArchivoPorId(this.idArchivo)
      .subscribe((respuesta: any) => {
        this.archivo = respuesta;
      });
  }

  ///--------------
  public compartirArchivo() {
    this.archivo.usuario_receptor = this.usuarioCompartir;
    this.archivo.usuario_que_compartio = this.cookies.get('usuario');
    this.compartirService
      .compartirArchivo(this.archivo)
      .subscribe((respuesta: any) => {
        //Evaluamos si el objeto respuesta es null
        if (respuesta === null) {
          alert('No se compartio el Archivo debido a un error');
          return;
        }

        //Evaluamos si el atributo respuesta del objeto no es nulo
        if (respuesta.respuesta === false) {
          alert(respuesta.motivo);
          return;
        }

        alert(respuesta.motivo);
        this.navegarService.navegar(`home/${this.idCarpeta}`);
      });
  }
}
