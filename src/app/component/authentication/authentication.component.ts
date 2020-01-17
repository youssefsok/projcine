import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_service/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  constructor(private authenticationService: AuthenticationService, private route: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('.message a').click(function () {
      $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
    });
  }


  register(formData: any) {
    console.log(formData);
    this.authenticationService.register(formData.value).subscribe(succ => console.log(succ));

  }

  login(formData: any) {
    console.log(formData.value);
    this.authenticationService.login(formData.value.username, formData.value.password).subscribe(succ => {
        this.route.navigate(['frontpage']);

      }
    );
  }


}
