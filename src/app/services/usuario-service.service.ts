import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  private url: string = 'http://localhost:3000/usuarios'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)
  constructor(private http: HttpClient) {}

  public login(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/login`, usuario);
  }

  public crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/crearUsuario`, usuario);
  }

  public editarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/editarUsuario`, usuario);
  }
}
