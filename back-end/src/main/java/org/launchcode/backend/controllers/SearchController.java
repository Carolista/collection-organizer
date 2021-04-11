package org.launchcode.backend.controllers;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;



@Controller
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
    public String searchResult(@Param(value = "search") String search) {
        ArrayList<Item> searchResult = new ArrayList<Item>();
        for(Item item :itemRepository.findAll()){
            if(item.equals(search.toLowerCase())){
                searchResult.add(item);
            }
        }

        return "searchResult"; // I've tried "search" "item/search" "searchResult" and more
    }
//
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

