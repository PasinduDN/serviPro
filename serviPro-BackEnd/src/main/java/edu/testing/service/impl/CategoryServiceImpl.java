package edu.testing.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.testing.dto.Category;
import edu.testing.entity.CategoryEntity;
import edu.testing.repository.CategoryRepository;
import edu.testing.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public CategoryEntity addCategory(Category category){
        CategoryEntity categoryEntity = mapper.convertValue(category, CategoryEntity.class);
        return categoryRepository.save(categoryEntity);
    }

    @Override
    public Iterable<CategoryEntity> getCategory(){
        return categoryRepository.findAll();
    }

    @Override
    public List<Category> retriveCategory(){
        List<Category> list = new ArrayList<>();
        Iterable<CategoryEntity> categoryEntity = categoryRepository.findAll();
        Iterator<CategoryEntity> iterator = categoryEntity.iterator();

        while(iterator.hasNext()){
            CategoryEntity entity = iterator.next();
            Category category = mapper.convertValue(entity, Category.class);
            list.add(category);
        }
        return list;
    }

    @Override
    public boolean deleteCategory(Long id){
        Optional<CategoryEntity> categoryEntityOptional = categoryRepository.findById(id);

        if(categoryEntityOptional.isPresent()){
            categoryRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
