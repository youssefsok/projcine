import {FrontpageComponent} from './component/frontpage/frontpage.component';
import {MovieDetailComponent} from './component/movie-detail/movie-detail.component';
import {MoviesComponent} from './component/movies/movies.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './component/authentication/authentication.component';
import { PayStripeComponent } from './component/pay-stripe/pay-stripe.component';

const routes: Routes = [
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: 'auth', component: AuthenticationComponent},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path : 'stripe',component :PayStripeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
