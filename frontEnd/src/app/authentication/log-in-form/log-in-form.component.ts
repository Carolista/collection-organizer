import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  logInFailed = false;
  errorMessage = '';
  // roles: string[] = [];

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.authService.userId = this.tokenStorage.getUser().id;
      this.authService.username = this.tokenStorage.getUser().username;
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.logInFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        this.authService.userId = this.tokenStorage.getUser().id;
        this.authService.username = this.tokenStorage.getUser().username;
        console.log('user id is ' + this.authService.userId);
        this.router.navigate(['member-page']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.logInFailed = true;
      }
    );
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }

}
