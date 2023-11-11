import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavegarService } from 'src/app/services/navegar.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-shared-file-card',
  templateUrl: './shared-file-card.component.html',
  styleUrls: ['./shared-file-card.component.css'],
})
export class SharedFileCardComponent implements OnInit {
  @Input() infoCarta: any;
  @Output() refreshEvent = new EventEmitter<any>();
  public rutaImg: any;

  ngOnInit(): void {
    if (this.infoCarta.extension === '.txt') {
      this.rutaImg = 'txt-file.png';
    } else {
      this.rutaImg = 'html.png';
    }
  }

  //Constructor
  constructor(
    private sharedService: SharedService,
    private navegarService: NavegarService
  ) {}

  public eliminarArchivo() {
    this.sharedService
      .eliminarDeCompartidos(this.infoCarta)
      .subscribe((respuesta: any) => {
        if (respuesta.respuesta) {
        } else {
          alert(respuesta.motivo);
        }
        this.refreshEvent.emit();
      });
    this.refreshEvent.emit();
  }

  //Funciones
  public irAVerArchivo() {
    this.navegarService.navegar(`verArchivo/${this.infoCarta._id}/compartido`);
  }
}
