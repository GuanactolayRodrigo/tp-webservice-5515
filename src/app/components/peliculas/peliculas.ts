import { Component, OnInit } from '@angular/core';
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

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.peliculasService.getPeliculas().subscribe({
      next: (data) => {
        this.peliculas = data; 
      },
      error: (err) => {
        console.error('Ocurrió un error al consumir la API:', err);
      }
    });
  }
  //detalles
  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
}
