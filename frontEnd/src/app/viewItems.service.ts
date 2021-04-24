  
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Item } from "./ItemClass";
import { AuthService } from './authentication/auth.service';
import { TokenStorageService } from "./authentication/token-storage.service";

@Injectable({providedIn:'root'})
export class ViewItemsService {

  editMode: boolean = false;
  editedItemValue: Item; //these values are for the edited item data to be saved and posted to the back end
  valuesForEditingItem: Item; //these values are for the input field to be changed out in the add-item-form
  fetchedItemsIndex: number;

  isLoggedIn: boolean = false;
  userId: number;

  //soon list of items will be fetching an array of objects from the back end.
  listOfItems: any = [];

  fetchedItems: Item[] = [];  

  constructor(
    private http: HttpClient, 
    private authService: AuthService,
    private tokenStorage: TokenStorageService){};
  //WHEN FETCH FUNCTION IS WORKING REPLACE THE ARRAY NAME TO FETCHEDITEMS

  fetchItems(){
    
    // if(this.authService.isLoggedIn) {
    //   this.isLoggedIn = true;
    //   this.userId = this.authService.userId;
    // }

    // console.log(this.isLoggedIn);

    return this.http
      .get('http://localhost:8080/api/item/mycollection')
      .pipe(
        map(fetchedData=>{
          const fetchedItems: Item[] = [];
          for (const key in fetchedData){
            if(fetchedData.hasOwnProperty(key)){
              fetchedItems.push(fetchedData[key.valueOf()]);
            }
          }
          return fetchedItems;
        })
      );

    //old code:
    //needs to be updated to accomidate edit items function from the item detail component
    //currently doesn't work properly when edditing items or adding items.
     
    //original syntax  
    // this.http.get('http://localhost:8080/api/item/').toPromise().then ( data => {
    //     for (let key in data){
    //       if (data.hasOwnProperty(key)){
    //         this.fetchedItems.push(data[key.valueOf()]);
    //       }
    //     }
    //   });

     //new syntax will use observables, I hope it will fix the bug 
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
    this.fetchedItems.splice(index, 1, this.editedItemValue);

    //this method needs to be tested with the back end
    this.http.put('http://localhost:8080/api/item/mycollection/'+ itemId, this.editedItemValue).subscribe( data=>{
      console.log(data)
    });

    //this code was deleting the item from the database
    // this.http.delete('http://localhost:8080/api/item/'+ itemId).subscribe(data=>{
    //   console.log(data)
    // });
  }

  deleteItem(index: number, itemId: number){
    this.fetchedItems.splice(index, 1);
    this.http.delete('http://localhost:8080/api/item/'+ itemId).subscribe(data=>{
      console.log(data)
    });
  }
}