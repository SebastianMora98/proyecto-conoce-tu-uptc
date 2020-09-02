import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// simplified client HTTP API
import { HttpClientModule } from '@angular/common/http';

// routes
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './shared/header/header.component';

// forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeNG
import { RippleModule } from 'primeng/ripple';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HeaderComponent,
    AddPostComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    EditorModule,
    FileUploadModule,
    InputTextareaModule,
    PasswordModule,
    RippleModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
