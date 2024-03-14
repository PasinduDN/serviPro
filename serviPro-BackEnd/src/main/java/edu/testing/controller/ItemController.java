package edu.testing.controller;
import edu.testing.dto.Item;
import edu.testing.dto.ItemLoadDto;
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

    @PostMapping("/addItem")
    public ItemEntity addItem(@RequestBody ItemLoadDto itemLoadDto) throws InterruptedException {
        System.out.println("Received item: " + itemLoadDto.toString());
        return itemService.addItem(itemLoadDto);

    }

    @PatchMapping("/updateItem")
    public ItemEntity updateItem(@RequestBody ItemLoadDto itemLoadDto) throws InterruptedException {
        Thread.sleep(3000);
        return itemService.addItem(itemLoadDto);
    }

    @GetMapping("/getItem")
     public List<ItemLoadDto> getItems(){
        return itemService.retriveItem();
    }

    @PostMapping("/getItemList")
    public List<ItemEntity> getItenList(@RequestBody ItemLoadDto itemLoadDto){
        System.out.println("ItemController -> GetMapping -> getItenList");
        return itemService.getDetailsWhenClickCategory(itemLoadDto);
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
