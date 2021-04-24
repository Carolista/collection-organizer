import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  signUpSuccessful: boolean = false;
  signUpFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, role } = this.form;
    // console.log(this.form);

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.signUpSuccessful = true;
        this.signUpFailed = false;
        // this.router.navigate(['log-in']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.signUpFailed = true;
      }
    );
  }

}
