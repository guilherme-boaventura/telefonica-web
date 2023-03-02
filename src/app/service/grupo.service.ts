import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private urlApi = 'http://localhost:3000/grupos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.urlApi+"?_sort=ordem");
  }

  moverGrupo(grupo : Grupo): Observable<Grupo> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<Grupo>(this.urlApi+"/"+grupo.id, grupo, {headers : headers});
  }
}
