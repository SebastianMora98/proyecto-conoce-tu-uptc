import { Component, OnInit } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  text1: string =
    '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  text2: string;
  fecha: Date;
  autor: string;
  titulo: string;
  categorias: string[];
  extracto: string;
  fileToUpload: File = null;

  uploadedFiles: any[] = [];
  constructor(private dataWpService: DataWpService) {}

  ngOnInit(): void {
    this.dataWpService.getCategories().subscribe((categories) => {
      categories.map((c) => {
        console.log();
      });
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
