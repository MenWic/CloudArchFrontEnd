import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';

@Component({
  selector: 'app-create-dir',
  templateUrl: './create-dir.component.html',
  styleUrls: ['./create-dir.component.css'],
})
export class CreateDirComponent implements OnInit {
  public nombre: string = '';
  public idCarpeta: string = '';

  //Constructor
  constructor(
    private dirService: DirServiceService,
    private router: Router,
    private cookieService: CookieService,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCarpeta = this.ruta.snapshot.params['idCarpetaPadre'];
  }

  //Fucniones
  public crearDirectorio() {
    console.log(this.idCarpeta);
    let dir = new Object({
      carpeta_raiz_id: this.idCarpeta,
      nombre: this.nombre,
      usuario_propietario: this.cookieService.get('usuario'),
    });

    this.dirService.crearCarpeta(dir).subscribe((respuesta: any) => {
      console.log(respuesta);

      //Evaluamos si el objeto respuesta es null
      if (respuesta === null) {
        alert('No se creo con la carpeta');
        return;
      }

      //Evaluamos si el atributo respuesta del objeto no es nulo
      if (respuesta.respuesta === false) {
        alert('No se creo con la carpeta');
        return;
      }

      alert(respuesta.motivo);
      this.router.navigate([`/adminMenu/home/${this.idCarpeta}`]);
    });
  }
}
