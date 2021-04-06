import { Component, OnInit } from '@angular/core';
import { Item } from '../../ItemClass';
import { ViewItemsService } from '../../viewItems.service';

@Component({
  selector: 'app-member-menu',
  templateUrl: './member-menu.component.html',
  styleUrls: ['./member-menu.component.scss']
})
export class MemberMenuComponent implements OnInit {
 
  items: Item[] = []
  memberCategories: string[];
  memberSubCategories: string[];

  constructor(private viewItemsService: ViewItemsService) { }

  ngOnInit(): void {
    /*method used in ngOnInit in view-list-of-collectibles component*/
    this.viewItemsService.fetchItems().subscribe(
      fetchedItems =>{
        this.items = fetchedItems;
        this.viewItemsService.fetchedItems = fetchedItems;
      }
    )

    for(let item of this.items) {
      if(!this.memberCategories.includes(item.category)){
        this.memberCategories.push(item.category);
      };
      if(!this.memberSubCategories.includes(item.subCategory)){
        this.memberSubCategories.push(item.subCategory);
      };
      console.log(this.memberCategories);
      console.log(this.memberSubCategories);
    }

    console.log(this.viewItemsService.fetchedItems);
  }

}
