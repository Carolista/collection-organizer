import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

//currently uses the template-driven approach; return to consider using reactive approach
@Component({
  selector: 'app-member-authentication',
  templateUrl: './member-authentication.component.html',
  styleUrls: ['./member-authentication.component.scss']
})
export class MemberAuthenticationComponent implements OnInit {
  isSignUp = true;
  memberData = {
    email: '',
    password: ''
  }
  // email: string = '';
  // password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitSignIn(form: NgForm) {
    console.log(form.value);
    this.memberData.email = form.value.email; 
    this.memberData.password = form.value.password;
    console.log(this.memberData);
    form.reset();
  }

  onSwitchAuthMode(){
    this.isSignUp = !this.isSignUp;
  }

}
