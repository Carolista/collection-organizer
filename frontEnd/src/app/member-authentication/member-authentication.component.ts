import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService, AuthResponseData } from '../authentication.service';

//currently uses the template-driven approach; return to consider using reactive approach
@Component({
  selector: 'app-member-authentication',
  templateUrl: './member-authentication.component.html',
  styleUrls: ['./member-authentication.component.scss']
})
export class MemberAuthenticationComponent implements OnInit {
  signupMode: boolean = true;
  memberData = {
    email: '',
    password: ''
  }
  memberSignedIn = null;
  //this can be fine tuned to display specific error messages; see Angular course, 20-295
  error: string = null;
  authenticationObs: Observable<AuthResponseData>

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitSignIn(form: NgForm) {
    if(!form.valid){
      return
    }

    // if(form.touched){
    //   this.errorMessage = '';
    // } 

    // console.log(form.value);
    this.memberData.email = form.value.email; 
    this.memberData.password = form.value.password;
    // console.log(this.memberData);

    // if (this.signupMode) {
    //   this.authenticationObs = this.authService.signup(form.value.email, form.value.password);
    // } else {
    //   this.authenticationObs = this.authService.login(form.value.email, form.value.password);
    // }

    // this.authenticationObs.subscribe(
    //   resData => {
    //     console.log(resData);
    //     this.router.navigate(['member-page']);
    //   },
    //   errorMessage => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //   }
    // );

    // this code refactored using authenticationObservable
    if(this.signupMode){
      this.authService.signup(form.value.email, form.value.password).subscribe(
        responseData => {console.log(responseData)}, 
        errorMessage => {
          console.log(errorMessage); 
          this.error = errorMessage;
        }
      );
    } else {
      this.authService.login(form.value.email, form.value.password).subscribe(
        responseData => {console.log(responseData)}, 
        errorMessage => {
          console.log(errorMessage); 
          //figure out how to get this to go away when form touched again
          this.error = errorMessage;
        }
      );
    }
    form.reset();
    this.router.navigate(['member-page']);

  }
  
  switchAuthMode(){
    this.signupMode = !this.signupMode;
  }

}
