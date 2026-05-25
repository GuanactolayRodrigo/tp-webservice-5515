import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConversorService } from '../../services/conversor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.html',
  styleUrls: ['./conversor.css']
})
export class ConversorComponent implements OnInit {
  montoOrigen: number = 1;
  montoDestino: number = 0;
  monedaOrigen: string = 'USD'; 
  monedaDestino: string = 'ARS'; 
  
  listaMonedas: any[] = []; 
  cargando: boolean = false;

  constructor(
    private conversorService: ConversorService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.cargarListaMonedas();
  }

  cargarListaMonedas() {
    this.conversorService.getMonedas().subscribe({
      next: (data) => {
        
          this.listaMonedas = Object.keys(data.currencies).map(clave => {
            return {
              code: clave,
              name: data.currencies[clave]
            };
          });
          this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al intentar conectar con la API:', err);
      }
    });
  }

  ejecutarConversion() {
    if (this.montoOrigen <= 0) return;

    this.cargando = true;
    this.conversorService.convertir(this.monedaOrigen, this.monedaDestino, this.montoOrigen).subscribe({
      next: (data) => {
        if (data && data.result) {
          this.montoDestino = Number(data.result.toFixed(2));
        }
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error en la conversion', err);
        this.cargando = false;
      }
    });
  }
}