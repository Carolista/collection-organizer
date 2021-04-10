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

    public SearchController(){

    }


//Anya has hers set to /api/item, should mine be at this location too?

@PostMapping
//@GetMapping
    public String search (@RequestParam("keyWord") String keyWord) {   //@Param set to value instead of keyword?

        List<Item> searchResult = itemRepository.search(keyWord.toLowerCase());
        if (searchResult.equals("all") || searchResult.contains("")) {
            Item = itemRepository.findAll();
        } else if (searchResult.contains("keyWord")) {

            Item = itemRepository.search(keyWord.toLowerCase());
        }
           return "searchResult";
        }

//
// @PostMapping
//    public String displaySearchResults

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

