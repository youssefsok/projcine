import {FrontpageComponent} from './component/frontpage/frontpage.component';
import {MovieDetailComponent} from './component/movie-detail/movie-detail.component';
import {MoviesComponent} from './component/movies/movies.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './component/authentication/authentication.component';
import {MovieAddComponent} from './component/movie-add/movie-add.component';
import {ShowtimesAddComponent} from './component/showtimes-add/showtimes-add.component';
import {AdminGuard} from './_guards/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: 'auth', component: AuthenticationComponent},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/add', canActivate: [AdminGuard], component: MovieAddComponent, pathMatch: 'full'},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'showtime/add', canActivate: [AdminGuard], component: ShowtimesAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
