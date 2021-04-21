import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service';
import { Item } from '../ItemClass'

@Component({
  selector: 'app-view-list-of-collectibles',
  templateUrl: './view-list-of-collectibles.component.html',
  styleUrls: ['./view-list-of-collectibles.component.scss']
})
export class ViewListOfCollectiblesComponent implements OnInit, OnDestroy {

  viewMyCollection: boolean = true;
  items: Item[] = [];
  categorySelected: boolean = false;
  displayedItems: Item[] = [];

  constructor(private viewItemsService: ViewItemsService) { 
  
    this.viewItemsService.viewSelectedItems.subscribe(
      (selectedCategoryItems: Item[]) => {
        this.items = selectedCategoryItems;
      }
    );
  
  }

  ngOnInit(): void {
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
