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
//@Transactional
public interface ItemRepository extends CrudRepository <Item, Long> {

    void deleteItemById(Long id);


    // =======================goes with search option 2==================
//    List<Item> findBySearchTerm(String searchTerm);
//
//    List<Item> findByCategory(String category);
//
//    List<Item> findBySubCategory(String subCategory);
//
//    List<Item> findBySearchTermAndCategory(String searchTerm, String category);
//
//    List<Item> findByCategoryAndSubCategory(String category, String subCategory);
//
//    List<Item> findBySearchTermAndCategoryAndSubCategory(String searchTerm, String category, String subCategory);
//
//    @Query(value = "SELECT * FROM item WHERE "
//            + "MATCH(title, category, cond, creator, description, place_of_origin, refs, sub_category) "
//            + "AGAINST(?1)",
//            nativeQuery = true)
//    public List<Item> search(@Param("searchTerm") String searchTerm, @Param("category") String category,
//                             @Param("subCategory") String subCategory);


    //==============end search option 2=============




    //***********start search option 1*******************
    @Query(value = "SELECT * FROM item WHERE "
            + "MATCH(title, category, cond, creator, description, place_of_origin, refs, sub_category) "
            + "AGAINST(?1)",
            nativeQuery = true)

   public ArrayList<Item> search(String searchResult);

//********************end search option 1*******************









//    @PostMapping("/search")
//    public List<Item> getFilteredData(@RequestBody Item item) {
//        return item.getFilteredData(item);
//    }


}



