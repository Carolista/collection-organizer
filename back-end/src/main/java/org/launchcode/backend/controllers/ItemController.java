package org.launchcode.backend.controllers;

import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

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

    @PutMapping("/item/{id}") //Still editing
    public ResponseEntity<Item> updateItem(@PathVariable(value = "id") long id,
                                           @Valid @RequestBody Item employeeDetails, Errors errors) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ADD-EXCEPTION-HERE("Item not found for this id :: " + id));

        item.setTitle(item.getTitle());
        final Item updatedItem = itemRepository.save(item);
        return ResponseEntity.ok(updatedItem);
    }


}


    //TODO: processAddItemForm??

    //TODO: displayViewItem

    //TODO: deleteItem

