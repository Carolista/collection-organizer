import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { ViewItemsService } from '../viewItems.service';
import { CategoriesService } from '../categories.service';
import { Item } from '../ItemClass';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {editMode: boolean;

  advancedSearch: FormGroup;
  url: string;
  browseStringParams: Params;
  searchResult = [];
  localArrToBeSearched: Item[];

  browseMainCategories: string[];

  fineArts = this.categoriesService.subCategoriesArr[0];

  culture = this.categoriesService.subCategoriesArr[1];

  decorativeArts= this.categoriesService.subCategoriesArr[2];

  machinesAndTransportation = this.categoriesService.subCategoriesArr[3];

  fashionAndTextiles = this.categoriesService.subCategoriesArr[4];

  naturalHistory = this.categoriesService.subCategoriesArr[5];

  constructor(private http: HttpClient, 
              private router: Router,
              private viewItemsService: ViewItemsService,
              private categoriesService: CategoriesService) { }

  ngOnInit():void{

    this.browseMainCategories = this.categoriesService.browseMainCategories;

    this.advancedSearch = new FormGroup ({
      'title': new FormControl (null),
      'category': new FormControl (null, Validators.required),
      'subCategory': new FormControl(null),
      'keyWords': new FormControl(null),
      'creator': new FormControl (null),
      'yearCreated': new FormControl (null),
      'placeOfOrigin': new FormControl(null),
      'yearAcquired': new FormControl(null),
      'cond': new FormControl (null),
      'mediaType': new FormControl (null),
      'refs': new FormControl (null)
    });
    
  }

  searchInLocalArr(searchField:string){
    let localSearchResult = [];
    if(searchField){
      for (let i = 0; i < this.localArrToBeSearched.length; i++){
        if(this.localArrToBeSearched[i][searchField] == this.advancedSearch.value[searchField]){
          localSearchResult.push(this.localArrToBeSearched[i]);
        }
      }
    }
    return localSearchResult;
  }

  onSubmit(){
    if (this.advancedSearch.value.category){
      this.url = 'http://localhost:8080/api/search/categorySearch';
      this.browseStringParams = { params: new HttpParams ({fromString: 'category=' + this.advancedSearch.value.category}) };
    }

    if (this.advancedSearch.value.subCategory){
      this.url = 'http://localhost:8080/api/search/subCategorySearch';
      this.browseStringParams = { params: new HttpParams({fromString: 'subCategory=' + this.advancedSearch.value.subCategory}) };
    }
    if (this.advancedSearch.value.title){
      this.url = 'http://localhost:8080/api/search/titleSearch';
      this.browseStringParams = { params: new HttpParams({fromString: 'searchTerm=' + this.advancedSearch.value.title}) };
      // if (this.advancedSearch.value.title){
      //   this.browseStringParams = { params: new HttpParams({fromString: 'searchTerm=' + this.advancedSearch.value.title}) };
      // }
      // if (!this.advancedSearch.value.title){
      //   this.browseStringParams = { params: new HttpParams({fromString: 'searchTerm=' + this.advancedSearch.value.keyWords}) };
      // }
    }
    //make category a required field, add form validations
    // if (this.advancedSearch.value.creator || this.advancedSearch.value.yearCreated 
    //   || this.advancedSearch.value.placeOfOrigin || this.advancedSearch.value.condition || this.advancedSearch.value.mediaType){
    //   this.url = 'http://localhost:8080/api/search/categorySearch';
    //   this.browseStringParams = { params: new HttpParams ({fromString: 'category=' + this.advancedSearch.value.category}) };
    // }

    this.viewItemsService.fetchOrbrowseOrSearchItems(this.url, this.browseStringParams)
    .subscribe (mySearch =>{
    this.localArrToBeSearched = mySearch;
    
    // if (this.advancedSearch.value.creator){
    //   this.searchResult = this.searchInLocalArr('creator');
    // }
    this.searchResult = mySearch;
    
    console.log('emit'+this.searchResult);
    this.viewItemsService.viewSelectedItems.emit(this.searchResult);
    });

    this.router.navigate(['/member-page']);
    
  }



}
