import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { ViewItemsService } from '../viewItems.service'
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  isAuthenticated: boolean = false;
  
  //Search and browse propoerties
  categories:string[];
  userSearch: FormGroup;
  clickedCategory:string;
  categoryArrIndex: number;
  switchCase: string;
  
  subCategoriesArr: string[][];
  selectedSubcategoryArr: string [];
  
  constructor(
    private authService: AuthenticationService,
    private viewItemsService: ViewItemsService,
    private http: HttpClient,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {

    //User Authentication
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true
    });

    //Search and Browse
    this.categories = this.categoriesService.browseMainCategories;
    this.subCategoriesArr = this.categoriesService.subCategoriesArr;
    this.userSearch = new FormGroup ({
      'userInput': new FormControl(null)
    });

  }
  
  onLogOut(){
    this.authService.logout();
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }

  //User Authentication methods
  onSignIn() {
    this.memberSignedIn = !this.memberSignedIn;
    console.log(this.memberSignedIn);
  }

  //Search and Browse methods

  onSearch(){
    // console.log(typeof this.userSearch.get('userInput').value);
    
    //onces this method is proven to be working, I will move it into the service
    //for testing purposes only, I leave it in this component.

      const searchStringParams = { params: new HttpParams({fromString: this.userSearch.get('userInput').value}) };
      this.viewItemsService.userSelectedParams = searchStringParams;
      this.http.get("http://localhost:8080/api/item", searchStringParams).subscribe(response =>{
        console.log(response.valueOf());
      });
    
  }

  onBrowseCategories(clickedArrIndex:number){
    this.categoryArrIndex=clickedArrIndex; //need this value to access subcategories
    this.clickedCategory = this.categories[clickedArrIndex];
    this.selectedSubcategoryArr = this.subCategoriesArr[clickedArrIndex];
    this.switchCase = this.categories[clickedArrIndex];
    //this function needs to be tested, after moved to the service
    
    const browseStringParams = { params: new HttpParams({fromString: this.clickedCategory}) };

    this.viewItemsService.userSelectedParams = browseStringParams;

      this.http.get("http://localhost:8080/api/item", browseStringParams).subscribe(response =>{
        console.log(response.valueOf());
      });
      console.log(this.viewItemsService.userSelectedParams)
  }

  onBrowseSubcategories(clickedSubcategoryArrIndex:number){
    //this function needs to be tested, after moved to the service
    const browseStringParams = 
    { params: new HttpParams({fromString: this.subCategoriesArr[this.categoryArrIndex][clickedSubcategoryArrIndex]}) };
    this.http.get("http://localhost:8080/api/item", browseStringParams).subscribe(response =>{
      console.log(response.valueOf());
    });
  
    this.viewItemsService.userSelectedParams = browseStringParams;
    console.log(this.viewItemsService.userSelectedParams)
  }

  onFetchMyCollectionData(){
    this.viewItemsService.fetchItems().subscribe (myCollection =>{
      this.viewItemsService.viewSelectedItems.emit(myCollection);
    });
  }
  
  //User Authentication method
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
