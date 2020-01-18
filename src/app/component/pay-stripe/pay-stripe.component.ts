import { Component, OnInit } from '@angular/core';
import { Config } from 'src/Config';


@Component({
  selector: 'app-pay-stripe',
  templateUrl: './pay-stripe.component.html',
  styleUrls: ['./pay-stripe.component.scss']
})
export class PayStripeComponent implements OnInit {

  handler:any = null;

  constructor() { }

  ngOnInit() {
    this.loadStripe();
  }

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: Config.stripePublishKey,
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
  pay(amount) {    

    this.handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
  
  }
}

