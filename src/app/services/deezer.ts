import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  // Reemplaza con tu nueva API Key
  private apiKey = '32b8af0ec7mshb2e8e5d3275f788p1659e4jsnc13fa1bb61f1'; 
  private apiHost = 'deezerdevs-deezer.p.rapidapi.com';
  private baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/search';

  constructor(private http: HttpClient) {}

  buscarTema(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost
    });

    const url = `${this.baseUrl}?q=${encodeURIComponent(query)}`;

    return this.http.get(url, { headers });
  }
}
