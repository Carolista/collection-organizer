import { Component, OnInit } from '@angular/core';
import { Item } from "../ItemClass";
import { ViewItemsService } from "./viewItems.service"

@Component({
  selector: 'app-view-list-of-collectibles',
  templateUrl: './view-list-of-collectibles.component.html',
  styleUrls: ['./view-list-of-collectibles.component.scss']
})
export class ViewListOfCollectiblesComponent implements OnInit {

  viewMyCollection: boolean = true;

  items: Item[];

  constructor(private arrayOfItems: ViewItemsService) { }

  ngOnInit(): void {

    this.items = this.arrayOfItems.getItems();

  }

}
