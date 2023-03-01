import { Injectable } from '@angular/core';
import { Plano } from '../Plano';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {
  

  private urlApi = 'http://localhost:3000/planos';

  constructor(private http: HttpClient) { }

  moverPlano(plano : Plano): Observable<Plano> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<Plano>(this.urlApi+"/"+plano.id, plano, {headers : headers});
  }

  getById(id: number): Observable<Plano> {
    return this.http.get<Plano>(this.urlApi+"/"+id);
  }

  getAll(): Observable<Plano[]> {
    return this.http.get<Plano[]>(this.urlApi);
  }

  getByGrupo(id: number): Observable<Array<Plano>> {
    return this.http.get<Array<Plano>>(this.urlApi+"?grupoId="+id);
  }

}
