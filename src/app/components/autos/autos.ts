import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos';
import { Marca, Modelo } from '../../modals/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autos',
  imports: [CommonModule],
  templateUrl: './autos.html',
  styleUrls: ['./autos.css']
})
export class AutosComponent implements OnInit {
  marcas: Marca[] = [];
  
  marcaSeleccionada: string = '';
  modelosSeleccionados: Modelo[] = [];
  cargandoModelos: boolean = false;

  // cache
  private cacheModelos: Map<string, Modelo[]> = new Map();

  constructor(private autosService: AutosService) {}

  ngOnInit(): void {
    this.cargarMarcas();
  }

  cargarMarcas() {
    this.autosService.getMarcas().subscribe({
      next: (data) => {
        this.marcas = data;
      },
      error: (err) => console.error('Error al cargar marcas:', err)
    });
  }

  abrirModalModelos(marcaId: string, marcaNombre: string) {
    this.marcaSeleccionada = marcaNombre;
    this.modelosSeleccionados = []; 

    if (this.cacheModelos.has(marcaId)) {
      console.log(`Cargando modelos de ID ${marcaId} desde el CACHÉ local`);
      this.modelosSeleccionados = this.cacheModelos.get(marcaId)!;
    } else {
      console.log(`Llamando a la API para modelos de ID ${marcaId}`);
      this.cargandoModelos = true;
      
      this.autosService.getModelosPorMarca(marcaId).subscribe({
        next: (data) => {
          this.modelosSeleccionados = data;
          this.cacheModelos.set(marcaId, data);
          this.cargandoModelos = false;
        },
        error: (err) => {
          console.error('Error al cargar modelos:', err);
          this.cargandoModelos = false;
        }
      });
    }
  }
}
