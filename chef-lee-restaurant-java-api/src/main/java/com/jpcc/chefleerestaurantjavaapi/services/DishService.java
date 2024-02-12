package com.jpcc.chefleerestaurantjavaapi.services;

import com.jpcc.chefleerestaurantjavaapi.domain.Dish;
import com.jpcc.chefleerestaurantjavaapi.repository.DishRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishService {

    private final DishRepository dishRepository;
    public DishService(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    public List<Dish> getAllDishes(){
        return dishRepository.findAll();
    }
    public List<Dish> getAllCurrentDishes(){
        return dishRepository.findByCurrentlyOnMenu(true);
    }
}
