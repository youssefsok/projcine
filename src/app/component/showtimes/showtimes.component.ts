import {Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges} from '@angular/core';
import {Movie} from '../../interface/movie';
import {MovieService} from '../../_service/movie.service';
import {ShowtimeDate} from 'src/app/interface/showtime-date';
import {Showtime} from '../../interface/showtime';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass']
})
export class ShowtimesComponent implements OnChanges {
  @Input() movie: Movie;
  @Input() filterDate: string;
  showtimes: Showtime[];

  constructor(private movieService: MovieService, private router: Router) {
  }


  getShowtimes(): void {
    this.movieService.getMovieShowtimes(this.movie, this.filterDate).subscribe(showtimes => {
      this.showtimes = showtimes;
      console.log('showssss', showtimes);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getShowtimes();
  }



}
