import { Component, OnInit } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import { PostInterface } from '@domain/post/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(private dataWp: DataWpService) {}

  // Observable de posts
  posts$: Observable<PostInterface[]>;

  ngOnInit(): void {
    this.posts$ = this.dataWp.getPosts();
  }
}
