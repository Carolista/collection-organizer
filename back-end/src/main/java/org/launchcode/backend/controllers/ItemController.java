package org.launchcode.backend.controllers;

import org.launchcode.backend.exception.ItemNotFoundException;
import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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

//    @GetMapping("/mycollection")
//    public Iterable<Item> getUserCollection(@PathVariable("userId") long associatedUser) {
//        return itemRepository.findByAssociatedUser(associatedUser);
//    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Item item) {
        //added based on Carrie's code below:
//        String headerAuth = headers.getFirst("Authorization");

        itemRepository.save(item);
    }

    //sample code from QuickEst (Carrie Jone's project w/similar user auth setup)
//    @PostMapping
//    @PreAuthorize("hasRole('USER')")
//    public ResponseEntity<?> postProject(@RequestBody Project project, @RequestHeader HttpHeaders headers) {

//        String headerAuth = headers.getFirst("Authorization");
//        String userName = userAuthService.getUserName(headerAuth);
//        Optional<User> userOptional = userRepository.findByName(userName);
//
//        if (userName != null && userOptional.isPresent()) {
//
//            User user = userOptional.get();
//            project.setUser(user);
//            projectRepository.save(project);
//
//            int id = project.getId();
//            Map<String, String> map = Collections.singletonMap("id", Integer.toString(id));
//            return new ResponseEntity<>(map, HttpStatus.CREATED);
//        }
//        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//    }


    @GetMapping("{id}")
    public Optional<Item> get(@PathVariable("id") long id) {
        return itemRepository.findById(id);
    }


    @PutMapping("{id}")
    public Item updateItem(@RequestBody Item item, @PathVariable("id") Long id){
        item.setTitle(item.getTitle());
        item.setImagePath(item.getImagePath());
        item.setCategory(item.getCategory());
        item.setSubCategory(item.getSubCategory());
        item.setDescription(item.getDescription());
        item.setCreator(item.getCreator());
        item.setYearCreated(item.getYearCreated());
        item.setPlaceOfOrigin(item.getPlaceOfOrigin());
        item.setYearAcquired(item.getYearAcquired());
        item.setCond(item.getCond());
        item.setMediaType(item.getMediaType());
        item.setRefs(item.getRefs());
        item.setUser(item.getUser());
//        item.setAssociatedUser(item.getAssociatedUser());

        return itemRepository.save(item);

    }

    @DeleteMapping("{id}")
    public void deleteItem(@PathVariable(value = "id") Long id){
       itemRepository.deleteById(id);

    }



}




