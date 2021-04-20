import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})  
export class CategoriesService {

    browseMainCategories = ['Fine Arts', 'Culture', 'Decorative arts', 'Machines & Transport',
    'Fashion and Textiles', 'Natural History'];
    subCategoriesArr=[
        [' Painting', ' Sculpture', ' Photographs, Prints & Digital Art', ' European',
        ' African, Native American, Aboriginal & Asian Art', ' Middle Eastern', 
        ' American', ' Pre-20th century', ' Modern/Contemporary'],
        [' Collectibles', ' Ephemera', 
        ' Numismatics', ' Military and wartime', ' Philately',
        ' Sports', ' Political', ' Breweriana/Tobacciana/Petroliana',
        ' Entertainment media', ' Print entertainment media'],
        [' Pre-20th century', ' Victorian Era', ' Art Nouveau/Arts and Crafts',
        ' Mid-Century Modern', ' Ceramics', ' Folk Art',
        ' Textiles',' Furniture',' Architecture'],
        [' Cameras', ' Cars and Motorcycles', ' Aviation and Space',
        ' Nautical', ' Electronics', ' Models',
        ' Radios', ' Telephones', ' Office', ' Clocks'],
        [' Clothing and shoes', ' Fine Jewelry', ' Costume Jewelry', 
        ' Accessories', ' Arms and Armor'],
        [' Zoology', ' Botany', ' Shells',
        ' Fossils', ' Minerals & Gems', ' Precious Metals',
        ' Natural history collateral', ' Medical & Scientific', ' Maps & Globes' ]
      ];
}