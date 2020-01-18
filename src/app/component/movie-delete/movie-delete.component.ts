import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../../_service/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.scss']
})
export class MovieDeleteComponent implements OnInit {
  @Input() externalId: string;
  constructor(private movieService: MovieService,private  route: Router) { }

  ngOnInit() {
  }

  deleteMovie() {
    const link=['frontpage'];
    this.movieService.deleteMovie(this.externalId).subscribe(() => this.route.navigate([link]));

  }
}
