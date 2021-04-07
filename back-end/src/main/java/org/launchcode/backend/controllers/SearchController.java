package org.launchcode.backend.controllers;


import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SearchController {

    @Autowired
    public ItemRepository itemRepository;

@GetMapping("/search")
    public String search (@Param("keyword") String keyword) {
    System.out.println("Keyword: " + keyword);

    return "search_result";
}

}
