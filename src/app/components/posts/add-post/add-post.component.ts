import { Component, OnInit } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import bsCustomFileInput from 'bs-custom-file-input';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ICategories } from '@interfaces/wp_interfaces/categories/categories';
import { IMedia } from '@interfaces/wp_interfaces/media/IMedia';

import { CreatePost } from '@interfaces/wp_interfaces/post/post.interface';

import { CreateService } from '@services/posts/create.service';
import { NgForm } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';

interface IDocumento {
  num: number;
  name: string;
}
interface ICategoria {
  name: string;
  id: number;
}
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  text1: string =
    '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  contenido: string;
  fecha: Date;
  autor: string;
  titulo: string;
  categorias: string[];

  extracto: string;
  fileToUpload: File = null;

  selectedCategories: ICategoria[] = [];
  temp: any[] = [];
  categories: any[] = [];

  es: any;

  uploadedFiles: any[] = [];

  visibilityOption: number;
  visibility: Array<IDocumento> = [
    { num: 0, name: 'Visible' },
    { num: 1, name: 'Privado' },
  ];
  toNumber() {
    this.visibilityOption = +this.visibilityOption;
    console.log(this.visibilityOption);
  }

  constructor(
    private dataWpService: DataWpService,
    private createService: CreateService,
    private http: HttpClient
  ) {
    this.setupEs();
  }

  ngOnInit(): void {
    bsCustomFileInput.init();

    this.dataWpService.getCategories().subscribe((categories: []) => {
      categories.map((c: ICategories) => {
        const { name, id } = c;
        console.log(c.name);
        this.temp.push({ name, id });
      });
      this.categories = [...this.temp];
    });

    //this.createService.subirImagen('prro','publish',this.handleFileInput)
  }

  onCreatePost(form: NgForm) {
    let isValid: boolean = true;
    const title: string = form.form.value.titulo;
    const content: string = this.contenido;
    const status = this.visibilityOption == 0 ? 'publish' : 'private';
    if (!(status == 'publish' || status == 'private')) {
      isValid = false;
    }
    const date: Date = this.fecha;
    let categorias: number[] = [];
    this.selectedCategories.map((c: ICategoria) => {
      categorias.push(c.id);
    });
    const file: File = this.fileToUpload;

    const extracto: string = form.form.value.extracto;

    const post: CreatePost = {
      title,
      content,
      status,
      date,
      categorias,
      file,
      extracto,
    };
    this.createService.subirImagen(post).subscribe((res: IMedia) => {
      this.createService.createPost(res.id, post).subscribe((res) => {
        console.log(res);
      }),
        (err) => {
          console.log(err.error);
        };
    }),
      (err) => {
        console.log(err.error);
      };
    /*this.createService.subirImagen(fileToUpload).subscribe((res) => {
      console.log(res);
    }),
      (err) => {
        console.log(err.error.error);
      };
*/
    /*this.createService.createPost(post).subscribe((res) => {
      console.log(res);
    }),
      (err) => {
        console.log(err.error.error);
      };*/
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    /*
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Disposition': 'attachment; filename="' + file.name + '"',
      }),
    };

    var formdata = new FormData();
    formdata.append('title', 'imagenprueba');
    formdata.append('file', this.fileToUpload, thos.);
    formdata.append('status', 'publish');

    return this.http
      .post(
        `${environment.API_URL}/admin/wp-json/wp/v2/media`,
        {
          title: 'hola',
          status: 'publish',
          file: file,
        },
        httpOptions
      )
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );*/
  }

  setupEs() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
      ],
      today: 'Hoy',
      clear: 'Borrar',
    };
  }
}
