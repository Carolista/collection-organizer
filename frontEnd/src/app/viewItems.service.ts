  
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { Subject } from "rxjs";
import { Item } from "./ItemClass"

@Injectable({providedIn:'root'})
export class ViewItemsService {

  editMode: boolean = false;
  editedItemValue: Item;
  valuesForEditingItem: Item;
  fetchedItemsIndex: number;

  //soon list of items will be fetching an array of objects from the back end.
  listOfItems: any = [
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

  fetchedItems: Item[] = [];  // change to Item[] after I updated Item class to mirror the back end set up.

  constructor(private http: HttpClient){};
  //WHEN FETCH FUNCTION IS WORKING REPLACE THE ARRAY NAME TO FETCHEDITEMS

  fetchItems(){
    //needs to be updated to accomidate edit items function from the item detail component
    //currently doesn't work properly when edditing items or adding items.
     
      this.http.get('http://localhost:8080/api/item/').toPromise().then ( data => {
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.fetchedItems.push(data[key.valueOf()]);
          }
        }
      });
     
    }
 
 
  //   getItems(){
  //   console.log("got items");
  //   return this.listOfItems.slice();  
  // }

  // getItemData(index: number){
  //     return this.listOfItems[index];
  // }
  getItemData(index: number){
    return this.fetchedItems[index];
}

  editItem(index:number, itemId: number){
    // console.log('EDITED VALUE SAVES', this.editedItemValue);

    this.fetchedItems.splice(index, 1, this.editedItemValue);

    //this method needs to be tested with the back end
    this.http.put('http://localhost:8080/api/item/'+ itemId, this.editedItemValue).subscribe( data=>{
      console.log(data)
      
    });

    this.http.delete('http://localhost:8080/api/item/'+ itemId).subscribe(data=>{
      console.log(data)
    });
  }

  deleteItem(index: number, itemId: number){
    this.fetchedItems.splice(index, 1);
    this.http.delete('http://localhost:8080/api/item/'+ itemId).subscribe(data=>{
      console.log(data)
    });
  }
}