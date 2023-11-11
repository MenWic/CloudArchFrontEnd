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

  /**
   * Lanza un post al back para copiar la carpeta indicada
   * @param dir
   * @returns
   */
  public copiarCarpeta(dir: any): Observable<any> {
    return this.http.post(`${this.url}/copiarCarpeta`, dir);
  }

  public moverCarpeta(dir: any): Observable<any> {
    return this.http.post(`${this.url}/moverCarpeta`, dir);
  }

  /**
   * Lanza un post al back para copiar la carpeta indicada
   * @param dir
   * @returns
   */
  public eliminarCarpeta(dir: any): Observable<any> {
    return this.http.post(`${this.url}/eliminarCarpeta`, dir);
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

  /**
   * Envia un get al back para traer las carpetas de una carpeta por medio de _id y usuario_propietario
   * @param idCarpeta se envia como param _id y representa el id de la carpeta a la cual queremos acceder
   * @param usuario se envia como param usuario_propietario y representa el usuario propietario de la carpeta a la cual queremos acceder
   * @returns
   */
  public traerCarpetaPorId(idCarpeta: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams().set('id', idCarpeta);

    return this.http.get(`${this.url}/traerCarpetaPorId`, {
      params: params,
    });
  }

  public mostrarCarpetasDeUsuario(usuario: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams().set('usuario_propietario', usuario);

    return this.http.get(`${this.url}/mostrarCarpetasDeUsuario`, {
      params: params,
    });
  }

  public mostrarPathDeCarpeta(idCarpeta: any): Observable<any> {
    // Crear un objeto HttpParams para los parámetros
    let params = new HttpParams().set('id', idCarpeta);

    return this.http.get(`${this.url}/mostrarPathDeCarpeta`, {
      params: params,
    });
  }
}
