import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { ViewItemsService } from '../viewItems.service';
import { Router } from '@angular/router';


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
  openOrCloseCategory = [false, false, false, false, false, false];
  isOpen: boolean;
  
  subCategoriesArr: string[][];

  selectedSubcategoryArr: string [];

  constructor(private viewItemsService: ViewItemsService,
              private http: HttpClient,
              private categoriesService: CategoriesService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.browseMainCategories;
    this.subCategoriesArr = this.categoriesService.subCategoriesArr;
    this.userSearch = new FormGroup ({
      'userInput': new FormControl(null)
    });

  }

  onSearch(){

    this.viewItemsService.viewCollectiblesHeadline.emit('Results for '+ this.userSearch.get('userInput').value);

    const searchStringParams = { params: new HttpParams({fromString: 'searchTerm=' + this.userSearch.get('userInput').value}) };

    this.viewItemsService.browseOrSearchItems("http://localhost:8080/api/search", searchStringParams)
      .subscribe(data =>{
      this.viewItemsService.viewSelectedItems.emit(data);
      });

      this.router.navigate(['/member-page']);
  }

  onBrowseCategories(clickedArrIndex:number){
    this.isOpen = this.openOrCloseCategory[clickedArrIndex];
    this.openOrCloseCategory.splice(clickedArrIndex, 1, !this.openOrCloseCategory[clickedArrIndex]);
    this.categoryArrIndex=clickedArrIndex; //need this value to access subcategories
    this.clickedCategory = this.categories[clickedArrIndex];
    this.selectedSubcategoryArr = this.subCategoriesArr[clickedArrIndex];
    this.switchCase = this.categories[clickedArrIndex];
    this.viewItemsService.viewCollectiblesHeadline.emit(this.clickedCategory);
    
    const browseStringParams = { params: new HttpParams({fromString: 'category=' + this.clickedCategory}) };

    this.viewItemsService.browseOrSearchItems("http://localhost:8080/api/search/categorySearch", browseStringParams)
      .subscribe(data =>{
        this.viewItemsService.viewSelectedItems.emit(data);
      });

      this.router.navigate(['/member-page']);
  }


  onBrowseSubcategories(clickedSubcategoryArrIndex:number){
  
  this.viewItemsService.viewCollectiblesHeadline.emit(this.clickedCategory + ', ' + this.subCategoriesArr[this.categoryArrIndex][clickedSubcategoryArrIndex]);

  const browseStringParams = 
  { params: new HttpParams({fromString: 'subCategory=' + this.subCategoriesArr[this.categoryArrIndex][clickedSubcategoryArrIndex]}) };

  this.viewItemsService.browseOrSearchItems("http://localhost:8080/api/search/subCategorySearch", browseStringParams)
    .subscribe(data =>{
      this.viewItemsService.viewSelectedItems.emit(data);
    });

  console.log(this.subCategoriesArr[this.categoryArrIndex][clickedSubcategoryArrIndex]);
  }


  onFetchMyCollectionData(){


    //please change this, it may needs to be event emitter
    this.viewItemsService.isUserLoggedIn = true;



    this.viewItemsService.viewCollectiblesHeadline.emit('My Collection');
    this.viewItemsService.browseOrSearchItems()
    .subscribe (myCollection =>{
      this.viewItemsService.viewSelectedItems.emit(myCollection);
    });  

    console.log(this.viewItemsService.isUserLoggedIn);
    
  }

  logOut(){

    // just to change userLogin value.  needs to be changed after merge.
    this.viewItemsService.isUserLoggedIn = false;
    console.log(this.viewItemsService.isUserLoggedIn);
  }

}
