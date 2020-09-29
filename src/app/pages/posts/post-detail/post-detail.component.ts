import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import { PostInterface } from '@interfaces/wp_interfaces/post/post.interface';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Componente detalles de noticia, muestra la noticia completa a partir del id de la noticia.
 */
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private subcription: Subscription = new Subscription();

  post: PostInterface;
  last3post: PostInterface[];
  content: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataWpService: DataWpService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.subcription.add(
      this.route.params.subscribe((params) => {
        this.getPost(params.id);
      })
    );
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  getPost(id: string): void {
    this.subcription.add(
      this.dataWpService.getPostById(id).subscribe(
        (res) => {
          this.post = res;
        },
        (error) => {
          this.router.navigate(['/404']);
        }
      )
    );

    this.subcription.add(
      this.dataWpService.getPostsPerPage('3', '1').subscribe((res) => {
        this.last3post = res;
      })
    );
  }
}
