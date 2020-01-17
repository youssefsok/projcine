import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './_service/authentication.service';
import {User} from './_models/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Angular-Cinema';
  currentUser: Observable<User> = null;
  isLogged: boolean = false;


  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.isLogged = (x !== null));
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['frontpage']);
  }


}
