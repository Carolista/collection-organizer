package org.launchcode.backend.controllers;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    public ItemRepository itemRepository;



    public List<Item> searchResult = new ArrayList<>();


    @GetMapping("")
    public List<Item> displaySearchResults(@Param("searchTerm")String searchTerm, @Param("category")String category,
                             @Param("subCategory")String subCategory) {
        if(searchTerm == null && category == null && subCategory == null) {
            searchResult = (List<Item>) itemRepository.findAll();
        }
        if(searchTerm != null && category == null && subCategory == null) {
            searchResult = itemRepository.findBySearchTerm(searchTerm);
        }
        if(searchTerm == null && category != null && subCategory == null) {
            searchResult = itemRepository.findByCategory(category);
        }
        if(searchTerm == null && category == null && subCategory != null) {
            searchResult = itemRepository.findBySubCategory(subCategory);
        }
        if(searchTerm != null && category != null && subCategory == null) {
            searchResult = itemRepository.findBySearchTermAndCategory(searchTerm, category);
        }
        if(searchTerm == null && category != null && subCategory != null) {
            searchResult = itemRepository.findByCategoryAndSubCategory(category, subCategory);
        }
        if(searchTerm != null && category != null && subCategory != null) {
            searchResult = itemRepository.findBySearchTermAndCategoryAndSubCategory(searchTerm, category, subCategory);
        }

        return searchResult;


    }

//    public SearchController(){
//
//    }


//Anya has hers set to /api/item, should mine be at this location too?

//@GetMapping("/search")
//    public String search (@Param("keyWord") String keyWord) {   //@Param set to value instead of keyword?
//
//        List<Item> searchResult = itemRepository.search(keyWord);
//        if (searchResult.equals("all") || searchResult.equals("")) {
//            Item = itemRepository.findAll();
//        } else if (searchResult.equals("keyWord")) {
//
//            Item = itemRepository.search(keyWord);
//        }
//           return "searchResult";
//        }



}





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

