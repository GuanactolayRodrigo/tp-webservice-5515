import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(private http: HttpClient) { }
  convert(text: string): Observable<Blob> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '32b8af0ec7mshb2e8e5d3275f788p1659e4jsnc13fa1bb61f1',
        'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'blob'
    }
    let body = {
      "model": "tts-1",
      "input": text,
      "instructions": "Speak in a lively and optimistic tone.",
      "voice": "alloy"
    }

    return this.http.post('https://open-ai-text-to-speech1.p.rapidapi.com/', body, httpOptions);
  }

}
