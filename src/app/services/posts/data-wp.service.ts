import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from '@interfaces/wp_interfaces/post/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  urlApi = 'http://localhost/ConoceTuUPTC/admin/wp-json/wp/v2/posts?_embed';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi);
  }

  getPostById(id: string): Observable<PostInterface> {
    return this.http.get<any>(
      `http://localhost/ConoceTuUPTC/admin/wp-json/wp/v2/posts/${id}/?_embed`
    );
  }
  /*getPostsPerPage(page: string): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi, {
      params: {
        per_page: '3',
        page: page,
      },
    });
  }*/
  getPostsPerPage(per_page: string, page: string): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi, {
      params: {
        per_page: per_page,
        page: page,
      },
    });
  }

  getCategories(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(
      'http://localhost/ConoceTuUPTC/admin/wp-json/wp/v2/categories?orderby=id'
    );
  }
}
