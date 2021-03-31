import { Component, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service';
import { Item } from '../ItemClass'

@Component({
  selector: 'app-view-list-of-collectibles',
  templateUrl: './view-list-of-collectibles.component.html',
  styleUrls: ['./view-list-of-collectibles.component.scss']
})
export class ViewListOfCollectiblesComponent implements OnInit {

  viewMyCollection: boolean = true;
  items: Item[] = [];

  constructor(private viewItemsService: ViewItemsService) { }

  ngOnInit(): void {
    // this.items = this.viewItemsService.getItems();
    this.viewItemsService.fetchItems();

    this.items = this.viewItemsService.fetchedItems;
    // this.items = this.viewItemsService.getFetchedItems();
    console.log(this.items);

    /*alternative way of getting items without using a function, which might be better for once we are fetching to an array in that service:*/
    // this.items = this.viewItemsService.listOfItems;
  }

}
