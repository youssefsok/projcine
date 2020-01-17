import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Movie} from '../../interface/movie';
import {NgForm} from '@angular/forms';
import {MovieService} from '../../_service/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {
  movie: Movie;

  id: number;

  constructor(private  movieService: MovieService) {
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {

    this.movieService.createMovie(
      addForm.value.title,
      addForm.value.poster,
      addForm.value.backdrop,
      addForm.value.trailer,
      addForm.value.overview,
      addForm.value.director,
      addForm.value.casting,
      addForm.value.release_date.toString(),
      addForm.value.runtime).subscribe(movie => console.log('Movie added'));

  }

}
