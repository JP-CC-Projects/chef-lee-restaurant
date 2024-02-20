package com.jpcc.chefleerestaurantjavaapi.service;

import com.jpcc.chefleerestaurantjavaapi.domain.Dish;
import com.jpcc.chefleerestaurantjavaapi.repository.DishRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public void deleteDish(Dish dishToDelete){
        dishRepository.delete(dishToDelete);
    }
    @Transactional
    public void saveDish(Dish dishToSave){
        dishRepository.save(dishToSave);
    }
    @Transactional
    public boolean updateDish(Dish updatedDish){
        System.out.println(updatedDish.getId());
        if (dishRepository.existsById(updatedDish.getId())){
            dishRepository.save(updatedDish);
            System.out.println(updatedDish);
            return true;
        }
        return false;
    }
}
