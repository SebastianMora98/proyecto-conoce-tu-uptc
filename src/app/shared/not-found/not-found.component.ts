import { Component, OnInit } from '@angular/core';
/**
 * Componente not found, es el componente que se mostrará en caso de que la ruta no exista.
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
