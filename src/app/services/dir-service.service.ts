import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirServiceService {
  private url: string = 'http://localhost:3000/carpetas'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)
  constructor(private http: HttpClient) {}

  public crearCarpeta(dir: any): Observable<any> {
    return this.http.post(`${this.url}/crearCarpeta`, dir);
  }

  public editarCrpeta(dir: any): Observable<any> {
    return this.http.post(`${this.url}/editarCarpeta`, dir);
  }

  /**
   * Envia un get al back para traer las carpetas de una carpeta por medio de _id y usuario_propietario
   * @param idCarpeta se envia como param _id y representa el id de la carpeta a la cual queremos acceder
   * @param usuario se envia como param usuario_propietario y representa el usuario propietario de la carpeta a la cual queremos acceder
   * @returns 
   */
  public mostarCarpetasDeCarpeta(
    idCarpeta: any, 
    usuario: any
  ): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams()
      .set('_id', idCarpeta)
      .set('usuario_propietario', usuario);

    return this.http.get(`${this.url}/mostarCarpetasDeCarpeta`, {
      params: params,
    });
  }
}
