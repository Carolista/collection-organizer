import { Component, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service'

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {
  memberSignedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.memberSignedIn = !this.memberSignedIn;
    console.log(this.memberSignedIn);
  }
  
}
