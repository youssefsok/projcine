import { Injectable } from '@angular/core';
import { Config } from 'src/Config';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  goToPayment(showtimeId) : any{
    var stripe = (<any>window).Stripe("pk_test_5a1etS5nLFZIvKw0thzIKe8K00SR3neeGB")
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    stripe.redirectToCheckout({
      items: [
        {sku: 'sku_GZY3hxxuEmCQ6N', quantity: 1},
      ],
      successUrl: `${Config.host}/success/${user.userId}/${showtimeId}`,
      cancelUrl: `${Config.host}`
  })
  .then(function(result) {
    console.log(result)
  });
  }
}
