  
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
  


  //soon list of items will be fetching an array of objects from the back end.
  // listOfItems: any = [
  //   {
  //     imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/balls-picture-id488816326',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/rocket-on-black-background-picture-id172288174',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/antique-change-picture-id95520796',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/antique-change-picture-id95520796',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   },
  //   {
  //     imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //     title: 'Item Title goes here-very long title',
  //     description: 'A few words of description will go here, sample of a few lines of words'
  //   }
  // ];

  constructor(private http: HttpClient){};
//combined this  with the function bellow, so I only use one method
  // fetchItems(){    

  //    //when we're fetching data with query params, update this method
  //    //to includ query param as a second argument
  //    return this.http
  //     .get('http://localhost:8080/api/item/')
  //     .pipe(
  //       map(fetchedData=>{
  //         const fetchedItems: Item[] = [];
  //         for (const key in fetchedData){
  //           if(fetchedData.hasOwnProperty(key)){
  //             fetchedItems.push(fetchedData[key.valueOf()]);
  //           }
  //         }
  //         return fetchedItems;
  //       })
  //     );
  //   }

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
    // this.fetchItems().subscribe(
    //   updatedItems =>{
    //     this.fetchedItems = updatedItems;
    //   }
    // )
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