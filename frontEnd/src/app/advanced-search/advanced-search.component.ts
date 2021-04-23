import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewItemsService } from '../viewItems.service';
import { Item } from '../ItemClass';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {editMode: boolean;
  formPresetValue: Item;

  advancedSearch: FormGroup;
  // formSubmitted = false;
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
    this.editMode = this.viewItemsService.editMode;
    // console.log ('add item form edit mode', this.editMode)
    if (this.editMode){
      this.formPresetValue = this.viewItemsService.valuesForEditingItem;
    }else{
      this.formPresetValue = null;
    }


    this.advancedSearch = new FormGroup ({
      'title': new FormControl (this.editMode ? this.formPresetValue.title : null, 
        Validators.required),
      'category': new FormControl (this.editMode ? this.formPresetValue.category : null, 
        Validators.required),
      'subCategory': new FormControl(this.editMode ? this.formPresetValue.subCategory : null,
        Validators.required),
      'creator': new FormControl (this.editMode ? this.formPresetValue.creator : null),
      'yearCreated': new FormControl (this.editMode ? this.formPresetValue.yearCreated : null),
      'placeOfOrigin': new FormControl(this.editMode ? this.formPresetValue.placeOfOrigin : null),
      'yearAcquired': new FormControl(this.editMode ? this.formPresetValue.yearAcquired : null),
      'cond': new FormControl (this.editMode ? this.formPresetValue.cond : null),
      'mediaType': new FormControl (this.editMode ? this.formPresetValue.mediaType : null),
      'refs': new FormControl (this.editMode ? this.formPresetValue.refs : null)
    });
    
  }

  ngOnDestroy(){
    this.viewItemsService.editMode = false;
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


    this.viewItemsService.editMode = false;

    this.router.navigate(['/member-page']);

    this.viewItemsService.fetchOrbrowseOrSearchItems().subscribe (mySearch =>{

      //rework this function to save in the local array/ search through array for other fields
    this.viewItemsService.viewSelectedItems.emit(mySearch);
    });
    
  }



}
