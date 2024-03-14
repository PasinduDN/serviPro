package edu.testing.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.testing.dto.Item;
import edu.testing.dto.ItemLoadDto;
import edu.testing.entity.ItemEntity;
import edu.testing.repository.ItemRepository;
import edu.testing.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

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
    public ItemEntity addItem(@RequestBody ItemLoadDto itemLoadDto){

        System.out.println("Add Item Start - getCategoryId" +itemLoadDto.getCategoryId() );
        System.out.println("Add Item Start - getItemCode" +itemLoadDto.getItemCode() );
        System.out.println("Add Item Start - getItemName" +itemLoadDto.getItemName() );
//        <------------ Model to Entity Convertion Manual ----------->
        ItemEntity itemEntity = new ItemEntity();

        itemEntity.setId(itemLoadDto.getId());
        itemEntity.setItemCode(itemLoadDto.getItemCode());
        itemEntity.setItemName(itemLoadDto.getItemName());
        itemEntity.setCategory(itemLoadDto.getCategory());
        itemEntity.setCategoryId(itemLoadDto.getCategoryId());
        itemEntity.setItemPrice(itemLoadDto.getItemPrice());

//        <------------ Model to Entity Convertion Auto ----------->
//        ItemEntity itemEntity = mapper.convertValue(item, ItemEntity.class);
        System.out.println("Finally Item: " + itemEntity.toString());
        return itemRepository.save(itemEntity);
    }

    @Override
    public List<ItemLoadDto> retriveItem(){

        List<ItemLoadDto> list = new ArrayList<>();
        Iterable<ItemEntity> itemList = itemRepository.findAll();
        Iterator<ItemEntity> iterator = itemList.iterator();

        while (iterator.hasNext()){
            ItemEntity entity = iterator.next();
            ItemLoadDto itemLoadDto = new ItemLoadDto();
//            Item item = new Item();
            itemLoadDto.setId(entity.getId());
            itemLoadDto.setItemCode(entity.getItemCode());
            itemLoadDto.setItemName(entity.getItemName());
            itemLoadDto.setCategory(entity.getCategory());
            itemLoadDto.setCategoryId(entity.getCategoryId());
            itemLoadDto.setItemPrice(entity.getItemPrice());
            list.add(itemLoadDto);
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

    @Override
    public List<ItemEntity> getDetailsWhenClickCategory(ItemLoadDto itemLoadDto){
        System.out.println("ItemServiceImpl -> getDetailsWhenClickCategory ");

        List<ItemEntity> list = new ArrayList<>();
        Long categoryId = itemLoadDto.getCategoryId();
        Iterable<ItemEntity> all = itemRepository.findAll();
        Iterator<ItemEntity> iterator = all.iterator();

        while (iterator.hasNext()){
            ItemEntity entity = iterator.next();
            System.out.println("Start While loop " + entity);
            System.out.println("categoryId " + categoryId);
            System.out.println("entity.getCategoryId " + entity.getCategoryId());
            if(categoryId.equals(entity.getCategoryId())){
                System.out.println("Start if" );
                list.add(entity);
            }
        }
        System.out.println("Print List"+list );
        return list;
    }
}
