import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from '../../domain/post/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  urlApi = 'http://localhost/ctu-primeNG/admin/wp-json/wp/v2/posts?_embed';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi, {
      params: {
        per_page: '9',
      },
    });
  }
}
