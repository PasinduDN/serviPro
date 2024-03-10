package edu.testing.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.testing.dto.Item;
import edu.testing.entity.ItemEntity;
import edu.testing.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService{

    @Autowired
    ItemRepository itemRepository;

//        <------------ Model to Entity Convertion Auto ----------->
    @Autowired
    ObjectMapper mapper;
    @Override
    public Iterable<ItemEntity> getItem(){
        return itemRepository.findAll();
    }

    @Override
    public ItemEntity addItem(@RequestBody Item item){

//        <------------ Model to Entity Convertion Manual ----------->
//        ItemEntity itemEntity = new ItemEntity();
//        itemEntity.setItemCode(item.getItemCode());
//        itemEntity.setItemName(item.getItemName());
//        itemEntity.setCategory(item.getCategory());
//        itemEntity.setItemPrice(item.getItemPrice());

//        <------------ Model to Entity Convertion Auto ----------->
        ItemEntity itemEntity = mapper.convertValue(item, ItemEntity.class);

        return itemRepository.save(itemEntity);
    }

    @Override
    public List<Item> retriveItem(){

        List<Item> list = new ArrayList<>();
        Iterable<ItemEntity> itemList = itemRepository.findAll();
        Iterator<ItemEntity> iterator = itemList.iterator();

        while (iterator.hasNext()){
            ItemEntity entity = iterator.next();
            Item item = mapper.convertValue(entity, Item.class);
            list.add(item);
        }

        return list;
    }

    @Override
    public boolean removeItem(Long id){
        Optional<ItemEntity> itemEntityOptional = itemRepository.findById(id);

        if (itemEntityOptional.isPresent()){
            itemRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
