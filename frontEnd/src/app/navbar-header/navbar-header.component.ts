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
  clickedCategory:string;
  categoryArrIndex: number;
  switchCase: string;
  
  subCategoriesArr: string[][];

  selectedSubcategoryArr: string [];

  constructor(private viewItemsService: ViewItemsService,
              private http: HttpClient,
              private categoriesService: CategoriesService
              ) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.browseMainCategories;
    this.subCategoriesArr = this.categoriesService.subCategoriesArr;
    this.userSearch = new FormGroup ({
      'userInput': new FormControl(null)
    });

  }

  onSearch(){
    // console.log(typeof this.userSearch.get('userInput').value);
    
    //onces this method is proven to be working, I will move it into the service
    //for testing purposes only, I leave it in this component.

      const searchStringParams = { params: new HttpParams({fromString: 'searchTerm=' + this.userSearch.get('userInput').value}) };
    //let params = new HttpParams({fromString: 'page=' + PageNo + '&sort=' + SortOn});

      this.viewItemsService.userSelectedParams = searchStringParams;
      this.http.get("http://localhost:8080/api/search", searchStringParams).subscribe(response =>{
        console.log(response.valueOf());
        
      });
    console.log(searchStringParams);
  }

  onBrowseCategories(clickedArrIndex:number){
    this.categoryArrIndex=clickedArrIndex; //need this value to access subcategories
    this.clickedCategory = this.categories[clickedArrIndex];
    this.selectedSubcategoryArr = this.subCategoriesArr[clickedArrIndex];
    this.switchCase = this.categories[clickedArrIndex];
    //this function needs to be tested, after moved to the service
    
    const browseStringParams = { params: new HttpParams({fromString: 'category=' + this.clickedCategory}) };

    this.viewItemsService.userSelectedParams = browseStringParams;

      this.http.get("http://localhost:8080/api/search/categorySearch", browseStringParams).subscribe(response =>{
        console.log(response.valueOf());
      });
      console.log(this.viewItemsService.userSelectedParams)
  }

  onBrowseSubcategories(clickedSubcategoryArrIndex:number){
  //this function needs to be tested, after moved to the service
  const browseStringParams = 
  { params: new HttpParams({fromString: 'subCategory=' + this.subCategoriesArr[this.categoryArrIndex][clickedSubcategoryArrIndex]}) };
  this.http.get("http://localhost:8080/api/search/subCategorySearch", browseStringParams).subscribe(response =>{
    console.log(response.valueOf());
  });

  this.viewItemsService.userSelectedParams = browseStringParams;
  console.log(this.viewItemsService.userSelectedParams)
  console.log(this.subCategoriesArr[this.categoryArrIndex][clickedSubcategoryArrIndex]);
  }

  // decided to move this to view-list-of-collections ngOnInit
  // // onFetchMyCollectionData(){
  // //   this.viewItemsService.fetchItems();
  // // }

}
