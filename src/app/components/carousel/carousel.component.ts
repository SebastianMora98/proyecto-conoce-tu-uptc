import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor() {}

  ngOnInit() {
    this.images = [
      {
        previewImageSrc:
          'https://pbs.twimg.com/media/CZRQJFGWYAECxFY?format=jpg&name=large',
      },
      {
        previewImageSrc:
          'http://www.uptc.edu.co/export/sites/default/universidad/modules/imag/2018/Sede_Centralx_UPTC__Ente_universitario_autoxnomox_de_caraxcter_nacionalx_estatal_y_puxblico._Fundada_en_1953_durante_la_presidencia_de_Gustavo_Rojas_Pinilla._Una_historia_de_presencia_institucional_y_tradici.JPG',
      },
      {
        previewImageSrc:
          'https://pbs.twimg.com/media/DtraWyxWoAIMjIu?format=jpg&name=4096x4096',
      },
    ];
  }
}
