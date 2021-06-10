  
import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Params } from "@angular/router";
import { map } from 'rxjs/operators';
import { Item } from "./ItemClass"

@Injectable({providedIn:'root'})
export class ViewItemsService {

  editMode: boolean = false;
  editedItemValue: Item; //these values are for the edited item data to be saved and posted to the back end
  valuesForEditingItem: Item; //these values are for the input field to be changed out in the add-item-form
  fetchedItemsIndex: number;
  // userSelectedParams: Params;
  fetchedItems: Item[] = [];  
  isUserLoggedIn: boolean = false;//Casey, please replace this with your user logged in var.
  itemsToDisplay: Item[] = [];
  subcategorySelected: boolean;
  viewSelectedItems = new EventEmitter<Item[]>();
  viewCollectiblesHeadline = new EventEmitter<string>();
  

  constructor(private http: HttpClient){};


    fetchOrbrowseOrSearchItems(url: string = 'http://localhost:8080/api/item/', params: Params = null){
      if (params == null){
        return this.http
      .get(url)
      .pipe(
        map( fetchedCategoryData =>{
          const fetchedCategoryItems: Item[] = [];
          for (const key in fetchedCategoryData){
            if(fetchedCategoryData.hasOwnProperty(key)){
              fetchedCategoryItems.push(fetchedCategoryData[key.valueOf()]);
            }
          }
          return fetchedCategoryItems;
        })
      )
      }
      return this.http
      .get(url, params)
      .pipe(
        map( fetchedCategoryData =>{
          const fetchedCategoryItems: Item[] = [];
          for (const key in fetchedCategoryData){
            if(fetchedCategoryData.hasOwnProperty(key)){
              fetchedCategoryItems.push(fetchedCategoryData[key.valueOf()]);
            }
          }
          return fetchedCategoryItems;
        })
      )
    }
 
  

  getItemData(index: number){
    return this.fetchedItems[index];
  }

  editItem(index:number, itemId: number){
    this.fetchedItems.splice(index, 1, this.editedItemValue);

    //this method needs to be tested with the back end
    this.http.put('http://localhost:8080/api/item/'+ itemId, this.editedItemValue).subscribe( data=>{
      console.log(data)
    });

  }

  deleteItem(index: number, itemId: number){
    // this.fetchedItems.splice(index, 1);
    this.http.delete('http://localhost:8080/api/item/'+ itemId).subscribe(data=>{
      console.log(data)
    });

  }

  //didn't need to use this method yet
  // displayItems(selectedCategory){
  //   for(let item of this.fetchedItems){
  //     if(item.category.trim()===selectedCategory){
  //       this.itemsToDisplay.push(item);
  //     }
  //   }
  //   console.log(this.itemsToDisplay);
  // }

}