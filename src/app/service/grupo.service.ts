import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private urlApi = 'http://localhost:3000/grupos/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.urlApi);
  }

}
