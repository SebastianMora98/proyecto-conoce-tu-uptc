import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
/**
 * Componente home, este componente se muestra en la ruta principal de la aplicacion.
 * Muestra la informacion institucional
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
