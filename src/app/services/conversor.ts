import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  private apiUrl = 'https://api.apilayer.com/currency_data';
  private apiKey = 'XQO9jpc0uXd2aBWUQTCed9Gchk3YkHNf'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'apikey': this.apiKey
    });
  }

  getMonedas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`, { headers: this.getHeaders() });
  }

  convertir(from: string, to: string, amount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/convert?to=${to}&from=${from}&amount=${amount}`, { headers: this.getHeaders() });
  }
}
