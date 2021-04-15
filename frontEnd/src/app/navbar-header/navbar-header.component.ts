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
  userSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true
    });
  }
  
  onLogOut(){
    this.authService.logout();
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
