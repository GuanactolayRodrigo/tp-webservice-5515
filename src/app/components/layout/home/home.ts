import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  
  contador: number = 0;
  
  limiteContador: number = +1500; 

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.animarContador();
  }

  animarContador() {
    let intervalo = setInterval(() => {
      this.contador += 25; 
      this.cdr.detectChanges();
      if (this.contador >= this.limiteContador) {
        this.contador = this.limiteContador;
        clearInterval(intervalo);
      }
    }, 30);
  }

}