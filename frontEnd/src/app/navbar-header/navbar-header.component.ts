import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { ViewItemsService } from '../viewItems.service'

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit, OnDestroy {
  memberSignedIn: boolean = false;
  userSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true
    });
  }

  onSignIn() {
    this.memberSignedIn = !this.memberSignedIn;
    console.log(this.memberSignedIn);
  }
  
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
