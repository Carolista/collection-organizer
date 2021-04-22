import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service';
import { Item } from '../ItemClass'

@Component({
  selector: 'app-view-list-of-collectibles',
  templateUrl: './view-list-of-collectibles.component.html',
  styleUrls: ['./view-list-of-collectibles.component.scss']
})
export class ViewListOfCollectiblesComponent implements OnInit, OnDestroy {

  isUserLoggedIn: boolean;
  items: Item[] = [];
  categorySelected: boolean = false;
  displayedItems: Item[] = [];
  headline: string;
  // shortenItemDescription: string;

  constructor(private viewItemsService: ViewItemsService) { 
  
    this.viewItemsService.viewSelectedItems.subscribe(
      (selectedCategoryItems: Item[]) => {
        this.items = selectedCategoryItems;
        this.viewItemsService.fetchedItems = selectedCategoryItems;
      }
    );

    this.viewItemsService.viewCollectiblesHeadline.subscribe(
      (headline: string) =>{
        this.headline = headline;
      }
    );
  
  }

  ngOnInit(): void {

    this.isUserLoggedIn = this.viewItemsService.isUserLoggedIn;
    // this.headline = this.viewItemsService.viewCollectiblesHeadline;
    // this.items = this.viewItemsService.getItems(); //used when we couldn't load from back end
    if (this.viewItemsService.isUserLoggedIn){
      this.viewItemsService.fetchItems().subscribe(
        fetchedItems =>{
          this.items = fetchedItems;
          this.viewItemsService.fetchedItems = fetchedItems;
          console.log(fetchedItems);
        }
      );
    }

    console.log(this.isUserLoggedIn);
    /*alternative way of getting items without using a function, which might be better for once we are fetching to an array in that service:*/
    // this.items = this.viewItemsService.listOfItems;
    
  }

  ngOnDestroy():void {
    // this.viewItemsService.fetchedItems = [];
  }

  onFetchMyCollectionData(){
    this.viewItemsService.fetchItems().subscribe (myCollection =>{
      this.viewItemsService.viewSelectedItems.emit(myCollection);
    });     
  }

}
