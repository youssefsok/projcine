import { Movie } from './../../interface/movie';
import { MovieService } from '../../_service/movie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.sass']
})
export class MoviesSliderComponent implements OnInit {
  @Input() limit: number;
  movies: Movie[];

  constructor(private db: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.db.getMovies().subscribe(movies => this.movies = movies);
  }
}
