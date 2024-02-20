package com.jpcc.chefleerestaurantjavaapi.controller;
import com.jpcc.chefleerestaurantjavaapi.domain.Authority;
import com.jpcc.chefleerestaurantjavaapi.domain.Dish;
import com.jpcc.chefleerestaurantjavaapi.domain.DishCategory;
import com.jpcc.chefleerestaurantjavaapi.domain.User;
import com.jpcc.chefleerestaurantjavaapi.repository.UserRepository;
import com.jpcc.chefleerestaurantjavaapi.service.DishService;
import com.jpcc.chefleerestaurantjavaapi.service.UserService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Collections;
import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminController {
    private DishService dishService;
    private UserService userService;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;


    public AdminController(DishService dishService, UserService userService, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.dishService = dishService;
        this.userService = userService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Value("${admin.firstName}")
    private String adminFirstName;
    @Value("${admin.lastName}")
    private String adminLastName;
    @Value("${admin.username}")
    private String adminEmail;
    @Value("${admin.password}")
    private String adminPassword;

    @PostConstruct // This annotation is used to create an admin user during application startup
    public void init() {
        createAdminUser();
    }

    public void createAdminUser() {
        User adminUser = new User();
        if (userRepository.findByEmail(adminEmail).isPresent()) {
            return;
        }
        adminUser.setFirstName(adminFirstName);
        adminUser.setLastName(adminLastName);
        adminUser.setEmail(adminEmail);
        adminUser.setPassword(passwordEncoder.encode(adminPassword));

        Authority adminAuth = new Authority("ROLE_ADMIN", adminUser);
        adminUser.setAuthorities(Collections.singletonList(adminAuth));
        userRepository.save(adminUser);
    }

    @GetMapping("/")
    public String home(Authentication authentication, ModelMap model) {
        List<Dish> allDishes = dishService.getAllDishes();
        model.put("allDishes", allDishes);
        model.addAttribute("categories", DishCategory.values());
        model.addAttribute("pageTitle", "Admin Home");
        System.out.println("Hello: " + authentication.getName());
        return "Welcome Admin";
    }

    @PostMapping("/updateDish")
    public ResponseEntity<?> updateDish(@RequestBody Dish updatedDish) {
        dishService.updateDish(updatedDish);
        return ResponseEntity.ok().body("Dish updated successfully");
    }
    @PostMapping("/createDish")
    public String createDish(Dish newDish,
                             RedirectAttributes redirectAttributes) {
        dishService.saveDish(newDish);
        redirectAttributes.addFlashAttribute("message", "Dish added successfully!");
        return "redirect:/admin/dashboard";
    }
    @PostMapping("/deleteDish")
    public ResponseEntity<?> deleteDish(@RequestBody Dish dishToDelete) {
        dishService.deleteDish(dishToDelete);
        return ResponseEntity.ok().body("Dish deleted successfully");
    }
    @GetMapping("/dashboard")
    public String getDashboard (ModelMap model) {
        List<Dish> allDishes = dishService.getAllDishes();
        model.put("allDishes", allDishes);
        return "dashboard";
    }
}
