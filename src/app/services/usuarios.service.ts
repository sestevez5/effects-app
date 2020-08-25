import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient) { }

  obtenerUsuarios() {

    return this.http.get(`${ this.url }/users/?per_page=6`)
      .pipe(
        map( respuesta => respuesta['data'] ),
        ); // fin pipe

  } // fin obtener usuarios

  obtenerUsuarioById(id: string) {
    return this.http.get(` ${this.url}/users/${id}`)
      .pipe(
      map( respuesta => respuesta['data'] ),
      ); // fin pipe

  }

}
