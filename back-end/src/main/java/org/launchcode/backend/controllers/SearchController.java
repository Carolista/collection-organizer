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



//*********start search option 1****************************
//    @GetMapping
//    public ArrayList<Item> searchResult(@Param("search") String search) {   //, String title, String description) {
//        ArrayList<Item> searchResult = new ArrayList<Item>();
//        for(Item item :itemRepository.findByTitle(search.toLowerCase())) {
//            if (item != null) { //|| itemRepository.findByDescription(search.toLowerCase()) != null) {
//                searchResult.add(item);
//            }
//
//        }
//        for(Item item :itemRepository.findByDescription(search.toLowerCase())){
//            if (item != null) {
//                searchResult.add(item);
//            }
//        }
//        return searchResult;
//    }

    //Do we need to use a switch here? We need it to move to the next item in the repo if searchResult already
    // contains that item.

    @GetMapping
    public ArrayList<Item> searchResult(@Param("search") String search) {   //, String title, String description) {
        ArrayList<Item> searchResult = new ArrayList<Item>();

        for(Item item : itemRepository.findAll()) {

//            if(item != null && item.getCond().toLowerCase().contains(search.toLowerCase())){
//                searchResult.add(item);
//            }
//            if(item != null && item.getMediaType().contains(search.toLowerCase())){
//                searchResult.add(item);
//            }
            if(item != null && item.getSubCategory().toLowerCase().contains(search.toLowerCase())){
                searchResult.add(item);
            }
            if(item != null && item.getCategory().toLowerCase().contains(search.toLowerCase())){
                searchResult.add(item);
            }
            if(item != null && item.getDescription().toLowerCase().contains(search.toLowerCase())) {
                searchResult.add(item);
            }
            if(item != null && item.getTitle().toLowerCase().contains(search.toLowerCase())) {
                searchResult.add(item);
            }

        }
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
///
