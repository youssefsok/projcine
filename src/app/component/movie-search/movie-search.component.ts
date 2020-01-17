import {MovieService} from '../../_service/movie.service';
import {Movie} from './../../interface/movie';
import {Observable, Subject} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.sass']
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[];
  isMouseOver = false;


  constructor(private db: MovieService) {
  }

  ngOnInit() {
  }

  search(term: string): void {
    this.db.searchMovies(term).subscribe(next => {
      console.log(next);
      this.movies = next;
    });
  }

}
