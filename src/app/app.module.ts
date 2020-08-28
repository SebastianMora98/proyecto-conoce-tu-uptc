import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// simplified client HTTP API
import { HttpClientModule } from '@angular/common/http';

// routes
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

// forms
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeNG
import { DropdownModule } from 'primeng/dropdown';
import { NavbarComponent } from './components/nav/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PostComponent, PostListComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
