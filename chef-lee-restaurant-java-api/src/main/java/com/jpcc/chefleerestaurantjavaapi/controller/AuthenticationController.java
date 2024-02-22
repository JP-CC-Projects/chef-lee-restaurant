package com.jpcc.chefleerestaurantjavaapi.controller;

import com.jpcc.chefleerestaurantjavaapi.dao.request.RefreshTokenRequest;
import com.jpcc.chefleerestaurantjavaapi.dao.request.SignInRequest;
import com.jpcc.chefleerestaurantjavaapi.dao.response.JwtAuthenticationResponse;
import com.jpcc.chefleerestaurantjavaapi.dao.response.TokenRefreshResponse;
import com.jpcc.chefleerestaurantjavaapi.domain.RefreshToken;
import com.jpcc.chefleerestaurantjavaapi.domain.User;
import com.jpcc.chefleerestaurantjavaapi.security.AuthenticationServiceImpl;
import com.jpcc.chefleerestaurantjavaapi.security.JwtService;
import com.jpcc.chefleerestaurantjavaapi.service.RefreshTokenService;
import com.jpcc.chefleerestaurantjavaapi.service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

//@RestController
//@RequestMapping("/api/v1/auth")
@Controller
public class AuthenticationController {
    private final AuthenticationServiceImpl authenticationService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;
    private final UserServiceImpl userService;
    
    public AuthenticationController(AuthenticationServiceImpl authenticationService,
			RefreshTokenService refreshTokenService, JwtService jwtService, UserServiceImpl userService) {
		super();
		this.authenticationService = authenticationService;
		this.refreshTokenService = refreshTokenService;
		this.jwtService = jwtService;
		this.userService = userService;
	}
    

    @GetMapping("/signin")
	public String getLogin (@ModelAttribute("user") User user) {
		return "login";
	}
    
    @GetMapping("/login-error")
    public String loginError (Model model) {
    	model.addAttribute("loginError", true);
    	return "login";
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest request, @RequestBody User user) {
    	Optional<User> existingUser = userService.findUserByEmail(user.getEmail());
    	String accessToken = jwtService.generateToken(user);
        return ResponseEntity.ok(authenticationService.signin(request));

    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@RequestBody RefreshTokenRequest request) {
      String requestRefreshToken = request.refreshToken();
      return refreshTokenService.findByToken(requestRefreshToken)
          .map(refreshTokenService::verifyExpiration)
          .map(RefreshToken::getUser)
          .map(user -> {
            String token = jwtService.generateToken(user);
            return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
          })
          .orElseThrow(() -> new IllegalStateException(
              "Refresh token " + requestRefreshToken + " is not in database!"));
    }
}