package com.jpcc.chefleerestaurantjavaapi.security;

import com.jpcc.chefleerestaurantjavaapi.dao.request.SignInRequest;
import com.jpcc.chefleerestaurantjavaapi.dao.request.SignUpRequest;
import com.jpcc.chefleerestaurantjavaapi.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);
    JwtAuthenticationResponse signin(SignInRequest request);
}