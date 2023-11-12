import { Component } from '@angular/core';
import { NavegarService } from 'src/app/services/navegar.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  
  /*
  //Constructor
  constructor(
    private empleadoService: EmpleadoServiceService,
    private navegarService: NavegarService,

  ) {}

  public crearEmpleado() {
    console.log(this.idCarpeta);

    let employee = new Object({
      correoElectronico: this.correo; 
      password: this.password,
      rol: this.rol,
    });

    this.empleadoService.crearEmpleado(employee).subscribe((respuesta: any) => {

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
*/
}
