import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url: string = 'http://localhost:3000/compartidos'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)
  constructor(private http: HttpClient) {}

  //Metodos para enviar a Backend

  public eliminarDeCompartidos(file: any): Observable<any> {
    return this.http.post(`${this.url}/eliminarDeCompartidos`, file);
  }


  public compartirArchivo(file: any): Observable<any> {
    return this.http.post(`${this.url}/compartirArchivo`, file);
  }

  public traerCompartidoPorId(id:any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams()
      .set('id', id)

    return this.http.get(`${this.url}/traerCompartidoPorId`, {
      params: params,
    });
  }

  public verCompartidosDeUsuario(usuario: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams().set('usuario', usuario);
    return this.http.get(`${this.url}/verCompartidosDeUsuario`, {
      params: params,
    });
  }
}
