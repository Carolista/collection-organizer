import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-authentication',
  templateUrl: './member-authentication.component.html',
  styleUrls: ['./member-authentication.component.scss']
})
export class MemberAuthenticationComponent implements OnInit {
  isSignUp = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchAuthMode(){
    this.isSignUp = !this.isSignUp;
  }

}
