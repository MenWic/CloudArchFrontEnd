import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrashFileService {
  private url: string = 'http://localhost:3000/papelera'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)
  constructor(private http: HttpClient) {}

  public mostrarArchivosDeCarpeta(file: any, usuario: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams()
      .set('_id', file)
      .set('usuario_propietario', usuario);

    return this.http.get(`${this.url}/mostarArchivosDeCarpeta`, {
      params: params,
    });
  }

  public traerArchivoPorId(file: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams().set('id', file);
    return this.http.get(`${this.url}/traerArchivoPorId`, {
      params: params,
    });
  }
}
