import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
/**
 * Componente raiz de la aplicacion
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ConoceTuUPTC';
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
