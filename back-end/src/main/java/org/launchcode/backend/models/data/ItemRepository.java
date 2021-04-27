package org.launchcode.backend.models.data;


import org.launchcode.backend.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;



@Repository

public interface ItemRepository extends CrudRepository <Item, Long> {

    void deleteItemById(Long id);


    //arrays for searchController
    public ArrayList<Item> findByTitle(String title);

    public ArrayList<Item> findByCategory(String category);

    public ArrayList<Item> findByCond(String cond);

    public ArrayList<Item> findByCreator(String creator);

    public ArrayList<Item> findByDescription(String description);

    public ArrayList<Item> findByMediaType(String mediaType);

    public ArrayList<Item> findByPlaceOfOrigin(String placeOfOrigin);

    public ArrayList<Item> findByRefs(String refs);

    public ArrayList<Item> findBySubCategory(String subCategory);

    public ArrayList<Item> findByYearAcquired(int yearAcquired);

    public ArrayList<Item> findByYearCreated(int yearCreated);

}



