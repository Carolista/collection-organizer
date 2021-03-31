  
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { Subject } from "rxjs";
import { Item } from "./ItemClassTemp"

@Injectable({providedIn:'root'})
export class ViewItemsService {

  //soon list of items will be fetching an array of objects from the back end.
  listOfItems: Item[] = [
    {
      imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/balls-picture-id488816326',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/rocket-on-black-background-picture-id172288174',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/antique-change-picture-id95520796',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/antique-change-picture-id95520796',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    },
    {
      imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
      title: 'Item Title goes here-very long title',
      description: 'A few words of description will go here, sample of a few lines of words'
    }
  ];

  fetchedItems: any = [];  // change to Item[] after I updated Item class to mirror the back end set up.

  constructor(private http: HttpClient){};
  //WHEN FETCH FUNCTION IS WORKING REPLACE THE ARRAY NAME TO FETCHEDITEMS

  fetchItems(){
    this.http.get('http://localhost:8080/api/item').toPromise().then ( data => {
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.fetchedItems.push(data[key.valueOf()]);
          }
        }
      });
      console.log('fetchItems() method is called from the view-list-of-collectibles component');
      console.log (this.fetchedItems);
    }

  getItems(){
    console.log("got items");
    return this.listOfItems.slice();  
  }

  getItemData(index: number){
      return this.listOfItems[index];
  }

  deleteItem(index: number){
    this.listOfItems.splice(index, 1);
    // this.recipeChanged.next(this.recipes.slice());
  }
}