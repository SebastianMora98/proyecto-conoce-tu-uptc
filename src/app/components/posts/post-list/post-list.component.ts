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
  constructor(public dataWp: DataWpService) {}

  // Observable de posts
  posts$: Observable<PostInterface[]>;
  numPosts$: number;

  per_page: number = 6;
  page: number = 1;

  ngOnInit(): void {
    this.getPostsPerPage();
    this.dataWp.getPosts().subscribe((res) => {
      this.numPosts$ = res.length;
    });
  }
  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.per_page = event.rows;
    this.posts$ = this.dataWp.getPostsPerPage(
      this.per_page.toString(),
      (+event.page + 1).toString()
    );
    console.log('rows', event.rows);
  }

  getPostsPerPage() {
    this.posts$ = this.dataWp.getPostsPerPage(
      this.per_page.toString(),
      this.page.toString()
    );
  }
}
