import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewItemsService } from '../viewItems.service';
import { Item } from '../ItemClass';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit, OnDestroy {

  editMode: boolean;
  formPresetValue: Item;

  addItemForm: FormGroup;
  // formSubmitted = false;
  browseMainCategories: string[];

  fineArts = [' Painting', ' Sculpture', ' Prints/Photographs/Drawings/Digital', ' European',
  ' Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian', ' Near and Middle Eastern', 
  ' American', ' Pre-20th century', ' Modern/Contemporary'];

  culture = [' Collectibles (Figurines/toys/misc.)', ' Ephemera (Autographs/Advertising/Posters/etc.)', 
  ' Numismatics/Coins and medals/Monies ', ' Military and wartime', ' Philately/Stamps',
  ' Sports', ' Political/Fraternal/Organizational', ' Breweriana/Tobacciana/Petroliana',
  ' Entertainment media (music/movies/video games)', ' Print entertainment media (Comics/Books/Newspapers)'];

  decorativeArts= [' Pre-20th century', ' Victorian Era', ' Art Deco/Art Nouveau/Arts and Crafts',
  ' Mid-Century Modern', ' Ceramics/Pottery/China/Porcelain', ' Folk Art',
  ' Textiles',' Furniture',' Architecture'];

  machinesAndTransportation = [' Cameras', ' Cars and Motorcycles', ' Aviation and Space',
  ' Nautical', ' Electronics', ' Models	(cars, trains, etc.)',
  ' Radios', ' Telephones', ' Office', ' Clocks'
];

fashionAndTextiles = [' Clothing and shoes', ' Fine Jewelry', ' Costume Jewelry', 
' Accessories (watches, handbags, pens, etc.)', ' Arms and Armor (incl. knives/swords/firearms/etc.)'];

naturalHistory = [' Animals/Zoology', ' Botany', ' Shells',
' Fossils', ' Rocks, minerals, and gems', ' Precious metals',
' Natural history collateral (books/guides/tools/etc.)', ' Medical/Scientific', ' Maps/Globes' ];

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


    this.addItemForm = new FormGroup ({
      'title': new FormControl (this.editMode ? this.formPresetValue.title : null, 
        Validators.required),
      'imagePath': new FormControl (this.editMode ? this.formPresetValue.imagePath : null, 
        Validators.required),
      'category': new FormControl (this.editMode ? this.formPresetValue.category : null, 
        Validators.required),
      'subCategory': new FormControl(this.editMode ? this.formPresetValue.subCategory : null),
      'description': new FormControl (this.editMode ? this.formPresetValue.description : null),
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
  
    if (this.editMode){
      this.viewItemsService.editedItemValue = new Item(
        this.formPresetValue.id, 
        this.addItemForm.value.title,
        this.addItemForm.value.imagePath,
        this.addItemForm.value.category,
        this.addItemForm.value.subCategory,
        this.addItemForm.value.description,
        this.addItemForm.value.creator,
        this.addItemForm.value.yearCreated,
        this.addItemForm.value.placeOfOrigin,
        this.addItemForm.value.yearAcquired,
        this.addItemForm.value.cond,
        this.addItemForm.value.mediaType,
        this.addItemForm.value.refs);

      this.viewItemsService.editItem(this.viewItemsService.fetchedItemsIndex, this.formPresetValue.id);
      console.log('edited item value', this.viewItemsService.editedItemValue);
    }else{
      this.http.post('http://localhost:8080/api/item', 
              this.addItemForm.value).subscribe( post => {console.log(post.valueOf())});
    }

    this.viewItemsService.editMode = false;

    // this.addItemForm.reset();
    // this.formSubmitted = true;
    this.router.navigate(['/member-page']);
  }

}