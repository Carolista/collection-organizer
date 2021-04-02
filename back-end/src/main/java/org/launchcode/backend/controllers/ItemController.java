package org.launchcode.backend.controllers;

import org.launchcode.backend.exception.ItemNotFoundException;
import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.nio.file.attribute.UserPrincipalNotFoundException;
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

    @GetMapping("{id}")
    public Optional<Item> get(@PathVariable("id") long id) {
        return itemRepository.findById(id);
    }


    @PutMapping("{id}") //Still editing
    public ResponseEntity<Item> updateItem(@PathVariable(value = "id") Long id,
                                           @Valid @RequestBody Item employeeDetails) {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ItemNotFoundException("An item with the ID " + id + "was not found."));

        item.setTitle(item.getTitle());
        final Item updatedItem = itemRepository.save(item);
        return ResponseEntity.ok(updatedItem);
    }

    // Alternative to saving - keeping here in case needed
//    public Item updateItem(Item item){
//        return itemRepository.save(item);
//    }

    public void deleteItem(Long id){
       itemRepository.deleteItemById(id);
    }


}




