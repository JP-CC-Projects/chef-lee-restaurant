package com.jpcc.chefleerestaurantjavaapi.dao.request;

import java.util.Optional;

public record SignUpRequest(String email,
                            String password,
                            String firstName,
                            String lastName,
                            Optional<String> authorityOpt) {

}
