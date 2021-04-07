package org.launchcode.backend.controllers;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class SearchController {

    @Autowired
    public ItemRepository itemRepository;

    public SearchController(){

    }


//Anya has hers set to /api/item, should mine be at this location too?

@GetMapping("/search")
    public String search (@Param("keyword") String keyword) {   //@Param set to value instead of keyword?

        List<Item> searchResult = itemRepository.search(keyword);


        return "search_result";
}



}
