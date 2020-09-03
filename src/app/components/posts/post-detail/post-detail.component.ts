import { Component, OnInit, Input } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import { PostInterface, EmbeddedWpTerm } from '@domain/post/post.interface';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  @Input() id: string;
  post: PostInterface;
  last3post: PostInterface[];
  content: any;
  constructor(
    private route: ActivatedRoute,
    private dataWpService: DataWpService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getPost(params.id);
    });
  }

  getPost(id: string): void {
    this.dataWpService.getPostById(id).subscribe((res) => {
      this.post = res;
    });

    this.dataWpService.getPostsPerPage('3', '1').subscribe((res) => {
      this.last3post = res;
    });
  }
}
