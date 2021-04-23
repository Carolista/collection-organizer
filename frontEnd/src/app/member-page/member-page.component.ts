import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../authentication/token-storage.service';
import { AuthService } from '../authentication/auth.service'

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {
  isLoggedIn: boolean = false;
  userId?: number;
  username?: string;

  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = ! !this.tokenStorage.getToken();
    this.userId = this.authService.userId;

    //possible alternative code for loading user id when logged in? from tutorial
    // if(this.isLoggedIn) {
    //   const user = this.tokenStorage.getUser();
    //   this.userId = user.userId
    //   this.username = user.username
    // }
  }

}
