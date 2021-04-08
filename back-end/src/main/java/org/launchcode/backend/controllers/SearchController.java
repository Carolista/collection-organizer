package org.launchcode.backend.controllers;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class SearchController {

    @Autowired
    public ItemRepository itemRepository;
    private Object Item;

    public SearchController(){

    }


//Anya has hers set to /api/item, should mine be at this location too?

@GetMapping("/search")
    public String search (@Param("keyword") String keyword) {   //@Param set to value instead of keyword?

        List<Item> searchResult = itemRepository.search(keyword);
        if (searchResult.equals("all") || searchResult.equals("")) {
            Item = itemRepository.findAll();
        } else if (searchResult.equals("keyword")) {
            Item = itemRepository.search(keyword);
        }
           return "searchResult";
        }



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

