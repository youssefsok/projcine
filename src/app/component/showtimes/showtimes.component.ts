import {Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges, TemplateRef} from '@angular/core';
import {Movie} from '../../interface/movie';
import {MovieService} from '../../_service/movie.service';
import {ShowtimeDate} from 'src/app/interface/showtime-date';
import {Showtime} from '../../interface/showtime';
import {Router} from '@angular/router';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { Config } from 'src/Config';


@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass']
})
export class ShowtimesComponent implements OnChanges {
  @Input() movie: Movie;
  @Input() filterDate: string;
  showtimes: Showtime[];
  showtime: any;
  modalRef: BsModalRef;
  ticketTime: String;
  handler:any = null;

  constructor(private movieService: MovieService, private router: Router,  private modalService: BsModalService) {
  }

  ngOnInit() {
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    this.getShowtimes();
  }


  getShowtimes(): void {
    this.movieService.getMovieShowtimes(this.movie, this.filterDate).subscribe(showtimes => {
      this.showtimes = showtimes;
      console.log('showssss', showtimes);
    });
  }
  openModal(template: TemplateRef<any>, showtime: any) {
    this.showtime = showtime;
    this.ticketTime = showtime.time;
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
    
  }



  pay() {
    var stripe = (<any>window).Stripe("pk_test_5a1etS5nLFZIvKw0thzIKe8K00SR3neeGB")
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    stripe.redirectToCheckout({
      items: [
        {sku: 'sku_GZY3hxxuEmCQ6N', quantity: 1},
      ],
      successUrl: `${Config.host}/success/${user.userId}/${this.showtime.id}`,
      cancelUrl: `${Config.host}`
  })
  .then(function(result) {
    console.log(result)
  });

  }

  cofirmPurchase(token) {
    console.log(token)
    this.modalRef.hide();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(`userId : ${user.userId}`);

    
  }



}
