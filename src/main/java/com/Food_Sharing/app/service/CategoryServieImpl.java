package com.Food_Sharing.app.service;

import com.Food_Sharing.app.model.CategoryModel;
import com.Food_Sharing.app.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServieImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<CategoryModel> getAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public CategoryModel saveAllCategory(CategoryModel categoryModel) {
        return categoryRepository.save(categoryModel);
    }

    @Override
    public void deleteAllCategory(int id) {
        categoryRepository.deleteById(id);
    }
}
