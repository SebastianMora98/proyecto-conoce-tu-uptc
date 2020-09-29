import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from '@interfaces/wp_interfaces/post/post.interface';
import { Observable } from 'rxjs';
/**
 * Este servicio devuelve la informacion de los posts (noticias) y las categorias.
 */
@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  /**
   *  URL API, devuelve los posts (noticias), el parametro ?_embed agrega informacion adicional a la peticion permitiendo obtener las urls de las imagenes del post
   */
  urlApi = 'http://localhost/ConoceTuUPTC/admin/wp-json/wp/v2/posts?_embed';
  /**
   * Constructor del servicio de creacion de noticias
   * @param {HttpClient} http  Libreria que permite realizar peticiones al servidor
   */
  constructor(private http: HttpClient) {}
  /**
   *  @returns Regresa una lista de los posts (noticias)
   */
  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi);
  }
  /**
   *  @param {number} id  Se refiere al id del post que se quiere buscar
   *  @returns Regresa el post segun el id
   */
  getPostById(id: string): Observable<PostInterface> {
    return this.http.get<any>(
      `http://localhost/ConoceTuUPTC/admin/wp-json/wp/v2/posts/${id}/?_embed`
    );
  }

  /**
   *  @returns Regresa los ultimos posts
   */
  getLastPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi);
  }
  /**
   * @param {string} per_page  Numero de posts(noticias) por pagina
   * @param {string} page  Numero de paginas
   *  @returns Regresea una lista de posts(noticias)
   */
  getPostsPerPage(per_page: string, page: string): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.urlApi, {
      params: {
        per_page: per_page,
        page: page,
      },
    });
  }
  /**
   *  @returns Regresea una lista de las categorias
   */
  getCategories(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(
      'http://localhost/ConoceTuUPTC/admin/wp-json/wp/v2/categories?orderby=id&per_page=100'
    );
  }
}
