import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})  
export class CategoriesService {

    browseMainCategories = ['Fine Arts', 'Culture', 'Decorative Arts', 'Machines & Transport',
    'Fashion & Textiles', 'Natural History'];
    subCategoriesArr=[
        [' Painting', ' Sculpture', ' Photographs, Prints & Digital Art', ' European',
        ' African, Native American, Aboriginal & Asian Art', ' Middle Eastern', 
        ' American', ' Pre-20th century', ' Modern/Contemporary'],
        [' Collectibles', ' Ephemera', 
        ' Numismatics', ' Military & Wartime', ' Philately',
        ' Sports', ' Political', ' Breweriana/Tobacciana/Petroliana',
        ' Entertainment Media', ' Print Entertainment Media'],
        [' Pre-20th century', ' Victorian Era', ' Art Nouveau/Arts & Crafts',
        ' Mid-Century Modern', ' Ceramics', ' Folk Art',
        ' Textiles',' Furniture',' Architecture'],
        [' Cameras', ' Cars & Motorcycles', ' Aviation & Space',
        ' Nautical', ' Electronics', ' Models',
        ' Radios', ' Telephones', ' Office', ' Clocks'],
        [' Clothing & Shoes', ' Fine Jewelry', ' Costume Jewelry', 
        ' Accessories', ' Arms & Armor'],
        [' Zoology', ' Botany', ' Shells',
        ' Fossils', ' Minerals & Gems', ' Precious Metals',
        ' Natural History Collateral', ' Medical & Scientific', ' Maps & Globes' ]
      ];
}