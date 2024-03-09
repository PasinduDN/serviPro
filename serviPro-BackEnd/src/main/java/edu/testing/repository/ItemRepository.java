package edu.testing.repository;

import edu.testing.entity.ItemEntity;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<ItemEntity,Long> {
}
