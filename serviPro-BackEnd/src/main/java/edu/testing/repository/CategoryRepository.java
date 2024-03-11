package edu.testing.repository;

import edu.testing.entity.CategoryEntity;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository <CategoryEntity, Long>{
}
