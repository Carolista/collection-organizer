import { Component, OnInit } from '@angular/core';
import { Item } from '../../ItemClass';
import { ViewItemsService } from '../../viewItems.service';

@Component({
  selector: 'app-member-menu',
  templateUrl: './member-menu.component.html',
  styleUrls: ['./member-menu.component.scss']
})
export class MemberMenuComponent implements OnInit {
 
  items: Item[] = [];

  populatedCategories = [];
  populatedSubCategories = [];

  myCategoriesOpen: boolean = false;
  categorySelected: boolean = false;

  viewSelectedCategory: Item[]=[];
  viewSelectedSubcategory: Item[]= [];

  constructor(private viewItemsService: ViewItemsService) { }

  ngOnInit(): void {
    /*method used in ngOnInit in view-list-of-collectibles component*/
    this.viewItemsService.fetchItems().subscribe(
      fetchedItems =>{
        this.viewItemsService.fetchedItems = fetchedItems;
        this.items = this.viewItemsService.fetchedItems;
        for(let item of this.items) {

          if(!this.populatedCategories.includes(item.category.trim())){
            this.populatedCategories.push(item.category.trim());
          };
        }
      }
    );
    
  }

  onOpenMyCategories(){
    this.myCategoriesOpen = !this.myCategoriesOpen;
  }

  onSelectCategory(selectedCategory: string){

    this.categorySelected = !this.categorySelected;
    this.viewSelectedCategory = [];
    this.populatedSubCategories = [];
    for(let item of this.items) {

      if(selectedCategory === item.category.trim()){
        this.viewSelectedCategory.push(item);
      };
    }

     for(let item of this.viewSelectedCategory){
      if(!this.populatedSubCategories.includes(item.subCategory.trim())){
        this.populatedSubCategories.push(item.subCategory.trim());
      }
    }
    this.viewItemsService.viewSelectedItems.emit(this.viewSelectedCategory);
    this.categorySelected=!!this.categorySelected;  
   
    }

    onSelectedSubcategory(selectedSubcategory:string){
      this.viewSelectedSubcategory = [];

      for (let item of this.viewSelectedCategory){
        if (selectedSubcategory ===item.subCategory.trim() ){
          this.viewSelectedSubcategory.push(item);
        }
      }
      this.viewItemsService.viewSelectedItems.emit(this.viewSelectedSubcategory);

    }

    onFetchMyCollectionData(){
      this.viewItemsService.fetchItems().subscribe (myCollection =>{
        this.viewItemsService.viewSelectedItems.emit(myCollection);
      });  
      
    }


    // this.viewItemsService.displayItems(selectedCategory);
    // this.viewItemsService.selectedCategoryItems.emit(this.viewItemsService.itemsToDisplay);
    

}
