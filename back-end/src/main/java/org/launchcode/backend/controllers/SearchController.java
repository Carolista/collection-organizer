package org.launchcode.backend.controllers;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;



@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    public ItemRepository itemRepository;
    private Object Item;

    public SearchController() {

    }



    @GetMapping
    public String searchResult(@Param(value = "search") String search) {
        ArrayList<Item> searchResult = new ArrayList<Item>();
        for(Item item :itemRepository.findAll()){
            if(item.equals(search.toLowerCase())){
                searchResult.add(item);
            }
        }

        return search; // I've tried "search" "item/search" "searchResult"
    }

}
//
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

