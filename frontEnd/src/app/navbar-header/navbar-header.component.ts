import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ViewItemsService } from '../viewItems.service';


@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {

  categories:string[];
  userSearch: FormGroup;
  subCategory = ' Fine Arts';
  categoryArrIndex: number;

  fineArts = [' Painting', ' Sculpture', ' Prints/Photographs/Drawings/Digital', ' European',
  ' Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian', ' Near and Middle Eastern', 
  ' American', ' Pre-20th century', ' Modern/Contemporary'];

  constructor(private viewItemsService: ViewItemsService,
              private http: HttpClient,
              private categoriesService: CategoriesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.browseMainCategories;
    this.userSearch = new FormGroup ({
      'userInput': new FormControl(null)
    });

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.categoryArrIndex = +params['id'];
    //     // this.itemData = this.viewItemsService.getItemData(this.id);
    //     // this.viewItemsService.fetchedItemsIndex = this.id;
    //     console.log( this.categoryArrIndex);
    //   }
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     // this.categoryArrIndex = +params['chosenCategory'];
    //     this.categoryArrIndex = 0;
    //     console.log( this.categoryArrIndex);
    //     this.subCategory = this.categories[this.categoryArrIndex];
    //     // console.log(this.subCategory);
    //   }
    // )

    this.route.params.subscribe(
      (params: Params) => {
        this.categoryArrIndex = +params['chosenCategory'];
        // this.itemData = this.viewItemsService.getItemData(this.id);
        // this.viewItemsService.fetchedItemsIndex = this.id;
        console.log( this.categoryArrIndex);
      }

    );



  }

  onSearch(){
    // console.log(typeof this.userSearch.get('userInput').value);
    
    //onces this method is proven to be working, I will move it into the service
    //for testing purposes only, I leave it in this component.

      const searchStringParams = { params: new HttpParams({fromString: this.userSearch.get('userInput').value}) };
      this.http.get("http://localhost:8080/api/item", searchStringParams).subscribe(response =>{
        console.log(response.valueOf());
      });
    
  }

  onBrowse(){
    
    console.log(this.subCategory);
  }

  // decided to move this to view-list-of-collections ngOnInit
  // // onFetchMyCollectionData(){
  // //   this.viewItemsService.fetchItems();
  // // }

}
