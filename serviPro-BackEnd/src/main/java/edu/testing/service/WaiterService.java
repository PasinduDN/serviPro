package edu.testing.service;

import edu.testing.dto.Waiter;
import edu.testing.entity.WaiterEntity;

public interface WaiterService {
    WaiterEntity addWaiter(Waiter waiter);
    Iterable<WaiterEntity> getWaiter();

    boolean deleteWaiter(Long id);
}
