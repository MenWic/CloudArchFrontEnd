import { HttpClient } from '@angular/common/http';
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


}
