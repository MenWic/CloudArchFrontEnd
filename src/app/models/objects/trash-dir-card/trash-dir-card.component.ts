import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TrashDirService } from 'src/app/services/trash-dir.service';

@Component({
  selector: 'app-trash-dir-card',
  templateUrl: './trash-dir-card.component.html',
  styleUrls: ['./trash-dir-card.component.css']
})
export class TrashDirCardComponent implements OnInit {

  @Input() infoCarta: any;
  @Output() verCarpetaEvent = new EventEmitter<Object>();

  constructor(private router: Router, private dirService: TrashDirService){

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
}
