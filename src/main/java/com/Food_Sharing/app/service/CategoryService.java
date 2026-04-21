package com.Food_Sharing.app.service;

import com.Food_Sharing.app.model.CategoryModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    List<CategoryModel> getAllCategory();

    CategoryModel saveAllCategory(CategoryModel categoryModel);

    void deleteAllCategory(int id);
}
