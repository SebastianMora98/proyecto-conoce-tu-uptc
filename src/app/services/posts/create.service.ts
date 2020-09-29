import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { PostInterface } from '@interfaces/wp_interfaces/post/post.interface';
import {
  CreatePost,
  CreatePostResponse,
} from '@interfaces/wp_interfaces/post/post.interface';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Title } from '@angular/platform-browser';

/**
 * Servicio crear post, este servicio crea un post a partir de los datos suministrados.
 */
@Injectable({
  providedIn: 'root',
})
export class CreateService {
  /**
   * Constructor del servicio de creacion de noticias
   * @param {HttpClient} http  Libreria que permite realizar peticiones al servidor
   */
  constructor(private http: HttpClient) {}

  /**
   *  @param {number} id  Se refiere al id de la imagen del post
   *  @param {CreatePost} data  Se refiere a el objeto que almacena el contendio de la noticia a crear.
   *  @returns Regresa un CreatePostResponse que contiene la informacion de la noticia creada
   */
  createPost(
    id: number,
    data: CreatePost
  ): Observable<CreatePostResponse | void> {
    const { title, status, content, date, extracto, categorias } = data;

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
        //'Content-Disposition': 'attachment; filename="' + file.name + '"',
      }),
    };
    const body = {
      title,
      content,
      date,
      status,
      excerpt: extracto,
      featured_media: id.toString(),
      categories: categorias,
    };
    return this.http
      .post<CreatePostResponse>(
        `${environment.API_URL}/admin/wp-json/wp/v2/posts`,
        this.removeEmptyStringsFrom(body),
        httpOptions
      )
      .pipe(
        map((res: CreatePostResponse) => {
          console.log(res);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }

  /**
   *  remueve strings vacios de un objeto
   */
  removeEmptyStringsFrom(obj) {
    const clone = { ...obj };
    Object.entries(clone).forEach(
      ([key, val]) => val === '' && delete clone[key]
    );
    console.log(clone);
    return clone;
  }

  /**
   *  @param {CreatePost} data  se refiere a el objeto que almacena el contendio de la noticia a crear.
   *  @returns regresa la informacion de la imagen creada
   */
  subirImagen(data: CreatePost) {
    const { title, file } = data;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Disposition': 'attachment; filename="' + file.name + '"',
      }),
    };

    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('file', file, file.name);
    formdata.append('status', 'publish');

    console.log(formdata);
    return this.http
      .post(
        `${environment.API_URL}/admin/wp-json/wp/v2/media`,
        formdata,
        httpOptions
      )
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }

  /**
   *   Manejador de errores
   *  @param {HttpErrorResponse} error
   *  @returns regresa un observable del error
   */
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'An error ocurred retrieving data';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
