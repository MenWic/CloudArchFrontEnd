import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dir-card',
  templateUrl: './dir-card.component.html',
  styleUrls: ['./dir-card.component.css'],
}) 
export class DirCardComponent implements OnInit {

  @Input() infoCarta: any;
  @Output() verCarpetaEvent = new EventEmitter<Object>();

  constructor(private router: Router){

  }

  ngOnInit(): void {
   
  }

  public irAVerCarpeta(){
    let datos = new Object({
      id_carpeta: this.infoCarta._id,
      id_padre: this.infoCarta.carpeta_raiz_id
    });
    this.verCarpetaEvent.emit(datos);
  }


  public copiarCarpeta(){
    window.location.href = `/adminMenu/home/${this.infoCarta._id}`;
  }

  public eliminarCarpeta(){
    window.location.href = `/adminMenu/home/${this.infoCarta._id}`;
  }

  public moverCarpeta(){
    window.location.href = `/adminMenu/home/${this.infoCarta._id}`;
  }
}
