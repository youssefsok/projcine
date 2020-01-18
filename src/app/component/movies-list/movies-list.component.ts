import { MovieService } from '../../_service/movie.service';
import { Movie } from './../../interface/movie';
import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {log} from 'util';
import {AuthenticationService} from '../../_service/authentication.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  modalRef: BsModalRef;
  previewUrl = '';

  isAdmin: boolean = false;


  constructor(private movieService: MovieService, private modalService: BsModalService, private sanitizer: DomSanitizer,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getMovies();
    this.authenticationService.checkIfCurrentUserIsAdmin();
    this.authenticationService.isAdmin.subscribe(x => this.isAdmin = x);
  }



  // get playing movie based on filter date
  getMovies(): void {
    this.movies = [];
    this.movieService.getMovies().subscribe(movies=> this.movies = movies);
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
