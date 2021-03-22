package org.launchcode.backend.controllers;

import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    //Need to look into ResponseEntity
    //Need to look into HttpStatus
    //Work on the item.getId()
//    @PostMapping
//    public ResponseEntity<?> postItem(@RequestBody Item item, @RequestHeader HttpHeaders headers) {
//
//            itemRepository.save(item);
//
//            int id = item.getId();
//            Map<String, String> map = Collections.singletonMap("id", Integer.toString(id));
//            return new ResponseEntity<>(map, HttpStatus.CREATED);
//        }
//        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

    @GetMapping
    public Iterable<Item> list() {
        return itemRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Item item) {
        itemRepository.save(item);

    }

    @GetMapping("/{id}")
    public Optional<Item> get(@PathVariable("id") long id) {

        return itemRepository.findById(id);
    }
    }





    //TODO: processAddItemForm

    //TODO: displayViewItem

    //TODO: deleteItem

    //TODO: take a look at FE form creation page to verify keywords needed to properly render view - i.e. "title?"

