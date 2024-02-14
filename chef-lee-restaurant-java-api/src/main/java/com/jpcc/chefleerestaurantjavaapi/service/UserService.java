package com.jpcc.chefleerestaurantjavaapi.service;
import com.jpcc.chefleerestaurantjavaapi.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService {
    UserDetailsService userDetailsService();
    List<User> findAll();
}