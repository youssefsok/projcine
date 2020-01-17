import { MovieService } from '../../_service/movie.service';
import { Movie } from './../../interface/movie';
import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {log} from 'util';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit, OnChanges {
  movies: Movie[] = [];
  @Input() filterDate: string;
  modalRef: BsModalRef;
  previewUrl = '';

  constructor(private movieService: MovieService, private modalService: BsModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterDate']) {
      this.getMovies();
    }
  }

  // get playing movie based on filter date
  getMovies(): void {
    this.movies = [];
    this.movieService.getNowPlayingShows(this.filterDate).subscribe(shows => {
      shows.forEach( show => {
          this.movieService.getMovie(show.movieId).subscribe(movie => {
          this.movies.push(movie);
        });

      }
      );
      // this.movies = this.movies.filter((el, i, a) => i === a.indexOf(el));
    });
  }
  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.previewUrl = previewUrl;
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
