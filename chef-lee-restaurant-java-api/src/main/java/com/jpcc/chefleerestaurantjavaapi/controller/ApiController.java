package com.jpcc.chefleerestaurantjavaapi.controller;

import com.jpcc.chefleerestaurantjavaapi.domain.Dish;
import com.jpcc.chefleerestaurantjavaapi.service.DishService;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@ComponentScan
@RestController
@RequestMapping("/api")
public class ApiController {
    private DishService dishService;

    public ApiController(DishService dishService) {
        this.dishService = dishService;
    }

    @GetMapping("/getDishes")
    public ResponseEntity<List<Dish>> getDishes(){
        List<Dish> currentDishes = dishService.getAllDishes();
        return ResponseEntity.ok(currentDishes);
    }
}
