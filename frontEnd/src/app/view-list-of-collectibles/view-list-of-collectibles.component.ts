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
    //right now this functionality doesn't work because both subscriptions are executed.
    //need to create a switch that will turn off category subscription if subcategory is selected
    this.viewItemsService.selectedCategoryItems.subscribe(
      (selectedCategoryItems: Item[]) => {
        // this.categorySelected = true; ??? check how it works
        this.items = selectedCategoryItems;
        // console.log(this.items);
      }
    );
      // this.viewItemsService.selectedSubcategoryItems.subscribe(
      //   (selectedSubcategoryItems: Item[]) =>{
      //     this.items = selectedSubcategoryItems;
      //   }
      // );
    
  }

  ngOnInit(): void {
    // this.items = this.viewItemsService.getItems(); //used when we couldn't load from back end
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

  onFetchMyCollectionData(){
    this.viewItemsService.fetchItems().subscribe (myCollection =>{
      this.viewItemsService.selectedCategoryItems.emit(myCollection);
    });     
  }

}
