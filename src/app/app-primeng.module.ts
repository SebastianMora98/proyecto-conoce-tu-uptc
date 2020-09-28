import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeNG ripple animation
import { RippleModule } from 'primeng/ripple';

// primeNG ripple components
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { GalleriaModule } from 'primeng/galleria';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';

const primengModules = [
  DropdownModule,
  InputTextModule,
  ButtonModule,
  EditorModule,
  InputTextareaModule,
  PasswordModule,
  ToastModule,
  PaginatorModule,
  CalendarModule,
  MultiSelectModule,
  GalleriaModule,
  FieldsetModule,
  MenuModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, primengModules],
  exports: [primengModules],
})
export class AppPrimengModule {}
