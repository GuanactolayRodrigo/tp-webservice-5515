import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeezerService } from '../../services/deezer';

@Component({
  selector: 'app-buscador-musica',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador-musica.html',
  styleUrl: './buscador-musica.css'
})
export class BuscadorMusicaComponent {
  
  buscado: string = '';
  resultados: any[] = [];
  
  urlAudioActual: string | null = null; 

  constructor(private deezerService: DeezerService, private cdr: ChangeDetectorRef) {}

  buscar() {
    if (!this.buscado.trim()) return;

    this.deezerService.buscarTema(this.buscado).subscribe({
      next: (respuesta: any) => {
        this.resultados = respuesta.data; 
        this.cdr.detectChanges();
      },
      error: (err) => console.log('Error en la busqueda:', err)
    });
  }

  reproducirCancion(previewUrl: string) {
    this.urlAudioActual = previewUrl;
  }
}