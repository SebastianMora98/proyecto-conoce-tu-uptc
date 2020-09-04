import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeNG ripple animation
import { RippleModule } from 'primeng/ripple';

// primeNG ripple components
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';

const primengModules = [
  DropdownModule,
  InputTextModule,
  ButtonModule,
  EditorModule,
  FileUploadModule,
  InputTextareaModule,
  PasswordModule,
  ToastModule,
  PaginatorModule,
  CalendarModule,
  MultiSelectModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, primengModules],
  exports: [primengModules],
})
export class AppPrimengModule {}
