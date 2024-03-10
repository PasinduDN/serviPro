package edu.testing.controller;
import edu.testing.dto.Item;
import edu.testing.dto.Response;
import edu.testing.entity.ItemEntity;
import edu.testing.service.ItemService;
import org.hibernate.sql.ast.tree.expression.Collation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {

    @Autowired
    ItemService itemService;

//    @GetMapping("/getItem")
//    public Iterable<ItemEntity> getItem() throws InterruptedException {
//        Thread.sleep(3000);
//        return itemService.getItem();
//    }

    @PostMapping("/addItem")
    public ItemEntity addItem(@RequestBody Item item) throws InterruptedException {
        Thread.sleep(3000);
        return itemService.addItem(item);
    }

    @GetMapping("/getItem")
     public List<Item> getItems(){
        return itemService.retriveItem();
    }

    @DeleteMapping("/{id}")
    Response removeItem(@PathVariable Long id){
        boolean isRemoved = itemService.removeItem(id);

        if (isRemoved){
            return new Response("Removed Student");
//            return Collections.singletonMap("status","removed Item");
        }else {
            return new Response(String.format("Item Id(%s) Invalid", id));
//            return Collections.singletonMap("status","Faild");
        }
    }
}
