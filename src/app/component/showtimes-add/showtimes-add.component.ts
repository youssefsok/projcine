import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../_service/movie.service';
import {Movie} from '../../interface/movie';
import {Showtime} from '../../interface/showtime';
import {NgForm} from '@angular/forms';
import {ShowtimeService} from '../../_service/showtime.service';


@Component({
  selector: 'app-showtimes-add',
  templateUrl: './showtimes-add.component.html',
  styleUrls: ['./showtimes-add.component.scss']
})
export class ShowtimesAddComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private showtimeService: ShowtimeService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }


  save(showTime: NgForm) {
    this.showtimeService.addShowTime(showTime.value).subscribe(succ => console.log('added'));
  }
}
