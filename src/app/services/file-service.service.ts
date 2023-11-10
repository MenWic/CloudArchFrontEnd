import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileServiceService {
  private url: string = 'http://localhost:3000/archivos'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)
  constructor(private http: HttpClient) {}

  //Metodos para enviar a Backend
  public crearArchivo(file: any): Observable<any> {
    return this.http.post(`${this.url}/crearArchivo`, file);
  }

  public editarArchivo(file: any): Observable<any> {
    return this.http.put(`${this.url}/editarArchivo`, file);
  }

  public copiarArchivo(file: any): Observable<any> {
    return this.http.post(`${this.url}/copiarArchivo`, file);
  }

  public moverArchivo(file: any): Observable<any> {
    return this.http.post(`${this.url}/moverArchivo`, file);
  }

  public eliminarArchivo(file: any): Observable<any> {
    return this.http.delete(`${this.url}/copiarArchivo`, file);
  }

  public mostrarArchivosDeCarpeta(file: any, usuario: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams()
      .set('_id', file)
      .set('usuario_propietario', usuario);

    return this.http.get(`${this.url}/mostarArchivosDeCarpeta`, {
      params: params,
    });
  }
}
