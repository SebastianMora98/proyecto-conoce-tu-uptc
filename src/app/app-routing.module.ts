import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'noticias', component: PostListComponent },
  { path: 'noticias/detalle/:id', component: PostDetailComponent },
  { path: 'login', component: LoginComponent, canActivate: [CheckLoginGuard] },
  {
    path: 'notFound',
    loadChildren: () =>
      import('./components/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
