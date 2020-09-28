import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// simplified client HTTP API
import { HttpClientModule } from '@angular/common/http';

// routes
import { AppRoutingModule } from './app-routing.module';

//primeng module
import { AppPrimengModule } from './app-primeng.module';

// forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { AppComponent } from './app.component';
// posts
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
// auth
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HeaderComponent,
    AddPostComponent,
    LoginComponent,
    PostDetailComponent,
    RegisterComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    GalleryComponent,
    CarouselComponent,
    ServiciosComponent,
  ],
  imports: [
    AppPrimengModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
