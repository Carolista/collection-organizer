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

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = ! !this.tokenStorage.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      //this.roles = user.roles;
      this.userId = user.userId
      this.username = user.username
    }
  }

}
