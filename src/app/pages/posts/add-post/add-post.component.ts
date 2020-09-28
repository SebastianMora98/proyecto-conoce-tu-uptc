import { Component, OnInit } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import bsCustomFileInput from 'bs-custom-file-input';
import { ICategories } from '@interfaces/wp_interfaces/categories/categories';
import { IMedia } from '@interfaces/wp_interfaces/media/IMedia';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  CreatePost,
  CreatePostResponse,
} from '@interfaces/wp_interfaces/post/post.interface';

import { CreateService } from '@services/posts/create.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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
  providers: [MessageService],
})
export class AddPostComponent implements OnInit {
  createPostForm: FormGroup;

  text1: string =
    '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  content: string;
  date: Date;
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

  showMultiselectRequiredMessage: boolean = false;
  showSelectRequiredMessage: boolean = false;
  showImageRequiredMessage: boolean = false;

  titleCtrl: FormControl;
  excerptCtrl: FormControl;
  constructor(
    private dataWpService: DataWpService,
    private createService: CreateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {
    this.setupEs();
    this.titleCtrl = new FormControl(null, [Validators.required]);
    this.excerptCtrl = new FormControl(null, [Validators.required]);

    this.createPostForm = this.formBuilder.group({
      title: this.titleCtrl,
      excerpt: this.excerptCtrl,
    });
  }

  ngOnInit(): void {
    bsCustomFileInput.init();

    this.dataWpService.getCategories().subscribe((categories: []) => {
      categories.map((c: ICategories) => {
        const { name, id } = c;
        this.temp.push({ name, id });
      });
      this.categories = [...this.temp];
    });

    //this.createService.subirImagen('prro','publish',this.handleFileInput)
  }
  submitForm() {
    if (this.isValid()) {
      let isValid: boolean = true;
      const title: string = this.createPostForm.get('title').value;
      const content: string = this.content;
      const status = this.visibilityOption == 0 ? 'publish' : 'private';
      const date: Date = this.date;
      let categorias: number[] = [];
      this.selectedCategories.map((c: ICategoria) => {
        categorias.push(c.id);
      });
      const file: File = this.fileToUpload;
      console.log(file);
      const extracto: string = this.createPostForm.get('excerpt').value;
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
        this.createService
          .createPost(res.id, post)
          .subscribe((res: CreatePostResponse) => {
            this.router.navigate(['/noticias/detalle/' + res.id]);
            this.messageService.add({
              severity: 'success',
              summary: 'Noticia creada',
              detail: 'Se ha creado la noticia correctamente!',
            });
          }),
          (err) => {
            console.log(err.error);
          };
      }),
        (err) => {
          console.log(err.error);
        };
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'No se ha creado la noticia',
        detail: 'Existen campos sin rellenar o seleccionar',
      });
    }
  }

  isValid(): boolean {
    if (this.createPostForm.get('title').status != 'VALID') return false;
    if (this.content == '' || this.content == undefined) return false;
    if (this.visibilityOption == undefined) return false;
    if (this.date == undefined) return false;
    if (this.selectedCategories.length == 0) return false;
    if (this.fileToUpload == null) return false;

    return true;
  }
  onCreatePost() {}
  /*aonCreatePost(form: NgForm) {
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
  }*/

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.showImageRequiredMessage = false;
  }
  onClickImage() {
    if (this.fileToUpload == null) {
      this.showImageRequiredMessage = true;
    }
  }

  isValidField(field: string): boolean {
    return (
      (this.createPostForm.get(field).touched ||
        this.createPostForm.get(field).dirty) &&
      !this.createPostForm.get(field).valid
    );
  }

  getErrorMessage(field: string): string {
    let message = '';
    if (this.createPostForm.get(field).errors?.required) {
      message = 'Este campo no puede estar vacio';
    } else if (this.createPostForm.get(field).hasError('pattern')) {
      message = 'No es un email valido';
    } else if (this.createPostForm.get(field).hasError('minlength')) {
      const minLength = this.createPostForm.get(field).errors?.minlength
        .requiredLength;
      message = `La contraseña debe tener minimo ${minLength} caracteres`;
    }
    return message;
  }

  validateCategories() {
    this.showMultiselectRequiredMessage =
      this.selectedCategories.length == 0 ? true : false;
  }
  validateStatus() {
    if (this.visibilityOption == undefined) {
      this.showSelectRequiredMessage = true;
    } else {
      this.showSelectRequiredMessage = false;
    }
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
