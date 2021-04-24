import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../authentication/token-storage.service';
import { AuthService } from '../authentication/auth.service'

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {
  associatedUser: any;
  isLoggedIn: boolean = false;

  constructor(
    private token: TokenStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {

    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.associatedUser = this.token.getUser().id;
    }

    console.log(this.associatedUser + " is logged in to Member-Page? " + this.isLoggedIn)

    //possible alternative code for loading user id when logged in? from tutorial
    // if(this.isLoggedIn) {
    //   const user = this.tokenStorage.getUser();
    //   this.userId = user.userId
    //   this.username = user.username
    // }
  }

}
