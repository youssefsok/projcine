import {Movie} from '../interface/movie';

export class MovieModel  {
  title: string;
  poster: string;
  backdrop: string;
  trailer: string;
  overview: string;
  director: string;
  cast: string[];
  release_date: string;
  runtime: number;

  constructor( title = '', poster = '', backdrop = '', trailer = '', overview = '', director = '', casting = [], release_date = '', runtime = 0) {
    this.title = title;
    this.poster = poster;
    this.trailer = trailer;
    this.overview = overview;
    this.backdrop = backdrop;
    this.director = director;
    this.cast = casting;
    this.release_date = release_date;
    this.runtime = runtime;
  }
}