package com.jpcc.chefleerestaurantjavaapi.security;

import com.jpcc.chefleerestaurantjavaapi.domain.RefreshToken;
import com.jpcc.chefleerestaurantjavaapi.domain.Role;
import com.jpcc.chefleerestaurantjavaapi.domain.User;
import com.jpcc.chefleerestaurantjavaapi.service.RefreshTokenService;
import com.jpcc.chefleerestaurantjavaapi.service.UserServiceImpl;
import com.jpcc.chefleerestaurantjavaapi.util.CookieUtils;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletResponseWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserServiceImpl userService;
    private final JwtServiceImpl jwtService;
    private final RefreshTokenService refreshTokenService;
    private Logger logger = LoggerFactory.getLogger(SecurityConfig.class);
    
    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter, UserServiceImpl userService,
			JwtServiceImpl jwtService, RefreshTokenService refreshTokenService) {
		super();
		this.jwtAuthenticationFilter = jwtAuthenticationFilter;
		this.userService = userService;
		this.jwtService = jwtService;
		this.refreshTokenService = refreshTokenService;
	}

	@Value("${frontEndBaseUrl}")
	private String frontEndBaseUrl;
	@Value("${backEndBaseUrl}")
	private String backEndBaseUrl;
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

		// Frontend CORS configuration
		CorsConfiguration frontendConfig = new CorsConfiguration();
		frontendConfig.setAllowCredentials(true);
		frontendConfig.addAllowedOrigin(frontEndBaseUrl);
		frontendConfig.setAllowedMethods(Collections.singletonList("GET")); // Restrict to GET for frontend
		frontendConfig.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept"));
		frontendConfig.setMaxAge(3600L);

		// Backend CORS configuration
		CorsConfiguration backendConfig = new CorsConfiguration();
		backendConfig.setAllowCredentials(true);
		backendConfig.addAllowedOrigin(backEndBaseUrl);
		backendConfig.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE")); // Allow all for backend
		backendConfig.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept"));
		backendConfig.setMaxAge(3600L);

		// Register configurations
		source.registerCorsConfiguration("/api/**", frontendConfig); // Assuming frontend uses "/api/**"
		source.registerCorsConfiguration("/**", backendConfig); // More permissive for backend

		return source;
	}


	@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
				.csrf(AbstractHttpConfigurer::disable)
				.cors(cors -> cors.configurationSource(corsConfigurationSource()))
				.authorizeHttpRequests(request -> request
                                        .requestMatchers("/admin/**").hasRole(Role.ADMIN.name())
                                        .requestMatchers("/success").authenticated()
                                        .requestMatchers("/signin").permitAll()
                                        .anyRequest().permitAll()
                        )
                .headers(header -> header.frameOptions(frameOption -> frameOption.disable()))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .formLogin(login -> {login
		        	.loginPage("/signin")
		        	.usernameParameter("email")
		        	.successHandler(new AuthenticationSuccessHandler() {

						@Override
						public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
								Authentication authentication) throws IOException, ServletException {

							//HttpServletResponseWrapper ensures that the cookie is set only when the authentication is successful
							response = new HttpServletResponseWrapper(response);
							User user = (User) authentication.getPrincipal();
					    	String accessToken = jwtService.generateToken(new HashMap<>(), user);
					    	RefreshToken refreshToken = refreshTokenService.createRefreshToken(user.getId());

					    	Cookie accessTokenCookie = CookieUtils.createAccessTokenCookie(accessToken);
					    	Cookie refreshTokenCookie = CookieUtils.createRefreshTokenCookie(refreshToken.getToken());

					    	response.addCookie(accessTokenCookie);
							response.addCookie(refreshTokenCookie);
					    	response.sendRedirect("/admin/dashboard");
						}
					})
		        	.failureHandler(new AuthenticationFailureHandler() {

						@Override
						public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
								AuthenticationException exception) throws IOException, ServletException {

							String email = request.getParameter("email");
							String password = request.getParameter("password");
							response.sendRedirect("/error");
						}
					})
		        	.permitAll();
		        })
                .logout(logoutConfigurer -> {logoutConfigurer
                	.logoutUrl("/logout")
                	.logoutSuccessUrl("/signin")
                	// delete cookies from client after logout
                	.deleteCookies("accessToken")
                	.deleteCookies("refreshToken")
                	.deleteCookies("JSESSIONID")
                	.invalidateHttpSession(true)
                	.clearAuthentication(true);
                });
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        UserDetailsService userDetailsService = userService.userDetailsService();
        PasswordEncoder passwordEncoder = passwordEncoder();
        authProvider.setUserDetailsService(userService.userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        logger.info("UserDetailsService: " + userDetailsService);
        logger.info("PasswordEncoder: " + passwordEncoder);
        
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }
}