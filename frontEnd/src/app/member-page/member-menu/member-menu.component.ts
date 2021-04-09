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
  populatedCategories = [];
  populatedSubCategories = [];
  myCategoriesOpen: boolean = false;
  categorySelected: boolean = false;

  constructor(private viewItemsService: ViewItemsService) { }

  ngOnInit(): void {
    /*method used in ngOnInit in view-list-of-collectibles component*/
    this.viewItemsService.fetchItems().subscribe(
      fetchedItems =>{
        this.viewItemsService.fetchedItems = fetchedItems;
      }
    );
    this.items = this.viewItemsService.fetchedItems;

    for(let item of this.items) {

      if(!this.populatedCategories.includes(item.category.trim())){
        this.populatedCategories.push(item.category.trim());
      };
     
    }
    console.log(this.items);
  }

  onOpenMyCategories(){
    this.myCategoriesOpen = !this.myCategoriesOpen;
  }

  onSelectCategory(selectedCategory){
    this.populatedSubCategories = [];
    this.categorySelected = !this.categorySelected;
    for(let item of this.items){
      if(item.category===selectedCategory && !this.populatedSubCategories.includes(item.subCategory.trim())){
        this.populatedSubCategories.push(item.subCategory.trim());
      }
    }
    console.log("category selected: " + selectedCategory);
    console.log(this.populatedSubCategories);
  }
}
