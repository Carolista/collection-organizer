package org.launchcode.backend.controllers;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Controller
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "api/search", method = RequestMethod.POST)
//@RequestMapping("search")
public class SearchController {

    @Autowired
    public ItemRepository itemRepository;


    public SearchController() {

    }

    //================start search option 2=================


//    @GetMapping("")
//    public List<Item> displaySearchResults(@Param("searchTerm")String searchTerm, @Param("category")String category,
//                                           @Param("subCategory")String subCategory) {
//
//
//     List<Item> searchResult = new ArrayList<>();
//        if (searchTerm == null && category == null && subCategory == null) {
//            searchResult = (List<Item>) itemRepository.findAll();
//        }
//        if (searchTerm != null && category == null && subCategory == null) {
//            searchResult = itemRepository.findBySearchTerm(searchTerm);
//        }
//        if (searchTerm == null && category != null && subCategory == null) {
//            searchResult = itemRepository.findByCategory(category);
//        }
//        if (searchTerm == null && category == null && subCategory != null) {
//            searchResult = itemRepository.findBySubCategory(subCategory);
//        }
//        if (searchTerm != null && category != null && subCategory == null) {
//            searchResult = itemRepository.findBySearchTermAndCategory(searchTerm, category);
//        }
//        if (searchTerm == null && category != null && subCategory != null) {
//            searchResult = itemRepository.findByCategoryAndSubCategory(category, subCategory);
//        }
//        if (searchTerm != null && category != null && subCategory != null) {
//            searchResult = itemRepository.findBySearchTermAndCategoryAndSubCategory(searchTerm, category, subCategory);
//        }
//        return searchResult;
//
//
//    }

//}
    ////=============end of search option 2 ==========================



//*********start search option 1****************************
    @GetMapping
    public ArrayList<Item> searchResult(@Param(value = "search") String search) {
        ArrayList<Item> searchResult = new ArrayList<Item>();
        for(Item item :itemRepository.findAll()){
            if(item.getCategory().toLowerCase().equals(search.toLowerCase())){
                searchResult.add(item);
            }
        }

        System.out.println("search");
        return searchResult;
    }

    @GetMapping("/titleSearch")
    public ArrayList<Item> searchByTitle(@Param("title") String title){
       return itemRepository.findByTitle(title.toLowerCase());
    }

    @GetMapping("/categorySearch")
    public ArrayList<Item> searchByCategory(@Param("category") String category){
        return itemRepository.findByCategory(category.toLowerCase());
    }

    @GetMapping("/condSearch")
    public ArrayList<Item> searchByCond(@Param("cond") String cond){
        return itemRepository.findByCond(cond.toLowerCase());
    }

    @GetMapping("/creatorSearch")
    public ArrayList<Item> searchByCreator(@Param("creator") String creator){
        return itemRepository.findByCreator(creator.toLowerCase());
    }

    @GetMapping("/descriptionSearch")
    public ArrayList<Item> searchByDescription(@Param("description") String description){
        return itemRepository.findByDescription(description.toLowerCase());
    }

    @GetMapping("/mediaTypeSearch")
    public ArrayList<Item> searchByMediaType(@Param("mediaType") String mediaType){
        return itemRepository.findByMediaType(mediaType.toLowerCase());
    }

    @GetMapping("/placeOfOriginSearch")
    public ArrayList<Item> searchByPlaceOfOrigin(@Param("placeOfOrigin") String placeOfOrigin){
        return itemRepository.findByPlaceOfOrigin(placeOfOrigin.toLowerCase());
    }

    @GetMapping("/refsSearch")
    public ArrayList<Item> searchByRefs(@Param("refs") String refs){
        return itemRepository.findByRefs(refs.toLowerCase());
    }

    @GetMapping("/subCategorySearch")
    public ArrayList<Item> searchBySubCategory(@Param("subCategory") String subCategory){
        return itemRepository.findBySubCategory(subCategory.toLowerCase());
    }

    @GetMapping("/yearAcquiredSearch")
    public ArrayList<Item> searchByYearAcquired(@Param("yearAcquired") int yearAcquired){
        return itemRepository.findByYearAcquired(yearAcquired);
    }

    @GetMapping("/yearCreatedSearch")
    public ArrayList<Item> searchByYearCreated(@Param("yearCreated") int yearCreated){
        return itemRepository.findByYearCreated(yearCreated);
    }



}
//////*****End search option 1************************







//

////rejected code I am not ready to delete yet
//@GetMapping
////@GetMapping
//    public String search (@Param("searchTerm") String searchTerm) {
//
//      Iterable  <Item> searchResult = //new List <Item>();
////        if (searchTerm.equals("")) {
////            searchResult= itemRepository.findAll();
////        } else {
//            searchResult = itemRepository.search(searchTerm.toLowerCase());
////        }
//
//           return "searchResult";
//        }


//
// @PostMapping
//    public String displaySearchResults

//}





//
//    @RequestMapping(value="/search", method = RequestMethod.POST)
//    public default String searchResults(@RequestParam(value = "search") String search, Model model){
//        ArrayList<keyword> searchResults = new ArrayList<keyword>();
//        for(Item item : itemRepository.findAll()){
//            if(keyword.toLowerCase().contains(keyword.toLowerCase())){
//                searchResults.add(keyword);
//            }
//
//        }
//    }

