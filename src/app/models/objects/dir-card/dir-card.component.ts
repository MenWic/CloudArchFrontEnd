import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DirServiceService } from 'src/app/services/dir-service.service';

@Component({
  selector: 'app-dir-card',
  templateUrl: './dir-card.component.html',
  styleUrls: ['./dir-card.component.css'],
}) 
export class DirCardComponent implements OnInit {

  @Input() infoCarta: any;
  @Output() verCarpetaEvent = new EventEmitter<Object>();
  @Output() refreshEvent = new EventEmitter<any>();

  constructor(private router: Router, private dirService: DirServiceService){

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
    this.dirService.copiarCarpeta(this.infoCarta).subscribe(
      (respuesta:any) => {
        if(respuesta.respuesta){
        }else{
          alert(respuesta.motivo)
        }
      }
    );
    this.refreshEvent.emit();
  }

  public eliminarCarpeta(){
    this.dirService.eliminarCarpeta(this.infoCarta).subscribe(
      (respuesta:any) => {
        this.refreshEvent.emit();
      }
    );
    this.refreshEvent.emit();
  }

  public moverCarpeta(){
    this.refreshEvent.emit();
  }
}
