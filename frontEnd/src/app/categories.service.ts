import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})  
export class CategoriesService {

    browseMainCategories = ['Fine Arts', 'Culture', 'Decorative Arts', 'Machines and Transport', 'Fashion and Textiles', 'Natural History'];
    subCategoriesArr=[
        [' Painting', ' Sculpture', ' Photographs, Prints and Digital Art', ' European',
        ' African, Native American, Aboriginal and Asian Art', ' Middle Eastern', 
        ' American', ' Pre-20th century', ' Modern/Contemporary'],
        [' Collectibles', ' Ephemera', 
        ' Numismatics', ' Military and Wartime', ' Philately',
        ' Sports', ' Political', ' Breweriana/Tobacciana/Petroliana',
        ' Entertainment Media', ' Print Entertainment Media'],
        [' Pre-20th century', ' Victorian Era', ' Art Nouveau/Arts and Crafts',
        ' Mid-Century Modern', ' Ceramics', ' Folk Art',
        ' Textiles',' Furniture',' Architecture'],
        [' Cameras', ' Cars and Motorcycles', ' Aviation and Space',
        ' Nautical', ' Electronics', ' Models',
        ' Radios', ' Telephones', ' Office', ' Clocks'],
        [' Clothing and Shoes', ' Fine Jewelry', ' Costume Jewelry', 
        ' Accessories', ' Arms and Armor'],
        [' Zoology', ' Botany', ' Shells',
        ' Fossils', ' Minerals and Gems', ' Precious Metals',
        ' Natural History Collateral', ' Medical and Scientific', ' Maps and Globes' ]
      ];
}