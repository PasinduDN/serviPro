package edu.testing.service;

import edu.testing.dto.Item;
import edu.testing.entity.ItemEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface ItemService {
    Iterable<ItemEntity> getItem();
    ItemEntity addItem(@RequestBody Item item);
}
