package edu.testing.service;
import edu.testing.dto.Category;
import edu.testing.dto.CategoryUpdateDto;
import edu.testing.entity.CategoryEntity;

import java.util.List;

public interface CategoryService {
    CategoryEntity addCategory(Category category);

    List<Category> retriveCategory();

    boolean deleteCategory(Long id);

    Iterable<CategoryEntity> getCategory();


    boolean updateCategory(CategoryUpdateDto categoryUpdateDto);
}
