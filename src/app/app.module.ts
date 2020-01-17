import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesComponent} from './component/movies/movies.component';
import {MovieDetailComponent} from './component/movie-detail/movie-detail.component';
import {FrontpageComponent} from './component/frontpage/frontpage.component';
import {JoinPipe} from './pipe/join.pipe';
import {MinutePipe} from './pipe/minute.pipe';
import {ShowtimesComponent} from './component/showtimes/showtimes.component';
import {DayPipe} from './pipe/day.pipe';
import {MovieService} from './_service/movie.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MoviesListComponent} from './component/movies-list/movies-list.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {SafePipe} from './pipe/safe.pipe';
import {MovieSearchComponent} from './component/movie-search/movie-search.component';
import {MoviesGridComponent} from './component/movies-grid/movies-grid.component';
import {MoviesSliderComponent} from './component/movies-slider/movies-slider.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AuthenticationComponent} from './component/authentication/authentication.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    FrontpageComponent,
    ShowtimesComponent,
    JoinPipe,
    MinutePipe,
    DayPipe,
    MoviesListComponent,
    SafePipe,
    MovieSearchComponent,
    MoviesGridComponent,
    MoviesSliderComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}, ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
