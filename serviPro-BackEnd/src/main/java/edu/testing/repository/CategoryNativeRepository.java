package edu.testing.repository;

import edu.testing.dto.CategoryUpdateDto;

public interface CategoryNativeRepository {
    boolean updateCategory(CategoryUpdateDto categoryUpdateDto);
}
