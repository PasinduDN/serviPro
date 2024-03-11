package edu.testing.repository;

import edu.testing.entity.WaiterEntity;
import org.springframework.data.repository.CrudRepository;

public interface WaiterRepository extends CrudRepository<WaiterEntity, Long> {
}
