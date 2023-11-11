import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileServiceService } from 'src/app/services/file-service.service';
import { NavegarService } from 'src/app/services/navegar.service';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.css'],
})
export class FileCardComponent implements OnInit {
  @Input() infoCarta: any;
  @Output() refreshEvent = new EventEmitter<any>();

  public rutaImg = '';

  ngOnInit(): void {
    if (this.infoCarta.extension === '.txt') {
      this.rutaImg = 'txt-file.png';
    } else {
      this.rutaImg = 'html.png';
    }
  }

  //Constructor
  constructor(
    private fileService: FileServiceService,
    private navegarService: NavegarService
  ) {}

  //Funciones
  public irAVerArchivo() {
    this.navegarService.navegar(`verArchivo/${this.infoCarta._id}/noTrash`);
  }

  public copiarArchivo() {
    this.fileService
      .copiarArchivo(this.infoCarta)
      .subscribe((respuesta: any) => {
        if (respuesta.respuesta) {
        } else {
          alert(respuesta.motivo);
        }
      });
    this.refreshEvent.emit();
  }
}
