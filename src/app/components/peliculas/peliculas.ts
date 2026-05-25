import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PeliculasService } from '../../services/peliculas';
import { Pelicula } from '../../modals/pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule],
  templateUrl: './peliculas.html',
  styleUrls: ['./peliculas.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  peliculaSeleccionada: Pelicula | null = null; 

  constructor(private peliculasService: PeliculasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.peliculasService.getPeliculas().subscribe({
      next: (data) => {
        this.peliculas = data; 
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al consumir la API:', err);
      }
    });
  }
  //detalles
  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
    this.cdr.detectChanges();
  }
}
