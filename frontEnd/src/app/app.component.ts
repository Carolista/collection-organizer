import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../app/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService) {}

  ngOnInit(){
    this.authService.autoLogin();
    console.log('autoLogin called');
  }
}
