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
  categoryArrIndex: number;//may not need this data, but saving it just in case
  switchCase: string;
  
  subCategoriesArr = [
    [' Painting', ' Sculpture', ' Prints/Photographs/Drawings/Digital', ' European',
    ' Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian', ' Near and Middle Eastern', 
    ' American', ' Pre-20th century', ' Modern/Contemporary'],
    [' Collectibles (Figurines/toys/misc.)', ' Ephemera (Autographs/Advertising/Posters/etc.)', 
    ' Numismatics/Coins and medals/Monies ', ' Military and wartime', ' Philately/Stamps',
    ' Sports', ' Political/Fraternal/Organizational', ' Breweriana/Tobacciana/Petroliana',
    ' Entertainment media (music/movies/video games)', ' Print entertainment media (Comics/Books/Newspapers)'],
    [' Pre-20th century', ' Victorian Era', ' Art Deco/Art Nouveau/Arts and Crafts',
    ' Mid-Century Modern', ' Ceramics/Pottery/China/Porcelain', ' Folk Art',
    ' Textiles',' Furniture',' Architecture'],
    [' Cameras', ' Cars and Motorcycles', ' Aviation and Space',
    ' Nautical', ' Electronics', ' Models	(cars, trains, etc.)',
    ' Radios', ' Telephones', ' Office', ' Clocks'],
    [' Clothing and shoes', ' Fine Jewelry', ' Costume Jewelry', 
    ' Accessories (watches, handbags, pens, etc.)', ' Arms and Armor (incl. knives/swords/firearms/etc.)'],
    [' Animals/Zoology', ' Botany', ' Shells',
    ' Fossils', ' Rocks, minerals, and gems', ' Precious metals',
    ' Natural history collateral (books/guides/tools/etc.)', ' Medical/Scientific', ' Maps/Globes' ]
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
    this.categoryArrIndex=clickedArrIndex; //may not need this data but saving it just in case
    this.subCategory = this.categories[clickedArrIndex];
    this.selectedSubcategoryArr = this.subCategoriesArr[clickedArrIndex];
    this.switchCase = this.categories[clickedArrIndex];
  }

  // decided to move this to view-list-of-collections ngOnInit
  // // onFetchMyCollectionData(){
  // //   this.viewItemsService.fetchItems();
  // // }

}
