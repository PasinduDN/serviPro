package edu.testing.controller;

import edu.testing.dto.Category;
import edu.testing.entity.CategoryEntity;
import edu.testing.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/addCategory")
    public CategoryEntity addCategory(@RequestBody Category category){
         return categoryService.addCategory(category);
    }

    @GetMapping("/getCategory")
    public Iterable<CategoryEntity> getCategory(){
        return categoryService.getCategory();
    }

    @DeleteMapping("/{id}")
    public Map removeItem(@PathVariable Long id){
        boolean isRemoved = categoryService.deleteCategory(id);

        if (isRemoved){
            return Collections.singletonMap("status","removed Item");
        }else {
            return Collections.singletonMap("status","Faild");
        }
    }

    @PatchMapping("/updateItem")
    public CategoryEntity updateCategory(Category category){
        return categoryService.addCategory(category);
    }

}
