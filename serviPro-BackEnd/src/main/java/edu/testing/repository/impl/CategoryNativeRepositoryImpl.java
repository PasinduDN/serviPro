package edu.testing.repository.impl;

import edu.testing.dto.CategoryUpdateDto;
import edu.testing.repository.CategoryNativeRepository;
import org.hibernate.sql.Update;
import org.hibernate.sql.ast.tree.expression.Collation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository
public class CategoryNativeRepositoryImpl implements CategoryNativeRepository {

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;


//    public boolean updateCategory(CategoryUpdateDto categoryUpdateDto){
//        String categoryName = categoryUpdateDto.getCategoryName();
//        Long categoryId = categoryUpdateDto.getCategoryId();
//
//        HashMap params = new HashMap();
//        params.put("categoryName",categoryName);
//        params.put("categoryId",categoryId);
//
//
//        int status = namedParameterJdbcTemplate
//                .update("UPDATE category SET categoryName = :categoryName WHERE categoryId = :categoryId",
//                        params);
//
//        if(status >0) {
//            return true;
//        }
//        return false;
//    }

    public boolean updateCategory(CategoryUpdateDto categoryUpdateDto){
        String categoryName = categoryUpdateDto.getCategoryName();
        Long categoryId = categoryUpdateDto.getCategoryId();
        int status = namedParameterJdbcTemplate.update(
                "UPDATE category SET categoryName = :categoryName WHERE id = :categoryId",
                new MapSqlParameterSource()
                        .addValue("categoryName", categoryName)
                        .addValue("categoryId", categoryId)
        );

        return status > 0;
    }

}
