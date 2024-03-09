package edu.testing.controller;
import edu.testing.dto.Item;
import edu.testing.entity.ItemEntity;
import edu.testing.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("/getItem")
    public Iterable<ItemEntity> getItem(){
        return itemService.getItem();
    }

    @PostMapping("/addItem")
    public ItemEntity addItem(@RequestBody Item item){
        return itemService.addItem(item);
    }
}
