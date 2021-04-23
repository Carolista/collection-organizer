import { Component, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service';
import { TokenStorageService } from '../authentication/token-storage.service';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {
  isLoggedIn: boolean = false

  constructor(
    private viewItemsService: ViewItemsService, 
    private tokenStorage: TokenStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    // console.log(this.isLoggedIn);
  }
  // decided to move this to view-list-of-collections ngOnInit
  // // onFetchMyCollectionData(){
  // //   this.viewItemsService.fetchItems();
  // // }

  onLogOut() {
    this.tokenStorage.signOut();
  }

}
