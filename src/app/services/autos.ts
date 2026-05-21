import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca, Modelo } from '../modals/auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private apiUrl = 'https://car-specs.p.rapidapi.com/v2/cars'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': '32b8af0ec7mshb2e8e5d3275f788p1659e4jsnc13fa1bb61f1',
      'x-rapidapi-host': 'car-specs.p.rapidapi.com',
      'Content-Type': 'application/json'
    });
  }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.apiUrl}/makes`, { headers: this.getHeaders() });
  }

  getModelosPorMarca(marcaId: string): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.apiUrl}/makes/${marcaId}/models`, { headers: this.getHeaders() });
  }
}
