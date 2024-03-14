package edu.testing.service;

import edu.testing.dto.Item;
import edu.testing.dto.ItemLoadDto;
import edu.testing.entity.ItemEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ItemService {
    Iterable<ItemEntity> getItem();
    ItemEntity addItem(@RequestBody ItemLoadDto itemLoadDto);

    List<ItemLoadDto> retriveItem();

    boolean removeItem(Long id);

    List<ItemEntity> getDetailsWhenClickCategory(ItemLoadDto itemLoadDto);
}
