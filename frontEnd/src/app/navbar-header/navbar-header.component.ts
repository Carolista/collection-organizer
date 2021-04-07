import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  subCategory:string;
  categoryArrIndex: number;
  
  subCategoriesArr = [
    [' Painting', ' Sculpture', ' Prints/Photographs/Drawings/Digital', ' European',
  ' Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian', ' Near and Middle Eastern', 
  ' American', ' Pre-20th century', ' Modern/Contemporary']
  ]

  selectedSubcategoryArr: string [];
  
  fineArts = [' Painting', ' Sculpture', ' Prints/Photographs/Drawings/Digital', ' European',
  ' Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian', ' Near and Middle Eastern', 
  ' American', ' Pre-20th century', ' Modern/Contemporary'];

  constructor(private viewItemsService: ViewItemsService,
              private http: HttpClient,
              private categoriesService: CategoriesService
              ) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.browseMainCategories;
    this.userSearch = new FormGroup ({
      'userInput': new FormControl(null)
    });

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

  onBrowse(clickedArrIndex:number){
    this.categoryArrIndex=clickedArrIndex;
    this.subCategory = this.categories[this.categoryArrIndex];
    this.selectedSubcategoryArr = this.subCategoriesArr[clickedArrIndex];
    
  }

  // decided to move this to view-list-of-collections ngOnInit
  // // onFetchMyCollectionData(){
  // //   this.viewItemsService.fetchItems();
  // // }

}
