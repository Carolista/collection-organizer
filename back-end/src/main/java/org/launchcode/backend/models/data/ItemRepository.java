package org.launchcode.backend.models.data;


import org.launchcode.backend.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
//@Transactional
public interface ItemRepository extends CrudRepository <Item, Long>{

    void deleteItemById(Long id);






    @Query(value = "SELECT * FROM item WHERE "
            + "MATCH(title, category, cond, creator, description, place_of_origin, refs, sub_category) "
            + "AGAINST(?1)",
            nativeQuery = true)
    public List<Item> search(String keyword);

//    @PostMapping("/search")
//    public List<Item> getFilteredData(@RequestBody Item item) {
//        return item.getFilteredData(item);
//    }




}

