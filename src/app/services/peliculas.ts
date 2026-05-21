import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../modals/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/'; 

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula[]> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '32b8af0ec7mshb2e8e5d3275f788p1659e4jsnc13fa1bb61f1', 
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
      'Content-Type': 'application/json'
    });
    
    return this.http.get<Pelicula[]>(this.apiUrl, { headers });
  }
}
