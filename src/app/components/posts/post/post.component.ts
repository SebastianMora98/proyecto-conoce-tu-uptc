import { Component, OnInit, Input } from '@angular/core';
/**
 * Componente Post, muestra una noticia en forma de tarjeta
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;
  constructor() {}

  ngOnInit(): void {}
}
