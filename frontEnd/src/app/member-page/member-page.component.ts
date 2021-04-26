import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../authentication/token-storage.service';
import { AuthService } from '../authentication/auth.service';
import { UserService } from '../authentication/user.service';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {
  private roles: string[] = [];
  content?: string;
  associatedUser: any;
  isLoggedIn: boolean = false;
  showUserBoard: boolean = false;
  username?: string;

  constructor(
    private token: TokenStorageService,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit(): void {

    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.associatedUser = this.token.getUser().id;
    }

    console.log(this.associatedUser + " is logged in to Member-Page? " + this.isLoggedIn);

    // this.userService.getPublicContent().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );

    // this.userService.getUserBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );

    this.isLoggedIn = !!this.token.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.token.getUser();
    //   this.roles = user.roles;

    //   this.showUserBoard = this.roles.includes('ROLE_USER');

    //   this.username = user.username;
    // }
 
  }

}
