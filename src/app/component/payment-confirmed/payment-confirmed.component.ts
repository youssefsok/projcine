import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/_service/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrls: ['./payment-confirmed.component.scss']
})
export class PaymentConfirmedComponent implements OnInit {

  constructor(private ticketService : TicketService,
              private  route : ActivatedRoute) 
  { }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
      this.ticketService.addTicket(params.showId).subscribe((ticket)=>{
        this.ticketService.sendMail(ticket.id).subscribe(()=>{
          console.log('done')
        }) 
      })
    })  
  }


}
