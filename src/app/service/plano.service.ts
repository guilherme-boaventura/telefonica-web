import { Injectable } from '@angular/core';
import { Plano } from '../Plano';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  private urlApi = 'http://localhost:3000/planos/';

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Plano> {
    return this.http.get<Plano>(this.urlApi+id);
  }

  getAll(): Observable<Plano[]> {
    return this.http.get<Plano[]>(this.urlApi);
  }


}
