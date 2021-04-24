import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service';
import { Item } from '../ItemClass'
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-view-list-of-collectibles',
  templateUrl: './view-list-of-collectibles.component.html',
  styleUrls: ['./view-list-of-collectibles.component.scss']
})
export class ViewListOfCollectiblesComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  associatedUser: any;
  viewMyCollection: boolean = true;
  items: Item[] = [];

  constructor(
    private viewItemsService: ViewItemsService,
    private authService: AuthService) { 
  }

  ngOnInit(): void {
    // this.items = this.viewItemsService.getItems(); //used when we couldn't load from back end

    if(this.authService.isLoggedIn) {
      this.isLoggedIn = true;
      this.associatedUser = this.authService.associatedUser;
    }

    console.log(this.isLoggedIn);

    this.viewItemsService.fetchItems().subscribe(
      fetchedItems =>{
        this.items = fetchedItems;
        this.viewItemsService.fetchedItems = fetchedItems;
      }
    )
    /*alternative way of getting items without using a function, which might be better for once we are fetching to an array in that service:*/
    // this.items = this.viewItemsService.listOfItems;
  }

ngOnDestroy():void {
  // this.viewItemsService.fetchedItems = [];
}

}
