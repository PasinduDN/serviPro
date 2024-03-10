package edu.testing.service;

import edu.testing.dto.Item;
import edu.testing.entity.ItemEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ItemService {
    Iterable<ItemEntity> getItem();
    ItemEntity addItem(@RequestBody Item item);

    List<Item> retriveItem();

    boolean removeItem(Long id);
}
