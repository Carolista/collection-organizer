package org.launchcode.backend.models.data;

import org.launchcode.backend.models.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
