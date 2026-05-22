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
        if (data && data.currencies) {
          this.listaMonedas = Object.keys(data.currencies).map(clave => {
            return {
              code: clave,
              name: data.currencies[clave]
            };
          });
          this.cdr.detectChanges();
        } else {
          console.warn('solicitud de peticiones superada o respuesta inesperada al cargar monedas:', data);
        }
      },
      error: (err) => {
        console.error('Error HTTP al intentar conectar con la API:', err);
      }
    });
  }

  ejecutarConversion() {
    if (this.montoOrigen <= 0) return;

    this.cargando = true;
    this.conversorService.convertir(this.monedaOrigen, this.monedaDestino, this.montoOrigen).subscribe({
      next: (data) => {
        console.log('Respuesta de la conversiom:', data);
        if (data && data.result) {
          this.montoDestino = data.result;
        }
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error en la conversión HTTP:', err);
        this.cargando = false;
      }
    });
  }
}