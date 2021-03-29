package org.launchcode.backend.models.data;


import org.launchcode.backend.models.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
//@Transactional
public interface ItemRepository extends CrudRepository <Item, Long>{

    void deleteEmployeeById(Long id);
}
