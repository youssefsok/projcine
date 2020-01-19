import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'src/Config';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class TicketService{

  private ticketUrl = "api/tickets"

  constructor(private http : HttpClient) { }

  addTicket( showId : string) : Observable<any>{
    let data = {
      showId : showId
    }
    return this.http.post<any>(`${Config.apiUrl}/${this.ticketUrl}`,data);
  }

  sendMail(ticketId : string): Observable<any>{
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    let userId = user.userId;
    return this.http.get<any>(`${Config.apiUrl}/${this.ticketUrl}/mail/${userId}/${ticketId}`);
  }
  

}
