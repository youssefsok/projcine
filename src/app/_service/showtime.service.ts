import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../Config';
import {AuthenticationService} from './authentication.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService implements OnInit {

  private showTimesUrl = 'api/shows';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }


  addShowTime(show: any) {
    return this.http.post(Config.apiUrl + '/' + this.showTimesUrl, show);
  }

  ngOnInit(): void {
  }
}
