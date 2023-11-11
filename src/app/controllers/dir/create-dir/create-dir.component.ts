import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DirServiceService } from 'src/app/services/dir-service.service';

@Component({
  selector: 'app-create-dir',
  templateUrl: './create-dir.component.html',
  styleUrls: ['./create-dir.component.css'],
})
<<<<<<< HEAD
export class CreateDirComponent implements OnInit {
  public nombre: string = '';
  public idCarpeta: string = '';
=======
export class CreateDirComponent {
  public banderaError: boolean = false;
  public banderaConfig: boolean = false;
  public mensaje: string = '';

  public carpeta_raiz_id!: string;
  public nombre!: string;
  public usuario_propietario!: String;
>>>>>>> 632d7ce22498fae87e87cd72677e7b209c756049

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

<<<<<<< HEAD
      alert(respuesta.motivo);
      this.router.navigate([`/adminMenu/home/${this.idCarpeta}`]);
=======
      //Todo esta bien, mandamos bandera:true a html
      this.banderaConfig = true;
      this.mensaje = respuesta.motivo; //motivo viene del backend (Correcto o no)
      this.cookieService.set(
        'usuario',
        respuesta.usuarioEncontrado.correoElectronico
      );
>>>>>>> 632d7ce22498fae87e87cd72677e7b209c756049
    });
  }
}
