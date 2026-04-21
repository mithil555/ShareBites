package com.Food_Sharing.app.controller;


import com.Food_Sharing.app.model.CategoryModel;
import com.Food_Sharing.app.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/food")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<CategoryModel> getAllCategory(){
        return categoryService.getAllCategory();
    }

    @PostMapping
    public CategoryModel saveCategory(@RequestBody CategoryModel categoryModel){
        return categoryService.saveAllCategory(categoryModel);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable int id){
        categoryService.deleteAllCategory(id);
    }
}
