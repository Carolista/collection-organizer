import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})  
export class CategoriesService {
    browseMainCategories = ['Fine Arts', 'Culture', 'Decorative arts', 'Machines & Transport',
    'Fashion and Textiles', 'Natural History'];
    subCategoriesArr=[
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
      ];
}