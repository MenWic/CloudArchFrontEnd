import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FileServiceService } from 'src/app/services/file-service.service';
import { NavegarService } from 'src/app/services/navegar.service';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.css'],
})
export class FileCardComponent {
  @Input() infoCarta: any;
  @Output() refreshEvent = new EventEmitter<any>();

  //Constructor
  constructor(
    private fileService: FileServiceService,
    private navegarService: NavegarService 
  ) {}

  //Funciones
  public irAVerArchivo() {
    this.navegarService.navegar(`verArchivo/${this.infoCarta._id}`);
  }
}
