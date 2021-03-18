package org.launchcode.backend.controllers;

import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


//Need to come back and find name of form
@Controller
@RequestMapping
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("add")
    public String displayAddItemForm(Model model){
        model.addAttribute(new Item());
        return "items/add";  //where is this form being routed?
    }

    //TODO: processAddItemForm
//    @PostMapping("add")//routing?
//    public String processAddItemForm(@ModelAttribute @Valid Item newItem,
//                                     Errors errors, Model model) {
//        if(errors.hasErrors()){
//            return "";
//        }
//    }


    //TODO: displayViewItem

    //TODO: deleteItem

    //TODO: take a look at FE form creation page to verify keywords needed to properly render view - i.e. "title?"
}
