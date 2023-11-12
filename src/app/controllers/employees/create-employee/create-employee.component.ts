import { Component, NgModule } from '@angular/core';
import { NavegarService } from 'src/app/services/navegar.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})

export class CreateEmployeeComponent {
  public correo: string = '';
  public password: string = '';
  public rol: string = '';

  //Constructor
  constructor(
    private usuarioService: UsuarioServiceService,
    private navegarService: NavegarService
  ) {}

  //Funcion
  public crearEmpleado() {
    //console.log(this.idCarpeta);
    let employee = new Object({
      correoElectronico: this.correo,
      password: this.password,
      rol: this.rol,
    });

    this.usuarioService.crearEmpleado(employee).subscribe((respuesta: any) => {
      //Evaluamos si el objeto respuesta es null
      if (respuesta === null) {
        alert('No se creo el Empleado');
        return;
      }
      //Evaluamos si el atributo respuesta del objeto no es nulo
      if (respuesta.respuesta === false) {
        alert('No se creo el Empleado');
        return;
      }
      alert(respuesta.motivo);
      this.navegarService.navegar('home');
    });
  }
}
