import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-file-card',
  templateUrl: './trash-file-card.component.html',
  styleUrls: ['./trash-file-card.component.css'],
})
export class TrashFileCardComponent implements OnInit {
  @Input() infoCarta: any;
  public rutaImg = '';
  ngOnInit(): void {
    if (this.infoCarta.extension === '.txt') {
      this.rutaImg = 'txt-file.png';
    } else {
      this.rutaImg = 'html.png';
    }
  }

  public verArchivo() {}
}
