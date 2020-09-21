import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { RegisterComponent } from './components/auth/register/register.component';

//guards
import { CheckLoginGuard } from './guards/auth/check-login.guard';
import { CheckPostGuard } from './guards/post/check-post.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'noticias', component: PostListComponent },
  {
    path: 'noticias/agregar',
    component: AddPostComponent,
    canActivate: [CheckPostGuard],
  },
  { path: 'noticias/detalle/:id', component: PostDetailComponent },
  { path: 'login', component: LoginComponent, canActivate: [CheckLoginGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'notFound',
    component: NotFoundComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
