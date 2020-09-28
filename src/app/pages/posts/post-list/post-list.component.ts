import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import { PostInterface } from '@interfaces/wp_interfaces/post/post.interface';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  private subcription: Subscription = new Subscription();

  constructor(public dataWp: DataWpService) {}

  // Observable de posts
  posts: PostInterface[];
  numPosts: number;

  per_page: number = 6;
  page: number = 1;

  ngOnInit(): void {
    this.getPostsPerPage();
    this.getPostLength();
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.per_page = event.rows;
    this.subcription.add(
      this.dataWp
        .getPostsPerPage(this.per_page.toString(), (+event.page + 1).toString())
        .subscribe((posts) => {
          this.posts = posts;
        })
    );

    console.log('rows', event.rows);
  }

  getPostLength() {
    this.subcription.add(
      this.dataWp.getPosts().subscribe((res) => {
        this.numPosts = res.length;
      })
    );
  }

  getPostsPerPage() {
    this.subcription.add(
      this.dataWp
        .getPostsPerPage(this.per_page.toString(), this.page.toString())
        .subscribe((posts) => {
          this.posts = posts;
        })
    );
  }
}
