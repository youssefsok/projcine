import {ShowtimeDate} from './../interface/showtime-date';
import {Observable, of} from 'rxjs';
import {map, catchError, switchMap, concatMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Movie} from './../interface/movie';
import {Showtime} from './../interface/showtime';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../Config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';
  private showtimesUrl = 'api/shows';

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  // Get all movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(Config.apiUrl + '/' + this.moviesUrl);
  }

  // Get now playing moving
  getNowPlayingShows(filterDate: string): Observable<Movie[]> {
    let today = null;
    today = new Date(filterDate);
    const term = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
    console.log(term);
    return this.http.get<Showtime[]>(`${Config.apiUrl + '/' + this.showtimesUrl}/?filter[where][date][like]=${term}`);
  }

  // Get movie showtimes
  getMovieShowtimes(movie: Movie | number, filterDate: string, showAllTimes: boolean = false): Observable<ShowtimeDate[]> {
    let movieId = null;

    if (typeof movie === 'object') {
      movieId = movie.id;
    }
    if (typeof movie === 'number') {
      movieId = movie;
    }

    //
    const date = showAllTimes || filterDate === 'all' ? new Date() : new Date(filterDate);
    const next6days = new Date();
    date.setHours(0, 0, 0, 0);
    next6days.setHours(0, 0, 0, 0);
    next6days.setDate(next6days.getDate() + 6);

    return this.http.get<Showtime[]>(this.showtimesUrl)
      .pipe(
        map(showtimes => showtimes.filter(showtime => {
          let flag = 0;

          showtime.showtimes = showtime.showtimes.filter(showtimesDate => {
            const showtimeDate = new Date(showtimesDate.date);
            return showAllTimes || filterDate === 'all' && !flag++ ? showtimeDate >= date && showtimeDate <= next6days : showtimeDate.getTime() === date.getTime();
          });

          return showtime.movieId === movieId;
        })),
        map(showtimes => showtimes.length ? showtimes[0].showtimes : []),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }

  // get single movie
  getMovie(id: string): Observable<Movie> {

    return this.http.get<Movie[]>(`${Config.apiUrl + '/' + this.moviesUrl}/${id}`);
  }

  // search movies
  searchMovies(term: string): Observable<Movie[]> {

    return this.http.get<Movie[]>(`${Config.apiUrl + '/' + this.moviesUrl}/?filter[where][title][like]=${term}`);
  }
}
