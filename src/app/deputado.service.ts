import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deputado } from './deputado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private deputadosURL = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) { }

  listar(): Observable<Deputado[]> {
    return this.http.get<Deputado[]>(this.deputadosURL);
  }
}
