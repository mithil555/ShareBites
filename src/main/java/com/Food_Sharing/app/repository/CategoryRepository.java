package com.Food_Sharing.app.repository;

import com.Food_Sharing.app.model.CategoryModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryModel , Integer> {
}
