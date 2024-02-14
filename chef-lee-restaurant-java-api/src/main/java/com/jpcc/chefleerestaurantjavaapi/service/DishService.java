package com.jpcc.chefleerestaurantjavaapi.service;

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
    public void deleteDish(Dish dishToDelete){
        dishRepository.delete(dishToDelete);
    }
    public void saveDish(Dish dishToSave){
        dishRepository.save(dishToSave);
    }
    public void updateDish(Dish updatedDish){
        dishRepository.save(updatedDish);
    }
}
