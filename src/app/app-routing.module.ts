import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

//guards
import { CheckLoginGuard } from './guards/auth/check-login.guard';
import { CheckPostGuard } from './guards/post/check-post.guard';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [CheckLoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'noticias', component: PostListComponent },
  {
    path: 'noticias/agregar',
    component: AddPostComponent,
    canActivate: [CheckPostGuard],
  },
  { path: 'noticias/detalle/:id', component: PostDetailComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
