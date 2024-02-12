package com.jpcc.chefleerestaurantjavaapi.repository;

import com.jpcc.chefleerestaurantjavaapi.domain.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Long> {
    @Query
    List<Dish> findByCurrentlyOnMenu(Boolean currentlyOnMenu);

}