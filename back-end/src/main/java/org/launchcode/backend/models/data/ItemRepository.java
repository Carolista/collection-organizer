package org.launchcode.backend.models.data;


import org.launchcode.backend.models.Item;
import org.launchcode.backend.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
//@Transactional
public interface ItemRepository extends CrudRepository <Item, Long>{

    void deleteItemById(Long id);

    Iterable<Item> findByUser(User user);

//    Iterable<Item> findByAssociatedUser(Long associatedUser);
}
