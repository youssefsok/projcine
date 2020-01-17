import {Movie} from './../../interface/movie';
import {DomSanitizer} from '@angular/platform-browser';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {MovieService} from '../../_service/movie.service';
import {Component, OnInit, Input, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  modalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private db: MovieService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    this.route.params.subscribe(params => {
      this.db.getMovie(params.id).subscribe(movie => {this.movie = movie;
        console.log(movie);
      });
    });
  }


  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(this.movie.trailer));
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
