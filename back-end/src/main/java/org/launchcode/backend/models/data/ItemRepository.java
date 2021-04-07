package org.launchcode.backend.models.data;


import org.launchcode.backend.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
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

}
