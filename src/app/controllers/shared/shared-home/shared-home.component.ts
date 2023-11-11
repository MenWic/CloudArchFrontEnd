import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-shared-home',
  templateUrl: './shared-home.component.html',
  styleUrls: ['./shared-home.component.css'],
})
export class SharedHomeComponent implements OnInit {
  public archivos: any[] = [];

  constructor(
    private sharedServide: SharedService,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this.mostrarCompartidos();
  }

  public mostrarCompartidos() {
    let usuario = this.cookies.get('usuario');
    this.sharedServide
      .verCompartidosDeUsuario(usuario)
      .subscribe((res: any) => {
        this.archivos = res;
      });
  }
}
