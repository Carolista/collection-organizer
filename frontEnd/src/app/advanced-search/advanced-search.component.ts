import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewItemsService } from '../viewItems.service';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {editMode: boolean;

  advancedSearch: FormGroup;

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
      'category': new FormControl (null),
      'subCategory': new FormControl(null),
      'creator': new FormControl (null),
      'yearCreated': new FormControl (null),
      'placeOfOrigin': new FormControl(null),
      'yearAcquired': new FormControl(null),
      'cond': new FormControl (null),
      'mediaType': new FormControl (null),
      'refs': new FormControl (null)
    });
    
  }

  ngOnDestroy(){
    
  }


  onSubmit(){

      // this.viewItemsService.fetchedItems.splice(this.viewItemsService.fetchedItemsIndex,1,this.viewItemsService.editedItemValue);
      
      this.viewItemsService.fetchOrbrowseOrSearchItems().subscribe (myCollection =>{
      this.viewItemsService.viewSelectedItems.emit(myCollection);
        });

      this.http.post('http://localhost:8080/api/item', 
              this.advancedSearch.value).subscribe( post => {console.log(post.valueOf())});

      this.viewItemsService.fetchedItems.push(this.advancedSearch.value);
      this.viewItemsService.fetchOrbrowseOrSearchItems().subscribe(
        fetchedItems =>{
          this.viewItemsService.fetchedItems = fetchedItems;
        }
      );

    //add logic to enter url link and params
    this.viewItemsService.fetchOrbrowseOrSearchItems().subscribe (mySearch =>{
      //rework this function to save in the local array/ search through array for other fields
    this.viewItemsService.viewSelectedItems.emit(mySearch);
    });
    
    this.router.navigate(['/member-page']);
    
  }



}
