package org.launchcode.backend.controllers;

import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.net.http.HttpHeaders;
import java.util.Collections;
import java.util.Map;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    //Need to look into ResponseEntity
    //Need to look into HttpStatus
    //Work on the item.getId()
    @PostMapping
    public ResponseEntity<?> postItem(@RequestBody Item item, @RequestHeader HttpHeaders headers) {

            itemRepository.save(item);

            int id = item.getId();
            Map<String, String> map = Collections.singletonMap("id", Integer.toString(id));
            return new ResponseEntity<>(map, HttpStatus.CREATED);
        }
//        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }





    //TODO: processAddItemForm

    //TODO: displayViewItem

    //TODO: deleteItem

    //TODO: take a look at FE form creation page to verify keywords needed to properly render view - i.e. "title?"

